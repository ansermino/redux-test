import React from 'react';
import { Route, Link } from 'react-router-dom'
import NoteContainer from "./containers/notes";
require('dotenv').config()

const sampleTicket = {
	number: "12345",
	applicant: {
		applicantId: "1000889247",
		firstName: "Homer",
		lastName: "Simpson",
		email: "homerjsimpson@fox.com",
		phoneNumber: "8735558495"
	},
	comments: [1, 2]
}

const App = () => (
	<div>
		<main>
			<NoteContainer ticket={sampleTicket}/>
		</main>
	</div>
)

export default App
