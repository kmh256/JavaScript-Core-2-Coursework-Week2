// ## Part 1

let blueBtn = document.querySelector("#blueBtn");
let orangeBtn = document.querySelector("#orangeBtn");
let greenBtn = document.querySelector("#greenBtn");

let jumbotron = document.querySelector(".jumbotron");
let donateBtn = document.querySelector(".btn.btn-primary.btn-lrg");
let volunteerBtn = document.querySelector(".btn.btn-secondary.btn-lrg");

// When clicking **blue**
blueBtn.addEventListener("click", clickBlueBtn);

function clickBlueBtn () {
    // <!-- - **Jumbotron** background color to `#588fbd` -->
    jumbotron.style.backgroundColor = "#588fbd";
    // <!-- - **Donate a bike** button background color to `#ffa500` -->
    donateBtn.style.backgroundColor = "#ffa500";
    // <!-- - **Volunteer** button background color to `black` and text color to `white` -->
    volunteerBtn.style.backgroundColor = "black";
    volunteerBtn.style.color = "white";
}

// When clicking **orange** 
orangeBtn.addEventListener("click", clickOrangeBtn);

function clickOrangeBtn () {
    // <!-- - **Jumbotron** background color to `#f0ad4e` -->
    jumbotron.style.backgroundColor = "#f0ad4e";
    // <!-- - **Donate a bike** button background color to `#5751fd` -->
    donateBtn.style.backgroundColor = "#5751fd";
    // <!-- - **Volunteer** button background color to `#31b0d5` and text color to `white` -->
    volunteerBtn.style.backgroundColor = "#31b0d5";
    volunteerBtn.style.color = "white";
}

// When clicking **green** 
greenBtn.addEventListener("click", clickGreenBtn);

function clickGreenBtn () {
    // <!-- - **Jumbotron** background color to `#87ca8a`
    jumbotron.style.backgroundColor = "#87ca8a";
    // <!-- - **Donate a bike** button background color to `black`
    donateBtn.style.backgroundColor = "black";
    // <!-- - **Volunteer** button background color to `#8c9c08`
    volunteerBtn.style.backgroundColor = "#8c9c08";
}


// ## Part 2

let submitBtn = document.querySelector("form button");;

// In your function that handles clicks on the `Submit` button you will need to call `event.preventDefault()` to stop the browser from refreshing the page.
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let formFields = document.querySelectorAll(".form-control");
  let checkFields = true;
  
  // **Your name**, **Email** and **Describe yourself** fields need to be non-empty
  for (let i = 0; i < formFields.length; i++) {
      // Checks if fields are empty or if the first field (email) doesn't contain "@"
      if (formFields[i].value.length === 0 || !formFields[0].value.includes("@")) {
          checkFields = false;
          // For all the fields that invalid, it should make their background color `red`.
          formFields[i].style.backgroundColor = "red";
        } else {
            formFields[i].style.backgroundColor = "transparent";
        }
    };
    
    // If all the fields are valid - display an alert to thank you for filling out the form and blank out (make empty) all the text fields
    if (checkFields) {
        formFields.forEach((field) => field.value = " ");
        alert("Thank you for completing the form!");
    };
});