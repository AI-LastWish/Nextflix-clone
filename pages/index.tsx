import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/swapRequests'

const Home: NextPage = ({ results }) => {
  return (
    <div>
      <Head>
        <title>Netflix 2.0</title>
        <meta name="description" content="Netflix 2.0 created by Tom" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Results results={results}/>

    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const genre = context.query.genre;
  console.log('genre', genre)

  const request = await fetch(
    `https://swapi.dev/api/${
      // @ts-ignore
      requests[genre]?.url || requests.fetchFilms.url
    }`
  ).then(res => res.json())
  return {
    props: {
      results: request.results
    }
  }
}
