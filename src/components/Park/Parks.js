import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Parks = props => {
  const [parks, setParks] = useState([])
  // const [currentPark setCurrentPark] = useState({})

  useEffect(() => {
    axios({
      url: 'https://prm-interview.s3.amazonaws.com/parks.json',
      method: 'GET'
    })
      // .then(res => console.log(res.data))
      .then(res => setParks(res.data))
      .catch(() => {
        props.alert({
          heading: 'Aw man!',
          message: 'Something went wrong',
          variant: 'danger'
        })
      })
  }, [])

  // const parksObject = parks
  // console.log('parksObject', parksObject)

  // note, all fields must be CAPITALIZED bc are caps in db

  let parksJsx = ''
  if (!parks) {
    parksJsx = 'loading...'
  } else {
    parksJsx = parks.map(park => (
      <Col key={park.Name} lg={4} className="park-data">
        <h5>{park.Name}</h5>
        <img src={park.Thumbnail}/>
        <li>Location: {park.Location}</li>
        <li>Est. {park.Established}</li>
        <li>Area: {park.Area}</li>
        <li>Recreation Visitors: {park['Recreation visitors']}</li>
        <br />
        <p>{park.Description}</p>
        <br />
        <br />
      </Col>
    ))
  }

  return (
    <div>
      <h2 className="header">All U.S. National Parks:</h2>
      <div className="park-container">
        <Container className="park-container">
          <Row>
            {parksJsx}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Parks
