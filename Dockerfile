FROM node:12.4-alpine
ENV HOME=/usr/src/app
WORKDIR $HOME
RUN chown node:node -R $HOME
COPY --chown=node:node package*.json ./
RUN npm install
COPY --chown=node:node . .
USER node
