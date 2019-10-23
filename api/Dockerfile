# build
FROM node:10.10.0
WORKDIR /workdir
COPY . /workdir
RUN yarn install
RUN yarn build

# run
FROM node:lts
WORKDIR /workdir
ENV NODE_ENV production
COPY --from=0 /workdir/.dist /workdir
COPY --from=0 /workdir/package.json /workdir
RUN yarn install --prod
CMD ["node", "main.js"]
