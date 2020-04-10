import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import Layout from '../Shared/Layout'

// note: this file is not being used.

const Park = props => {
  const [park, setPark] = useState(null)

  useEffect(() => {
    axios(`${apiUrl}/prompts/${props.match.params.id}`)
      .then(res => setPark(res.data.park))
      .then(() => {
        props.alert({
          message: 'You\'ve selected a park',
          variant: 'success'
        })
      })
      .catch(() => {
        props.alert({
          heading: 'Aw man!',
          message: 'Something went wrong',
          variant: 'danger'
        })
      })
  }, [])

  if (!prompt) {
    return <p>Loading...</p>
  }

  return (
    <Layout>
      <h4>Park</h4>
      <p>{park.name}</p>
      <p>Location: {park.location}</p>
      <Link to="/" className='back-link'>Back</Link>
    </Layout>
  )
}

export default Park
