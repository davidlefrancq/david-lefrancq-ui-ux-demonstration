FROM node:current-alpine

WORKDIR /app

# Copy "stable" files (not mounted)
COPY next/package.json ./
COPY next/package-lock.json ./
COPY next/next.config.js ./
COPY next/tsconfig.json ./
COPY next/eslint.config.mjs ./
COPY next/.stylelintrc ./
COPY next/.prettierignore ./

RUN npm ci
