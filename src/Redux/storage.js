import { createStore ,applyMiddleware } from "redux"
import useReducer from "./reducer/Filter.reducer";
import logger from "redux-logger";
import thunk from "redux-thunk"

// logger ko hum bator state tracking ke leye use kartay hen
// custom middle ware 
// pehley first middle ware next karey ga phir dosra middle ware chaley ga
// or hum console kr ke dekh saktey hen kon sa state call ho reha hey


// const myMidelWear = (storage)=>(next)=>(action)=>{
//     console.log(action);
//     next(action)
// }
// const storage = createStore(useReducer,{} , applyMiddleware(myMidelWear));

//=========================================
// thunk ko us waqat use kartay hen jab hamey response ka waite karwana ho







const storage = createStore(useReducer , {} , applyMiddleware(thunk));

export default storage