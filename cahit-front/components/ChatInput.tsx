// components/ChatInput.tsx

"use client";

import { useEffect, useRef, useState } from "react";

export default function ChatInput({
  onSend,
}: {
  onSend: (message: string) => void;
}) {
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  function send() {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  }
  return (
    <div className="flex gap-2">
      <input
        className="w-full border rounded p-2"
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") send();
        }}
      />
      <button onClick={send}>Send</button>
    </div>
  );
}
