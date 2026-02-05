// ========== CONFIGURATION ==========
// API key is injected by the server from .env file - DO NOT HARDCODE
const GOOGLE_MAPS_API_KEY = '__ENV_GOOGLE_MAPS_API_KEY__';
const ASU_CENTER = { lat: 33.4185, lng: -111.9340 };

// ========== ASU TEMPE CAMPUS DATA ==========
const campusLocations = {
    // Libraries - Verified coordinates
    hayden: { name: 'Hayden Library', code: 'HAYDN', position: { lat: 33.4191, lng: -111.9348 }, type: 'library', icon: '📚', color: '#3b82f6', status: 'open', capacity: 67, hours: '7AM - 2AM', address: '300 E Orange Mall' },
    noble: { name: 'Noble Library', code: 'NOBLE', position: { lat: 33.4174, lng: -111.9357 }, type: 'library', icon: '📚', color: '#3b82f6', status: 'open', capacity: 34, hours: '7AM - 10PM', address: '1541 S McAllister Ave' },
    law: { name: 'Ross-Blakley Law Library', code: 'LAW', position: { lat: 33.4171, lng: -111.9313 }, type: 'library', icon: '📚', color: '#3b82f6', status: 'open', capacity: 45, hours: '8AM - 10PM', address: '1100 S McAllister Ave' },
    design: { name: 'Design Library', code: 'DLIB', position: { lat: 33.4216, lng: -111.9392 }, type: 'library', icon: '📚', color: '#3b82f6', status: 'open', capacity: 28, hours: '9AM - 6PM', address: 'Architecture Building' },

    // Major Academic Buildings - Verified coordinates
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

    // Food & Dining - Verified coordinates
    pitchforks: { name: 'Pitchforks Dining', code: 'PITCH', position: { lat: 33.4180, lng: -111.9346 }, type: 'food', icon: '🍕', color: '#06b6d4', status: 'open', hours: '7AM - 9PM', waitTime: 5 },
    hassayampa: { name: 'Hassayampa Dining', code: 'HASSA', position: { lat: 33.4149, lng: -111.9380 }, type: 'food', icon: '🍔', color: '#06b6d4', status: 'open', hours: '7AM - 10PM', waitTime: 8 },
    tooker: { name: 'Tooker House Dining', code: 'TOOKR', position: { lat: 33.4155, lng: -111.9250 }, type: 'food', icon: '🥗', color: '#06b6d4', status: 'open', hours: '7AM - 9PM', waitTime: 3 },
    starbucksMU: { name: 'Starbucks (MU)', code: 'SBMU', position: { lat: 33.4178, lng: -111.9344 }, type: 'food', icon: '☕', color: '#06b6d4', status: 'open', hours: '7AM - 8PM', waitTime: 10 },
    chikfila: { name: 'Chick-fil-A', code: 'CFA', position: { lat: 33.4179, lng: -111.9347 }, type: 'food', icon: '🐔', color: '#06b6d4', status: 'open', hours: '7:30AM - 8PM', waitTime: 15 },

    // Study Rooms - Positioned within their parent buildings
    room204: { name: 'Study Room 204', code: 'NOBLE-204', position: { lat: 33.4174, lng: -111.9358 }, type: 'room', icon: '🚪', color: '#22c55e', status: 'available', capacity: 4, available: true, amenities: ['Whiteboard', 'TV', 'Power'] },
    room301: { name: 'Study Room 301', code: 'HAYDN-301', position: { lat: 33.4191, lng: -111.9349 }, type: 'room', icon: '🚪', color: '#22c55e', status: 'busy', capacity: 6, available: false, amenities: ['Whiteboard', 'Projector'] },
    roomA: { name: 'Conference Room A', code: 'COOR-A', position: { lat: 33.4192, lng: -111.9325 }, type: 'room', icon: '🚪', color: '#22c55e', status: 'available', capacity: 10, available: true, amenities: ['Video Conf', 'Whiteboard'] },
    roomB: { name: 'Conference Room B', code: 'FULTN-B', position: { lat: 33.4218, lng: -111.9367 }, type: 'room', icon: '🚪', color: '#22c55e', status: 'available', capacity: 8, available: true, amenities: ['Projector', 'Phone'] },

    // Restrooms - Positioned within their parent buildings
    restroomMU: { name: 'MU 1st Floor', code: 'MU-RR1', position: { lat: 33.4179, lng: -111.9345 }, type: 'restroom', icon: '🚻', color: '#f59e0b', status: 'low', accessible: true },
    restroomCoor: { name: 'Coor Hall 2nd Floor', code: 'COOR-RR2', position: { lat: 33.4192, lng: -111.9325 }, type: 'restroom', icon: '🚻', color: '#f59e0b', status: 'low', accessible: true },
    restroomHayden: { name: 'Hayden 1st Floor', code: 'HAYDN-RR', position: { lat: 33.4190, lng: -111.9348 }, type: 'restroom', icon: '🚻', color: '#f59e0b', status: 'moderate', accessible: true },

    // Recreation - Verified coordinates
    sdfc: { name: 'Sun Devil Fitness Complex', code: 'SDFC', position: { lat: 33.4266, lng: -111.9279 }, type: 'fitness', icon: '🏋️', color: '#ec4899', status: 'open', capacity: 45, hours: '6AM - 11PM' },

    // Parking - Verified coordinates
    parkingApache: { name: 'Apache Parking Structure', code: 'APACHE', position: { lat: 33.4135, lng: -111.9328 }, type: 'parking', icon: '🅿️', color: '#6b7280', status: 'available', spotsAvailable: 234 },
    parkingTyler: { name: 'Tyler Street Garage', code: 'TYLER', position: { lat: 33.4247, lng: -111.9375 }, type: 'parking', icon: '🅿️', color: '#6b7280', status: 'busy', spotsAvailable: 45 },
    parkingRural: { name: 'Rural Road Structure', code: 'RURAL', position: { lat: 33.4197, lng: -111.9248 }, type: 'parking', icon: '🅿️', color: '#6b7280', status: 'available', spotsAvailable: 312 },

    // Events (dynamic) - Positioned at their event buildings
    event1: { name: 'AI & ML Workshop', code: 'EVENT', position: { lat: 33.4226, lng: -111.9406 }, type: 'event', icon: '🎉', color: '#8C1D40', status: 'live', location: 'BYENG 210', time: '2PM - 4PM', attendees: 47 },
    event2: { name: 'Career Fair', code: 'EVENT', position: { lat: 33.4180, lng: -111.9346 }, type: 'event', icon: '💼', color: '#8C1D40', status: 'live', location: 'MU Ballroom', time: '10AM - 3PM', attendees: 215 },
    event3: { name: 'Gaming Tournament', code: 'EVENT', position: { lat: 33.4266, lng: -111.9279 }, type: 'event', icon: '🎮', color: '#8C1D40', status: 'soon', location: 'SDFC', time: '5PM - 9PM', attendees: 64 },

    // Meetups (student-created) - Positioned at their meeting locations
    meetup1: { name: 'Coffee & Code', code: 'MEETUP', position: { lat: 33.4178, lng: -111.9344 }, type: 'meetup', icon: '☕', color: '#a855f7', status: 'soon', location: 'MU Starbucks', time: '3:30PM', attendees: 8, topics: ['JavaScript', 'React', 'Web Dev'] },
    meetup2: { name: 'Physics Study Group', code: 'MEETUP', position: { lat: 33.4174, lng: -111.9357 }, type: 'meetup', icon: '📖', color: '#a855f7', status: 'live', location: 'Noble 3rd Floor', time: '2PM - 5PM', attendees: 5, topics: ['PHY 121', 'Midterm'] },
    meetup3: { name: 'Startup Networking', code: 'MEETUP', position: { lat: 33.4192, lng: -111.9325 }, type: 'meetup', icon: '🚀', color: '#a855f7', status: 'soon', location: 'Coor Hall', time: '6PM', attendees: 23, topics: ['Entrepreneurship', 'Tech'] }
};

// ========== GLOBAL VARIABLES ==========
let map, markers = {}, userMarker, userPosition = ASU_CENTER;
let directionsService, directionsRenderer, trafficLayer, heatmap, infoWindow;
let activeFilters = new Set(['all']);
let visibleCategories = new Set(['library', 'building', 'food', 'room', 'event', 'meetup', 'restroom', 'parking', 'fitness']);

// ========== INITIALIZE MAP ==========
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: ASU_CENTER,
        zoom: 16,
        styles: getDarkMapStyles(),
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
        polylineOptions: { strokeColor: '#FFC627', strokeWeight: 5, strokeOpacity: 0.8 }
    });

    trafficLayer = new google.maps.TrafficLayer();
    infoWindow = new google.maps.InfoWindow();

    // Add all markers
    Object.keys(campusLocations).forEach(id => addMarker(id, campusLocations[id]));

    // User location
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
    renderSidebar();
    renderActivityFeed();
    showToast('info', 'Welcome!', 'ASU Tempe Campus map loaded');
}

function getDarkMapStyles() {
    return [
        { elementType: 'geometry', stylers: [{ color: '#1a1a1a' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#1a1a1a' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#6b7280' }] },
        { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#8C1D40' }] },
        { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#1f2d1f' }] },
        { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#2a2a2a' }] },
        { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#1a1a1a' }] },
        { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#333333' }] },
        { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#0f0f1a' }] }
    ];
}

function addMarker(id, loc) {
    const marker = new google.maps.Marker({
        position: loc.position,
        map: map,
        title: loc.name,
        icon: {
            url: createMarkerSVG(loc.icon, loc.color),
            scaledSize: new google.maps.Size(36, 44),
            anchor: new google.maps.Point(18, 44)
        },
        animation: google.maps.Animation.DROP
    });

    marker.addListener('click', () => {
        const content = createInfoWindowContent(id, loc);
        infoWindow.setContent(content);
        infoWindow.open(map, marker);
    });

    markers[id] = marker;
}

function createMarkerSVG(emoji, color) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="44" viewBox="0 0 36 44">
        <path d="M18 0C8 0 0 8 0 18c0 14 18 26 18 26s18-12 18-26c0-10-8-18-18-18z" fill="${color}"/>
        <text x="18" y="22" text-anchor="middle" font-size="14">${emoji}</text>
    </svg>`;
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

function createInfoWindowContent(id, loc) {
    let statusClass = loc.status === 'open' || loc.status === 'available' || loc.status === 'low' ? 'open' : 'closed';
    let statusText = loc.status.charAt(0).toUpperCase() + loc.status.slice(1);
    if (loc.status === 'live') statusText = '🔴 Live Now';
    if (loc.status === 'soon') statusText = '⏰ Starting Soon';

    return `<div class="info-window">
        <h3>${loc.icon} ${loc.name}</h3>
        <div class="code">${loc.code}</div>
        <span class="status ${statusClass}">${statusText}</span>
        <p>${loc.address || loc.location || loc.hours || ''}</p>
        ${loc.capacity ? `<p>Capacity: ${loc.capacity}%</p>` : ''}
        ${loc.attendees ? `<p>👥 ${loc.attendees} attending</p>` : ''}
        <button class="btn" onclick="getDirections('${id}')">Directions</button>
        <button class="btn secondary" onclick="showDetailModal('${id}')">Details</button>
    </div>`;
}

function addUserMarker(pos) {
    if (userMarker) { userMarker.setPosition(pos); return; }
    userMarker = new google.maps.Marker({
        position: pos, map: map, title: 'You',
        icon: { path: google.maps.SymbolPath.CIRCLE, scale: 10, fillColor: '#FFC627', fillOpacity: 1, strokeColor: '#fff', strokeWeight: 3 },
        zIndex: 1000
    });
    new google.maps.Circle({ map, center: pos, radius: 40, fillColor: '#FFC627', fillOpacity: 0.15, strokeColor: '#FFC627', strokeOpacity: 0.3, strokeWeight: 1 });
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
        gradient: ['rgba(0,0,0,0)', 'rgba(34,197,94,0.4)', 'rgba(245,158,11,0.6)', 'rgba(239,68,68,0.8)', 'rgba(140,29,64,1)']
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

function centerOnUser() { map.panTo(userPosition); map.setZoom(17); }

let trafficOn = false;
function toggleTraffic() {
    trafficOn = !trafficOn;
    trafficLayer.setMap(trafficOn ? map : null);
    showToast('info', 'Traffic', trafficOn ? 'Enabled' : 'Disabled');
}

let heatmapOn = false;
function toggleHeatmap() {
    heatmapOn = !heatmapOn;
    heatmap.setMap(heatmapOn ? map : null);
    showToast('info', 'Crowd Heatmap', heatmapOn ? 'Showing busy areas' : 'Hidden');
}

function toggle3D() {
    const tilt = map.getTilt() === 0 ? 45 : 0;
    map.setTilt(tilt);
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

// ========== SIDEBAR ==========
function renderSidebar() {
    const container = document.getElementById('sidebarContent');
    const activeFilter = document.querySelector('.filter-chip.active')?.dataset.filter || 'all';

    const filtered = Object.entries(campusLocations).filter(([id, loc]) => {
        if (activeFilter !== 'all' && loc.type !== activeFilter) return false;
        return visibleCategories.has(loc.type);
    });

    const grouped = {};
    filtered.forEach(([id, loc]) => {
        if (!grouped[loc.type]) grouped[loc.type] = [];
        grouped[loc.type].push([id, loc]);
    });

    const typeLabels = {
        library: '📚 Libraries', building: '🏛️ Buildings', food: '🍕 Food & Dining',
        room: '🚪 Study Rooms', event: '🎉 Events', meetup: '👥 Meetups',
        restroom: '🚻 Restrooms', parking: '🅿️ Parking', fitness: '🏋️ Recreation'
    };

    let html = '';
    Object.entries(grouped).forEach(([type, items]) => {
        html += `<div class="section">
            <div class="section-header">
                <div class="section-title">${typeLabels[type] || type}</div>
                <div class="section-link">See all ${items.length}</div>
            </div>`;
        items.slice(0, 5).forEach(([id, loc]) => {
            html += renderLocationCard(id, loc);
        });
        html += '</div>';
    });

    container.innerHTML = html || '<p style="text-align:center;color:var(--text-muted);padding:40px;">No locations match your filters</p>';
}

function renderLocationCard(id, loc) {
    const statusClass = loc.status === 'open' || loc.status === 'available' || loc.status === 'low' ? 'open' : loc.status === 'live' ? 'live' : loc.status === 'soon' ? 'soon' : 'busy';
    const statusText = loc.status.charAt(0).toUpperCase() + loc.status.slice(1);

    let meta = '';
    if (loc.hours) meta += `<div class="card-meta-item">🕐 ${loc.hours}</div>`;
    if (loc.capacity !== undefined) meta += `<div class="card-meta-item">👥 ${loc.capacity}% full</div>`;
    if (loc.waitTime !== undefined) meta += `<div class="card-meta-item">⏱️ ~${loc.waitTime} min</div>`;
    if (loc.attendees) meta += `<div class="card-meta-item">👥 ${loc.attendees} attending</div>`;
    if (loc.time) meta += `<div class="card-meta-item">🕐 ${loc.time}</div>`;

    let occupancy = '';
    if (loc.capacity !== undefined && loc.type !== 'room') {
        const level = loc.capacity < 40 ? 'low' : loc.capacity < 70 ? 'medium' : 'high';
        occupancy = `<div class="occupancy-bar"><div class="occupancy-fill ${level}" style="width:${loc.capacity}%"></div></div>`;
    }

    let tags = '';
    if (loc.topics) {
        tags = `<div class="tags">${loc.topics.map(t => `<span class="tag">${t}</span>`).join('')}</div>`;
    }

    let attendees = '';
    if (loc.attendees && loc.type === 'meetup') {
        attendees = `<div class="attendees">
            <div class="attendee-stack">
                <div class="attendee-avatar" style="background:#4ADE80;">JD</div>
                <div class="attendee-avatar" style="background:#3b82f6;">MK</div>
                <div class="attendee-avatar more">+${loc.attendees - 2}</div>
            </div>
            <span class="attendee-count">${loc.attendees} going</span>
        </div>`;
    }

    return `<div class="location-card" onclick="focusLocation('${id}')">
        <div class="card-top">
            <div class="card-info">
                <div class="card-icon ${loc.type}">${loc.icon}</div>
                <div>
                    <div class="card-title">${loc.name}</div>
                    <div class="card-subtitle">${loc.address || loc.location || ''}</div>
                    <div class="card-code">${loc.code}</div>
                </div>
            </div>
            <span class="status-badge ${statusClass}">${statusText}</span>
        </div>
        ${occupancy}
        <div class="card-meta">${meta}</div>
        ${tags}
        ${attendees}
        <div class="card-actions">
            <button class="card-btn primary" onclick="event.stopPropagation();getDirections('${id}')">Navigate</button>
            <button class="card-btn secondary" onclick="event.stopPropagation();showDetailModal('${id}')">Details</button>
        </div>
    </div>`;
}

function focusLocation(id) {
    const loc = campusLocations[id];
    if (!loc) return;
    map.panTo(loc.position);
    map.setZoom(18);
    if (markers[id]) google.maps.event.trigger(markers[id], 'click');
}

// ========== FILTERS ==========
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            renderSidebar();
        });
    });
});

// ========== ACTIVITY FEED ==========
const activities = [
    { name: 'Jessica M.', action: 'booked Study Room 204', avatar: '#22c55e', time: 'Just now', actionBtn: 'Join' },
    { name: 'Alex K.', action: 'joined AI & ML Workshop', avatar: '#3b82f6', time: '2 min ago' },
    { name: 'Sarah P.', action: 'created Coffee & Code meetup', avatar: '#a855f7', time: '5 min ago', actionBtn: 'RSVP' },
    { name: 'Mike T.', action: 'checked into Hayden Library', avatar: '#FFC627', time: '8 min ago' },
    { name: 'Lisa R.', action: 'started Physics Study Group', avatar: '#ec4899', time: '12 min ago', actionBtn: 'Join' }
];

function renderActivityFeed() {
    const list = document.getElementById('activityList');
    list.innerHTML = activities.map(a => `
        <div class="activity-item">
            <div class="activity-avatar" style="background:${a.avatar};${a.avatar === '#FFC627' ? 'color:#000;' : ''}">${a.name.split(' ').map(n => n[0]).join('')}</div>
            <div class="activity-content">
                <div class="activity-text"><strong>${a.name}</strong> ${a.action}</div>
                <div class="activity-time">${a.time}</div>
            </div>
            ${a.actionBtn ? `<button class="activity-action">${a.actionBtn}</button>` : ''}
        </div>
    `).join('');
}

// ========== MODALS ==========
function showDetailModal(id) {
    const loc = campusLocations[id];
    if (!loc) return;
    infoWindow.close();

    const statusClass = loc.status === 'open' || loc.status === 'available' ? 'open' : loc.status === 'live' ? 'live' : 'busy';
    document.getElementById('detailModalContent').innerHTML = `
        <div class="modal-header">
            <button class="modal-close" onclick="closeDetailModal()">✕</button>
            <div class="modal-type">${loc.type}</div>
            <div class="modal-title">${loc.icon} ${loc.name}</div>
            <div class="modal-subtitle">📍 ${loc.address || loc.location || 'ASU Tempe Campus'}</div>
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
                </div>
            </div>
            ${loc.amenities ? `<div class="modal-section"><div class="modal-section-title">Amenities</div><div class="modal-amenities">${loc.amenities.map(a => `<span class="modal-amenity">${a}</span>`).join('')}</div></div>` : ''}
            <div class="modal-actions">
                <button class="modal-btn primary" onclick="getDirections('${id}');closeDetailModal()">Navigate</button>
                <button class="modal-btn secondary" onclick="closeDetailModal()">Close</button>
            </div>
        </div>
    `;
    document.getElementById('detailModal').classList.add('active');
}

function closeDetailModal() { document.getElementById('detailModal').classList.remove('active'); }
function openCreateMeetup() { document.getElementById('createMeetupModal').classList.add('active'); }
function closeCreateMeetup() { document.getElementById('createMeetupModal').classList.remove('active'); }
function submitMeetup(e) { e.preventDefault(); closeCreateMeetup(); showToast('success', 'Meetup Created!', 'Students can now RSVP'); }

function openStudyBuddy() {
    document.getElementById('studyBuddyList').innerHTML = [
        { name: 'Kevin Lee', major: 'Computer Science • Junior', courses: ['CSE 310', 'MAT 343'], location: 'Hayden Library', color: '#22c55e' },
        { name: 'Amanda R.', major: 'Software Engineering • Senior', courses: ['CSE 310', 'CSE 360'], location: 'Noble Library', color: '#3b82f6' },
        { name: 'James T.', major: 'Data Science • Sophomore', courses: ['MAT 343', 'STP 420'], location: 'Coor Hall', color: '#a855f7' }
    ].map(b => `
        <div style="background:var(--dark-hover);border-radius:10px;padding:14px;margin-bottom:10px;display:flex;gap:14px;align-items:center;">
            <div style="width:44px;height:44px;border-radius:50%;background:${b.color};display:flex;align-items:center;justify-content:center;font-weight:600;font-size:16px;">${b.name.split(' ').map(n => n[0]).join('')}</div>
            <div style="flex:1;">
                <div style="font-weight:600;margin-bottom:2px;">${b.name}</div>
                <div style="font-size:12px;color:var(--text-secondary);margin-bottom:6px;">${b.major} • at ${b.location}</div>
                <div class="tags">${b.courses.map(c => `<span class="tag">${c}</span>`).join('')}</div>
            </div>
            <button class="card-btn primary" style="flex:none;width:auto;">Connect</button>
        </div>
    `).join('');
    document.getElementById('studyBuddyModal').classList.add('active');
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
                loc.name.toLowerCase().includes(q) || loc.code.toLowerCase().includes(q)
            ).slice(0, 8);

            if (matches.length) {
                results.innerHTML = matches.map(([id, loc]) => `
                    <div class="search-result-item" onclick="focusLocation('${id}');document.getElementById('searchResults').classList.remove('active');document.getElementById('searchInput').value='';">
                        <div class="search-result-icon" style="background:${loc.color}20;">${loc.icon}</div>
                        <div class="search-result-info">
                            <h4>${loc.name}</h4>
                            <p>${loc.code} • ${loc.type}</p>
                        </div>
                    </div>
                `).join('');
                results.classList.add('active');
            } else {
                results.innerHTML = '<div style="padding:16px;text-align:center;color:var(--text-muted);">No results found</div>';
                results.classList.add('active');
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
    setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 4000);
}

// ========== LOAD GOOGLE MAPS ==========
function loadGoogleMaps() {
    console.log('API Key:', GOOGLE_MAPS_API_KEY);
    console.log('Key length:', GOOGLE_MAPS_API_KEY.length);
    console.log('Is YOUR_API_KEY:', GOOGLE_MAPS_API_KEY === 'YOUR_API_KEY');
    console.log('Is placeholder:', GOOGLE_MAPS_API_KEY === '__ENV_GOOGLE_MAPS_API_KEY__');
    console.log('Is falsy:', !GOOGLE_MAPS_API_KEY);
    
    // Simplified check - just verify it's a real key (starts with AIza)
    if (!GOOGLE_MAPS_API_KEY || !GOOGLE_MAPS_API_KEY.startsWith('AIza')) {
        document.getElementById('map').innerHTML = `
            <div class="api-notice">
                <h2>🗺️ Google Maps API Key Required</h2>
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
    
    console.log('Loading Google Maps with key...');
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=visualization,places&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

window.addEventListener('load', loadGoogleMaps);
