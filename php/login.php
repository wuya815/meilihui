<?php
require 'conn.php';

	if(isset($_POST['$name']) && isset($_POST['$pass'])){
		$username=@$_POST['$name'];
		$pass=@$_POST['$pass'];
	}else{
		exit('非法操作');
	};

$query="select * from user where username=$username and password=MD5('$pass')";
$result=mysql_query($query);
if(mysql_fetch_array($result)){
		echo true;
	}else{
		echo false;
		
	};


?>