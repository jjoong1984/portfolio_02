<!-- create table asanmember (
  num int not null auto_increment comment '일련번호',
  id char(10) not null comment '아이디',
  pass char(10) not null comment '비밀번호',
  name char(10) not null comment '이름',
  tel char(15) not null comment '전화번호',
  regist_day char(20) not null comment '가입일',
  primary key(num)   
)
desc asanmember -->


<?php
  
$id = $_POST['id'];
$pass = $_POST['pass'];
$name = $_POST['name'];
$tel = $_POST['tel'];
$regist_dat = date('Y-m-d');

$con = mysqli_connect('localhost', 'jjoong1984', 'wjdwnd22!', 'jjoong1984');
$sql = "insert into asanmember (id, pass, name, tel, regist_day) ";
$sql .= "values ('$id', '$pass', '$name', '$tel', '$regist_day')";

mysqli_query($con, $sql);
mysqli_close($con);

echo "
    <script>
        location.href = 'index.php';
    </script>
";

?>