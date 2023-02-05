const loob = document.getElementById("loob"),
      opens = document.getElementById('opens'),
      cloose = document.getElementById('cloose')

      opens.addEventListener('click', () => {
        loob.classList.toggle('show')
      })

      cloose.addEventListener('click', () => {
        loob.classList.remove('show')
      })

function navopen(){
    document.querySelector('img').style.display = 'none'
}

function navclose(){
    document.querySelector('img').style.display = 'block';
}
const img = document.querySelector('img');

img.addEventListener('load', () => {
    img.classList.add('image')
})