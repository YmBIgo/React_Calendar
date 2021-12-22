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
						<span className="event-bar">
							{e_event2.description}
						</span>
					)
				})}
			</div>
		</div>
	)
}

export default CalendarDate;