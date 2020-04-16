import React from 'react'

export default function ToDo(props) {
    return (
        <div className="container  todo-content">
            <div className=
                {
                props.todo.complete ? 
                "crossed" : "todo-line"
                } 
                onClick={props.toggleComplete}>
                {props.todo.text}
            </div>
            <button className="btn btn-x" onClick={props.onDelete}>x</button>
            <button className="btn" onClick={props.onEdit}>Edit</button>
         </div>
    )
}
