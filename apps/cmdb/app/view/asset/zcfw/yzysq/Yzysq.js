Ext.define('Cmdb.view.asset.zcfw.yzysq.Yzysq', {
    extend: 'Ext.form.Panel',
    xtype: 'yzysq',


    requires: [
        'Cmdb.view.asset.zcfw.yzysq.YzysqController',
        'Cmdb.view.asset.zcfw.yzysq.zcqd',
    ],
    controller: 'yzysq',
    // layout: 'column',
    bodyPadding: 10,
    scrollable: true,
    // defaults: {
    //     margin: 5
    // },
    tbar: [{
        ui: 'default',
        iconCls: 'x-fa fa-save',
        text: '提交申请',
        handler: 'onSure'
    }, {
        ui: 'default',
        iconCls: 'x-fa fa-undo',
        text: '取消',
        handler: 'onCancel'
    }, '-', {
        ui: 'default',
        iconCls: 'x-fa fa-undo',
        text: '选择资产',
        handler: 'onChooseZc'
    }],
    // items: [{}],
    listeners: {
        render: function (view) {
            var type = view.up('window').needSQtype;
            console.log('yzysq-type:', type);
            if (type) {
                if (type == 'yzysq') {
                    var items = {
                        xtype: 'yzysq-form'
                    };
                } else if (type == 'sjzc') {
                    var items = {
                        xtype: 'sjbdsq-form'
                    };
                }
                view.add(items);
            }
        }
    }
});
