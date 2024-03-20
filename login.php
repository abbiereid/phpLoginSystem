<?php

    $conn = new mysqli("localhost", "root", "02122003", "users");

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

    $response = array();

    if ($result->num_rows > 0) {
        $userRow = $result->fetch_assoc();
        $dob = $userRow['DOB'];

        $response['success'] = true;
        $response['username'] = $username;
        $response['dob'] = $dob;
    } else {
        $response['success'] = false;
        $response['message'] = "This user does not exist, or the password you have entered is incorrect";
    }

    $stmt->close();
    $conn->close();

    header('Content-Type: application/json');
    echo json_encode($response);
?>
