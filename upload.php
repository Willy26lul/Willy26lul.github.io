<?php
$response = array();
$response['success'] = false;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['imgFile']) && isset($_FILES['downloadFile'])) {
        $imgFile = $_FILES['imgFile'];
        $downloadFile = $_FILES['downloadFile'];

        $imgUploadDir = 'uploads/images/';
        $downloadUploadDir = 'uploads/downloads/';
        $imgFilePath = $imgUploadDir . basename($imgFile['name']);
        $downloadFilePath = $downloadUploadDir . basename($downloadFile['name']);

        // Mueve los archivos al directorio de destino
        if (move_uploaded_file($imgFile['tmp_name'], $imgFilePath) && move_uploaded_file($downloadFile['tmp_name'], $downloadFilePath)) {
            $response['success'] = true;
            $response['imgUrl'] = $imgFilePath;
            $response['downloadUrl'] = $downloadFilePath;
        }
    }
}

echo json_encode($response);
?>
