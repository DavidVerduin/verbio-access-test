import "./login.form.css";

import LoginController from "./login.form.controller";
import template from "./login.form.template.html";

/**<login-form></login-form> */
const LoginFormComponent = {
  controller: LoginController,
  controllerAs: "LoginFormController",
  template
}

export default LoginFormComponent;