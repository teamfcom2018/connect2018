
window.onload = function () {
    // 現在位置を取得する
    var pos = getLatLng();
    console.log(pos);
    var lat = pos[0];
    var lng = pos[1];
    // 地図のデフォルトの緯度経度と拡大率
    // 適当に日本の真ん中あたり(35.5, 137)をZoomレベル5で
    var map = L.map('map').setView([lat, lng], 12);

    // 描画する(Copyrightは消しちゃダメよ)
    var tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        maxZoom: 19
    });
    tileLayer.addTo(map);
    L.geoJson(
        geojsonFeature,
        {
            pointToLayer: function(feature, latlng) {
                var smallIcon = new L.ExtraMarkers.icon({
                    prefix: 'fa'
                    ,icon: 'fa-hospital'
                    ,shape: 'circle'
                    ,markerColor: 'blue'
                });
                return L.marker(latlng, {icon: smallIcon});
            },
            onEachFeature: function (feature, layer) {
                if (feature.properties && feature.properties.popupContent)
                {
                    layer.bindPopup("<a href='"+feature.properties.detail+"'>"+feature.properties.popupContent+"</a>");
                }
            }
        }
    ).addTo(map);

    // 現在位置にピンを刺す
    L.marker([lat, lng],  {icon: L.spriteIcon('green')}).addTo(map);

    // ajax通信
    getNearHospital(37.3916806,140.3796366);
}

function getNearHospital(lat, lng) {
    var url = "http://udc2018.shimo3.com/srv/nearhospital.php?num=3&lat="+lat+"&lng="+lng;
    $.ajax(url,{
        type: 'get'
    }).done(function(data) {
        var obj = JSON.parse(data);
        var count = 1;
        obj.forEach(function(v) {
            console.log(v.id + v.name);
            $('#near').append('<div class="row justify-content-center"><div class="col font-weight-bold "><a href="hospitaldetail.html?key='+v.id+'">'+count+':'+v.name+'</a></div></div>');
        });
    }).fail(function() {
        alert('エラー');
    });
}