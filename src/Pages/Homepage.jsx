import React from 'react'
import './homepage.css'



// Start of header component
function Headersection() {
    return(
        <div className="ovearall-header-section">
            <h1>Header here</h1>
        </div>
    )
 }

// End of header section


// Start of computer section
function Computersection(){
    return(
        <div className="computer-overall-section">
            <h1>Computer section here</h1>
        </div>
    )
}
//end of computer section

// Start of result section
function Resultsection(){
    return(
        <div className="result-overall-section">
            <h1>Result section here</h1>
        </div>
    )
}
//end of result section

// Start of player section
function Playersection(){
    return(
        <div className="player-overall-section">
            <h1>Player section here</h1>
        </div>
    )
}
//end of player section
function Homepage() {


  return (
    <div className='ovearall-homepage-container'>
        <div className="header-section">
 <Headersection/>
        </div>
        <div className="computer-section">
      <Computersection/>
        </div>
      <div className="result-section">
        <Resultsection/>
      </div>
      <div className="player-section">
     <Playersection/>
      </div>
        </div>
  )
}

export default Homepage