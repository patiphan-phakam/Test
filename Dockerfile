FROM nginx:1.23.1-alpine

RUN chgrp -R root /var/cache/nginx && chmod -R 770 /var/cache/nginx
RUN chgrp -R root /var/run && chmod -R 770 /var/run

COPY deploy/default.conf /etc/nginx/conf.d/
RUN mkdir -p /usr/share/nginx/html
COPY build /usr/share/nginx/html

EXPOSE 80
