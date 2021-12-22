import React from "react"
import {useDispatch} from "react-redux"
import {removeEvent} from "../actions"

const EventModal = () => {

	const dispatch = useDispatch()

	const closeModal = () => {
		let event_modal = document.getElementsByClassName("event-modal")[0]
		event_modal.style.display = "none"
		console.log(event_modal)
	}

	const OnClickRemoveEventButton = () => {
		let event_id = parseInt(document.getElementsByClassName("event-modal-content-id")[0].innerText)
		dispatch(removeEvent(event_id))
		closeModal()
	}

	return(
		<div className="event-modal">
			<div className="modal-content">
				<div className="modal-content-title">
					<h4 className="event-modal-title"></h4>
					<span onClick={() => closeModal()}>
						x
					</span>
				</div>
				<div className="modal-content-inner">
					<div className="event-modal-content-time">
					</div>
					<div className="event-modal-content-place">
					</div>
					<div className="event-modal-content-id">
					</div>
					<button
						onClick={() => OnClickRemoveEventButton()}>
						削除する
					</button>
				</div>
			</div>
		</div>
	)
}

export default EventModal;