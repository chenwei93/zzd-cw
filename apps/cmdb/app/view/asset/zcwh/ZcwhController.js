Ext.define('Cmdb.view.asset.zcwh.ZcwhController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.zcwh',

    // initViewModel: function (vm) {
    //     vm.getStore('list').loadPage(1);
    // },
    onSelect: function (model, record, rowindex, event) {
        var isLeaf = record.get('leaf');
        // if (isLeaf == true) {
        var self = this,
            code = record.get('code'),
            GridPanel = self.lookup('needGrid');
        var store = Ext.getStore('mlxsl').data,
            arr = [];
        var needData = store.items;
        for (var i in needData) {
            if (needData[i].get('sl_code') != null && needData[i].get('sl_code') == code) {
                arr.push(needData[i].data);
            }
        }
        var dataStore = {
            autoLoad: true,
            data: arr
        };
        GridPanel.setStore(dataStore);
        var name = this.lookup('mlxName'),
            code = this.lookup('mlxCode'),
            des = this.lookup('mlxDes'),
            type = this.lookup('mlxType');
        name.setValue(record.get('text'));
        code.setValue(record.get('code'));
        des.setValue(record.get('des'));
        type.setValue(record.get('type'));
        // }
    },
    onApply: function (view, rowindex, colindex, btn, event, record, tr) {
        var name = record.get('title');
        this.open({
            xtype: 'yzysq',
            needTitle: name
        }, {
            width: 800,
            height: 600,
            title: '云资源申请'
        })
    },
    onWh: function (view, row, col, btb, event, record) {
        var type = record.get('type'),
            arr = {
                jkzy: 'jkpzwh-edit',
                yzysq: 'zyfpwh-edit',
                rjfw: 'fwsmwh-whedit',
                fw: 'fwsmwh-whedit',
                jk: 'jkpzwh-edit',
            };
        this.open({
            xtype: arr[type],
            record: record
        }, {
            width: 800,
            height: 600,
            needGrid: this.lookup('needGrid').getStore(),
            needStatus: 'wh',
            title: '修改' + record.get('y_title')
        })

    },
    onCancel: function (btn) {

        btn.up('window').close()
    },
    onSure: function (btn) {
        if (btn.up('window').needStatus == 'add') {
            var value = btn.up('form').getValues();
            value.time = Date.now();
            value.type = btn.up('window').needSLtype;
            value.sl_code = btn.up('window').needSLsltype;
            var store = Ext.getStore('mlxsl');
            store.add(value);
            store.sync();
            this.lookup('needGrid').getStore().add(btn.up('form').getValues())
        }
        btn.up('window').close()
    },
    onAdd: function (btn) {

        var store = this.lookup('needGrid').getStore().getData();
        var treeType = this.lookup('mlxType').getValue();
        var code = this.lookup('mlxCode').getValue();


        if (treeType == "") {
            alert('当前未指定新增类型');
        } else {
            var type = treeType,
                arr = {
                    jkzy: 'jkpz-edit',
                    yzysq: 'zc-edit',
                    rjfw: 'fwsmwh-edit'
                };

            this.open({
                xtype: arr[type],
                needType: 'edit'
            }, {
                width: 800,
                height: 600,
                title: '新增',
                needGrid: this.lookup('needGrid').getStore(),
                needStatus: 'add',
                needSLtype: treeType,
                needSLsltype: code
            })
        }

    },
});