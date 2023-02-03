function hide(){
    window.addEventListener('click', () => {
        document.getElementById('hides').style.display = 'none';
       
    })
}

function show(){
    window.addEventListener('click', () => {
        document.getElementById('hides').style.display = 'block';
        document.getElementById('show').style.display = 'none';
    })
}