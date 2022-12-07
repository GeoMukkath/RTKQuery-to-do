// add imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useGetTodosQuery } from "../api/apiSlice";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //addTodo
    setNewTodo("");
  };

  const newItemSection = (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">Enter a new todo item</label>
      <div className="new-todo">
        <input
          type="text"
          id="new-todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new todo"
        />
      </div>
      <button className="submit">
        <FontAwesomeIcon icon={faUpload} />
      </button>
    </form>
  );

  let content;
  // Define conditional content

  const { data, error, isLoading, isSuccess } = useGetTodosQuery();

  return (
    <main>
      <h1>Todo List</h1>
      {newItemSection}
      {error && <p>An error occured</p>}
      {console.log(error)}
      {isLoading && <p>Loading...</p>}

      {isSuccess && (
        <>
          {data &&
            data.map((todo) => {
              return <div key={todo.id}>{todo.title}</div>;
            })}
        </>
      )}
    </main>
  );
};
export default TodoList;
