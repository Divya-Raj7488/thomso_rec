import React from 'react'
import "./Mainpage.css"

const ImageCard = (props) => {
  return (
      <img src={props.url} alt="" />
  )
}
const InfoCard = (props) => {
    return (
        <div class="d-flex flex-column justify-content-center" id="bellaOnjieLoginInfo">
        <h3 class="text-danger mb-0.5">{props.Heading}</h3>
        <h2 class="mb-1">{props.SubHeading}</h2>
        <h4 class="text-muted">{props.Description}</h4>
        </div>
    )
  }

export {InfoCard,ImageCard}
