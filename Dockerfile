FROM node:10-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm i -g npm \
   && npm i

EXPOSE 8001

CMD ["npm", "start"]