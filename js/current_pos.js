function getLatLng() {

    // if(navigator.geolocation) {
    //     if (navigator.geolocation) {
    //         // 現在の位置情報取得を実施
    //         navigator.geolocation.getCurrentPosition(
    //             // 位置情報取得成功時
    //             function (pos) { 
    //                 var location ="<li>"+"緯度：" + pos.coords.latitude + "</li>";
    //                 location += "<li>"+"経度：" + pos.coords.longitude + "</li>";
    //                 // document.getElementById("location").innerHTML = location;
    //                 console.log("Location:"+location);
    //                 return [pos.coords.latitude, pos.coords.longitude];
    //             },
    //             // 位置情報取得失敗時
    //             function (pos) { 
    //                 var location ="<li>位置情報が取得できませんでした。</li>";
    //                 // document.getElementById("location").innerHTML = location;
    //                 console.log("Location:"+location);
    //         });
    //     } else {
    //         window.alert("本ブラウザではGeolocationが使えません");
    //     }

    // }
    // return [0,0];
    return [37.3916806,140.3796366];
}