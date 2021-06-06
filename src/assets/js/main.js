const input = document.querySelectorAll('input')

if (input) {
    input.forEach(item => {
        item.addEventListener('blur', function () {
            let label = this.parentElement.querySelector('label')
            this.value.length > 0 ? label.classList.add('active') : label.classList.remove('active')
        })
    })
}