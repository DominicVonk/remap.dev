addEventListener("fetch", (event) => {
  console.log(event.request.body);
  event.respondWith(new Response("Hello world"));
});
