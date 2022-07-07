var SF__currentScript = document.currentScript || {}
var SF__DOMReady = function (callback) {
  document.readyState === 'interactive' ||
  document.readyState === 'complete'
    ? callback()
    : document.addEventListener('DOMContentLoaded', callback)
}

SF__DOMReady(function () {
  const pinkColor = '#EF3E94'
  const skyBlueColor = '#23BFE1'
  const el = document.createElement('div')
  const viewport = window.innerWidth > 500 ? 'large' : 'small'
  const sharedStyle = 'position: fixed; z-index: 99999999; cursor: pointer; '
  const styles = {
    right: {
      large: `width: 260px; height: 74px;  right: -80px; bottom: 20px; transform: rotate(135deg); background: linear-gradient(-360deg, ${skyBlueColor} 50%, ${pinkColor} 50%)`,
      small: `width: 200px; height: 64px;  right: -60px; bottom: 25px; transform: rotate(135deg); background: linear-gradient(-180deg, ${skyBlueColor} 50%, ${pinkColor} 50%)`,
    },
    left: {
      large: `width: 260px; height: 74px;  left: -75px; bottom: 20px; transform: rotate(45deg); background: linear-gradient(-180deg, ${skyBlueColor} 50%, ${pinkColor} 50%)`,
      small: `width: 200px; height: 64px;  left: -60px; bottom: 25px; transform: rotate(45deg); background: linear-gradient(-180deg, ${skyBlueColor} 50%, ${pinkColor} 50%)`,
    },
  }

  // Options
  const url =
    SF__currentScript.getAttribute('url') || 'http://www.fetrah.org/'
  const title = SF__currentScript.getAttribute('title') || 'انشر فطرة'
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
  el.style =
    sharedStyle + styles[position === 'right' ? 'right' : 'left'][viewport]

  el.setAttribute('id', 'we-stand-with-fetrah')
  el.setAttribute('dir', 'ltr')
  document.body.appendChild(el)
})
