while(true)
 {
    var fahrenheit = prompt("Enter Fahrenheit Temperature");
    if(fahrenheit == 999)
    {
      break;
    }
    if(fahrenheit < -100 || fahrenheit > 212)
    {
      alert("You entered " + fahrenheit + ".\n" + "Entry must range from -100 to +212");
    }
    var celsius = (fahrenheit - 32) * (5/9);
    document.write(parseFloat(fahrenheit).toFixed(1) + " F = " + parseFloat(celsius).toFixed(1) + " C");
    document.write("<br>");
  }