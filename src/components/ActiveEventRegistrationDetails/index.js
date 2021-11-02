import {Component} from 'react'

import './index.css'

class ActiveEventRegistrationDetails extends Component {
  renderRegisteredView = () => (
    <div className="registration-details-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-view-image"
      />
      <h1 className="msg">You have already registered for the event</h1>
    </div>
  )

  renderYetToRegisteredView = () => (
    <div className="registration-details-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-registered-view-image"
      />
      <p className="msg">
        A live performance brings so much to your relationship with dance.
        seeing live dance can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="button" type="button">
        Register Here
      </button>
    </div>
  )

  renderRegistrationClosedView = () => (
    <div className="registration-details-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="msg">Registrations Are Closed Now!</h1>
      <p className="suggestion">
        Stay tuned. We will reopen <br /> the registrations soon!
      </p>
    </div>
  )

  renderNoActiveEventView = () => (
    <div className="registration-details-container">
      <p className="msg">Click on an event, to view its registration details</p>
    </div>
  )

  render() {
    const {registrationStatus} = this.props
    switch (registrationStatus) {
      case 'REGISTERED':
        return this.renderRegisteredView()
      case 'YET_TO_REGISTER':
        return this.renderYetToRegisteredView()
      case 'REGISTRATIONS_CLOSED':
        return this.renderRegistrationClosedView()
      default:
        return this.renderNoActiveEventView()
    }
  }
}

export default ActiveEventRegistrationDetails
