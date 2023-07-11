<?php
    header('Content-type: text/plain');
    $arr1 = [10,20,30,"and alon"];

    foreach($arr1 as $item){
        echo "$item"." ";
    }

    echo "\n";

    $names = ["zeeef","shachar","Shir", "Igal", "Barak", "Or"];
    foreach($names as $index=>$value){
        echo "$index $value | ";
    }

    echo "\n";
    $arr2 = ["Adam"=>"Elena","Diana"=>"Igal","Sofia"=>"Daniel"];
    foreach ($arr2 as $value){
        echo $value." ";
    }

    echo "\n";
    foreach ($arr2 as $key=>$value){
        echo $value." loves ".$key;
        echo "\n";
    }
?>