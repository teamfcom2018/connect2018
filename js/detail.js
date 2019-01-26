window.onload = function() {
    // test
    // alert(getValue());
    var key = getValue();

    var json = getItem(key);

    // TODO 各値の取り出し
    var name = '';
    var addr = '';
    var phone = '';
    var day = '';
    var time = '';
    var status = '';
    var url = '';
    var lat = 0;
    var lng = 0;
    if(json && json.properties) {

        name = json.properties.popupContent;
        addr = json.properties.address;
        phone = json.properties.phone;
        day = json.properties.day;
        time = json.properties.time;
        status = json.properties.status;
        url = json.properties.popupLink;    
        lat = json.geometry.coordinates[1];
        lng = json.geometry.coordinates[0];
    } else {
        alert("NG");
    }

    // 各HTML要素に入れる
    document.getElementById('name').innerHTML = name;
    document.getElementById('addr').innerHTML = addr;
    document.getElementById('phone').innerHTML = phone;
    document.getElementById('day').innerHTML = day;
    document.getElementById('time').innerHTML = time;
    document.getElementById('status').innerHTML = status;
    document.getElementById('url').innerHTML = "<a href='"+ url +"' target='_blank'>"+url+"</a>";

    // マップ表示＆経路表示
    disp_detailMap(lat, lng);
}

function getValue() {
    var val = "";
    var url = window.location.search;

        //?を取り除くため、1から始める。複数のクエリ文字列に対応するため、&で区切る
    var hash  = url.slice(1).split('&');    
    
    if(hash) {
        val = hash[0].split('=')[1];
    }

    return val;
}

function disp_detailMap(targetLat, targetLng) {
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
    // L.geoJson(
    //     geojsonFeature,
    //     {
    //         onEachFeature: function (feature, layer) {
    //             if (feature.properties && feature.properties.popupContent)
    //             {
    //                 layer.bindPopup("<a href='"+feature.properties.popupLink+"'>"+feature.properties.popupContent+"</a>");
    //             }
    //         }
    //     }
    // ).addTo(map);

    // 現在位置にピンを刺す
    var from = L.marker([lat, lng],  {icon: L.spriteIcon('green')}).addTo(map);

    // ターゲットの病院にピンを刺す
    // Font Awesome circle
    options = {
        prefix: 'fa'
        ,icon: 'fa-hospital'
        ,shape: 'circle'
        ,markerColor: 'blue'
    };
    var to = L.marker([targetLat, targetLng], {icon: L.ExtraMarkers.icon(options)}).addTo(map);

    // 経路探索
    // L.Routing.control({
    //     waypoints: [
    //         from,to
    //     ],
    //     outeWhileDragging: false
    // }).addTo(map);
    L.Routing.control({
        waypoints: [
            // L.latLng(57.74, 11.94),
            // L.latLng(57.6792, 11.949)
            L.latLng(lat, lng),
            L.latLng(targetLat, targetLng)
        ],
        routeWhileDragging: false
    }).addTo(map);

    // 経路探索文章を非表示
}
