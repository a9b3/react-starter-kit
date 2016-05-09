FROM ubuntu

MAINTAINER Sam L. <esayemm@gmail.com>

# Install programs
RUN apt-get update
RUN apt-get install -y nginx

# Move built website to nginx html folder
RUN rm -rf /var/www/html
ADD build /var/www/html

RUN rm -v /etc/nginx/sites-enabled/default
ADD nginx/default /etc/nginx/sites-enabled/default

# Don't run as daemon, keeps docker container alive
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

EXPOSE 80

CMD service nginx start
