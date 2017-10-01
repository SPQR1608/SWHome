<? session_start();
require_once "../func/functions.php";
if (isset($_POST['authSubmit'])) {
$login = trim($_POST['auth_login']);
$pass = trim($_POST['auth_pass']);

if (!get_magic_quotes_gpc()) {
$login = addslashes($login);
$pass = addslashes($pass);
}
    if (!$login || !$pass) {
Alert("Введите логин/пароль");
echo '<script>IndexPage()</script>';
exit();
}

    global $bd;
    $bd = new mysqli('localhost', 'user', '', 'swHome');
    $ms = mysqli_connect_error();
    if($ms){
        $bd = new mysqli('localhost', 'u751391145_spqr', '125D125d125D', 'u751391145_swh');
    }
$pass = md5(md5($pass));

$query = "SELECT * FROM users WHERE eMail='" . $login . "'"; #AND user_password='".$pass."'";
$result = $bd->query($query) or trigger_error(mysql_error() . $query);

if ($row = $result->fetch_assoc()) {
$_SESSION['user_login'] = stripslashes($row['firstName']).' '.stripcslashes($row['secondName']);
$_SESSION['ip'] = $_SERVER['REMOTE_ADDR'];
} else {
Alert('Такой логин с паролем не найдены в базе данных.');
echo '<script>IndexPage()</script>';
exit();
}

}
if (isset($_SESSION['user_login']) AND $_SESSION['ip'] == $_SERVER['REMOTE_ADDR']) {
    header("Location: " . $_SERVER["HTTP_REFERER"]);
   // echo '<script>IndexPage()</script>';
    exit();
}$bd->close();
?>