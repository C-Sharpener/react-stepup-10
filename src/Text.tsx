// import { FC } from "react";
import { VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

// export const Text = () => {
// export const Text = (props) => {
// export const Text = (props: Props) => {
// export const Text: FC<Props> = (props) => {
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  // return <p>テキストです</p>;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
