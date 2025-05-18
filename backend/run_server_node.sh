#!/bin/bash

# Nom du conteneur
CONTAINER_NAME=server-node-container

# Lancer le conteneur
docker run -d \
  --name $CONTAINER_NAME \
  -p 3000:3000 \
  server-node
