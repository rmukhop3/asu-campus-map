// ========== CONFIGURATION ==========
const GOOGLE_MAPS_API_KEY = '__ENV_GOOGLE_MAPS_API_KEY__';
const ASU_CENTER = { lat: 33.4185, lng: -111.9340 };

// ========== ASU TEMPE CAMPUS DATA ==========
const campusLocations = {
    // Libraries
    hayden: { name: 'Hayden Library', code: 'HAYDN', position: { lat: 33.4191, lng: -111.9348 }, type: 'library', icon: '📚', color: '#3b82f6', status: 'open', capacity: 67, hours: '7AM - 2AM', address: '300 E Orange Mall', description: 'Main campus library with extensive study spaces, group rooms, and technology resources.' },
    noble: { name: 'Noble Library', code: 'NOBLE', position: { lat: 33.4174, lng: -111.9357 }, type: 'library', icon: '📚', color: '#3b82f6', status: 'open', capacity: 34, hours: '7AM - 10PM', address: '1541 S McAllister Ave', description: 'Science and engineering focused library.' },
    law: { name: 'Ross-Blakley Law Library', code: 'LAW', position: { lat: 33.4171, lng: -111.9313 }, type: 'library', icon: '📚', color: '#3b82f6', status: 'open', capacity: 45, hours: '8AM - 10PM', address: '1100 S McAllister Ave', description: 'Law school library with legal research resources.' },
    design: { name: 'Design Library', code: 'DLIB', position: { lat: 33.4216, lng: -111.9392 }, type: 'library', icon: '📚', color: '#3b82f6', status: 'open', capacity: 28, hours: '9AM - 6PM', address: 'Architecture Building', description: 'Art and design focused library.' },

    // Major Academic Buildings
    coor: { name: 'Lattie F. Coor Hall', code: 'COOR', position: { lat: 33.4192, lng: -111.9325 }, type: 'building', icon: '🏛️', color: '#6b7280', status: 'open', hours: '7AM - 10PM', address: '976 S Forest Mall' },
    mu: { name: 'Memorial Union', code: 'MU', position: { lat: 33.4179, lng: -111.9345 }, type: 'building', icon: '🏛️', color: '#6b7280', status: 'open', hours: '7AM - 11PM', address: '301 E Orange St' },
    byeng: { name: 'Brickyard Engineering', code: 'BYENG', position: { lat: 33.4226, lng: -111.9406 }, type: 'building', icon: '🏛️', color: '#6b7280', status: 'open', hours: '7AM - 10PM', address: '699 S Mill Ave' },
    ba: { name: 'Business Administration', code: 'BA', position: { lat: 33.4159, lng: -111.9320 }, type: 'building', icon: '🏛️', color: '#6b7280', status: 'open', hours: '7AM - 10PM', address: '400 E Lemon St' },
    fulton: { name: 'Fulton Center', code: 'FULTN', position: { lat: 33.4217, lng: -111.9365 }, type: 'building', icon: '🏛️', color: '#6b7280', status: 'open', hours: '7AM - 9PM', address: '300 E University Dr' },
    istb1: { name: 'Interdisciplinary Science & Tech I', code: 'ISTB1', position: { lat: 33.4204, lng: -111.9290 }, type: 'building', icon: '🏛️', color: '#6b7280', status: 'open', hours: '7AM - 10PM', address: '550 E Orange St' },
    istb4: { name: 'Interdisciplinary Science & Tech IV', code: 'ISTB4', position: { lat: 33.4188, lng: -111.9280 }, type: 'building', icon: '🏛️', color: '#6b7280', status: 'open', hours: '7AM - 10PM', address: '781 E Terrace Mall' },
    psych: { name: 'Psychology Building', code: 'PSYCH', position: { lat: 33.4200, lng: -111.9315 }, type: 'building', icon: '🏛️', color: '#6b7280', status: 'open', hours: '7AM - 9PM', address: '950 S McAllister Ave' },
    psa: { name: 'Physical Sciences A', code: 'PSA', position: { lat: 33.4210, lng: -111.9315 }, type: 'building', icon: '🏛️', color: '#6b7280', status: 'open', hours: '7AM - 10PM', address: '550 E University Dr' },
    psf: { name: 'Physical Sciences F', code: 'PSF', position: { lat: 33.4215, lng: -111.9310 }, type: 'building', icon: '🏛️', color: '#6b7280', status: 'open', hours: '7AM - 10PM', address: 'University Dr' },
    psh: { name: 'Physical Sciences H', code: 'PSH', position: { lat: 33.4218, lng: -111.9315 }, type: 'building', icon: '🏛️', color: '#6b7280', status: 'open', hours: '7AM - 10PM', address: 'University Dr' },
    oldmain: { name: 'Old Main', code: 'MAIN', position: { lat: 33.4203, lng: -111.9340 }, type: 'building', icon: '🏛️', color: '#FFC627', status: 'open', hours: '8AM - 5PM', address: '400 E Tyler Mall' },
    ecg: { name: 'Engineering Center G', code: 'ECG', position: { lat: 33.4216, lng: -111.9396 }, type: 'building', icon: '🏛️', color: '#6b7280', status: 'open', hours: '7AM - 10PM', address: '501 E Tyler Mall' },
    eca: { name: 'Engineering Center A', code: 'ECA', position: { lat: 33.4213, lng: -111.9389 }, type: 'building', icon: '🏛️', color: '#6b7280', status: 'open', hours: '7AM - 10PM', address: '501 E Tyler Mall' },
    bda: { name: 'Biodesign A', code: 'BDA', position: { lat: 33.4191, lng: -111.9267 }, type: 'building', icon: '🏛️', color: '#6b7280', status: 'open', hours: '7AM - 9PM', address: '727 E Tyler St' },
    bdb: { name: 'Biodesign B', code: 'BDB', position: { lat: 33.4186, lng: -111.9262 }, type: 'building', icon: '🏛️', color: '#6b7280', status: 'open', hours: '7AM - 9PM', address: '727 E Tyler St' },
    stauf: { name: 'Stauffer Hall', code: 'STAUF', position: { lat: 33.4199, lng: -111.9350 }, type: 'building', icon: '🏛️', color: '#6b7280', status: 'open', hours: '7AM - 10PM', address: '950 S Forest Mall' },
    whall: { name: 'Wilson Hall', code: 'WILSN', position: { lat: 33.4203, lng: -111.9362 }, type: 'building', icon: '🏛️', color: '#6b7280', status: 'open', hours: '7AM - 10PM', address: '455 E University Dr' },
    life: { name: 'Life Sciences A', code: 'LSA', position: { lat: 33.4219, lng: -111.9339 }, type: 'building', icon: '🏛️', color: '#6b7280', status: 'open', hours: '7AM - 10PM', address: '427 E Tyler Mall' },

    // Food & Dining
    pitchforks: { name: 'Pitchforks Dining', code: 'PITCH', position: { lat: 33.4180, lng: -111.9346 }, type: 'food', icon: '🍕', color: '#06b6d4', status: 'open', hours: '7AM - 9PM', waitTime: 5 },
    hassayampa: { name: 'Hassayampa Dining', code: 'HASSA', position: { lat: 33.4149, lng: -111.9380 }, type: 'food', icon: '🍔', color: '#06b6d4', status: 'open', hours: '7AM - 10PM', waitTime: 8 },
    tooker: { name: 'Tooker House Dining', code: 'TOOKR', position: { lat: 33.4155, lng: -111.9250 }, type: 'food', icon: '🥗', color: '#06b6d4', status: 'open', hours: '7AM - 9PM', waitTime: 3 },
    starbucksMU: { name: 'Starbucks (MU)', code: 'SBMU', position: { lat: 33.4178, lng: -111.9344 }, type: 'food', icon: '☕', color: '#06b6d4', status: 'open', hours: '7AM - 8PM', waitTime: 10 },
    chikfila: { name: 'Chick-fil-A', code: 'CFA', position: { lat: 33.4179, lng: -111.9347 }, type: 'food', icon: '🐔', color: '#06b6d4', status: 'open', hours: '7:30AM - 8PM', waitTime: 15 },

    // Study Rooms
    room204: { name: 'Study Room 204', code: 'NOBLE-204', position: { lat: 33.4174, lng: -111.9358 }, type: 'room', icon: '🚪', color: '#22c55e', status: 'available', capacity: 4, available: true, amenities: ['Whiteboard', 'TV', 'Power'] },
    room301: { name: 'Study Room 301', code: 'HAYDN-301', position: { lat: 33.4191, lng: -111.9349 }, type: 'room', icon: '🚪', color: '#22c55e', status: 'busy', capacity: 6, available: false, amenities: ['Whiteboard', 'Projector'] },
    roomA: { name: 'Conference Room A', code: 'COOR-A', position: { lat: 33.4192, lng: -111.9325 }, type: 'room', icon: '🚪', color: '#22c55e', status: 'available', capacity: 10, available: true, amenities: ['Video Conf', 'Whiteboard'] },
    roomB: { name: 'Conference Room B', code: 'FULTN-B', position: { lat: 33.4218, lng: -111.9367 }, type: 'room', icon: '🚪', color: '#22c55e', status: 'available', capacity: 8, available: true, amenities: ['Projector', 'Phone'] },

    // Restrooms
    restroomMU: { name: 'MU 1st Floor', code: 'MU-RR1', position: { lat: 33.4179, lng: -111.9345 }, type: 'restroom', icon: '🚻', color: '#f59e0b', status: 'low', accessible: true },
    restroomCoor: { name: 'Coor Hall 2nd Floor', code: 'COOR-RR2', position: { lat: 33.4192, lng: -111.9325 }, type: 'restroom', icon: '🚻', color: '#f59e0b', status: 'low', accessible: true },
    restroomHayden: { name: 'Hayden 1st Floor', code: 'HAYDN-RR', position: { lat: 33.4190, lng: -111.9348 }, type: 'restroom', icon: '🚻', color: '#f59e0b', status: 'moderate', accessible: true },

    // Recreation
    sdfc: { name: 'Sun Devil Fitness Complex', code: 'SDFC', position: { lat: 33.4266, lng: -111.9279 }, type: 'fitness', icon: '🏋️', color: '#ec4899', status: 'open', capacity: 45, hours: '6AM - 11PM' },

    // Parking
    parkingApache: { name: 'Apache Parking Structure', code: 'APACHE', position: { lat: 33.4135, lng: -111.9328 }, type: 'parking', icon: '🅿️', color: '#6b7280', status: 'available', spotsAvailable: 234 },
    parkingTyler: { name: 'Tyler Street Garage', code: 'TYLER', position: { lat: 33.4247, lng: -111.9375 }, type: 'parking', icon: '🅿️', color: '#6b7280', status: 'busy', spotsAvailable: 45 },
    parkingRural: { name: 'Rural Road Structure', code: 'RURAL', position: { lat: 33.4197, lng: -111.9248 }, type: 'parking', icon: '🅿️', color: '#6b7280', status: 'available', spotsAvailable: 312 },

    // Events
    event1: { name: 'AI & ML Workshop', code: 'EVENT', position: { lat: 33.4226, lng: -111.9406 }, type: 'event', icon: '🎉', color: '#8C1D40', status: 'live', location: 'BYENG 210', time: '2PM - 4PM', attendees: 47 },
    event2: { name: 'Career Fair', code: 'EVENT', position: { lat: 33.4180, lng: -111.9346 }, type: 'event', icon: '💼', color: '#8C1D40', status: 'live', location: 'MU Ballroom', time: '10AM - 3PM', attendees: 215 },
    event3: { name: 'Gaming Tournament', code: 'EVENT', position: { lat: 33.4266, lng: -111.9279 }, type: 'event', icon: '🎮', color: '#8C1D40', status: 'soon', location: 'SDFC', time: '5PM - 9PM', attendees: 64 },

    // Meetups
    meetup1: { name: 'Coffee & Code', code: 'MEETUP', position: { lat: 33.4178, lng: -111.9344 }, type: 'meetup', icon: '☕', color: '#a855f7', status: 'soon', location: 'MU Starbucks', time: '3:30PM', attendees: 8, topics: ['JavaScript', 'React', 'Web Dev'] },
    meetup2: { name: 'Physics Study Group', code: 'MEETUP', position: { lat: 33.4174, lng: -111.9357 }, type: 'meetup', icon: '📖', color: '#a855f7', status: 'live', location: 'Noble 3rd Floor', time: '2PM - 5PM', attendees: 5, topics: ['PHY 121', 'Midterm'] },
    meetup3: { name: 'Startup Networking', code: 'MEETUP', position: { lat: 33.4192, lng: -111.9325 }, type: 'meetup', icon: '🚀', color: '#a855f7', status: 'soon', location: 'Coor Hall', time: '6PM', attendees: 23, topics: ['Entrepreneurship', 'Tech'] }
};

// ========== GLOBAL STATE ==========
let map, markers = {}, userMarker, userPosition = ASU_CENTER;
let directionsService, directionsRenderer, trafficLayer, heatmap, infoWindow;
let activeFilters = new Set(['all']);
let visibleCategories = new Set(['library', 'building', 'food', 'room', 'event', 'meetup', 'restroom', 'parking', 'fitness']);
let savedLocations = new Set(JSON.parse(localStorage.getItem('savedLocations') || '[]'));
let currentTab = 'explore';
let activityTab = 'all';
let trafficOn = false;
let heatmapOn = false;

// ========== MARKER ICON LABELS (single char for clean markers) ==========
const typeIcons = {
    library: { label: 'L', bg: '#1a3a5c' },
    building: { label: 'B', bg: '#4a3728' },
    food: { label: 'F', bg: '#2d5a27' },
    room: { label: 'R', bg: '#2d5a27' },
    event: { label: 'E', bg: '#6b1631' },
    meetup: { label: 'M', bg: '#4a2d6b' },
    restroom: { label: 'W', bg: '#8b7340' },
    parking: { label: 'P', bg: '#5a4a3a' },
    fitness: { label: 'G', bg: '#8b1a3a' }
};

// ========== INITIALIZE MAP ==========
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: ASU_CENTER,
        zoom: 16,
        styles: getMarauderMapStyles(),
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        zoomControl: true,
        zoomControlOptions: { position: google.maps.ControlPosition.RIGHT_CENTER }
    });

    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer({
        map: map,
        suppressMarkers: true,
        polylineOptions: { strokeColor: '#6b1631', strokeWeight: 5, strokeOpacity: 0.8 }
    });

    trafficLayer = new google.maps.TrafficLayer();
    infoWindow = new google.maps.InfoWindow();

    Object.keys(campusLocations).forEach(id => addMarker(id, campusLocations[id]));

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            pos => {
                userPosition = { lat: pos.coords.latitude, lng: pos.coords.longitude };
                addUserMarker(userPosition);
            },
            () => addUserMarker(ASU_CENTER)
        );
    } else {
        addUserMarker(ASU_CENTER);
    }

    initHeatmap();
    initFootsteps();
    updateStats();
    renderSidebar();
    renderActivityFeed();
    showToast('info', 'Mischief Managed', 'The Marauder\'s Map of ASU is now active');
}

function getMarauderMapStyles() {
    // Parchment/Marauder's Map style
    return [
        { elementType: 'geometry', stylers: [{ color: '#f4e4c1' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#f4e4c1' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#4a3728' }] },
        { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#6b1631' }] },
        { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#ddd5b0' }] },
        { featureType: 'poi.park', elementType: 'labels.text.fill', stylers: [{ color: '#2d5a27' }] },
        { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#e8d5a3' }] },
        { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#d4c08f' }] },
        { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#d4c08f' }] },
        { featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#b8a990' }] },
        { featureType: 'road', elementType: 'labels.text.fill', stylers: [{ color: '#7a6b5a' }] },
        { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#c5d5e0' }] },
        { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#1a3a5c' }] },
        { featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#d4c08f' }] },
        { featureType: 'administrative', elementType: 'geometry.stroke', stylers: [{ color: '#b8a990' }] },
        { featureType: 'landscape.man_made', elementType: 'geometry', stylers: [{ color: '#efe0c4' }] }
    ];
}

// ========== IMPROVED MARKERS ==========
function createMarkerIcon(loc) {
    const ti = typeIcons[loc.type] || { label: '?', bg: '#4a3728' };
    const color = loc.color || ti.bg;
    const isLive = loc.status === 'live';
    const borderColor = isLive ? '#c4a35a' : '#2c1810';
    const size = isLive ? 40 : 34;

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
        <circle cx="${size/2}" cy="${size/2}" r="${size/2 - 2}" fill="${color}" stroke="${borderColor}" stroke-width="${isLive ? 3 : 2}"/>
        <text x="${size/2}" y="${size/2 + 1}" text-anchor="middle" dominant-baseline="central" fill="white" font-family="Arial,sans-serif" font-weight="bold" font-size="${isLive ? 15 : 13}">${ti.label}</text>
    </svg>`;
    return {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg),
        scaledSize: new google.maps.Size(size, size),
        anchor: new google.maps.Point(size / 2, size / 2)
    };
}

function addMarker(id, loc) {
    const marker = new google.maps.Marker({
        position: loc.position,
        map: map,
        title: loc.name,
        icon: createMarkerIcon(loc),
        animation: google.maps.Animation.DROP,
        optimized: false
    });

    marker.addListener('click', () => {
        showInfoWindow(id, loc, marker);
        highlightSidebarCard(id);
    });

    markers[id] = marker;
}

function showInfoWindow(id, loc, marker) {
    const isSaved = savedLocations.has(id);
    let statusClass = loc.status === 'open' || loc.status === 'available' || loc.status === 'low' ? 'open' : 'closed';
    let statusText = loc.status.charAt(0).toUpperCase() + loc.status.slice(1);
    if (loc.status === 'live') { statusText = 'Live Now'; statusClass = 'open'; }
    if (loc.status === 'soon') { statusText = 'Starting Soon'; statusClass = 'open'; }

    const content = `<div class="info-window">
        <h3>${loc.name}</h3>
        <div class="code">${loc.code}</div>
        <span class="status ${statusClass}">${statusText}</span>
        <p>${loc.address || loc.location || ''}</p>
        ${loc.hours ? `<p>Hours: ${loc.hours}</p>` : ''}
        ${loc.capacity !== undefined ? `<p>Capacity: ${loc.capacity}%</p>` : ''}
        ${loc.attendees ? `<p>${loc.attendees} attending</p>` : ''}
        ${loc.waitTime !== undefined ? `<p>Wait: ~${loc.waitTime} min</p>` : ''}
        ${loc.spotsAvailable !== undefined ? `<p>Spots: ${loc.spotsAvailable} available</p>` : ''}
        <div style="display:flex;gap:6px;margin-top:8px;flex-wrap:wrap;">
            <button class="btn" onclick="getDirections('${id}')">Directions</button>
            <button class="btn secondary" onclick="showDetailModal('${id}')">Details</button>
            <button class="btn ${isSaved ? '' : 'secondary'}" onclick="toggleSave('${id}')" style="${isSaved ? 'background:#FFC627;color:#000;' : ''}">${isSaved ? '★ Saved' : '☆ Save'}</button>
        </div>
    </div>`;
    infoWindow.setContent(content);
    infoWindow.open(map, marker);
}

function addUserMarker(pos) {
    if (userMarker) { userMarker.setPosition(pos); return; }
    userMarker = new google.maps.Marker({
        position: pos, map: map, title: 'You',
        icon: { path: google.maps.SymbolPath.CIRCLE, scale: 10, fillColor: '#6b1631', fillOpacity: 1, strokeColor: '#c4a35a', strokeWeight: 3 },
        zIndex: 1000
    });
    new google.maps.Circle({ map, center: pos, radius: 40, fillColor: '#6b1631', fillOpacity: 0.15, strokeColor: '#c4a35a', strokeOpacity: 0.3, strokeWeight: 1 });
}

function initHeatmap() {
    const data = [
        { location: new google.maps.LatLng(33.4177, -111.9341), weight: 90 },
        { location: new google.maps.LatLng(33.4189, -111.9343), weight: 70 },
        { location: new google.maps.LatLng(33.4198, -111.9336), weight: 60 },
        { location: new google.maps.LatLng(33.4231, -111.9396), weight: 50 },
        { location: new google.maps.LatLng(33.4261, -111.9279), weight: 45 }
    ];
    heatmap = new google.maps.visualization.HeatmapLayer({
        data, map: null, radius: 50, opacity: 0.6,
        gradient: ['rgba(0,0,0,0)', 'rgba(45,90,39,0.3)', 'rgba(139,115,64,0.5)', 'rgba(139,26,26,0.7)', 'rgba(107,22,49,0.9)']
    });
}

// ========== ANIMATED FOOTSTEPS (Marauder's Map) ==========
const wanderers = [
    { name: 'J. Potter', path: [{lat: 33.4191, lng: -111.9348}, {lat: 33.4195, lng: -111.9340}, {lat: 33.4200, lng: -111.9335}], speed: 0.00003 },
    { name: 'R. Weasley', path: [{lat: 33.4174, lng: -111.9357}, {lat: 33.4179, lng: -111.9345}, {lat: 33.4185, lng: -111.9340}], speed: 0.000025 },
    { name: 'H. Granger', path: [{lat: 33.4226, lng: -111.9406}, {lat: 33.4220, lng: -111.9390}, {lat: 33.4215, lng: -111.9375}], speed: 0.000035 },
    { name: 'D. Malfoy', path: [{lat: 33.4203, lng: -111.9340}, {lat: 33.4210, lng: -111.9330}, {lat: 33.4218, lng: -111.9315}], speed: 0.00002 },
    { name: 'L. Lovegood', path: [{lat: 33.4266, lng: -111.9279}, {lat: 33.4250, lng: -111.9300}, {lat: 33.4240, lng: -111.9320}], speed: 0.000028 },
    { name: 'N. Longbottom', path: [{lat: 33.4159, lng: -111.9320}, {lat: 33.4170, lng: -111.9330}, {lat: 33.4180, lng: -111.9340}], speed: 0.000022 },
    { name: 'G. Weasley', path: [{lat: 33.4192, lng: -111.9325}, {lat: 33.4185, lng: -111.9335}, {lat: 33.4179, lng: -111.9347}], speed: 0.000032 },
    { name: 'F. Weasley', path: [{lat: 33.4193, lng: -111.9326}, {lat: 33.4186, lng: -111.9336}, {lat: 33.4180, lng: -111.9348}], speed: 0.000031 }
];

let footstepOverlays = [];

function initFootsteps() {
    wanderers.forEach(w => {
        w.progress = Math.random();
        w.direction = 1;
        w.currentPos = interpolatePath(w.path, w.progress);

        // Create custom overlay for footsteps
        const overlay = new google.maps.OverlayView();
        overlay.wanderer = w;

        overlay.onAdd = function() {
            const div = document.createElement('div');
            div.className = 'footstep-container';
            div.innerHTML = `
                <div class="footstep" style="transform: rotate(${Math.random() * 360}deg);">👣</div>
                <div class="footstep-label">${w.name}</div>
            `;
            this.div = div;
            const panes = this.getPanes();
            panes.overlayLayer.appendChild(div);
        };

        overlay.draw = function() {
            const pos = this.getProjection().fromLatLngToDivPixel(
                new google.maps.LatLng(this.wanderer.currentPos.lat, this.wanderer.currentPos.lng)
            );
            if (pos && this.div) {
                this.div.style.left = pos.x + 'px';
                this.div.style.top = pos.y + 'px';
            }
        };

        overlay.onRemove = function() {
            if (this.div) {
                this.div.parentNode.removeChild(this.div);
                this.div = null;
            }
        };

        overlay.setMap(map);
        footstepOverlays.push(overlay);
    });

    // Animate footsteps
    setInterval(animateFootsteps, 100);
}

function interpolatePath(path, t) {
    const totalSegments = path.length - 1;
    const segment = Math.min(Math.floor(t * totalSegments), totalSegments - 1);
    const segmentT = (t * totalSegments) - segment;

    const p1 = path[segment];
    const p2 = path[Math.min(segment + 1, path.length - 1)];

    return {
        lat: p1.lat + (p2.lat - p1.lat) * segmentT,
        lng: p1.lng + (p2.lng - p1.lng) * segmentT
    };
}

function animateFootsteps() {
    wanderers.forEach((w, i) => {
        w.progress += w.speed * w.direction;

        if (w.progress >= 1) {
            w.progress = 1;
            w.direction = -1;
        } else if (w.progress <= 0) {
            w.progress = 0;
            w.direction = 1;
        }

        w.currentPos = interpolatePath(w.path, w.progress);

        if (footstepOverlays[i]) {
            footstepOverlays[i].draw();
        }
    });
}

// ========== DIRECTIONS ==========
function getDirections(id) {
    const dest = campusLocations[id];
    if (!dest) return;
    infoWindow.close();

    directionsService.route({
        origin: userPosition,
        destination: dest.position,
        travelMode: google.maps.TravelMode.WALKING
    }, (response, status) => {
        if (status === 'OK') {
            directionsRenderer.setDirections(response);
            const leg = response.routes[0].legs[0];
            document.getElementById('dirDuration').textContent = leg.duration.text;
            document.getElementById('dirDistance').textContent = leg.distance.text;
            document.getElementById('dirSteps').innerHTML = leg.steps.map((s, i) => `
                <div class="direction-step"><div class="step-num">${i + 1}</div><div class="step-text">${s.instructions}</div></div>
            `).join('');
            document.getElementById('directionsPanel').classList.add('active');
            showToast('success', 'Route Found', `Walking to ${dest.name}: ${leg.duration.text}`);
        } else {
            showToast('warning', 'Error', 'Could not calculate route');
        }
    });
}

function closeDirections() {
    document.getElementById('directionsPanel').classList.remove('active');
    directionsRenderer.setDirections({ routes: [] });
}

// ========== MAP CONTROLS ==========
function setMapType(type) {
    map.setMapTypeId(type);
    document.querySelectorAll('.map-type-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
}

function centerOnUser() {
    map.panTo(userPosition);
    map.setZoom(17);
    showToast('info', 'Location', 'Centered on your position');
}

function toggleTraffic() {
    trafficOn = !trafficOn;
    trafficLayer.setMap(trafficOn ? map : null);
    document.querySelector('[title="Traffic"]').classList.toggle('active', trafficOn);
    showToast('info', 'Traffic', trafficOn ? 'Enabled' : 'Disabled');
}

function toggleHeatmap() {
    heatmapOn = !heatmapOn;
    heatmap.setMap(heatmapOn ? map : null);
    document.querySelector('[title="Heatmap"]').classList.toggle('active', heatmapOn);
    showToast('info', 'Crowd Heatmap', heatmapOn ? 'Showing busy areas' : 'Hidden');
}

function toggle3D() {
    const tilt = map.getTilt() === 0 ? 45 : 0;
    map.setTilt(tilt);
    document.querySelector('[title="3D"]').classList.toggle('active', tilt > 0);
}

function toggleCategory(cat) {
    const item = event.target.closest('.legend-item');
    item.classList.toggle('disabled');
    const disabled = item.classList.contains('disabled');
    Object.keys(campusLocations).forEach(id => {
        if (campusLocations[id].type === cat && markers[id]) {
            markers[id].setVisible(!disabled);
        }
    });
    if (disabled) visibleCategories.delete(cat); else visibleCategories.add(cat);
    renderSidebar();
}

// ========== STATS ==========
function updateStats() {
    const rooms = Object.values(campusLocations).filter(l => l.type === 'room' && l.status === 'available').length;
    const events = Object.values(campusLocations).filter(l => l.type === 'event' && l.status === 'live').length;
    const meetups = Object.values(campusLocations).filter(l => l.type === 'meetup').length;
    document.getElementById('statRooms').textContent = rooms;
    document.getElementById('statEvents').textContent = events;
    document.getElementById('statMeetups').textContent = meetups;
}

// ========== SIDEBAR ==========
function renderSidebar() {
    const container = document.getElementById('sidebarContent');
    const activeFilter = document.querySelector('.filter-chip.active')?.dataset.filter || 'all';

    // Update filter chip counts
    updateFilterCounts();

    let filtered;
    if (currentTab === 'saved') {
        filtered = Object.entries(campusLocations).filter(([id]) => savedLocations.has(id));
    } else if (currentTab === 'events') {
        filtered = Object.entries(campusLocations).filter(([id, loc]) => loc.type === 'event');
    } else if (currentTab === 'meetups') {
        filtered = Object.entries(campusLocations).filter(([id, loc]) => loc.type === 'meetup');
    } else {
        filtered = Object.entries(campusLocations).filter(([id, loc]) => {
            if (activeFilter !== 'all' && loc.type !== activeFilter) return false;
            return visibleCategories.has(loc.type);
        });
    }

    if (currentTab === 'saved' && filtered.length === 0) {
        container.innerHTML = `<div style="text-align:center;color:var(--text-muted);padding:60px 20px;">
            <div style="font-size:48px;margin-bottom:16px;">★</div>
            <div style="font-size:16px;font-weight:600;color:var(--text-primary);margin-bottom:8px;">No Saved Locations</div>
            <div style="font-size:13px;">Click the star on any location to save it here for quick access.</div>
        </div>`;
        return;
    }

    if (currentTab === 'events' || currentTab === 'meetups') {
        // Flat list for events/meetups
        let html = '';
        if (filtered.length === 0) {
            html = `<p style="text-align:center;color:var(--text-muted);padding:40px;">No ${currentTab} found</p>`;
        } else {
            filtered.forEach(([id, loc]) => { html += renderLocationCard(id, loc); });
        }
        container.innerHTML = html;
        return;
    }

    // Grouped list for explore/saved
    const grouped = {};
    filtered.forEach(([id, loc]) => {
        if (!grouped[loc.type]) grouped[loc.type] = [];
        grouped[loc.type].push([id, loc]);
    });

    const typeLabels = {
        library: 'Libraries', building: 'Halls & Towers', food: 'The Kitchens',
        room: 'Secret Chambers', event: 'Gatherings', meetup: 'Meetings',
        restroom: 'Lavatories', parking: 'The Stables', fitness: 'Training Grounds'
    };

    let html = '';
    Object.entries(grouped).forEach(([type, items]) => {
        html += `<div class="section">
            <div class="section-header">
                <div class="section-title">${typeLabels[type] || type}</div>
                <div class="section-link" onclick="expandSection('${type}')">${items.length > 5 ? `See all ${items.length}` : `${items.length} total`}</div>
            </div>`;
        const showCount = items._expanded ? items.length : Math.min(items.length, 5);
        items.slice(0, showCount).forEach(([id, loc]) => {
            html += renderLocationCard(id, loc);
        });
        html += '</div>';
    });

    container.innerHTML = html || '<p style="text-align:center;color:var(--text-muted);padding:40px;">No locations match your filters</p>';
}

function updateFilterCounts() {
    document.querySelectorAll('.filter-chip').forEach(chip => {
        const filter = chip.dataset.filter;
        if (filter === 'all') {
            const count = Object.keys(campusLocations).length;
            chip.innerHTML = `All <span class="count">${count}</span>`;
        } else {
            const count = Object.values(campusLocations).filter(l => l.type === filter).length;
            const icon = chip.textContent.split(' ')[0];
            const label = chip.textContent.replace(/\d+/g, '').trim();
            chip.innerHTML = `${label} <span class="count">${count}</span>`;
        }
    });
}

function expandSection(type) {
    // Set filter to show only this type
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    const chip = document.querySelector(`.filter-chip[data-filter="${type}"]`);
    if (chip) {
        chip.classList.add('active');
    }
    renderSidebar();
    showToast('info', 'Filter', `Showing all ${type} locations`);
}

function renderLocationCard(id, loc) {
    const isSaved = savedLocations.has(id);
    const statusClass = loc.status === 'open' || loc.status === 'available' || loc.status === 'low' ? 'open' : loc.status === 'live' ? 'live' : loc.status === 'soon' ? 'soon' : 'busy';
    const statusText = loc.status.charAt(0).toUpperCase() + loc.status.slice(1);

    let meta = '';
    if (loc.hours) meta += `<div class="card-meta-item">🕐 ${loc.hours}</div>`;
    if (loc.capacity !== undefined) meta += `<div class="card-meta-item">👥 ${loc.capacity}% full</div>`;
    if (loc.waitTime !== undefined) meta += `<div class="card-meta-item">⏱️ ~${loc.waitTime} min</div>`;
    if (loc.attendees) meta += `<div class="card-meta-item">👥 ${loc.attendees} attending</div>`;
    if (loc.time) meta += `<div class="card-meta-item">🕐 ${loc.time}</div>`;
    if (loc.spotsAvailable !== undefined) meta += `<div class="card-meta-item">🅿️ ${loc.spotsAvailable} spots</div>`;

    let occupancy = '';
    if (loc.capacity !== undefined && loc.type !== 'room') {
        const level = loc.capacity < 40 ? 'low' : loc.capacity < 70 ? 'medium' : 'high';
        occupancy = `<div class="occupancy-bar"><div class="occupancy-fill ${level}" style="width:${loc.capacity}%"></div></div>`;
    }

    let tags = '';
    if (loc.topics) {
        tags = `<div class="tags">${loc.topics.map(t => `<span class="tag">${t}</span>`).join('')}</div>`;
    }

    let amenitiesTags = '';
    if (loc.amenities) {
        amenitiesTags = `<div class="tags">${loc.amenities.map(a => `<span class="tag">${a}</span>`).join('')}</div>`;
    }

    let attendees = '';
    if (loc.attendees && loc.type === 'meetup') {
        attendees = `<div class="attendees">
            <div class="attendee-stack">
                <div class="attendee-avatar" style="background:#4ADE80;">JD</div>
                <div class="attendee-avatar" style="background:#3b82f6;">MK</div>
                <div class="attendee-avatar more">+${Math.max(0, loc.attendees - 2)}</div>
            </div>
            <span class="attendee-count">${loc.attendees} going</span>
        </div>`;
    }

    // Contextual primary action
    let primaryAction = `<button class="card-btn primary" onclick="event.stopPropagation();getDirections('${id}')">Navigate</button>`;
    if (loc.type === 'room' && loc.available) {
        primaryAction = `<button class="card-btn primary" onclick="event.stopPropagation();bookRoom('${id}')">Book Room</button>`;
    } else if (loc.type === 'meetup') {
        primaryAction = `<button class="card-btn primary" onclick="event.stopPropagation();joinMeetup('${id}')">Join</button>`;
    } else if (loc.type === 'event') {
        primaryAction = `<button class="card-btn primary" onclick="event.stopPropagation();rsvpEvent('${id}')">RSVP</button>`;
    }

    return `<div class="location-card" id="card-${id}" onclick="focusLocation('${id}')">
        <div class="card-top">
            <div class="card-info">
                <div class="card-icon ${loc.type}">${loc.icon}</div>
                <div>
                    <div class="card-title">${loc.name}</div>
                    <div class="card-subtitle">${loc.address || loc.location || ''}</div>
                    <div class="card-code">${loc.code}</div>
                </div>
            </div>
            <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;">
                <span class="status-badge ${statusClass}">${statusText}</span>
                <button class="save-btn ${isSaved ? 'saved' : ''}" onclick="event.stopPropagation();toggleSave('${id}')" title="${isSaved ? 'Remove from saved' : 'Save location'}">
                    ${isSaved ? '★' : '☆'}
                </button>
            </div>
        </div>
        ${occupancy}
        <div class="card-meta">${meta}</div>
        ${tags}
        ${amenitiesTags}
        ${attendees}
        <div class="card-actions">
            ${primaryAction}
            <button class="card-btn secondary" onclick="event.stopPropagation();showDetailModal('${id}')">Details</button>
        </div>
    </div>`;
}

function highlightSidebarCard(id) {
    document.querySelectorAll('.location-card').forEach(c => c.classList.remove('active'));
    const card = document.getElementById(`card-${id}`);
    if (card) {
        card.classList.add('active');
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function focusLocation(id) {
    const loc = campusLocations[id];
    if (!loc) return;
    map.panTo(loc.position);
    map.setZoom(18);
    if (markers[id]) google.maps.event.trigger(markers[id], 'click');
    highlightSidebarCard(id);
}

// ========== SAVE / BOOKMARK ==========
function toggleSave(id) {
    if (savedLocations.has(id)) {
        savedLocations.delete(id);
        showToast('info', 'Removed', `${campusLocations[id].name} removed from saved`);
    } else {
        savedLocations.add(id);
        showToast('success', 'Saved!', `${campusLocations[id].name} saved`);
    }
    localStorage.setItem('savedLocations', JSON.stringify([...savedLocations]));
    renderSidebar();
    // Refresh info window if open
    if (infoWindow.getMap()) {
        const marker = markers[id];
        if (marker) showInfoWindow(id, campusLocations[id], marker);
    }
}

// ========== ROOM BOOKING ==========
function bookRoom(id) {
    const loc = campusLocations[id];
    if (!loc) return;

    if (loc.available) {
        loc.status = 'busy';
        loc.available = false;
        if (markers[id]) markers[id].setIcon(createMarkerIcon(loc));
        updateStats();
        renderSidebar();
        showToast('success', 'Room Booked!', `${loc.name} booked for 2 hours`);

        // Add to activity feed
        activities.unshift({
            name: 'You', action: `booked ${loc.name}`, avatar: '#FFC627', time: 'Just now'
        });
        renderActivityFeed();
    } else {
        showToast('warning', 'Unavailable', `${loc.name} is currently in use`);
    }
}

// ========== JOIN / RSVP ==========
function joinMeetup(id) {
    const loc = campusLocations[id];
    if (!loc) return;
    loc.attendees = (loc.attendees || 0) + 1;
    renderSidebar();
    showToast('success', 'Joined!', `You joined ${loc.name}`);

    activities.unshift({
        name: 'You', action: `joined ${loc.name}`, avatar: '#FFC627', time: 'Just now'
    });
    renderActivityFeed();
}

function rsvpEvent(id) {
    const loc = campusLocations[id];
    if (!loc) return;
    loc.attendees = (loc.attendees || 0) + 1;
    renderSidebar();
    showToast('success', "RSVP'd!", `You're attending ${loc.name}`);

    activities.unshift({
        name: 'You', action: `RSVP'd to ${loc.name}`, avatar: '#FFC627', time: 'Just now'
    });
    renderActivityFeed();
}

// ========== FILTERS ==========
document.addEventListener('DOMContentLoaded', () => {
    // Filter chips
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            renderSidebar();
        });
    });

    // Sidebar tabs
    document.querySelectorAll('.sidebar-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.sidebar-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentTab = tab.dataset.tab;

            // Show/hide filters based on tab
            const filtersEl = document.querySelector('.sidebar-filters');
            filtersEl.style.display = (currentTab === 'explore') ? 'block' : 'none';

            renderSidebar();
        });
    });

    // Activity panel tabs
    document.querySelectorAll('.activity-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.activity-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            activityTab = tab.textContent.trim().toLowerCase();
            renderActivityFeed();
        });
    });

    // Mobile sidebar toggle
    const menuBtn = document.getElementById('mobileMenuBtn');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            document.getElementById('sidebar').classList.toggle('open');
        });
    }
});

// ========== ACTIVITY FEED ==========
const activities = [
    { name: 'Jessica M.', action: 'booked Study Room 204', avatar: '#22c55e', time: 'Just now', actionBtn: 'Join', actionId: 'room204' },
    { name: 'Alex K.', action: 'joined AI & ML Workshop', avatar: '#3b82f6', time: '2 min ago' },
    { name: 'Sarah P.', action: 'created Coffee & Code meetup', avatar: '#a855f7', time: '5 min ago', actionBtn: 'RSVP', actionId: 'meetup1' },
    { name: 'Mike T.', action: 'checked into Hayden Library', avatar: '#FFC627', time: '8 min ago' },
    { name: 'Lisa R.', action: 'started Physics Study Group', avatar: '#ec4899', time: '12 min ago', actionBtn: 'Join', actionId: 'meetup2' }
];

function renderActivityFeed() {
    const list = document.getElementById('activityList');
    let items = activities;

    if (activityTab === 'nearby') {
        // Show only activities related to locations near user
        items = activities.filter(a => {
            if (!a.actionId) return true; // Include generic activities
            const loc = campusLocations[a.actionId];
            if (!loc) return true;
            const dist = getDistance(userPosition, loc.position);
            return dist < 500; // Within 500m
        });
    }

    list.innerHTML = items.slice(0, 8).map(a => `
        <div class="activity-item">
            <div class="activity-avatar" style="background:${a.avatar};${a.avatar === '#FFC627' ? 'color:#000;' : ''}">${a.name.split(' ').map(n => n[0]).join('')}</div>
            <div class="activity-content">
                <div class="activity-text"><strong>${a.name}</strong> ${a.action}</div>
                <div class="activity-time">${a.time}</div>
            </div>
            ${a.actionBtn && a.actionId ? `<button class="activity-action" onclick="handleActivityAction('${a.actionId}', '${a.actionBtn}')">${a.actionBtn}</button>` : ''}
        </div>
    `).join('');
}

function handleActivityAction(id, action) {
    if (action === 'Join') {
        const loc = campusLocations[id];
        if (loc?.type === 'room') bookRoom(id);
        else if (loc?.type === 'meetup') joinMeetup(id);
        else focusLocation(id);
    } else if (action === 'RSVP') {
        rsvpEvent(id) || joinMeetup(id);
    }
}

function getDistance(p1, p2) {
    const R = 6371000;
    const dLat = (p2.lat - p1.lat) * Math.PI / 180;
    const dLon = (p2.lng - p1.lng) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(p1.lat * Math.PI / 180) * Math.cos(p2.lat * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// ========== MODALS ==========
function showDetailModal(id) {
    const loc = campusLocations[id];
    if (!loc) return;
    infoWindow.close();

    const isSaved = savedLocations.has(id);
    const statusClass = loc.status === 'open' || loc.status === 'available' ? 'open' : loc.status === 'live' ? 'live' : 'busy';

    let actionBtns = `<button class="modal-btn primary" onclick="getDirections('${id}');closeDetailModal()">Navigate</button>`;
    if (loc.type === 'room' && loc.available) {
        actionBtns = `<button class="modal-btn primary" onclick="bookRoom('${id}');closeDetailModal()">Book Room</button>`;
    } else if (loc.type === 'meetup') {
        actionBtns = `<button class="modal-btn primary" onclick="joinMeetup('${id}');closeDetailModal()">Join Meetup</button>`;
    } else if (loc.type === 'event') {
        actionBtns = `<button class="modal-btn primary" onclick="rsvpEvent('${id}');closeDetailModal()">RSVP</button>`;
    }

    document.getElementById('detailModalContent').innerHTML = `
        <div class="modal-header">
            <button class="modal-close" onclick="closeDetailModal()">✕</button>
            <div class="modal-type">${loc.type}</div>
            <div class="modal-title">${loc.icon} ${loc.name}</div>
            <div class="modal-subtitle">${loc.address || loc.location || 'ASU Tempe Campus'}</div>
        </div>
        <div class="modal-body">
            <div class="modal-section">
                <div class="modal-section-title">Details</div>
                <div class="modal-grid">
                    <div class="modal-grid-item">
                        <div class="modal-grid-label">Status</div>
                        <div class="modal-grid-value" style="color:var(--${statusClass === 'open' ? 'success' : statusClass === 'live' ? 'asu-gold' : 'warning'})">
                            ${loc.status.charAt(0).toUpperCase() + loc.status.slice(1)}
                        </div>
                    </div>
                    <div class="modal-grid-item">
                        <div class="modal-grid-label">Building Code</div>
                        <div class="modal-grid-value">${loc.code}</div>
                    </div>
                    ${loc.hours ? `<div class="modal-grid-item"><div class="modal-grid-label">Hours</div><div class="modal-grid-value">${loc.hours}</div></div>` : ''}
                    ${loc.capacity !== undefined ? `<div class="modal-grid-item"><div class="modal-grid-label">Capacity</div><div class="modal-grid-value">${loc.capacity}%</div></div>` : ''}
                    ${loc.attendees ? `<div class="modal-grid-item"><div class="modal-grid-label">Attendees</div><div class="modal-grid-value">${loc.attendees}</div></div>` : ''}
                    ${loc.time ? `<div class="modal-grid-item"><div class="modal-grid-label">Time</div><div class="modal-grid-value">${loc.time}</div></div>` : ''}
                    ${loc.spotsAvailable !== undefined ? `<div class="modal-grid-item"><div class="modal-grid-label">Spots</div><div class="modal-grid-value">${loc.spotsAvailable}</div></div>` : ''}
                    ${loc.waitTime !== undefined ? `<div class="modal-grid-item"><div class="modal-grid-label">Wait Time</div><div class="modal-grid-value">~${loc.waitTime} min</div></div>` : ''}
                </div>
            </div>
            ${loc.description ? `<div class="modal-section"><div class="modal-section-title">About</div><p style="font-size:13px;color:var(--text-secondary);line-height:1.6;">${loc.description}</p></div>` : ''}
            ${loc.amenities ? `<div class="modal-section"><div class="modal-section-title">Amenities</div><div class="modal-amenities">${loc.amenities.map(a => `<span class="modal-amenity">${a}</span>`).join('')}</div></div>` : ''}
            ${loc.topics ? `<div class="modal-section"><div class="modal-section-title">Topics</div><div class="tags">${loc.topics.map(t => `<span class="tag">${t}</span>`).join('')}</div></div>` : ''}
            <div class="modal-section">
                <div class="modal-section-title">Location</div>
                <div class="modal-grid">
                    <div class="modal-grid-item">
                        <div class="modal-grid-label">Latitude</div>
                        <div class="modal-grid-value" style="font-family:'Space Mono',monospace;font-size:12px;">${loc.position.lat.toFixed(4)}</div>
                    </div>
                    <div class="modal-grid-item">
                        <div class="modal-grid-label">Longitude</div>
                        <div class="modal-grid-value" style="font-family:'Space Mono',monospace;font-size:12px;">${loc.position.lng.toFixed(4)}</div>
                    </div>
                </div>
            </div>
            <div class="modal-actions">
                ${actionBtns}
                <button class="modal-btn secondary" onclick="toggleSave('${id}')" style="${isSaved ? 'background:var(--asu-gold);color:#000;' : ''}">
                    ${isSaved ? '★ Saved' : '☆ Save'}
                </button>
            </div>
        </div>
    `;
    document.getElementById('detailModal').classList.add('active');
}

function closeDetailModal() { document.getElementById('detailModal').classList.remove('active'); }

function openCreateMeetup() { document.getElementById('createMeetupModal').classList.add('active'); }
function closeCreateMeetup() { document.getElementById('createMeetupModal').classList.remove('active'); }

function submitMeetup(e) {
    e.preventDefault();
    const form = e.target;
    const title = form.querySelector('input[type="text"]').value;
    const location = form.querySelector('select').value;
    const topicsInput = form.querySelectorAll('input[type="text"]')[1]?.value || '';

    // Generate a unique ID
    const newId = 'meetup_' + Date.now();
    const locationMap = {
        hayden: { pos: campusLocations.hayden.position, name: 'Hayden Library' },
        noble: { pos: campusLocations.noble.position, name: 'Noble Library' },
        mu: { pos: campusLocations.mu.position, name: 'Memorial Union' },
        coor: { pos: campusLocations.coor.position, name: 'Coor Hall' },
        sdfc: { pos: campusLocations.sdfc.position, name: 'Sun Devil Fitness' }
    };

    const loc = locationMap[location] || locationMap.mu;
    const topics = topicsInput.split(',').map(t => t.trim()).filter(Boolean);

    campusLocations[newId] = {
        name: title,
        code: 'MEETUP',
        position: loc.pos,
        type: 'meetup',
        icon: '🎯',
        color: '#a855f7',
        status: 'soon',
        location: loc.name,
        time: 'Today',
        attendees: 1,
        topics: topics
    };

    if (map) addMarker(newId, campusLocations[newId]);
    updateStats();
    renderSidebar();

    activities.unshift({
        name: 'You', action: `created "${title}" meetup`, avatar: '#FFC627', time: 'Just now', actionBtn: 'RSVP', actionId: newId
    });
    renderActivityFeed();

    closeCreateMeetup();
    form.reset();
    showToast('success', 'Meetup Created!', 'Students can now RSVP');
}

function openStudyBuddy() {
    document.getElementById('studyBuddyList').innerHTML = [
        { name: 'Kevin Lee', major: 'Computer Science - Junior', courses: ['CSE 310', 'MAT 343'], location: 'Hayden Library', color: '#22c55e', locationId: 'hayden' },
        { name: 'Amanda R.', major: 'Software Engineering - Senior', courses: ['CSE 310', 'CSE 360'], location: 'Noble Library', color: '#3b82f6', locationId: 'noble' },
        { name: 'James T.', major: 'Data Science - Sophomore', courses: ['MAT 343', 'STP 420'], location: 'Coor Hall', color: '#a855f7', locationId: 'coor' }
    ].map(b => `
        <div style="background:var(--dark-hover);border-radius:10px;padding:14px;margin-bottom:10px;display:flex;gap:14px;align-items:center;">
            <div style="width:44px;height:44px;border-radius:50%;background:${b.color};display:flex;align-items:center;justify-content:center;font-weight:600;font-size:16px;">${b.name.split(' ').map(n => n[0]).join('')}</div>
            <div style="flex:1;">
                <div style="font-weight:600;margin-bottom:2px;">${b.name}</div>
                <div style="font-size:12px;color:var(--text-secondary);margin-bottom:6px;">${b.major} - at ${b.location}</div>
                <div class="tags">${b.courses.map(c => `<span class="tag">${c}</span>`).join('')}</div>
            </div>
            <div style="display:flex;flex-direction:column;gap:6px;">
                <button class="card-btn primary" style="flex:none;width:auto;padding:8px 14px;" onclick="connectBuddy('${b.name}')">Connect</button>
                <button class="card-btn secondary" style="flex:none;width:auto;padding:6px 14px;font-size:11px;" onclick="closeStudyBuddy();focusLocation('${b.locationId}')">Find</button>
            </div>
        </div>
    `).join('');
    document.getElementById('studyBuddyModal').classList.add('active');
}

function connectBuddy(name) {
    showToast('success', 'Request Sent!', `Connection request sent to ${name}`);
}

function closeStudyBuddy() { document.getElementById('studyBuddyModal').classList.remove('active'); }

// Close modals on overlay click
document.addEventListener('DOMContentLoaded', () => {
    ['detailModal', 'createMeetupModal', 'studyBuddyModal'].forEach(id => {
        const modal = document.getElementById(id);
        if (modal) {
            modal.addEventListener('click', e => {
                if (e.target.id === id) document.getElementById(id).classList.remove('active');
            });
        }
    });
});

// ========== SEARCH ==========
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', e => {
            const q = e.target.value.toLowerCase();
            const results = document.getElementById('searchResults');
            if (!q) { results.classList.remove('active'); return; }

            const matches = Object.entries(campusLocations).filter(([id, loc]) =>
                loc.name.toLowerCase().includes(q) ||
                loc.code.toLowerCase().includes(q) ||
                (loc.type && loc.type.toLowerCase().includes(q)) ||
                (loc.address && loc.address.toLowerCase().includes(q)) ||
                (loc.topics && loc.topics.some(t => t.toLowerCase().includes(q)))
            ).slice(0, 8);

            if (matches.length) {
                results.innerHTML = matches.map(([id, loc]) => `
                    <div class="search-result-item" onclick="focusLocation('${id}');document.getElementById('searchResults').classList.remove('active');document.getElementById('searchInput').value='';">
                        <div class="search-result-icon" style="background:${loc.color}20;">${loc.icon}</div>
                        <div class="search-result-info">
                            <h4>${loc.name}</h4>
                            <p>${loc.code} - ${loc.type}${loc.address ? ' - ' + loc.address : ''}</p>
                        </div>
                    </div>
                `).join('');
                results.classList.add('active');
            } else {
                results.innerHTML = '<div style="padding:16px;text-align:center;color:var(--text-muted);">No results found</div>';
                results.classList.add('active');
            }
        });

        // Keyboard shortcut: / to focus search
        document.addEventListener('keydown', e => {
            if (e.key === '/' && document.activeElement !== searchInput) {
                e.preventDefault();
                searchInput.focus();
            }
            if (e.key === 'Escape') {
                searchInput.blur();
                document.getElementById('searchResults').classList.remove('active');
            }
        });
    }

    document.addEventListener('click', e => {
        if (!e.target.closest('.search-container')) {
            const results = document.getElementById('searchResults');
            if (results) results.classList.remove('active');
        }
    });
});

// ========== TOAST ==========
function showToast(type, title, message) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div class="toast-icon">${type === 'success' ? '✓' : type === 'info' ? 'ℹ' : '⚠'}</div>
        <div class="toast-content"><div class="toast-title">${title}</div><div class="toast-message">${message}</div></div>
        <button class="toast-close" onclick="this.parentElement.remove()">✕</button>
    `;
    container.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 3000);
}

// ========== LOAD GOOGLE MAPS ==========
function loadGoogleMaps() {
    if (!GOOGLE_MAPS_API_KEY || !GOOGLE_MAPS_API_KEY.startsWith('AIza')) {
        document.getElementById('map').innerHTML = `
            <div class="api-notice">
                <h2>Google Maps API Key Required</h2>
                <p>To enable the interactive Google Maps, add your API key to the .env file:</p>
                <code>GOOGLE_MAPS_API_KEY=YOUR_KEY_HERE</code>
                <p style="font-size:12px;margin-top:16px;">Then run the server: <code>python3 server.py</code></p>
                <p style="font-size:12px;margin-top:8px;">Get your key from <a href="https://console.cloud.google.com/google/maps-apis" target="_blank" style="color:var(--asu-gold);">Google Cloud Console</a></p>
                <p style="font-size:11px;color:var(--text-muted);">Enable: Maps JavaScript API, Directions API, Visualization API</p>
            </div>
        `;
        renderSidebar();
        renderActivityFeed();
        return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=visualization,places&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

window.addEventListener('load', loadGoogleMaps);
