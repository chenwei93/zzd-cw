Ext.define('Cmdb.view.portal.zhgzt.Dbgrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'dbgrid',


    requires: [
        'Cmdb.view.portal.zhgzt.ZhgztController',
        'Cmdb.view.portal.zhgzt.ZhgztModel'
    ],
    store: {
        type: 'alldb'
    },
    scrollable: true,
    controller: 'zhgzt',
    reference: 'zhgzt',
    columns: [{
        text: '待办事项',
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
            this.getStore().filterBy(function (record) {
                if (record.get('person') != null && record.get('title') != null) {
                    if (record.get('person').indexOf(Ext.app.ViewController.LOGIN_USER.name) >= 0 && record.get('event_status') == 'undone') {
                        if (record.get('type') != 'workOrder' && record.get('type') != 'message') {
                            return true

                        }
                    }
                }
            });

        },
        rowdblclick: 'onDBClick'
    }
});