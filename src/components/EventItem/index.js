import './index.css'

const EventItem = props => {
  const {eventItemDetails, getRegistrationStatus} = props
  const {id, imageUrl, name, location} = eventItemDetails

  const onClickEvent = () => {
    getRegistrationStatus(id)
  }

  return (
    <li className="list-item">
      <button type="button" className="event-item" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className="event-image" />
        <div className="event-details">
          <p className="event-name">{name}</p>
          <p className="event-location">{location}</p>
        </div>
      </button>
    </li>
  )
}

export default EventItem
