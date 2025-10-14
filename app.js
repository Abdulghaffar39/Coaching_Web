
let dropDown = document.getElementById('dropDown');
dropDown.style.display = 'none';


function menu() {
    
    let navbar = document.getElementById('nav2Box');
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

function result() {
        
    window.location.href = 'result.html'
}

function back() {
        
    window.location.href = 'index.html'
}

function about() {
        
    window.location.href = 'about.html'
}

