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

// Dark mode map style
const mapStyle = [
    { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{ color: '#263c3f' }]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#6b9a76' }]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{ color: '#38414e' }]
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#212a37' }]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#9ca5b3' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{ color: '#746855' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#1f2835' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#f3d19c' }]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#17263c' }]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#515c6d' }]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{ color: '#17263c' }]
    }
  ];

let map;
let directionsService;
let directionsRenderer;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: { lat: 49.3, lng: 1.2 }, // Center between Paris and Etretat
        styles: mapStyle,
        disableDefaultUI: true,
        zoomControl: true,
    });

    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer({
        map: map,
        suppressMarkers: true, // We will draw our own emoji markers
        polylineOptions: {
            strokeColor: '#8ab4f8',
            strokeOpacity: 0.8,
            strokeWeight: 5
        }
    });

    addParkingZones();
    addMarkersAndRoute();
}

function createEmojiMarkerSVG(emoji) {
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
            <path d="M20 0C11.163 0 4 7.163 4 16c0 10.667 16 24 16 24s16-13.333 16-24c0-8.837-7.163-16-16-16z" fill="#1e1e1e" stroke="#8ab4f8" stroke-width="2"/>
            <text x="20" y="22" font-size="16" text-anchor="middle" font-family="Arial" dominant-baseline="central">${emoji}</text>
        </svg>
    `);
}

function addMarkersAndRoute() {
    // Add custom markers
    placesData.forEach(place => {
        new google.maps.Marker({
            position: { lat: place.lat, lng: place.lng },
            map: map,
            title: place.name,
            icon: {
                url: createEmojiMarkerSVG(place.emoji),
                scaledSize: new google.maps.Size(40, 40),
                anchor: new google.maps.Point(20, 40)
            }
        });
    });

    // Calculate Route
    directionsService.route({
        origin: placesData[0], // Paris
        destination: placesData[placesData.length - 1], // Jardins
        waypoints: placesData.slice(1, -1).map(place => ({
            location: new google.maps.LatLng(place.lat, place.lng),
            stopover: true
        })),
        travelMode: google.maps.TravelMode.DRIVING
    }, (response, status) => {
        if (status === 'OK') {
            directionsRenderer.setDirections(response);
            renderStepsWithTravelTimes(response.routes[0].legs);
        } else {
            console.error('Directions request failed due to ' + status);
            alert("Erreur de calcul de l'itinéraire. Vérifiez que la Directions API est activée et que les restrictions sont correctes.");
            renderStepsWithTravelTimes([]);
        }
    });
}

function addParkingZones() {
    const etretatCenterCoords = [
        { lat: 49.7090, lng: 0.2010 },
        { lat: 49.7075, lng: 0.2055 },
        { lat: 49.7050, lng: 0.2030 },
        { lat: 49.7065, lng: 0.1985 }
    ];

    const parkingPolygon = new google.maps.Polygon({
        paths: etretatCenterCoords,
        strokeWeight: 0,
        fillColor: '#FF0000',
        fillOpacity: 0.15,
        map: map
    });
}

// Render horizontal slider
function renderStepsWithTravelTimes(legs) {
    const container = document.getElementById('horizontal-steps');
    container.innerHTML = '';

    placesData.forEach((place, index) => {
        const card = document.createElement('div');
        card.className = 'step-card';
        card.onclick = () => showPlaceDetails(place.id);

        let innerHTML = `
            <div class="step-header">
                <div class="step-number">${place.id}</div>
                <div class="step-time">${place.time}</div>
            </div>
            <h3>${place.name}</h3>
            <p>${place.description}</p>
        `;

        if (legs && legs[index]) {
            const leg = legs[index];
            innerHTML += `
                <div class="step-travel">
                    <span class="material-icons">directions_car</span>
                    ${leg.duration.text} de trajet
                </div>
            `;
        }

        card.innerHTML = innerHTML;
        container.appendChild(card);
    });
}

// UI Interactions
function showPlaceDetails(id) {
    const place = placesData.find(p => p.id === id);
    if (!place) return;

    document.getElementById('detail-title').innerText = place.name;
    document.getElementById('detail-time').innerText = place.time;
    document.getElementById('detail-duration').innerText = place.duration;
    document.getElementById('detail-hours').innerText = place.hours;
    document.getElementById('detail-score').innerText = place.reviews;
    document.getElementById('detail-reviews-count').innerText = `(${place.reviewsCount} avis)`;
    document.getElementById('detail-description').innerText = place.description;
    document.getElementById('detail-todo').innerText = place.todo;
    document.getElementById('detail-image').style.backgroundImage = `url('${place.image}')`;

    const warningEl = document.getElementById('detail-warning');
    if (place.warning) {
        warningEl.classList.remove('hidden');
        document.getElementById('detail-warning-text').innerText = place.warning;
    } else {
        warningEl.classList.add('hidden');
    }

    document.getElementById('detail-panel').classList.add('active');
    
    // Zoom on map
    if (map) {
        map.panTo({ lat: place.lat, lng: place.lng });
        map.setZoom(15);
    }
}

// Burger menu listeners
document.getElementById('burger-menu-btn').addEventListener('click', () => {
    document.getElementById('burger-menu').classList.add('active');
    document.getElementById('menu-overlay').classList.add('active');
});

function closeBurgerMenu() {
    document.getElementById('burger-menu').classList.remove('active');
    document.getElementById('menu-overlay').classList.remove('active');
}

document.getElementById('close-menu-btn').addEventListener('click', closeBurgerMenu);
document.getElementById('menu-overlay').addEventListener('click', closeBurgerMenu);

// Panels interactions
document.getElementById('btn-infos').addEventListener('click', () => {
    closeBurgerMenu();
    document.getElementById('infos-panel').classList.add('active');
});
document.getElementById('btn-budget').addEventListener('click', () => {
    closeBurgerMenu();
    document.getElementById('budget-panel').classList.add('active');
});

document.getElementById('back-btn').addEventListener('click', () => {
    document.getElementById('detail-panel').classList.remove('active');
});
document.getElementById('close-infos-btn').addEventListener('click', () => {
    document.getElementById('infos-panel').classList.remove('active');
});
document.getElementById('close-budget-btn').addEventListener('click', () => {
    document.getElementById('budget-panel').classList.remove('active');
});

// Initialize UI immediately (don't wait for Google Maps)
document.addEventListener('DOMContentLoaded', () => {
    renderStepsWithTravelTimes(null);
});
