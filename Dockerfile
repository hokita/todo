FROM ruby:2.6.3

RUN apt-get update -qq && \
    apt-get install -y build-essential \
                       libpq-dev \
                       postgresql-client &&\
    rm -rf /var/lib/apt/lists/*

# install nodejs
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - \
&& apt-get install -y nodejs

# install yarn
RUN apt-get update && apt-get install -y curl apt-transport-https wget && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get install -y yarn

RUN gem install bundler

WORKDIR /tmp
ADD Gemfile Gemfile
ADD Gemfile.lock Gemfile.lock
RUN bundle install

ENV APP_HOME /todo
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME
ADD . $APP_HOME
