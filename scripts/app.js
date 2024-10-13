const hoverElement = document.getElementById('scroll-to-section');
const displayHint = document.getElementsByClassName('hint');

hoverElement.addEventListener('mouseover', showHint);
hoverElement.addEventListener('mouseout', hideHint);

function showHint(){
    for (let hint of displayHint) {
        hint.style.display = 'block';
    }
    // displayHint.style.opacity = '1';
    // displayHint.style.animation = 'fadeInLeft 1s ease forwards';
}

function hideHint(){
    for (let hint of displayHint) {
        hint.style.display = 'none';
    }
    // displayHint.style.opacity = 'translateX(100%)';
    // displayHint.style.animation = 'none';
}








// //定義，編輯用戶名稱：開啟 dialog

// //定義，編輯用戶名稱：關閉 dialog
// // const cancelConfigBtnElement = document.getElementById('cancel-config-btn');

// //開啟 dialog
// scrollToSection.addEventListener('click', showHint);



// //關閉 dialog
// // cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
// //關閉 dialog， 有點像 click-outside-to-close
// // backdropElement.addEventListener('click', closePlayerConfig);

// function scroll() {
//     playerConfigOverlayElement.style.display = 'none';
//     backdropElement.style.display = 'none';
//     formElement.firstElementChild.classList.remove('error');
//     errorsOutputElement.textContent = '';
//     formElement.firstElementChild.lastElementChild.value = '';
// }

// document.querySelector('scroll-to-section').addEventListener('click', function() {
//     document.querySelector('#opening').scrollIntoView({
//         behavior: 'smooth'
//     });
// });
