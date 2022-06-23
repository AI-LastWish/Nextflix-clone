import React from 'react'
import FlipMove from 'react-flip-move'
import Thumbnail from './Thumbnail'

const Results = ({ results }) => {
  return (
    <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3
      3xl:flex flex-wrap justify-center'>
      {
        results.map(result => (
          // <h1 key={result.episode_id}>{result.title}</h1>
          <Thumbnail key={result.episode_id} result={result} />
        ))
      }
    </FlipMove>
  )
}

export default Results