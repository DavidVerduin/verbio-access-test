"use strict";

/**
 * Controller associated to the LoginFormComponent. This is the Visual Model related to the html view
 */
class LoginFormController {

  /**@type {{user: String, password: String}} */
  formData = {};

  /**
   * @param {ng.ui.IStateService} $state
   * @param {import("../../factories/auth.factory").default} AuthFactory 
   */
  constructor($state, AuthFactory) {
    this.$state = $state;
    this.AuthFactory = AuthFactory;
  }

  /**
   * @summary As this /url doesn`t have auth requirements, if there is already a token, navigates to the /chat page
   */
  $onInit() {
    if(localStorage.getItem('auth_token')) this.$state.go('chat');
  }

  /**
   * @summary Checks de data for un filled fields, and then calls the functionality to log in
   * @param {{user: String, password: String}} formData 
   */
  submit(formData) {
    if(!formData.user) {
      this.userErrorMsg = 'El campo usuario es obligatorio';
    } else if(!formData.password) {
      this.userErrorMsg = 'El campo contraseña es obligatorio';
    } else {
      this.userErrorMsg = null;
      this.AuthFactory.login(formData)
        .then(() => {
          this.$state.go('chat');
        })
        .catch(() => {
          this.userErrorMsg = 'Las credenciales no son correctas';
        });
    }
  }

  clear() {
    this.formData = {};
    this.userErrorMsg = null;
  }

}

LoginFormController.$inject = ["$state", "AuthFactory"];

export default LoginFormController;
