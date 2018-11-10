
window.onload = function () {
    // 地図のデフォルトの緯度経度と拡大率
    // 適当に日本の真ん中あたり(35.5, 137)をZoomレベル5で
    var map = L.map('map').setView([37.4, 140.35], 12);

    // 描画する(Copyrightは消しちゃダメよ)
    var tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        maxZoom: 19
    });
    tileLayer.addTo(map);
    L.geoJson(
        geojsonFeature,
        {
            onEachFeature: function (feature, layer) {
                if (feature.properties && feature.properties.popupContent)
                {
                    layer.bindPopup("<a href='"+feature.properties.popupLink+"'>"+feature.properties.popupContent+"</a>");
                }
            }
        }
    ).addTo(map);
}

    var geojsonFeature =
   [
       { "type": "Feature", "properties": { "popupContent": "休日・夜間急病センター", "popupLink": "https://www.ftmis.pref.fukushima.lg.jp/ap/qq/sho/cwdetaillt01_001.aspx?kikancd=0720001209" }, "geometry": { "type": "Point", "coordinates": [140.34585, 37.408234] } },
       { "type": "Feature", "properties": { "popupContent": "郡山医師会事務局", "popupLink": "http://www.k-ishikai.net/" }, "geometry": { "type": "Point", "coordinates": [140.3593249, 37.40558882] } },
       { "type": "Feature", "properties": { "popupContent": "総合南東北病院", "popupLink": "http://www.minamitohoku.or.jp/" }, "geometry": { "type": "Point", "coordinates": [140.3835915, 37.42270007] } },
       { "type": "Feature", "properties": { "popupContent": "太田西ノ内病院", "popupLink": "https://www.ohta-hp.or.jp/n_nishi/n_top.htm" }, "geometry": { "type": "Point", "coordinates": [140.3662969, 37.4070673] } },
       { "type": "Feature", "properties": { "popupContent": "寿泉堂綜合病院", "popupLink": "http://www.jusendo.or.jp/" }, "geometry": { "type": "Point", "coordinates": [140.3854712, 37.3961297] } },
       { "type": "Feature", "properties": { "popupContent": "星総合病院", "popupLink": "http://www.hoshipital.jp/" }, "geometry": { "type": "Point", "coordinates": [140.3928621, 37.40221136] } },
       { "type": "Feature", "properties": { "popupContent": "星ヶ丘病院", "popupLink": "http://www.hoshipital.jp/index.html" }, "geometry": { "type": "Point", "coordinates": [140.3194175, 37.43489759] } },
       { "type": "Feature", "properties": { "popupContent": "奥羽大学歯学部附属病院", "popupLink": "http://www.ohu-dent.jp/" }, "geometry": { "type": "Point", "coordinates": [140.3740168, 37.41698326] } },
       { "type": "Feature", "properties": { "popupContent": "郡山市医療介護病院", "popupLink": "http://bigheart-hp.net/" }, "geometry": { "type": "Point", "coordinates": [140.3456576, 37.40842747] } },
       { "type": "Feature", "properties": { "popupContent": "日東病院", "popupLink": "http://www.tokiwa.or.jp/hospital/nitto/" }, "geometry": { "type": "Point", "coordinates": [140.3735103, 37.39701333] } },
       { "type": "Feature", "properties": { "popupContent": "あさかホスピタル", "popupLink": "http://asaka.or.jp/" }, "geometry": { "type": "Point", "coordinates": [140.363458, 37.34797543] } },
       { "type": "Feature", "properties": { "popupContent": "桑野協立病院", "popupLink": "http://www.koriyama-h-coop.or.jp/" }, "geometry": { "type": "Point", "coordinates": [140.3465981, 37.3967297] } },
       { "type": "Feature", "properties": { "popupContent": "公益財団法人福島県保健衛生協会　県南地区センター", "popupLink": "http://www.fhk.or.jp/shozaichi.html" }, "geometry": { "type": "Point", "coordinates": [140.3373243, 37.4328409] } },
       { "type": "Feature", "properties": { "popupContent": "寿泉堂香久山病院", "popupLink": "http://www.jusendo.or.jp/kgy/" }, "geometry": { "type": "Point", "coordinates": [140.370109, 37.38168376] } },
       { "type": "Feature", "properties": { "popupContent": "太田熱海病院", "popupLink": "http://www.ohta-hp.or.jp/n_atami/a_top.htm" }, "geometry": { "type": "Point", "coordinates": [140.263517, 37.48627782] } },
       { "type": "Feature", "properties": { "popupContent": "坪井病院", "popupLink": "http://www.tsuboi-hp.or.jp/" }, "geometry": { "type": "Point", "coordinates": [140.3616064, 37.36285678] } },
       { "type": "Feature", "properties": { "popupContent": "福島県総合療育センター", "popupLink": "https://www.pref.fukushima.lg.jp/sec/21810a/" }, "geometry": { "type": "Point", "coordinates": [140.3461705, 37.42894723] } }
   ];