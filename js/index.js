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

// Example: Update the img src for the logo / GREAT IDEA PIC
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
// NAV BAR TO THE LEFT
let links = document.querySelectorAll('a'); //anchor tag since you are changing the placeholder and not the nav object
  links[0].textContent = siteContent["nav"]["nav-item-1"];
  links[1].textContent = siteContent["nav"]["nav-item-2"];
  links[2].textContent = siteContent["nav"]["nav-item-3"];
  links[3].textContent = siteContent["nav"]["nav-item-4"];
  links[4].textContent = siteContent["nav"]["nav-item-5"];
  links[5].textContent = siteContent["nav"]["nav-item-6"];

let additions = document.createElement("a"); // put in whatever you are creating
additions.textContent = "heyyyy"
additions.setAttribute('href', "#");
let header1 = document.querySelector('nav'); // pulling the nav bar to attatch the prepend/append
header1.prepend(additions); //

let additions1 = document.createElement("a");
additions1.textContent = "byeeee"
additions1.setAttribute('href', "#");
header1.append(additions1);

  links.forEach(navlinks => navlinks.style.color = 'green');



// ROUND PIC INSERT
let roundPic = document.getElementById("cta-img");
roundPic.setAttribute('src', siteContent["cta"]["img-src"])

//STACK THE H1
let awesome = document.querySelector('h1');
awesome.textContent = siteContent["cta"]['h1'];

//TEXT FOR THE BUTTON
let buttonText = document.querySelector('button');
buttonText.textContent = siteContent["cta"]["button"];
//BORDER-------------------------------------

//BORDERPIC INSERT
let middlePic = document.getElementById("middle-img");
middlePic.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//Titles
let titles = document.querySelectorAll("h4"); // grouped all the h4s together to change with textcontent 
titles[0].textContent = siteContent['main-content']['features-h4'];
titles[1].textContent = siteContent['main-content']['about-h4'];
titles[2].textContent = siteContent['main-content']['services-h4'];
titles[3].textContent = siteContent['main-content']['product-h4'];
titles[4].textContent = siteContent['main-content']['vision-h4'];
titles[5].textContent = siteContent['contact']['contact-h4'];
//paragraphs
let paragraphs = document.querySelectorAll("p"); // 
paragraphs[0].textContent = siteContent["main-content"]["features-content"];
paragraphs[1].textContent = siteContent["main-content"]["about-content"];
paragraphs[2].textContent = siteContent["main-content"]["services-content"];
paragraphs[3].textContent = siteContent["main-content"]["product-content"];
paragraphs[4].textContent = siteContent["main-content"]["vision-content"];
paragraphs[5].textContent = siteContent["contact"]["address"];
paragraphs[6].textContent = siteContent["contact"]["phone"];
paragraphs[7].textContent = siteContent["contact"]["email"];
paragraphs[8].textContent = siteContent["footer"]["copyright"];

//BORDER--------------------------------------------

//CONTACT 

//FOOTER



