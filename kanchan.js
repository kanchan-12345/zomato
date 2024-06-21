function changeText(id) {
    id.innerHTML = "welcome to food app"  ;}
    


    function displayDate() {
        document.getElementById("demo").innerHTML = Date();
      }



      var x = document.getElementById("myBtn");
      x.addEventListener("click", myFunction);
      x.addEventListener("click", someOtherFunction);
      
      function myFunction() {
        alert ("welcome to downloading step");
      }
      
      function someOtherFunction() {
        alert ("start downloading");
      }

      function myFunction2() {
        const myCollection = document.getElementsByTagName("h5");
        for (let i = 0; i < myCollection.length; i++) {
          myCollection[i].style.color = "blue";
        }
      }