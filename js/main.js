(function($){ 

    $('body').on('click', '#header h1 a, #footer .home a, #footer .map a, .mainTit .prev a, .contentBox .photo a, .contentBox .txt a, .loginContent button a, #header .inBtn a', function(e){ 
        e.preventDefault()
        var url = this.href
        $('#container > #content').remove()
        $('#container').load(url + " #content")
    })

    var useData;
    $.ajax ({ 
        type:'GET',
        url : 'data/kids.json',
        beforeSend : function(xhr){ 
           if (xhr.overrideMimeType) { 
               xhr.overrideMimeType('application/json')
           }
        },
        success : function(data){ 
            useData = data
        },
        error : function(){ 
            alert(xhr.status + '오류발생')
        }
    })


    $('#container').on('click', '.mainMenu a, .mapContent .prev a', function(e){ 
        e.preventDefault()
        var url = this.href
        var part = this.id
        $('#container > #content').remove()
        $('#container').load(url + " #content", function(){ 
            var newContent = '';
            for(var i in useData[part]) { 
                newContent += `<li><div class="photo"><a href="${useData[part][i].url}" id="${useData[part][i].map}"><img src="${useData[part][i].photo}" alt="카페사진"></a></div>`
                newContent += `<div class="txt"><h3><a href="${useData[part][i].url}" id="${useData[part][i].map}">${useData[part][i].name}</a></h3>`
                newContent += `<a href="${useData[part][i].url}" id="${useData[part][i].map}"><p>${useData[part][i].depart}</p></a>`
                newContent += `<a href="${useData[part][i].url}" id="${useData[part][i].map}"><p>${useData[part][i].info}</p></a></div></li>`
            }
            $('#content .contentBox').html('<ul>'+newContent+'</ul>')
        })
    })

    $('#header .menuBtn a').on('click', function(e){ 
        e.preventDefault()
        var url = this.href
        var part = this.id
        $('#container > #content').remove()
        $('#container').load(url + " #content", function(){ 
            var newContent = '';
            for(var i in useData[part]) { 
                newContent += `<li><div class="photo"><a href="${useData[part][i].url}" id="${useData[part][i].map}"><img src="${useData[part][i].photo}" alt="카페사진"></a></div>`
                newContent += `<div class="txt"><h3><a href="${useData[part][i].url}" id="${useData[part][i].map}">${useData[part][i].name}</a></h3>`
                newContent += `<a href="${useData[part][i].url}" id="${useData[part][i].map}"><p>${useData[part][i].depart}</p></a>`
                newContent += `<a href="${useData[part][i].url}" id="${useData[part][i].map}"><p>${useData[part][i].info}</p></a></div></li>`
            }
            $('#content .contentBox').html('<ul>'+newContent+'</ul>')
        })
    })

    $('body').on('click', '.contentBox .photo a, .contentBox .txt a', function(e){ 
        e.preventDefault()
        var url = this.href
        var part = this.id
        var index = $(this).parents('li').index()
        $('#container > #content').remove()
        $('#container').load(url + " #content", function(){ 
            var newContent = '';
            newContent += `<iframe src="${useData[part][index].map}" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            <div class="address"><i class="fas fa-map-marker-alt"></i>`
            newContent += `<span>${useData[part][index].address}</span></div>`
            $('#content .contentBox').html(newContent)
        })
    })


    $('.lnb_menu').on('click', function(e){ 
        e.preventDefault()
        $(this).next().css({ 
            display:'block'
        })
        $('.lnb').stop().animate({
            right:'0'
        },300)
    })

    $('.lnb_close, #header .wrap').on('click', function(){ 
        $('.lnb').stop().animate({
            right:'-200px'
        },300, function(){ 
            $(this).parents('.wrap').css({
                display:'none'
            })
        })
    })

    $('#container').on('click','.PersonalInfo a:nth-child(1)', function(e){ 
        e.preventDefault()
        $('.personal').stop().animate({
            height:'100%'
        },300)
    })
    $('#container').on('click','.PersonalInfo a:nth-child(2)', function(e){ 
        e.preventDefault()
        $('.terms').stop().animate({
            height:'100%'
        },300)
    })

    $('#container').on('click','.info_close', function(){ 
        $('.infoClose').stop().animate({
            height:'0%'
        },300)
    })

    // 터치무브 이벤트
    $('#container').on('touchstart', '.touch_box > ul', function(){ 
        $(this).find('img').css({
            transform:'scale(1.1)'
        })
    }).on('touchmove', '.touch_box > ul', function(){ 
        $(this).stop().animate({ 
            marginLeft : '-25%'
        },500, function(){ 
            $(this).appendTo('.touch_box').css({
                marginLeft : '0%'
            })
        })
    }).on('touchend', '.touch_box > ul', function(){ 
        $(this).find('img').css({
            transform:'scale(1)'
        })
    })

})(jQuery)


// 회원가입 유효성 검사
function join_check() { 
    if( !document.join_form.id.value ) { 
        alert('아이디를 입력하세요.')
        document.join_form.id.focus()
        return false
    }
    if( !document.join_form.pass.value ) { 
        alert('비밀번호를 입력하세요.')
        document.join_form.pass.focus()
        return false
    }
    if( !document.join_form.passok.value ) { 
        alert('비밀번호를 확인하세요.')
        document.join_form.passok.focus()
        return false
    }
    if( !document.join_form.name.value ) { 
        alert('이름을 입력하세요.')
        document.join_form.name.focus()
        return false
    }
    if( !document.join_form.tel.value ) { 
        alert('전화번호를 입력하세요.')
        document.join_form.tel.focus()
        return false
    }
    if ( document.join_form.pass.value !== document.join_form.passok.value) { 
        alert('비밀번호가 일치하지 않습니다.')
        document.join_form.pass.focus()
        return false
    }
    document.join_form.submit()

}

function id_check() { 
    window.open('id_check.php?id='+document.join_form.id.value, '', "width=350, height=200, left=1200, top=100, scrollbars=no, resizable=yes")
}

function login_check() { 

    if( !document.login_form.id.value ) { 
        alert('아이디를 입력하세요.')
        document.login_form.id.focus()
        return false
    }
    if( !document.login_form.pass.value ) { 
        alert('비밀번호를 입력하세요.')
        document.login_form.pass.focus()
        return false
    }
    document.login_form.submit()
}
