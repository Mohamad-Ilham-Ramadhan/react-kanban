import React, { Component } from 'react';
import uuid from 'uuid';
import Notes from './Notes';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: [
				{
					id: uuid.v4(),
					task: 'Learn react'
				},
				{
					id: uuid.v4(),
					task: 'Do Fasting and Salah'
				}
			]
		}
	}

	render() {
		const { notes } = this.state;

		return (
		<div>
			<button onClick={this.addNote}>+</button>
			<Notes notes={notes} />
		</div>
		);
	}

	addNote = () => {
		this.setState( (prevState) => {
			return {
				notes: prevState.notes.concat( {
					id: uuid.v4(),
					task: 'new task'
				} )	
			}
		} );
	}
}

export default App;
