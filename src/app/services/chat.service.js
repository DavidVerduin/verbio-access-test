"use strict";
/**Class which has every chat http service */
class ChatService {
  /**
   * @param {ng.IHttpService} $http 
   */
  constructor($http) {
    this.$http = $http;
  }

  /**
   * @summary Service to get a welcome service
   * @returns {ng.IPromise<{response: Array<import("../dtos/message.dto").MessageDTO>}>}
   */
  getWelcomeMessage() {
    return this.$http.get(
      `${API_URL}/getWelcomeMessage`, 
      {headers: {
        "Authorization": true,
        "Content-Type": "application/json"
      }}
    );
  }

  /**
   * @summary Service which receives a message and returns a list of the bot messages
   * @param {String} text 
   * @returns {ng.IPromise<{response: Array<import("../dtos/message.dto").MessageDTO>}>}
   */
  sendMessage(text) {
    return this.$http.post(
      `${API_URL}/sendMessage`, 
      {text},
      {headers: {
        "Authorization": true,
        "Content-Type": "application/json"
      }}
    );
  }
}

ChatService.$inject = ["$http"];

export default ChatService;