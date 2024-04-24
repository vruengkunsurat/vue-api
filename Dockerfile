FROM node:16.14.2 as builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

# FROM node:lts

WORKDIR /app

# COPY --from=builder /app  .

ENV HOST 0.0.0.0
EXPOSE 3000

CMD ["npm", "start"]