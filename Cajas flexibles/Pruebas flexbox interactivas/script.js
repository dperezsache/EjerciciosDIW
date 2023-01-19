'use strict'

window.onload = iniciar

function iniciar() 
{
    const botonInsertar = document.getElementsByTagName('button')[0];
    const botonEliminar = document.getElementsByTagName('button')[1];
    const botonDirection = document.getElementsByTagName('button')[2];
    const botonAlignItems = document.getElementsByTagName('button')[3];
    const botonAumentarGap = document.getElementsByTagName('button')[4];
    const botonReducirGap = document.getElementsByTagName('button')[5];

    botonInsertar.addEventListener('click', insertarDiv);
    botonEliminar.addEventListener('click', borrarDiv);
    botonDirection.addEventListener('click', cambiarDirection);
    botonAlignItems.addEventListener('click', cambiarAlignItems);
    botonAumentarGap.addEventListener('click', aumentarGap);
    botonReducirGap.addEventListener('click', reducirGap);;
}

// Prueba 1
function insertarDiv() 
{
    const div = document.getElementById('divFlex1');
    const nuevoDiv = document.createElement('div');
    nuevoDiv.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    div.appendChild(nuevoDiv);
}

function borrarDiv() 
{
    const div = document.getElementById('divFlex1');

    if(div.lastChild != null)
        div.removeChild(div.lastChild);
}

// Prueba 2
function cambiarDirection() 
{
    const div = document.getElementById('divFlex2');
    const h2 = document.getElementsByTagName('h2')[1];

    switch(div.style.flexDirection) 
    {
        case 'row':
            div.style.flexDirection = 'row-reverse';
            h2.innerText = 'Prueba flex direction (row-reverse)';
            break;
        
        case 'row-reverse':
            div.style.flexDirection = 'column';
            h2.innerText = 'Prueba flex direction (column)';
            break;

        case 'column':
            div.style.flexDirection = 'column-reverse';
            h2.innerText = 'Prueba flex direction (column-reverse)';
            break;

        default:
            div.style.flexDirection = 'row';
            h2.innerText = 'Prueba flex direction (row)';
            break;
    }
}

// Prueba 3
function cambiarAlignItems() 
{
    const div = document.getElementById('divFlex3');
    const h2 = document.getElementsByTagName('h2')[2];

    switch(div.style.alignItems) 
    {
        case 'stretch':
            div.style.alignItems = 'flex-start';
            h2.innerText = 'align-items (flex-start)';
            break;

        case 'flex-start':
            div.style.alignItems = 'flex-end';
            h2.innerText = 'align-items (flex-end)';
            break;

        case 'flex-end':
            div.style.alignItems = 'center';
            h2.innerText = 'align-items (center)';
            break;
        
        case 'center':
            div.style.alignItems = 'baseline';
            h2.innerText = 'align-items (baseline)';
            break;

        default:
            div.style.alignItems = 'stretch';
            h2.innerText = 'align-items (stretch)';
            break;
    }
}

// Prueba 4
function reducirGap()
{
    const div = document.getElementById('divFlex4');

    switch(div.style.gap)
    {
        case '20px':
            div.style.gap = '40px';
            break;

        case '40px':
            div.style.gap = '60px';
            break;

        case '60px':
            div.style.gap = '80px';
            break;

        default:
            div.style.gap = '20px';
            break;
    }
}

function aumentarGap()
{
    const div = document.getElementById('divFlex4');

    switch(div.style.gap)
    {
        case '80px':
            div.style.gap = '60px';
            break;

        case '60px':
            div.style.gap = '40px';
            break;

        case '40px':
            div.style.gap = '20px';
            break;

        default:
            div.style.gap = '20px';
            break;
    }
}