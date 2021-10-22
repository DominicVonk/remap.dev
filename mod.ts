addEventListener("fetch", async (event) => {
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
