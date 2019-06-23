FROM node:12.4-alpine
ENV HOME=/usr/src/app
WORKDIR $HOME
RUN chown node:node -R $HOME
COPY --chown=node:node package*.json ./
RUN apk update && apk upgrade && \
  echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories && \
  echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories && \
  apk add --no-cache \
  chromium@edge=~73.0.3683.103 \
  nss@edge \
  freetype@edge \
  harfbuzz@edge \
  ttf-freefont@edge
ENV CHROME_BIN=/usr/bin/chromium-browser
RUN npm install
COPY --chown=node:node . .
USER node
