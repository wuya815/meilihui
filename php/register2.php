<?php
	require 'conn.php';
	error_reporting(0);
	if(isset($_POST['$pnum']) || isset($_POST['submit'])){
		$phoned=@$_POST['$pnum'];
	}else{
		exit('非法操作');
	};
	mysql_query("insert register value(xuxu,1234567,13100000000)");
	$query2="select * from register where phonenum='$phoned'";
	$result1=mysql_query($query2);
	if(mysql_fetch_array($result1)){
		echo true;
	}else{
		echo false;
	}

?>