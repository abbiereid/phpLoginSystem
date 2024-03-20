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

    if (!($result->num_rows > 0)) {
        echo "
            <div class='popup'>
                <h2>This user does not exist, or the password you have entered is incorrect</h2>
                <button class='back'>Back</button>
            </div>
        ";
    } else {
        $userRow = $result->fetch_assoc(); // Fetch user details
        $dob = $userRow['DOB']; // Fetch DOB from the user details
        echo "
            Welcome $username, I see it is your birthday on the $dob
        ";
    }

    $stmt->close();
    $conn->close();

?>
