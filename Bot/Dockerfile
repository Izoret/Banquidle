FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY src/ src/
COPY res/ res/

ENV NODE_ENV=production

CMD ["npm", "start"]
