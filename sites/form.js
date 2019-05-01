
let numberField = document.getElementById("numb");
let wordField = document.getElementById("favoriteWord");
let nameField = document.getElementById("nameField");
let feedback_text = document.getElementById("demo");

numberField.addEventListener("keyup", event => {
    // get value from numberfield
    num = numberField.value;

    updateMessage(num);
    
  });

  wordField.addEventListener("keyup", event => {
    // get value from numberfield
    if (wordField.value != "" && isNaN(wordField.value)) {
      feedback_text.innerHTML = "KUULT!";
    } else {
      feedback_text.innerHTML = "Du må skrive inn et ord med bare tall!!!!";
      feedback_text.style.color = "red";
    }
  });

  nameField.addEventListener("keyup", event => {
    // get value from numberfield
    if (nameField.value != "" && nameField.value.length > 2) {
      feedback_text.innerHTML = "Hei " + nameField.value + "!";
    } else if (nameField.value.length <= 2) {
      feedback_text.innerHTML = "Har du så kort navn?";
    } else {
      feedback_text.innerHTML = "";
    }
  });

function updateMessage(newNumber) {

  let text;

  if (isNaN(newNumber) || newNumber < 1 || newNumber > 10) {
    text = "Skriv inn et tall mellom 1-10";
    feedback_text.style.color = "red";
  } else {
    text = "Du kan bruke dette tallet";
    feedback_text.style.color = "green";
  }
  feedback_text.innerHTML = text;
}