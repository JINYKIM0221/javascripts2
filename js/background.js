const images =["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"];//가지고 있는 사진과 이름이 같아야함

const chosenImage = images[Math.floor(Math.random() * images.length)];
//images안의 0~7요소 중 랜덤으로 '몇번째'있는 것을 고름
//ex)chosenImage = imgaes[0] = 1.jpg 


const bgImage = document.createElement("img");//document가 있는 html에 img라는 요소를 만들어줌

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);//부모인 body에 자식으로 bgimage를 추가한다
//append는 맨뒤 prepend는 맨 앞
