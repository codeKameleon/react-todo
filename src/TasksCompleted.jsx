import React from 'react';
import Todo from './Todo';

const TasksCompleted = ({todos, renderItem}) => {
    return (
        <div>
            <h2>Tasks completed</h2>
            <ul>
                {todos.map(todo => renderItem(todo))}
            </ul>
        </div>

     );
}

export default TasksCompleted;