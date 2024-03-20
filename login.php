<?php

    $conn = new mysqli("localhost", "root", "02122003","users");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM `userdetails` WHERE `username` = ? AND `password` = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $username, $password);

    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        echo "logged in";
    } else {
        echo "user doesn't exist or password is incorrect";
    }

    $stmt->close();
    $conn->close();

?>
