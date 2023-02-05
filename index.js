const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const eMail = document.getElementById("email");
const rMessage = document.getElementById("rmessage");
const submitButton = document.getElementById("submit");
const country = document.getElementById("country");
const carouselButtons = document.querySelectorAll("[data-carousel-button]")

function printData(){

    alert("RECRUITER INFO:\n" + "Name: " + firstName.value + "\n" + 
    "Last Name: " + lastName.value + "\n" +
    "E mail: " + eMail.value + "\n" + 
    "Based in: " + country.value);
    alert("Your request has been sent!")
}


submitButton.addEventListener("click", async () => {
    printData();
})

carouselButtons.forEach(button => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1
      const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")
  
      const activeSlide = slides.querySelector("[data-active]")
      let newIndex = [...slides.children].indexOf(activeSlide) + offset
      if (newIndex < 0) newIndex = slides.children.length - 1
      if (newIndex >= slides.children.length) newIndex = 0
  
      slides.children[newIndex].dataset.active = true
      delete activeSlide.dataset.active
    })
  })

// let json = {
//     java: "65%",
//     python: "60%",
//     javascript: "30%",
//     html: "40%",
//     css: "30%"
// };

// const select = document.querySelector(".skills");
// const skill = document.createElement("p");
// for (const key in json) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         skill.innerHTML = object[key];
        
//     }
// }
// const section = document.createElement(div);
// const section1 = document.createElement(div);
// section.classList = "container";
// skill.classList("skill" + skill)






