# DeFi

### Installing depencies
```
npm install
```


### Running App
 ```
 npm run
 ```


 ### Building & deploying to staging
 You can simply open a PR against `staging` branch to see it live in staging, but if you want a force deploy, try the following commands.
 Note that it will ve overriden when someone merge changes into `staging`  branch
 
 ```
npm install
npm run build
ssh -i   ~/betnomi-defi.pem  centos@18.191.191.231 'sudo chown -R centos:centos /var/www/*'
scp -i   ~/betnomi-defi.pem  -r ./build/* centos@18.191.191.231:/var/www
ssh -i   ~/betnomi-defi.pem  centos@18.191.191.231 'sudo chown -R nginx:nginx /var/www/*'
 ```