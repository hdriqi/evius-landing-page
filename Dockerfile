FROM node:10-alpine:edge

WORKDIR /usr/src/app

COPY ./ /usr/src/app

RUN npm install
RUN npm build

EXPOSE 8001
CMD [ "npm", "start" ]