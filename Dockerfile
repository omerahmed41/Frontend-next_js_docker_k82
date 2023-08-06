FROM node:20.5.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Build the Next.js app
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
