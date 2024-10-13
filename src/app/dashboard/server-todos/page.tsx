import prisma from "@/lib/prisma";
import { NewTodo } from "@/todos/components/new-todo";
import { TodosGrid } from "@/todos/components/todos-grid";

export const metadata = {
  title: "Listado de Todos",
  description: "Server TODOS",
};

export default async function page() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

  return (
    <>
      <span className="text-3xl mb-10">Server Actions</span>

      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>

      <TodosGrid todos={todos} />
    </>
  );
}
