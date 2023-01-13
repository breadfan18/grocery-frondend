FROM node:latest
WORKDIR /usr/src/app
COPY package*.json .
RUN npm i
COPY . .
VOLUME ["/var/www", '.']
CMD ["npm", "start"]

