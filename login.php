<?php

    $conn = new mysqli("localhost", "root", "02122003");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
      }
    echo "Connected successfully";
    
?>