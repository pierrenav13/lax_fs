#stage 1
# FROM ruby:2.7.7-alpine AS ruby-builder
# RUN apk add --update --no-cache build-base postgresql-dev tzdata

# RUN mkdir /myapp
# WORKDIR /myapp

# COPY Gemfile /myapp/Gemfile
# COPY Gemfile.lock /myapp/Gemfile.lock

# RUN bundle install

# #stage 2
# # FROM node:13-alpine AS node-builder
# # WORKDIR /myapp
# # COPY package*.json ./
# # RUN npm install

# # #stage 3
# # FROM ruby:2.7.7-alpine
# # WORKDIR /myapp
# # COPY --from=ruby-builder /myapp /myapp
# # COPY --from=node-builder /myapp/node_modules /myapp/node_modules

# COPY . .

# EXPOSE 3000
# CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]

# FROM ruby:2.7.7

# RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

# RUN mkdir /myapp
# WORKDIR /myapp

# COPY Gemfile /myapp/Gemfile
# COPY Gemfile.lock /myapp/Gemfile.lock

# RUN bundle install

# COPY . /myapp

# EXPOSE 3000
# CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]



# syntax=docker/dockerfile:1
FROM ruby:2.5.1
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs postgresql-client
EXPOSE 5000
ENV BUNDLER_VERSION=2.1.4

WORKDIR /myapp
COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock
RUN gem install bundler -v 2.1.4
RUN bundle install


RUN echo "Node: " && node -v
RUN echo "NPM: " && npm -v
COPY . .


# Configure the main process to run when running the image
# CMD ["rails", "server", "-b", "0.0.0.0"]
CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]