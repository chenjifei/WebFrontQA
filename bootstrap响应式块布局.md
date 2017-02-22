```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
		<link rel="stylesheet" href="//cdn.bootcss.com/font-awesome/4.3.0/css/font-awesome.min.css">
		<style type="text/css">
			html,
			body {
				color: #505050;
				line-height: 1.75em;
				background: #ebebeb;
				position: relative;
				font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "WenQuanYi Micro Hei", "Microsoft YaHei UI", "Microsoft YaHei", sans-serif;
			}
			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				font-weight: 400;
				color: #303030;
			}
			h1 {
				font-size: 3em;
			}
			h2 {
				font-size: 2.5em;
			}
			h3 {
				font-size: 2em;
			}
			h4 {
				font-size: 1.5em;
			}
			h5 {
				font-size: 1em;
			}
			h6 {
				font-size: 0.75em;
			}
			a {
				color: #e67e22;
				outline: none;
			}
			a:hover {
				color: #e67e22;
			}
			a:active,
			a:focus,
			a img {
				outline: none;
			}
			.btn {
				padding: 7px 14px;
				border-radius: 2px;
			}
			.btn-default {
				border: 1px solid #e67e22;
				background: #e67e22;
				color: #ffffff;
				-webkit-transition: all 0.2s ease-in-out;
				-o-transition: all 0.2s ease-in-out;
				transition: all 0.2s ease-in-out;
			}
			.btn-default:hover {
				border: 1px solid #303030;
				background: #303030;
				color: #ffffff;
			}
			.btn-default:focus {
				outline: none;
			}
			.btn-default[disabled] {
				border: 1px solid #303030;
				background: #303030;
				color: #ffffff;
			}
			input[type="search"],
			input[type="text"],
			input[type="url"],
			input[type="email"],
			textarea {
				padding: 7px 7px;
				border: 1px solid #ebebeb;
				border-radius: 2px;
				-webkit-transition: all 0.2s;
				-o-transition: all 0.2s;
				transition: all 0.2s;
			}
			input[type="search"]:focus,
			input[type="text"]:focus,
			input[type="url"]:focus,
			input[type="email"]:focus,
			textarea:focus {
				border: 1px solid #e67e22;
				outline: none;
			}
			blockquote {
				border-left: 4px solid #e67e22;
			}
			pre {
				padding: 0;
				background: none;
				border: none;
			}
			::-moz-selection {
				color: #ffffff;
				background: #e67e22;
				text-shadow: none;
			}
			::selection {
				color: #ffffff;
				background: #e67e22;
				text-shadow: none;
			}
			/* post */
			.post {
				padding: 35px;
				background: #ffffff;
				margin-bottom: 35px;
				position: relative;
				overflow: hidden;
			}
			
			.post .featured {
				position: absolute;
				background: #e67e22;
				color: #ffffff;
				text-align: center;
				top: -12px;
				right: -32px;
				width: 80px;
				height: 40px;
				line-height: 54px;
				-webkit-transform: rotate(45deg);
				-ms-transform: rotate(45deg);
				-o-transform: rotate(45deg);
				transform: rotate(45deg);
			}
			.post .featured i {
				-webkit-transform: rotate(-45deg);
				-ms-transform: rotate(-45deg);
				-o-transform: rotate(-45deg);
				transform: rotate(-45deg);
			}
			.post .post-head {
				text-align: center;
			}
			.post .post-head .post-title {
				margin: 0;
				font-size: 2.5em;
				line-height: 1em;
			}
			.post .post-head .post-title a {
				color: #303030;
			}
			.post .post-head .post-title a:hover,
			.post .post-head .post-title a:focus {
				text-decoration: none;
			}
			.post .post-head .post-meta {
				color: #959595;
				margin: 14px 0 0px;
			}
			.post .post-head .post-meta span {
				margin: 0px 7px;
				white-space: nowrap;
			}
			.post .featured-media {
				margin-top: 30px;
				overflow: hidden;
			}
			.post .featured-media img {
				width: 100%;
			}
			.post .post-content {
				margin: 30px 0;
			}
			.post .post-footer {
				margin-top: 30px;
				border-top: 1px solid #ebebeb;
				padding: 21px 0 0;
			}
			.post .post-footer .tag-list {
				color: #959595;
				line-height: 28px;
			}
			.post .post-footer .tag-list a {
				color: #959595;
				margin-left: 7px;
			}
			.post .post-footer .tag-list a:hover {
				color: #e67e22;
			}
			/* post content */
			.post-content {
				font: 400 18px/1.62 "Georgia", "Xin Gothic", "Hiragino Sans GB", "Droid Sans Fallback", "Microsoft YaHei", sans-serif;
				color: #444443;
			}
			.post-content h1,
			.post-content h2,
			.post-content h3,
			.post-content h4,
			.post-content h5,
			.post-content h6 {
				font-family: "Georgia", "Xin Gothic", "Hiragino Sans GB", "Droid Sans Fallback", "Microsoft YaHei", "SimSun", sans-serif;
				color: #222223;
			}
			.post-content h1 {
				font-size: 1.8em;
				margin: 0.67em 0;
			}
			.post-content> h1 {
				margin-top: 0;
				font-size: 2em;
			}
			.post-content h2 {
				font-size: 1.5em;
				margin: 0.83em 0;
			}
			.post-content h3 {
				font-size: 1.17em;
				margin: 1em 0;
			}
			.post-content h4,
			.post-content h5,
			.post-content h6 {
				font-size: 1em;
				margin: 1.6em 0 1em 0;
			}
			.post-content h6 {
				font-weight: 500;
			}
			
			.post-content p {
				margin-top: 0;
				margin-bottom: 1.46em;
			}
			.post-content a {
				word-wrap: break-word;
				-moz-text-decoration-color: rgba(0, 0, 0, 0.4);
				text-decoration-color: rgba(0, 0, 0, 0.4);
			}
			.post-content a:hover {
				-moz-text-decoration-color: rgba(0, 0, 0, 0.6);
				text-decoration-color: rgba(0, 0, 0, 0.6);
			}
			.post-content a img {
				/* Remove border on IE */
				border: none;
			}
			.post-content strong,
			.post-content b {
				font-weight: 700;
				color: #222223;
			}
			.post-content em,
			.post-content i {
				font-style: italic;
				color: #222223;
			}
			.post-content img {
				max-width: 100%;
				height: auto;
				margin: 0.2em 0;
			}
			.post-content figure {
				position: relative;
				clear: both;
				outline: 0;
				margin: 10px 0 30px;
				padding: 0;
				min-height: 100px;
			}
			.post-content figure img {
				display: block;
				max-width: 100%;
				margin: auto auto 4px;
				-moz-box-sizing: border-box;
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
			}
			.post-content figure figcaption {
				position: relative;
				width: 100%;
				text-align: center;
				left: 0;
				margin-top: 10px;
				font-weight: 400;
				font-size: 14px;
				color: #666665;
			}
			.post-content figure figcaption a {
				text-decoration: none;
				color: #666665;
			}
			.post-content hr {
				display: block;
				width: 50%;
				height: 1px;
				border: 0 none;
				border-top: #dededc 1px solid;
				margin: 3.2em auto;
				padding: 0;
			}
			.post-content blockquote {
				margin: 0 0 1.64em 0;
				border-left: 3px solid #e67e22;
				padding-left: 12px;
				color: #666664;
			}
			.post-content blockquote a {
				color: #666664;
			}
			.post-content ul,
			.post-content ol {
				margin: 0 0 24px 6px;
				padding-left: 16px;
			}
			.post-content ul {
				list-style-type: square;
			}
			.post-content ol {
				list-style-type: decimal;
			}
			.post-content li {
				margin-bottom: 0.2em;
			}
			.post-content li ul,
			.post-content li ol {
				margin-top: 0;
				margin-bottom: 0;
				margin-left: 14px;
			}
			.post-content li ul {
				list-style-type: disc;
			}
			.post-content li ul ul {
				list-style-type: circle;
			}
			.post-content li p {
				margin: 0.4em 0 0.6em;
			}
			.post-content .unstyled {
				list-style-type: none;
				margin: 0;
				padding: 0;
			}
			.post-content code,
			.post-content tt {
				color: #808080;
				font-size: 0.96em;
				background-color: #f9f9f7;
				padding: 1px 2px;
				border: 1px solid #dadada;
				border-radius: 3px;
				font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
				word-wrap: break-word;
			}
			.post-content pre {
				margin: 1.64em 0;
				padding: 7px;
				border: none;
				border-left: 3px solid #dadada;
				padding-left: 10px;
				overflow: auto;
				line-height: 1.5;
				font-size: 0.96em;
				font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
				color: #4c4c4c;
				background-color: #f9f9f7;
			}
			.post-content pre code,
			.post-content pre tt {
				color: #4c4c4c;
				border: none;
				background: none;
				padding: 0;
			}
			.post-content table {
				width: 100%;
				max-width: 100%;
				border-collapse: collapse;
				border-spacing: 0;
				margin-bottom: 1.5em;
				font-size: 0.96em;
				-moz-box-sizing: border-box;
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
			}
			.post-content th,
			.post-content td {
				text-align: left;
				padding: 4px 8px 4px 10px;
				border: 1px solid #dadada;
			}
			.post-content td {
				vertical-align: top;
			}
			.post-content tr:nth-child(even) {
				background-color: #efefee;
			}
			.post-content iframe {
				display: block;
				max-width: 100%;
				margin-bottom: 30px;
			}
			.post-content figure iframe {
				margin: auto;
			}
			.post-content table pre {
				margin: 0;
				padding: 0;
				border: none;
				background: none;
			}
			@media (min-width: 1100px) {
				.post-content blockquote {
					margin-left: -24px;
					padding-left: 20px;
					border-width: 4px;
				}
				.post-content blockquote blockquote {
					margin-left: 0;
				}
				.post-content figure img {
					margin: 0 0 4px;
				}
				.post-content figure figcaption {
					position: absolute;
					left: -172px;
					width: 150px;
					top: 0;
					text-align: right;
					margin-top: 0;
				}
				.post-content figure figcaption:before {
					width: 25%;
					margin-left: 75%;
					border-top: 1px solid #dededc;
					display: block;
					content: "";
					margin-bottom: 10px;
				}
			}
			.windows .post-content {
				font-size: 16px;
				font-family: "Georgia", "SimSun", sans-serif;
			}
			/* pagination */
			
			.pagination {
				margin: 0 0 35px;
				text-align: center;
				display: block;
			}
			.pagination a {
				text-align: center;
				display: inline-block;
				color: #ffffff;
				background: #e67e22;
				border-radius: 2px;
			}
			.pagination a a:hover {
				background: #505050;
				text-decoration: none;
				color: #ffffff;
			}
			.pagination a i {
				width: 36px;
				height: 36px;
				line-height: 36px;
			}
			.pagination .page-number {
				background: #e67e22;
				color: #ffffff;
				margin: 0 3px;
				display: inline-block;
				line-height: 36px;
				padding: 0 14px;
				border-radius: 2px;
			}
			/* sidebar  aside*/
			
			.sidebar .widget {
				background: #ffffff;
				padding: 21px 30px;
			}
			
			.main-footer .widget {
				padding: 0px 30px;
			}
			
			.widget {
				margin-bottom: 35px;
			}
			
			.widget .title {
				margin-top: 0;
				padding-bottom: 7px;
				border-bottom: 1px solid #ebebeb;
				margin-bottom: 21px;
				position: relative;
			}
			
			.widget .title:after {
				content: "";
				width: 90px;
				height: 1px;
				background: #e67e22;
				position: absolute;
				left: 0;
				bottom: -1px;
			}
			
			.widget .recent-post .recent-single-post {
				border-bottom: 1px dashed #ebebeb;
				padding-bottom: 14px;
				margin-bottom: 14px;
			}
			
			.widget .recent-post .recent-single-post:last-child {
				margin-bottom: 0;
			}
			
			.widget .recent-post .recent-single-post .post-title {
				color: #505050;
				-webkit-transition: all 0.2s ease;
				-o-transition: all 0.2s ease;
				transition: all 0.2s ease;
			}
			
			.widget .recent-post .recent-single-post .post-title:hover {
				color: #e67e22;
				text-decoration: none;
			}
			
			.widget .recent-post .recent-single-post .date {
				color: #959595;
			}
			
			.widget .tag-cloud a {
				border: 1px solid #ebebeb;
				padding: 2px 7px;
				color: #959595;
				line-height: 1.5em;
				display: inline-block;
				margin: 0 7px 7px 0;
				-webkit-transition: all 0.2s ease;
				-o-transition: all 0.2s ease;
				transition: all 0.2s ease;
			}
			
			.widget .tag-cloud a:hover {
				color: #ffffff;
				background: #e67e22;
				border: 1px solid #e67e22;
				text-decoration: none;
			}
			
			.widget .social {
				padding: 0;
				margin: 0;
			}
			
			.widget .social li {
				display: inline-block;
				margin: 0 2px 5px 0;
				text-align: center;
			}
			
			.widget .social li a i {
				width: 35px;
				height: 35px;
				line-height: 35px;
				border: 1px solid #ebebeb;
				color: #959595;
				-webkit-transition: all 0.2s;
				-o-transition: all 0.2s;
				transition: all 0.2s;
			}
			
			.widget .social li:hover i {
				color: #ffffff;
				background: #e67e22;
				border: 1px solid #e67e22;
			}
			
			.widget .newsletter .input-group {
				margin-bottom: 10px;
				display: block;
			}			
			.widget .newsletter .input-group .email,
			.widget .newsletter .input-group btn {
				width: 100%;
			}
			.widget .ad {
				text-align: center;
			}		
			.widget .ad img {
				max-width: 100%;
			}
		</style>
	</head>
	<body>
		<section>
			<div class="container">
				<div class="row">
					<main class="col-md-8">
						<article id="92" class="post tag-about-ghost tag-release tag-ghost-0-7-ban-ben">

							<div class="post-head">
								<h1 class="post-title"><a href="/ghost-0-7-0-released/">Ghost 0.7.0 正式发布</a></h1>
								<div class="post-meta">
									<span class="author">作者：<a href="/author/wangsai/">王赛</a></span> •
									<time class="post-date" datetime="2015年9月7日星期一凌晨4点31分" title="2015年9月7日星期一凌晨4点31分">2015年9月7日</time>
								</div>
							</div>
							<div class="post-content">
								<p>Ghost 0.7.0 已经正式发布了！此版本主要对后台 UI 的重构，既包含重新设计，也包含底层功能的重大改进。0.7.0 还为即将到来的 API 做了很多铺垫工作。 Ghost 0.7.0 的主要改进 [新增] 设计新后台界面 [新增] 后台能够搜索博文和用户 [新增] 安</p>
							</div>
							<div class="post-permalink">
								<a href="/ghost-0-7-0-released/" class="btn btn-default">阅读全文</a>
							</div>
							<footer class="post-footer clearfix">
								<div class="pull-left tag-list">
									<i class="fa fa-folder-open-o"></i>
									<a href="/tag/about-ghost/">Ghost</a>,
									<a href="/tag/release/">新版本发布</a>,
									<a href="/tag/ghost-0-7-ban-ben/">Ghost 0.7 版本</a>
								</div>
								<div class="pull-right share">
								</div>
							</footer>
						</article>
						<article id="91" class="post tag-about-ghost tag-zhu-shou-han-shu tag-jquery">
							<div class="post-head">
								<h1 class="post-title"><a href="/no-more-jquery-in-ghost_foot-helper-of-ghost-0-7/">Ghost 0.7 中 {{ghost_foot}} 助手函数将不再输出 jQuery</a></h1>
								<div class="post-meta">
									<span class="author">作者：<a href="/author/wangsai/">王赛</a></span> •
									<time class="post-date" datetime="2015年8月29日星期六下午3点17分" title="2015年8月29日星期六下午3点17分">2015年8月29日</time>
								</div>
							</div>
							<div class="post-content">
								<p>{{ghost_foot}} 助手函数将不再输出 jQuery 链接了。 从 Ghost 第一个版本开始， {{ghost_foot}} 助手函数默认都会输出一个 jQuery 文件链接，并且这个文件还是本地存储的。最开始 Ghost 团队觉得这是一件对所有主题开发者有意义</p>
							</div>
							<div class="post-permalink">
								<a href="/no-more-jquery-in-ghost_foot-helper-of-ghost-0-7/" class="btn btn-default">阅读全文</a>
							</div>
							<footer class="post-footer clearfix">
								<div class="pull-left tag-list">
									<i class="fa fa-folder-open-o"></i>
									<a href="/tag/about-ghost/">Ghost</a>,
									<a href="/tag/zhu-shou-han-shu/">助手函数</a>,
									<a href="/tag/jquery/">jQuery</a>
								</div>
								<div class="pull-right share">
								</div>
							</footer>
						</article>
						<nav class="pagination" role="navigation">
							<span class="page-number">第 1 页 ⁄ 共 8 页</span>
							<a class="older-posts" href="/page/2/"><i class="fa fa-angle-right"></i></a>
						</nav>
					</main>
					<aside class="col-md-4 sidebar">
						<div class="widget">
							<h4 class="title">社区</h4>
							<div class="content community">
								<p>QQ群：277327792</p>
								<p>
									<a href="http://wenda.ghostchina.com/" title="Ghost中文网问答社区" target="_blank" onclick="_hmt.push(['_trackEvent', 'big-button', 'click', '问答社区'])"><i class="fa fa-comments"></i> 问答社区</a>
								</p>
								<p>
									<a href="http://weibo.com/ghostchinacom" title="Ghost中文网官方微博" target="_blank" onclick="_hmt.push(['_trackEvent', 'big-button', 'click', '官方微博'])"><i class="fa fa-weibo"></i> 官方微博</a>
								</p>
							</div>
						</div>
						<div class="widget">
							<h4 class="title">下载 Ghost</h4>
							<div class="content download">
								<a href="/download/" class="btn btn-default btn-block" onclick="_hmt.push(['_trackEvent', 'big-button', 'click', '下载Ghost'])">Ghost 中文版（0.7.4）</a>
							</div>
						</div>

						<div class="widget">
							<h4 class="title">标签云</h4>
							<div class="content tag-cloud">
								<a href="/tag/jquery/">jQuery</a>
								<a href="/tag/tag-cloud/">标签云</a>

								<a href="/tag-cloud/">...</a>
							</div>
						</div>
					</aside>
				</div>
			</div>
		</section>
		<script src="../js/jquery-1.11.1.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="../js/bootstrap.js" type="text/javascript" charset="utf-8"></script>
	</body>
</html>
```