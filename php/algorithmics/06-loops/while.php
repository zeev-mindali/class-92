<?php

    //while loop
    $i=1;           //init a variable
    while ($i<=10){ //condition to be executed
        echo $i." ";
        $i++;       //increment
    }

    //do-while
    $i=100;
    do{
        echo $i." ";
        $i++;
    } while ($i<=10); //will print 100 and stop


    //for 
    for ($counter=1;$counter<=10;$counter++){
        echo $counter." ";
    }
?>