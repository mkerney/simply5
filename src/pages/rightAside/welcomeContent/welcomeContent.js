import React, { Component } from "react"
import CompanyLogo from "../../../images/company-logo.png"

export default class WelcomeContent extends Component {
  render() {
    return (
      <div className="initial-landing">
        <div className="company-info px-12 flex items-center justify-start">
          <img
            className="company-logo h-10 w-10 rounded-full object-contain"
            alt="company-logo"
            src={CompanyLogo}
          />
          <div className="flex items-start justify-start flex-col ml-2">
            <small className="company-intro">Welcome</small>
            <h3 className="company-name leading-none font-bold">
              Thursday Coffee
            </h3>
          </div>
        </div>
        <div className="company-connect px-10 mt-5">
          <button
            type="button"
            className="btn-connect flex items-center justify-center w-full h-12 text-white rounded font-bold"
            onClick={this.props.connectToCompany}
          >
            Connect to WiFi
          </button>
        </div>
      </div>
    )
  }
}
