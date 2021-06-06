import "./message.css";

import MessageController from "./message.controller";
import template from "./message.template.html";

const MessageComponent = {
  controller: MessageController,
  controllerAs: "MessageController",
  template,
  bindings: {
    data: "<"
  }
}

export default MessageComponent;