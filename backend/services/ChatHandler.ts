interface Message {
  role: "user" | "assistant";
  content: string;
}
interface AIClient {
  send(history: Message[], message: string): Promise<string>;
}

interface HistoryStore {
  get(userId: string): Promise<Message[]>;
  append(userId: string, message: Message): Promise<void>;
}
class ChatHandler {
  private aiClient: AIClient;
  private historyStore: HistoryStore;

  constructor(aiClient: AIClient, historyStore: HistoryStore) {
    this.aiClient = aiClient;
    this.historyStore = historyStore;
  }

  async handleMessage(userId: string, message: string): Promise<string> {
    if (!message || typeof message !== "string") {
      throw new Error("Invalid Message");
    }
    const history = await this.historyStore.get(userId);
    const response = await this.aiClient.send(history, message);

    await this.historyStore.append(userId, { role: "user", content: message });
    // TODO: Implement feature
    return response;
  }
}
export default ChatHandler;
