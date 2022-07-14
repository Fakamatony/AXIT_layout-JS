const pricingContentItem = document.querySelectorAll('.pricingContentItem')
const pricingContentItemBases = document.querySelectorAll('.pricingContentItemBases')
const pricingContentItemBasesDescription = document.querySelectorAll('.pricingContentItemBasesDescription')
const Features = document.querySelector('.Features')
const About = document.querySelector('.About')
const Pricing = document.querySelector('.Pricing')
const Reviews = document.querySelector('.Reviews')
const Contact = document.querySelector('.Contact')
let offset = 0

Features.addEventListener('click',()=>{
    window.scrollTo(0,680)
})
About.addEventListener('click',()=>{
    window.scrollTo(0,2401)
})
Pricing.addEventListener('click',()=>{
    window.scrollTo(0,3069)
})
Reviews.addEventListener('click',()=>{
    window.scrollTo(0,3888)
})
Contact.addEventListener('click',()=>{
    window.scrollTo(0,4788)
})
for (let i = 0; i<pricingContentItemBases.length; i++){
    pricingContentItemBases[i].addEventListener('mouseover', ()=>{
        offset = 50
        pricingContentItemBases[i].style.height = offset + 218 + 'px'
        pricingContentItemBasesDescription[i].style.height = offset + 'px'
        pricingContentItemBasesDescription[i].style.color = 'white'
        pricingContentItem[i].style.marginBottom = offset + 'px'
        pricingContentItem[i].style.boxShadow = '15px 24px 41px 17px rgba(34, 60, 80, 0.2)'
    })
    pricingContentItemBases[i].addEventListener('mouseout', ()=>{
        pricingContentItemBases[i].style.height = 218 + 'px'
        pricingContentItemBasesDescription[i].style.height = 8 + 'px'
        pricingContentItemBasesDescription[i].style.color = 'rgba(255,255,255,0)'
        pricingContentItem[i].style.marginBottom = 0 + 'px'
        pricingContentItem[i].style.boxShadow = 'none'
    })
}




