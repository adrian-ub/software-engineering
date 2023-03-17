# Node.js simple file upload

### Dependencies
- express
- ejs
- fs
- multer
- file-system
- mongodb


### Run
```
> git clone https://github.com/Desarrollo-zeros/microservice-node-mongo-upload.git
> cd microservice-node-mongo-upload
> npm install
> npm start
```
The application will be served on `:3000`



### Run
```
- Create docker imagen
docker pull mongo:4.0.4
docker run -d -p 27017:27017 --name test-mongo mongo:latest
docker run -d -p portExport:portInternal --name test-mongo mongo:latest

- Building your image
docker build . -t <your username>/node-web-app

- Run the image
docker run -p 3000:3000 -d <your username>/node-web-app
docker run -p portExport:portInternal -d <your username>/node-web-app

```
