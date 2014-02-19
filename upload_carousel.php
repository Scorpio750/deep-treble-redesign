<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

$uploaddir = './sliderImages/';
$dstFile = $uploaddir . basename($_FILES['userfile']['name']);
chmod($_FILES['userfile']['tmp_name'], 0644);

$srcFile = $_FILES['userfile']['tmp_name'];

// Create connection the the remote host
$conn = ssh2_connect('eden.rutgers.edu');
echo ssh2_auth_password ( $conn, $_POST['name'] , $_POST['password'] );


// Create SFTP session
$sftp = ssh2_sftp($conn);

$sftpStream = @fopen('ssh2.sftp://'.$sftp.$dstFile, 'w');

try {

    if (!$sftpStream) {
        throw new Exception("Could not open remote file: $dstFile");
    }
    
    $data_to_send = @file_get_contents($srcFile);
    
    if ($data_to_send === false) {
        throw new Exception("Could not open local file: $srcFile.");
    }
    
    if (@fwrite($sftpStream, $data_to_send) === false) {
        throw new Exception("Could not send data from file: $srcFile.");
    }
    
    fclose($sftpStream);
                    
} catch (Exception $e) {
    error_log('Exception: ' . $e->getMessage());
    fclose($sftpStream);
}




?>
