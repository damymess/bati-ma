FROM node:20-alpine AS builder
RUN apk add --no-cache python3 make g++

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

COPY . .

# Disable admin dashboard build (saves ~2GB RAM + 5min build time)
ENV DISABLE_ADMIN=true
ENV NODE_OPTIONS=--max-old-space-size=4096
RUN npx medusa build

# --- Production ---
FROM node:20-alpine AS runner
WORKDIR /app

COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.medusa ./.medusa
COPY --from=builder /app/src ./src
COPY --from=builder /app/medusa-config.ts ./
COPY --from=builder /app/tsconfig.json ./

ENV NODE_ENV=production
ENV DISABLE_ADMIN=true
EXPOSE 9000

CMD ["npx", "medusa", "start"]
