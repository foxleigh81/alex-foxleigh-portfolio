// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.mini-me')
      .assert.elementPresent('.greeting')
      .assert.elementPresent('.status')
      .assert.containsText('span', 'I\'m Alex, I like to make things')
      .assert.elementCount('img', 1)
      .end()
  }
}
