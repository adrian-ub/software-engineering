# FROM node:18-alpine AS build
# WORKDIR /usr/src/app
# RUN npm i -g pnpm
# COPY package.json pnpm-lock.yaml ./
# RUN pnpm install
# COPY . .
# RUN pnpm build

FROM nginx:1.23.2-alpine
# COPY ./nginx.conf /etc/nginx/nginx.conf
COPY nginx.conf  /etc/nginx/conf.d/default.conf
COPY dist/front /usr/share/nginx/html
