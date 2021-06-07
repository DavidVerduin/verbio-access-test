const AuthInterceptor = ($q, $state) => {
  return {
    /**Intercepts every http request and adds a authorization token if there is one */
    request(config) {
      const authToken = localStorage.getItem("auth-token");
      if(authToken && config.headers) {
        config.headers["Authorization"] = `Bearer ${authToken}`;
      }
      return config;
    },
    /**Intercepts every http response error and, if it  has an 401 forbidden status, redirects to login */
    responseError(rejection) {
      if(rejection.status === 401) {
        localStorage.removeItem("auth-token");
        $state.go("login");
      }
      return $q.reject(rejection);
    }
  };
}

AuthInterceptor.$inject = ["$q", "$state"];

export default AuthInterceptor;