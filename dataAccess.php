<?php

    $conn = new mysqli("localhost", "root", "02122003", "users");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $username = $_POST['username'];

    $sql = "SELECT * FROM `userlinks` WHERE `user` = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    $response = array();

    if ($result->num_rows > 0) {
        $response['name'] = $name;
        $response['link'] = $link;
    } else {
        $response['message'] = 'There was a problem fetching your data.'
    }

    $stmt->close();
    $conn->close();


    header('Content-Type: application/json');
    echo json_encode($response);

?>