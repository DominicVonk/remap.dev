addEventListener("fetch", (event) => {
  const request = event.request;
  const contentType = request.headers.get("content-type");
  const responseInit = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };

  // Handle JSON data.
  if (contentType.includes("application/json")) {
    const json = await request.json();
    return new Response(JSON.stringify({ json }, null, 2), responseInit);
  }
  event.respondWith(new Response("Hello world"));
});
