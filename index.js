var toggleImage = document.querySelector("#darkmode")

function darkMode(e){
    if (e.name =='night'){
        document.querySelector("#mainDiv").classList.remove("bg-slate-900");
        document.querySelector("#mainDiv").classList.remove("text-white");
        toggleImage.src = "https://i.postimg.cc/cH9Cb5qd/moon.png"
        e.name = 'day';

    }else{
            document.querySelector("#mainDiv").classList.add("bg-slate-900");
            document.querySelector("#mainDiv").classList.add("text-white");
            toggleImage.src = "https://i.postimg.cc/CKpqGt0t/day.png"
            e.name = 'night';   
    }
}







function menu(e){
    if (e.name == "open"){
        document.querySelector("#nav").classList.replace("opacity-0","opacity-100")
        e.name = "close"
    }else{
        document.querySelector("#nav").classList.replace("opacity-100","opacity-0")
        e.name = "open"
    }
}
window.onload = function() {
    setTimeout(function() {
      document.body.classList.add('loaded');
    }, 1000);
  };