const loob = document.getElementById("loob"),
      opens = document.getElementById('opens'),
      cloose = document.getElementById('cloose')

      opens.addEventListener('click', () => {
        loob.classList.toggle('show')
      })

      cloose.addEventListener('click', () => {
        loob.classList.remove('show')
      })


// const img = document.getElementById('image1');

// img.addEventListener('load', () => {
//   image1.classList.add('drop')
// })

const welcome = document.querySelectorAll('.welcome');
window.addEventListener('scroll', wels);

function wels(){
  const triggerBottom = innerHeight / 5 * 4;

  welcome.forEach(wels => {
    const welsTop = wels.getBoundingClientRect().top;

    if(welsTop < triggerBottom){
      wels.classList.add('welcomes')
    }
    else{
      wels.classList.remove('welcomes')
    }
  })
}

function light(){
  document.getElementById('ilaw').style.display = 'none'
  document.getElementById('ilaws').style.display = 'block'
  document.getElementById('main-div').style.backgroundColor = 'white';
  document.getElementById('loob').style.backgroundColor = 'black'
  document.getElementById('cloose').style.color = 'white'
  document.getElementById('contact').style.color = 'white'
  document.getElementById('tshirt').style.color = 'white'
  document.getElementById('design').style.color = 'white'
  document.getElementById('back').style.color = 'black'
  document.getElementById('opens').style.color = 'black'

}

function dark(){
  document.getElementById('ilaw').style.display = 'block'
  document.getElementById('ilaws').style.display = 'none'
  document.getElementById('main-div').style.backgroundColor = 'black';
  document.getElementById('loob').style.backgroundColor = 'white'
  document.getElementById('cloose').style.color = 'black'
  document.getElementById('contact').style.color = 'black'
  document.getElementById('tshirt').style.color = 'black'
  document.getElementById('design').style.color = 'black'
  document.getElementById('back').style.color = 'white'
  document.getElementById('opens').style.color = 'white'

}