```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style type="text/css">
			#container {
				width: 200px;
				height: 200px;
				margin: 200px auto;
			}
			.box {
				display: none;
			}
			.box+label {
				border: 1px solid #DDD;
				background-color: white;
				border-radius: 50%;
				display: inline-block;
				position: relative;
				width: 25px;
				height: 25px;
			}
			.box:checked+label:after {
				content: '\2714';
				position: absolute;
				color: white;
				border-radius: 50%;
				top: 1px;
				left: 5px;
				width: 100%;
				height: 100%;
			}
			.box:checked+label {
				background: #C7091D;
			}
		</style>
	</head>

	<body>

		<div id="container">
			<input type="checkbox" name="" id="ck" value="" class="box" />
			<label for="ck"></label>
			<input type="checkbox" name="" id="ck1" value="" class="box" />
			<label for="ck1"></label>
			<input type="checkbox" name="" id="ck2" value="" class="box" />
			<label for="ck2"></label>
		</div>
		<script src="js/jquery.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript">
                      //jquery实现
			$("label").each(function(index, ele) {
				$(ele).click(function() {
				var pi = $(ele).prev("input").attr("id");
				if(!$("#"+pi).is(':checked')) {
					$(".box").not($("#"+pi)).each(function(i, e) {
					   $(e).prop("checked", false);
					});
				}
			   })
			});
                      //原生JS实现
			var labelArr = document.querySelectorAll("label");
			var box = document.querySelectorAll(".box");
			for(var i = 0; i < labelArr.length; i++) {
				labelArr[i].onclick = function() {
					if(!this.previousElementSibling.checked) {
						for(var j = 0; j < box.length; j++) {
							if(box[j].getAttribute("id") != this.previousElementSibling.getAttribute("id")) {
								box[j].checked = false;
							}
						}
					}
				}
			}
		</script>
	</body>

</html>
```
