<?php

$id = $_POST['id'];
$pass = $_POST['pass'];

$con = mysqli_connect('localhost', 'jjoong1984', 'wjdwnd22!', 'jjoong1984');
$sql = "select * from asanmember where id='$id'";
$result = mysqli_query($con, $sql);

$num_match = mysqli_num_rows($result);

if( !$num_match ) { //history.go() 작동이 되려면 이전페이지의 문서구조가 완변한구조(헤어 바디등 포함)여야한다.
    echo ("
        <script>
            alert('등록되지 않은 아이디입니다.')
            history.go(-1) 
        </script>
    ");
    exit;
} else { 
    // $result에 담긴 레코드의 필드를 배열로 만듬 : mysqli_fetch_array()
    $row = mysqli_fetch_array($result); 
    $db_pass = $row['pass'];
    mysqli_close($con);

    if ( $pass !== $db_pass) { 
        echo("
            <script>
                alert('비밀번호가 틀립니다!')
                history.go(-1)
            </script>
        ");
        exit;
    } else { 
        // session : 대화 처리로 이용자가 단말을 사용하기 시작하고부터 사용이 끝나기까지를 말함.
        // 즉, login 명령을 입력하고부터 logout 명령을 입력하기까지의 사이를 말함
        session_start();  // 세션을 활성화됨
        $_SESSION['userid'] = $row['id'];
        $_SESSION['name'] = $row['name'];
        echo ("
            <script>
                location.href = 'index.php'
            </script>
        ");
    }

} 

?>