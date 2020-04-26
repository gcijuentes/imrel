<?php 
 header("Access-Control-Allow-Origin: *");
$username = "talo";
$password = "123456";
$hostname = "localhost"; 

$query = $_POST["sql"];



$servername = "localhost";
$username = "talo";
$password = "123456";
$dbname = "crawler";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


if ($conn->query($query) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $query . "<br>" . $conn->error;
}

$conn->close();