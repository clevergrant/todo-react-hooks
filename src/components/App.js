import React, { useState } from 'react'

import { SApp, STodo, STodoList } from './style'

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
	return (
		<STodo isCompleted={todo.isCompleted}>
			{todo.text}
			<div>
				<button onClick={() => completeTodo(index)}>Complete</button>
				<button onClick={() => removeTodo(index)}>x</button>
			</div>
		</STodo>
	)
}

function TodoForm(props) {

	const [value, setValue] = useState(``)

	const handleSubmit = e => {
		e.preventDefault()

		if (!value) return

		props.addTodo(value)

		setValue(``)
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				className='input'
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
		</form>
	)

}

const App = () => {

	const [todos, setTodos] = useState([
		{
			text: `Learn about React`,
			isCompleted: false
		},
		{
			text: `Meet friend for lunch`,
			isCompleted: false
		},
		{
			text: `Build really cool todo app`,
			isCompleted: false
		}
	])

	const addTodo = text => {
		const newTodos = [...todos, { text }]
		setTodos(newTodos)
	}

	const completeTodo = index => {
		const newTodos = [...todos]
		newTodos[index].isCompleted = true
		setTodos(newTodos)
	}

	const removeTodo = index => {
		const newTodos = [...todos]
		newTodos.splice(index, 1)
		setTodos(newTodos)
	}

	return <SApp>
		<STodoList>
			{todos.map((todo, index) =>
				<Todo
					key={index}
					index={index}
					todo={todo}
					completeTodo={completeTodo}
					removeTodo={removeTodo}
				/>)}
			<TodoForm addTodo={addTodo} />
		</STodoList>
	</SApp>

}

export default App