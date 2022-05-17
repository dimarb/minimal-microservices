FROM node:14.18.2-alpine3.12

RUN  addgroup -S api && adduser -S api -G api
RUN apk add curl
RUN apk add python3
RUN apk add --no-cache make g++
CMD cd /home/api/ && npm install  && npm start && echo "start"

COPY ./services/product /home/api/
COPY ./shared /home/api/shared/

HEALTHCHECK --interval=2m --timeout=10s \
  CMD curl -f http://localhost:3700/public/healthcheck || exit 1

WORKDIR /home/api/

