<?php 
	header("Content-Type:application/json;charset=utf-8");
 	header("Access-Control-Allow-Origin:*");
 	 $data = array('a','b','c');//要返回的数据
 	 echo json_encode($data);//输出
 ?>