const mobileNav = document.querySelector('.nav')
const navMenuBtn = document.querySelector('.menu')
const navLinks = document.querySelectorAll('.nav li')
const body = document.querySelector('body')
const hamburgerMenuLines = document.querySelectorAll('.hamburger-menu div')
const search = document.querySelector('.search')
const searchInput = document.querySelector('.search input')
const subnav = document.querySelector('.subnav')
const navIndicator = document.querySelector('.nav__indicator')
const jobsButton = document.querySelector('.investment__jobs__button')
const jobsSearch = document.querySelector('.investment__jobs__search')
const jobSearchCloseBtn = document.querySelector('.close-btn')

// Functionality for the mobile navbar and hamburger menu icon
navMenuBtn.addEventListener('click', () => {
  subnav.style.display = 'none'
  mobileNav.classList.toggle('open')
  setTimeout(() => {
    navLinks.forEach((link) => {
      link.classList.toggle('open')
    })
  }, 250);

  if(!mobileNav.classList.contains('open')) {
    body.style.overflow = 'visible'
  } else {
    body.style.overflow = 'hidden'
  }
  hamburgerMenuLines.forEach(line => {
    line.classList.toggle('open')
  })
  search.classList.toggle('open')

  let activeLinks = document.getElementsByClassName('active')
  for(let i = 0; i < activeLinks.length; i++) {
    if(activeLinks) activeLinks[i].classList.remove('active')
  }
})

// Open the subnav on hove of each nav link
// The links in the sub nav could be customized here
// For now they all open the same subnav
navLinks.forEach((link, i) => {
  link.addEventListener('mouseover', (e) => {
    subnav.style.display = 'flex'
    handleIndicator(e.target)
  })
})

// Active class for navbar on hover
for(let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('mouseover', function() {
    var current = document.getElementsByClassName('active')
    if(current.length > 0) {
      current[0].className = current[0].className.replace(' active', '')
    }
    this.className += ' active' 
  })  
}

// In the mobile navbar, open the sublink sections on click
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    link.children[0].classList.toggle('open')
  })
})

// Close subnav when mouseleaves the subnav
subnav.addEventListener('mouseleave', () => {
  subnav.style.display = 'none'
})

// Subnav inidicator movement
const handleIndicator = (e) => {
  let halfWidth = e.offsetWidth / 2 - 30
  navIndicator.style.left = `${e.offsetLeft + halfWidth }px`
}

// Clicking search icon/text will show the search bar and focus it
search.addEventListener('click', () => {
  search.children[0].style.display = 'none'
  search.children[1].style.display = 'none'
  search.children[2].style.display = 'block'
  search.children[2].focus()
})

// Leaving foxus of the search bar will hide the search bar and show the search icon/text
searchInput.addEventListener('focusout', () => {
  search.children[0].style.display = 'block'
  search.children[1].style.display = 'block'
  search.children[2].style.display = 'none'
}) 

// View Careers button open the job search module
jobsButton.addEventListener('click', () => {
  jobsSearch.style.display = 'flex'
})

// Close button in the job search module closes it
jobSearchCloseBtn.addEventListener('click', () => {
  jobsSearch.style.display = 'none'
})

































// // Clicking a nav link on mobile will open the corresponding subnav
//   navLinks.forEach(link => {
//     link.addEventListener('mouseover', (e) => {
//         subnav.style.display = 'flex'
//         handleIndicator(e.target)
//     })
//   })

// // widthMatchSmall.addEventListener('change', (mm) => {
// //   // console.log(mm)
// //   if(mm.matches) {
// //     // console.log(true)
// //     navLinks.forEach(link => {
// //       link.addEventListener('mouseover', (e) => {
// //           subnav.style.display = 'flex'
// //           handleIndicator(e.target)
// //       })
// //     })
// //     navLinks.forEach(link => {
// //       link.addEventListener('click', (e) => {
// //           subnav.style.display = 'flex'
// //           handleIndicator(e.target)
// //       })
// //     })
// //     navLinks.forEach(link => {
// //       link.addEventListener('click', () => {
// //         link.children[0].classList.toggle('open')
// //       })
// //     })
// //   } else {
    
// //   }
// // })