#!/bin/sh

set -ex

rm -rf dist
mkdir dist
(cd dist && git init)

npm run build
cp -av index.html assets dist

cd dist
git remote add origin git@github.com:furugomu/summertime.git
git checkout -b gh-pages
git config user.name furugomu
git config user.email furugomu@gmail.com
git add -A
git commit -m "$(date)"
git push -f origin gh-pages

