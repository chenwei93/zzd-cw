Ext.define('Cmdb.view.asset.zcfw.yzysq.YzysqController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.yzysq',

    onChooseZc: function () {
        this.open({
            xtype: 'zcqd'
        }, {
            gridView: this.getView(),
            width: 800,
            height: 500,
            title: '选择资产',
            scrollable: true
        })
    },
    onSure: function () {
        var win = this.getView().up('window'),
            gridView = this.getView().gridView,
            login = Ext.app.ViewController.LOGIN_USER.name;

        if (gridView != null) {

            if (gridView != 'x') {
                var gridStore = gridView.getStore();
            } else {
                var gridStore = Ext.getStore('wddb');
            }

            var value = this.getView().getForm().getValues(),
                SqdStore = Ext.getStore('show-data'),
                showTYpe = this.getView().ShowType;

            var data = JSON.parse(JSON.stringify(value)),
                value1 = JSON.parse(JSON.stringify(value)),
                needNowPerson, needStatus;
            if (showTYpe == 'rjfw') {
                needNowPerson = this.nextPerson('fwzc', "sqcs");
                needStatus = "sqcs";
            } else if (showTYpe == 'yzysq') {
                needNowPerson = this.nextPerson('wddb', "sqsh");
                needStatus = "sqsh";
            }
            else if (showTYpe == 'jkzy') {
                needNowPerson = this.nextPerson('jkzygl', "jsrysh");
                needStatus = "jsrysh";
            } else if (showTYpe == 'sjzc') {
                needNowPerson = this.nextPerson('sjgxgl', "jsryqrsh");
                needStatus = "jsryqrsh";
            } else if (showTYpe == 'sjzcgx') {
                needNowPerson = this.nextPerson('sjgxgl', "jsryshsh");
                needStatus = "jsryshsh";
            }
            else if (showTYpe == 'sjzchj') {
                needNowPerson = this.nextPerson('sjhjgl', "hj_jsrysh");
                needStatus = "hj_jsrysh";
            } else if (showTYpe == 'sjzckf') {
                needNowPerson = this.nextPerson('sjkfgl', "kf_jsrysh");
                needStatus = "kf_jsrysh";
            }


            //申请审核
            value.needType = showTYpe;
            value.c_time = Date.now();
            value.pre_person = login;
            value.now_person = needNowPerson;
            value.status = needStatus;
            value.event_type = [];
            value.tabId = Ext.$id();
            value.sl_code = win.listType;
            value.all_event = "";


            //申请云资源
            value1.needType = showTYpe;
            value1.c_time = Date.now();
            value1.pre_person = '无';
            value1.now_person = login;
            value1.status = 'sq';
            value1.event_type = [login];
            value1.tabId = Ext.$id();
            value1.sl_code = win.listType;
            value1.all_event = "";


            data.type = showTYpe;
            data.sl_code = win.listType;
            data.c_time = Date.now();
            data.tabId = Ext.$id();
            data.whId = this.getView().needWhTabId;


            console.log('value:', value, 'value1:', value1);
            this.storeSync(gridStore, value1);
            this.storeSync(gridStore, value);
            var showdata = Ext.create('Cmdb.model.ShowData', data),
                data1 = {
                    tabId: value.tabId,
                    name: login,
                    content: '提交申请',
                    date: Date.now(),
                    notificationType: "comment"
                },
                timeLine = Ext.create('Cmdb.model.TimeLine', data1);
            var c = {
                title: value.y_title,
                person: value.now_person,
                tabId: value.tabId,
                status: value.status,
                event_status: 'undone',
                needType: value.needType,
                type: 'db'
            };
            c = Object.assign(c, value);
            var alldb = Ext.create('Cmdb.model.AllDb', c);
            showdata.save();
            timeLine.save();
            alldb.save();
            SqdStore.add(value);
        }
        if (win != null) {
            win.close()
        }
    },
    nextPerson: function (eventtype, type) {
        var storeId = '';
        if (eventtype == 'fwzc') {
            storeId = 'deal-fwzc'
        } else if (eventtype == 'wddb') {
            storeId = 'dealissue'
        } else if (eventtype == 'jkzygl') {
            storeId = 'deal-jkzygl'
        } else if (eventtype == 'sjgxgl') {
            storeId = 'deal-sjgx'
        } else if (eventtype == 'sjhjgl') {
            storeId = 'deal-sjhjgl'
        } else if (eventtype == 'sjkfgl') {
            storeId = 'deal-sjkfgl'
        }
        var dealIssue = Ext.getStore(storeId),
            items = dealIssue.getData().items;
        for (var i in items) {
            if (items[i].get('name') == type) {
                return items[i].get('user')
            }
        }
    },

    storeSync: function (store, value) {
        store.load();
        store.add(value);
        store.sync();
    },
    onCancel: function () {
        var win = this.getView().up('window');
        if (win != null) {
            win.close()
        }
    }
});
