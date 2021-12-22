import React from "react"
import {useSelector} from "react-redux"

const CalendarDate = (props) => {

	const events = useSelector(state => state.events)

	const fullDate = () => {
		if (props.date !== "-"){
			let fixed_month = (props.month.toString().length == 1)? "0"+props.month : props.month
			let fixed_date  = (props.date.toString().length == 1)? "0"+props.date : props.date
			return props.year + "-" + fixed_month + "-" + fixed_date
		} else {
			return "-"
		}
	}

	const onClickDate = () => {
		let add_event_modal = document.getElementsByClassName("add-event-modal")[0];
		add_event_modal.style.display = "block"
		let date_input = document.getElementsByClassName("add-event-modal-date-input")[0]
		date_input.value = fullDate()
	}

	const onClickEvent = (e, e_event) => {
		e.stopPropagation()
		let event_modal = document.getElementsByClassName("event-modal")[0];
		event_modal.style.display = "block";
		let event_modal_title = document.getElementsByClassName("event-modal-title")[0];
		let event_modal_time  = document.getElementsByClassName("event-modal-content-time")[0];
		let event_modal_place = document.getElementsByClassName("event-modal-content-place")[0];
		let event_modal_id = document.getElementsByClassName("event-modal-content-id")[0]
		event_modal_title.innerText = e_event.description;
		event_modal_time.innerText  = e_event.time;
		event_modal_place.innerText = e_event.place;
		event_modal_id.innerText = e_event.id;
	}

	return(
		<div className="date-area"
			onClick={() => onClickDate()}
		>
			<div>
				{props.date}
			</div>
			<div>
			{events.filter(e_event => e_event.time == fullDate())
				.map((e_event2, index) => {
					return(
						<span className="event-bar"
							onClick={(e) => onClickEvent(e, e_event2)}>
							{e_event2.description}
						</span>
					)
				})}
			</div>
		</div>
	)
}

export default CalendarDate;