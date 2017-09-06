#!/usr/bin/env bash

meteor create markbin --bare

cd markbin
mkdir -p client/components server imports/collections

meteor add react-meteor-data twbs:bootstrap@3.3.6
npm i -S react react-dom react-addons-pure-render-mixin

meteor



