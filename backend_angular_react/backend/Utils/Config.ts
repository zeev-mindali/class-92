class Config {
    //todo: change the information....
    public WebPort = 4000; //backend port
    public mySQLhost = "localhost";
    public mySQLuser = "root";
    public mySQLpass = "12345678";
    public mySQLdatabase = "vacations";

    //for example
    //   public mySQLhost = "localhost";
    //   public mySQLuser = "root";
    //   public mySQLpass = "12345678";
    //   public mySQLdatabase = "test";
}

const config = new Config();
export default config;
