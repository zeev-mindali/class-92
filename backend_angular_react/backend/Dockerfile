#Images
#Build Image                    docker build -t mindalizeev/myyoutube:1.0 .
#Display all images             docker images
#Remove image                   docker image rm mindalizeev/myyoutube:1.0
#login to docker                docker login
#logout from docker             docker logout
#push image to the hub          docker push mindalizeev/myyoutube:1.0
#pull image from the hub        docker pull mindalizeev/myyoutube:1.0

#Containers
#create a new container         docker create --name myyoutube -p 5000:4000 mindalizeev/myyoutube:1.0
#display all containers         docker ps -a
#start container                docker start myyoutube
#stop container                 docker stop myyoutube
#remove non-running containers  docker rm myyoutube
#remove running containers      docker rm myyoutube -f
#create & start container       docker run -d name myyoutube -p 5000:4000 mindalizeev/myyoutube:1.0

#inheirt current image from an alipine image container node (for latest version use node:alpine)

FROM node:18-alpine
#install ts-node globally (-g) from running typescript
RUN npm install -g npm@9.1.1
RUN npm i -g ts-node
RUN npm i -g nodemon

#Create an empty directory for the project files and set it as the current directory
WORKDIR /app

#copy local package JSON & package-lock.json into /app
COPY package*.json /app/

#Install NPM dependecies & devDependencies
RUN npm i

#copy project local files (first dot) into /app
COPY . /app

#Execute npm run server inside /app (workdir) when container start
ENTRYPOINT npm run server