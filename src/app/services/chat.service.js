"use strict";
class ChatService {
  /**
   * 
   * @param {ng.IHttpService} $http 
   */
  constructor($http) {
    this.$http = $http;

    this.baseUrl = "http://localhost:5556";
  }

  /**
   * @summary Service to get a welcome service
   * @returns {ng.IPromise<{response: Array<import("../dtos/message.dto").MessageDTO>}>}
   */
  getWelcomeMessage() {
    return this.$http.get(
      `${this.baseUrl}/getWelcomeMessage`, 
      {headers: {
        "Authorization": true,
        "Content-Type": "application/json"
      }}
    );
  }

  /**
   * 
   * @param {String} text 
   * @returns {ng.IPromise<{response: Array<import("../dtos/message.dto").MessageDTO>}>}
   */
  sendMessage(text) {
    return this.$http.post(
      `${this.baseUrl}/sendMessage`, 
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