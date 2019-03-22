/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 */
Ext.define('DA.view.mgr.resourcepool.ResourcePoolAddController', function () {
    var jdbcTemp = '', judeJdbc = true;

    return {
        extend: 'DA.base.ViewController',
        alias: 'controller.resourcepool-add',

        initViewModel: function (vm) {
            if (this.getView().entityId) {
                this.loadEntity(this, this.setRadiogroup);
            }
        },

        //弹出子窗口：编辑 新增 查看等
        showDetail: function (xtype, title, extra) {
            var items = {
                    xtype: 'window',
                    autoShow: true,
                    layout: 'fit',
                    items: [{
                        xtype: xtype,
                        entityId: null
                    }],
                    title: title
                },
                items = extra ? Ext.apply(extra, items) : items;

            Ext.create(items);
        },

        //选择类型新增资源池
        onChoose: function (btn) {
            var dataAlias = btn.dataAlias,
                win = this.getView().up('window'),
                gridView = win.gridView,
                btnTypeLists = {
                    Db: 'resourcepool-adddb',
                    file: 'resourcepool-addfile',
                    Service: 'resourcepool-adddb',
                    HDFS: 'resourcepool-addfile',
                };
            win.close();
            this.showDetail(btnTypeLists[dataAlias], '资源池新增', {
                width: '90%',
                height: '90%',
                panelType: dataAlias,
                gridView: gridView,
            });
        },

        //数据库类型render
        onRpoolDbRender: function () {
            var me = this,
                view = me.getView(),
                win = view.up('window'),
                panelType = win.panelType,
                vm = me.getViewModel(),
                entityId = view.entityId,
                data, index = 0;
            jdbcTemp = '';
            judeJdbc = true;
            this.allFormatShow();
            if (panelType != 'Db') {
                var time = this.lookup('time'),
                    pollingTimeMillis = this.lookup('pollingTimeMillis'),
                    memo = this.lookup('memo'),
                    watchItems = this.lookup('watchItems'),

                    sqlItems = this.lookup('sqlItems');
                var setH = function (arr) {
                    Ext.Array.each(arr, (item) => {
                        item.setHidden(true);
                    })
                };
                setH([time, pollingTimeMillis, watchItems, memo, sqlItems])
            }
        },
        //按钮组
        setRadiogroup: function (scop, data) {
            var me = scop,
                ew = data.enableWatched,
                ac = data.autoCreateResource,
                es = data.enableSearch, ei = data.enableIndexer;

            if (me.lookup('enableWatched')) {
                var EW = me.lookup('enableWatched').items,
                    AC = me.lookup('autoCreateResource').items,
                    ES = me.lookup('enableSearch').items,
                    EI = me.lookup('enableIndexer').items;
                if (ew) {
                    EW.items[0].setValue(true);
                } else {
                    EW.items[1].setValue(true);
                }
                if (ac) {
                    AC.items[0].setValue(true);
                } else {
                    AC.items[1].setValue(true);
                }
                if (es) {
                    ES.items[0].setValue(true);
                } else {
                    ES.items[1].setValue(true);
                }
                if (ei) {
                    EI.items[0].setValue(true);
                } else {
                    EI.items[1].setValue(true);
                }
            }

        },

        //文件类型render
        onFileRender: function () {
            this.allFormatShow();
        },
        allFormatShow: function () {
            var view = this.getView(),
                win = view.up('window'),
                panelType = win.panelType,
                vm = this.getViewModel(),
                arr = {
                    Db: '数据库',
                    file: '文件',
                    Service: '外部接口',
                    HDFS: 'HDFS',
                };
            vm.set('allowFormat', arr[panelType]);
        },

        //生成连接地址jdbcUrl
        crateJdbcUrl: function () {
            var vm = this.getViewModel(),
                view = this.getView(),
                entityId = view.entityId,
                data = vm.getData();
            var turnData = function (data) {
                var data1 = data ? data : '';
                return data1
            };
            if (!entityId) {
                var t = turnData(data.dType) +
                    turnData(data.rNode) +
                    turnData(data.path) +
                    turnData(data.extra);
                jdbcTemp = t;
                if (data.dType != undefined) {
                    if (judeJdbc) {
                        vm.set('jdbcUrl', t);
                    }
                }
            }
        },
        onJdbcUrlBlur: function (input) {
            var value = input.getValue();
            if (value && value != jdbcTemp) {
                judeJdbc = false;
            }
        },

        //base blur 路径／库名
        onBaseBlur: function (input) {
            var vm = this.getViewModel();
            var sqlType = this.lookup('sqlTypeChange'),
                sqlValue = sqlType.getValue(),
                inputValue = input.getValue();
            if (sqlValue == 'SQLServer') {
                vm.set('path', ';DatabaseName=' + inputValue);
            } else if (sqlValue == 'Oracle') {
                vm.set('path', '/orcl');
            } else {
                vm.set('path', '/' + inputValue);
            }
            this.crateJdbcUrl();
        },

        //数据库类型选择
        onDbTypeChange: function (combo, now, pre) {
            var vm = this.getViewModel(),
                arr = {
                    'Mysql': 'mysql',
                    'Oracle': 'oracle',
                    'SQLServer': 'sqlserver',
                    'DB2': 'db2',
                    'HBase': 'hbase',
                    'MongoDb': 'mongobd',
                    'Unknown': 'unknown'
                };
            if (now == 'Oracle') {
                vm.set('dType', 'jdbc:' + arr[now] + ':thin:@');
            } else {
                vm.set('dType', 'jdbc:' + arr[now] + '://');
            }

            if (now == 'Mysql') {
                var extra = '?useUnicode=true&characterEncoding=utf8&useSSL=false';
                vm.set('extra', extra)
            } else {
                vm.set('extra', '')
            }
            this.crateJdbcUrl();
            this.onBaseBlur(this.lookup('baseUrl'));
        },

        // 根据选择的资源主机生成对应的名称和标识名
        rNodeChange: function (combo, now, pre) {
            var title = combo.rawValue,
                vm = this.getViewModel(),
                view = this.getView(),
                entityId = view.entityId,
                name = this.lookup('name').getValue();
            if (entityId == null && title) {
                var rPoolTitle = title + '资源池';
                vm.set('name', rPoolTitle);
                this.turnPiny(rPoolTitle);
                //jdbcUrl显示对应值
                var comboel = combo.getSelection();
                if (comboel) {
                    var comboData = comboel.data,
                        ip = comboData.ip,
                        ports = Object.keys(comboData.ports)[0];
                    vm.set('rNode', ip + ':' + ports);
                    this.crateJdbcUrl();
                }
            }

        },

        //文件类型 保存
        onSaveFile: function () {
            var me = this,
                form = me.getView(),
                win = form.up('window'),
                store = win.gridStore,
                value = form.getForm().getValues(),
                id = form.entityId;
            if (id == null) {
                me.fileTypeSubmit(null, null, form, store, win);
            } else {
                me.fileTypeSubmit('/' + id, 'PUT', form, store, win);
            }
        },
        //文件类型提交
        fileTypeSubmit: function (params, method, form, store, win) {
            form.submit({
                jsonSubmit: true,
                method: method ? method : 'POST',
                url: '/rest/resourcePools' + params,
                success: function () {
                    ajaxCallback()
                },
                failure: function () {
                    ajaxCallback()
                }
            });
            var ajaxCallback = function () {
                var me = this;
                Ext.toast('保存成功');
                store.reload();
                win.close();
            };
        },
        //文件类型取消修改
        onCancelFile: function () {
            var me = this,
                form = me.getView(),
                win = form.up('window');
            win.close()
        },
        //数据库类型保存
        onSaveDb: function () {

            var me = this,
                view = me.getView(),
                win = view.up('window'),
                store = win.gridView.getStore(),
                value = view.getValues(),
                panelType = win.panelType;
            if (panelType == 'Db' && value.pollingTimeMillis < 1000) {
                Ext.toast('轮询时间不得小与1000毫秒');
            } else {
                var id = view.entityId,
                    dbProperty = {
                        username: value.username,
                        password: value.password,
                        jdbcUrl: value.jdbcUrl
                    };
                if (id) {
                    var url = '/rest/resourcePools' + '/' + id,
                        extra = {
                            clientValidation: true,
                            ContentType: "application/json",
                            method: 'PUT',
                        },
                        jude = false;
                } else {
                    var url = '/rest/resourcePools',
                        extra = null, jude = true;
                }

                Ext.MessageBox.confirm('提示', '确定保存?', function (btn) {
                    if (btn == 'yes') {
                        me.viewSubmit(view, url, dbProperty, store, win, extra, jude, value.code, panelType);
                    }
                });
            }
        },

        //保存
        viewSubmit: function (view, url, dbProperty, store, win, extra, jude, code, panelType) {
            console.log(arguments);
            var me = this,
                values = view.getValues(),
                item = {
                    jsonSubmit: true,
                    url: url,
                    url1: '/a',
                    success: function (rs) {
                        me.ajaxSuccessFn(store, win, view, jude, code)
                    },
                    failure: function (rs) {
                        me.ajaxSuccessFn(store, win, view, jude, code)
                    }
                };
            if (panelType == 'Db') {
                item.params = {
                    dbProperty: dbProperty
                }
            } else {
                item.method = 'POST';
                item.jsonData = {
                    name: values.name,
                    code: values.code,
                    resourceNode: values.resourceNode,
                    base: values.base,
                    _class: 'dcsp.rbase.domain.mgr.ServiceResourcePool'
                }
            }
            item = extra ? Ext.apply(extra, item) : item;
            if (panelType == 'Db') {
                view.submit(item)
            } else {
                Ext.Ajax.request(item)
            }
        },

        //保存成功后立即同步
        ajaxSuccessFn: function (store, win, view, jude, code) {
            var me = this;
            Ext.toast('保存成功，刷新列表');
            store.reload();
            win.close();
            if (jude) {
                Ext.MessageBox.confirm('提示', '是否立即同步？', function (btn) {
                    var url = '/rest/syncResource/' + code;
                    if (btn == 'yes') {
                        Ext.Ajax.request({
                            url: url,
                            method: 'POST',
                            success: function (rs) {
                                Ext.toast('同步成功');
                            },
                            failure: function (rs) {
                                Ext.toast('同步失败');

                            },
                        })
                    }
                })
            }

        },

        //取消保存
        onCancelDb: function (btn) {
            var me = this,
                form = this.getView(),
                win = btn.up('window');
            Ext.MessageBox.confirm('提示', '确定取消保存?', function (btn) {
                if (btn == 'yes') {
                    win.close();
                }
            });
        },

        // 数据库类型测试
        onTestDb: function (btn) {
            var me = this,
                panel = btn.up('resourcepool-adddb'),
                pValues = panel.getValues(),
                dbType = pValues.dbType,
                username = pValues.username,
                password = pValues.password,
                jdbcUrl = pValues.jdbcUrl,
                base = pValues.base;

            me.judeNull(dbType, username, password, jdbcUrl, base);
        },

        //判断是否为空
        judeNull: function (dbType, username, password, jdbcUrl, base) {
            var arrAll = [dbType, username, password, jdbcUrl, base],
                arr = ['数据库类型', '用户名', '密码', '连接地址', '路径／库名'],
                showStr = [], jude = false;
            for (var i in arrAll) {
                if (arrAll[i] == '') {
                    jude = true;
                    showStr.push(arr[i]);
                }
            }
            if (jude) {
                Ext.toast(showStr.join('，') + '为空，不可测试');
            } else {
                var url = '/rest/testConnection?dbType=' + dbType + '&username=' +
                    encodeURIComponent(username) +
                    '&password=' + encodeURIComponent(password) +
                    '&jdbcUrl=' + encodeURIComponent(jdbcUrl);
                Ext.Ajax.request({
                    url: url,
                    disableCaching: false,
                    success: function (rs) {
                        var res = Ext.decode(rs.responseText),
                            success = res.success,
                            message = res.message;
                        if (success) {
                            Ext.MessageBox.alert('成功', '连接测试正确<br />' + message);
                        } else {
                            Ext.MessageBox.alert('失败', '连接测试错误<br />' + '错误内容：' + message);
                        }
                    },
                    failure: function (rs) {
                        Ext.toast('请求发送失败');
                    },
                })
            }
        },

        //标识名转换拼音
        onFocus: function (view, event, eOpts) {
            var me = this,
                inputTitle = this.lookup('name').getValue();
            if (inputTitle != '') {
                me.turnPiny(inputTitle);
            }
        },
        //中文转换拼音
        turnPiny: function (data) {
            var vm = this.getViewModel();
            Ext.Ajax.request({
                url: '/rest/pinyin/' + encodeURIComponent(data),
                success: function (rs) {
                    rs.responseText = rs.responseText.replace(/\"/g, "");
                    vm.set('code', rs.responseText);
                }
            })
        },

        //重置form
        onResetDb: function (btn) {
            var view = btn.up('resourcepool-adddb'),
                vm = view.getViewModel();
            jdbcTemp = '';
            judeJdbc = true;
            var allData = vm.getData(),
                data = vm.get('allowFormat');
            view.getForm().reset();
            var setVmDataNull = function (arr) {
                Ext.Array.each(arr, (item) => {
                    vm.set(item, null);
                })
            };
            vm.set('allowFormat', data);
            setVmDataNull(['rNode', 'dType', 'path', 'extra', 'jdbcUrl']);
        }
    }
});
