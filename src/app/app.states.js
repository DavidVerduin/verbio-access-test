const loginState = {
  name: "login",
  url: "/login",
  label: "ROUTE.LOGIN",
  component: "loginForm"
}

const chatState = {
  name: "chat",
  url: "/chat",
  label: "ROUTE.CHAT",
  component: "chat",
  resolve: {
    // This is used to make sure user is authenticated when entering chat
    auth: ["$state", "AuthFactory", ($state, AuthFactory) => {

      return AuthFactory.allowRouting().catch(()=>$state.go("login"));
    }]
  }
}

export { chatState, loginState }