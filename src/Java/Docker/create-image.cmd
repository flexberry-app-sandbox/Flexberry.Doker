docker build --no-cache -f SQL\Dockerfile.PostgreSql -t doker-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t doker-java/app ../../..
