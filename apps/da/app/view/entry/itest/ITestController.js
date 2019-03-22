Ext.define('DA.view.entry.itest.iTestController', {
    extend: 'DA.base.ViewController',
    alias: 'controller.itest',

    //onSelect
    onSelect: function (btn) {
        this.open({
            xtype: 'select-services'
        }, {
            title: '选择接口',
            width: 500,
            height: 500
        })

    },
    statics: {
        preFormValues: null
    },
    onSelectServicesRender: function (view) {
        // view.getViewModel().getStore('list').loadPage(1);
    },
    onDbClick: function (view, record) {
        var title = record.get('title'),
            url = record.get('url'),
            vm = this.getViewModel(),
            win = view.up('window');
        //  var yuming = location.href.split('/')[2];
        vm.set('serviceTitle', title);
        vm.set('serviceUrl', url);
        vm.set('serviceId', record.get('id'));
        vm.set('qualified', record.get('qualified'));
        win.close();
        this.getView().formNeedData = null;
        //发送请求
        this.open({
            xtype: 'request-params',
            servicesId: record.get('id'),
        }, {
            title: '输入参数',
            width: 400,
            height: 400
        })
    },
    onSearch: function (btn) {
        var vm = this.getViewModel(),
            id = vm.get('serviceId');
        var grid = this.getView(),
            noInput = grid.noInput;
        if (id) {
            if (noInput) {
                this.sendAjaxGetGridStore(null, vm, id, null);
            } else {
                this.open({
                    xtype: 'request-params',
                    servicesId: id
                }, {
                    title: '输入参数',
                    width: 400,
                    height: 400
                })
            }
        } else {
            Ext.toast('当前未选择接口，不可操作')
        }
    },
    onRequestParamsRender: function (view) {
        var me = this,
            id = view.servicesId,
            formNeedData = me.getView().formNeedData;
        if (formNeedData) {
            me.orgForm(formNeedData, view);
        } else {
            Ext.Ajax.request({
                url: '/rest/queryServiceMeta/' + id,
                success: function (rs) {
                    var content = Ext.JSON.decode(rs.responseText);
                    me.getView().formNeedData = content;
                    me.orgForm(content, view, 'reset');
                },
                failure: function (rs) {
                    Ext.toast('当前接口发生错误，不可测试');
                    view.up('window').close();
                }
            });
        }

    },
    //orgForm
    orgForm: function (content, view, type) {
        var me = this,
            vm = this.getViewModel(),
            win = view.up('window'),
            id = view.servicesId,
            input = content.input,
            output = content.output,
            iItem = input ? input.items : [],
            oItems = output ? output.items : [],
            grid = me.getView();
        if (type) {
            if (oItems.length > 0) {
                var columns = [];
                Ext.Array.each(oItems, (item) => {
                    var cItem = {
                        text: item.title,
                        dataIndex: item.name,
                        flex: 1
                    };
                    columns.push(cItem);
                });
                grid.hasColumns = true;
                grid.setColumns(columns);
            } else {
                grid.hasColumns = false;
                grid.setColumns([]);
            }
            //校验
            if (vm.get('qualified') == 'ENTITY!') {
                columns = [{
                    xtype: 'booleancolumn',
                    trueText: '校验正确',
                    falseText: '校验错误',
                    text: '校验结果',
                    dataIndex: 'content',
                    flex: 2,
                }];
                grid.hasColumns = true;
                grid.setColumns(columns);
            }

            grid.setStore({
                data: []
            });
            DA.view.entry.itest.iTestController.preFormValues = null;
        }
        if (iItem.length > 0) {
            var formItem = [];
            Ext.Array.each(iItem, (item) => {
                var xitem = {
                    fieldLabel: item.title,
                    name: item.name
                };
                formItem.push(xitem);
            });
            view.removeAll();
            view.add(formItem);
            if (DA.view.entry.itest.iTestController.preFormValues) {
                view.getForm().setValues(DA.view.entry.itest.iTestController.preFormValues)
            }
            grid.noInput = false;
        } else {
            view.up('window').close();
            grid.noInput = true;
            this.sendAjaxGetGridStore(null, vm, id, win);
        }

    },

    onSend: function (btn) {
        var me = this,
            win = btn.up('window'),
            vm = this.getViewModel(),
            form = btn.up('form'),
            fValue = form.getValues(),
            id = form.servicesId;
        this.sendAjaxGetGridStore(fValue, vm, id, win);
    },

    sendAjaxGetGridStore: function (fValue, vm, id, win) {
        var me = this;
        var url = '/proxy/api/' + id + '?appid=000000';
        var showUrl = '/proxy/api/' + id;
        if (fValue) {
            DA.view.entry.itest.iTestController.preFormValues = fValue;//保存原数据
            var params = [];
            for (var i in fValue) {
                if (fValue[i]) {
                    var str = fValue[i].replace(/ /g, '');
                    var pitem = i + '=' + str;
                    params.push(pitem)
                }
            }
            if (params.length != 0) {
                url = url + '&' + params.join('&');
                showUrl = showUrl + '?' + params.join('&');
            }
        }
        // var yuming = location.href.split('/')[2];

        vm.set('serviceUrl', showUrl);
        var hasColumns = me.getView().hasColumns;
        Ext.Ajax.request({
            url: url,
            success: function (rs) {
                var res = Ext.JSON.decode(rs.responseText);
                //没有选择输出的情况下：
                if (hasColumns != true) {
                    var orgGColumn = [];
                    if (res.length > 0) {
                        for (var i in res[0]) {
                            var c = {
                                text: i,
                                dataIndex: i,
                                flex: 1
                            };
                            orgGColumn.push(c);
                            me.getView().setColumns(orgGColumn);
                        }
                    }
                }
                //校验
                if (vm.get('qualified') == 'ENTITY!') {
                    me.getView().setStore({
                        data: [{
                            content: res.content
                        }]
                    });
                } else {
                    me.getView().setStore({
                        data: res.content
                    });
                }

                if (win) {
                    win.close();
                }
            }
        });
    }
});
