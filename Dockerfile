# syntax=docker/dockerfile:1.2
FROM node:16.18.0-slim

WORKDIR /home/node
COPY package.json package-lock.json ./
RUN npm ci

COPY bin ./bin
COPY src ./src

CMD [ "node", "bin/www" ]

# LABEL org.opencontainers.image.created="$BUILD_TIME"
# LABEL org.opencontainers.image.title="$CI_PROJECT_NAME"
# LABEL org.opencontainers.image.url="$CI_PROJECT_URL"
# LABEL org.opencontainers.image.source="$CI_PROJECT_URL"
# LABEL org.opencontainers.image.revision="$CI_COMMIT_SHA"
