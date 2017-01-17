<?php
header('Access-Control-Allow-Origin:*');

$con = new mysqli("localhost","root","root","testpage");
$type = $_GET["type"];
if($type=="getData"){
	$currentPage=$_GET["cp"];
	$cp=($currentPage-1)*10;
	$sql="SELECT * FROM page ORDER By id limit $cp,10";
	 $result = $con->query($sql);
	$users=array(); 
	 $i=0; 
	 while($r=mysqli_fetch_array($result,MYSQL_ASSOC)){ 
	 		 $users[$i]=$r; 
	 		 $i++; 
	   } 
	$result = $con->query("SELECT  count(*) as count FROM page");
	$total=mysqli_fetch_row($result);

	 echo json_encode(array('status'=>0,'total'=>intval($total[0]),'currentpage'=>intval($currentPage),'dataList'=>$users)); 
	 $result->free();
}else if($type == "add"){
	$name = $_GET["name"];
	$age = $_GET['age'];
	$sql = "INSERT INTO page(name,age) VALUES ('$name','$age')";
	$result = $con->query($sql);
	echo $result;
} else if($type == "delete"){
	$id = $_GET['id'];
	$sql = "DELETE FROM page WHERE id = '$id'";
	$result = $con->query($sql);
	echo $result;
}
mysqli_close($con);
?>