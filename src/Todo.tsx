import { VFC } from "react";
import { TodoType } from "./types/todo";

// type TodoType = {
//   userId: number;
//   // id: number;
//   title: string;
//   // completed: boolean;
//   completed?: boolean;
// };

// export const Todo = (props) => {
// export const Todo = (props: TodoType) => {
// export const Todo = (
//   props: Pick<TodoType, "userId" | "title" | "completed">
// ) => {
// export const Todo = (props: Omit<TodoType, "id">) => {
export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  // const { title, userid } = props;
  // const { title, userid, completed } = props;
  // const { title, userId, completed } = props;
  const { title, userId, completed = false } = props;
  const completedMark = completed ? "[完]" : "[未]";
  // return <p>{`${title}(ユーザー:${userid})`}</p>;
  // return <p>{`${completedMark} ${title}(ユーザー:${userid})`}</p>;
  return <p>{`${completedMark} ${title}(ユーザー:${userId})`}</p>;
};
