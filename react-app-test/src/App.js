import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";



function App() {
    const [todos, setTodos] = React.useState([
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

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title) {
        setTodos(todos.concat([{
            title,
            id: Date.now(),
            completed: false
        }]))
    }

//Context.Provider для передачи сквозь компоненты.  Можно передавать все что угодно
    return (
        <Context.Provider value={{removeTodo}}>
            <div className={'wrapper'}>
                <h1> react for test state</h1>
                <AddTodo onCreate={addTodo}/>
                {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : <p>No Todos</p>}

            </div>
        </Context.Provider>
    );
}

export default App;
