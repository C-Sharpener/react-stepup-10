import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./types/user";

// type TodoType = {
//   // "userId": 1,
//   // "id": 1,
//   // "title": "delectus aut autem",
//   // "completed": false
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// };

const user: User = {
  name: "じゃけぇ"
  // hobbies: ["映画", "ゲーム"]
};

export default function App() {
  // const [todos, setTodos] = useState<any>([]);
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    // axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        // console.log(res);
        // res.data.map((todo)=> todo.title)
        setTodos(res.data);
        // setTodos("AAA");
      });
  };
  return (
    <div className="App">
      {/* <UserProfile /> */}
      <UserProfile user={user} />
      {/* <Text /> */}
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        // <p>{todo.title}</p>
        // <Todo title={todo.title} userid={todo.userid} />
        // <Todo title={todo.title} userid={todo.userId} />
        // <Todo title={todo.title} userId={todo.userId} />
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
