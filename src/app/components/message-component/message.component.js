import "./message.css";

import template from "./message.template.html";

const MessageComponent = {
  controllerAs: "MessageController",
  template,
  bindings: {
    data: "<"
  }
}

export default MessageComponent;