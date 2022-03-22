let angry = document.getElementById('angry')
let happy = document.getElementById('happy')
let sad = document.getElementById('sad')
let crying = document.getElementById('crying')
let upset = document.getElementById('upset')
let love = document.getElementById('love')
let frustrated = document.getElementById('frustrated')
let annoyed = document.getElementById('annoyed')
let angryP = document.getElementById('angry-p')
let happyP = document.getElementById('happy-p')
let sadP = document.getElementById('sad-p')
let cryingP = document.getElementById('crying-p')
let upsetP = document.getElementById('upset-p')
let loveP = document.getElementById('love-p')
let frustratedP = document.getElementById('frustrated-p')
let annoyedP = document.getElementById('annoyed-p')

const moodClicked = function (mood) {

    angry.classList.replace('fa-solid', 'fa-regular')
    happy.classList.replace('fa-solid', 'fa-regular')
    sad.classList.replace('fa-solid', 'fa-regular')
    crying.classList.replace('fa-solid', 'fa-regular')
    upset.classList.replace('fa-solid', 'fa-regular')
    love.classList.replace('fa-solid', 'fa-regular')
    frustrated.classList.replace('fa-solid', 'fa-regular')
    annoyed.classList.replace('fa-solid', 'fa-regular')

    angryP.style.color = 'rgb(180, 180, 180)';
    happyP.style.color = 'rgb(180, 180, 180)';
    sadP.style.color = 'rgb(180, 180, 180)';
    cryingP.style.color = 'rgb(180, 180, 180)';
    upsetP.style.color = 'rgb(180, 180, 180)';
    loveP.style.color = 'rgb(180, 180, 180)';
    frustratedP.style.color = 'rgb(180, 180, 180)';
    annoyedP.style.color = 'rgb(180, 180, 180)';

    let moodName = mood.id + "-p"
    let element = mood.id

    feeling = document.getElementById(element)
    let paragraph = document.getElementById(moodName)

    paragraph.style.color = feeling.style.color
    feeling.classList.add('fa-solid')
}