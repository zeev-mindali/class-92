<?php

    echo "please enter your full name:";
    $fullName = trim(fgets(STDIN));

    echo "enter your age:";
    $age = (int)trim(fgets(STDIN));

    $year = 2023-$age;
    echo "Hello $fullName, you was born in $year";
?>