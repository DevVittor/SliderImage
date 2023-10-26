let imagens = [
    "https://images.pexels.com/photos/16529980/pexels-photo-16529980/free-photo-of-ponte-em-arco-ponte-arqueada-barcos-botes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/17938396/pexels-photo-17938396/free-photo-of-cidade-meio-urbano-torre-eiffel-franca.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/14544821/pexels-photo-14544821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/14577052/pexels-photo-14577052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/17697776/pexels-photo-17697776/free-photo-of-construcao-predio-edificio-cidade.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/16946260/pexels-photo-16946260/free-photo-of-construcao-predio-edificio-cidade.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/11117409/pexels-photo-11117409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/17516308/pexels-photo-17516308/free-photo-of-istambul-predios-edificios-cidade.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
];
const image = document.getElementById("tagImg");
const texto = document.createElement("h1");
texto.textContent = "Image 1";
let qtdImg = imagens.length;
let count = 1;
let intervalID;

const slider = () => {
    if (count < qtdImg) {
        image.src = imagens[count];
        count++;
        texto.textContent = `Image ${count}`;
        if (count == qtdImg) {
            count = 0;
        }
    }
};
intervalID = setInterval(slider, 5000);
image.onmouseover = () => {
    clearInterval(intervalID);
};
image.onmouseout = () => {
    setInterval(slider, 5000);
};
image.src = imagens[0];
document.getElementById("divPrimary").appendChild(texto);
