
const screen = document.querySelector('.calculator__display')
const nhs = document.querySelectorAll('.btn-keys')
const dot = document.querySelector('.dots')
const operators = document.querySelectorAll('.btn-operator')
const enter = document.querySelector('.equal')
const bksp = document.querySelector('.right')
const clear = document.querySelector('.rigt')

// console.log(operators)



dot.addEventListener('click', () => {
    if (screen.innerHTML.includes('.')) {
        dot.classList.add('is-depressed')
        // console.log('Decimal point already exists')
    }else{
        screen.innerHTML += '.'
    }
})

bksp.addEventListener('click', () => {
    if(screen.innerHTML.length > 1){
        screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length - 1)
    }
})

clear.addEventListener('click', () => {
    screen.innerHTML = '0'
})

operators.forEach(items => {
    items.addEventListener('click', () => {
        if(screen.innerHTML.includes(items.innerText)){
            items.classList.add('is-depressed')
        }else{
            screen.innerHTML += items.innerText
        }
    })
})

// console.log(nhs)

// for (i = 0; elelments = nhs[i]; i++) {
//     i.addEventListener('click', () => {
//         console.log(i.innerHTML)
//     })
// }


// nhs.addEventListener('click', () => {
//     for (i = 0; elements = nhs[i]; i++){
//         console.log(elements.innerHTML)
//     }
// })

// nhs.addEventListener('click', () => {
//     console.log('this')
// })


nhs.forEach(item => {
    item.addEventListener('click', () => {
        // console.log(item.innerHTML)
        if(screen.innerHTML == 0) {
            screen.innerHTML = item.innerHTML
        } else {
            screen.innerHTML += item.innerHTML
        }

    })
})


// function show(n) {
//     console.log(n)
// }
