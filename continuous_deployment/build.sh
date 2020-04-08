#!/bin/bash

set -ev
#run only on master
if [[ $TRAVIS_PULL_REQUEST == "false" ]] && [[ $TRAVIS_BRANCH == "master" ]] || true
then
   npm run build
fi