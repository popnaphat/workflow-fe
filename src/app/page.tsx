"use client";
import React from 'react';
import MyButton from "@/components/Button";
import ListRender from "@/components/ListRender";
import ObjectRender from "@/components/ObjectRender";
import Parent from "@/components/Parent";
import Quiz1 from "@/components/Quiz1";
import Quiz2 from "@/components/Quiz2";
import Quiz3 from "@/components/Quiz3";
import Quiz4 from "@/components/Quiz4";
import TableProduct,{product} from "@/components/Table2";
import TaskList from "@/components/TaskList";

const mockData: product[] = [
  {
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    title: "Monitor",
    amount: "$2500.00",
  },
  {
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    title: "Hard Disk/SSD",
    amount: "$2000.75",
  },
  {
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    title: "Monitor",
    amount: "$2500.00",
  },
  {
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    title: "Hard Disk/SSD",
    amount: "$2000.75",
  },
];

const name = "POPPY";
const age = 35;
const alive = true;

const App = () => {
  return (
    <div>
      <ObjectRender />
      Hello, {name + age + "\n" + alive}
      <Quiz1 />
      <Quiz2 />
      <Quiz3 />
      <Quiz4 />
      <ListRender />
      <TaskList />
      <MyButton title={"hi world"} disabled={true} />
      <Parent />
      <TableProduct products={mockData} />
    </div>
  );
};

export default App;
