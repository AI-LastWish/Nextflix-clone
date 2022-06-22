import React from 'react'

const Results = ({ results }) => {
  return (
    <div>
      {
        results.map(result => (
          <h1>{result.original_title}</h1>
        ))
      }
    </div>
  )
}

export default Results