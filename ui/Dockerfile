# build build
FROM node:lts
WORKDIR /workdir
COPY . /workdir
RUN yarn add global ng-tailwindcss
RUN yarn install
RUN yarn build --prod --optimization

# build run
FROM nginx:stable-alpine
RUN sed -i 's|index  index.html index.htm;|index  index.html index.htm;\ntry_files \$uri \$uri/ /index.html;|' /etc/nginx/conf.d/default.conf
COPY --from=0 /workdir/dist/ /usr/share/nginx/html
