addEventListener("fetch", (event) => {
  console.log(event.request);
  event.respondWith(new Response("Hello world"));
});
