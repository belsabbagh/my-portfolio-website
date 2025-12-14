FROM node:25-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM alpine:3.20
RUN apk add --no-cache nginx
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /var/www/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
