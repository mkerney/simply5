import React, { Component } from "react"
import SimplyLogo from "../../images/simply-logo.png"
import WelcomeContent from "./welcomeContent/welcomeContent"
import HowToConnect from "./howToConnect/howToConnect"

export default class RightAside extends Component {
  render() {
    return (
      <aside className="aside-section pt-12 pb-16 absolute inset-x-0 z-10 w-screen bg-white overflow-auto">
        {/* Sponsor Text Starts */}
        <div className="company-sponsor fixed">
          <small className="flex items-center leading-none justify-center">
            This location is on
            <img
              className="object-contain ml-1"
              src={SimplyLogo}
              alt="Simply5"
            />
          </small>
        </div>
        {/* Sponsor Text Ends */}

        {this.props.openConnectivity ? (
          ""
        ) : (
          <WelcomeContent connectToCompany={this.props.connectToCompany} />
        )}

        {this.props.openConnectivity ? <HowToConnect /> : ""}
      </aside>
    )
  }
}
