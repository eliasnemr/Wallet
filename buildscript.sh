o#!/bin/sh

rm -rf ./minidapp

mkdir minidapp

mkdir minidapp/wallet

cp -rf mobile-app-front-end/app/www/* minidapp/wallet

cp overlay.jpeg minidapp/wallet
cp minidapp.conf minidapp/wallet

zip -r ./minidapp/wallet.minidapp minidapp/wallet


