export const dynamic = "auto";
export const revalidate = 0;

import { getUserSessionServer } from "@/auth/actions/auth-actions";
import prisma from "@/lib/prisma";
import { NewTodo } from "@/todos/components/new-todo";
import { TodosGrid } from "@/todos/components/todos-grid";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Listado de Todos",
  description: "Rest TODOS",
};

export default async function page() {
  const user = await getUserSessionServer();

  if (!user) redirect("/api/auth/signin");

  const todos = await prisma.todo.findMany({
    where: { userId: user.id },
    orderBy: { description: "asc" },
  });

  return (
    <div>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>

      <TodosGrid todos={todos} />
    </div>
  );
}
