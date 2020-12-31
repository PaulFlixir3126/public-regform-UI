FROM node:12.16.1 as build-stage
COPY . /app
WORKDIR /app
RUN npm i
RUN npm run build

