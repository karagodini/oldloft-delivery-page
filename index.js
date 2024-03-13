const faqQuestionOne = document.querySelector('.faq-question-1')
const faqQuestionOneI = document.querySelector('.faq-question-1 .bx')
const faqQuestionTwo = document.querySelector('.faq-question-2')
const faqQuestionTwoI = document.querySelector('.faq-question-2 .bx')
const faqQuestionThree = document.querySelector('.faq-question-3')
const faqQuestionThreeI = document.querySelector('.faq-question-3 .bx')
const faqQuestionFor = document.querySelector('.faq-question-4')
const faqQuestionForI = document.querySelector('.faq-question-4 .bx')
const faqAnsverOne = document.querySelector('.faq-answer-1')
const faqAnsverTwo = document.querySelector('.faq-answer-2')
const faqAnsverThree = document.querySelector('.faq-answer-3')
const faqAnsverFor = document.querySelector('.faq-answer-4')

faqQuestionOne.addEventListener('click', (e) => {
    e.preventDefault()
    faqQuestionOneI.classList.toggle('faq-bx-open')
    faqAnsverOne.classList.toggle('faq-active')
})

faqQuestionTwo.addEventListener('click', (e) => {
    e.preventDefault()
    faqQuestionTwoI.classList.toggle('faq-bx-open')
    faqAnsverTwo.classList.toggle('faq-active')
})

faqQuestionThree.addEventListener('click', (e) => {
    e.preventDefault()
    faqQuestionThreeI.classList.toggle('faq-bx-open')
    faqAnsverThree.classList.toggle('faq-active')
})

faqQuestionFor.addEventListener('click', (e) => {
    e.preventDefault()
    faqQuestionForI.classList.toggle('faq-bx-open')
    faqAnsverFor.classList.toggle('faq-active')
})