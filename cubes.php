<?php
$conn = mysqli_connect("localhost", "root", "", "cubes");
if(!$conn){
    die("Connection failed:" . mysqli_connect_error());
} else {
  echo "ola.html";
}
 if (isset($_POST['ola'])) {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $username = $_POST['username'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $password = password_hash($_POST['password'],PASSWORD_BCRYPT);
    $sql = "INSERT INTO cubes (firstName, lastName, username, email, phone, password)
    VALUES ('$firstName', '$lastName', '$username', '$email', '$phone', '$password')";
if (mysqli_query($conn, $sql)) {
  echo "Registration successful";
} else {
  echo "Error registering user: " . mysqli_error($conn);
}
   if (empty($firstName) || empty($lastName) || empty($username) || empty($email) || empty($phone) || empty($_POST[password])) {
    echo "Please fill in all required fields.";
   } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email address.";
   } elseif (strlen($_POST['password']) < 8) {
    echo "Password must be at least 8 characters";
   } else {
    $query = "SELECT * FROM users WHERE username = '$username' OR email = '$email'";
    $result = mysqli_query($conn, $query);
    if (mysqli_num_rows($result) > 0) {
      echo "Username or email already exists.";
    } else {
      $query = "INSERT INTO users (firstName, lastName, username, email, phone, password) VALUES ('$firstName', '$lastName', '$username', '$email', '$password')";
      mysqli_query($conn, $query);
      echo "Registration Successful!";
    } 
   }

    
 }
 if ($_SERVER["REQUEST_METHOD"] == "POST") {
$errors == [];
if (empty($_POST['firstName'])) {
  $errors[] = "First name is required.";
}
if ($errors) {
  foreach ($errors as $error) {
    echo $error . "<br>";
  }
} else {
  $firstName = trim($_POST['firstName']);
}
 };



$stmt = mysqli_prepare($conn, "INSERT INTO cubes (firstName, lastName, username, email, phone, password)
VALUE (?, ?, ?, ?, ?, ?)");
mysqli_stmt_bind_param($stmt, "ssssss", $firstName, $lastName, $username, $email, $phone, $password);
mysqli_stmt_execute($stmt);
mysqli_close($conn);
?>