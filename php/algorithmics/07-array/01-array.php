<?php
    header('Content-type: text/plain');
    $arr1 = array(10,20,30,"hi");


    //#1 way simple for
    for ($index=0;$index<count($arr1);$index++){
        echo $arr1[$index]." ";
    }

    echo "\n";
    $lastItem = count($arr1)-1;
    echo "first item: $arr1[0], second item: $arr1[1], last item: $arr1[$lastItem]";

    echo "\n";
    ////////////////////////////////////////////////////////////////////////
    //#2 way - create array
    $arr2 = [10,20,30,"hi"];

    //#3 way to create array
    for ($index=0;$index<10;$index++){
        $arr3[$index] = $index*$index;
        echo "$arr3[$index]"." ";
    }
    
    echo "\n";
    //#4 way to create array
    for ($index=0;$index<10;$index++){
        $arr4[] = $index*$index; //if we will not use index for location, it will act like push in javascript
        //JS=>arr4.push(index*index);
        echo "$arr4[$index]"." ";
    }


?>
