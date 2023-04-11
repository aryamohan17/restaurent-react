import {React,useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Reviews from './Reviews';
import Open_time from './Open_time';


function Restview() {
  const params = useParams()
  var [Allrestuarent,setRestuarent]=useState([])

  const fetchData=async()=>{
    const result = await fetch('/restaurants.json')
    result.json().then(data=>{
      setRestuarent(data.restaurants)
    })
  }
  const restaurent=Allrestuarent.find(item=>item.id==params.id)
  console.log(restaurent);
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div>

    {
      restaurent?(
         <Row>
      <Col lg={6} md={6}>
            <img className='rounded border mt-5' style={{height:'400px'}} src={restaurent.photograph}/>
        </Col>  
      <Col lg={6} md={6}>
      <ListGroup>
      <ListGroup.Item><b className='text-primary'>{restaurent.name}</b></ListGroup.Item>
      <ListGroup.Item>{restaurent.neighborhood}</ListGroup.Item>
      <ListGroup.Item>{restaurent.address}</ListGroup.Item>
      
      <ListGroup.Item>
      <Open_time timeData={restaurent.operating_hours}></Open_time>
        <Reviews reviewData={restaurent.reviews}></Reviews>
      </ListGroup.Item>

    </ListGroup>
        </Col>  

    </Row>):""
      
    }
          </div>

 
  )
}

export default Restview