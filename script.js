console.log("Application startup")

function take(value, value2, value3) {
  if (value3 == null) {
    console.log("Missing argument")
  }
  else {
    const input = prompt("What's your name?");
    alert(`Your name is ${input}`);
    console.log(`Name: ${input}`)

  }
}

function func(num, num2, last) {
  if (last > 10) {
    console.log("warning")
  }
  else if (last == null) {
    console.log("missing value")
  }
  else {
     take(2, 3, "val")
  }
}
//func(1, 2, 4) 
document.getElementById("checkbox").onclick = function(event) {
    alert("Submit button is clicked!");
    event.preventDefault();
}