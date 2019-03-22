Ext.define('Cmdb.view.asset.zcfw.yzysq.zcqdController', {
    extend: 'Cmdb.base.ViewController',
    alias: 'controller.zcqd',

    onSelect: function (model, record, rowindex, event) {
        var self = this,
            GridPanel = self.lookup('needGrid'),
            tbarList = self.lookup('tbarList'),
            chooseBtn = self.lookup('chooseBtn'),
            actionColumn = self.lookup('actionColumn');
        if (record.get('type') == 'sjzc') {
            var addItem = {
                xtype: 'toolbar',
                reference: 'sjBtns',
                layout: 'hbox',
                defaults: {
                    xtype: 'button',
                    ui: 'default',
                    width: 70,
                    marginRight: 15,
                },
                items: [{
                    text: '共享',
                    excode: 'sjzcgx',
                    iconCls: 'x-fa fa-share-alt',
                    handler: 'onChoose'
                }, {
                    text: '汇集',
                    iconCls: 'x-fa fa-undo',
                    excode: 'sjzchj',
                    handler: 'onChoose'
                }, {
                    text: '开放',
                    iconCls: 'x-fa fa-folder-open',
                    excode: 'sjzckf',
                    handler: 'onChoose'
                }]
            };
            chooseBtn.hide();
            actionColumn.show();
            tbarList.add(addItem);
        } else {
            var sjBtns = self.lookup('sjBtns');
            if (sjBtns) {
                tbarList.remove(sjBtns);
                chooseBtn.show();
                actionColumn.hide();
            }
        }
        var setTextValue = function (itemArr, dataArr, record) {
                Ext.Array.each(itemArr, (item, index, arr) => {
                    self.lookup(item).setValue(record.get(dataArr[index]))
                })
            },
            allData = this.lookup('allData');
        allData.setValue(JSON.stringify(record.data));
        setTextValue(['mlxName', 'mlxCode', 'mlxDes', 'mlxType'], ['text', 'code', 'des', 'type'], record);
        var rCode = record.get('code'),
            store = Ext.getStore('mlxsl').data,
            arr = [];
        var needData = store.items;
        Ext.Array.each(needData, (item, index) => {
            var sl_code = item.get('sl_code');
            if (sl_code != null && sl_code == rCode) {
                arr.push(item.data);
            }
        });
        var dataStore = {
            autoLoad: true,
            data: arr
        };
        GridPanel.setStore(dataStore);
        GridPanel.sl_code = record.get('code');
        GridPanel.ShowType = record.get('type');
        GridPanel.needAllData = JSON.stringify(record.data);
    },
    onClick: function (view, record, tr, index) {
        var showType = view.up('gridpanel').ShowType,
            needSLtype = view.up('gridpanel').sl_code,
            allData = view.up('gridpanel').needAllData;
        var win = Ext.create({
            width: 800,
            height: 600,
            title: '申请',
            needAllData: allData,
            scrollable: true,
            autoShow: true,
            xtype: 'window',
            items: [{
                xtype: 'yzysq',
                reference: 'yzysq',
                ShowType: showType,
                needWhTabId: record.get('tabId'),
                gridView: this.getView().up('window').gridView
            }]
        });

        this.getView().up('window').close();
        var panelView = win.items.items[0];
        panelView.add(this.turnItemXtype(showType));
        win.listType = needSLtype;

    },

    onChoose: function (btn) {
        var panel = btn.up('gridpanel'),
            name = this.lookup('mlxName').getValue();
        if (name != "") {
            var showType = this.lookup('mlxType').getValue();
            if (btn.excode) {
                showType = btn.excode
            }
            var panelView = this.createYzysqWin(showType, panel);
            console.log('xxx', showType);
            panelView.add(this.turnItemXtype(showType));
        } else {
            Ext.Msg.alert('提示', '当前未选择目录项')
        }
    },

    onSjzc: function (view, index, col, btn, event, record) {
        var panel = view.grid,
            name = this.lookup('mlxName').getValue();
        if (name != "") {
            var showType = this.lookup('mlxType').getValue();
            if (btn.excode) {
                showType = btn.excode
            }
            var panelView = this.createYzysqWin(showType, panel),
                items = {
                    xtype: 'sjbdsq-form'
                };
            panelView.add(items);
        } else {
            Ext.Msg.alert('提示', '当前未选择目录项')
        }
    },

    //选择完成后显示资源申请页面
    createYzysqWin: function (showType, panel) {
        var allData = this.lookup('allData').getValue();
        var win = Ext.create({
            width: 800,
            height: 600,
            needAllData: allData,
            title: '申请',
            scrollable: true,
            autoShow: true,
            xtype: 'window',
            items: [{
                xtype: 'yzysq',
                reference: 'yzysq',
                ShowType: showType,
                gridView: this.getView().up('window').gridView
            }]
        });
        this.getView().up('window').close();
        var panelView = win.items.items[0];
        win.listType = panel.sl_code;
        return panelView;
    },
    turnItemXtype: function (showType) {
        if (showType == 'rjfw') {
            var items = {
                xtype: 'fwsmwhsq-edit'
            }
        } else if (showType == 'yzysq') {
            var items = {
                xtype: 'yzysq-form'
            }
        } else if (showType == 'jkzy') {
            var items = {
                xtype: 'jkpzsq-form'
            };
        } else if (showType == 'sjzc' || showType == 'sjzcgx' || showType == 'sjzckf' || showType == 'sjzchj') {
            var items = {
                xtype: 'sjbdsq-form'
            };
        }
        return items;
    }
});