FROM ruby:3.1-alpine

# Install dependencies for building native gems
RUN apk add --no-cache \
    build-base \
    gcc \
    g++ \
    make \
    libc-dev \
    linux-headers

WORKDIR /srv/jekyll

# Copy Gemfile
COPY Gemfile* ./

# Install gems
RUN bundle install

# Copy the rest of the site
COPY . .

# Expose ports
EXPOSE 4000 35729

# Start Jekyll
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--livereload"]
