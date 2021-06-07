import "./chat.css";

import ChatController from "./chat.controller";
import template from "./chat.template.html";

/**<chat></chat> */
const ChatComponent = {
  controller: ChatController,
  controllerAs: 'ChatController',
  template
}

export default ChatComponent;