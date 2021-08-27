#!/usr/bin/env sh
set -uex
npm install
npm run build
git rev-parse HEAD >> ./build/version.txt
date >> ./build/version.txt
ssh -i ~/Desktop/Projects/Ansible/betnomi-ansible/keys/betnomi-defi.pem centos@18.191.191.231 'sudo chown -R centos:centos /var/www'
scp -i ~/Desktop/Projects/Ansible/betnomi-ansible/keys/betnomi-defi.pem -r ./build/* centos@18.191.191.231:/var/www
ssh -i ~/Desktop/Projects/Ansible/betnomi-ansible/keys/betnomi-defi.pem centos@18.191.191.231 'sudo chown -R nginx:nginx /var/www'