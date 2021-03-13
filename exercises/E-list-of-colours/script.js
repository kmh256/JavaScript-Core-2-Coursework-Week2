function listOfColours(colours) {
  let content = document.querySelector("#content");

  // Creates h1 element
  let h1Tag = document.createElement("h1");
  h1Tag.innerText = "Select the colour of the words";
  content.appendChild(h1Tag);

  // * Create a `<select>` element.
  let selectTag = document.createElement("select");

  // * Create a `<p>` element.
  let pTag = document.createElement("p");
  content.appendChild(pTag);

  // * Iterate through the array of colours.
  for (let colour of colours) {
    // * Each element in the array should add a `<option>` to the `<select>`, where the `<option>` is the element in the array.
    let optionTag = document.createElement("option");
    optionTag.value = colour;
    optionTag.innerText = colour;
    selectTag.appendChild(optionTag);

    // * Each `<option>` should have a 'click' event listener to update the contents and colour of the `<p>` with the selected colour.
  selectTag.addEventListener("click", colourSelection);

    function colourSelection() {
      pTag.innerText = `You have selected: ${selectTag.value}`;
      pTag.style.color = selectTag.value;
    }
  }
  // * All of your HTML should go inside the `<div>` with the id **"content"**.
  content.appendChild(selectTag);
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);