//function to search by Books, authors, etc...
function search() { 
    let input = document.getElementById('search').value 
    input=input.toLowerCase(); 
    let x = document.querySelectorAll('.card p'); 
    const section = document.querySelectorAll('.section')
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="card"; 
            // section.style.display = "none";
                             
        } 
    } 
} 
//Displaying the nav in mobile view
function showSidebar() {
    const bar = document.querySelector('.sidebar');
    const nav = document.querySelector('.combined');
    const arrow = document.querySelector('.arrow');

    if(bar.style.width === '0') {
        bar.style.width = '20vw';
        nav.style.display = 'none';
        arrow.style.display = 'block';
    }
    else {
        bar.style.width = '0';
        nav.style.display = 'block';
        arrow.style.display = 'none';
    }
}

function closeSidebar() {

}