class ChatHandler {
  constructor(aiClient, historyStore) {
    this.aiClient = aiClient;
    this.historyStore = historyStore;
  }
  async handleMessage(userId, message) {
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
