import React from 'react';
import Note from './Note';

export default ( { notes, onDelete = () => {} } ) => (
	<ul>{notes.map( ({ task, id }) => 
		<li key={id}>
			<Note task={ task } onDelete={ onDelete.bind( null, id ) } />
		</li> 
	)}</ul>
);