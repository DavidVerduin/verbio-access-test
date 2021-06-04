const loginState = {
  name: "login",
  url: "/login",
  label: "ROUTE.LOGIN",
  component: 'loginForm'
}

const chatState = {
  name: "chat",
  url: "/chat",
  label: "ROUTE.CHAT",
  component: 'chat',
  resolve: {
    auth: ['AuthFactory', AuthFactory => {
      return AuthFactory.allowRouting();
    }]
  }
}

export { chatState, loginState }