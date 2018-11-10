var geoJsonData = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "id": "1",
            "name": "郡山医師会事務局",
            "properties": { "popup": "郡山医師会事務局" },
            "geometry": {
                "type": "Point",
                "coordinates": [140.3593249, 37.40558882]
            }
        },
        {
            "type": "Feature",
            "id": "2",
            "name": "総合南東北病院",
            "properties": {
                "popup": "総合南東北病院"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [140.3835915, 37.42270007]
            }
        }
    ]
 };

 var tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    maxZoom: 14,
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
});

var map = L.map('map')
        .addLayer(tiles);

var markers = L.markerClusterGroup();

var geoJsonLayer = L.geoJson(geoJsonData, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.popup);
    }
});
markers.addLayer(geoJsonLayer);

map.addLayer(markers);
map.fitBounds(markers.getBounds());