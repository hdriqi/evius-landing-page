FROM node:10-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY package-json.lock /usr/src/app/
RUN npm install

COPY . /usr/src/app
RUN npm build

RUN npm cache clean

EXPOSE 8001
CMD [ "npm", "start" ]