function getVerse(){
  text=document.getElementById("vers").innerHTML;

  obj=JSON.parse(text);

  var antallVers = obj.sjiraffenvers.length;

  var i = Math.floor((Math.random() * antallVers));

  document.getElementById("visvers").innerHTML= obj.sjiraffenvers[i]['tekst'];

}
