import React from 'react';

/*
TODO:
	Textbox and new TODO
	Add checkbox to newly created TODO
	Automatically add to item count and unchecked count
	Decrease unchecked count (but not item count) when checkbox is checked
	Increase unchecked count if checkbox is unchecked
	On double click, edit text in TODO
	Press enter while editing to confirm that you're done editing.
*/

const newTodo = () => {
	return <p>I am {Math.floor((Math.random() + 1) * 10)}</p>
};

export default newTodo;