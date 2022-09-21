
function App() {
  const todos = ["tom", "jerry", "monkey"]

  return (
    <div >
      <ul>
        {
          todos.map(todo => <li>{todo}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
