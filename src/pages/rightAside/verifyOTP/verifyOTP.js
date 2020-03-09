import React, { Component } from "react"
import { Link } from "gatsby"
import CountryFlag from "../../../images/country-flag.png"
import Back from "../../../images/back.png"
import Facebook from "../../../images/facebook.png"
import Instagram from "../../../images/instagram.png"
import Gmail from "../../../images/gmail.png"
import Mail from "../../../images/mail.png"

export default class VerifyOTP extends Component {
  render() {
    return (
      <div className="verify-otp-wrapper relative">
        <button
          type="button"
          className="back-section absolute appearance-none h-6 w-6 block"
          onClick={this.props.viewVerifyOTP}
        >
          <img
            src={Back}
            className="h-6 w-6 object-contain cursor-pointer"
            alt="Back"
          />
        </button>
        <h2 className="px-10 leading-snug font-bold">Verify OTP</h2>
        <p className="px-10 mt-3 text-xs opacity-75">
          This account can be used across all locations that are on Simply5 WiFi
          networks
        </p>
        <form className="phone-number-wrapper mt-12 mx-8">
          <div className="phone-number relative rounded-lg">
            <div className="country-selection absolute flex items-center justify-center pr-2">
              <img
                className="country-flag h-4 w-4 rounded-full object-contain"
                alt="Country Flag"
                src={CountryFlag}
              />
              <span className="ml-1 text-sm font-bold">+91</span>
            </div>
            <input
              className="number-input h-10 font-bold appearance-none border-none h-12 w-full py-2 pl-20 pr-10 text-sm"
              id="mobileNumber"
              type="number"
              maxLength={10}
            />
          </div>
          <div className="company-connect mt-5">
            <button
              type="button"
              className="btn-connect flex items-center justify-center w-full h-10 text-sm text-white rounded-lg font-medium"
              onClick={this.viewVerifyOTP}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}
