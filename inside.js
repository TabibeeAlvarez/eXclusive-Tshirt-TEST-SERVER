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