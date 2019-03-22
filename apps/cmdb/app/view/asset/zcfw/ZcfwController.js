Ext.define('Cmdb.view.asset.zcfw.ZcfwController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.zcfw',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onWddbRender: function (view, event) {
        var store = view.getStore(),
            loginPerson = Ext.app.ViewController.LOGIN_USER.name;
        store.filterBy(function (record) {
            var type = record.get('type'),
                now_person = record.get('now_person');
            if (now_person!=null && now_person.indexOf(loginPerson) >= 0) {
                if (record.get('event_type').indexOf(loginPerson) < 0) {
                    return true
                }
            }
        });
    },
    onChooseSelect: function (combo, value, pre) {
        this.getView().getStore().reload({
            url: 'app/store/data/ops/gdgl/' + value + '.json'

        })
    },
    onNew: function () {
        this.open({
            xtype: 'zcqd'

        }, {
            width: 800,
            height: 600,
            title: '选择资产',
            gridView: this.getView()
        });
    },
    onDeal: function (tr, td, view, a, index, record) {
        this.open({
            xtype: 'sqsh',
            listType: record.get('f_type')
        }, {
            title: '处理',
            width: 900,
            height: 620
        })
    }
});