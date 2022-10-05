import Head from 'next/head';

import Navbar from '../components/Navbar';
import Main from '../components/Main';
import About from '../componentss/About';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div>
      <Head>
        <title>PYYC</title>
        <meta name="description" content="Pepe Y00ts Yacht Club!" />
        <link rel="icon" href="/Logo.png" />
      </Head>
      <Navbar/>
      <Main/>
      <About/>
      <Roadmap/>
      <Team/>
      <Footer/>
    
    
    </div>
  )
}