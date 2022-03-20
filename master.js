let angry = document.getElementById('angry')
let happy = document.getElementById('happy')
let sad = document.getElementById('sad')
let crying = document.getElementById('crying')
let upset = document.getElementById('upset')
let love = document.getElementById('love')
let frustrated = document.getElementById('frustrated')
let annoyed = document.getElementById('annoyed')

const moodClicked = function (mood) {

    angry.classList.replace('fa-solid', 'fa-regular')
    happy.classList.replace('fa-solid', 'fa-regular')
    sad.classList.replace('fa-solid', 'fa-regular')
    crying.classList.replace('fa-solid', 'fa-regular')
    upset.classList.replace('fa-solid', 'fa-regular')
    love.classList.replace('fa-solid', 'fa-regular')
    frustrated.classList.replace('fa-solid', 'fa-regular')
    annoyed.classList.replace('fa-solid', 'fa-regular')
    
    let element = mood.id
    feeling = document.getElementById(element)
    feeling.classList.add('fa-solid')
}