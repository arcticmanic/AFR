import IMask from 'imask'

import lazyLoading from './lazyLoading'

document.addEventListener('DOMContentLoaded', () => {
    const inputPhones = document.querySelectorAll(
        'input[data-input-type="phone"]'
    )

    inputPhones?.forEach((inputPhone) => {
        IMask(inputPhone, { mask: '+{7} (000) 000-00-00' })
    })
})
