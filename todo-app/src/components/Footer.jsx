function Footer({
  stats,
  clearCompleted,
}) {
  return (
    <>
      {stats.completed > 0 && (
        <div className="p-4">
          <button
            onClick={clearCompleted}
            className="text-red-500"
          >
            Clear Completed (
            {stats.completed})
          </button>
        </div>
      )}
    </>
  );
}

export default Footer;