<?php

//so php will recognize the escape charecters
//header('Content-type: text/plain');
//  for ($row=1;$row<=10;$row++){
//      for ($col=1;$col<=10;$col++){
//          echo $col*$row."\t";
//      }
//      echo "\n";
//  }

for ($row = 1; $row <= 10; $row++) {
    for ($col = 1; $col <= 10; $col++) {
        $result = $col * $row . "\t";
        echo nl2br($result, false);
    }
    echo nl2br("\n", false);
}

?>