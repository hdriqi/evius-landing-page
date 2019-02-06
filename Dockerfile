FROM node:10-alpine

WORKDIR /usr/src/app

COPY ./package.json /usr/src/app
RUN npm install

ENV NUXT_HOST 0.0.0.0
ENV NUXT_PORT 80

COPY . /usr/src/app
RUN npm run build

EXPOSE 80
CMD [ "npm", "start" ]