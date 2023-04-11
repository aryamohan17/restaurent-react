import React ,{ useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function Open_time({timeData}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(timeData);

  return (
    <div className='pt-2'>
    <Button variant="primary" onClick={handleShow}>
        Operating hours
    </Button>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item>Monday:-  {timeData.Monday}    </ListGroup.Item>
      <ListGroup.Item>Tuesday:-  {timeData.Tuesday}   </ListGroup.Item>
      <ListGroup.Item>Wednesday:- {timeData.Wednesday}  </ListGroup.Item>
      <ListGroup.Item>Thursday:-  {timeData.Thursday}  </ListGroup.Item>
      <ListGroup.Item>Friday:-  {timeData.Friday}    </ListGroup.Item>
      <ListGroup.Item>Friday:-  {timeData.Saturday}    </ListGroup.Item>
      <ListGroup.Item>Friday:-  {timeData.Sunday}    </ListGroup.Item>


     

    </ListGroup>
        </Modal.Body>
        
      </Modal>

    </div>
  )
}

export default Open_time
