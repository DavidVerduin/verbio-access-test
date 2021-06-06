class ChatController {

  /**@type {import("../../dtos/message.dto").default} */
  messageList = [];

  userMessageModel = "";
  /**
   * 
   * @param {import("../../factories/chat.factory").default} ChatFactory 
   */
  constructor($anchorScroll, $location, ChatFactory) {
    this.$anchorScroll = $anchorScroll;
    this.$location = $location;
    this.ChatFactory = ChatFactory;
  }

  $onInit() {
    this.botWritting(true);
    this.ChatFactory.getWelcomeMessage()
      .then(response => {
        this.botWritting(false);
        this.messageList.push(response);
        this.scrollBottom();
      });
  }

  sendMessage(text) {
    if (!text) return;
    this.userMessageModel = "";
    this.botWritting(true);
    this.messageList.push({ mine: true, type: "text", text, date: new Date().getTime() });
    this.scrollBottom()
    this.ChatFactory.sendMessage(text)
      .then(response => {
        this.botWritting(false);
        this.messageList.push(response);
        this.scrollBottom();
      });
  }

  botWritting(value) {
    this.showWrittingMsg = value;
  }

  scrollBottom() {
    setTimeout(() => {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      this.$location.hash('bottomMessage');
  
      // call $anchorScroll()
      this.$anchorScroll();
    }, 0)
  }
}

ChatController.$inject = ["$anchorScroll", "$location", "ChatFactory"];

export default ChatController;