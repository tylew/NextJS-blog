import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

import Layout from '../../components/layout'

export default function FinalProject() {
  return (
    <Layout>
      <Head>
        <title>Hello</title>
      </Head>
      
      <h1>Web-Engineering Final Project Brief</h1>
      <ul>
        <li>
          <h3>What am I building?</h3>
          I am building a website which showcases various interactive HTML5 canvases which I will refer to as 'scenes' throughout this brief. There will be no real order or correlation 
          between scenes and the goal is to showcase my progress in web-development and for me to explore various related topics and show off my findings.
        </li>
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
          expanded my abilities and been able to realize more power over a DOM. 
          
          <br></br><br></br> 
          
          Except maybe not that much power... It turns out to be difficult to implement 
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
          Given the interactive nature of my website, those with accessibility concerns should avoid my website. 
          <br></br><br></br> 
          The website has mobile functionality.
        </li>
        <li>
          <h3>Site mockup</h3>
          <h4>Original layout mockup:</h4>
            
          <Image priority src="/images/mockup.jpeg" width={1000} height={600} />
          <p>This is the original implementation of my idea. I have since made further improvement to the site which can be observed in the following section. </p>
           
          <h4>Current/final layout mockup:</h4>
            
          <Image priority src="/images/final.jpeg" width={1000} height={600} />
          <p>As you can tell, major changes to the page and navigation bar have been made. 
            
            I am proud of the styling and animations of the buttons, 
            and I have added a description area which changes dependent on the current scene a user is viewing.
            <br></br><br></br> 
            I have a hunch that this is what my final implementation will closely resemble.
          </p>
        </li>
        <li>
          <h3>Individual components</h3>

          <h4>Buttons:</h4>
          <div className="btn">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
          </div>

          <h4>Text area:</h4>
          <div className="TextBoxClass">
            <h1>"Title of scene"</h1>
            <ul>
              <li>Loads title and description from JSON in project</li>
              <li>Will display scroll bar depending on y-overflow</li>
            </ul>
          </div>
        </li>
      </ul>
    </Layout>
  )
}
