```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Response</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
		<link rel="stylesheet" href="//cdn.bootcss.com/font-awesome/4.3.0/css/font-awesome.min.css">
		<style type="text/css">
			html,
			body {
				line-height: 1.75em;
				position: relative;
				font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "WenQuanYi Micro Hei", "Microsoft YaHei UI", "Microsoft YaHei", sans-serif;
			}
			
			.main-navigation {
				text-align: center;
				background: #ffffff;
				border-top: 1px solid #ebebeb;
				margin-bottom: 35px;
				border-bottom: 2px solid #e1e1e1;
			}
			
			.main-navigation .menu {
				padding: 0;
				margin: 0;
			}
			
			.main-navigation .menu li {
				list-style: none;
				display: inline-block;
				position: relative;
			}
			
			.main-navigation .menu li.nav-current {
				border-bottom: 2px solid #e67e22;
				margin-bottom: -2px;
			}
			
			.main-navigation .menu li a {
				color: #505050;
				line-height: 4em;
				display: block;
				padding: 0 21px;
			}
			
			.main-navigation .menu li:hover> a {
				color: #e67e22;
				text-decoration: none;
			}
			
			.main-navigation .menu li ul {
				visibility: hidden;
				background: #ffffff;
				text-align: left;
				padding: 7px 0px;
				margin: 0;
				position: absolute;
				left: 0;
				top: 120%;
				width: 200px;
				z-index: 999;
				opacity: 0;
				filter: alpha(opacity=0);
				-webkit-transition: all 0.2s ease;
				-o-transition: all 0.2s ease;
				transition: all 0.2s ease;
			}
			
			.main-navigation .menu li ul li {
				display: block;
				margin: 0;
			}
			
			.main-navigation .menu li ul li a {
				line-height: 2.5em;
				color: #505050;
			}
			
			.main-navigation .menu li ul:hover> a {
				color: #e67e22;
			}
			
			.main-navigation .menu li:hover ul {
				visibility: visible;
				opacity: 1;
				filter: alpha(opacity=100);
				top: 100%;
			}
			
			@media (max-width: 767px) {
				.main-navigation {
					text-align: left;
				}
				.main-navigation .menu li {
					display: block;
				}
				.main-navigation .menu li:hover> a {
					color: #e67e22;
					text-decoration: none;
				}
				.main-navigation .menu li ul {
					visibility: visible;
					padding: 0px 0px 0px 20px;
					margin: 0;
					position: relative;
					top: 0;
					width: 100%;
					opacity: 1;
					filter: alpha(opacity=100);
				}
			}
			/* navbar */
			
			.navbar-header {
				text-align: center;
			}
			
			.navbar-header i {
				height: 56px;
				line-height: 56px;
				font-size: 2em;
				cursor: pointer;
			}
			
			@media (min-width: 768px) {
				.nav-toggle-button {
					display: none;
				}
			}
		</style>
	</head>
	<body>
		<nav class="main-navigation">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<div class="navbar-header">
							<span class="nav-toggle-button collapsed" data-toggle="collapse" data-target="#main-menu">
						<i class="fa fa-bars"></i>
						</span>
						</div>
					</div>
					<div class="collapse navbar-collapse" id="main-menu">
						<ul class="menu">
							<li class="nav-current" role="presentation">
								<a href="/">首页</a>
							</li>
							<li role="presentation">
								<a href="http://wenda.ghostchina.com">论坛</a>
							</li>
						</ul>
					</div>
				</div>

			</div>
		</nav>
		<script src="js/jquery-1.11.1.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/bootstrap.js" type="text/javascript" charset="utf-8"></script>
	</body>

</html>
```
