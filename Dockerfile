FROM nginx:alpine

# Copia la configurazione nginx personalizzata
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia i file statici del sito
COPY index.html /usr/share/nginx/html/index.html
COPY dinova /usr/share/nginx/html/dinova

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
