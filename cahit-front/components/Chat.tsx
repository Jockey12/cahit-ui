// components/Chat.tsx

"use client";

import { useState } from "react";
import ChatInput from "@/components/ChatInput";
import MessageList from "@/components/MessageList";
import { Message } from "@/components/types/chat";
import { sendMessage } from "@/lib/chat";

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  // const messagesEndRef = useRef<HTMLDivElement>(null);

  async function send(message: string) {
    // send LLM input
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: message,
      },
    ]);
    // fetch the LLM response
    await fetch("http://localhost:8080/chat", {
      method: "POST",
      body: JSON.stringify({
        prompt: message,
      }),
    });

    // try getting LLM response
    try {
      console.log("hi");
      const data = await sendMessage(message);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.response,
        },
      ]);
    } catch (err) {
      console.error(err);
    }
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
