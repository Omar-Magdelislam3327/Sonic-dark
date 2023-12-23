      let i =    document.querySelector("i");
      let body = document.querySelector("body");
      let link = document.querySelectorAll("link");
      let img = document.querySelector("img");
      console.log(body);
      console.log(i);
      console.log(link);
      console.log(link[1].href);
      console.log(img.src);
      function lightDark(){
          if(i.classList.contains("fa-moon")){
            console.log(1)
            link[1].href = './css/darkStyle.css'
            i.classList.replace("fa-moon","fa-sun");
            img.src='./images/black.png';
        } else {
              console.log(2)
              link[1].href = "./css/style.css";
              i.classList.replace("fa-sun","fa-moon");
              img.src='./images/silver sonic.png';
          }
      }
      i.addEventListener("click", lightDark)