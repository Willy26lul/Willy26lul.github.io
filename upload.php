<?php
header('Content-Type: application/json');

$response = array();
$response['success'] = false;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['imgFile']) && isset($_FILES['downloadFile'])) {
        $imgFile = $_FILES['imgFile'];
        $downloadFile = $_FILES['downloadFile'];

        // Definir los directorios de carga
        $imgUploadDir = 'Images/';
        $downloadUploadDir = 'rvts/';

        // Crear directorios si no existen
        if (!file_exists($imgUploadDir)) {
            mkdir($imgUploadDir, 0777, true);
        }

        if (!file_exists($downloadUploadDir)) {
            mkdir($downloadUploadDir, 0777, true);
        }

        // Definir las rutas completas para los archivos
        $imgFilePath = $imgUploadDir . basename($imgFile['name']);
        $downloadFilePath = $downloadUploadDir . basename($downloadFile['name']);

        // Mover los archivos a los directorios de destino
        if (move_uploaded_file($imgFile['tmp_name'], $imgFilePath) && move_uploaded_file($downloadFile['tmp_name'], $downloadFilePath)) {
            $response['success'] = true;
            $response['imgUrl'] = $imgFilePath;
            $response['downloadUrl'] = $downloadFilePath;
        } else {
            $response['message'] = 'Failed to move uploaded files';
        }
    } else {
        $response['message'] = 'No files uploaded';
    }
} else {
    $response['message'] = 'Invalid request method';
}

echo json_encode($response);
?>
