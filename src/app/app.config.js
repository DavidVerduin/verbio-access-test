const AppConfig = ($httpProvider) => {
  $httpProvider.interceptors.push('AuthInterceptor');
}

AppConfig.$inject = ["$httpProvider"];

export default AppConfig;