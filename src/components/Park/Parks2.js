import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Modal } from 'react-bootstrap'

// note: this file is still in progress, and is not being used.
// goal will be to create modal to display full data on each park

const Parks = props => {
  const [parks, setParks] = useState([])
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    axios({
      url: 'https://prm-interview.s3.amazonaws.com/parks.json',
      method: 'GET'
    })
      .then(res => setParks(res.data))
      .catch(() => {
        props.alert({
          heading: 'Aw man!',
          message: 'Something went wrong',
          variant: 'danger'
        })
      })
  }, [])

  const parkInfo = parks.map(park => (
    <div key={park.Name}>
      <li>Area: {park.Area} </li>
      <li>Recreation Visitors: {park['Recreation visitors']}</li>
      <p>{park.Description}</p>
    </div>
  ))

  let parksJsx = ''
  if (!parks) {
    parksJsx = 'loading...'
  } else {
    parksJsx = parks.map(park => (
      <div key={park.Name}>
        <p>{park.Name}</p>
        <img src={park.Thumbnail}/>
        <li>Location: {park.Location}</li>
        <li>Est. {park.Established}</li>
        <Button variant="primary" onClick={handleShow}>
          Read more
        </Button>
        <br />
      </div>
    ))
  }

  return (
    <div>
      <h3>All U.S. National Parks:</h3>
      <ul>
        {parksJsx}
      </ul>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{parksJsx.Name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {parkInfo}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

  )
}

export default Parks
