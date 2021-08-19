#!/usr/bin/env sh
npm install
npm run build
ssh -i  ~/staging_key.pem centos@18.191.191.231 'sudo chown -R centos:centos /var/www/*'
scp -i  ~/staging_key.pem -r ./build/* centos@18.191.191.231:/var/www
ssh -i  ~/staging_key.pem centos@18.191.191.231 'sudo chown -R nginx:nginx /var/www/*'