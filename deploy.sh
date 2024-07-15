#!/usr/bin/env sh

REPOSITORY=/home/ubuntu/deploy

cd $REPOSITORY

sudo npm install --legacy-peer-deps

sudo pm2 reload all