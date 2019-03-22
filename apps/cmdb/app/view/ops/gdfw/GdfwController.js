Ext.define('Cmdb.view.ops.gdfw.GdfwController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.gdfw',

    // initViewModel: function (vm) {
    //     vm.getStore('list').loadPage(1);
    // },
    onGdfwRender: function (view, event) {
        var store = view.getStore();
        store.filterBy(function (record) {
            var now_person = record.get('now_person'),
                next_person = record.get('next_person'),
                loginPerson = Ext.app.ViewController.LOGIN_USER.name,
                type = record.get('type');
            if (now_person == loginPerson || next_person.indexOf(loginPerson) >= 0) {
                if (type == 'gd') {
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
            xtype: 'cjgd'
        }, {
            title: '新增工作',
            width: 800,
            height: 580,
            scrollable: true
        })
    },
    onDeal: function () {
        this.open({
            xtype: 'sqsh'
        }, {
            title: '处理',
            width: 900,
            height: 620
        })
    }

});