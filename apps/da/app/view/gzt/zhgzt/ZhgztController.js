Ext.define('DA.view.gzt.zhgzt.ZhgztController', {
    extend: 'DA.base.ViewController',

    alias: 'controller.zhgzt',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onDBClick: function (a, record) {
        var type = record.get('type');

        if (type == 'db') {
            var tabId = record.get('tabId'),
                status = record.get('status');
            this.open({
                xtype: 'sqsh',
                listType: record.get('needType')
            }, {
                title: '处理',
                needTabId: tabId,
                needStatus: status,
                needRecord: record,
                needView: a.grid,
                width: 900,
                x: -100,
                y: -50,
                height: 620
            })
        } else {
            if (type == 'message') {
                var xtype = 'xxzx-show',
                    title = '查看消息';
            } else if (type == 'workOrder') {
                var xtype = 'cjgd-show',
                    title = '查看通知';
            }
            this.open({
                xtype: xtype,
                record: record,
                viewModel: {
                    data: {
                        show: record
                    }
                }
            }, {
                title: title,
                width: 800,
                height: 400,
            })
        }
    }
});
