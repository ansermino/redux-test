import {addNote} from '../actionCreators/notes'

export const addNoteThunk = (text) => {
	return async dispatch => {
		dispatch(addNote(text))
	}
};