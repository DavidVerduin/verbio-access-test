/**
 * @param {ng.IQService} $q
 * @param {import("../services/chat.service").default} ChatService 
 * @returns 
 */
const ChatFactory = ($q, ChatService) => {
  let messages = [];
  return {
    getMessages: () => messages,
    getWelcomeMessage,
    sendMessage
  };

  /**
   * @returns {ng.IPromise<Array<import("../dtos/message.dto").default>>}
   */
  function getWelcomeMessage() {
    const defered = $q.defer();
    ChatService.getWelcomeMessage()
      .then(({response}) => {
        messages = response;
        return defered.resolve(response);
      })
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
      .then(({response}) => {
        messages = response;
        return defered.resolve(response);
      })
      .catch(defered.reject);
    return defered.promise;
  }
}

ChatFactory.$inject = ["$q", "ChatService"];

export default ChatFactory;