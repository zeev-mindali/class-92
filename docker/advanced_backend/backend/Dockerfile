#ingerit current image from alpine
FROM node:18-alpine3.16


#install typescript - becuase the computer is not working
RUN npm i -g typescript

#install nodemon globally
RUN npm i -g nodemon

#install ts-node globally typescript->javascript
RUN npm i -g ts-node

#create empty directry for my application
WORKDIR /app

#copy package.json package-lock.json into /app:
COPY package*.json /app

#install all node moudles
RUN npm i

#copy project local files (first dot) into /app:
COPY . /app

#execute "npm start" inside /app (workdir) when container start:
ENTRYPOINT npm start