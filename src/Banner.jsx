import React from 'react'

function Banner() {
  return (
    <div className="app-container" id="top">
        <img
          src="./images/thai-basil-2996229_1920.jpg"
          alt="thai basil chicken"
          className="img-fluid"
        />
        <div class="centered">
          <h1>
            <i>Thai Dining</i>
          </h1>
          <h3>locally sourced | Organic | Inspired</h3>
        </div>
      </div>
  )
}

export default Banner