function shout(string) {
return string.toUpperCase()
}

function whisper(string) {
return string.toLowerCase()
}

function logShout(Hello) {
console.log(Hello.toUpperCase())
}
  
function logWhisper(Hello) {
console.log(Hello.toLowerCase())
}


function sayHiToHeadphonedRoommate(string) 
{
  var cantUnswer = "I can't hear you!";
  var yesUnswer = "YES INDEED!";
  var lovUnswer = "I would love to!";

  if (string.toLowerCase(string) === string) {
    return cantUnswer ;
  }
  else if (string.toUpperCase(string) === string){
  return yesUnswer
  }

   else if ("Let's have dinner together!" === string) {
  return lovUnswer;
  }
}
