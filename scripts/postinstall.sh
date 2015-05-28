#!/bin/bash

bower="./node_modules/.bin/bower --config.directory=public/vendor/"

mkdir -p public/vendor
rm -rf public/vendor/*

$bower i jquery
$bower i react#0.13
$bower i react-router#0.13
$bower i immutable#3.7
$bower i flux#2.x
$bower i lodash
