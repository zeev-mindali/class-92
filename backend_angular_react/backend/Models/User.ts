class User {
    public id: number;
    public user_name: string;
    public user_email: string;
    public password: string;
    public user_create: Date;

    constructor(id: number, user_name: string, user_email: string, password: string, user_create: Date) {
        this.id = id;
        this.user_name = user_name;
        this.user_email = user_email;
        this.password = password;
        this.user_create = user_create;
    }

}

export default User;