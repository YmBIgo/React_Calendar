import React from "react"
import {addEvent} from "../actions"
import {useDispatch, useSelector} from "react-redux"

import "../css/modal.css"

const AddEventModal = (props) => {

	const dispatch = useDispatch()
	const events = useSelector(state => state.events)

	const closeModal = () => {
		let add_event_modal = document.getElementsByClassName("add-event-modal")[0];
		add_event_modal.style.display = "none"
	}

	const onEventSaveButtonClicked = () => {
		let time = document.getElementsByClassName("add-event-modal-date-input")[0]
		let place = document.getElementsByClassName("add-event-modal-place-input")[0]
		let description = document.getElementsByClassName("add-event-modal-description-input")[0]
		//
		dispatch(addEvent(time.value, place.value, description.value))
		closeModal()
		time.value = ""; place.value = ""; description.value = "";
	}

	return(
		<div className="add-event-modal">
			<div className="modal-content">
				<div className="modal-content-title">
					<h4>予定を追加</h4>
					<span onClick={() => closeModal()}>
						x
					</span>
				</div>
				<div className="modal-content-inputs">
					<label>日時</label>
					<input className="add-event-modal-date-input"
						   type="date"
						   value="" />
					<br />
					<label>場所</label>
					<input type="text"
						   className="add-event-modal-place-input" />
					<br />
					<label>説明</label>
					<input type="text"
						   className="add-event-modal-description-input" />
					<br />
					<button
						onClick={onEventSaveButtonClicked}>
						保存
					</button>
				</div>
			</div>
		</div>
	)
}

export default AddEventModal;