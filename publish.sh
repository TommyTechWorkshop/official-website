https_proxy=127.0.0.1:1088 git pull
yarn build
scp -r dist/* /usr/share/nginx/html
