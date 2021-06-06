/**
 * @summary In this factory we gather all the funcionality with chat management
 * @param {ng.IQService} $q
 * @param {import("../services/chat.service").default} ChatService The class which owns all the chat http services
 */
const ChatFactory = ($q, ChatService) => {

  return {
    getWelcomeMessage,
    sendMessage
  };

  /**
   * @returns {ng.IPromise<Array<import("../dtos/message.dto").default>>}
   */
  function getWelcomeMessage() {
    const defered = $q.defer();
    ChatService.getWelcomeMessage()
      .then(response => defered.resolve(response.data.response))
      .catch(defered.reject);
    return defered.promise;
  }


  /**
   * @param {String} text
   * @returns {ng.IPromise<Array<import("../dtos/message.dto").default>>}
   */
  function sendMessage(text) {
    const defered = $q.defer();
    ChatService.sendMessage(text)
      .then(response => defered.resolve(response.data.response))
      .catch(defered.reject);
    return defered.promise;
  }
}

ChatFactory.$inject = ["$q", "ChatService", "$timeout"];

export default ChatFactory;