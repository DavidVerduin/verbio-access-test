import angular from "angular";

import ChatComponent from "./chat-component/chat.component";
import LoginFormComponent from "./login-form-component/login.form.component";
import MessageComponent from "./message-component/message.component";

/**Separated module from the app one, here we gather all the components of the app */
const ComponentsModule = angular.module("app.components", [])
  .component("chat", ChatComponent)
  .component("loginForm", LoginFormComponent)
  .component("message", MessageComponent);

export default ComponentsModule;
