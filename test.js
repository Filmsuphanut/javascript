
let inp = prompt("เอาเลขมา");



for(var count = 0 ; count < 25 ; count++){
   // document.getElementById("zawarudo").innerHTML = "<iframe width=\"967\" height=\"544\" src=\"https://www.youtube.com/embed/z-NuxWkYtlI\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
   let num = Math.floor(Math.random() * 100);
   console.log(inp,num);
   if(parseInt(inp) === num){
        document.getElementById("zawarudo").innerHTML = "<iframe width=\"967\" height=\"544\" src=\"https://www.youtube.com/embed/z-NuxWkYtlI\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
        break;
   }
}