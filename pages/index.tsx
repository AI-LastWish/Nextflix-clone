import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Netflix 2.0</title>
        <meta name="description" content="Netflix 2.0 created by Tom" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {/* Nav bar */}
      <Nav />

      {/* Result */}
    </div>
  )
}

export default Home
