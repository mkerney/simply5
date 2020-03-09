import React, { Component } from "react"
import { Link } from "gatsby"
import receipe from "../../images/coffee-big.png"

export default class TopCarousel extends Component {
  render() {
    return (
      <div className="item-carousel flex items-center justify-center px-4 relative z-10">
        <div className="flex flex-no-wrap overflow-x-auto py-10 px-2">
          <Link className="receipe-item flex-stretch" to="#">
            <img
              src={receipe}
              className="object-cover rounded-full h-10 w-10"
            />
          </Link>
          <Link className="receipe-item active flex-stretch" to="#">
            <img
              src={receipe}
              className="object-cover rounded-full h-10 w-10"
            />
          </Link>
          <Link className="receipe-item flex-stretch" to="#">
            <img
              src={receipe}
              className="object-cover rounded-full h-10 w-10"
            />
          </Link>
          <Link className="receipe-item flex-stretch" to="#">
            <img
              src={receipe}
              className="object-cover rounded-full h-10 w-10"
            />
          </Link>
          <Link className="receipe-item flex-stretch" to="#">
            <img
              src={receipe}
              className="object-cover rounded-full h-10 w-10"
            />
          </Link>
          <Link className="receipe-item flex-stretch" to="#">
            <img
              src={receipe}
              className="object-cover rounded-full h-10 w-10"
            />
          </Link>
          <Link className="receipe-item flex-stretch" to="#">
            <img
              src={receipe}
              className="object-cover rounded-full h-10 w-10"
            />
          </Link>
        </div>
      </div>
    )
  }
}
