// components/MessageList.tsx

import ChatMessage from "@/components/Message";
import { Message } from "@/components/types/chat";

export default function MessageList({ messages }: { messages: Message[] }) {
  return (
    <div className="flex flex-col gap-4">
      {messages.map((msg, i) => (
        <ChatMessage key={i} message={msg} />
      ))}
    </div>
  );
}
