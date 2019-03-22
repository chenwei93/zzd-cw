Ext.define('Cmdb.view.ops.jkzcwh.jkpz.JkpzController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.jkpzx',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onChooseSelect: function (combo, value, pre) {
        this.getView().getStore().reload({
            url: 'app/store/data/ops/gdgl/' + value + '.json'

        })
    },
    onNew: function () {
        this.open({
            xtype: 'jkpz-edit',
            gridView: this.getView()
        }, {
            title: '新增事件',
            width: 900,
            height: 600,
            scrollable: true
        })
    },
    onDeal: function (tr, td, view, a, index, record) {
        this.open({
            xtype: 'jkpz-show',
            record: record,
            viewModel: {
                data: {
                    zyfp: record
                }
            }
        }, {
            title: '查看',
            width: 900,
            height: 600
        })
    },
    onSure: function (btn) {
        var formView = btn.up('jkpz-edit'),
            formValue = formView.getValues(),
            gridView = formView.gridView,
            gridStore = gridView.getStore();
        formValue.dealTime = Date.now();
        formValue.tabId = '';
        gridStore.add(formValue);
        gridStore.sync();
        btn.up('window').close();
    },
    addTimeLine: function (status, needTabId) {
        var data = {
                tabId: needTabId,
                name: Ext.app.ViewController.LOGIN_USER.name,
                content: status + ':',
                date: Date.now(),
                notificationType: "comment"
            },
            timeLine = Ext.create('Cmdb.model.TimeLine', data);
        timeLine.save();
    },
    onCancel: function (btn) {
        btn.up('window').close();
    }
});