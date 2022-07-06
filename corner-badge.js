var SF__currentScript = document.currentScript || {}
var SF__DOMReady = function (callback) {
  document.readyState === 'interactive' ||
  document.readyState === 'complete'
    ? callback()
    : document.addEventListener('DOMContentLoaded', callback)
}
SF__DOMReady(function () {
  const el = document.createElement('div')

  // Options
  const url =
    SF__currentScript.getAttribute('url') ||
    'https://www.facebook.com/fetrah.org/'
  const title = SF__currentScript.getAttribute('title') || 'ادعم فطرة'
  const position =
    SF__currentScript.getAttribute('position') || 'left'

  // Set custom title
  el.title = title

  // Set custom URL
  if (url) {
    el.style.cursor = 'pointer'
    el.target = '_blank'
    el.addEventListener('click', function () {
      window.open(url, '_blank')
    })
  }

  // Set custom position (left, right)
  if (position === 'right') {
    el.style.right = '-80px'
    el.style.bottom = '20px'
    el.style.transform = 'rotate(135deg)'
    el.style.background =
      'linear-gradient(-360deg, #EF3E94 50%, #23BFE1 50%)'
  } else {
    el.style.left = '-80px'
    el.style.bottom = '20px'
    el.style.transform = 'rotate(45deg)'
    el.style.background =
      'linear-gradient(-180deg, #EF3E94 50%, #23BFE1 50%)'
  }

  el.style.width = '300px'
  el.style.height = '84px'
  el.style.position = 'fixed'
  el.style.zIndex = '999'

  el.setAttribute('id', 'we-stand-with-fetrah')
  document.body.appendChild(el)
})
