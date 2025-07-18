import './style.css'



function setClock(){
    const now = new Date();
    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();

    const secdeg = ((second/60)*360) + 90;
    const mindeg = ((minute/60)*360) + 90;
    const hourdeg = ((hour/12)*360) + 90;

    document.querySelector('.second-hand').style.transform = `rotate(${secdeg}deg)`;
    document.querySelector('.minute-hand').style.transform = `rotate(${mindeg}deg)`;
    document.querySelector('.hour-hand').style.transform = `rotate(${hourdeg}deg)`;


}

setInterval(setClock, 1000);