FROM node:alpine

COPY . /quoraforcollege/

WORKDIR /quoraforcollege/

RUN npm install

EXPOSE 8080

CMD ["npm", "start"]