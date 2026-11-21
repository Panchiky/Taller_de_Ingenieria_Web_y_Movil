# Imagen base: Node.js 26 (versión LTS activa) sobre Alpine Linux, una distribución muy liviana.
FROM node:26-alpine

# Carpeta de trabajo dentro de la imagen.
WORKDIR /app

# Primero solo los archivos de dependencias: así Docker reutiliza esta capa
# mientras package.json y package-lock.json no cambien.
COPY package*.json ./
RUN npm ci --omit=dev --ignore-scripts

# Luego el resto del código (lo que no excluye .dockerignore).
COPY . .

# Ejecutar con un usuario sin privilegios (la imagen de Node incluye el usuario "node").
USER node

# El servidor escucha en el puerto 3000.
EXPOSE 3000

# Comando que se ejecuta al iniciar el contenedor.
CMD ["node", "servidor.js"]