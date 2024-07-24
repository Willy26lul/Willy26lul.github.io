<?php
$response = ['success' => false];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Directorio de destino para los archivos
    $imgDir = 'Images/';
    $downloadDir = 'rvts/';
    
    // Verifica si se ha cargado el archivo de imagen
    if (isset($_FILES['imgFile']) && $_FILES['imgFile']['error'] === UPLOAD_ERR_OK) {
        $imgPath = $imgDir . basename($_FILES['imgFile']['name']);
        if (move_uploaded_file($_FILES['imgFile']['tmp_name'], $imgPath)) {
            $response['imgUrl'] = $imgPath;
        }
    }

    // Verifica si se ha cargado el archivo de descarga
    if (isset($_FILES['downloadFile']) && $_FILES['downloadFile']['error'] === UPLOAD_ERR_OK) {
        $downloadPath = $downloadDir . basename($_FILES['downloadFile']['name']);
        if (move_uploaded_file($_FILES['downloadFile']['tmp_name'], $downloadPath)) {
            $response['downloadUrl'] = $downloadPath;
        }
    }

    // Marca la respuesta como exitosa si ambos archivos se cargaron
    if (isset($response['imgUrl']) && isset($response['downloadUrl'])) {
        $response['success'] = true;
    }

    // Enviar respuesta en formato JSON
    header('Content-Type: application/json');
    echo json_encode($response);
}
?>
