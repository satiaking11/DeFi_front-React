#!/usr/bin/env sh
npm install
npm run build
ssh -i ~/Desktop/Projects/Ansible/betnomi-ansible/keys/betnomi-defi.pem centos@18.191.191.231 'sudo chown -R centos:centos /var/www/*'
scp -i ~/Desktop/Projects/Ansible/betnomi-ansible/keys/betnomi-defi.pem -r ./build/* centos@18.191.191.231:/var/www
ssh -i ~/Desktop/Projects/Ansible/betnomi-ansible/keys/betnomi-defi.pem centos@18.191.191.231 'sudo chown -R nginx:nginx /var/www/*'