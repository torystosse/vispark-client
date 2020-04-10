import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
      <li key={park.Name}>
        {park.Name}
      </li>
      // console.log('parkname ', park.Name)
      // console.log('parklocation ', park.Location)
    ))
    console.log('parks are ', parks)
  }

  return (
    <div>
      <h3>All U.S. National Parks:</h3>
      <ul>
        {parksJsx}
      </ul>
      { /* // <p>{parks.name}</p>
      // <p>{parks.location}</p> */}
    </div>
  )
}

export default Parks
