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
      .then(res => setParks(res.data))
      .then(res => console.log(res))
      .catch(() => {
        props.alert({
          heading: 'Aw man!',
          message: 'Something went wrong',
          variant: 'danger'
        })
      })
  }, [])

  return (
    <div>
      <p>{parks.name}</p>
      <p>{parks.location}</p>
    </div>
  )
}

export default Parks
