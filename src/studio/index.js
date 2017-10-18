// @flow
// import 'source-map-support/browser-source-map-support'
// $FixMe
// sourceMapSupport.install()
// @todo only one instance of babel-polyfill is allowed per window, so we can't ship
// with this global polyfill
import 'babel-polyfill'
import TheStudioClass from '$studio/TheStudioClass'
import createRootComponentForReact from './componentModel/react/createRootComponentForReact'

const theaterStudioInstance = new TheStudioClass()
theaterStudioInstance.run()

module.exports = {
  studio: theaterStudioInstance,
  react: {
    Root: createRootComponentForReact(theaterStudioInstance),
  },
}