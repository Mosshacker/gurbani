export default async (req, res) => {
  const response = await fetch("https://paste.ee/r/a4NQFoHN/0");
  const text = await response.text();
  const lines = text.split("\n").filter(line => line.trim());
  const randomLine = lines[Math.floor(Math.random() * lines.length)];
  res.status(200).send(randomLine);
};
