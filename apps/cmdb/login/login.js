(function () {
    var btn = $('.loginbtn');
    btn.click(function () {
        var pwd = $('#pwd')[0].value,
            user = $('#user')[0].value;

        if (user == '' && pwd == '') {
            alert('请输入用户名、密码。')
        } else if (user != '' && pwd == '') {
            alert('请输入密码。')
        } else if (user == '' && pwd != '') {
            alert('请输入用户名。')
        } else if (user != '' && pwd != '') {
            // location.replace(location.href.replace('login/login.html', 'index.html'));
            if (user == 'chenw' || user == 'wangs' || user == 'mozs' || user == 'fangr') {
                location.replace(location.href.replace('login/login.html', '?user=' + user));
            } else {
                alert('用户名或密码不正确');
            }
        }
    });
})(jQuery);
