FROM node:18.12.1
WORKDIR /myapp
COPY package*.json /myapp
RUN npm install
COPY . . 
CMD [ "npm", "start" ]
