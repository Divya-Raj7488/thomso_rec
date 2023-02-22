import React from 'react'
import "./Mainpage.css"

const Mainpage = () => {
  return (
    <div className='mainPageContainer'>
      <div className='mainPageTextContainer'>
        <div className='foodAppText'>Food app</div>
        <h1 className='quoteContainer'>Why stay hungry when you can order from Bella Onjie</h1>
        <h4 className='downloadApp'>Download the Bella onjie's food app on</h4>
      </div>
      <div className='DownloadButtons'>
        <button className='playStore'>playstore</button>
        <button className='appStore'>app Store</button>

      </div>
    </div>
  )
}

export default Mainpage
