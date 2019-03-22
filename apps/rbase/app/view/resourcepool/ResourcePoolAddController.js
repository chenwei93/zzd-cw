/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('RBase.view.resourcepool.ResourcePoolAddController', function () {
    var jdbcTemp = '', judeJdbc = true;
    return {
        extend: 'RBase.base.ViewController',
        alias: 'controller.resourcepool-add',

        initViewModel: function (vm) {
            if (this.getView().config.entityId != null) {
                this.loadEntity();
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
            vm.set('name','');
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
                url: '/rbase/api/resourcePools' + params,
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

        onSaveDb: function () {
            var me = this;
            var win = me.getView().up('window'),
                store = win.gridView.getStore(),
                value = me.getView().getForm().getValues();
            if (value.pollingTimeMillis < 1000) {
                Ext.toast('轮询时间不得小与1000毫秒');
            } else {
                var dbProperty = {
                    username: value.username,
                    password: value.password,
                    jdbcUrl: value.jdbcUrl
                };
                var id = me.getView().entityId,
                    url = '/rbase/api/resourcePools',
                    params = id ? '/' + id : '',
                    method = id ? 'PUT' : 'POST';
                Ext.MessageBox.confirm('提示', '确定保存？', function (chooce) {
                    if (chooce == 'yes') {
                        me.getView().submit({
                            params: {
                                dbProperty: dbProperty
                            },
                            jsonSubmit: true,
                            url: url + params,
                            method: method,
                            success: function (rs) {
                                me.xgSuccess('保存成功。', store, win);
                            },
                            failure: function () {
                                me.xgSuccess('保存成功。', store, win);
                            }
                        });
                    }
                })
            }
        },
        xgSuccess: function (msg, store, win) {
            Ext.toast(msg);
            store.reload();
            win.close();
        },
        onCancelDb: function () {
            var me = this;
            var win = me.getView().up('window');
            Ext.Msg.confirm('提示', '确定取消保存？', function (chooce) {
                if (chooce == 'yes') {
                    me.getView().getForm().reset();
                    win.close()
                }
            })
        },
        onTestDb: function (btn) {
            var panel = btn.up('resourcepool-adddb'),
                panelValues = panel.getValues();
            var dbType = panelValues.dbType,
                username = panelValues.username,
                password = panelValues.password,
                jdbcUrl = panelValues.jdbcUrl,
                base = panelValues.base;
            if (dbType == "" || username == "" || password == "" || jdbcUrl == "" || base == "") {
                Ext.toast('当前有项为空，不可测试');
            } else {
                var url = '/rbase/api/testConnection?dbType=' + dbType + '&username=' +
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
                url: '/rbase/api/pinyin/' + encodeURIComponent(data),
                success: function (rs) {
                    rs.responseText = rs.responseText.replace(/\"/g, "");
                    vm.set('code', rs.responseText);
                }
            })
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


    }
});
