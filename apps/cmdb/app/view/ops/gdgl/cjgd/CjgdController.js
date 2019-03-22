Ext.define('Cmdb.view.ops.gdgl.cjgd.CjgdController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.cjgd',
    onSure: function () {
        var form = this.getView(),
            formValue = form.getValues();
        var data = {
            y_title: formValue.title,
            event_type: [],
            needType: null,
            now_person: formValue.nextperson,
            pre_person: Ext.app.ViewController.LOGIN_USER.name,
            c_time: Date.now(),
            status: null,
            tabId: Ext.$id(),
            type: 'db'
        };
        formValue.c_time = Date.now();
        formValue.pre_person = Ext.app.ViewController.LOGIN_USER.name;
        formValue.person = formValue.nextperson;
        formValue.type = 'workOrder';
        formValue.tabId = Ext.$id();
        formValue.event_status = 'undone';
        var db = Ext.create('Cmdb.model.Wddb', data);

        var alldb = Ext.create('Cmdb.model.AllDb', formValue);
        db.save();
        alldb.save();
        this.getView().up('window').close()
    },
    onCancel: function () {
        this.getView().up('window').close()

    },
    onRzCjgdRender: function (view) {
        var me = this;
        var value = view.record.get('eventtype');
        var arr = {
            emergency: '应急演练类型',
            project: '项目类型'
        };
        if (value == 'event') {
            var item = {
                fieldLabel: '选择事件类型',
                name: 'event_type',
                xtype: 'combo',
                reference: 'addType',
                queryMode: 'local',
                displayField: 'name',
                valueField: 'value',
                emptyText: '请选择工作类型',
                store: {
                    fields: ['name', 'value'],
                    data: [
                        {name: '服务器CPU超载事件', value: 'fwqcz'},
                        {name: '存储空间警告事件', value: 'cckjjk'},
                        {name: '网络异常事件', value: 'wlyc'},
                        {name: '疑似攻击事件', value: 'ysgj'},
                    ]
                },
                bind: '{show.event_type}',
                listeners: {
                    select: function (model, record, event) {
                        me.addTitle(model, record, event)
                    }
                }
            };
            this.lookup('addForm').add(item);
        } else {
            if (this.lookup('addType')) {
                this.lookup('addForm').remove(this.lookup('addType'));
            }
            var gdTitle = this.lookup('gdTitle');
            gdTitle.setValue(view.record.get('name') + '_' + top._slIndex);
        }
        if (this.lookup('addType')) {
            view.getViewModel().set('title', '服务器CPU超载事件_' + top._slIndex)
        } else {
            view.getViewModel().set('title', arr[value] + '_' + top._slIndex)
        }
    },
    onSelect: function (model, record, rowindex, event) {
        var me = this;
        var value = record.get('value');
        if (value == 'event') {
            var item = {
                fieldLabel: '选择事件类型',
                name: 'event_type',
                xtype: 'combo',
                reference: 'addType',
                queryMode: 'local',
                displayField: 'name',
                valueField: 'value',
                emptyText: '请选择工作类型',
                store: {
                    fields: ['name', 'value'],
                    data: [
                        {name: '服务器CPU超载事件', value: 'fwqcz'},
                        {name: '存储空间警告事件', value: 'cckjjk'},
                        {name: '网络异常事件', value: 'wlyc'},
                        {name: '疑似攻击事件', value: 'ysgj'},
                    ]
                },
                listeners: {
                    select: function (model, record, event) {
                        me.addTitle(model, record, event)
                    }
                }
            };
            this.lookup('addForm').add(item);
        } else {
            if (this.lookup('addType')) {
                this.lookup('addForm').remove(this.lookup('addType'));
            }
            var gdTitle = this.lookup('gdTitle');
            gdTitle.setValue(record.get('name') + '_' + top._slIndex);
        }
    },
    addTitle: function (model, record, event) {
        var gdTitle = this.lookup('gdTitle');
        gdTitle.setValue(record.get('name') + '_' + top._slIndex);

    }
});