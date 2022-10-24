const productContainer= document.querySelectorAll('.product-container');
const preBtn=document.querySelectorAll('.pre-btn');
const nxtBtn=document.querySelectorAll('.next-btn');

productContainer.forEach((item, i)=>{
    let containerDimention= item.getBoundingClientRect;
    let containerWidth= containerDimention.width;

    preBtn[i].addEventListener('click', ()=>{
        item.scrollLeft += containerWidth;
    })
    nxtBtn[i].addEventListener('click', ()=>{
        item.scrollLeft -= containerWidth;
    })
    
})