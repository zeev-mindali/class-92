<?php
    header('Content-type: text/plain');
    include "getAvg.php"; //like required or import
    echo getAvg(10,20,30); // 20


    sayHi();

    echo "\n";

    showMessage("i will never interrupt zeev again",10);


    function sayHi(){
        echo "Hi!\n";
    }

    function showMessage($message,$times=100){
        for ($counter=0;$counter<$times;$counter++){
            echo $message."\n";
        }
    }

?>