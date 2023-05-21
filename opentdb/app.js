let tests = []
let list = document.querySelector('.list')

fetch('https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple')
    .then(res => res.json())
    .then(res => {
        let {
            results
        } = res
        list.innerHTML = ''

        results.forEach((test, index) => {

            let variants = [test.correct_answer, ...test.incorrect_answers]
            let str = ``

            variants.forEach(variant => {
                str += `
        <label>
            <input type="radio" name="question${index}" value="${variant}"> ${variant}
        </label>    
            `
            })
            list.innerHTML += `
    <div class="test">
        <div class="question">${test.question}</div>
        ${str}
    </div>
        `
            console.log(results)
        })
    })