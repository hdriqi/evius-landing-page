FROM node:10-alpine

WORKDIR /usr/src/app
COPY . .
RUN apk add --update --no-cache --virtual .build-dev build-base python python-dev \
   && npm i -g npm \
   && npm i \
   && apk del .build-dev

EXPOSE 8001

CMD ["npm", "start"]