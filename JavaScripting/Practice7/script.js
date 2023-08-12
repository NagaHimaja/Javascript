function show()
{
    var loopVar = 0;                  
    var courses = ["HTML", "CSS", "JS", "Bootstrap", "Angular", "ReactJS"];  
    document.write("<b><br>Some popular web technologies are: <br><br></b>");

    for(loopVar=0;loopVar<courses.length;loopVar++)
    {
      document.write(`<i>${courses[loopVar]}</i>`);
      document.write("<br/>");
    }
}
