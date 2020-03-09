import React, { Component } from "react"
import TopCarousel from "./topCarousel/topCarousel"
import BannerInfo from "./bannerInfo/bannerInfo"
import RightAside from "./rightAside/rightAside"
import TopSearch from "./topSearch/topSearch"

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openConnectivity: false,
    }
    this.connectToCompany = this.connectToCompany.bind(this)
  }

  connectToCompany() {
    this.setState({
      openConnectivity: !this.state.openConnectivity,
    })
  }
  render() {
    return (
      <section
        className={
          "landing-wrapper h-screen overflow-hidden relative" +
          (this.state.openConnectivity ? " open-connectivity" : "")
        }
      >
        <span className="landing-image h-screen w-screen block absolute top-0 left-0 right-0 bottom-0 z-10"></span>
        <TopCarousel />
        <TopSearch />
        <BannerInfo />
        <RightAside
          openConnectivity={this.state.openConnectivity}
          connectToCompany={this.connectToCompany}
        />
      </section>
    )
  }
}
