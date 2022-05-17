export default  {
    TOKEN_SECRET: process.env.TOKEN_SECRET || "9JsvJqfMmVFvSmcNB1A8KdU44RS+aSymhfLtgj7pJIIE79t4G6tS1cOyFFAuasVY5tFuQbKotBlbe7Gk5bJ7U73tiix/qqFzKKAWDgwjXCtgIgWQKBsz6i+6MRJ8td95wD0u8ljq19FqOXGYOXl6EVOM4sbwKdNybwTSrUhmDDse9dymb65z3Iah0Wtq+7RUywreB5PJFm83aS1XhC30Tg1qL0u4Dms9xVnS1iqlP2oCjfI09myM2XqVcRIFqiJeand8wCM8CEo9vBEaz6gRGo+di/6553GH9WytszcU45APp24d/Cfv2uhbOEtRHq+pcAkMuo3Bj3YzRPej3xMv4g==",
    URL : process.env.URL || "http://eb.lineadecodigo.net",
    PORT : process.env.PORT || "3700",
    SERVER_MONGO :   process.env.SERVER_MONGO || "mongo",
    PORT_MONGO :   process.env.PORT_MONGO || "27017",
    DATABASE_NAME_MONGO :   process.env.DATABASE_NAME_MONGO || "eb-core",
    USER_MONGO :   process.env.USER_MONGO || "root",
    PASSWORD_MONGO :   process.env.PASSWORD_MONGO || "secret",
    PRODUCTION : process.env.PRODUCTION || false,
    PROJECT_PATH : process.env.PROJECT_PATH || "/home/api/",
    KUBE_PREFIX : process.env.KUBE_PREFIX || "/v1/product",

}
