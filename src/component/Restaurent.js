import React, { useState,useEffect } from 'react';
import Restcards from "./Restcards";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Restaurent() {
    // state to hold data from api
    var [resturentList,setRestuarent]=useState([])
    // function 
    const fetchData=async()=>{
      const result = await  fetch('/restaurants.json')
      result.json().then(
        data =>{
            setRestuarent(data.restaurants)
        }
      )
    }
    console.log(resturentList);
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <Row>
      {
        resturentList.map(item=>(
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