import './globals/styles/core.css'
//import Logo from './globals/images/fox.svg'
import Data from './globals/language.json'

function component () {
  var element = document.createElement('div')
  // var myIcon = new Image()
  // myIcon.src = Logo
  // Lodash, currently included via a script, is required for this line to work
  
  element.innerHTML = Data.siteTitle
  //element.appendChild(myIcon)

  return element
}

document.body.appendChild(component())
