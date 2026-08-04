// components/Chat.tsx

"use client";

import { useRef, useState } from "react";
import ChatInput from "@/components/ChatInput";
import MessageList from "@/components/MessageList";
import { Message } from "@/components/types/chat";

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  function send(message: string) {
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: message,
      },
    ]);

    // fetch ("http://localhost:8080/chat")
  }
  return (
    <div className="flex min-h-[calc(100dvh-4rem)] flex-col">
      {/*messages*/}
      <main className="flex-1 p-2">
        <MessageList messages={messages} />
      </main>
      {/*input*/}
      <footer className="sticky bg-background bottom-0 z-10 border-t p-2">
        <ChatInput onSend={send} />
      </footer>
    </div>
  );
}
