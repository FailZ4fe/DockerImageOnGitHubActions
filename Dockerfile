FROM node:22-alpine

# Install dependencies of the Jimp system (alpine require)
RUN apk add --no-cache libc6-compat

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "start"]
