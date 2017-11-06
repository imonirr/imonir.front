# create image based on official node 6 image from Docker
FROM node:6

# set environment
ENV NPM_CONFIG_LOGLEVEL warn
ARG env
ENV NOTE_ENV $env

# create app directory
RUN mkdir -p /usr/src/app

# move to app directory
WORKDIR /usr/src/app

# copy code to app directory
COPY . /usr/src/app

# install dependencies for app
RUN npm install

# run app
CMD if [ ${NODE_ENV} = production ]; \
  then \
  npm run build; \
  else \
  npm run dev; \
  fi

EXPOSE 4000

