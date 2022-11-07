const advantagelist = document.querySelectorAll('.advantagelist li')
const modal = document .querySelector('.modal')
const closeBtn = document.querySelector('.close-modal')
for (const advantage of advantagelist) {
    advantage.addEventListener('click',()=>{
        modal.classlist.add('modal_opened')
    })
}
closeBtn.addEventListener('click',()=>{
    modal.classList.remove('modal_opened')
})





