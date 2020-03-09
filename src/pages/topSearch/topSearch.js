import React, { Component } from "react"
import CompanyLogo from "../../images/company-logo.png"
import WifiLogo from "../../images/wifi-not-connected.png"

export default class TopSearch extends Component {
  render() {
    return (
      <div className="business-search absolute z-10 w-full px-6">
        <form className="shadow-md rounded-lg">
          <div className="relative">
            <img
              className="company-logo absolute h-4 w-4 rounded-full object-contain"
              alt="company-logo"
              src={CompanyLogo}
            />
            <input
              className="search-input h-10 font-medium appearance-none border-none w-full py-2 px-10 placeholder-gray-600 text-gray-900 text-xs"
              id="searchCompany"
              type="text"
              placeholder="Enter..."
              value="Thursday Coffee"
            />
            <img
              className="wifi-logo absolute h-4 w-4 rounded-full object-contain"
              alt="Wifi"
              src={WifiLogo}
            />
          </div>
        </form>
      </div>
    )
  }
}
