FROM node:latest as node
WORKDIR .
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build
FROM nginx:alpine
COPY --from=node /dist/utp-web /usr/share/nginx/html
