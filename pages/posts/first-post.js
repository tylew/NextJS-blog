import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Hello</title>
      </Head>
      
      <h1>Web-Engineering Final Project Brief</h1>
      <ul>
        <li>
          <h3>Why am I building this?</h3>
          This is my final project for the Web-Engineering (CPSC 458) Course at Chapman University taught by
          Murphy Studebaker. The purpose of the project is to showcase web design principles we have learned
          over the course of the semester. While we have primarily worked with React.js, the floor
          was open to creativity on the final project and I decided to explore the creative canvas-based 
          javascript library, <a target="_blank" rel="noopener noreferrer" href="https://p5js.org">p5.js</a>. 
        </li>
        <li>
          <h3>What will a user gain from using this site?</h3>
          Good question... I like to think a user will gain enjoyment in interacting with my website. However, 
          in reality I think I will be the one that gains the most from this project in the sense that I have
          expanded my abilities and been able to realize more power over an HTML page. <br></br><br></br> Except maybe not that much power... It turned out to be very difficult to implement 
          p5.js scripts into a React page, I hope to explore other libraries and visual javascript programming
          in the future which may be easier to incorporate into React.
        </li>
        <li>
          <h3>Data storage</h3>
          The site keeps the current scene persisted 
          in local storage. Not only does this fulfil the data 
          storage requirement of the project, but I like the 
          ability for the user to refresh the page and remain
          on the same interactive experience. Additionally, I had difficulties 
          with getting React to interact with my p5.js sketches
          and local storage became a straightforward intermediary
          to transact information.
        </li>
        <li>
          <h3>Accessibility concerns</h3> 
          Given the interactive nature of my website, those with accessibility concerns should avoid my website...
        </li>
        <li>
          <h3>Site mockup</h3>
          Include a detailed mockup of each page of your web app, for both mobile and desktop screens.
        </li>
        <li>
          <h3>individual components</h3>
          Include a list of each individual component your web app requires, its function, and what each component will take in as props.
        </li>
      </ul>
    </Layout>
  )
}
