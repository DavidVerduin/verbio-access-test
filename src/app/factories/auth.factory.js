/**
 * @summary Every bit of authentication related functionality must be in this factory
 * @param {ng.IQService} $q 
 * @param {import("../services/login.service").default} LoginService 
 */
const AuthFactory = ($q, LoginService) => {
  let authToken = 'patata';
  return {
    allowRouting,
    getToken: () => authToken,
    login
  }

  /**
   * 
   * @returns {ng.IPromise<void>} Resolved if the service went Ok, rejected if it did not
   */
  function login() {
    /* const defered = $q.defer();
    LoginService.login()
      .then(defered.resolve)
      .catch(defered.reject);
    return defered.promise; */
    return $q.resolve();
  }

  /**
   * This is in a separate function so it´s easy to modify in case new restriction need to be added
   * @returns {ng.IPromise<void>} Resolved if there is an existing auth token, rejected if there isn´t
   */
  function allowRouting() {
    return authToken ? $q.resolve() : $q.reject();
  }
}

AuthFactory.$inject = ["$q", "LoginService"];

export default AuthFactory;