import { content } from './src/content.js'
import { CONSTANTS } from './src/constants.js'

let body = document.querySelector('body')

let current_delay = 0

content.forEach(item => {
  let section = document.createElement('section')
  section.innerHTML = `
    <p style="animation-duration:${item.display_time}s;animation-delay:${current_delay}s">${item.text}</p>
    <img style="animation-duration:${item.display_time}s;animation-delay:${current_delay}s" src="${item.image_link}"/>
  `
  body.appendChild(section)
  current_delay += item.display_time
  current_delay += CONSTANTS.gap
  console.log(current_delay);
})
