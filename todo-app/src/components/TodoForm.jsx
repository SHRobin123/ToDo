function TodoForm({
  addTodo,
  inputValue,
  setInputValue,
}) {
  return (
    <form
      onSubmit={addTodo}
      className="flex gap-2 p-4"
    >
      <input
        type="text"
        value={inputValue}
        onChange={(e) =>
          setInputValue(e.target.value)
        }
        placeholder="Add Task"
        className="border p-2 flex-1"
      />

      <button
        className="bg-indigo-600 text-white px-4"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;