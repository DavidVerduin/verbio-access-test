/**
 * @summary Every bit of authentication related functionality must be in this factory
 * @param {ng.ui.IStateService} $state 
 * @param {ng.IQService} $q 
 * @param {import("../services/login.service").default} LoginService 
 */
const AuthFactory = ($state, $q, LoginService) => {
  return {
    allowRouting,
    login,
    logout
  }

  /**
   * @returns {ng.IPromise<void>} Resolved if the service went Ok, rejected if it did not
   */
  function login(credentials) {
    const defered = $q.defer();
    LoginService.login(credentials)
      .then(response => {
        if(response.data && response.data.session_id) {
          localStorage.setItem('auth-token', response.data.session_id);
          return defered.resolve();
        } else {
          return defered.reject();
        }
      })
      .catch(defered.reject);
    return defered.promise;
  }

  function logout() {
    localStorage.removeItem('auth-token');
    $state.go("login");
  }

  /**
   * This is in a separate function so it´s easy to modify in case new restriction need to be added
   * @returns {ng.IPromise<void>} Resolved if there is an existing auth token, rejected if there isn´t
   */
  function allowRouting() {
    return localStorage.getItem('auth-token') ? $q.resolve() : $q.reject();
  }
}

AuthFactory.$inject = ["$state", "$q", "LoginService"];

export default AuthFactory;