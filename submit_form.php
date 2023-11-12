<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];

    // Process the data (you can customize this part based on your needs)
    $message = "Name: $name\nEmail: $email";

    // Example: Save to a file (you might want to store in a database)
    file_put_contents('form_data.txt', $message . PHP_EOL, FILE_APPEND);

    // You can also send emails or perform other actions here

    // Redirect back to your thank-you page
    header("Location: thank_you.html");
    exit();
}
?>
