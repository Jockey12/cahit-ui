// components/Chat.tsx

"use client";

import { useState } from "react";
import ChatInput from "@/components/ChatInput";
import MessageList from "@/components/MessageList";
import { Message } from "@/components/types/chat";

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);

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
    <div className="flex h-screen flex-col overflow-hidden">
      {/*messages*/}
      <main className="flex-1 overflow-y-auto p-4">
        <MessageList messages={messages} />
      </main>
      {/*input*/}
      <footer className="bg-background border-t p-2">
        <ChatInput onSend={send} />
      </footer>
    </div>
  );
}
