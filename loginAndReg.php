<?
if (isset($_POST['regSubmit'])) {
	$login = trim($_POST['login']);
	$password = trim($_POST['password']);
	$email = trim($_POST['email']);
	$fName = trim($_POST['fName']);
	$lName = trim($_POST['lName']);
	$date = trim($_POST['date']);
	$date_rojd = date("Y-m-d", $date);

	if (!$login || !$password || !$email || !$fName || !$lName || !$date) {
		Alert("Не все строки были заполнены.");
		//header("Location: " . $_SERVER["HTTP_REFERER"]);
		echo '<script>ReloadPage()</script>';
		exit();
	}

	if (!get_magic_quotes_gpc()) {
		$login = addslashes($login);
		$password = addslashes($password);
		$email = addslashes($email);
		$fName = addslashes($fName);
		$lName = addslashes($lName);
		$date = addslashes($date);
	}
	$err = array();
	# проверям логин
	if (!preg_match("/^[a-zA-Z0-9]+$/", $login)) {
		Alert("Логин может состоять только из букв английского алфавита и цифр");
		echo '<script>ReloadPage()</script>';
		exit();
	}

	if (strlen($login) < 3 or strlen($login) > 30) {
		Alert("Логин должен быть не меньше 3-х символов и не больше 30");
		echo '<script>ReloadPage()</script>';
		exit();
	}
	connectBD();

	# проверяем, не сущестует ли пользователя с таким именем
	$query = "SELECT * FROM users WHERE userLogin='" . $login . "'";

	$result = $bd->query($query);
	$num_result = $result->num_rows;

	if ($num_result > 0) {
		Alert("Пользователь с таким логином уже существует!");
		echo '<script>ReloadPage()</script>';
		exit();
	}
	closeBD();
	if (count($err) == 0) {
		# Убераем лишние пробелы и делаем двойное шифрование
		$password = md5(md5($password));
		addUser($login, $password, $email, $fName, $lName, $date_rojd);

		//Alert('Регистрация прошла успешною. Теперь вы можете авторизоваться');
		echo '<script>IndexPage()</script>';
		exit();
	} else {
		echo "При регистрации произошли следующие ошибки:";
		foreach ($err AS $error) {
			//echo $error . "<br>";
		}
	}
}
?>
	<link href='http://fonts.googleapis.com/css?family=PT+Sans:400,700' rel='stylesheet' type='text/css'>

	<link rel="stylesheet" href="css/reset.css"> <!-- CSS reset -->
	<link rel="stylesheet" href="css/login.css"> <!-- Gem style -->
	<script src="js/modernizr.js"></script> <!-- Modernizr -->


		<nav class="main-nav">
			<ul>
				<!-- ссылки на вызов форм -->
				<li><a class="cd-signin" href="#0">Вход</a></li>
				<li><a class="cd-signup" href="#0">Регистрация</a></li>
			</ul>
		</nav>

	<div class="cd-user-modal"> <!-- все формы на фоне затемнения-->
		<div class="cd-user-modal-container"> <!-- основной контейнер -->
			<ul class="cd-switcher">
				<li><a href="#0">Вход</a></li>
				<li><a href="#0">Регистрация</a></li>
			</ul>

			<div id="cd-login"> <!-- форма входа -->
				<form class="cd-form" method="post" action="pages/login.php">
					<p class="fieldset">
						<label class="image-replace cd-email" for="signin-email">E-mail</label>
						<input class="full-width has-padding has-border" id="signin-email" type="email" name="auth_login" placeholder="E-mail">
						<span class="cd-error-message">Введите свой логин!</span>
					</p>

					<p class="fieldset">
						<label class="image-replace cd-password" for="signin-password">Пароль</label>
						<input class="full-width has-padding has-border" id="signin-password" type="text" name="auth_pass" placeholder="Пароль">
						<a href="#0" class="hide-password">Скрыть</a>
						<span class="cd-error-message">Введите пароль!</span>
					</p>

					<p class="fieldset">
						<input type="checkbox" id="remember-me" checked>
						<label class="remember-me" for="remember-me">Запомнить меня</label>
					</p>

					<p class="fieldset">
						<input class="full-width" type="submit" name="authSubmit" value="Войти">
					</p>
				</form>
				
				<p class="cd-form-bottom-message"><a href="#0">Забыли свой пароль?</a></p>
				<!-- <a href="#0" class="cd-close-form">Close</a> -->
			</div> <!-- cd-login -->

			<div id="cd-signup"> <!-- форма регистрации -->
				<form class="cd-form" method="post">
					<p class="fieldset">
						<label class="image-replace cd-username" for="signup-username">Имя пользователя</label>
						<input class="full-width has-padding has-border" id="signup-username" type="text" name="fName" placeholder="Имя пользователя">
						<span class="cd-error-message">Здесь сообщение об ошибке!</span>
					</p>
					<p class="fieldset">
						<label class="image-replace cd-username" for="signup-username">Фамилия пользователя</label>
						<input class="full-width has-padding has-border" id="signup-username" type="text" name="lName" placeholder="Фамилия пользователя">
						<span class="cd-error-message">Здесь сообщение об ошибке!</span>
					</p>

					<p class="fieldset">
						<label class="image-replace cd-username" for="signup-username">Дата рождения</label>
						<input class="full-width has-padding has-border" id="signup-username" type="text" name="date" placeholder="Дата рождения (dd/mm/yyyy)">
						<span class="cd-error-message">Здесь сообщение об ошибке!</span>
					</p>
					<p class="fieldset">
						<label class="image-replace cd-username" for="signup-username">Логин</label>
						<input class="full-width has-padding has-border" id="signup-username" type="text" name="login" placeholder="Логин">
						<span class="cd-error-message">Здесь сообщение об ошибке!</span>
					</p>
					<p class="fieldset">
						<label class="image-replace cd-email" for="signup-email">E-mail</label>
						<input class="full-width has-padding has-border" id="signup-email" type="email" name="email" placeholder="E-mail">
						<span class="cd-error-message">Здесь сообщение об ошибке!</span>
					</p>

					<p class="fieldset">
						<label class="image-replace cd-password" for="signup-password">Пароль</label>
						<input class="full-width has-padding has-border" id="signup-password" type="text" name="password"  placeholder="Пароль">
						<a href="#0" class="hide-password">Скрыть</a>
						<span class="cd-error-message">Здесь сообщение об ошибке!</span>
					</p>

					<p class="fieldset">
						<input type="checkbox" id="accept-terms">
						<label class="accept-terms" for="accept-terms">Я согласен с <a href="#0">Условиями</a></label>
					</p>

					<p class="fieldset">
						<input class="full-width has-padding" type="submit" name="regSubmit" value="Создать аккаунт">
					</p>
				</form>

				<!-- <a href="#0" class="cd-close-form">Close</a> -->
			</div> <!-- cd-signup -->

			<div id="cd-reset-password"> <!-- форма восстановления пароля -->
				<p class="cd-form-message">Забыли пароль? Пожалуйста, введите адрес своей электронной почты. Вы получите ссылку, чтобы создать новый пароль.</p>

				<form class="cd-form">
					<p class="fieldset">
						<label class="image-replace cd-email" for="reset-email">E-mail</label>
						<input class="full-width has-padding has-border" id="reset-email" type="email" placeholder="E-mail">
						<span class="cd-error-message">Здесь сообщение об ошибке!</span>
					</p>

					<p class="fieldset">
						<input class="full-width has-padding" type="submit" value="Восстановить пароль">
					</p>
				</form>

				<p class="cd-form-bottom-message"><a href="#0">Вернуться к входу</a></p>
			</div> <!-- cd-reset-password -->
			<a href="#0" class="cd-close-form">Закрыть</a>
		</div> <!-- cd-user-modal-container -->
	</div> <!-- cd-user-modal -->
<script src="js/jquery-1.12.3.min.js"></script>
<script src="js/main.js"></script> <!-- Gem jQuery -->