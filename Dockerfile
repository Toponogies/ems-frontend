FROM docker.io/node:16.15-alpine as builder
WORKDIR /application
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install
COPY . . 
RUN npm run build

FROM docker.io/nginx:1.21.6-alpine
WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder application/dist .

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]