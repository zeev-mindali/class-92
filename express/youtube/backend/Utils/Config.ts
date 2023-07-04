class Config { }

class DevelopmentConfig extends Config {
    //mongoDB
    public isDevelopment = true;
    public connectionString = "mongodb://localhost:27017/local"

    //Mysql
    public mysql_host = "localhost";
    public mysql_user = "root";
    public mysql_password = "12345678";
    public mysql_port = 3306;
    public mysql_database = "youtube";
    public webPort = 4000;
}

class ProductionConfig extends Config {
    //mongoDB
    public isDevelopment = false;
    public connectionString = "mongodb://zeev:pass@814.25.33.89:27017/local";

    //Mysql
    public mysql_host = "92.33.15.100";
    public mysql_user = "u643752";
    public mysql_password = "blablaDanielbla";
    public mysql_port = 3306;
    public mysql_database = "db675473_youtube";
    public webPort = 80;
}

//const config = new Config();
//const config = process.MODE_ENV === "production" ? new ProductionConfig() : new DevelopmentConfig();
const config = new DevelopmentConfig();
export default config;
