function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if (element.classList.contains('bg-light')) {
      element.classList.replace('bg-light', 'bg-dark')
      localStorage.setItem('isDarkMode', 'true')
      document.getElementById('profileImgToggle').src = '/img/cvjohannessquarelgDark.jpg'
    } else {
      element.classList.replace('bg-dark', 'bg-light')
      localStorage.setItem('isDarkMode', 'false')
      document.getElementById('profileImgToggle').src = '/img/cvjohannessquarelg.jpg'
    }
}

function changeLanguage() {
  if (location.pathname == '/' || location.pathname == '') {
    location.pathname = '/en'
  } else {
    location.assign('/')
  }
}

//tooltip initializing
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//language image

if (location.pathname == '/en') {
  document.getElementById('langToggle').src = '/img/langEN.svg'

} else if (location.pathname == '/' || location.pathname == '') {
  document.getElementById('langToggle').src = '/img/langNO.svg'
}

//localstorage dark mode

if (localStorage.getItem('isDarkMode') === 'true') {
  document.body.classList.toggle("dark-mode");
  document.body.classList.replace('bg-light', 'bg-dark')
  document.getElementById('profileImgToggle').src = '/img/cvjohannessquarelgDark.jpg'
} else {
  document.body.classList.replace('bg-dark', 'bg-light')
  document.getElementById('profileImgToggle').src = '/img/cvjohannessquarelg.jpg'
}