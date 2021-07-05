# FROM node:14
# RUN mkdir -p /src/user/app
# WORKDIR /src/user/app
# COPY package*json ./
# copy . .
# RUN npm install
# EXPOSE 3000
# CMD ["node","app.js"]

FROM node:13-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["node", "app.js"]
