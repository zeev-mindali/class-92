<?php
    header('Content-type: text/plain');
    //create a database connection
    function connect(){
        $user="root";
        $pass="12345678";
        $server="localhost";
        $schema="youtube";

        //create the connection
        $conn = mysqli_connect($server,$user,$pass,$schema);

        //check if the connection is established
        if (mysqli_connect_errno($conn)){
            die("failed to connect to mysql , error:".mysqli_connect_error()."\nHuston we have a problem");
        }

        //support hebrew/arabic/russion
        mysqli_set_charset($conn,"utf8");

        return $conn;
    }


    //CRUD - Create Read Upadte Delete

    //insert,update,delete
    //get sql statement
    function execute($sql){
        //connect to database
        $connection = connect();

        //execute sql statement
        mysqli_execute($connection,$sql);

        //get the autoincremnent number
        $id = mysqli_insert_id($connection); //update,delete => 0

        //close the connection!!!!!!!!
        mysqli_close($connection);

        //return id
        return $id;
    }

    //select
    function select($sql){
        //connect to database
        $connection = connect();

        //get a cursor represented by the query
        $cursor = mysqli_query($connection,$sql);

        $row = mysqli_fetch_object($cursor); //take first row

        while ($row){
            $arr[] = $row;
            $row = mysqli_fetch_object($cursor); //take the next record
        }

        //close the connection!!!!!!!!
        mysqli_close($connection);

        //return an array containing the data:
        return $arr;
    }
?>