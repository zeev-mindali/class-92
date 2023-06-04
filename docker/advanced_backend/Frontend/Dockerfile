#inheirt image
FROM node:18-alpine3.16

#install typescript
RUN npm i -g typescript
#work directorty
WORKDIR /app

#copy local package*.json
COPY package*.json /app

#install npm 
RUN npm i

#copy project local files
COPY . /app

#excute project
ENTRYPOINT npm start

