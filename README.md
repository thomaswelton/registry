# Bower registry


## Create package
```bash
curl http://bower.herokuapp.com/packages -v -F 'name=jquery' -F 'url=git://github.com/jquery/jquery.git'
```
## Find package
```bash
curl http://bower.herokuapp.com/packages/jquery
```
Response
```json
{"name":"jquery","url":"git://github.com/jquery/jquery.git"}
```
## Unregister package

There is no direct way to unregister a package yet. For now, you can [request a
package be unregistered](https://github.com/bower/bower/issues/120).

## Setup

Install sinatra and bundler

```
gem install sinatra bundler
```

Install app dependencies

```
bundle install
```

Run the application

```
ruby application.rb
```

## Deployment

The standard heroku buildpack does not include sql try this one https://github.com/c4mprod/heroku-buildpack-ruby-sqlite
```
heroku config:set BUILDPACK_URL=https://github.com/c4mprod/heroku-buildpack-ruby-sqlite
```


## License

Copyright 2013 Twitter, Inc.

Licensed under the MIT License
