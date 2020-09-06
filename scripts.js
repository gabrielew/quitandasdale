window.onload = () => {
  //URLS
  const assetsURL = "https://gabrielew.github.io/quitandasdale/assets";
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

  //GEOLOCATION
  async function getCity(position) {
    const base_url = `
      https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json
    `;

    fetch(base_url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const city = data.address.city;
        if (city !== "Varginha") {
          Toastify({
            text: `Atenção, ainda não atendemos a sua cidade!`,
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            backgroundColor: "linear-gradient(to right, #ddddd, #96c93d)",
            stopOnFocus: true, // Prevents dismissing of toast on hover
            onClick: function () {}, // Callback after click
          }).showToast();
        }
      })
      .catch(function (err) {
        console.warn("Something went wrong.", err);
      });
  }

  navigator.geolocation.getCurrentPosition(getCity);
};
