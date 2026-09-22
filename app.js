const placesData = [
  {
    id: 1,
    name: "Départ - 15 rue du Cardinal-Mercier",
    emoji: "🚗",
    time: "07:00",
    duration: "Point de départ",
    lat: 48.8808,
    lng: 2.3303,
    description: "Préparez-vous pour le trajet en voiture vers la côte d'Albâtre (les données de navigation afficheront le temps exact).",
    hours: "-",
    reviews: "-",
    reviewsCount: "-",
    todo: "Prendre un café avant la route, vérifier le plein.",
    image: "images/paris.jpg",
    warning: ""
  },
  {
    id: 2,
    name: "Château de Fréfossé",
    emoji: "🚶",
    time: "09:45 - 10:15",
    duration: "30 minutes",
    lat: 49.6932,
    lng: 0.2068,
    description: "Propriété privée située au Tilleul. Bien qu'il ne se visite pas, on peut l'admirer de l'extérieur.",
    hours: "Visible de l'extérieur",
    reviews: "4.5",
    reviewsCount: "128",
    todo: "Arrêt photo rapide de l'extérieur.",
    image: "images/frefosse.jpg",
    warning: ""
  },
  {
    id: 3,
    name: "Parking & Grotte de l'Amour",
    emoji: "🚗",
    time: "10:30 - 12:30",
    duration: "2 heures",
    lat: 49.7045, 
    lng: 0.2105, 
    description: "Garez-vous au Parking du Valaine. De là, petite randonnée à pied sur les falaises jusqu'à la splendide Grotte de l'Amour.",
    hours: "Accès libre",
    reviews: "4.8",
    reviewsCount: "342",
    todo: "Marcher jusqu'au point de vue et admirer l'Œil du Panda.",
    image: "images/grotte.jpg",
    warning: "Sentiers non protégés, restez loin du bord."
  },
  {
    id: 4,
    name: "Golf d'Étretat",
    emoji: "🚶",
    time: "12:45 - 14:15",
    duration: "1h30",
    lat: 49.7035,
    lng: 0.2050,
    description: "L'un des plus beaux golfs marins de France, perché à plus de 50 mètres au-dessus de la mer.",
    hours: "08:00 - 19:00",
    reviews: "4.7",
    reviewsCount: "856",
    todo: "Déjeuner au restaurant panoramique avec vue sur la mer.",
    image: "images/golf.jpg",
    warning: ""
  },
  {
    id: 5,
    name: "Falaise d'Aval & Trou à l'Homme",
    emoji: "🚶",
    time: "14:30 - 16:30",
    duration: "2 heures",
    lat: 49.7069,
    lng: 0.1990,
    description: "Le mythique sentier de la Falaise d'Aval. Le 'Trou à l'Homme' est un tunnel reliant la plage d'Étretat à celle de Jambourg.",
    hours: "Tunnel accessible uniquement à marée basse.",
    reviews: "4.9",
    reviewsCount: "4105",
    todo: "Randonner sur la falaise, observer l'Aiguille creuse.",
    image: "images/falaise.jpg",
    warning: "Accès au tunnel formellement interdit par la mairie. Si vous y allez: uniquement 2h avant/après la marée basse !"
  },
  {
    id: 6,
    name: "Les Jardins d'Étretat",
    emoji: "🚶",
    time: "16:45 - 18:15",
    duration: "1h30",
    lat: 49.7107,
    lng: 0.2062,
    description: "Jardins néo-futuristes mêlant art contemporain et topiaires, sur la Falaise d'Amont.",
    hours: "10:00 - 18:00",
    reviews: "4.6",
    reviewsCount: "2934",
    todo: "Promenade paysagère et vue imprenable en fin d'après-midi.",
    image: "images/jardins.jpg",
    warning: "Stationnement interdit en haut de la falaise (venez à pied)."
  }
];

let map;
let directionsService;
let directionsRenderer;
let markers = [];

window.initMap = function() {
    // Dark mode style for Google Maps
    const darkMapStyle = [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
      { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
      { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#263c3f" }] },
      { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#6b9a76" }] },
      { featureType: "road", elementType: "geometry", stylers: [{ color: "#38414e" }] },
      { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#212a37" }] },
      { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#9ca5b3" }] },
      { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#746855" }] },
      { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#1f2835" }] },
      { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#f3d19c" }] },
      { featureType: "transit", elementType: "geometry", stylers: [{ color: "#2f3948" }] },
      { featureType: "transit.station", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
      { featureType: "water", elementType: "geometry", stylers: [{ color: "#17263c" }] },
      { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#515c6d" }] },
      { featureType: "water", elementType: "labels.text.stroke", stylers: [{ color: "#17263c" }] }
    ];

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: { lat: 49.698, lng: 0.190 },
        styles: darkMapStyle,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false
    });

    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer({
        map: map,
        suppressMarkers: true,
        polylineOptions: {
            strokeColor: '#8ab4f8',
            strokeOpacity: 0.8,
            strokeWeight: 5
        }
    });

    renderPlacesList();
    addMarkersAndRoute();
    addParkingZones();
    setupUI();
};

function renderPlacesList() {
    const listContainer = document.getElementById('places-list');
    listContainer.innerHTML = '';

    placesData.forEach((place, index) => {
        const placeEl = document.createElement('div');
        placeEl.className = 'place-item';
        placeEl.onclick = () => showDetail(place);

        placeEl.innerHTML = `
            <div class="place-number">${index + 1}</div>
            <div class="place-content">
                <h3>${place.name}</h3>
                <div class="place-time">${place.time} <span style="color: #666; font-size: 11px; margin-left: 6px;">(${place.duration})</span></div>
                <div class="place-desc">${place.description}</div>
            </div>
            <img src="${place.image}" class="place-image" alt="${place.name}">
        `;
        
        listContainer.appendChild(placeEl);
    });
}

function addMarkersAndRoute() {
    const waypoints = [];

    placesData.forEach((place, index) => {
        const position = { lat: place.lat, lng: place.lng };
        
        if (index > 0 && index < placesData.length - 1) {
            waypoints.push({
                location: position,
                stopover: true
            });
        }

        const svgMarker = (emoji) => ({
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                    <path d="M20,0 C11.16,0 4,7.16 4,16 C4,28 20,40 20,40 C20,40 36,28 36,16 C36,7.16 28.84,0 20,0 Z" fill="#1e1e1e" stroke="#8ab4f8" stroke-width="2"/>
                    <text x="50%" y="42%" dominant-baseline="middle" text-anchor="middle" font-size="18">${emoji}</text>
                </svg>`),
            scaledSize: new google.maps.Size(40, 40),
            anchor: new google.maps.Point(20, 40)
        });

        const marker = new google.maps.Marker({
            position: position,
            map: map,
            title: place.name,
            icon: svgMarker(place.emoji)
        });

        marker.addListener('click', () => {
            showDetail(place);
        });

        markers.push(marker);
    });

    // Calculate Route
    const request = {
        origin: { lat: placesData[0].lat, lng: placesData[0].lng },
        destination: { lat: placesData[placesData.length - 1].lat, lng: placesData[placesData.length - 1].lng },
        waypoints: waypoints,
        travelMode: google.maps.TravelMode.DRIVING
    };

    directionsService.route(request, (result, status) => {
        if (status == 'OK') {
            directionsRenderer.setDirections(result);

            // Extract travel times from Google Navigation Data
            const legs = result.routes[0].legs;
            const listContainer = document.getElementById('places-list');
            const items = listContainer.getElementsByClassName('place-item');

            for (let i = 0; i < legs.length; i++) {
                const duration = legs[i].duration.text;
                const distance = legs[i].distance.text;
                const fromName = placesData[i].name;
                const toName = placesData[i+1].name;
                
                const travelEl = document.createElement('div');
                travelEl.className = 'travel-time-row';
                travelEl.innerHTML = `<span class="material-icons" style="font-size: 16px; margin-right: 8px;">directions_car</span> ${duration} de trajet de ${fromName} à ${toName} (${distance})`;
                
                // Insert the travel time indicator just after the current place item
                if (items[i]) {
                    items[i].insertAdjacentElement('afterend', travelEl);
                }
            }

        } else {
            console.error('Directions request failed due to ' + status);
            alert("L'itinéraire n'a pas pu être calculé (Erreur: " + status + "). \n\nAssurez-vous d'avoir bien activé 'Directions API' dans votre console Google Cloud, sans quoi les temps de trajet et le tracé ne s'afficheront pas !");
        }
    });
}

function showDetail(place) {
    const panel = document.getElementById('detail-panel');
    
    document.getElementById('detail-image').style.backgroundImage = `url('${place.image}')`;
    document.getElementById('detail-title').innerText = place.name;
    document.getElementById('detail-score').innerText = place.reviews;
    document.getElementById('detail-reviews-count').innerText = `(${place.reviewsCount} avis)`;
    document.getElementById('detail-time').innerText = place.time;
    document.getElementById('detail-duration').innerText = place.duration;
    document.getElementById('detail-hours').innerText = place.hours;
    document.getElementById('detail-description').innerText = place.description;
    document.getElementById('detail-todo').innerText = place.todo;
    
    const warningEl = document.getElementById('detail-warning');
    if (place.warning) {
        warningEl.classList.remove('hidden');
        document.getElementById('detail-warning-text').innerText = place.warning;
    } else {
        warningEl.classList.add('hidden');
    }

    panel.classList.add('active');

    if (map) {
        map.panTo({ lat: place.lat, lng: place.lng });
        map.setZoom(16);
    }
}

function setupUI() {
    document.getElementById('back-btn').addEventListener('click', () => {
        document.getElementById('detail-panel').classList.remove('active');
        if (map) {
            map.setZoom(14);
            map.panTo({ lat: 49.698, lng: 0.190 });
        }
    });

    document.getElementById('btn-infos').addEventListener('click', () => {
        document.getElementById('infos-panel').classList.add('active');
    });

    document.getElementById('close-infos-btn').addEventListener('click', () => {
        document.getElementById('infos-panel').classList.remove('active');
    });

    document.getElementById('btn-budget').addEventListener('click', () => {
        document.getElementById('budget-panel').classList.add('active');
    });

    document.getElementById('close-budget-btn').addEventListener('click', () => {
        document.getElementById('budget-panel').classList.remove('active');
    });
}

function addParkingZones() {
    // Coordonnées ajustées du centre-ville d'Étretat (Zone payante / difficile)
    // Englobe toute la vallée entre la plage, et les deux routes principales
    const redZoneCoords = [
        { lat: 49.7073, lng: 0.1970 }, // NW (Plage côté Aval)
        { lat: 49.7088, lng: 0.2045 }, // NE (Plage côté Amont)
        { lat: 49.7042, lng: 0.2110 }, // SE (Entrée ville route Fécamp)
        { lat: 49.7020, lng: 0.2035 }, // SW (Entrée ville route du Havre)
    ];

    const redZone = new google.maps.Polygon({
        paths: redZoneCoords,
        strokeWeight: 0,
        fillColor: "#FF4444",
        fillOpacity: 0.15,
        map: map,
    });

    const infoWindow = new google.maps.InfoWindow({
        content: "<div style='color: black; padding: 5px;'><strong>🛑 Zone Rouge (Centre-ville)</strong><br>Stationnement payant et très difficile.<br>Privilégiez les parkings extérieurs.</div>"
    });

    redZone.addListener("click", (event) => {
        infoWindow.setPosition(event.latLng);
        infoWindow.open(map);
    });
}
