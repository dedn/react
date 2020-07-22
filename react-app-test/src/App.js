import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from "./Todo/TodoList";


function App() {
    const[todos, setTodos ] =  React.useState([
        {id: 1, completed: false, title: 'TestTitle0'},
        {id: 2, completed: true, title: 'TestTitle1'},
        {id: 3, completed: false, title: 'TestTitle2'}
    ])



    function toggleTodo(id) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))


    }

    return (
        <div className={'wrapper'}>
            <h1> react for test state</h1>
            <TodoList todos={todos} onToggle={toggleTodo}/> >
        </div>
    );
}

export default App;
