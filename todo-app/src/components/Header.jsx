function Header({ stats }) {
  return (
    <div className="bg-indigo-600 text-white p-5">
      <h1 className="text-2xl font-bold">
        My Tasks
      </h1>

      <p>
        {stats.active} tasks remaining
      </p>
    </div>
  );
}

export default Header;