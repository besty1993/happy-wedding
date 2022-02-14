#!/usr/bin/env sh

# abort on errors
set -e

# build
cd vue
npm run build

# navigate into the build output directory
cd ..
mv vue/dist/* docs/

# if you are deploying to a custom domain
echo 'www.suneeandchangeun-he.art' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:besty1993/happy-wedding.git 1-vue

cd -