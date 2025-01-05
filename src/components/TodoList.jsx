
import TodoListItem from "./TodoListItem";

function TodoList({todos, onRemove, onToggle}) {
    return (
        <>
            <ul>
                {todos.map((todo) => (
                    <TodoListItem key={todo.id} todo={todo} 
                        onRemove={onRemove} onToggle ={onToggle}/>
                ))}
            </ul>
        </>
    );
}

export default TodoList;