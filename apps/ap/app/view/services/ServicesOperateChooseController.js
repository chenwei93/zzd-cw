Ext.define('AP.view.services.ServicesOperateChooseController', {
    extend: 'AP.base.ViewController',

    alias: 'controller.services-choose',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },

    onSure: function () {
        var me = this;
        var select = me.getView().getSelectionModel().getSelection(),
            data = [];
        top._arrData = [];
        top._comboList = [];
        top._listData = [];
        for (var i = 0; i < select.length; i++) {
            var needData = select[i].data,
                qname = needData.qname,
                _data = {};
            var turnData = {
                qname: needData.qname,
                id: needData.id,
                idRel: needData.idRel,
                name: needData.name,
                qualified: needData.qualified,
                title: needData.title,
                type: needData.type,
                fields: null
            };
            var _listCombo = {};
            _data[qname] = turnData;
            _listCombo[qname] = [];
            data.push(needData);
            top._arrData.push(_data);
        }
        var grid = me.getView().gridView.lookup('select'),
            store = {
                autoLoad: true,
                data: data
            };
        grid.setStore(store);
        me.getView().up('window').close();
    },
    onSpecialkey: function (field, e) {
        var me = this;
        if (e.getKey() == Ext.EventObject.ENTER) {
            var store = me.getView().getStore(),
                filterField = me.lookup('searchText'),
                filters = store.getFilters();//当前表格的filter

            var newStore ={
                autoLoad:true,
                model: 'Service',
                proxy:{
                    type:'ajax2',
                    url:'/ap/api/services?query=example&type=Default&qname='+filterField.value
                }
            };

            me.getView().setStore(newStore);

        }
    },
});