import {ADD_NOTE} from "../constants/actions";

const defaultState = {
	selectedTicket: {
		ticketNumber: 12345,
		notes: [
			{
				text: "Hello, world.",
				resolved: false
			}
		]
	}
}

const notes = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_NOTE:
			return {
				...state,
				selectedTicket: {
					...state.selectedTicket,
					notes: [...state.selectedTicket.notes, createNote(action.text)]
				}
			}

		/*case DELETE_NOTE:
			return {
				...state,
				//TODO: Use [...fruits.slice(0, 2), ...fruits.slice(3)]
				selectedTicket: state.selectedTicket.notes.remove(action.index)
			};

		case RESOLVE_NOTE: {
			return {
				...state,
				selectedTicket: {
					...state.selectedTicket,
					notes: resolveNote(state.selectedTicket.notes, action.index)
				}
			}
		}*/

		default:
			return state
	}
}

const createNote = (text) => {
	return {
		text,
		created: new Date(),
		resolved: false
	}
}

const resolveNote = (notes, index) => {
	return (
		//TODO: Will this return copy?
		notes[index].resolved = true
	)
}

export default notes






