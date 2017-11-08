# create image based on official node 6 image from Docker
FROM node:8-alpine

# set environment
ENV NPM_CONFIG_LOGLEVEL warn
ARG env
ENV NOTE_ENV $env

# create app directory
RUN mkdir -p /code
# move to app directory
WORKDIR /code

EXPOSE 4000

# add volume
# ADD . /code

# install dependencies for app
COPY package.json yarn.lock /code/

RUN yarn install
# RUN npm rebuild node-sass 

# copy code to app directory
ADD . /code
 
# Exposing the assets for production
# VOLUME /code/build

# run app
CMD [ -f "/bin/bash" ] && if [ ${NODE_ENV} = production ]; \
  then \
  yarn build; \
  else \
  yarn dev; \
  fi


