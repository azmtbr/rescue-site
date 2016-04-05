#!/bin/bash

git checkout deploy && git pull --rebase origin master && grunt build && git commit -am "automated build" && git push --force heroku deploy:master && git checkout master
