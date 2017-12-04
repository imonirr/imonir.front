# create image based on official node 6 image from Docker
FROM node:8

# set environment
ENV NPM_CONFIG_LOGLEVEL warn

# create app user
# RUN useradd --user-group --create-home --shell /bin/false app 
# RUN useradd -r -u 1001 -g appuser --create-home --shell /bin/false appuser

# set app home
ENV APP=/home/app

# copy dependency lock files
COPY ./package.json $APP/package.json 
COPY ./yarn.lock $APP/yarn.lock

# make user app owner of app directory
# RUN chown -R app:app $HOME/*
# USER app
# move to app directory
WORKDIR $APP

# install dependencies
RUN yarn install

# run app
CMD [ -f "/bin/bash" ] && if [ ${NODE_ENV} = production ]; \
  then \
  yarn build; \
  npm install -g http-server && \
  yarn build && \
  cd build && \
  hs -p 3000; \
  else \
  yarn dev; \
  fi


