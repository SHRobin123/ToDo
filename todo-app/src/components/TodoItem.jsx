function TodoItem({
  todo,
  toggleTodo,
  deleteTodo,
}) {
  return (
    <li className="flex justify-between p-3 border-b">

      <span
        onClick={() =>
          toggleTodo(todo.id)
        }
        className={
          todo.completed
            ? "line-through"
            : ""
        }
      >
        {todo.text}
      </span>

      <button
        onClick={() =>
          deleteTodo(todo.id)
        }
      >
        Delete
      </button>

    </li>
  );
}

export default TodoItem;