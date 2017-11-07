# create image based on official node 6 image from Docker
FROM node:8

# set environment
ENV NPM_CONFIG_LOGLEVEL warn
ARG env
ENV NOTE_ENV $env

# install

# create app directory
# RUN mkdir -p /usr/src/app

# move to app directory
# WORKDIR /usr/src/app

# copy code to app directory
# COPY . /usr/src/app

WORKDIR /code

# add volume
ADD . /code

# install dependencies for app
# COPY package.json package.json
# COPY npm-shrinkwrap.json npm-shrinkwrap.json
RUN npm install
RUN npm rebuild node-sass 



# run app
CMD [ -f "/bin/bash" ] && if [ ${NODE_ENV} = production ]; \
  then \
  npm run build; \
  else \
  npm run dev; \
  fi

EXPOSE 4000

