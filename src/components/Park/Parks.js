import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Parks = props => {
  const [parks, setParks] = useState([])

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

  // note, all park fields must be capitalized => caps in JSON data
  // 'recreation visitors' has a space in JSON data, must use bracket notation

  return (
    <div>
      <h2 className="header">All U.S. National Parks:</h2>
      <div className="park-container">
        {!parks ? 'loading...'
          : <Container>
            <Row>
              {parks.map(park => (
                <Col key={park.name} lg={4} className="park-data">
                  <h5>{park.Name}</h5>
                  <img src={park.Thumbnail}/>
                  <li>Location: {park.Location}</li>
                  <li>Est. {park.Established}</li>
                  <li>Area: {park.Area}</li>
                  <li>Recreation Visitors: {park['Recreation visitors']}</li>
                  <br />
                  <p>{park.Description}</p>
                  <br />
                </Col>
              ))}
            </Row>
          </Container>
        }
      </div>
    </div>
  )
}

export default Parks
