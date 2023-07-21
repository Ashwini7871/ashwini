function changeColor()
    {
      date = new Date();
      hour = date.getHours();
      minute = date.getMinutes();
      second = date.getSeconds();
      fulldate = date.toLocaleTimeString()
      //fullTime = date.toLocaleTimeString('en-US')
      fullTime = date.toLocaleTimeString('en-GB')
      x = document.getElementById("p1");
        x.innerHTML = fulldate;
      if(second%2==0)
      {
        x.style.color="red";
      }
      else
      {
        x.style.color = "blue";
      }

    }
  function start()
  {
    clear = setInterval(changeColor, 1000);
  }
  function stop()
  {
    clearInterval(clear);
  }