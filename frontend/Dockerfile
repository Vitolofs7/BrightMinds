FROM node AS builder

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

RUN npm run build

# Usar Nginx para servir la aplicación con HTTPS
FROM nginx:alpine

WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist .

# Copiar certificados al contenedor
COPY certs/fullchain.pem /etc/nginx/fullchain.pem
COPY certs/privkey.pem /etc/nginx/privkey.pem

# Configurar Nginx para usar HTTPS
COPY nginx.conf /etc/nginx/nginx.conf

# Use other port if not using https
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
