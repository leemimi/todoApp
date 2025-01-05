function TodoListItem({todo, onRemove, onToggle}) {
    return (
        <div>
            <input type="checkbox" onChange={() => onToggle(todo.id)} checked={todo.checked}/>
            <span>{todo.id}. {todo.text}</span>
            <button onClick={() => onRemove(todo.id)}>삭제</button>
        </div>
    );
}



export default TodoListItem;