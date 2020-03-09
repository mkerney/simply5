import React, { Component } from "react"
import { Link } from "gatsby"
import SmartPhone from "../../../images/smartphone.png"
import SmartTag from "../../../images/tag.png"
import SmartLogin from "../../../images/log-in.png"
import SmartKart from "../../../images/shopping-cart.png"
import SmartUser from "../../../images/user-icon.png"
import CreateAccount from "../createAccount/createAccount"

export default class HowToConnect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openCreateAccount: false,
    }
    this.viewCreateAccount = this.viewCreateAccount.bind(this)
  }

  viewCreateAccount() {
    this.setState({
      openCreateAccount: !this.openCreateAccount,
    })
  }

  render() {
    return (
      <React.Fragment>
        <div
          className={
            "htc-wrapper" +
            (this.state.openCreateAccount ? " open-account" : "")
          }
        >
          <h2 className="mt-8 px-10 leading-snug font-bold">
            How would
            <br /> you like to connect?
          </h2>
          <ul className="list-none list-inside mt-8">
            <li className="">
              <Link
                className="flex items-center justify-start px-10 h-12"
                to="#"
                onClick={this.viewCreateAccount}
              >
                <img
                  src={SmartPhone}
                  className="object-contain h-4 w-4 mr-4"
                  alt="Mobile"
                />
                <span className="text-xs">Connect to Basic WiFi</span>
              </Link>
            </li>
            <li className="">
              <Link
                className="flex items-center justify-start px-10 h-12"
                to="#"
                onClick={this.viewCreateAccount}
              >
                <img
                  src={SmartTag}
                  className="object-contain h-4 w-4 mr-4"
                  alt="Tag"
                />
                <span className="text-xs">Use Coupon</span>
              </Link>
            </li>
            <li className="">
              <Link
                className="flex items-center justify-start px-10 h-12"
                to="#"
                onClick={this.viewCreateAccount}
              >
                <img
                  src={SmartLogin}
                  className="object-contain h-4 w-4 mr-4"
                  alt="Sign Out"
                />
                <span className="text-xs">Use my Room Number</span>
              </Link>
            </li>
            <li className="">
              <Link
                className="flex items-center justify-start px-10 h-12"
                to="#"
                onClick={this.viewCreateAccount}
              >
                <img
                  src={SmartKart}
                  className="object-contain h-4 w-4 mr-4"
                  alt="Cart"
                />
                <span className="text-xs">Buy Premium WiFi</span>
              </Link>
            </li>
            <li className="employee-connect mt-2 pt-2">
              <Link
                className="flex items-center justify-start px-10 h-12"
                to="#"
                onClick={this.viewCreateAccount}
              >
                <img
                  src={SmartUser}
                  className="object-contain h-4 w-4 mr-4"
                  alt="Employee"
                />
                <span className="text-xs">I’m an employee</span>
              </Link>
            </li>
          </ul>
        </div>
        <CreateAccount
          openCreateAccount={this.state.openCreateAccount}
          viewCreateAccount={this.viewCreateAccount}
        />
      </React.Fragment>
    )
  }
}
