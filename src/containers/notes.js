import React from 'react'
import { Input, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { List, Icon } from 'semantic-ui-react'
import { addNoteThunk } from "../actions/thunk/notes";

class NoteContainer extends React.Component {
	render() {
		return (
			<List divided relaxed verticalAlign='middle'>
				{this.props.notes.map((note ,i) => (<Note content={note} />))}
				<AddNote onClick={this.props.addNote} onChange/>
			</List>
		)
	}
}

class AddNote extends React.Component {
	constructor(props){
		super(props)
		this.state = {input: ''}
		this.inputChange = this.inputChange.bind(this)
	}
	inputChange(e){
		this.setState({input: e.target.value})
	}
	render () {
		return (
			<List.Item>
				<Input placeholder="New note..." onChange={this.props.onChange}/>
				<Button onClick={() => this.props.onClick(this.state.input)}><Icon name='pencil'/></Button>
			</List.Item>
		)
	}

}

const Note = (props) => {
	return(<p>props.content.note</p>)
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => bindActionCreators(() => {return (
	{
		addNote: addNoteThunk
	}
)}, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NoteContainer)