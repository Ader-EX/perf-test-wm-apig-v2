import jwt from "@elysiajs/jwt";
import { Elysia } from "elysia";

const app = new Elysia()
  .use(
    jwt({
      name: "jwt",
      secret: "rahasia123",
    }),
  )
  .get("/", () => "Hello Elysia")
  .get("/sign/:name", async ({ jwt, params: { name }, cookie: { auth } }) => {
    const value = await jwt.sign({ name: name, scope: "local:snap" });

    auth.set({
      value,
      httpOnly: true,
      maxAge: 7 * 86400,
      path: "/profile",
    });
    return `Sign in as ${value}`;
  })
  .get("/profile", async ({ jwt, status, cookie: { auth } }) => {
    const profile = await jwt.verify(auth.value);

    if (!profile) return status(401, "Unauthorized");

    return `Hello ${profile.name}`;
  })
  .get("/api-test", () => {
    // console.log("MASUK");
    return {
      code: 200,
      msg: "success",
      data: null,
    };
  })
  .listen({
    port: 3000,
    hostname: "0.0.0.0",
  });

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
