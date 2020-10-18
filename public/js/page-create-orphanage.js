//Create Map
const mymap = L.map("mapid").setView([-31.7592286, -52.3427197], 15);

//Create and add TileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(mymap);

//Create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

// //Create and add Maker
// L.marker([-31.7592286, -52.3427197], { icon }).addTo(mymap).bindPopup(popup);
let marker;

mymap.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  marker && mymap.removeLayer(marker);

  marker = L.marker([lat, lng], { icon }).addTo(mymap);
});

function addPhotoField() {
  const containerImages = document.querySelector("#images");

  const fieldsContainer = document.querySelectorAll(".new-upload");

  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  const inputPhoto = newFieldContainer.children[0];

  if (inputPhoto.value == "") {
    return;
  }

  inputPhoto.value = "";
  containerImages.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;
  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    span.parentNode.children[0].value = "";
    return;
  }

  span.parentNode.remove();
}

function toggleSelect(event) {
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));

  const button = event.currentTarget;
  button.classList.add("active");

  const input = document.querySelector('[name="open_on_weekends"]');
  input.value = button.dataset.value;
}

function validateMap(event) {
  const lat = document.querySelector("[name=lat]").value;
  console.log(lat);
  const lng = document.querySelector("[name=lng]").value;
  if (lat === "" && lng === "") {
    event.preventDefault();
    alert("Verifique se o mapa foi adicionado");
  }
}
