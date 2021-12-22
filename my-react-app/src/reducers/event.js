import {ADD_EVENT} from "../actions"

const events = (state=[], action) => {
	switch(action.type){
		case ADD_EVENT:
			return [...state, {time: action.time, place: action.place, description: action.description}]
		default:
			return state
	}
}

export default events