FROM node:stretch-slim

EXPOSE 5000

WORKDIR /var/www/app

COPY ./ ./

RUN npm install && npm run build

RUN ls

CMD node ./server/index.js
