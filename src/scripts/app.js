const hoverElement = document.getElementById('scroll-to-section');
const displayHint = document.getElementsByClassName('hint');
const shortcuts = document.querySelectorAll('.shortcut');
const sections = document.querySelectorAll('section');
const imgDownElems = [
    ...document.querySelectorAll(".decor-down"),
    ...document.querySelectorAll(".decor-img-woman")
];
const imgUpElems = [
    ...document.querySelectorAll(".decor-up"),
    ...document.querySelectorAll(".decor-img-man")
];
const showAlertDialog = document.getElementById('alert-dialog');



// hover to show the hint
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

//click the hint
// for (const shortcut of shortcuts) {
//     shortcut.addEventListener('click', function() {
//         // 移除所有按鈕的 active 類別
//         for (const s of shortcuts) {
//             s.classList.remove('shortcut-active');
//         }
//         // 為當前按鈕添加 active 類別
//         this.classList.add('shortcut-active');
//     });
// }

// active shortcut
function activateShortcut(id) {
    for (const s of shortcuts) {
        s.classList.remove('shortcut-active');
        if (s.id == `shortcut-${id}`) {
            s.classList.add('shortcut-active')
        }
    }
}

// animate decor-down pic
function decorDownImg(id){
    for (const img of imgDownElems) {
        if (img.id == `decor-down-${id}`) {
            img.classList.remove('fade-out');
            img.classList.add('fade-in');
        } else {
            img.classList.remove('fade-in');
            img.classList.add('fade-out');
        }
    }
}

// animate decor-up pic
function decorUpImg(id){
    for (const img of imgUpElems) {
        if (img.id == `decor-up-${id}`) {
            img.classList.remove('fade-out-smooth');
            img.classList.add('fade-in-smooth');
        } else {
            img.classList.remove('fade-in-smooth');
            img.classList.add('fade-out-smooth');
        }
    }
}

//scroll to the section
window.addEventListener('scroll', () => {
    let fromTop = window.scrollY;
    for (const section of sections) {
        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            const id = section.getAttribute('id');
            activateShortcut(id);
            decorDownImg(id);
            decorUpImg(id);
        }
    }
});

//alert when innerWidth < 960px
window.addEventListener('resize', function() {
    if (window.innerWidth >= 960) {
        showAlertDialog.style.display = 'none';
    }else{
        showAlertDialog.style.display = 'block';
    }
});
