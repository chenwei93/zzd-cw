Ext.define('DA.view.entry.services.ServicesController', function () {
    function turnData(data) {
        return data ? data : ''
    }

    return {
        extend: 'DA.base.ViewController',
        alias: 'controller.services',

        //加载数据
        onServicesRender: function (view) {
            var me = this,
                win = view.up('window'),
                vM = me.getViewModel();
            var iLs = me.itemLists(me.getView()),
                sOperatePanel = iLs.sOperatePanel,
                sOperate = iLs.sOperate;
            if (win) {
                var needId = win.needId;
                if (needId) {
                    me.getAjax('/rest/services/' + needId).then((rs) => {
                        var rText = Ext.JSON.decode(rs),
                            con = rText.configuration,
                            entityId = rText.entityId,
                            changeFn = sOperatePanel.changeActiveItem;
                        vM.setData(rText);
                        if (rText.configuration) {
                            if (rText.configuration.attributes) {
                                var exData = rText.configuration.attributes;
                                vM.set('LimitPerHour', exData.LimitPerHour);
                                vM.set('CacheExpire', exData.CacheExpire);
                                vM.set('requestType', exData.requestType);
                            }
                        }
                        //修改当前服务对应的输入输出
                        changeFn(sOperatePanel, rText.qualified);
                        if (con) {
                            var atr = con.attributes;
                            if (atr) {
                                //接口方式，版本
                                me.setVmData(vM, ['version', 'jktype'], [turnData(atr.version), turnData(atr.version)]);
                                //当前接口类型对应的输入输出。
                                var aItem = sOperatePanel.getLayout().getActiveItem(),
                                    aGird = aItem.query('grid'),
                                    input = aGird[0].getStore(),
                                    output = aGird[1].getStore();
                                input.insert(0, Ext.JSON.decode(atr.input));
                                output.insert(0, Ext.JSON.decode(atr.output));
                            }
                        }
                        if (entityId) {
                            me.getAjax('/rest/entryDatas/' + entityId + '?thanks=false').then((rs) => {
                                    var rText = Ext.JSON.decode(rs),
                                        title = rText.entityTitle ? rText.entityTitle : rText.resTitle;
                                    me.setVmData(vM, ['show_title', 'show_entityKey', 'show_sql', 'show_sqltable'], [title, rText.entityName, rText.mdId, rText.format])
                                    sOperate.needRecord = rText.fields.items;
                                    sOperate.needEntityId = rText.id;

                                    var fItem = rText.fields.items,
                                        sData = [], outPut = [], inPut = [];
                                    me.setInputOutPut(fItem, sData, inPut, outPut);

                                    //reference
                                    var references = rText.references;
                                    if (references && references.length > 0) {
                                        for (var i in references) {
                                            me.getAjax('/rest/entryDatas/' + references[i] + '?thanks=false')
                                                .then((res) => {
                                                    var resPon = Ext.JSON.decode(res),
                                                        resPonFields = resPon.fields.items;
                                                    me.setInputOutPut(resPonFields, sData, inPut, outPut)
                                                });
                                        }
                                    }
                                    sOperate.inPut = inPut;
                                    sOperate.outPut = outPut;
                                }
                            );
                        }
                        else {
                            console.log('entityId NULL')
                        }

                    })
                }
            }
        },
        setInputOutPut: function (arr, sData, inPut, outPut) {
            Ext.Array.each(arr, (item) => {
                if (item.dataType == 'Reference') {
                    sData.push(item)
                }
                if (item.attributes) {
                    var attr = item.attributes;
                    if (attr.query) {
                        inPut.push(item)
                    }
                    if (attr.display) {
                        outPut.push(item)
                    }
                }

            });
        },


        //设置viewModel data
        setVmData: function (vM, item, data) {
            Ext.Array.each(item, (i, index) => {
                vM.set(i, data ? data[index] : null)
            })
        },
        //extAjax
        getAjax: function (url) {
            return new Ext.Promise(function (resolve, reject) {
                Ext.Ajax.request({
                    url: url,
                    success: function (response) {
                        resolve(response.responseText);
                    },
                    failure: function (response) {
                        reject(response.status);
                    }
                });
            });
        },
        //各组件列表
        itemLists: function (service) {
            var sBase = service.lookup('serbase'),
                sOperate = service.lookup('seroperate'),
                sOperatePanel = sOperate.lookup('seractive');
            var lists = {
                service: service,
                sBase: sBase, //基本信息 input
                sOperate: sOperate, //选择信息 entry+i/output
                sOperatePanel: sOperatePanel //当前选择的接口类型对应的i/output
            };
            return lists
        },
        //更新
        onRenew: function () {
            var me = this,
                showGrid = this.lookup('show'),
                storeGrid = this.lookup('operate').lookup('grid'),
                store = storeGrid.getStore().data.items,
                columns = [];
            Ext.Array.each(store, (items, index, arr) => {
                var data = items.data;
                if (data.hasOwnProperty('xs')) {
                    if (data.xs) {
                        var columnsItems = {
                            text: data.name,
                            flex: 1,
                            reference: data.code,
                            dataIndex: data.name
                        };
                        columns.push(columnsItems);
                    }
                }
            });
            showGrid.setColumns(columns);
            showGrid.setStore({autoLoad: true, data: [{}]});

        },
        //预览
        onSee: function () {
            console.log('预览');
        },
        //输入脚本
        onCelldbclick: function (a, b, c, d, e, f, h) {
            this.open({
                xtype: 'services-input'
            }, {
                width: 500,
                height: 265,
                title: '输入脚本'
            });
        },

        //接口类型切换
        onComboChange: function (combo, value, pre, event) {
            var services = combo.up('services'),
                sOperatePanel = this.itemLists(services).sOperatePanel,
                ChangeFn = sOperatePanel.changeActiveItem;
            ChangeFn(sOperatePanel, value);
        },

        //保存：base，input，output
        onSave: function (btn) {
            var me = this,
                view = me.getView(),
                itemList = this.itemLists(view),
                sBaseValue = itemList.sBase.getValues(),
                sOperateActive = itemList.sOperatePanel.getLayout().getActiveItem(),
                win = view.up('window');

            var aGird = sOperateActive.query('grid'),//输入输出两个grid
                iStore = aGird[0].getStore(),//输入store
                iData = iStore.getData().items,//输入store的data items
                oStore = aGird[1].getStore(),//输出store
                oData = oStore.getData().items;//输出store的data items
            for (var i in iData) {
                iData[i] = iData[i].data
            }
            for (var j in oData) {
                oData[j] = oData[j].data
            }
            //提交的数据
            var nId = itemList.sOperate.needEntityId;
            var jsonData = {
                qualified: sBaseValue.qualified,
                title: sBaseValue.title,
                name: sBaseValue.name,
                entityId: nId,
                configuration: {
                    _class: 'dcsp.fl.configuration.ContentConfiguration',
                    attributes: {
                        version: sBaseValue.version,
                        jktype: sBaseValue.jktype,
                        input: Ext.JSON.encode(iData),
                        output: Ext.JSON.encode(oData),
                        requestType: sBaseValue.requestType,
                        LimitPerHour: sBaseValue.LimitPerHour,
                        CacheExpire: sBaseValue.CacheExpire ? sBaseValue.CacheExpire : 300
                    }
                },
                entity: 'entries/' + nId,
            };
            console.log('提交的数据：', jsonData);

            //重置当前页面
            var resetService = function (me) {
                //activeItemGrid
                Ext.Array.each(aGird, (item) => {
                    item.setStore({
                        autoLoad: true,
                        data: []
                    })
                });
                //base
                itemList.sBase.getForm().reset();
                //数据集
                var el = itemList.sOperate,
                    vm = el.getViewModel();
                me.setVmData(vm, ['show_entityKey', 'show_sql', 'show_sqltable', 'show_title']);
                itemList.sOperate.needEntityId = '';
                //jsonData
                jsonData = {};
            };

            //新增
            var url = '/rest/services',
                params = '',
                method = 'POST',
                fn = function () {
                    Ext.toast('保存成功');
                    resetService(me);

                };

            // 修改
            if (win) {
                //保存修改：put,/id
                params = '/' + win.needId;
                method = 'PUT';
                fn = function () {
                    Ext.toast('保存成功，刷新列表');
                    win.gridView.getStore().reload();
                    win.close();
                }
            }
            Ext.Ajax.request({
                url: url + params,
                method: method,
                jsonData: jsonData,
                success: function (rs) {
                    fn();
                }
            });
        },


        // params鼠标失去焦点
        onBlur: function (field) {
            var value = field.value,
                showName = this.lookup('bsName'),
                nameValue = showName.getValue();
            if (value && !nameValue) {
                this.turnPiny(value, showName);

            }
        },

        //标识名转换拼音
        turnPiny: function (value, el) {
            Ext.Ajax.request({
                url: '/rest/pinyin/' + encodeURIComponent(value),
                success: function (rs) {
                    rs.responseText = rs.responseText.replace(/\"/g, "");
                    el.setValue(rs.responseText);
                }
            })
        }

    }
});
