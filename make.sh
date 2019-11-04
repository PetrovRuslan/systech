#!/usr/bin/env bash

curl -sL https://rpm.nodesource.com/setup_10.x | sudo bash -
sudo yum -y install nodejs

sudo yum -y install  https://centos7.iuscommunity.org/ius-release.rpm
sudo yum -y install  git2u-all

git clone https://github.com/PetrovRuslan/systech
cd systech

npm init -y
npm i pug --save-dev
node index.js > index.html
