Ext.define('Cmdb.view.asset.zcdj.ZcdjController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.zcdj',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
        console.log(this.turnType('yzysq', 'edit'))
    },
    onNew: function () {
        this.open({
            xtype: 'zcdj-add'
        }, {
            width: 800,
            height: 600
        })
    },
    onAddZc: function (btn) {
        var treeType = this.lookup('mlxType').getValue(),
            code = this.lookup('mlxCode').getValue(),
            allData = this.lookup('allData').getValue();
        if (treeType == "") {
            alert('当前未指定新增类型');
        } else {
            var type = treeType,
                arr = {
                    jkzy: 'jkpzwh-edit',
                    yzysq: 'zyfpwh-edit',
                    rjfw: 'fwsmwh-whedit',
                    sjzc: 'sjbdzc-form'
                };

            this.open({
                xtype: arr[type],
                needType: 'edit'
            }, {
                width: 800,
                height: 600,
                title: '新增',
                needSLtype: treeType,
                needSLsltype: code,
                needAllData: allData,
                closeWin: btn.up('window')
            })
        }

    },
    onSure: function (btn) {
        var value = btn.up('form').getValues();
        value.time = Date.now();
        value.type = btn.up('window').needSLtype;
        value.sl_code = btn.up('window').needSLsltype;
        value.tabId = Ext.$id();
        var store = Ext.getStore('mlxsl');
        store.add(value);
        store.sync();
        btn.up('window').closeWin.close();
        top._slIndex++;
    },
    onCancel: function (btn) {
        btn.up('window').closeWin.close();
    },
    onSelect: function (model, record, rowindex, event) {
        var isLeaf = record.get('leaf');

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
            type = this.lookup('mlxType'),
            alldata = this.lookup('allData');

        name.setValue(record.get('text'));
        code.setValue(record.get('code'));
        des.setValue(record.get('des'));
        type.setValue(record.get('type'));
        alldata.setValue(JSON.stringify(record.data));
        // }
    },
    onRowDblClick: function (view, record) {
        var type = record.get('type'),
            arr = {
                jkzy: 'jkpzwh-show',
                yzysq: 'zyfpwh-show',
                rjfw: 'fwsmwh-whshow',
                jk: 'jkpzwh-show',
                fw: 'fwsmwh-whshow',
                sjzc: 'sjbdzc-show',
                sjzckf: 'sjbdzc-show',
                sjzcgx: 'sjbdzc-show',
                sjzchj: 'sjbdzc-show',
            };

        this.open({
            xtype: arr[type],
            needType: 'show',
            record: record,
            viewModel: {
                data: {
                    show: record
                }
            }
        }, {
            width: 700,
            height: 600,
            title: '查看' + record.get('y_title')
        })
    },
    onChooseSelect: function (combo, value, pre) {
        var data = combo.valueCollection.items[0],
            dataset = data.data.fields.items;
        var ysjx = this.lookup('ysjx');
        var store = {
            autoLoad: true,
            data: dataset
        };
        ysjx.setStore(store);
    },
    turnType: function (zy_type, zy_type) {
        var arr = {
            yzysq: {
                edit: 'edit',
                show: 'show'
            }
        };
        return arr[zy_type][zy_type];
    }
});