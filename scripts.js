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

  function callToastify(
    text,
    duration,
    gravity,
    position,
    firstRGB,
    secondRGB
  ) {
    return Toastify({
      text: text,
      duration: duration,
      newWindow: true,
      close: true,
      gravity: gravity, // `top` or `bottom`
      position: position, // `left`, `center` or `right`
      backgroundColor: `linear-gradient(to right, #${firstRGB}, #${secondRGB})`,
      stopOnFocus: true, // Prevents dismissing of toast on hover
      onClick: function () {}, // Callback after click
    }).showToast();
  }

  //GEOLOCATION
  async function getCity(geolocation) {
    const base_url = `
      https://nominatim.openstreetmap.org/reverse?
      lat=${geolocation.coords.latitude}&
      lon=${geolocation.coords.longitude}&
      format=json
    `;

    fetch(base_url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const city = data.address.city;
        if (city !== "Varginha") {
          const text = "Atenção, ainda não atendemos a sua cidade!";
          callToastify(text, 60000, "top", "right", "dddddd", "96c93d");
        }
      })
      .catch((err) => {
        console.warn("Something went wrong.", err);
      });
  }

  navigator.geolocation.getCurrentPosition(
    (geolocation) => {
      getCity(geolocation);
    },
    () => {
      const text = "Atenção, entregas somente na cidade de VARGINHA/MG!";
      callToastify(text, 60000, "top", "right", "b11016", "b11016");
    }
  );
};
