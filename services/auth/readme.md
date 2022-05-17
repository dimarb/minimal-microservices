# Auth Service

## Create User:

curl -X POST http://localhost:8080/v1/auth/resources/users --header "Content-Type: application/json"   --data '{ "email" : "dimarborda@gmail.com" , "organization" : "LDC", "password" : "1234"}'


## Login: 

curl -X POST http://localhost:8080/v1/auth/login --header "Content-Type: application/json"   --data '{ "email" : "dimarborda@gmail.com" , "password" : "1234"}'

