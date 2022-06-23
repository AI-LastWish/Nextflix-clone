import React from 'react'
// import FlipMove from 'react-flip-move'
import Thumbnail from './Thumbnail'

// @ts-ignore
const Results = ({ results }) => {
  return (
    <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3
      3xl:flex flex-wrap justify-center'>
      {
        // @ts-ignore
        results.map(result => (
          // <h1 key={result.episode_id}>{result.title}</h1>
          // @ts-ignore
          <Thumbnail key={result.episode_id} result={result} />
        ))
      }
    </div>
  )
}

export default Results