function FilterButtons({
  filter,
  setFilter,
}) {
  return (
    <div className="flex">
      {["all", "active", "completed"].map(
        (item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`flex-1 p-2 ${
              filter === item
                ? "bg-indigo-500 text-white"
                : ""
            }`}
          >
            {item}
          </button>
        )
      )}
    </div>
  );
}

export default FilterButtons;