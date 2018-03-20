import {ADD_NOTE} from '../../constants/actions'

export const addNote = (text) => {
	return {
		type: ADD_NOTE,
		text
	}
}

