export const ADD_EVENT = "ADD_EVENT"

export const addEvent = (time, place, description) => {
	return{
		type: ADD_EVENT,
		time,
		place,
		description
	}
}