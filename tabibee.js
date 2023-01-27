//Welcome section 1
const welcome = document.querySelectorAll('.welcome');
window.addEventListener('scroll', welcums);

function welcums(){
    const triggerBottom = innerHeight / 5 * 4;

    welcome.forEach(wel => {
        const welTop = wel.getBoundingClientRect().top

        if(welTop < triggerBottom){
            wel.classList.add('wel')
        }
        else{
            wel.classList.remove('wel')
        }
    })
}

//Light mode

function lights(){
    document.querySelector('body').style.backgroundColor = 'white';
    document.getElementById('section1').style.backgroundColor = 'white';
    document.getElementById('section2').style.backgroundColor = 'white';
    document.getElementById('section3').style.backgroundColor = 'white';
    document.getElementById('light').style.display = 'none';
    document.getElementById('ilaw').style.display = 'block';
    document.getElementById('tt').style.color = 'black';
    document.getElementById('design').style.color = 'black';
    document.getElementById('contact').style.color = 'black';
    document.getElementById('tabibee').style.color = 'black';
    document.getElementById('started').style.backgroundColor = 'black'
    document.getElementById('started').style.color = 'white';
    document.getElementById('container').style.boxShadow = '25px 15px 50px black';
    document.getElementById('bs').style.boxShadow = '2px 0px 25px black'
    document.getElementById('bss').style.boxShadow = '2px 0px 25px black'
    document.getElementById('bsss').style.boxShadow = '2px 0px 25px black'
    document.getElementById('bssss').style.boxShadow = '2px 0px 25px black'
    document.getElementById('bsssss').style.boxShadow = '2px 0px 25px black'
    document.querySelector('.img55').style.boxShadow = '2px 0px 25px black'
    document.querySelector('.img56').style.boxShadow = '2px 0px 25px black'
    document.getElementById('prits').style.color = 'black'
    document.getElementById('prits').style.textShadow = '2px 2px 4px red';
    document.getElementById('welcome').style.color = 'black'
    document.getElementById('footer').style.backgroundColor = '#333'
    document.getElementById('tshirt').style.color = 'black'
    document.getElementById('img6').style.boxShadow = '2px 0px 25px black';
    document.getElementById('img7').style.boxShadow = '2px 0px 25px black';
    document.getElementById('img8').style.boxShadow = '2px 0px 25px black';
    document.getElementById('img9').style.boxShadow = '2px 0px 25px black';
    document.querySelector('.likod').style.backgroundColor = 'white'
    document.querySelector('.likod').style.boxShadow = '2px 0px 25px black'
    document.querySelector('.head').style.color = 'black'
    document.getElementById('sulat').style.color = 'black'
    document.getElementById('bg').style.backgroundColor = 'white'
    document.querySelector('.qualification').style.boxShadow = '3px 0px 25px black'
    document.querySelector('.qualification').style.backgroundColor = 'white'
    document.getElementById('infota').style.color = 'black'
}

function ilaws(){
    document.querySelector('body').style.backgroundColor = '#111';
    document.getElementById('section1').style.backgroundColor = '#111';
    document.getElementById('section2').style.backgroundColor = '#111';
    document.getElementById('section3').style.backgroundColor = '#111';
    document.getElementById('light').style.display = 'block';
    document.getElementById('ilaw').style.display = 'none';
    document.getElementById('tt').style.color = 'white';
    document.getElementById('design').style.color = 'white';
    document.getElementById('contact').style.color = 'white';
    document.getElementById('tabibee').style.color = 'white';
    document.getElementById('started').style.backgroundColor = 'red'
    document.getElementById('started').style.color = 'black'
    document.getElementById('container').style.boxShadow = '3px 0px 15px red';
    document.getElementById('bs').style.boxShadow = '3px 0px 15px red'
    document.getElementById('bss').style.boxShadow = '3px 0px 15px red'
    document.getElementById('bsss').style.boxShadow = '3px 0px 15px red'
    document.getElementById('bssss').style.boxShadow = '3px 0px 15px red'
    document.getElementById('bsssss').style.boxShadow = '3px 0px 15px red'
    document.querySelector('.img55').style.boxShadow = '2px 0px 25px red'
    document.querySelector('.img56').style.boxShadow = '2px 0px 25px red'
    document.getElementById('prits').style.color = 'white'
    document.getElementById('welcome').style.color = 'red'
    document.getElementById('tshirt').style.color = 'white'
    document.getElementById('img6').style.boxShadow = '2px 0px 25px red';
    document.getElementById('img7').style.boxShadow = '2px 0px 25px red';
    document.getElementById('img8').style.boxShadow = '2px 0px 25px red';
    document.getElementById('img9').style.boxShadow = '2px 0px 25px red';
    document.querySelector('.likod').style.backgroundColor = 'black'
    document.querySelector('.likod').style.boxShadow = '2px 0px 25px red'
    document.querySelector('.head').style.color = 'white'
    document.getElementById('sulat').style.color = 'white'
    document.getElementById('bg').style.backgroundColor = 'black'
    document.querySelector('.qualification').style.boxShadow = '3px 0px 25px red'
    document.querySelector('.qualification').style.backgroundColor = 'black'
    document.getElementById('infota').style.color = 'white'
}

//T shirts
const shirt1 = document.querySelectorAll('.img6');
window.addEventListener('scroll', shirt);

function shirt(){
    const triggerBottom = innerHeight / 5 * 4;

    shirt1.forEach(shi => {
        const shiTop = shi.getBoundingClientRect().top;

        if(shiTop < triggerBottom){
            shi.classList.add('shirt1')
        }
        else{
            shi.classList.remove('shirt1')
        }
    })
}

const shirt2 = document.querySelectorAll('.img7');
window.addEventListener('scroll', shirtt);

function shirtt(){
    const triggerBottom = innerHeight / 5 * 4;

    shirt2.forEach(shii => {
        const shiiTop = shii.getBoundingClientRect().top;

        if(shiiTop < triggerBottom){
            shii.classList.add('shirt2')
        }
        else{
            shii.classList.remove('shirt2')
        }
    })
}

const shirt3 = document.querySelectorAll('.img8');
window.addEventListener('scroll', shirttt);

function shirttt(){
    const triggerBottom = innerHeight / 5 * 4;

    shirt3.forEach(shiii => {
        const shiiiTop = shiii.getBoundingClientRect().top;

        if(shiiiTop < triggerBottom){
            shiii.classList.add('shirt3')
        }
        else{
            shiii.classList.remove('shirt3')
        }
    })
}

const shirt4 = document.querySelectorAll('.img9');
window.addEventListener('scroll', shirtttt);

function shirtttt(){
    const triggerBottom = innerHeight / 5 * 4;

    shirt4.forEach(shiiii => {
        const shiiiiTop = shiiii.getBoundingClientRect().top;

        if(shiiiiTop < triggerBottom){
            shiiii.classList.add('shirt4')
        }
        else{
            shiiii.classList.remove('shirt4')
        }
    })
}

//section 3 bg

const bg1 = document.querySelectorAll('.bg');
window.addEventListener('scroll', back);

function back(){
    const triggerBottom = innerHeight / 5 * 4;

    bg1.forEach(ground => {
        const groundTop = ground.getBoundingClientRect().top;

        if(groundTop < triggerBottom){
            ground.classList.add('background')
        }
        else{
            ground.classList.remove('background')
        }
    })
}

const bg2 = document.querySelectorAll('.likod');
window.addEventListener('scroll', backk);

function backk(){
    const triggerBottom = innerHeight / 5 * 4;

    bg2.forEach(grounds => {
        const groundsTop = grounds.getBoundingClientRect().top;

        if(groundsTop < triggerBottom){
            grounds.classList.add('background')
        }
        else{
            grounds.classList.remove('background')
        }
    })
}




//                             FOR CELLPHONE                                   //

function off(){
    document.getElementById('offf').style.display = 'none'
    document.getElementById('onn').style.opacity = '100'
    document.querySelector('.main').style.backgroundColor = 'white'
    document.querySelector('.main').style.boxShadow = '3px 0px 25px deepskyblue'
    document.querySelector('.contact1').style.color = 'black'
    document.querySelector('.tshirts1').style.color = 'black'
    document.querySelector('.designs1').style.color = 'black'
    document.querySelector('html').style.backgroundColor = 'white'
    document.querySelector('.cell-phone').style.backgroundColor = 'white'
    document.getElementById('second').style.backgroundColor = 'white'
    document.getElementById('sb').style.boxShadow = '3px 0px 15px deepskyblue'
    document.getElementById('ssb').style.boxShadow = '3px 0px 15px deepskyblue'
    document.getElementById('sssb').style.boxShadow = '3px 0px 15px deepskyblue'
    document.getElementById('ssssb').style.boxShadow = '3px 0px 15px deepskyblue'
    document.getElementById('sssssb').style.boxShadow = '3px 0px 15px deepskyblue'
    document.getElementById('ssssssb').style.boxShadow = '3px 0px 15px deepskyblue'
    document.getElementById('sssssssb').style.boxShadow = '3px 0px 15px deepskyblue'
    document.getElementById('welcomee').style.textShadow = '2px 2px 2px black'
    document.getElementById('welcomee').style.color = 'deepskyblue'
    document.getElementById('printer').style.textShadow = '2px 2px 2px black'
    document.getElementById('printer').style.color = 'deepskyblue'
    document.getElementById('pangatlo').style.backgroundColor = 'white'
    document.getElementById('img66').style.boxShadow = '3px 0px 15px deepskyblue'
}

function on(){
    document.getElementById('onn').style.opacity = '0'
    document.getElementById('offf').style.display = 'block'
    document.querySelector('.main').style.backgroundColor = 'black'
    document.querySelector('.main').style.boxShadow = '3px 0px 25px grey'
    document.querySelector('.contact1').style.color = 'white'
    document.querySelector('.tshirts1').style.color = 'white'
    document.querySelector('.designs1').style.color = 'white'
    document.querySelector('html').style.backgroundColor = '#111 '
    document.querySelector('.cell-phone').style.backgroundColor = '#111'
    document.getElementById('second').style.backgroundColor = '#111'
    document.getElementById('sb').style.boxShadow = '3px 0px 15px red'
    document.getElementById('ssb').style.boxShadow = '3px 0px 15px red'
    document.getElementById('sssb').style.boxShadow = '3px 0px 15px red'
    document.getElementById('ssssb').style.boxShadow = '3px 0px 15px red'
    document.getElementById('sssssb').style.boxShadow = '3px 0px 15px red'
    document.getElementById('ssssssb').style.boxShadow = '3px 0px 15px red'
    document.getElementById('sssssssb').style.boxShadow = '3px 0px 15px red'
    document.getElementById('welcomee').style.textShadow = '2px 2px 4px red'
    document.getElementById('welcomee').style.color = 'white'
    document.getElementById('printer').style.textShadow = '2px 2px 2px red'
    document.getElementById('printer').style.color = 'white'

}