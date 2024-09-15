// redux local state handel
import { createStore } from "redux";
import { useState } from "react";
const User = () => {


    const [style, setStyle] = useState({
        width: "750px"
    })

    const reducer = (state = style, action) => {
        if (action.type === "small") {
            return state = { width: "220px" }
        } else if (action.type === "medium") {
            return state = { width: "520px" }
        } else if (action.type === "large") {
            return state = { width: "980px" }
        }
    }
    const store = createStore(reducer);

    store.subscribe(() => {
        const response = store.getState();
        setStyle(response)

    })

    const design = (
        <>
            <h1>reducer start</h1>
            <select onChange={(e) => store.dispatch({ type: e.target.value })}> // action dispatch
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
            <br />
            <br />
            <br />
            <img src="logo192.png" style={style} />
        </>
    );
    return design
}

export default User