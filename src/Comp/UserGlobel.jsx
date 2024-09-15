// globel data access ke leye selecter

import { useSelector ,useDispatch } from "react-redux"; 

const UserGlobel = () => {
// useDispatch action dispatch ke kam aata hey

const setAction = useDispatch();


//globel data access function
    const response = useSelector(response => response)
    const design = (
        <>
        <h1>user compunent</h1>
            <h2>{response && response.message}</h2>
            <button onClick={()=>setAction({type : "testing"})}>Click me</button>
        </>
    );
    return design;
}

export default UserGlobel