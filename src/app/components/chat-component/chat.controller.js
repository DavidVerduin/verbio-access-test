class ChatController {

  /**@type {import("../../dtos/message.dto").default[]} */
  messageList = [];

  userMessageModel = "";
  /**
   * 
   * @param {import("../../factories/chat.factory").default} ChatFactory 
   */
  constructor($anchorScroll, $location, $scope, ChatFactory) {
    this.$anchorScroll = $anchorScroll;
    this.$location = $location;
    this.$scope = $scope;
    this.ChatFactory = ChatFactory;
  }

  $onInit() {
    this._botWritting(true);
    this.ChatFactory.getWelcomeMessage()
      .then(this._manageNewMessages.bind(this));
  }

  sendMessage(text) {
    if (!text || this.showWrittingMsg) return;
    this.userMessageModel = "";
    this._botWritting(true);
    this.messageList.push({ mine: true, type: "text", text, date: new Date().getTime() });
    this.scrollBottom();
    this.ChatFactory.sendMessage(text)
      .then(this._manageNewMessages.bind(this));
  }

  /**
   * @summary Kind of recursive function to manage the one by one adding of the messages
   * @param {Array<import("../../dtos/message.dto").default>} list 
   */
  _manageNewMessages(list) {
    if(!list.length) {
      this._botWritting(false);
    } else {
      const newMessage = list.shift();

      this.messageList.push({...newMessage, date: new Date().getTime()});
      setTimeout((() => this._manageNewMessages(list)).bind(this), 500);
    }
    this.scrollBottom();
    this.$scope.$applyAsync();
  }

  /**
   * @summary Shows or hides the writting button
   * @param {Boolean} value 
   */
  _botWritting(value) {
    this.showWrittingMsg = value;
  }

  /**
   * @summary Scrolls to last message
   */
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

ChatController.$inject = ["$anchorScroll", "$location", "$scope", "ChatFactory"];

export default ChatController;