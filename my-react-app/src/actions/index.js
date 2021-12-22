export const ADD_EVENT = "ADD_EVENT"
export const REMOVE_EVENT = "REMOVE_EVENT";

let nextEventId = 0

export const addEvent = (time, place, description) => {
	return{
		type: ADD_EVENT,
		id: nextEventId ++,
		time,
		place,
		description
	}
}

export const removeEvent = (id) => {
	return{
		type: REMOVE_EVENT,
		id: id
	}
}