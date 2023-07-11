<?php
header('Content-type: text/plain');

    /*

     let tzvi={
        age:22,
        married:false,
        want_to_marry:"NFW",
     }
    */

    $person1 = new stdClass;  //js => new Object();
    $person1->firstName = "Tzvi";
    $person1->lastName = "houminer";
    $person1->wife1 = "Elena";
    $person1->wife2 = "Shir";

    $person2 = new stdClass;
    $person2->firstName = "Igal";
    $person2->lastName = "Groisman";
    $person2->wife = "Diana";

    echo "$person2->firstName $person2->lastName will marry with $person2->wife";

    //js => console.log(`${person2.firstname} ${person2.lastname} loves ${person2.wife}`)

    showPerson1($person1);
    showPerson2($person2);

    function showPerson1($person){
        echo "first name: $person->firstName"."\n";
        echo "wife name: $person->wife2"."\n";
    }

    function showPerson2($person){
        foreach($person as $property=>$value){
            echo "Property: $property, Value: $value"."\n";
        }
    }
?>