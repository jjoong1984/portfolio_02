(function($){ 

    $('body').on('click', '#header h1 a ,#footer .home a, #footer .map a, .mainTit .prev a, .contentBox .photo a, .contentBox .txt a', function(e){ 
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
                newContent += `<li><div class="photo"><a href="${useData[part][i].url}"><img src="${useData[part][i].photo}" alt="카페사진"></a></div>`
                newContent += `<div class="txt"><h3><a href="${useData[part][i].url}">${useData[part][i].name}</a></h3>`
                newContent += `<p>${useData[part][i].depart}</p>`
                newContent += `<p>${useData[part][i].info}</p></div></li>`
            }
            $('#content .contentBox').html('<ul>'+newContent+'</ul>')
        })
    })

    $('#header .lnb a').on('click', function(e){ 
        e.preventDefault()
        var url = this.href
        var part = this.id
        $('#container > #content').remove()
        $('#container').load(url + " #content", function(){ 
            var newContent = '';
            for(var i in useData[part]) { 
                newContent += `<li><div class="photo"><a href="${useData[part][i].url}"><img src="${useData[part][i].photo}" alt="카페사진"></a></div>`
                newContent += `<div class="txt"><h3><a href="${useData[part][i].url}">${useData[part][i].name}</a></h3>`
                newContent += `<p>${useData[part][i].depart}</p>`
                newContent += `<p>${useData[part][i].info}</p></div></li>`
            }
            $('#content .contentBox').html('<ul>'+newContent+'</ul>')
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



})(jQuery)