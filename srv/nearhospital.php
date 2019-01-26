<?php
/**
 * 付近の病院num件を返却する
 *  パラメタ：lat, lng, num
 * ex.) http://udc2018.shimo3.com/srv/nearhospital.php?num=3&lat=37.xxxxxxx&lng=140.xxxxxxx
 */
header('Content-Type', 'application/json');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, OPTIONS");

// httpメソッドチェック
if($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    exit;
}

// パラメタチェック
if(!isset($_GET['lat']) || 
    !isset($_GET['lng']) || 
    !isset($_GET['num'])) {
    http_response_code(400);
    exit;
}

$lat = $_GET['lat'];
$lng = $_GET['lng'];
$limit = $_GET['num'];

$pdo = null;
$stmt = null;

try {
    $pdo = new PDO('pgsql:dbname=udc2018', 'udc2018', 'udc2018');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql =<<< EOM
select
 id, 
 name, 
 st_astext(position) as pos, 
 st_transform(position, 32654) <-> st_transform(st_geomfromtext('point({$lng} {$lat})', 4326), 32654) as distance 
from hospital 
order by distance 
limit :limit;
EOM;
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(':limit', $limit);
    $stmt->execute();

    $row = $stmt->fetchAll(PDO::FETCH_ASSOC);
    // print_r($row);
    foreach($row as $k=>$v) {
        unset($row[$k]['pos']);
        unset($row[$k]['distance']);
    }

    $json = json_encode($row, JSON_UNESCAPED_UNICODE);
    http_response_code(200);
    echo $json;
} catch(PDOException $e) {
    echo $e->getMessage();
}

$pdo = null;
$stmt = null;
?>