# Photoshop Distribute layers in canvas
Script para Photoshop para distribuir todas tus capas en tu canvas

Necesitaba este script para imprimir todos los dorsales para una carrera, cada dorsal fue generado individualmente para incluir el nombre y número de cada corredor, necesitaba poner todos los dorsales juntos para poder ser impresos, basados en el ancho de los rollos del material en el que los iba a imprimir.

Así que, importé todas la imágenes de mis dorsales como capas (usando el script de Photoshop "Load images into stack") y entonces ejecuté este script para poner cada dorsal uno al lado del otro cubriendo todo el ancho del canvas y luego ir haciendo lo mismo fila por fila
![image](https://user-images.githubusercontent.com/494355/174456751-ba9e7707-1a4f-4165-a544-897c3643a7c2.png)

# ¿Cómo funciona?
Primero toma el ancho actual del canvas, luego toma las medidas de la capa actual y calcula cuántas capas van a ser colocadas una al lado de la otra basado en el ancho del canvas (columnas), luego calcula cuantas filas van a ser necesarias y cambia el alto del canvas basado en la altura que va a necesitar y comienza el proceso para llenar las columnas y luego las filas.

# Notas
Asegurate que no hay ninguna capa vacía (el script usa la cantidad de capas para hacer las iteraciones).  Asegurate que todas tus imágenes (capas) tiene el mismo tamaño, porque solo se toma la medida de la capa activa al momento de ejecutar el script.
