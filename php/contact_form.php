<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Database connection details
$servername = "localhost";
$username = "radiante_akshita";
$password = "]ThQDL_RKTdU";
$dbname = "radiante_sacredsouls";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data and escape to prevent SQL injection
    $name = $conn->real_escape_string($_POST['name']);
    $email = $conn->real_escape_string($_POST['email']);
    $phone = $conn->real_escape_string($_POST['phone']);
    $address = $conn->real_escape_string($_POST['address']);
    $subject = $conn->real_escape_string($_POST['subject']);
    $message = $conn->real_escape_string($_POST['message']);

    // Log received data for debugging
    error_log("Received data: Name=$name, Email=$email, Phone=$phone, Address=$address, Subject=$subject, Message=$message");

    // Insert data into database
    $sql = "INSERT INTO contact (Name, Email, Phone, Address, Subject, Message) VALUES ('$name', '$email', '$phone', '$address', '$subject', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        // Log error for debugging
        error_log("Error: " . $sql . "<br>" . $conn->error);
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close connection
$conn->close();
?>
