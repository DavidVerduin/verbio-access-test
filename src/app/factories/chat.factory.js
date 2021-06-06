/**
 * @param {ng.IQService} $q
 * @param {import("../services/chat.service").default} ChatService 
 * @returns 
 */
const ChatFactory = ($q, ChatService, $timeout) => {
  const mockMessages = [
    {
      type: "image",
      url: "https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697"
    },
    {
      type: "text",
      text: "Texto de prueba"
    }
  ]

  return {
    getWelcomeMessage,
    sendMessage
  };

  /**
   * @returns {ng.IPromise<Array<import("../dtos/message.dto").default>>}
   */
  function getWelcomeMessage() {
    /* const defered = $q.defer();
    ChatService.getWelcomeMessage()
      .then(({response}) => {
        messages = response;
        return defered.resolve(response);
      })
      .catch(defered.reject);
    return defered.promise; */
    return $timeout(() => $q.resolve({...(mockMessages[new Date().getTime() % 2]), date: new Date().getTime()}), 200);
  }


  /**
   * @param {String} text
   * @returns {ng.IPromise<Array<import("../dtos/message.dto").default>>}
   */
  function sendMessage(text) {
    /* const defered = $q.defer();
    ChatService.sendMessage(text)
      .then(({response}) => {
        messages = response;
        return defered.resolve(response);
      })
      .catch(defered.reject);
    return defered.promise; */
    return $timeout(() => $q.resolve({...(mockMessages[new Date().getTime() % 2]), date: new Date().getTime()}), 200);
  }
}

ChatFactory.$inject = ["$q", "ChatService", "$timeout"];

export default ChatFactory;