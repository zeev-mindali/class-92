<?php

    header('Content-type: text/plain');

    //first way
    $arr = array("zeev"=>"mindali","Alon"=>"1","Igal"=>"Groisman","Daniel tscinker"=>"the king");
    //my name bond , james bond.

    //targil kita: make every one, my name is mindali , zeev mindali


    //second way
    echo "there is something strange in the nighberhood, who you gonna call? ".$arr["zeev"];


    //third way
    $arr2["Igal"] = "Dianna, the one and only"; 
    $arr2["Alon"] = "not in the office, i am out of my mind";
    
?>