FROM node:18-alpine
WORKDIR /usr/src/app
COPY app ./app
WORKDIR /usr/src/app/app
RUN npm init -y && npm install express
EXPOSE 3000
CMD [ "node", "server.js" ]
