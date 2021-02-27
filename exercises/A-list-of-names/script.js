function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");

  for (let person of arrayOfPeople) {

    // - Add a `<h1>` tag to the html containing the name of the person. Creates h1 element then changes inside of tags to names in object
    let h1Tag = document.createElement("h1");
    h1Tag.innerText = `Name: ${person.name}`;

    // - Add a `<h2>` tag to the html containing the job of the person. Creates h2 element then changes inside of tags to jobs in object
    let h2Tag = document.createElement("h2");
    h2Tag.innerText = `Job: ${person.job}`;

    // - All of your HTML should go inside the `<div>` with the id **"content"**: Adds h1Tag as a child node of the div with id "content"
    content.appendChild(h1Tag);
    content.appendChild(h2Tag);
  }
};

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);