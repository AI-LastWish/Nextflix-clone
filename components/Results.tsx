import React from 'react'
import Thumbnail from './Thumbnail'

const Results = ({ results }) => {
  return (
    <div>
      {
        results.map(result => (
          // <h1 key={result.episode_id}>{result.title}</h1>
          <Thumbnail key={result.episode_id} result={result} />
        ))
      }
    </div>
  )
}

export default Results