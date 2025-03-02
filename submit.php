<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $userCode = $_POST['code'];

    // Ścieżka do pliku
    $file = 'user_code.txt';

    // Zapisujemy kod do pliku
    file_put_contents($file, $userCode . "\n", FILE_APPEND);

    echo "Kod został zapisany.";
}
?>
