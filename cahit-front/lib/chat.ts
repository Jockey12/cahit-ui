export async function sendMessage(prompt: string) {
  const res = await fetch("http://localhost:8080/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
    }),
  });
  if (!res.ok) {
    throw new Error("Failed to get response from server");
  }
  return await res.json();
}
