addEventListener("fetch", async (event) => {
  const request = event.request;
  const contentType = request.headers.get("content-type");
  const responseInit = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
  if (request.method !== "POST") {
    
    event.respondWith(new Response(`Make a post request with:
POST https://remap.dev
{
  url: "url",
  method: "POST|GET|PUT|DELETE|PATCH",
  body: {"json":"body"},
  headers: {}
}
    `, {
      headers: {
        'Content-Type': 'text/plain'
      }
    }));
  }
  // Handle JSON data.
  if (contentType?.includes("application/json")) {
    const json = await request.json();

    const response = await fetch(json.url, {
      method: json.method || 'get',
      body: json.body ? JSON.stringify(json.body) : undefined,
      headers: {
        'Content-Type': 'application/json',
        ...(json.headers || {})
      }
    });

    const body = await response.json();

    event.respondWith(new Response(JSON.stringify(body, null, 2), responseInit));
    return 
  }
});
