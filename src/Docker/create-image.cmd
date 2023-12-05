docker build --no-cache -f SQL\Dockerfile.PostgreSql -t doker/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t doker/app ../..
