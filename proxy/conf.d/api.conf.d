server {
    listen       80;
    server_name  api.*;

    location / {
        proxy_pass   http://api:8080/;
    }
}
