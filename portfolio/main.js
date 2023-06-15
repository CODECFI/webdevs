const sections = document.querySelectorAll(".section");
const ControlBtns = document.querySelectorAll(".controlls");
const allBtns = document.querySelectorAll(".control");
const allSection = document.querySelector(".main-content");

// This function loops through all of the buttons and adds an event listener to each one.
// When a button is clicked,
// the event listener will run the following code:

// The provided code defines a function called transformActive() that loops through all buttons with the class "control"
// and adds an event listener to each one. When a button is clicked,
// the event listener executes a code block that handles the "active-btn" class. Here's an explanation of each part:

function transformActive() {
  for (let i = 0; i < allBtns.length; i++) {
    allBtns[i].addEventListener("click", function () {
      // This line of code gets the currently active button.
      let currentBtn = document.querySelectorAll(".active-btn");

      // This line of code removes the active-btn class from the currently active button.
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );

      //This line of code adds the active-btn class to the button that was clicked.
      this.className += " active-btn";
    });
  }
  allSection.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      ControlBtns.forEach((btns) => {
        btns.classList.remove("active");
      });

      e.target.classList.add("active");

      // hide other section ------------
      sections.forEach((sectionHides) => {
        sectionHides.classList.remove("active");
      });
      const sectionShow = document.getElementById(id);
      sectionShow.classList.add("active");
    }
  });
}

transformActive();



const blogs = document.querySelectorAll(".blog");

// provides a way to asynchronously observe changes in the intersection
// of a target element with an ancestor element or
// with a top-level document's viewport.

const observer = new IntersectionObserver((callBAck) => {
 console.log(callBAck);
 callBAck.forEach( (activated) => {
    activated.target.classList.toggle('show', activated.isIntersecting);
    // if(activated.isIntersecting) {observer.unobserve(activated.target)};

 },
  {
  threshold: 1,
}
)
});

blogs.forEach((blog)=> {
 observer.observe(blog);
})



//    const articleHome = document.querySelector('.article_home');
//    const articleFeatures = document.querySelector('.article_features');
//    const h2 = document.querySelector("h2");
//    const h3 = document.querySelector("h3")

//  articleHome.addEventListener('click', (events) => {
//     // events.stopPropagation()
//     articleHome.classList.toggle('red');
//     articleHome.classList.toggle('color')
//  })

//  articleFeatures.addEventListener('click', (even) => {
//     // console.log(even.target);
//     even.stopPropagation()
//     articleFeatures.style.backgroundColor = 'red'

//  })

//  h2.addEventListener('click', (eve) => {
//    console.log(eve.target);
//    eve.stopPropagation()
//     h2.style.color = 'green';
//     eve.target.textContent = 'PassedEvenet'
//  }, true)

//  };

const toggled = document.querySelector(".toggle_btn");

toggled.addEventListener("click", () => {
  const element = document.body;
  element.classList.toggle("light-mode");
});










