import React from "react";
import PropTypes from 'prop-types'
import TodoList from "./TodoList";

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function TodoItem({todo, index, onChange}) {
    const classes = []

    if(todo.completed){
        classes.push('done')
    }

    return (
        <li style={styles.li}>
            <span className={classes.join('')}>
                <input style={styles.input} type='checkbox' onChange={()=> onChange(todo.id)}/>
                 <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
            </span>
            <button className={'rm'}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem