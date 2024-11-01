import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  await prisma.todo.deleteMany(); // delete from * todo
  await prisma.user.deleteMany(); // delete from * user

  await prisma.user.create({
    data: {
      email: "test1@test.com",
      password: bcrypt.hashSync("123456"),
      roles: ["admin", "client", "super-user"],
      todos: {
        create: [
          { description: "Piedra del alma", complete: true },
          { description: "Piedra del poder" },
          { description: "Piedra del tiempo" },
          { description: "Piedra del espacio" },
          { description: "Piedra de la realidad" },
        ],
      },
    },
  });

  // await prisma.todo.createMany({
  //   data: [
  //     { description: "Piedra del alma", complete: true },
  //     { description: "Piedra del poder" },
  //     { description: "Piedra del tiempo" },
  //     { description: "Piedra del espacio" },
  //     { description: "Piedra de la realidad" },
  //   ],
  // });

  return NextResponse.json({
    message: "Seed Executed",
  });
}
