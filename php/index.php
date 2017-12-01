<?php
	require 'conn.php';
	$query="select * from product";
	$result=mysql_query($query);
	$arr;
	$j=0;
	for($i=0;$i<mysql_num_rows($result);$i++){
		$arr[$j++]=mysql_fetch_array($result,MYSQL_ASSOC);
	}
	echo json_encode($arr)
?>