
let imgsSelector = document.querySelectorAll('.imagesToTransforms');
//target
imgsSelector.forEach((img) => {
    img.onclick = function () { 
        //img.className = 'active';
        img.classList.toggle('imagesToTransforms');

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