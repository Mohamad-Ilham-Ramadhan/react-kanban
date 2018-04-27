import React from 'react';
import Note from './Note';
import Editable from './Editable';

export default ( { notes, onNoteClick = () => {}, onEdit = () => {}, onDelete = () => {} } ) => (
	<ul>{notes.map( ({ task, editing, id }) => 
		<li key={id}>
			<Note onClick={onNoteClick.bind( null, id )}>
				<Editable 
					editing={editing}
					value={task}
					onEdit={onEdit.bind( null, id )}
				/>
				<button onClick={onDelete.bind( null, id )}>x</button>
			</Note>
		</li> 
	)}</ul>
);