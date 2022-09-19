mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FicmllbHZpbmhhcyIsImEiOiJjbDg5Nno5M3AwNDB3M29wMnlzYWEwcWp4In0.M-Du7KZfgKUTalZ88Jpxfg';

const map = new mapboxgl.Map({
container: 'map', 
style: 'mapbox://styles/mapbox/streets-v11', 
center: [-74.5, 40], 
zoom: 9, 
projection: 'naturalEarth' 
});

map.on('style.load', () => {
map.setFog({}); 
});

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 13
  })

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })

  map.addControl(directions, 'top-left')
}

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  console.log(position)
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([-22.8, -43.3])
}

