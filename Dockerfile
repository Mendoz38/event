FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
#RUN npm install
COPY . .
RUN npx prisma generate
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]