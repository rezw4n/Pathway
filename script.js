mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxleG9pZDEiLCJhIjoiY2toYWNtdHFuMDJrczJ1cGQ1cDhzeDlydSJ9.9RebTFQYh0sZKtDuBgL98A";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([-71.05539, 42.36697]);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15,
    attributionControl: false,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });

  map.addControl(directions, "top-left");
}
