import { Message } from "./types/chat";

export default function ChatMessage({ message }: { message: Message }) {
  return (
    <div
      className={
        message.role === "user" ? "flex justify-end" : "flex justify-start"
      }
    >
      <div className="rounded-lg bg-accent p-3 max-w-xl">{message.content}</div>
    </div>
  );
}
