#create new image and container
FROM node:18-alpine as builder
WORKDIR /app
COPY . .

#install and build
RUN npm ci
RUN npm run build

#NGINX (Stage 2 build)
FROM nginx:1.25.1-alpine as production
ENV NODE_ENV production
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]