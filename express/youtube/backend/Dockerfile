#inherit current image from an alpine images containing node
FROM node:18-alpine3.16

#install ts-node globally for running typescript
RUN npm i -g ts-node

#create an emprt directory for the project files and set it as the current directory:
WORKDIR /backend

#copy local package.json & package-lock.json into /backend
COPY package*.json /backend

#install npm dependencies 
RUN npm i

#copy project local files (first dot) into /backend:
COPY . /backend

#execute "npm start" inside /app (workdir) when container starts:
ENTRYPOINT npm start