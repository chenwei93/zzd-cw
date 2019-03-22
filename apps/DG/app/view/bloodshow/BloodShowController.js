Ext.define('DG.view.bloodshow.BloodShowController', {
    extend: 'DG.base.ViewController',
    alias: 'controller.bloodshow',


    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    //详情
    onDetail: function (view, row, col, btn, a, record, tr) {
        this.open({
            xtype: 'bloodconf-detail'
        }, {
            title: '详情',
            width: 950,
            height: 650,
        })
    },
    onSearch: function (btn) {
        var view = this.getView(),
            cName = this.lookup('nameCh'),
            eName = this.lookup('nameEn');
        var cData = cName.getValue(),
            eData = eName.getValue();
        var json = {
            "rows": 15,
            "entity": {
                "nameCh": cData,
                "nameEn": eData,
                "description": ""
            }
        };
        this.storeLoad(view, json);
    },
    //刷新列表
    storeLoad: function (view, json) {
        var store = {
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: '/narcissus-data-bond-rest/data/bond/table/pageList',
                actionMethods: {
                    read: 'POST'
                },
                paramsAsJson: true,
                extraParams: json,
                reader: {
                    rootProperty: 'list'
                }
            }
        };
        view.setStore(store);
    },

    onReset: function (btn) {
        var view = this.getView(),
            cName = this.lookup('nameCh'),
            eName = this.lookup('nameEn');
        cName.setValue('');
        eName.setValue('');
        var json = {
            "rows": 15,
            "entity": {
                "nameCh": "",
                "nameEn": "",
                "description": ""
            }
        };
        this.storeLoad(view, json);
    },

});
