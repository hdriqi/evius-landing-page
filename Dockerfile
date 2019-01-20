FROM node:10-alpine

WORKDIR /usr/src/app
COPY . .
RUN apk add --update --no-cache --virtual .build-dev build-base python python-dev \
   && npm i -g npm \
   && npm i -g node-gyp \
   && npm i \
   && npm rebuild bcrypt --build-from-source \
   && apk del .build-dev

EXPOSE 8001

CMD ["npm", "start"]