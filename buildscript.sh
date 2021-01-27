#!/bin/sh

rm -rf ./minidapp

mkdir minidapp

mkdir minidapp/wallet

cp -rf mobile-app-front-end/app/www/* minidapp/wallet

cp bg.svg minidapp/wallet
cp minidapp.conf minidapp/wallet

zip -r ./minidapp/wallet.minidapp minidapp/wallet


