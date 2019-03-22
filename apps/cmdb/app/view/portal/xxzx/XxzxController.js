Ext.define('Cmdb.view.portal.xxzx.XxzxController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.xxzx',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onNewMessage: function () {
        this.open({
            xtype: 'xxzx-edit'
        }, {
            title: '新增',
            width: 800,
            height: 400
        })
    },
    onSure: function (btn) {
        var store = this.getView().getStore(),
            formView = btn.up('xxzx-edit'),
            formValue = formView.getValues();
        formValue.c_time = Date.now();
        formValue.pre_person = Ext.app.ViewController.LOGIN_USER.name;
        store.load();
        store.add(formValue);
        store.sync();
        // var data = {
        //     title: formValue.title,
        //     event_type: [],
        //     needType: null,
        //     now_person: formValue.nextperson,
        //     pre_person: Ext.app.ViewController.LOGIN_USER.name,
        //     c_time: Date.now(),
        //     status: null,
        //     tabId: Ext.$id(),
        //     type: 'db'
        // };
        // var db = Ext.create('Cmdb.model.Wddb', data);
        formValue.person = formValue.nextperson;
        formValue.type = 'message';
        formValue.tabId = Ext.$id();
        formValue.event_status = 'undone';
        var alldb = Ext.create('Cmdb.model.AllDb', formValue);
        // db.save();
        alldb.save();
        btn.up('window').close()
    },
    onCancel: function (btn) {
        btn.up('window').close()
    },
    onRowDblclick: function (a, record) {
        this.open({
            xtype: 'xxzx-show',
            record:record,
            viewModel:{
                data:{
                    show:record
                }
            }
        },{
            title:'查看消息',
            width: 800,
            height: 400
        })
    }
});