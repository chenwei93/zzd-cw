(function () {
    var init = function () {
        renderToolItems();
        toolItemClick();
        intoPerson();
    };
    //加载各应用
    var renderToolItems = function () {
        var toolItems = $('.toolItems'),
            toolArrs = [
                {
                    title: '资源普查',
                    icon: 'images/icons/接口.png',
                    color: ['rgb(176, 20, 27)', 'rgb(249, 77, 77)'],
                    url: 'http://localhost:1841/#portal'
                }, {
                    title: '资源目录',
                    icon: 'images/icons/数据治理.png',
                    color: ['rgb(227, 32, 157)', 'rgb(246, 87, 173)'],
                    url: 'http://localhost:1841/#dataservice'
                }, {

                    title: '日常工作',
                    icon: 'images/icons/数据目录.png',
                    color: ['rgb(23, 145, 207)', 'rgb(34, 200, 252)'],
                    url: 'http://localhost:1841/#da'

                }, {
                    title: '数据共享与开放管理',
                    icon: 'images/icons/数据开发.png',
                    color: ['rgb(41, 156, 127)', 'rgb(88, 221, 187)'],
                    url: 'http://localhost:1841/#dataopen'
                }, {
                    title: '数据服务',
                    icon: 'images/icons/ETL监控.png',
                    color: ['rgb(96, 62, 173)', 'rgb(127, 88, 223)'],
                    url: 'http://localhost:1841/#entry'
                }, {
                    title: '平台管理',
                    icon: 'images/icons/基础管理.png',
                    color: ['rgb(215, 131, 52)', 'rgb(252, 188, 66)'],
                    url: 'http://localhost:1841/#mgr'

                }];
        toolArrs.forEach((item, index, arr) => {
            var html = '<div class="toolItem"' +
                'style=" background:linear-gradient(to right,' + item.color[0] + ', ' + item.color[1] + ');"' +
                'data-url="' + item.url + '">' +
                '<img src="' + item.icon + '">' +
                '<p>' + item.title + '</p>' +
                '</div>';
            toolItems.append(html);
        });
    };

    //点击事件链接
    var toolItemClick = function () {
        var toolItem = $('.toolItem');
        toolItem.on('click', function () {
            var url = $(this).attr('data-url');
            if (url.indexOf('http://') < 0){
                console.info(url);
                window.location.href = url;
            }
            else {
                window.open(url);
           }
        });
    };

    var intoPerson = function () {
        var person = $('.person');
        person.on('click', function () {
            location.href = 'http://localhost:1841/#portal'
        })
    };
    init()
})();
