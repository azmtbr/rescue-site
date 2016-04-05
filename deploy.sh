#!/bin/bash

git checkout deploy && git pull --rebase origin master && git push heroku deploy:master && git checkout master
