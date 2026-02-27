FROM node:24-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:24-alpine

RUN npm install -g serve

WORKDIR /app

COPY --from=builder /app/dist ./dist

EXPOSE 8098

CMD ["serve", "-s", "dist", "-l", "8098"]

# Run with auto-restart on crash:
#   docker run -d -p 8098:8098 --restart unless-stopped <image>

