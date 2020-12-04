<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>아이디 중복체크</title>
    <style>
        body { background:#fcc232; color:#fff }
        h3,p,#close_btn { text-align: center;}
        button { background:none; border:1px solid #fff; color:#fff; padding:5px 15px; font-weight:bold;  }
        span { font-size:20px; font-weight:bold; }
    </style>
</head>
<body>
    <h3>아이디 중복체크</h3>

    <?php
    $id = $_GET['id'];
    if ( !$id ) { 
        echo ("<p>아이디를 입력해 주세요.");
    } else { 
        $con = mysqli_connect('localhost', 'jjoong1984', 'wjdwnd22!', 'jjoong1984');
        $sql = "select * from asanmember where id='$id'";
        $result = mysqli_query($con, $sql);

        $num_record = mysqli_num_rows($result);
        if ( $num_record ) { 
            echo "<p><span>".$id."</span> ID는 중복됩니다.</p>";
            echo "<p>다른 ID를 사용해 주세요.</p>";
        } else { 
            echo "<p><span>".$id."</span> ID는 사용 가능합니다.</p>";
        }
        
        mysqli_close($con);
    }


    ?>
<div id="close_btn">
   <button type="button" onclick="window.close()">닫기</button>
</div>

    
</body>
</html>