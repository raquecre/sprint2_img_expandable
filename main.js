
let imgsSelector = document.querySelectorAll('img');
console.log(imgsSelector);


imgsSelector.forEach((img) => {
    img.onclick = function () {
        img.style.width = '65%'
    }
});



/* 
function openImgAndInsertText() {
    imgsSelector.className = 'imagesToTransform' ;
    imgsSelector.classList.remove = 'imagesToTransforms'; 

 let textContainer = document.createElement('p');
    textContainer.innerHTML = imgsSelector.alt;

    imgsSelector.appendChild(textContainer);

}

function addText(textToPrint) {
    const paragraph = document.createElement('p');
    

}

 */