#!/usr/bin/env sh

REPOSITORY=/home/ubuntu/deploy

cd $REPOSITORY

sudo npm install -f

pm2 kill

pm2 serve build 3000 --spa