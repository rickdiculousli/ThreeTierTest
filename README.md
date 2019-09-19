# NodeTest

A simple project to test a 3-tier architecture using Node.JS, Express, Apache HTTP Server, and MySQL

## Getting Started


### Prerequisites

Node.JS, Apache HTTP Server, and MySQL has to be installed on your machine. I used Apache 2.4.41 and MySQL 8.0. Verify that both are successfully installed in their default setting.

The Apache server has to have its Proxy Pass directive activated. This is to reverse proxy a connection on Port 80 into the Node.JS Web Framework.

Go into the following file.
```
C:\[PATH TO APACHE]\conf\httpd.conf
```

Modify it so to include the Proxy Pass and also activate the mod_proxy and mod_proxy_http modules by uncommenting them

```
#Add the following

ProxyPass /node/ http://localhost:3000/
ProxyPass /node http://localhost:3000/
```
```
#Change the following

#LoadModule proxy_module modules/mod_proxy.so
#LoadModule proxy_http_module modules/mod_proxy_http.so

#To this

LoadModule proxy_module modules/mod_proxy.so
LoadModule proxy_http_module modules/mod_proxy_http.so
```

For MySQL, Simply setup the databases referenced in the index.js and create a user for the system. Basic levels of permissions should do fine.

## Configurating the app

After cloning the project, enter the repository folder and install any dependencies
```
\nodeTest> npm install -d
```
## Running the app

Start Apache, NodeJS app, and MySQL.
```
> [PATH_TO_APACHE]\bin\httpd.exe
> node app.js
```
Go to localhost on browser to see the default Apache HTTP Server page, and go to localhost/node for the NodeJS App. **Your MySQL instance may not have the database and tables required for this to work.**