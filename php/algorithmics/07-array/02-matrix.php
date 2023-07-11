<?php
      header('Content-type: text/plain');
      for ($row=1;$row<=10;$row++){
          for ($col=1;$col<=10;$col++){
              $mat[$row][]=$row*$col; //second item in arry(col) will use push
          }
      }
  
      for ($row=1;$row<=10;$row++){
          for ($col=1;$col<=10;$col++){
              echo $mat[$row][$col]."\t"; //second item in arry(col) will use push
          }
          echo "\n";
      }
    /*
    //correct way
    while (!$userLogged){
        echo "user is not logged in";
    }

    //bad way
    for (;!$userLogged;){
        echo "user is not logged in";
    }
    */
?>