<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="og:url" content="https://jjoong1984.github.io/portfolio_02/">
    <meta property="og:image" content="images/logo.jpg">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="우리동네Play">
    <meta property="og:title" content="우리동네Play">
    <meta property="og:description" content="우리아이와 오늘 머하지? 채은아 놀자!">
    <title>우리동네Play</title>
    <link rel="shortcut icon" href="images/logo.ico">
    <link rel="apple-touch-icon" href="images/mobile_logo.png">
    <link rel="stylesheet" href="css/animate.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
    <link href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
</head>
<body>

    <?php
        session_start();
        if ( isset($_SESSION['userid']) ) { 
            $userid = $_SESSION['userid'];
            $username = $_SESSION['name']; 
        } else { $userid = ''; }
        
    ?>

    <header id="header">
        <h1 class="logo">
            <a href="index.php"><img src="images/logo.png" alt="로고"></a>
        </h1>
        <div class="lnb_menu">
            <span class="blind">메뉴열기</span>
            <a href="#"><i class="fas fa-bars"></i></a> 
        </div>
        <div class="wrap">
            <div class="lnb">
                <ul>
                    <?php if( !$userid ) { ?>
                        <li class="inBtn"><a href="login_form.php">
                            <i class="fas fa-sign-in-alt"></i>
                            <span>로그인</span></a></li>
                        <li class="inBtn"><a href="join.html">
                            <i class="fas fa-user-alt"></i>
                            <span>회원가입</span></a></li> 
                    <?php } else { ?>
                        <li class="inBtn">
                            <span>
                                <?php echo $username ?>님 환영합니다.
                            </span>
                        </li>                        
                        <li><a href="logout.php">
                            <i class="fas fa-sign-out-alt"></i>
                            <span>로그아웃</span></a></li>
                        <li><a href="#none">
                            <i class="fas fa-user-alt"></i>
                            <span>정보수정<span><a><li>                          
                    <?php } ?>    

                    <li class="menuBtn"><a href="kidsCafe.html" id="kidsCafe">
                        <i class="fas fa-futbol"></i>
                        <span>키즈카페</span></a></li>
                    <li class="menuBtn"><a href="park.html" id="park">
                        <i class="fab fa-telegram-plane"></i>
                        <span>공원</span></a></li>
                    <li class="menuBtn"><a href="exhibition.html" id="exhibition">
                        <i class="fas fa-seedling"></i>
                        <span>전시장</span></a></li>
                    <li class="menuBtn"><a href="studio.html" id="studio">
                        <i class="fas fa-camera"></i>
                        <span>사진관</span></a></li>
                </ul>
                <div class="lnb_close">
                    <span class="blind">메뉴닫기</span>
                    <i class="fas fa-times-circle"></i>
                </div>
            </div>
        </div>
    </header>

    <section id="container">
        <div id="content" class="loginContent">
            <div class="mainTit">
                <div class="prev">
                    <span class="blind">이전페이지이동</span>
                    <a href="index.php"><i class="fas fa-arrow-left"></i></a>
                </div>
                <h2>로그인</h2>
            </div>
            <form name="login_form" method="post" action="login.php">
                <fieldset>
                    <legend>로그인</legend>
                        <input type="text" name="id" id="id" placeholder="아이디 입력" required>
                        <input type="password" name="pass" id="pass" placeholder="비밀번호 입력" required>
                </fieldset>
                <div class="btn">
                    <button type="button" onclick="login_check()">로그인</button>
                    <button type="button"><a href="join.html">회원가입</a></button>
                </div>
            </form>
        </div>
    </section>

    <footer id="footer">
        <div class="home">
            <a href="index.php">
                <div class="menuBtn">
                    <i class="fas fa-home"></i>
                    <p>홈</p>
                </div>
            </a>
        </div>
        <div class="map">
            <a href="map.html">
                <div class="menuBtn">
                    <i class="fas fa-map-marker-alt"></i>
                    <p>지도</p>
                </div>
            </a>
        </div>
        <div class="login">
            <a href="login_form.php">
                <div class="menuBtn">
                    <i class="fas fa-user-alt"></i>
                    <p>로그인</p>
                </div>
            </a>
        </div>
    </footer>

    <div class="onlyMobile">
        <div>
            <img src="images/onlyMoblie.png" alt="공룡이미지">
            <span>이 사이트는 768px 이하에서만 보입니다.</span>
        </div>
    </div>

    <script src="js/main.js"></script>
    
</body>
</html>