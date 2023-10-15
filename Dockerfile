FROM node:18 AS builder

WORKDIR /app

COPY . .
RUN npm install -g pnpm && pnpm i

RUN pnpm run build


FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./conf/nginx.conf /etc/nginx/conf.d/default.conf
