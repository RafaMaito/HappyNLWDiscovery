//Create Map
const mymap = L.map("mapid").setView([-31.7592286, -52.3427197], 15);

//Create and add TileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(mymap);

//Create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

function addMaker({ id, name, lat, lng }) {
  //Create popup over
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href="orphanage?id=${id}"> <img src="/images/arrow-white.svg"></a>`
  );

  //Create and add Maker
  L.marker([lat, lng], { icon }).addTo(mymap).bindPopup(popup);
}

const orphanagesSpan = document.querySelectorAll(".orphanages span");

orphanagesSpan.forEach((span) => {
  const orphanage = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng,
  };

  addMaker(orphanage);
});

const myLocation = document.querySelector("#myLocation");

myLocation.addEventListener("click", () => {
  const myLocate = mymap.locate({ setView: true, maxZoom: 15 });
  function myLocation(me) {
    L.marker(me.latlng).addTo(mymap).bindPopup("Você está aqui");
  }
  mymap.on("locationfound", myLocation);
});
