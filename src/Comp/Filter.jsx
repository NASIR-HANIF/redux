import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from "react-redux";
import {
    filter,
    getAlluser
}
    from "../Redux/action/filter.action"
import { useEffect, useRef } from 'react';


const Filter = () => {

    const dispatch = useDispatch();
    const response = useSelector(response => response)
    const selectOp = useRef()

    useEffect(() => {
        dispatch(getAlluser());

    }, [dispatch])


    const Tr = ({ item }) => {
        const trDesign = (
            <>
                <tr>
                    <td>{item.index + 1}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                </tr>
            </>
        );
        return trDesign
    }

    const design = (
        <>

            <div className="container">
                {
                    response && response.error ? <div className="alert alert-danger m-3">
                        <b>{JSON.stringify(response && response.error.message)}</b>
                    </div> : null

                }
                <h1 className="text-success text-center p-4">FILTER EMAIL OR NUMBER USE REDUX</h1>
                <div className="row">
                    <div className="col-md-3 ">
                        <Form.Select size="lg" ref={selectOp}>
                            <option value="FILTER_BY_EMAIL">FILTER BY EMAIL</option>
                            <option value="FILTER_BY_MOBILE">FILTER BY MOBILE</option>

                        </Form.Select>

                    </div>
                    <div className="col-md-9">
                        <Form.Control
                            type="search"
                            placeholder="Enter email or mobile"
                            className='p-2'
                            onChange={(e) => dispatch(filter(selectOp, e))}
                        />
                    </div>
                </div>
                {/* ================================================ */}

                <div align="center">
                    {
                        response && response.isLoading ?
                            <i className='fa fa-spinner mt-3 fa-spin'
                                style={{ fontSize: "35px" }}></i>
                            : null
                    }
                </div>

                <Table striped bordered hover className='mt-5 text-center'>
                    <thead>
                        <tr>
                            <th>S/NO</th>
                            <th>Email ID</th>
                            <th>MOBILE NUMBER</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            response && response.data.map((item, index) => {
                                item["index"] = index
                                return <Tr index={index} item={item} key={index} />
                            })
                        }
                    </tbody>
                </Table>

            </div>
        </>

    );
    return design
}

export default Filter