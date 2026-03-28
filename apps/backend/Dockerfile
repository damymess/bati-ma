FROM node:20-alpine AS base
RUN apk add --no-cache python3 make g++

WORKDIR /app
COPY package.json yarn.lock* ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npx medusa build

EXPOSE 9000
ENV NODE_ENV=production
CMD ["npx", "medusa", "start"]
