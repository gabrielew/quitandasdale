window.onload = () => {
  //URLS
  const assetsURL = "https://gabrielew.github.io/quitandasdale/assets";
  const whatsappURL = "https://api.whatsapp.com/send?phone=5535988551486&text=";

  // MessageArray
  const messageArray = [
    { message: "Olá, quero pedir rosca de açucar" },
    { message: "Olá, quero pedir rosca de coco com leite condensado" },
    { message: "Olá, quero pedir rosca tradicional" },
    { message: "Olá, quero pedir pão de cebola" },
    { message: "Olá, quero pedir pão de batata" },
  ];

  //HREFS
  document.querySelector("#favIconHref").href = `${assetsURL}/logo.png`;

  const hrefArray = document.querySelectorAll("a");

  for (let i = 0; i < hrefArray.length; i++) {
    hrefArray[i].href = `${whatsappURL}${messageArray[i].message}`;
  }

  //SOURCES
  const imgArray = document.querySelectorAll("img");
  imgArray[0].src = `${assetsURL}/logo.png`;

  for (let i = 2; i < imgArray.length; i = i + 2) {
    imgArray[i - 1].src = `${assetsURL}/logo.png`;
    imgArray[i].src = `${assetsURL}/whatsapp.svg`;
  }
};
