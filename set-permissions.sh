#!/bin/bash

# Directorios a ajustar permisos
IMG_DIR="Images"
DOWNLOAD_DIR="rvts"

# Establecer permisos para directorios
chmod 755 "$IMG_DIR"
chmod 755 "$DOWNLOAD_DIR"

# Verificar permisos
echo "Permisos del directorio $IMG_DIR:"
ls -ld "$IMG_DIR"

echo "Permisos del directorio $DOWNLOAD_DIR:"
ls -ld "$DOWNLOAD_DIR"
