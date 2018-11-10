function init() {
    localStorage.clear();

    for(var i = 0; i < geojsonFeature.length; i++) {
        localStorage.setItem(i+1, JSON.stringify(geojsonFeature[i]));
    }
}

function pop(i) {
    var str_json = localStorage.getItem(i);
    var json = JSON.parse(str_json);

    console.log(str_json);
    console.log(json.properties.popupContent);

    return json;
}