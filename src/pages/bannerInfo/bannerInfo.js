import React, { Component } from "react"
import GiftOffer from "../../images/gift.png"

export default class BannerInfo extends Component {
  render() {
    return (
      <div className="banner-wrapper mt-5 px-12 relative z-10">
        <img
          className="object-contain h-6 w-6 mb-4"
          src={GiftOffer}
          alt="Gift"
        />
        <h5 className="text-white font-bold text-lg w-32 leading-tight">
          It’s our 10th Anniversary!
        </h5>
        <span className="block bg-white mt-3 mb-4 h-1 w-8"></span>
        <p className="text-white text-xs opacity-75 w-48">
          We’re celebrating our 10th anniversary, and we'd like to thank you for
          making our journey so delightful
        </p>
      </div>
    )
  }
}
