class ChatController {

  /**@type {import("../../dtos/message.dto").default[]} */
  messageList = [];

  userMessageModel = "";
  /**
   * @summary Set dependencies to this
   * @param {ng.IAnchorScrollService} $anchorScroll
   * @param {ng.IScope} $scope
   * @param {import("../../factories/chat.factory").default} ChatFactory 
   */
  constructor($anchorScroll, $scope, ChatFactory) {
    this.$anchorScroll = $anchorScroll;
    this.$scope = $scope;
    this.ChatFactory = ChatFactory;
  }

  /**
   * @summary AngularJS init life-cycle method. Show writting message and gets and displays welcome message
   */
  $onInit() {
    this._botWritting(true);
    this.ChatFactory.getWelcomeMessage()
      .then(this._manageNewMessages.bind(this));
  }

  /**
   * @summary Sends model and displays response
   * @param {String} text 
   */
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
   * @summary "Kind of recursive" function to manage the one by one adding of the messages
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
    /**Timeout because at the moment of the call, the element doesn´t exist yet in the DOM. A $digest cycle later, the timeout concludes */
    setTimeout(() => {
      this.$anchorScroll('bottomMessage');
    }, 0);
  }
}

ChatController.$inject = ["$anchorScroll", "$scope", "ChatFactory"];

export default ChatController;