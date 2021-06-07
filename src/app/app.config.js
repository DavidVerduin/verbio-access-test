/**
 * @summary Adds the AuthInterceptor to the HTTP interceptors
 * @param {ng.IHttpProvider} $httpProvider 
 */
const AppConfig = ($httpProvider) => {
  $httpProvider.interceptors.push('AuthInterceptor');
}

AppConfig.$inject = ["$httpProvider"];

export default AppConfig;