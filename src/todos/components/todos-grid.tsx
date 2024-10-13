"use client";

import { useRouter } from "next/navigation";

import { Todo } from "@prisma/client";
// import * as todosApi from "@/todos/helpers/todos";
import { TodoItem } from "./todos-item";
import { toggleTodo } from "../actions/todo-actions";

interface Props {
  todos?: Todo[];
}

export const TodosGrid = ({ todos = [] }: Props) => {
  const router = useRouter();

  // const toggleTodo = async (id: string, complete: boolean) => {
  //   await todosApi.updateTodo(id, complete);
  //   router.refresh();
  // };
  //

  const onToggleTodo = (id: string, complete: boolean) => {
    toggleTodo(id, complete);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={onToggleTodo} />
      ))}
    </div>
  );
};
