module.exports = {
  testMatch: ["**/tests/*.(spec|test).js"],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
    "^.+\\.html?$": "html-loader-jest"
  },
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  }
};
