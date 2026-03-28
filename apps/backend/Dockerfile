FROM node:20-alpine AS builder
RUN apk add --no-cache python3 make g++

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

COPY . .

# Build backend only (skip admin dashboard to save memory)
ENV NODE_OPTIONS=--max-old-space-size=4096
RUN npx medusa build || true

# Ensure admin build directory exists (even if admin build was skipped/failed)
RUN mkdir -p .medusa/server/public/admin && \
    echo '<!DOCTYPE html><html><head><title>Admin</title></head><body>Admin disabled in production</body></html>' > .medusa/server/public/admin/index.html

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
EXPOSE 9000

CMD ["npx", "medusa", "start"]
