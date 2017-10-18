function convert (temperature,temperatureType){
  console.log()

  if (temperatureType === 'celsius'){
    console.log((temperature * (9 / 5)) + 32 + "fahrenheit");
  }else if (temperatureType === 'fahrenheit'){
    console.log((temperature - 32) * (5 / 9) + "celsius");
  } else {
    console.log ("Error. Please enter 'celsius' or 'fahrenheit'.")
  }
}

convert (24, 'celsius');
convert(75, 'fahrenheit');
convert (74, 'c');




// var celsius = * (9 / 5) + 32;
// var fahrenheit = - 32 * (5 / 9);
//
// prompt ("Enter the temperature you want to convert in celsius or fahrenheit.");
//
// function convert (degree){
//   var x;
//   if (degree === "C") {
//     x = document.getElementById("c").value * 9 / 5 + 32;
//     document.getElementById("f").value = Math.round(x);
// } else if {
//     x = (document.getElementById("f").value -32) * 5 / 9;
//     document.getElementById("c").value = Math.round(x);
// }
// }




  //When the variable is entered
    //if the variable is in celsius, multiply by (9/5) + 32
    //else if subtract 32, and multiply by 5/9
    //else respond with error message
