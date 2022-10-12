console.log("script running");

// Access all the figures using the class
let pictures = document.querySelectorAll(".card-image");
console.log(pictures.length);

// Fill in the object
let quizValues = {
  color: ["logical", "creative", "logical", "creative"],
  vacation: ["extrovert", "introvert", "extrovert", "introvert"],
  pizza: ["creative", "logical", "creative", "logical"],
  house: ["introvert", "extrovert", "introvert", "extrovert"],
  fruit: ["logical", "creative", "logical", "creative"],
  activity: ["extrovert", "introvert", "extrovert", "introvert"],
};

// 'quizTaker' object here
let quizTaker = {
  logical: 0,
  creative: 0,
  extrovert: 0,
  introvert: 0,
};

// Make every image clickable!
pictures.forEach((picture) => {
  picture.addEventListener("click", (e) => {
    // Save the user's choice in a variable.
    let choice = picture.id.split("-");
    let answer = quizValues[choice[0]][choice[1]];

    // Change the background yellow
    picture.classList.remove("has-background-light");
    picture.classList.add("has-background-warning");

    // Increment the right personality trait
    quizTaker[answer]++;

    // Only show one question at a time. As each question is answered, reveal the next one.
    questions = ["color", "vacation", "pizza","house", "fruit", "activity"];
    for (let i = 0; i < questions.length - 1; i++){
      if (choice[0] == questions[i]){
        let nextQuestion = document.querySelector("#" + questions[i+1]);
        nextQuestion.classList.remove("hidden")
      };
    };

    
    // If its the last question, unhide the result.
    if (choice[0] == "activity") {
      let resultID;

      if (quizTaker.logical > quizTaker.creative) {
        resultID = "#logical-";
      } else {
        resultID = "#creative-";
      }

      if (quizTaker.introvert > quizTaker.extrovert) {
        resultID += "introvert";
      } else {
        resultID += "extrovert";
      }

      let result = document.querySelector(resultID);
      console.log(result);
      result.classList.remove("hidden");
    }
  });
});
