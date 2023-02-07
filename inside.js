const loob = document.getElementById("loob"),
      opens = document.getElementById('opens'),
      cloose = document.getElementById('cloose')

      opens.addEventListener('click', () => {
        loob.classList.toggle('show')
      })

      cloose.addEventListener('click', () => {
        loob.classList.remove('show')
      })


const img = document.getElementById('image1');

img.addEventListener('load', () => {
  image1.classList.add('drop')
})

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