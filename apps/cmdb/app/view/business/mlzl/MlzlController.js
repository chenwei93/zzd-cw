Ext.define('Cmdb.view.business.mlzl.MlzlController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.mlzl',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
        vm.getStore('list2').loadPage(1);
        vm.getStore('list3').loadPage(1);

    },

    onRowDblClick: function (view, record, tr, rowindex) {
        this.open({
            xtype: 'mlzl-zhshow'
        }, {
            title: '查看租户详细信息',
            scrollable: true,
            header: true,
            width: 500,
            height: 300,
            showCode: record.get('code'),
            showRecord: record,

        })
    },
    onAdd: function (btn) {
        var win = btn.up('window'),
            panel = btn.up('mlzl-zhshow'),
            available = win.showRecord.get('available');
        if (available == 0) {
            Ext.Msg.alert('提示', '当前可用配额为0，不可分配。');
        } else {
            panel.getStore().insert(0, {
                zh: "环保局",
                pe: "5",
                ss: "5"
            });
            var rowEditing = panel.editingPlugin;
            rowEditing.startEdit(0, 0);
            win.showRecord.set('access', Number(win.showRecord.get('access')) + 1);
        }
    },
    onSQ: function (tr, td, view, index, a, record) {
        this.open({
            xtype: 'datasetgrid'
        }, {
            header: true,
            title: '申请',
            width: 600,
            height: 500,
            needRecord: record
        })
    },
    onSureKF: function (btn) {
        this.onSureDeal(btn, 'kf');
    },
    onSureHJ: function (btn) {
        this.onSureDeal(btn, 'hj');
    },
    onSureGX: function (btn) {
        this.onSureDeal(btn, 'gx');
    },
    onSureDeal: function (btn, type) {
        var obj = {
                hj: 'sjzchj',
                kf: 'sjzckf',
                gx: 'sjzcgx'
            },
            win = btn.up('window'),
            needRecord = win.needRecord,
            dept = Ext.app.ViewController.LOGIN_USER.name;
        if (needRecord) {
            if (dept == 'chenw') {
                var changeData = function (itemArr) {
                        Ext.Array.each(itemArr, (item, index, arr) => {
                            needRecord.set(item, Number(needRecord.get(item)) + Number(1))
                        })
                    },
                    changeDataArr = type == 'gx' ? ['gx_ccl', 'gx_jls'] : ['kf_ccl', 'kf_jls'];
                changeData(changeDataArr);
            } else {
                var needAlldata = {
                    text: '数据资产_实例1',
                    code: 'sjzc_001',
                    y_type: '数据资产',
                    y_dept: Ext.app.ViewController.LOGIN_USER.dept,
                    y_zcml: '',
                    y_des: ''
                };
                Ext.create({
                    width: 800,
                    height: 600,
                    needAllData: JSON.stringify(needAlldata),
                    title: '申请',
                    scrollable: true,
                    autoShow: true,
                    xtype: 'window',
                    needSQtype: 'sjzc',
                    items: [{
                        xtype: 'yzysq',
                        reference: 'yzysq',
                        ShowType: obj[type],
                        gridView: 'x',

                    }]
                });
            }
        }
        btn.up('window').close();
    }
});