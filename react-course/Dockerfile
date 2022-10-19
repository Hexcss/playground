FROM node:16.17-alpine3.15  as build-stage
WORKDIR /app
ENV NODE_ENV = "production"
COPY package*.json ./
COPY package-lock.json ./
RUN npm install
COPY . /app/
RUN npm run build
COPY ./nginx.conf ./build

FROM nginx:1.17.6-alpine as production-stage
COPY --from=build-stage /app/build /usr/share/nginx/html

COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
