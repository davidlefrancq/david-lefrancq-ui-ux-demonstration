FROM node:current-alpine

WORKDIR /app

# Copy "stable" files (not mounted)
COPY next/package.json ./
COPY next/package-lock.json ./
COPY next/next.config.js ./
COPY next/tsconfig.json ./
COPY next/eslint.config.mjs ./
COPY next/.stylelintrc ./

RUN npm ci

# Folder initialization
RUN mkdir -p /app/src /app/public
