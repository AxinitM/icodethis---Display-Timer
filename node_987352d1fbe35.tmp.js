<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
    <title>Display Timer / ICodeThis.com</title>

    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css" rel="stylesheet">


    <!-- <link href="styles.css" rel="stylesheet"> -->
    <style>
      /* General sets */
      :root {
        --bgMainColor: #111;
        --whiteColor: #fff;
        --timerDigitColor: #6681fa;
        --textShadowColor: rgba(0, 0, 0, 0.2);
      }
    
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    
      body {
        background-color: var(--bgMainColor);
        font-family: Arial, sans-serif;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1,5rem;
      }
    

      .container {
        text-align: center;
        max-width: 90vw; 
      }
    
      h1 {
        color: var(--whiteColor);
        margin-bottom: 15px;
        font-size: 2rem;
      }
    
      /* timer section sets */
      .time {
        border: 3px solid var(--whiteColor);
        border-radius: 10px;
        color: var(--timerDigitColor);
        font-size: 3rem;
        font-weight: bold;
        padding: 10px;
        text-shadow: 2px 2px 4px var(--textShadowColor);
        width: 15rem;
        margin: 0 auto;
      }
    
/* dark / light theme  */

.fa-solid {
  margin-top: 3rem;
color: var(--whiteColor);
font-size: 2rem;
}

      /* @media sets */

      @media (max-width: 767px) {
        body {
          align-items: flex-start;
          padding-top: 10rem; 
        }

        .fa-solid {
          padding-top: 40vh; 

font-size: 2rem;
}
    
        /* h1 {
          font-size: 1.5rem;
        }
    
        .time {
          font-size: 2.2rem;
          width: 12rem;
        } */
      }
    </style>
    
  </head>

  <body>
    <div class="container">
      <h1>Current Time</h1>
      <div class="time" id="time">12:30:02</div>
      <i class="fa-solid fa-circle-half-stroke"></i>
      
    </div>

    <!-- <script src="script.js"></script> -->
    <script>
      function currentTime() {
        const nowTime = new Date();
        const timeDisplay = document.getElementById("time");
        
        const hours = String(nowTime.getHours()).padStart(2, "0");
        const minutes = String(nowTime.getMinutes()).padStart(2, "0");
        const seconds = String(nowTime.getSeconds()).padStart(2, "0");

        timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
      }

      currentTime();
      setInterval(currentTime, 1000);
      
    </script>
  </body>
</html>
