import fastify from "fastify";

const server = fastify();

server.get("/", async (request, reply) => {
  return { hello: "world" }
});

const start = async () => {
  try {
    await server.listen({ port: 3000 });
    const addr = server.server.address();
    const port = typeof addr === "object" ? addr?.port : addr;
    console.log(`server listening on ${port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
