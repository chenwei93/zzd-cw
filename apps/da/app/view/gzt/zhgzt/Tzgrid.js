Ext.define('DA.view.gzt.zhgzt.Tzgrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'tzgrid',


    store: {
        type: 'alldb'
    },
    scrollable: true,
    controller: 'zhgzt',
    columns: [{
        text: '最新信息',
        dataIndex: 'title',
        renderer: function (value) {
            function randomHexColor() { //随机生成十六进制颜色
                return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
            }

            var color = randomHexColor(),
                html = '<em style="background-color: ' + color + '" class="bd"></em>';
            return html + value

        },
        flex: 1
    }],
    listeners: {
        render: function () {
            // this.getStore().filterBy(function (record) {
            //     var person = record.get('person'),
            //         title = record.get('title'),
            //         event_status = record.get('event_status'),
            //         type = record.get('type');
            //         // name = Ext.app.ViewController.LOGIN_USER.name;
            //     if (person != null && title != null) {
            //         if ( event_status == 'undone') {
            //             if (type == 'workOrder') {
            //                 return true
            //             }
            //         }
            //     }
            // });
        },
        rowdblclick: 'onDBClick'
    }
});
