(function () {
    var init = function () {
        setUserPassword();
        login();
    };

    //登录
    var login = function () {
        var loginbtn = $('.formBtn');
        loginbtn.on('click', function () {
            var user = $('.user').val(),
                password = $('.password').val();
            judeLogin(user, password);
        });
    };

    //根据用户名密码判断是否登录
    var judeLogin = function (user, password) {
        var arr = {
            user: {
                value: user,
                title: '用户名'
            },
            password: {
                value: password,
                title: '密码'
            }
        }, msg = [], jude = true;
        for (var i in arr) {
            if (arr[i].value == '') {
                jude = false;
                msg.push(arr[i].title);
            }
        }
        if (jude) {
            rememberPassword(user, password);
            location.href = '../dashboard/index.html';
        } else {
            alert(msg.join(',') + '不能为空');
        }
    };

    //记住密码
    var rememberPassword = function (user, password) {
        var rember = $('.formCheck')[0].checked;
        if (rember) {
            setCookie('user', user, 365);
            setCookie('pwd', password, 365);
        }
    };

    //设置cookie
    var setCookie = function (name, value, day) {
        var date = new Date();
        date.setDate(date.getDate() + day);
        document.cookie = name + '=' + value + ';expires=' + date;
    };

    //获取cookie
    var getCookie = function (name) {
        var reg = RegExp(name + '=([^;]+)'),
            arr = document.cookie.match(reg);
        if (arr) {
            return arr[1];
        } else {
            return '';
        }
    };

    //setUserPassword
    var setUserPassword = function () {
        if (getCookie('user') && getCookie('pwd')) {
            $('.user').val(getCookie('pwd'));
            $('.password').val(getCookie('user'));
        }
    };

    init();
})();
