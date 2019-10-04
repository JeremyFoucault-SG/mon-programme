server {
    listen       80;
    server_name  ui.*;

    location / {
        proxy_pass   http://ui/;
    }
}
