const input = document.querySelectorAll('input')
const toggler = document.querySelectorAll('.questions__toggle')

if (input) {
    input.forEach(item => {
        item.addEventListener('blur', function () {
            let label = this.parentElement.querySelector('label')
            this.value.length > 0 ? label.classList.add('active') : label.classList.remove('active')
        })
    })
}

if (toggler){
    toggler.forEach(item => {
        item.addEventListener('click', function (){
            this.parentElement.querySelector('.questions__content').classList.toggle('active')
        })
    })
}