import React, { Component } from "react"
import { Link } from "gatsby"
import CountryFlag from "../../../images/country-flag.png"
import Back from "../../../images/back.png"
import Facebook from "../../../images/facebook.png"
import Instagram from "../../../images/instagram.png"
import Gmail from "../../../images/gmail.png"
import Mail from "../../../images/mail.png"
import VerifyOTP from "../verifyOTP/verifyOTP"

export default class CreateAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openVerifyOTP: false,
    }
    this.viewVerifyOTP = this.viewVerifyOTP.bind(this)
  }

  viewVerifyOTP() {
    this.setState({
      openVerifyOTP: !this.state.openVerifyOTP,
    })
  }
  render() {
    return (
      <React.Fragment>
        <div
          className={
            "create-account-wrapper relative" +
            (this.props.openCreateAccount ? "" : " fgdgf")
          }
        >
          <button
            type="button"
            className="back-section absolute appearance-none h-6 w-6 block"
            onClick={this.props.viewCreateAccount}
          >
            <img
              src={Back}
              className="h-6 w-6 object-contain cursor-pointer"
              alt="Back"
            />
          </button>
          <h2 className="px-10 leading-snug font-bold">
            Create
            <br /> your Account
          </h2>
          <p className="px-10 mt-3 text-xs opacity-75">
            This account can be used across all locations that are on Simply5
            WiFi networks
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
            <span className="flex-separater block my-6"></span>
            <div className="flex items-center justify-between px-2">
              <Link className="" to="#">
                <img
                  src={Facebook}
                  className="object-cover rounded-full h-8 w-8"
                />
              </Link>
              <Link className="active " to="#">
                <img
                  src={Instagram}
                  className="object-cover rounded-full h-8 w-8"
                />
              </Link>
              <Link className="" to="#">
                <img
                  src={Gmail}
                  className="object-cover rounded-full h-8 w-8"
                />
              </Link>
              <Link className="" to="#">
                <img src={Mail} className="object-cover rounded-full h-8 w-8" />
              </Link>
            </div>
            <div className="company-connect mt-5">
              <button
                type="button"
                className="btn-connect flex items-center justify-center w-full h-10 text-sm text-white rounded-lg font-medium"
                onClick={this.viewVerifyOTP}
              >
                Request OTP
              </button>
            </div>
          </form>
        </div>
        {/* <VerifyOTP
          viewVerifyOTP={this.props.viewVerifyOTP}
          openVerifyOTP={this.props.openVerifyOTP}
        /> */}
      </React.Fragment>
    )
  }
}
