<?session_start();
require_once "func/functions.php"?>
<!DOCTYPE html>

<html lang="ru" class=""><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

	
	<meta name="viewport" content="width=device-width">
	<meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE">
	<title>swHome</title>
	<link rel="stylesheet" href="main/main.css">
	<link rel="stylesheet" href="main/module.css"><script src="main/approve" type="text/javascript" async=""></script>
	<script src="main/sm" type="text/javascript" async=""></script>
	<script src="main/get-settings" type="text/javascript" async=""></script>
	<script async="" src="main/counter.js"></script>
	<script type="text/javascript" src="main/scripts.js"></script>
	<link rel="stylesheet" href="main/animation.css">
	<script async="" src="main/module.js"></script>
	<script type="text/javascript" async="" src="main/watch.js"></script>
	<script async="" src="main/gtm.js."></script>
	<script src="js/func.js" type="text/javascript"></script>
	<?require_once "pages/links.php"?>

</head>
<body id="body">
<!-- Google Tag Manager -->
<noscript>&lt;iframe src="//www.googletagmanager.com/ns.html?id=GTM-P5PTRJ"
height="0" width="0" style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;</noscript>

<div id="overlay"></div>

	<nav class="menu js-menu">
		<div class="menu-container">
			<ul class="menu__list">
				<li class="menu__item" onclick="scr(homepage);" style="padding-left: 0px;">
					<a href="control.php"><img class="logo__img logohover" src="main/logo-blue.png" alt="Smart Home"></a>
				</li>
				<li class="menu__item" onclick="scr(functions);">
					<div class="menu__item-inner"><span class="menu__num">03.</span>Возможности<br> умного дома</div>
				</li>
				<li class="menu__item" onclick="scr(saving);">
					<div class="menu__item-inner"><span class="menu__num">06.</span>Экономия</div>
				</li>
				<li class="menu__item" onclick="scr(contacts);">
					<div class="menu__item-inner"><span class="menu__num">07.</span>Контакты</div>
				</li>
				<li class="menu__item">
						<?//include "pages/userPanel.php";?>
				</li>
				<li class="menu__item">
					<div class="s-phone menu__phone menu-phone-button">
						<div class="s-phone__number">
							<?
							if(isset($_SESSION['user_login'])){
								//Alert('alert');
							}
							if (checkUser($_SESSION['user_login']) OR isset($_SESSION['user_login']))
							require_once "pages/userPanel.php";
							else
								require_once "loginAndReg.php";
							?>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</nav>
	<header class="header">
		<!--video-->

		<div style="position: absolute; z-index: -1; top: 0px; left: 0px; bottom: 0px; right: 0px; overflow: hidden; background-image: none; background-size: cover; background-position: 50% 50%; background-repeat: no-repeat; opacity: 1;" id="header-video"><video autoplay="" loop="" style="visibility: visible; margin: auto; position: absolute; z-index: -1; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); width: 100%; height: auto;min-width: 1900px;"><source src="video/video.mp4" type="video/mp4"></video></div>
		<div class="header__inner center" id="homepage">
			<div class="header__title">
				Система умный дом
			</div>
		</div>
	</header>
	<section id="functions" class="function">
		<div class="center">
			<b><h2 class="title function__title"><span class="title__box_color_blue">Безграничные возможности</span> Умного Дома</h2></b>
			<div class="unlimited-new">

				<div>
					<a href="javascript:void(0);" class="unlimited-link unlimited-first-active active" value="1">
						<img src="main/1.png">
						<div>Освещение</div>
					</a>
					<a href="javascript:void(0);" class="unlimited-link" value="2">
						<img src="main/2.png">
						<div>Климат</div>
					</a>
					<a href="javascript:void(0);" class="unlimited-link" value="3">
						<img src="main/3.png">
						<div>Отопление</div>
					</a>
					<a href="javascript:void(0);" class="unlimited-link" value="4">
						<img src="main/4.png">
						<div>Безопасность</div>
					</a>
					<a href="javascript:void(0);" class="unlimited-link" value="5">
						<img src="main/5.png">
						<div>Электростанция</div>
					</a>
					<a href="javascript:void(0);" class="unlimited-link" value="6">
						<img src="main/6.png">
						<div>Мультирум</div>
					</a>
					<a href="javascript:void(0);" class="unlimited-link" value="7">
						<img src="main/7.png">
						<div>Домашний кинотеатр</div>
					</a>
					<a href="javascript:void(0);" class="unlimited-link" value="8">
						<img src="main/8.png">
						<div>Видеонаблюдение и домофон</div>
					</a>
					<a href="javascript:void(0);" class="unlimited-link" value="9">
						<img src="main/9.png">
						<div>Статистика и дополнительные функции</div>
					</a>
				</div>



			</div>
			<div class="unlimited-new-content">
								<div class="unlimited-full__content">
									<div class="unlimited-full__video">
										<div class="unlimited-full__video-clip unlimited-full__video-clip_state_open" data-clip="1"><iframe class="youtube-video" width="503" height="318" src="main/nMVsYGvTVMk.html" frameborder="0" allowfullscreen=""></iframe></div>
										<div class="unlimited-full__video-clip" data-clip="2"><iframe class="youtube-video" width="503" height="318" src="main/PlPGdRjhERk.html" frameborder="0" allowfullscreen=""></iframe></div>
										<div class="unlimited-full__video-clip" data-clip="3"><iframe class="youtube-video" width="503" height="318" src="main/okR-ZiVEQgY.html" frameborder="0" allowfullscreen=""></iframe></div>
										<div class="unlimited-full__video-clip" data-clip="4"><iframe class="youtube-video" width="503" height="318" src="main/mdWj1EvmNnc.html" frameborder="0" allowfullscreen=""></iframe></div>
										<div class="unlimited-full__video-clip" data-clip="5"><iframe class="youtube-video" width="503" height="318" src="main/pHLp3jTFZj0.html" frameborder="0" allowfullscreen=""></iframe></div>
										<div class="unlimited-full__video-clip" data-clip="6"><iframe class="youtube-video" width="503" height="318" src="main/FHpEef-ccr8.html" frameborder="0" allowfullscreen=""></iframe></div>
									</div>
									<div class="unlimited-full__data unlimited-full__data_js_init">
										<h3 class="unlimited-full__title">Освещение</h3>
										<div class="unlimited-full__flow unlimited-full__flow_state_open" data-flow="1">
											<h4 class="unlimited-full__flow-title"><span>Световые сценарии</span></h4>
											<div class="unlimited-full__flow-content" style="top: 272px;">
												<p>- Создавайте собственные сценарии освещения, например: "Раннее пробуждение", "Уютный вечер" или "Рабочий день". </p>
												<p>- Умный Дом запомнит ваше расписание и создаст комфортное освещение в разное время суток.</p>
												<p>- Включайте подходящий сценарий освещения одним прикосновением.</p>

											</div>
										</div>
										<div class="unlimited-full__flow" data-flow="2">
											<h4 class="unlimited-full__flow-title"><span>Автоматизация освещения</span></h4>

										</div>
										<div class="unlimited-full__flow" data-flow="3">
											<h4 class="unlimited-full__flow-title"><span>Умные выключатели</span></h4>
										</div>
										<div class="unlimited-full__flow" data-flow="4">
											<h4 class="unlimited-full__flow-title"><span>Управление шторами, жалюзи и ролетами</span></h4>
										</div>
										<div class="unlimited-full__flow" data-flow="5">
											<h4 class="unlimited-full__flow-title"><span>Ландшафтное освещение</span></h4>
										</div>
										<div class="unlimited-full__flow" data-flow="6">
											<h4 class="unlimited-full__flow-title"><span>Сценарии "Я ушел/Я пришел"</span></h4>
										</div>
									</div>
								</div>
								
								<i class="unlimited-full__close unlimited-full__close_js_close"></i>
							</div>
			<div style="clear: both"></div>
			<div style="height: 110px;"></div>

		</div>

	</section>
	<section id="saving" class="saving">
		<div class="saving__inner center">
			<h2 class="title saving__title"><span class="title__box_color_blue">Экономия до 20% с</span> умным домом</h2>
			<div class="saving__container">
				<div class="saving__block">
					<p class="saving__text">
						Система Умный дом позволяет<br>
						экономить ваши <strong>расходы<br>
						на электроэнергию, газ и воду</strong>
					</p>
					<div class="saving__data hooks">
						<span class="saving__data-text">до</span>
						<span class="saving__data-num">20%<sup>*</sup></span>
					</div>
					<p class="saving__note">* по результатам<br>  исследования<br>  SmartHome</p>
				</div>
				<div class="saving__block">
					<p class="saving__text">
						Затраты на установку системы<br>
						<strong>окупаются в среднем</strong>
					</p>
					<div class="saving__data hooks">
						<span class="saving__data-text">за</span>
						<span class="saving__data-num">1,5</span>
						<span class="saving__data-text">года*</span>
					</div>
					<p class="saving__note"><!--* исходя из стоимости<br>  базового оборудования —<br>  150 000 рублей--></p>
				</div>
			</div>
		</div>
	</section>
	<footer class="footer">
		<div class="footer__inner center">

		</div>
	</footer>

	<input type="hidden" name="prefix" class="prefix" value="">
	<input type="hidden" name="phone_format" class="phone_format" value="one">
	<input type="hidden" name="referer" value="aHR0cDovL3BnZHYucnUvYmxvZy9sYW5kaW5nLXBhZ2UtZGx5YS1zaXN0ZW15LXVtbnlqLWRvbQ==">
	<input type="hidden" name="ref_url" value="aT0xJnV0bV9jaWQ9JnV0bV9maWlkPSYmdXRtX210PWImdXRtX253PWcmdXRtX2Q9YyZ1dG1fZG09JnV0bV9jcj00MDc2MzkzMTExMyZ1dG1fa3c9JUQxJTgzJUQwJUJDJUQwJUJEJUQxJThCJUQwJUI5JTIwJUQwJUI0JUQwJUJFJUQwJUJDJnV0bV9wbD0mdXRtX2FkcG9zPTF0MyZnY2xpZD1DajBLRVFqdzNNNm9CUkRubkl5d281aTI4N0FCRWlRQVhSbTdTemNyS1k0N1hmck80QlFqMEQ5Xy1yVzU2aUFhbkp5Y1pvakpxYjlRMkpRYUFueEE4UDhIQVE=">
	<input type="hidden" class="formname" name="formname" value="">
	<input type="hidden" class="sitename" name="sitename" value="voroneg.mimismart.com">
	<input type="hidden" class="emailsarr" name="emailsarr" value="strelkinvi@gmail.com">
	
	<script>var visitorCountry='russia';</script>
	<script type="text/javascript" src="main/plugins.js"></script>


<!-- Google Code for &#1079;&#1072;&#1103;&#1074;&#1082;&#1072; Conversion Page -->
<noscript>
&lt;div style="display:inline;"&gt;
&lt;img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/977473727/?label=v3XXCPqFsFkQv6GM0gM&amp;amp;guid=ON&amp;amp;script=0"/&gt;
&lt;/div&gt;
</noscript>
</body>
</html>