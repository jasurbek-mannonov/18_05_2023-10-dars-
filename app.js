// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => { //SERVERDAN KELADIGAN JAVOB
//         const mark = Math.floor(Math.random() * 4) + 2 //BAHO

//         if (mark > 3){
//             resolve(mark) //SUCCESS
//         }else{
//             reject(mark) //UNSUCCESS
//         }
//     }, 3000) // 3 SONIYA ICHIDA
// })

// promise.then(val => { //RESOLVE BO'LGANDA, YA'NI SUCCESS BO'LGANIDA CHIQADIGAN NATIJA
//     console.log(`Uraa, imtihondan ${val} baho bilan o'tdim, otam menga 100$ berdilar`)
// })

// promise.catch(val => { // REJECT BO'LGANIDA, YA'NI UNSUCCESS BO'LGANIDA CHIQADIGAN NATIJA
//     console.log(`Uraa, imtihondan ${val} baho bilan yiqildim, otam menga 100$ bermadilar`)
// })

// -------------------------------------FETCH---------------------------------------------------
// let table = document.querySelector('table')

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(d => d.json())
// .then(arr => {
//     table.innerHTML = ''
//     arr.forEach(item => {
//         table.innerHTML += `
//             <tr>
//                 <td>${item.id}</td>
//                 <td>${item.userId}</td>
//                 <td>${item.title}</td>
//                 <td>${item.body}</td>
//             </tr>
//         `
//     })

//     console.log(arr)
// }).catch(err => {
//     console.log('Xatolik yuz berdi: ', err)
// })
// ----------------------------------------------------------------


let table = document.querySelector('table')



let inputs = document.querySelectorAll('body [name]')
let person = {}
let persons = []
const url = 'http://localhost:3000/posts'

const render = (arr) =>{
    table.innerHTML = ''

    arr.forEach(el => {
        table.innerHTML += `
            <tr>
                <td>${el.id}</td>
                <td>${el.name}</td>
                <td>${el.age}</td>
                <td>${el.spec}</td>
            </tr>
        `
    })
}

fetch(url)
.then(res => res.json())
.then(res => {
    persons = res
    render(persons)
}) 

const post  = (data) => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type':'application/json'
        }
    })
    .then(res => res.json())
    .then(res => {
        persons.push(res)
        render(persons)
    })
}

const add = () => {
    inputs.forEach(input => {
        person[input.getAttribute('name')] = input.value
        input.value = ''
    })
     
    post(person)
}