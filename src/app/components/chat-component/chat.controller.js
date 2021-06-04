class ChatController {

  messageList = [];
  /**
   * 
   * @param {import("../../factories/chat.factory").default} ChatFactory 
   */
  constructor(ChatFactory) {
    this.ChatFactory = ChatFactory;
  }

  $onInit() {
    this.botWritting(true);
    this.ChatFactory.getWelcomeMessage()
      .then(response => {
        this.botWritting(false);
        this.messageList = response;
      });
  }

  sendMessage(text) {
    if (!text) return;
    this.botWritting(true);
    this.ChatFactory.sendMessage(text)
      .then(response => {
        this.botWritting(false);
        this.messageList = response;
      });
  }

  botWritting(value) {
    this.showWrittingMsg = value;
  }
}

ChatController.$inject = ["ChatFactory"];

export default ChatController;