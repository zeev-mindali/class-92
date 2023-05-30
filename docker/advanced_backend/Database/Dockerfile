# get mysql image in specific version
FROM mysql:5.7

#copy northwind.sql into /docker-entrypoint-initdb.d special folder which execute sql commands ONLY ONCE
COPY ./northwind.sql /docker-entrypoint-initdb.d

