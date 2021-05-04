#!/bin/sh

rm -rf ./minidapp

mkdir minidapp

mkdir minidapp/wallet

cp -rf www/* minidapp/wallet

cp ./src/assets/bg.svg minidapp/wallet

cp ./src/assets/minidapp.orig.conf minidapp/wallet/minidapp.conf

zip -r ./minidapp/wallet.minidapp minidapp/wallet


