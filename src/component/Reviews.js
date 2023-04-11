import React from 'react'
import Accordion from 'react-bootstrap/Accordion';


function Reviews({reviewData}) {
  return (
    <div className='pt-3'>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Reviews</Accordion.Header>
        <Accordion.Body>
        {
            reviewData.map(item=>(
                <>
                  <h6>{item.name} : {item.date}</h6>
                    <p>Rating {item.rating}</p>
                    <p>Comments{item.comments}</p>
                </>
              
            ))
        }
        </Accordion.Body>
      </Accordion.Item>
     
    </Accordion>
    </div>
  )
}

export default Reviews