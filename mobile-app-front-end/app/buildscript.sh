#!/bin/sh

rm -rf ./minidapp

mkdir minidapp

mkdir minidapp/wallet

cp -rf www/* minidapp/wallet

cp ./src/assets/bg.svg minidapp/wallet

cp minidapp.conf minidapp/wallet

zip -r ./minidapp/wallet.minidapp minidapp/wallet


