import React, {useEffect, useState} from "react"
import CalendarDate from "./CalendarDate"

import "../css/calendar.css"

const CalendarComponent = (props) => {

	const useeffect_counter = 0;
	const [calendar, setCalendar] = useState([]);

	useEffect(() => {
		setCalendar(create_calendar(props.date))
	}, [props.date])

	const create_calendar = (current_date) => {
		let current_date_array = current_date.split("-")
		let current_date_year  = parseInt(current_date_array[0])
		let current_date_month = parseInt(current_date_array[1])-1
		let current_date_date  = parseInt(current_date_array[2])
		let month_first_date   = new Date(current_date_year, current_date_month, 1)
		let month_last_date    = get_month_last_date(current_date_year, current_date_month, current_date_date)
		// get amount
		let date_amount 	   = get_date_amount_from_date(month_first_date, month_last_date)
		// 
		let calendar_data 	   = get_calendar_data(month_first_date, month_last_date, date_amount)
		return calendar_data
	}

	const get_month_last_date = (year, month, date) => {
		let last_date;
		if (month == 11){
			last_date = new Date(year+1, 0, 1)
		} else {
			last_date = new Date(year, month+1, 1)
		}
		last_date.setDate(last_date.getDate()-1)
		return last_date
	}

	const get_date_amount_from_date = (first_date, last_date) => {
		let date_margin_first = first_date.getDay();
		let calendar_date 	  = last_date.getDate();
		let date_amount = date_margin_first + calendar_date;
		return (date_amount > 35)? 42 : 35
	}

	const get_calendar_data = (first_date, last_date, date_amount) => {
		// date margin first
		let date_margin_first = first_date.getDay()
		let date_margin_first_array = Array(date_margin_first).fill(0)
		// calendar
		let calendar_date_array = []
		for(var i = first_date; i <= last_date; i.setDate(i.getDate()+1)){
			let calendar_date_date = new Date(i.getFullYear(), i.getMonth(), i.getDate());
			let calendar_date_string = i.getDate()
			let calendar_date_data = {date:calendar_date_date, date_string:calendar_date_string}
			calendar_date_array.push(calendar_date_data);
		}
		// date margin last
		let date_margin_last = date_amount - date_margin_first - last_date.getDate()
		let date_margin_last_array = Array(date_margin_last).fill(0)
		//
		let calendar_array = [...date_margin_first_array, ...calendar_date_array, ...date_margin_last_array]
		return calendar_array
	}

	return(
		<div>
			<div className="calendar-area">
				<CalendarHeader />
				{calendar.map((date, index) => {
					return(
						<React.Fragment>
							{ date === 0 &&
								<CalendarDate
									date="-"
								/>
							}
							{ date["date"] !== undefined &&
								<CalendarDate
									year={date["date"].getFullYear()}
									month={parseInt(date["date"].getMonth())+1}
									date={date["date"].getDate()}
								/>
							}
						</React.Fragment>
					)
				})}
			</div>
		</div>
	)
}

const CalendarHeader = () => {
	return(
		<div className="calendar-header">
			<div className="calendar-yobi">日</div>
			<div className="calendar-yobi">月</div>
			<div className="calendar-yobi">火</div>
			<div className="calendar-yobi">水</div>
			<div className="calendar-yobi">木</div>
			<div className="calendar-yobi">金</div>
			<div className="calendar-yobi">土</div>
		</div>
	)
}

export default CalendarComponent;