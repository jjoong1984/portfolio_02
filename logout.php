<?php

session_start(); // 세션상태를 확인
unset($_SESSION['userid']); 
unset($_SESSION['username']);

echo ("
    <script>
        location.href = 'index.php' 
    </script>
");

?>