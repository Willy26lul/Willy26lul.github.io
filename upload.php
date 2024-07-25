<?php
header('Content-Type: application/json');

$response = array('success' => false);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['imgFile']) && isset($_FILES['downloadFile'])) {
        $imgFile = $_FILES['imgFile'];
        $downloadFile = $_FILES['downloadFile'];

        // Directorios para almacenar los archivos
        $imgDir = 'Images/';
        $downloadDir = 'rvts/';

        // Crear directorios si no existen
        if (!is_dir($imgDir)) {
            mkdir($imgDir, 0755, true);
        }
        if (!is_dir($downloadDir)) {
            mkdir($downloadDir, 0755, true);
        }

        // Rutas de destino para los archivos
        $imgPath = $imgDir . basename($imgFile['name']);
        $downloadPath = $downloadDir . basename($downloadFile['name']);

        // Verificar si hubo errores al subir los archivos
        if ($imgFile['error'] !== UPLOAD_ERR_OK || $downloadFile['error'] !== UPLOAD_ERR_OK) {
            $response['error'] = 'Error during file upload';
        } else {
            // Validar y mover archivos
            if (move_uploaded_file($imgFile['tmp_name'], $imgPath) && move_uploaded_file($downloadFile['tmp_name'], $downloadPath)) {
                $response['success'] = true;
                $response['imgUrl'] = '/' . $imgPath; // Ruta del archivo de imagen
                $response['downloadUrl'] = '/' . $downloadPath; // Ruta del archivo de descarga
            } else {
                $response['error'] = 'Error moving files';
            }
        }
    } else {
        $response['error'] = 'Files not set';
    }
} else {
    $response['error'] = 'Invalid request method';
}

echo json_encode($response);
?>
