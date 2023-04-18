import React, { useState,useEffect } from 'react';
import Restcards from "./Restcards";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {restList} from '../actions/restAction';
import { useDispatch ,useSelector} from 'react-redux';
// import {restuarentList,restaurantReducer} from '../reducers/restaurentReducer';

function Restaurent() {
    // state to hold data from api
  const dispatch=useDispatch()
    // console.log(resturentList);
    useEffect(()=>{
        dispatch(restList())
    },[])
   const {restuarentList} = useSelector(state=>state.restaurantReducer)
    // console.log(result);
  return (
    <Row>
      {
        restuarentList.map(item=>(
          <Col lg={4} md={6}>
            <Restcards restData={item}></Restcards>
          </Col>

          // <h1>{item.name}</h1>
        ))
      }
    </Row>
  )
}

export default Restaurent