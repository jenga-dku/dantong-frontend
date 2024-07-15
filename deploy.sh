#!/usr/bin/env sh

REPOSITORY=/home/ubuntu/deploy

cd $REPOSITORY

sudo npm install

sudo pm2 reload all