import "./message.css";

import template from "./message.template.html";

/**<message></message> */
const MessageComponent = {
  /**There is no need for a Controller with this component, but we set the controllerAs property to make it more semantic in the HTML */
  controllerAs: "MessageController",
  template,
  bindings: {
    /**
     * Can receive a data attribute. The "<" means that the child component sees the changes made by the parent component, but the opposite doesn´t work.
     * Two way binding needs a "=" value
    */
    data: "<"
  }
}

export default MessageComponent;