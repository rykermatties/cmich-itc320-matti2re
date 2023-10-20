while(true)
{

  var numGrade = prompt("Enter number grade form 0 through 100\n" + "Or enter 999 to end entries");
  var letterGrade = "";

  if(numGrade == 999)
  {
    break;
  }

  else if(numGrade < 0 || numGrade > 100)
  {
    continue;
  }

  if(numGrade >= 94)
  {
    letterGrade = "A";
  }
  else if(numGrade >= 90)
  {
    letterGrade = "A-";
  }
  else if(numGrade >= 87)
  {
    letterGrade = "B+";
  }
  else if(numGrade >= 84)
  {
    letterGrade = "B-";
  }
  else if(numGrade >= 80)
  {
    letterGrade = "B-";
  }
  else if(numGrade >= 77)
  {
    letterGrade = "C+";
  }
  else if(numGrade >= 74)
  {
    letterGrade = "C";
  }
  else if(numGrade >= 70)
  {
    letterGrade = "C-";
  }
  else if(numGrade >= 67)
  {
    letterGrade = "D+";
  }
  else if(numGrade >= 64)
  {
    letterGrade = "D";
  }
  else if(numGrade >= 60)
  {
    letterGrade = "D-";
  }
  else if(numGrade >= 0)
  {
    letterGrade = "E";
  }

  document.write("Grade " + numGrade + " = " + letterGrade);
  document.write("<br>")
}
