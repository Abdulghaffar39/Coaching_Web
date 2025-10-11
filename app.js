


function menu() {

    let navbar = document.getElementById('nav2Box');
    let dropDown = document.getElementById('dropDown');
    let menu = document.getElementById('menu');
    let cut = document.getElementById('cut');

    navbar.style.backgroundColor = '#163E74';
    dropDown.style.backgroundColor = '#163E74';
    dropDown.style.display = 'flex';
    menu.style.display = 'none';
    cut.style.display = 'block';

    // console.log('alsdjfolsdjkfl');
    
}

function cut() {

    let navbar = document.getElementById('nav2Box');
    let dropDown = document.getElementById('dropDown');
    let menu = document.getElementById('menu');
    let cut = document.getElementById('cut');

    navbar.style.backgroundColor = 'transparent';
    dropDown.style.display = 'none';
    menu.style.display = 'block';
    cut.style.display = 'none';

    // console.log('alsdjfolsdjkfl');
    
}
