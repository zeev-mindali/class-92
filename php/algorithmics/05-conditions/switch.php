<?php

    $a = 666;

    switch ($a){
        case 1:
            echo "one\n";
            break;
        case 2:
            echo "two\n";
            break;
        case 3:
            echo "tree tree";
            break;
        default:
            echo "Where The Food";
    }

    $str="Daniel";
    switch ($str){
        case "Daniel":
            echo "$str is the king of the world";
            break;
        case "Zeev":
            echo "Oops i did it again";
            break;
        default:
            echo "$str is so ...... (still thinking of a word)";
    }


    $grade = 85;
    switch ($grade){
        case $grade>100:
            echo "No bonus is this test";
            break;
        case $grade>94:
            echo "A+";
            break;
        case $grade>90:
            echo "A";
            break;
        case $grade>85:
            echo "B+";
            break;
        default:
            echo "Hello Matan 2";
    }

    /*
        if grade>100 
        else if grade>90
        else if grade>85
        else
    */
?>