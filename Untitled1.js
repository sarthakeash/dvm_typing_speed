document.getElementById("final").classList.add("final2");

document.querySelector(".but").addEventListener("click", myf);

function myf(){
setTimeout(
function(){let str =document.getElementById("type").value;
str=str.replace(/\s/g, "");
document.getElementById("speed").innerHTML=(str.length)/60;
document.getElementById("type").style.visibility="hidden";
document.getElementById("final").classList.remove("final2");
document.getElementById("final").classList.add("final1");
document.getElementById("timer").style.visibility="hidden";
document.getElementById("words").style.visibility="hidden";
document.querySelector(".start").style.visibility="hidden";


}, 2000);}

document.querySelector(".but").addEventListener("click", myf1);


function myf1(){
  const RANDOM_text_API_URL = 'https://api.chucknorris.io/jokes/random';
  const textDisplayElement = document.getElementById('words');
  const textInputElement = document.getElementById('type');
  const timerElement = document.getElementById('timer');


  let startTime;
  function startTimer() {
    timerElement.innerText = "00";
    startTime = new Date();
    setInterval(() => {
      timer.innerText = getTimerTime()
    }, 1000)
  }
  
  function getTimerTime() { if(Math.floor((new Date() - startTime) / 1000) < 10)
    return '0' + Math.floor((new Date() - startTime) / 1000);
    else return  Math.floor((new Date() - startTime) / 1000);
  }
  
  startTimer();
  

  textInputElement.addEventListener('input', () => {
    const arraytext = textDisplayElement.querySelectorAll('span')
    const arrayValue = textInputElement.value.split(" ");
    let correct = true
    arraytext.forEach((characterSpan, index) => {
      const character = arrayValue[index];
      
      if (character == null) {
        characterSpan.classList.remove('correct')
        characterSpan.classList.remove('incorrect')
        correct = false
      } else if (character === characterSpan.innerText) {
        characterSpan.classList.add('correct')
        characterSpan.classList.remove('incorrect')
      } else {
        characterSpan.classList.remove('correct')
        characterSpan.classList.add('incorrect')
        correct = false
      }
    })
  
    if (correct) renderNewtext()
  })
  
  function getRandomtext() {
    return fetch(RANDOM_text_API_URL)
      .then(response => response.json())
      .then(data => data.value)
  }
  
  async function renderNewtext() {
    const text = await getRandomtext()
    textDisplayElement.innerHTML += ''
    text.split(" ").forEach(character => {
      const characterSpan = document.createElement('span');

      characterSpan.innerText = character;

      textDisplayElement.appendChild(characterSpan);
    })
   
 
  }
  renderNewtext()
   
    }

    function refresh(){
      window.location.reload();
    }