#!/usr/bin/env sh

set -e

cd dist

git push -f git@github.com:ionysoshedblom/iths-e-wallet.git master:gh-pages

cd -