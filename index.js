export default {
  async fetch(request) {
    try {
      const res = await fetch("https://paste.ee/r/a4NQFoHN/0");
      const text = await res.text();
      const lines = text.split("\n").filter(l => l.trim());
      const randomLine = lines[Math.floor(Math.random() * lines.length)];
      return new Response(randomLine, {
        headers: {
          "Content-Type": "text/plain",
          "Access-Control-Allow-Origin": "*"
        }
      });
    } catch (err) {
      return new Response("Error fetching Gurbani line", { status: 500 });
    }
  }
};
