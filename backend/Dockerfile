# Utiliser une image officielle Node.js en version LTS
FROM node:18-alpine

# Créer un dossier de travail dans le conteneur
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json dans le conteneur
COPY package*.json ./

# Installer les dépendances (npm install)
RUN npm install

# Copier tout le reste du code dans le conteneur
COPY . .

# Exposer le port sur lequel tourne ton backend
EXPOSE 3000

# Démarrer le serveur Node.js
CMD ["npm", "start"]
