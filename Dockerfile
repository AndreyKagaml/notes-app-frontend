# Stage 1: Build React application
FROM node:14 AS build

WORKDIR /app

# Установка зависимостей
COPY package.json package-lock.json ./
RUN npm install

# Копирование всех файлов проекта
COPY . ./

# Сборка приложения
RUN npm run build

# Stage 2: Serve React application with Nginx
FROM nginx:alpine

# Копирование собранного приложения из предыдущего stage
COPY --from=build /app/build /usr/share/nginx/html

# Конфигурация Nginx (необязательно, если не требуется настройка)
# COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
