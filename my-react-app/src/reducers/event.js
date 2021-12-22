import {ADD_EVENT, REMOVE_EVENT} from "../actions"

const events = (state=[], action) => {
	switch(action.type){
		case ADD_EVENT:
			return [...state, {id: action.id ,time: action.time, place: action.place, description: action.description}]
		case REMOVE_EVENT:
			return state.filter((item) => item["id"] != action.id)
		default:
			return state
	}
}

export default events