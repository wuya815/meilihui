<?php  
	require 'conn.php';//引入数据库连接的文件。
	error_reporting(0);
	
 
//	if(isset($_POST['$name']) || isset($_POST['submit'])){
//		$username=@$_POST['$name'];
//	}else{
//		exit('非法操作');
//	}



	
	//register
	
	//点击了注册按钮,储存数据库
	if(isset($_POST['submit'])){
		$name=$_POST['username'];//表单的名称
		$pass=$_POST['password'];//表单的名称
		$phone=$_POST['phone'];//表单的名称
		//$yzm=$_POST['yanzheng'];//表单的名称
		$query1="select * from user where username='$name'";
		$result=mysql_query($query1);
		if(mysql_fetch_array($result)){
			
			echo '<script>alert("该用户已存在");window.location.href="../register.html"</script>';
		}else{
			$query="insert into user(username,password,phone) value('$name',MD5('$pass'),'$phone')";
			mysql_query($query);
			header("location:../login.html");
			echo false;
		};
		
	}
?>