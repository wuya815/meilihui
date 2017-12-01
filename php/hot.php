<?php
header('content-type:text/html;charset=utf-8');
	//1.连接数据库
	$conn=@mysql_connect('localhost','root','123456');//@:容错
	
	if(!$conn){
		die('数据库连接失败'.mysql_error());//mysql_error()：打印错误信息
	}
//	//2.选择数据库，设置字符编码
//	
	mysql_select_db('meilihui');
	mysql_query('SET NAMES UTF8');
	$query="select * from product";
	$result=mysql_query($query);//执行sql语句
	$arr=array();
	for($i=0;$i<mysql_num_rows($result);$i++){
		$arr[$i]=mysql_fetch_array($result);
	}
	echo json_encode($arr);
?>