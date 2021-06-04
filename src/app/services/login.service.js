"use strict";
class LoginService {
  /**
   * 
   * @param {ng.IHttpService} $http 
   */
  constructor($http) {
    this.$http = $http;

    this.baseUrl = "http://localhost:5556";
  }

  /**
   * @param {{user: String, password: String}} credentials 
   * @returns {ng.IPromise<{session_id: String}>}
   */
  login(credentials) {
    return this.$http.post(
      `${this.baseUrl}/login`, 
      credentials, 
      {headers: {"Content-Type": "application/json"}}
    );
  }
}

LoginService.$inject = ["$http"];

export default LoginService;