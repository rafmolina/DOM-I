const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
console.log(logo)

let links = document.querySelectorAll('a');
let values = Object.values(siteContent.nav)
console.log(values)
for(i = 0; i < links.length; i++){
  links[i].textContent = values[i]
  links[i].style.color = 'green'
}

let navElement = document.querySelector('nav');
let newNav = document.createElement('a')
newNav.textContent = "button"
navElement.appendChild(newNav)

let newNavi = document.createElement('a')
newNavi.textContent = "another one"
navElement.prepend(newNavi)

let h1 = document.querySelector('h1');
console.log(h1)
h1.textContent = "DOM Is Awesome";

let topButton = document.querySelector('.cta-text button');
console.log(topButton)
topButton.textContent = "Get Started";

let snippet = document.getElementById("cta-img");
snippet.setAttribute('src', siteContent["cta"]["img-src"]);

let topH4 = document.querySelectorAll('.top-content h4');
console.log(topH4)
topH4[0].textContent = "Features";
topH4[1].textContent = "About";

let topPara = document.querySelectorAll('.top-content p');
console.log(topPara)
topPara[0].textContent = siteContent["main-content"]["features-content"];
topPara[1].textContent = siteContent["main-content"]['about-content'];

let midPic = document.getElementById("middle-img");
midPic.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let bottomH4 = document.querySelectorAll('.bottom-content h4');
console.log(bottomH4)
bottomH4[0].textContent = "Services";
bottomH4[1].textContent = "Product";
bottomH4[2].textContent = "Vision";

let bottomPara = document.querySelectorAll('.bottom-content p');
console.log(bottomPara)
bottomPara[0].textContent = siteContent["main-content"]["services-content"];
bottomPara[1].textContent = siteContent["main-content"]["product-content"];
bottomPara[2].textContent = siteContent["main-content"]["vision-content"];

let contactTitle = document.querySelector('.contact h4');
contactTitle.textContent = "Contact";

let contactInfo = document.querySelectorAll('.contact p');
console.log(contactInfo)
contactInfo[0].textContent = siteContent["contact"]["address"];
contactInfo[1].textContent = siteContent["contact"]["phone"];
contactInfo[2].textContent = siteContent["contact"]["email"];

let copyRight = document.querySelector('footer p');
console.log(copyRight)
copyRight.textContent = siteContent["footer"]["copyright"];