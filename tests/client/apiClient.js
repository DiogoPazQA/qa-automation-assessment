const { request } = require('@playwright/test');

class ApiClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async getContext() {
    return await request.newContext({
      baseURL: this.baseURL,
      ignoreHTTPSErrors: true
    });
  }
}

module.exports = { ApiClient };
