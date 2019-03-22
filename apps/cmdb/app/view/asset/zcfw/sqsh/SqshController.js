Ext.define('Cmdb.view.asset.zcfw.sqsh.SqshController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.sqsh',

    onRender: function (view) {
        var SqdStore = Ext.getStore('show-data'),
            value = SqdStore.getData().items,
            needItem;
        if (view.up('window').needRecord != undefined) {
            var typeValue = view.up('window').needRecord.get('status');
            for (var i in value) {
                if (value[i].data.tabId == view.up('window').needTabId) {
                    needItem = value[i].data;
                }
            }
            var showType = view.up('window').needRecord.get('needType');
            var dagre = this.lookup('dagre'),
                title;
            if (showType == 'rjfw') {
                title = 'fwzc';
                var items = {
                    xtype: 'fwsmwhsq-show'
                };
            } else if (showType == 'yzysq') {
                var items = {
                    xtype: 'yzysq-formshow'
                };
                title = 'tcp-state-diagram';
            } else if (showType == 'jkzy') {
                var items = {
                    xtype: 'jkpzsq-show'
                };
                title = 'jkzy';
            } else if (showType == 'sjzc') {
                var items = {
                    xtype: 'sjbdsq-show'
                };
                title = 'sjgx'
            } else if (showType == 'sjzcgx') {
                var items = {
                    xtype: 'sjbdsq-show'
                };
                title = 'sjgx'
            } else if (showType == 'sjzchj') {
                var items = {
                    xtype: 'sjbdsq-show'
                };
                title = 'sjhj'
            } else if (showType == 'sjzckf') {
                var items = {
                    xtype: 'sjbdsq-show'
                };
                title = 'sjkf'
            }
            view.add(items);
            view.getForm().setValues(needItem);
            var src = 'app/view/asset/zcfw/sqsh/dagre/' + title + '.html?type=' + typeValue;
            dagre.src = src;
            var vm = this.getViewModel();
            var value = this.nextPerson(showType, typeValue, 'text');
            console.log(value);
            vm.set('btnText', value);
            var editBtn = this.lookup('editForm');
            editBtn.tooltip = value;
            editBtn.needXtype = this.nextPerson(showType, typeValue, 'edit');
            editBtn.needShowXtype = this.nextPerson(showType, typeValue, 'show');

        }


    },
    onSqshRender: function (view) {
        var me = this,
            win = view.up('window'),
            btn = this.lookup('pdbtn');
        if (win != null) {
            var status = win.needStatus;
            if (status == 'sqsh') {
                me.btnSet(btn, '下一步', 'pd');
            } else if (status == 'zgsh') {
                me.btnSet(btn, '下一步', 'shtg');
            } else if (status == 'sq') {
                me.btnSet(btn, '不可操作', 'bkcz');
            } else if (status == 'blsh') {
                me.btnSet(btn, '下一步', 'pass');
            } else if (status == 'yzyss') {
                me.btnSet(btn, '下一步', 'yzyss');
            } else {
                me.btnSet(btn, '下一步', 'pass', 'sqcs');
            }

        }
    },
    onClickA: function (btn) {
        var needTable = this.getView().up('window').needTabId;
        var SqdStore = Ext.getStore('show-data'),
            value = SqdStore.getData().items,
            needItem;
        if (btn.up('window').needRecord != undefined) {
            for (var i in value) {
                if (value[i].data.tabId == btn.up('window').needTabId) {
                    needItem = value[i].data;
                }
            }
            this.open({
                xtype: btn.needXtype,
                needTabId: needTable,
                scrollable: true,
                needItem: needItem
            }, {
                title: btn.text,
                width: 800,
                height: 650,
                scrollable: true
            })
        }
    },
    onSure: function (btn) {
        var formView = btn.up('form'),
            formValue = formView.getValues();
        formValue.dealTime = Date.now();
        formValue.tabId = formView.needTabId;
        var editBtn = this.lookup('editForm');
        this.addTimeLine('填写表单', formValue.dealTime, editBtn.needShowXtype);
        var data = Ext.create('Cmdb.model.ops.Zcfp', formValue);
        data.save();
        btn.up('window').close();
    },
    onCancel: function (btn) {
        btn.up('window').close()
    },

    btnSet: function (btn, tooltip, exra, tx) {
        btn.setTooltip(tooltip);
        btn.needExra = exra;
        if (tx != null) {
            btn.needCZ = tx;
        }
    },
    onBegan: function () {
        this.getView().up('window').close()
    },
    onPD: function (view) {
        console.log('aaa', view.up('window').needView.lookup('chooseType'));
        var me = this;
        if (view.up('window').needView.lookup('chooseType') != null) {
            var typeValue = view.up('window').needView.lookup('chooseType').getValue();
            if (typeValue == 'yb' || typeValue == 'bj') {
                Ext.Msg.alert('提示', '您已处理过当前事项，不可操作');
            } else {
                me.dealThing(view);
            }
        } else {
            me.dealThing(view);
        }
    },
    dealThing: function (view) {
        console.log(view.needCZ,view.needExra);
        var me = this;
        if (view.needExra == 'pd') {
            me.choosePerson(view);
        } else if (view.needExra == 'pass') {
            if (view.needCZ == null) {
                me.onBLSH(view);
            } else if (view.needCZ == 'sqcs') {
                me.onSqcs(view);
            }
        } else if (view.needExra == 'shtg') {
            me.onZGSH(view)
        } else if (view.needExra == 'yzyss') {
            me.onBLSH(view);
        } else {
            Ext.Msg.alert('提示', '您已提交申请，当前状态不可操作');
        }
    },
    onTH: function (btn) {
        var me = this,
            value = btn.up('window').needRecord,
            status = btn.up('window').needStatus,
            typeValue = btn.up('window').needView.lookup('chooseType').getValue();
        //1.删除当前item2.修改相关item的event_type
        //3.如果为已完结状态，修改相关所有itemall_event为""
        var showType = value.get('needType');

        if (typeValue == 'yb' || typeValue == 'bj') {
            Ext.Msg.alert('提示', '您已处理过当前事项，不可退回');
        } else {
            if (showType == 'yzysq') {
                me.typeToOk(null, value, null, 'th');
                this.closeWinLoadStore(value);
            } else if (showType == 'rjfw') {
                me.typeToOk(null, value, null, 'th');
                this.closeWinLoadStore(value);
            } else if (showType == 'jkzy') {
                me.typeToOk(null, value, null, 'th');
                this.closeWinLoadStore(value);
            } else if (showType == 'sjgxgl') {
                me.typeToOk('sjgx', value, null, 'th');
                this.closeWinLoadStore(value);
            } else if (showType == 'sjhjgl') {
                me.typeToOk('sjhjgl', value, null, 'th');
                this.closeWinLoadStore(value);
            } else if (showType == 'sjkfgl') {
                me.typeToOk('sjkfgl', value, null, 'th');
                this.closeWinLoadStore(value);
            }

        }
    },
    nextPerson: function (eventtype, type, table) {
        var arr = {
            rjfw: 'deal-fwzc',
            yzysq: 'dealissue',
            jkzy: 'deal-jkzygl',
            sjzc: 'deal-sjgx',
            sjzcgx: 'deal-sjgx',
            sjzchj: 'deal-sjhjgl',
            sjzckf: 'deal-sjkfgl',


            sjhjgl: 'deal-sjhjgl',
            sjkfgl: 'deal-sjkfgl'
        };
        var storeId = arr[eventtype];
        var dealIssue = Ext.getStore(storeId),
            items = dealIssue.getData().items;
        for (var i in items) {
            if (items[i].get('name') == type) {
                if (table == null) {
                    return items[i].get('user')
                } else if (table == 'edit') {
                    return items[i].get('table')
                } else if (table == 'show') {
                    return items[i].get('show')
                } else if (table == 'text') {
                    return items[i].get('text')
                }

            }
        }
    },
    choosePerson: function (view) {
        var me = this;
        Ext.create({
            xtype: 'window',
            width: 300,
            height: 200,
            bodyPadding: 20,
            needRecord: view.up('window').needRecord,
            title: '选择',
            modal: true,
            tbar: [{
                text: '确定',
                handler: function (btn) {
                    me.onYes(btn);
                }
            }, {
                text: '取消',
                handler: function (btn) {
                    btn.up('window').close()
                }
            }],
            items: [{
                flex: 1,
                xtype: 'tagfield',
                displayField: 'name',
                valueField: 'value',
                reference: 'choosePerson',
                emptyText: '选择下一步操作人',
                store: {
                    fields: ['name', 'value'],
                    data: [
                        {name: '王石', value: 'wangs'},
                        {name: '陈薇', value: 'chenw'},
                        {name: '方荣', value: 'fangr'},
                        {name: '莫智胜', value: 'mozs'}
                    ]
                }
            }]
        }).show()
    },

    onSqcs: function (view) {
        var me = this,
            value = view.up('window').needRecord,
            status = value.get('status');
        console.log(status);
        //'sqcs', 'ss', 'jgsh','jggz' :服务资产管理设计
        //jsrysh,ldsh,ssjk,jggzjk:接口资源管理设计
        if (status == 'sqcs') {
            var text = '申请初审',
                orgData = [value, 'ss', null, 'a', 'rjfw', me],
                addDb1 = 'rjfw',
                addDb2 = 'ss';
        }
        else if (status == 'ss') {
            var text = '实施',
                orgData = [value, 'jgsh', null, 'a', 'rjfw', me],
                addDb1 = 'rjfw',
                addDb2 = 'jgsh';
        } else if (status == 'jgsh') {
            var text = '结果审核',
                orgData = [value, 'jggz', null, 'a', 'rjfw', me],
                addDb1 = 'rjfw',
                addDb2 = 'jggz';
        } else if (status == 'jggz') {
            var text = '结果告知',
                orgData = null,
                addDb1 = 'rjfw',
                addDb2 = null;
        } else if (status == 'jsrysh') {
            var text = '技术人员审核',
                orgData = [value, 'ldsh', null, 'a', 'jkzy', me],
                addDb1 = 'jkzy',
                addDb2 = 'ldsh';

        } else if (status == 'ldsh') {
            var text = '领导审核',
                orgData = [value, 'ssjk', null, 'a', 'jkzy', me],
                addDb1 = 'jkzy',
                addDb2 = 'ssjk';
        } else if (status == 'ssjk') {
            var text = '实施',
                orgData = [value, 'jggzjk', null, 'a', 'jkzy', me],
                addDb1 = 'jkzy',
                addDb2 = 'jggzjk';

        } else if (status == 'jggzjk') {
            var text = '结果审核',
                orgData = null,
                addDb1 = 'jkzy',
                addDb2 = null;
        } else if (status == 'jsryqrsh') {
            var text = '技术人员确认',
                orgData = [value, 'jsryshsh', null, 'a', 'sjzc', me],
                addDb1 = 'sjzc',
                addDb2 = 'jsryshsh';

        } else if (status == 'jsryshsh') {
            var text = '技术人员审核',
                orgData = [value, 'ldshsh', null, 'a', 'sjzc', me],
                addDb1 = 'sjzc',
                addDb2 = 'ldshsh';

        } else if (status == 'ldshsh') {
            var text = '领导审核',
                orgData = [value, 'sssh', null, 'a', 'sjzc', me],
                addDb1 = 'sjzc',
                addDb2 = 'sssh';

        } else if (status == 'sssh') {
            var text = '实施',
                orgData = [value, 'jggzsh', null, 'a', 'sjzc', me],
                addDb1 = 'sjzc',
                addDb2 = 'jggzsh';

        } else if (status == 'jggzsh') {
            var text = '结果告知',
                orgData = null,
                addDb1 = 'sjzc',
                addDb2 = null;
        } else if (status == 'hj_jsrysh') {
            var text = '技术人员审核',
                orgData = [value, 'hj_ldsh', null, 'a', 'sjhjgl', me],
                addDb1 = 'sjhjgl',
                addDb2 = 'hj_ldsh';
        } else if (status == 'hj_ldsh') {
            var text = '领导审核',
                orgData = [value, 'hj_jsryqr', null, 'a', 'sjhjgl', me],
                addDb1 = 'sjhjgl',
                addDb2 = 'hj_jsryqr';

        } else if (status == 'hj_jsryqr') {
            var text = '技术人员确认',
                orgData = [value, 'hj_ssjk', null, 'a', 'sjhjgl', me],
                addDb1 = 'sjhjgl',
                addDb2 = 'hj_ssjk';

        } else if (status == 'hj_ssjk') {
            var text = '实施',
                orgData = [value, 'hj_jggzjk', null, 'a', 'sjhjgl', me],
                addDb1 = 'sjhjgl',
                addDb2 = 'hj_jggzjk';

        } else if (status == 'hj_jggzjk') {
            var text = '结果告知',
                orgData = null,
                addDb1 = 'sjhjgl',
                addDb2 = null;

        } else if (status == 'kf_jsrysh') {
            var text = '技术人员审核',
                orgData = [value, 'kf_ldsh', null, 'a', 'sjkfgl', me],
                addDb1 = 'sjkfgl',
                addDb2 = 'kf_ldsh';

        } else if (status == 'kf_ldsh') {
            var text = '领导审核',
                orgData = [value, 'kf_ss', null, 'a', 'sjkfgl', me],
                addDb1 = 'sjkfgl',
                addDb2 = 'kf_ss';


        } else if (status == 'kf_ss') {
            var text = '实施',
                orgData = [value, 'kf_jggz', null, 'a', 'sjkfgl', me],
                addDb1 = 'sjkfgl',
                addDb2 = 'kf_jggz';

        } else if (status == 'kf_jggz') {
            var text = '结果告知',
                orgData = null,
                addDb1 = 'sjkfgl',
                addDb2 = null;
        }
        me.nextStep(text, orgData, addDb1, addDb2, value);
        this.closeWinLoadStore(value);
    },
    nextStep: function (text, orgData, addDb1, addBb2, value) {
        console.log(arguments);
        var me = this;
        me.addTimeLine(text);
        if (orgData) {
            this.typeToOk(value);
            var fwzc = Ext.create('Cmdb.model.Wddb', me.orgData.apply(me.orgData, orgData));
            console.log(fwzc);
            fwzc.save();
        } else {
            this.typeToOk(value, 'ok');
        }
        console.log('xxx');
        this.addDB(value, addDb1, addBb2);
        console.log('ok');

    },
    onBLSH: function (view) {
        var me = this,
            value = view.up('window').needRecord;
        if (value.get('status') == "yzyss") {
            this.typeToOk(value);
            me.addTimeLine('实施');
            var item = this.chooseItem(value),
                event_type = item.event_type,
                now_person = item.now_person,
                k = 0;
            if (event_type.length == now_person.length) {
                for (var i = 0; i < event_type.length; i++) {
                    for (var j = 0; j < now_person.length; j++) {
                        if (event_type[i] == now_person[j]) {
                            k++;
                        }
                    }
                }
            }
            if (k == event_type.length) {
                if (value.data.y_title == null) {
                    value.data.y_title = value.data.title;
                }
                var store = localStorage.getItem('wddb').split(',');
                for (var i in store) {
                    var item = JSON.parse(localStorage.getItem('wddb-' + store[i]));
                    if (item != null && item.tabId == value.get('tabId')) {
                        item.all_event = 'ok';
                        localStorage.setItem('wddb-' + store[i], JSON.stringify(item));
                    }
                }

                var store1 = Ext.getStore('show-data');
                var judeData;
                for (var z in store1.data.items) {
                    var it = store1.data.items[z];
                    if (it.data.tabId == value.get('tabId')) {
                        judeData = it.data
                    }
                }
                judeData.time = judeData.c_time;
                var a = Ext.create('Cmdb.model.MlxSl', judeData);
                a.save();
                var storea = localStorage.getItem('alldb').split(',');
                for (var i in storea) {
                    var item = JSON.parse(localStorage.getItem('alldb-' + storea[i]));
                    if (item != null) {
                        if (item.tabId == value.get('tabId') && item.status == value.get('status')) {
                            item.event_status = 'complete';
                            localStorage.setItem('alldb-' + storea[i], JSON.stringify(item));
                        }
                    }
                }
            } else {
                var c = {
                    type: 'db',
                    tabId: value.get('tabId'),
                    y_title: value.get('title'),
                    title: value.get('title'),
                    needType: value.get('needType'),
                    status: 'zgsh',
                    event_status: 'undone',
                    c_time: Date.now(),
                    pre_person: Ext.app.ViewController.LOGIN_USER.name,
                    person: this.nextPerson('yzysq', 'zgsh'),
                    event_type: []
                };
                var alldb = Ext.create('Cmdb.model.AllDb', c);
                var store = localStorage.getItem('alldb').split(',');
                for (var i in store) {
                    var item = JSON.parse(localStorage.getItem('alldb-' + store[i]));
                    if (item != null) {
                        if (item.tabId == value.get('tabId') && item.status == value.get('status')) {
                            var arr = [];
                            for (var j in item.person) {
                                if (item.person[j] != Ext.app.ViewController.LOGIN_USER.name) {
                                    arr.push(item.person[j])
                                }
                            }
                            if (arr.length != 0) {
                                item.person = arr;
                                localStorage.setItem('alldb-' + store[i], JSON.stringify(item));
                            } else {
                                item.event_status = 'complete';
                                localStorage.setItem('alldb-' + store[i], JSON.stringify(item));
                                alldb.save();
                            }

                        }
                    }
                }
            }
        } else {
            me.addTimeLine('并联审核');
            me.typeToOk(value);
            var item = this.chooseItem(value),
                event_type = item.event_type,
                now_person = item.now_person,
                k = 0;
            if (event_type.length == now_person.length) {
                for (var i = 0; i < event_type.length; i++) {
                    for (var j = 0; j < now_person.length; j++) {
                        if (event_type[i] == now_person[j]) {
                            k++;

                        }
                    }
                }
            }
            if (k == event_type.length) {
                if (value.data.y_title == null) {
                    value.data.y_title = value.data.title;
                }
                var wddb = Ext.create('Cmdb.model.Wddb', me.orgData(value, 'zgsh', me));
                wddb.save();
            }
            var c = {
                type: 'db',
                tabId: value.get('tabId'),
                y_title: value.get('title'),
                title: value.get('title'),
                needType: value.get('needType'),
                status: 'zgsh',
                event_status: 'undone',
                c_time: Date.now(),
                pre_person: Ext.app.ViewController.LOGIN_USER.name,
                person: this.nextPerson('yzysq', 'zgsh'),
                event_type: []
            };
            var alldb = Ext.create('Cmdb.model.AllDb', c);

            var xxx = localStorage.getItem('alldb');

            var store = xxx.split(',');

            for (var x in store) {
                var item = JSON.parse(localStorage.getItem('alldb-' + store[x]));
                if (item != null) {
                    if (item.tabId == value.get('tabId') && item.status == value.get('status')) {
                        var arr = [];
                        for (var z in item.person) {
                            if (item.person[z] != Ext.app.ViewController.LOGIN_USER.name) {
                                arr.push(item.person[z])
                            }
                        }
                        if (arr.length != 0) {
                            item.person = arr;
                            localStorage.setItem('alldb-' + store[x], JSON.stringify(item));
                        } else {
                            item.event_status = 'complete';
                            localStorage.setItem('alldb-' + store[x], JSON.stringify(item));

                            alldb.save();
                        }

                    }
                }
            }

        }
        this.closeWinLoadStore(value);
    },
    onZGSH: function (view) {
        this.choosePerson(view);
    },
    orgData: function (value, type, person, jude, event, scop) {
        var me = scop;
        var a;
        if (person != null) {
            a = person
        } else {
            if (event != null) {
                a = me.nextPerson(event, type);
            } else {
                a = me.nextPerson('yzysq', type);
            }
        }
        if (value.data != null) {
            value = value.data
        }
        var data = {};
        data.all_event = "";
        data.y_title = value.y_title;
        data.needType = value.needType;
        data.tabId = value.tabId;
        data.type = value.type;
        data.title = value.title;
        data.name = value.name;
        data.c_time = Date.now();
        data.pre_person = value.now_person;
        data.now_person = a;
        data.status = type;
        data.sl_code = value.sl_code;
        data.event_type = [];
        if (type != 'zgsh' && jude == null) {
            me.typeToOk(null, value);
        }
        if (data.y_title == null) {
            data.y_title = value.title;
            data.pre_person = value.person;
        }
        return data
    },
    //修改状态为已完成
    addDB: function (value, event, type) {
        var store = localStorage.getItem('alldb').split(',');
        console.log('1', store.length);
        for (var i = 0; i < store.length; i++) {
            var item = JSON.parse(localStorage.getItem('alldb-' + store[i]));
            console.log(item);
            if (item != null) {
                if (item.tabId == value.get('tabId') && item.status == value.get('status')) {
                    item.event_status = 'complete';
                    localStorage.setItem('alldb-' + store[i], JSON.stringify(item));
                }
            }
        }
        if (type != null) {
            var c = {
                type: 'db',
                tabId: value.get('tabId'),
                title: value.get('title'),
                y_title: value.get('title'),
                needType: value.get('needType'),
                status: type,
                event_status: 'undone',
                c_time: Date.now(),
                pre_person: Ext.app.ViewController.LOGIN_USER.name,
                person: this.nextPerson(event, type),
                event_type: []
            };
            console.log(c);
            if (c.title == null) {
                c.title = value.get('y_title');
                c.y_title = value.get('y_title');
            }
            console.log('----', c);
            var alldb = Ext.create('Cmdb.model.AllDb', c);
            alldb.save();
        }

    },
    typeToOk: function (value, type, event) {
        console.log(arguments);
        if (value.data != null) {
            value = value.data;
        }
        var jude = false,
            store = localStorage.getItem('wddb').split(','),
            now_person = Ext.app.ViewController.LOGIN_USER.name;
        for (var i in store) {
            var item = JSON.parse(localStorage.getItem('wddb-' + store[i]));
            if (item != null && item.tabId == value.tabId) {
                if (event == null) {
                    if (item.status == value.status) {
                        if (item.event_type.length != 0) {
                            var arr = item.event_type;
                        } else {
                            var arr = [];
                        }
                        arr.push(now_person);
                        item.event_type = arr;
                        localStorage.setItem('wddb-' + store[i], JSON.stringify(item));
                    }
                    if (type != null) {
                        item.all_event = 'ok';
                        localStorage.setItem('wddb-' + store[i], JSON.stringify(item));
                        var a = 1;
                    }
                    if (a == 1) {
                        var store1 = Ext.getStore('show-data');
                        var judeData;
                        for (var z in store1.data.items) {
                            var it = store1.data.items[z];
                            if (it.data.tabId == value.tabId) {
                                judeData = it.data
                            }
                        }
                        judeData.time = judeData.c_time;
                        var a = Ext.create('Cmdb.model.MlxSl', judeData);
                        a.save();
                    }
                } else {
                    if (Array.isArray(item.now_person) == Array.isArray(value.pre_person)) {
                        var a = 0;
                        if (Array.isArray(item.now_person)) {
                            for (var j in item.now_person) {
                                for (var k in value.pre_person) {
                                    if (item.now_person[j] == value.pre_person[k]) {
                                        a++;
                                    }
                                }
                            }
                            if (a == item.now_person.length && item.status != 'sq') {
                                item.event_type = [];
                                localStorage.setItem('wddb-' + store[i], JSON.stringify(item));
                            }
                        } else {
                            if (item.now_person == value.pre_person && item.status != 'sq') {
                                item.event_type = [];
                                localStorage.setItem('wddb-' + store[i], JSON.stringify(item));
                            }
                        }
                    }
                    if (item.status == value.status && item.status != 'sq') {
                        localStorage.removeItem('wddb-' + store[i]);
                        var data = localStorage.getItem('wddb-counter');
                        store.splice(i, 1);
                        jude = true;
                        localStorage.setItem('wddb-counter', data - 1);
                    }
                }

            }
        }
        if (jude) {
            var a = store[0];
            for (var i = 1; i < store.length; i++) {
                a = a + ',' + store[i];
            }
            localStorage.setItem('wddb', a);
        }

    },
    chooseItem: function (value) {
        var store = localStorage.getItem('wddb').split(',');
        for (var i in store) {
            var item = JSON.parse(localStorage.getItem('wddb-' + store[i]));
            if (item != null && item.tabId == value.data.tabId) {
                if (item.status == value.data.status) {
                    return item
                }
            }
        }
    },

    addTimeLine: function (status, type, xtype) {
        if (type == null) {
            var shyj = this.lookup('shyj').getValue()
        } else {
            var dateS = 'dateS=' + type + " " + 'data-xtype = ' + xtype + ' ';
            var shyj = "<button " + dateS + " class='fa fa-table'></button><button " + dateS + " class='fa fa-link'></button>";
        }

        var data = {
                tabId: this.getView().up('window').needTabId,
                name: Ext.app.ViewController.LOGIN_USER.name,
                content: status + ':' + shyj,
                date: Date.now(),
                notificationType: "comment"
            },
            timeLine = Ext.create('Cmdb.model.TimeLine', data);
        timeLine.save();
    },
    onYes: function (btn) {
        var me = this;
        var win = btn.up('window'),
            value = win.items.items[0].getValue();
        var data = win.needRecord;
        if (data.get('status') == 'zgsh') {
            this.addTimeLine('主管审核');
            // this.typeToOk(null, data);
            if (data.data.y_title == null) {
                data.data.y_title = data.data.title;
            }
            var wddb = Ext.create('Cmdb.model.Wddb', this.orgData(data, 'yzyss', value, me));
            wddb.save();
            var a = 'yzyss';
        } else {
            var win = btn.up('window'),
                value = win.items.items[0].getValue();
            this.addTimeLine('申请审核');
            if (data.data.y_title == null) {
                data.data.y_title = data.data.title;
            }
            this.typeToOk(data);
            var wddb = Ext.create('Cmdb.model.Wddb', this.orgData(data, 'blsh', value, me));
            wddb.save();
            var a = 'blsh';

        }
        var c = {
            type: 'db',
            tabId: data.get('tabId'),
            title: data.get('y_title'),
            y_title: data.get('y_title'),
            needType: data.get('needType'),
            status: a,
            event_status: 'undone',
            c_time: Date.now(),
            pre_person: Ext.app.ViewController.LOGIN_USER.name,
            person: value,
            event_type: []
        };
        if (c.y_title == null) {
            c.y_title = data.get('title');
        }
        if (c.title == null) {
            c.title = data.get('title');
        }
        var alldb = Ext.create('Cmdb.model.AllDb', c);
        var store = localStorage.getItem('alldb').split(',');
        for (var i in store) {
            var item = JSON.parse(localStorage.getItem('alldb-' + store[i]));
            if (item != null) {
                if (item.tabId == data.get('tabId') && item.status == data.get('status')) {
                    item.event_status = 'complete';
                    localStorage.setItem('alldb-' + store[i], JSON.stringify(item));
                }
            }
        }
        alldb.save();
        btn.up('window').close();
        this.closeWinLoadStore(data);
    },
    closeWinLoadStore: function (data) {
        var store = this.getView().up('window').needView.getStore();
        store.remove(data);
        this.getView().up('window').close();
    },


    onChooseChange: function (combo, value, pre) {
        var data = combo.valueCollection.items[0],
            dataset = data.data.fields.items;
        var ysjx = this.lookup('ysjx');
        var store = {
            autoLoad: true,
            data: dataset
        };
        ysjx.setStore(store);
    }
});
