const hoverElement = document.getElementById('scroll-to-section');
const displayHint = document.getElementsByClassName('hint');

hoverElement.addEventListener('mouseover', showHint);
hoverElement.addEventListener('mouseout', hideHint);

function showHint(){
    for (let hint of displayHint) {
        hint.style.display = 'block';
        hint.style.transition = 'all 1s ease-in 1s';
    }
    
}

function hideHint(){
    for (let hint of displayHint) {
        hint.style.display = 'none';
        hint.style.transition = 'none';
    }
}

