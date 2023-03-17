# ms-teacher

Microservicio docentes

MYSQL
docker pull --platform linux/x86_64 mysql:5.7
docker run -p 3307:3306 --name mysqldbteacher -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_DATABASE=teacher_db mysql

JAVA RAIZ DE PROYECTO

docker build -t springboot-app-teacher .
docker network create spring-ms-net-teacher
docker network connect spring-ms-net-teacher mysqldbteacher
docker run -p 9001:9001 --name ms_teacher --net spring-ms-net-teacher -e MYSQL_HOST=mysqldbteacher -e MYSQL_USER=root -e MYSQL_PORT=3306 -e MYSQL_PASSWORD=1234 springboot-app-teacher
