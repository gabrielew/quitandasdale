window.onload = () => {
  //URLS
  // const assetsURL = "https://gabrielew.github.io/quitandasdale/assets";
  const assetsURL = "assets";
  const whatsappURL = "https://api.whatsapp.com/send?phone=5535988551486&text=";

  // MessageArray
  const messageArray = [
    { message: "Olá, quero pedir uma rosca" },
    { message: "Olá, quero pedir um bolo doce" },
    { message: "Olá, quero pedir um bolo salgado" },
    { message: "Olá, quero pedir pão de cebola" },
    { message: "Olá, quero pedir pão de batata" },
  ];

  const imagesArray = [
    { image: `${assetsURL}/logo.png` },
    { image: `${assetsURL}/roscas.png` },
    { image: `${assetsURL}/whatsapp.svg` },
    { image: `${assetsURL}/bolo-doce.png` },
    { image: `${assetsURL}/whatsapp.svg` },
    { image: `${assetsURL}/bolo-salgado.png` },
    { image: `${assetsURL}/whatsapp.svg` },
    { image: `${assetsURL}/logo.png` },
    { image: `${assetsURL}/whatsapp.svg` },
    { image: `${assetsURL}/logo.png` },
    { image: `${assetsURL}/whatsapp.svg` },
  ];

  //HREFS
  document.querySelector("#favIconHref").href = `${assetsURL}/logo.png`;

  const hrefArray = document.querySelectorAll("a");

  for (let i = 0; i < hrefArray.length; i++) {
    hrefArray[i].href = `${whatsappURL}${messageArray[i].message}`;
  }

  //SOURCES
  const imgArray = document.querySelectorAll("img");

  for (let i = 0; i < imgArray.length; i++) {
    imgArray[i].src = imagesArray[i].image;
  }
};
