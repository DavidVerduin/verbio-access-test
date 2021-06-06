const AuthInterceptor = ($q, $state) => {
  return {
    // optional method
    request(config) {
      const authToken = localStorage.getItem("auth-token");
      if(authToken && config.headers) {
        config.headers["Authorization"] = `Bearer ${authToken}`;
      }
      return config;
    },
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