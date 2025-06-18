// JavaScript goes here.
let kendrick = 0;
let carti = 0;
let tyler = 0;
let lana = 0;
let laufey = 0;
let kanye = 0;
let x = 0;

let buttons = document.querySelectorAll(".option");
let outfit = document.querySelector(".outfit");
let vibe = document.querySelector(".vibe");
let genre = document.querySelector(".genre");
let vacation = document.querySelector(".vacation");
let order = 0;
let result = document.querySelector(".result");
let text = document.querySelector(".text");
let resultImage= document.querySelector(".resultImage");
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.classList.contains("kendrick")) {
      kendrick++;
    }
    if (button.classList.contains("carti")) {
      carti++;
    }
    if (button.classList.contains("tyler")) {
      tyler++;
    }
    if (button.classList.contains("lana")) {
      lana++;
    }
    if (button.classList.contains("laufey")) {
      laufey++;
    }
    if (button.classList.contains("kanye")) {
      kanye++;
    }
    if (button.classList.contains("x")) {
      x++;
    }
    order+=1;
    console.log(order);
    if (order === 0) {
      vacation.style.display = "none";
      vibe.style.display = "none";
      outfit.style.display = "block";
      genre.style.display = "none";
      result.style.display = "none";
    } else if (order === 1) {
      vacation.style.display = "none";
      vibe.style.display = "block";
      outfit.style.display = "none";
      genre.style.display = "none";
    } else if (order === 2) {
      vacation.style.display = "block";
      vibe.style.display = "none";
      outfit.style.display = "none";
      genre.style.display = "none";
    } else if (order === 3) {
      vacation.style.display = "none";
      vibe.style.display = "none";
      outfit.style.display = "none";
      genre.style.display = "block";
    } else if (order === 4) {
      vacation.style.display = "none";
      vibe.style.display = "none";
      outfit.style.display = "none";
      genre.style.display = "none";
      order = -1;
      result.style.display = "block";
      
        
        
           
         if (carti >= kendrick && carti >= tyler && carti >= lana && carti >= laufey && carti >= kanye && carti >= x) {
            text.innerHTML = "You are Playboi Carti!";
            resultImage.src = "https://pbs.twimg.com/media/EoKeaDXVcAU7GST.jpg:large";
            x=0;
            kendrick = 0;
            carti = 0;
            tyler = 0;
            lana = 0;
            laufey = 0;
            kanye = 0;
        } else if (kanye >= kendrick && kanye >= carti && kanye >= tyler && kanye >= lana && kanye >= laufey && kanye >= x) {
            text.innerHTML = "You are Kanye West!";
            resultImage.src = "https://hips.hearstapps.com/hmg-prod/images/kanye-west-attends-the-2020-vanity-fair-oscar-party-hosted-news-photo-1742326400.pjpeg?crop=0.668xw:1.00xh;0.141xw,0&resize=640:*";
            x=0;
            kendrick = 0;
            carti = 0;
            tyler = 0;
            lana = 0;
            laufey = 0;
            kanye = 0;
        } else if (tyler >= kendrick && tyler >= carti && tyler >= lana && tyler >= laufey && tyler >= kanye && tyler >= x) {
            text.innerHTML = "You are Tyler, The Creator!";
            resultImage.src = "https://m.media-amazon.com/images/I/81mqHLezXNL._AC_SL1500_.jpg";
            x=0;
            kendrick = 0;
            carti = 0;
            tyler = 0;
            lana = 0;
            laufey = 0;
            kanye = 0;
        } else if (lana >= kendrick && lana >= carti && lana >= tyler && lana >= laufey && lana >= kanye && lana >= x) {
            text.innerHTML = "You are Lana Del Rey!";
            resultImage.src = "https://faroutmagazine.co.uk/static/uploads/1/2023/03/Lana-Del-Rey-2023-Far-Out-Magazine-1140x855.jpg";
            x=0;
            kendrick = 0;
            carti = 0;
            tyler = 0;
            lana = 0;
            laufey = 0;
            kanye = 0;
        } else if (laufey >= kendrick && laufey >= carti && laufey >= tyler && laufey >= lana && laufey >= kanye && laufey >= x) {
            text.innerHTML = "You are Laufey!";
            resultImage.src = "https://images.vs-static.com/JryW1ntUQz7OIotfvTVejtpWx9E=/92x693:1785x2950/1900x0/Laufey_press_photos_album_artwork_PC_Gemma_Warren_c734869962/Laufey_press_photos_album_artwork_PC_Gemma_Warren_c734869962.jpeg";
            x=0;
            kendrick = 0;
            carti = 0;
            tyler = 0;
            lana = 0;
            laufey = 0;
            kanye = 0;
        
        }else if (kendrick >= carti && kendrick >= tyler && kendrick >= lana && kendrick >= laufey && kendrick >= kanye && kendrick >= x) {
                text.innerHTML = "You are Kendrick Lamar!";
                resultImage.src = "https://assets.vogue.com/photos/62b9b6b4b140e0196e1a6e1b/master/w_2240,c_limit/GettyImages-1405304275.jpg";
                x=0;
                kendrick = 0;
                carti = 0;
                tyler = 0;
                lana = 0;
                laufey = 0;
                kanye = 0;
        } else {
            text.innerHTML = "You are XXXTENTACION!";
            resultImage.src = "https://www.billboard.com/wp-content/uploads/media/xxxtentacion-press-photo-2018-billboard-1548.jpg?w=1024"
            x=0;
            kendrick = 0;
            carti = 0;
            tyler = 0;
            lana = 0;
            laufey = 0;
            kanye = 0;
            
        }
    }
    console.log(kendrick, carti, tyler, lana, laufey, kanye, x);
  });
});
