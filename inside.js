const loob = document.getElementById("loob"),
      opens = document.getElementById('opens'),
      cloose = document.getElementById('cloose')

      opens.addEventListener('click', () => {
        loob.classList.toggle('show')
      })

      cloose.addEventListener('click', () => {
        loob.classList.remove('show')
      })

// function navopen(){
//     document.querySelector('img').style.display = 'none'
// }

// function navclose(){
//     document.querySelector('img').style.display = 'block';
// }

const img = document.getElementById('image1');

img.addEventListener('load', () => {
  image1.classList.add('drop')
})

function shopnow(){
  const button1 = document.getElementById('button1');

  button1.addEventListener('click', () => {
    window.location.href = 'https://www.facebook.com/Tabibeegaming'
  })
}