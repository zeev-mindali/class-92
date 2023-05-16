class Config {
  public mysql_host = "localhost";
  public mysql_user = "root";
  public mysql_password = "12345678";
  public mysql_port = 3306;
  public mysql_database = "youtube";
  public webPort = 4000;
}

const config = new Config();
export default config;
