#inherit current image from an alpine image containing node (far latest version use node:alpine)
FROM node:18-alpine3.16

# install ts-node globally, for running type script
RUN npm i -g ts-node

# create an empty direcotry for project files and set it as the current directory:
WORKDIR /app

#copy local package.json & package-lock.json into /app
COPY package*.json /app

#install npm dependencies
RUN npm i

#copy project local files (first dot) into /app:
COPY . /app

#Execute "npm start" inside /app (workdir) when container starts
ENTRYPOINT npm start