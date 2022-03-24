FROM node:alpine

COPY . /quoraforcollege

WORKDIR /quoraforcollege

EXPOSE 3000

CMD ["npm", "start"]