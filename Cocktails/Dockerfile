# Image de base Node.js
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Installer Angular CLI globalement
RUN npm install -g @angular/cli

# Copier le reste de l'application
COPY . .

# Exposer le port Angular (par défaut 4200)
EXPOSE 4200

# Lancer l'application Angular en mode dev avec ng serve
CMD ["ng", "serve", "--host", "0.0.0.0"]
