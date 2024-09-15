import {GET_ALL_USER ,
     ERROR , 
     LOADING
    } from "../state/filter.state";
import axios from "axios"
let payload = [];

const getAlluser = ()=>{
    return async (dispatch)=>{
      try {
        dispatch({
            type : LOADING
        
          })


        const {data} = await axios({
            method : "get",
            url : "http://localhost:3030/dummy"
          })

          payload = data

          dispatch({
            type : GET_ALL_USER,
            payload : data
          })
      } catch (error) {
        dispatch({
            type : ERROR,
            payload : error
          })
      }
    }
}


const filter =  (selectTag , e)=>{
const keyword = e.target.value
    let state = selectTag.current.value
    return {
        type : state,
        keyword : keyword,
        payload : payload
    }
}

export  {
    
     getAlluser,
     filter
}