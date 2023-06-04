#inheirt image
FROM node:18-alpine3.16

#work directorty
WORKDIR /app

#copy local package*.json
copy package*.json /app

#install npm 
RUN npm i

#copy project local files
COPY . /app

#excute project
ENTRYPOINT npm start

