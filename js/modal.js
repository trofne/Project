const advantagelist = document.querySelectorAll('.advantage-list li')/*подключаю к иконкам вкусный и полезный корм для животных*/
console.log("I have found this elements", advantagelist)
const modal = document.querySelector('.modal') /*найти объект который открываю*/
console.log("I have found this modal elements: ", modal)
const closeBtn = document.querySelector('.close-modal')
console.log("I have found this close button: ", closeBtn)
for (const advantage of advantagelist) {
    advantage.addEventListener('click',()=>{
        modal.classList.add('modal_opened')/*открыть*/
    })
}
closeBtn.addEventListener('click',()=>{
    modal.classList.remove('modal_opened') /*закрыть*/
})

function modal_opened(){
    alert("pressed")
}