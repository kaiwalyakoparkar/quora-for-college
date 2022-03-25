FROM node:alpine

COPY . /quoraforcollege

WORKDIR /quoraforcollege

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]