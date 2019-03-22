Ext.define('Cmdb.view.portal.wddb.WddbController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.wddb',

    onWddbRender: function (view, event) {
        var store = view.getStore(),
            loginPerson = Ext.app.ViewController.LOGIN_USER.name;
        var a = 0;
        store.filterBy(function (record) {
            var type = record.get('type'),
                now_person = record.get('now_person');
            if (now_person != null && now_person.indexOf(loginPerson) >= 0) {
                if (record.get('event_type').indexOf(loginPerson) < 0) {
                    a++;
                    return true
                }
            }
        });
    },
    onChooseSelect: function (combo, value, pre) {
        this.getView().getStore().reload();
        if (this.getView().getStore().autoSource != null) {
            var store = this.getView().getStore().autoSource;
        } else {
            var store = this.getView().getStore().getData().autoSource;
        }
        var storeArr = [];
        store.filterBy(function (record) {
            var now_person = record.get('now_person'),
                loginPerson = Ext.app.ViewController.LOGIN_USER.name,
                event_type = record.get('event_type'),
                all_event = record.get('all_event');
            if (now_person != null && now_person.indexOf(loginPerson) >= 0) {
                if (value == 'yb') {
                    if (event_type.length != 0 && event_type.indexOf(loginPerson) >= 0) {
                        storeArr.push(record);
                    }
                } else if (value == 'bj') {
                    if (all_event == 'ok') {
                        storeArr.push(record);
                    }
                } else if (value == 'db') {
                    if (event_type.indexOf(loginPerson) < 0) {
                        storeArr.push(record);
                    }
                }

            }
        });
        var arr = [];
        for (var i in storeArr) {
            arr.push(storeArr[i].data)
        }
        var forGridStore = {
            autoSource: store,
            autoLoad: true,
            data: arr
        };
        this.getView().setStore(forGridStore);
    },
    onZcsq: function () {
        this.open({
            xtype: 'zcqd'

        }, {
            width: 800,
            height: 600,
            title: '选择资产',
            gridView: this.getView()
        });
    },
    onXjgd: function () {
        this.open({
            xtype: 'cjgd'
        }, {
            title: '新建工作',
            width: 800,
            height: 580,
            scrollable: true
        })
    },
    onDeal: function (view, row, col, btn, event, record) {
        var tabId = record.get('tabId'),
            status = record.get('status');
        this.open({
            xtype: 'sqsh',
            listType: record.get('needType')
        }, {
            title: '处理',
            needTabId: tabId,
            needStatus: status,
            needRecord: record,
            needView: this.getView(),
            width: 900,
            height: 620
        })
    }
});