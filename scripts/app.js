const hoverElement = document.getElementById('scroll-to-section');
const displayHint = document.getElementsByClassName('hint');
const shortcuts = document.querySelectorAll('.shortcut');
const sections = document.querySelectorAll('section');


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

//scroll to the section
window.addEventListener('scroll', () => {
    let fromTop = window.scrollY;

    for (const section of sections) {
        // 如果區域在視窗中，添加 active 類別
        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            const id = section.getAttribute('id');
            for (const s of shortcuts) {
                s.classList.remove('shortcut-active');
                if (s.id == `shortcut-${id}`) {
                    s.classList.add('shortcut-active')
                }
            }
        }
    }
});

//animation

const imgDownElems = document.querySelectorAll(".decor-down");

window.addEventListener('scroll', () => {
    let fromTop = window.scrollY;

    for (const section of sections) {
        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            for (let imgDownElem of imgDownElems) {
                imgDownElem.classList.remove('fade-in');
                imgDownElem.classList.add('fade-out');
            }
        } else {
            for (let imgDownElem of imgDownElems) {
                imgDownElem.classList.remove('fade-out');
                imgDownElem.classList.add('fade-in');
            }
        }
    }
});


// window.addEventListener('scroll', () => {
//     if(sections === openSection){
//         womanElem.classList.remove("fade-in");
//         womanElem.classList.add("fade-out");
//     } else {
//         womanElem.classList.remove("fade-out");
//         womanElem.classList.add("fade-in");
//     }
// });

