FROM postgres:latest

ENV POSTGRES_DB=mydatabase
ENV POSTGRES_USER=myuser
ENV POSTGRES_PASSWORD=mypassword

# copy scripts db.sql to container, so we can initialize a DB from them
# COPY db_data/* /docker-entrypoint-initdb.d/

# COPY db_data/processes/* /docker-entrypoint-initdb.d/
# COPY db_data/triggers/* /docker-entrypoint-initdb.d/
# COPY db_data/museum-db/* /docker-entrypoint-initdb.d/
# COPY db_data/functions/* /docker-entrypoint-initdb.d/
# COPY db_data/utils/* /docker-entrypoint-initdb.d/
# COPY db_data/sample-data/* /docker-entrypoint-initdb.d/


EXPOSE 5432
