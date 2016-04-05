#!/bin/bash

git checkout deploy && git pull --rebase origin master && grunt build && git push heroku deploy:master && git checkout master
