Ext.define('DG.view.roleconf.RoleConfFormController', {
    extend: 'DG.base.ViewController',
    alias: 'controller.roleconf-form',


    showNext: function () {
        this.doCardNavigation(1);
    },

    showPrevious: function (btn) {
        this.doCardNavigation(-1);
    },

    doCardNavigation: function (incr) {
        var me = this;
        var l = me.getView().getLayout();
        var i = l.activeItem.reference.split('card-')[1];
        var next = parseInt(i, 10) + incr;
        l.setActiveItem(next);

        this.lookup('cardprev').setDisabled(next === 0);
        this.lookup('cardnext').setDisabled(next === 5);
    },
    //规则配置
    onChooseEntry: function (btn) {
        this.open({
            xtype: 'choose-sql'
        }, {
            title: '选择数据库',
            extra: btn.extra,
            width: '70%'
        })
    },

    onRowDbClick: function (view, record, tr, rowindex) {
        var win = view.up('window'),
            vm = this.getViewModel(),
            roleConf = view.up('roleconf-form');
        if (win.extra == 'compare') {
            vm.set('compareEntry', record.get('tableName'));
            this.setCompareRolesStore(record.get('tableName'))
        } else {
            roleConf.sqlTableName = record.get('tableName');
            vm.set('tableName', record.get('tableName'));
            this.setEntryGridStore();
        }
        win.close();
    },
    //资源列表
    setEntryGridStore: function () {
        var view = this.getView(),
            sqlTableName = view.sqlTableName;
        var entryGrid1 = this.lookup('entryGrid1'),
            entryGrid2 = this.lookup('entryGrid2'),
            entryGrid3 = this.lookup('entryGrid3');
        var store = {
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: '/data-quality-rest/v1/rule/tables/colums/' + sqlTableName
            }
        };
        entryGrid1.setStore(store);
        entryGrid2.setStore(store);
        entryGrid3.setStore(store);
    },
    //比对规则，比对字段
    setCompareRolesStore: function (data) {
        var vm = this.getViewModel();
        Ext.Ajax.request({
            url: '/data-quality-rest/v1/rule/tables/colums/' + data,
            success: function (rs) {
                var storeData = Ext.decode(rs.responseText);
                vm.set('storeData', storeData);

            }
        });
    },
    /*
    * 选择的资源加入规则
    * */
    onEntryJion: function (view, rowindex, colindex, btn, time, record, tr) {
        var data = record.getData();
        var fieldset = view.up('fieldset').next('fieldset'),
            grid = fieldset.down('grid'),
            store = grid.getStore();
        store.insert(0, data);
    },
    // 1.全部加入
    onAllAdd: function (btn) {
        var grid = btn.up('grid');
        var entryGrid = this.lookup('entryGrid1'),
            store = entryGrid.getStore();
        if (store.getData().length > 0) {
            grid.setStore(store);
        } else {
            Ext.toast('请先选择信息资源');
        }
    },
    //2.全部清空
    onAllRemove: function (btn) {
        var grid = btn.up('grid');
        grid.setStore({data: []});
    },
    //3.删除单条
    onOneRemove: function (view, rowindex, colindex, btn, time, record, tr) {
        var grid = view.up('grid'),
            store = grid.getStore();
        store.removeAt(rowindex);
    },
    //4.编辑单条
    onOneEdit: function (view, rowindex, colindex, btn, time, record, tr) {
        console.log('edit one record');
    },

    //自定义规则：删除规则
    onRemoveOneRole: function (btn) {
        var fieldset = btn.up('fieldset'),
            customizeRoles = btn.up('customize-roles');
        customizeRoles.remove(fieldset);
    },
    // 结果输出：添加
    onResultOutputAdd: function (btn) {
        var grid = btn.up('grid'),
            store = grid.getStore();
        store.insert(0, {rolesType: '', log: ''})
    },
    //保存
    onRoleConfSave: function (btn) {
        var me = this,
            view = this.getView(),
            vm = this.getViewModel();
        //base
        var ruleName = vm.get('ruleName'),
            rolesDes = vm.get('ruleDescrption'),
            tableName = vm.get('tableName');
        var baseinfo = {
            ruleName: ruleName,
            ruleDescrption: rolesDes,
            tableName: tableName
        };

        //clean-roles 清洗规则
        var cleanRoles = this.lookup('cleanRoles'),
            cleanStore = cleanRoles.getStore(),
            cleanData = cleanStore.getData();
        var washRules = this.turnStoreToData(cleanData, 'wash');

        //change-roles 转换规则
        var changeRoles = this.lookup('changeRoles'),
            changeStore = changeRoles.getStore(),
            changeData = changeStore.getData();
        var convertRules = this.turnStoreToData(changeData, 'convert');


        //compare-roles 比对规则
        var compareRoles = this.lookup('compareRoles'),
            compareStore = compareRoles.getStore(),
            compareData = compareStore.getData();
        var compareTable = vm.get('compareEntry'),
            comparisonRule = {
                compareTable: compareTable,
                comparisonItems: this.turnStoreToData(compareData, 'comparison')
            };

        //customize-roles 自定义规则
        var customizeRoles = this.lookup('customizeRoles'),
            customizeData = customizeRoles.getValues(),
            orders = customizeData.order,
            sqls = customizeData.sql;
        var customRules = [];
        for (var i in orders) {
            var item = {
                order: orders[i],
                sql: sqls[i]
            };
            customRules.push(item);
        }

        //result-output 结果输出
        var resultOutput = this.lookup('resultGrid'),
            resultStore = resultOutput.getStore(),
            resultData = resultStore.getData(),
            jobType = vm.get('jobType'),
            jobBeginTime = vm.get('jobBeginTime'),
            checkBox1 = this.lookup('checkBox1').checked;
        var gedt = Ext.util.Format.date(jobBeginTime, 'Y-m-d H:i:s');
        var jobConfig = {
            type: jobType,
            beginTime: gedt,
            repeat: checkBox1
        };
        var logConfig = {};
        Ext.Array.each(resultData.items, (item, index, arr) => {
            if (item.get('rolesType')) {
                logConfig[item.get('rolesType')] = item.get('log');
            }

        });
        var id = this.getView().needId,
            params = id ? 'update' : 'add';
        var submitData = {
            baseinfo: baseinfo,
            washRules: washRules,
            convertRules: convertRules,
            comparisonRule: comparisonRule,
            customRules: customRules,
            jobConfig: jobConfig,
            logConfig: logConfig
        };
        if (id) {
            submitData.id = id
        }
        Ext.Ajax.request({
            url: '/data-quality-rest/v1/rule/' + params,
            method: 'POST',
            jsonData: submitData,
            success: function () {
                Ext.toast('保存成功');
                var entryGrid1 = me.lookup('entryGrid1'),
                    entryGrid2 = me.lookup('entryGrid2'),
                    entryGrid3 = me.lookup('entryGrid3');
                me.setNullStore([cleanRoles, changeRoles, compareRoles,
                    resultOutput, entryGrid1, entryGrid2, entryGrid3]);

                customizeRoles.removeAll();
                customizeRoles.add(
                    {
                        title: '数据规则',
                        layout: 'column',
                        items: [{
                            xtype: 'textfield',
                            fieldLabel: '信息资源名',
                            bind: '{tableName}',
                            name: 'tableName',
                            readOnly: true,
                            columnWidth: 0.5
                        }, {
                            xtype: 'displayfield',
                            columnWidth: 0.4,
                        }, {
                            xtype: 'button',
                            text: '新增',
                            columnWidth: 0.1,
                            handler: 'onNew',
                            iconCls: 'x-fa fa-plus'
                        }]
                    }
                );
                me.setNullData(
                    ['ruleName', 'ruleDescrption',
                        'tableName', 'compareEntry',
                        'storeData', 'jobType', 'jobBeginTime']);
                var win = btn.up('window');
                if (win) {
                    win.close();
                    win.gridView.getStore().reload();
                }
            },
            failure: function () {
                Ext.toast('保存失败');
            },
        })
    },
    setNullStore: function (gridLists) {
        Ext.Array.each(gridLists, (item, index, arr) => {
            item.setStore({data: []});
        })
    },
    setNullData: function (dataLists) {
        var vm = this.getViewModel();
        Ext.Array.each(dataLists, (item, index, arr) => {
            vm.set(item, '');
        })
    },
    turnStoreToData: function (arr, type) {
        var arrData = arr.items, returnData = [];
        for (var i in arrData) {
            var item = arrData[i], a = {};
            switch (type) {
                case 'wash':
                    a = {
                        name: this.turnData(item, 'columnName'),
                        type: this.turnData(item, 'type'),
                        condition: this.turnData(item, 'condition'),
                        order: this.turnData(item, 'order') != '' ? this.turnData(item, 'order') : i,
                    };
                    break;
                case 'convert':
                    a = {
                        name: this.turnData(item, 'columnName'),
                        type: this.turnData(item, 'type'),
                        condition: this.turnData(item, 'condition'),
                        order: this.turnData(item, 'order') != '' ? this.turnData(item, 'order') : i,
                        rule: this.turnData(item, 'rule'),
                    };
                    break;
                case'comparison':
                    a = {
                        name: this.turnData(item, 'columnName'),
                        compareName: this.turnData(item, 'compareName'),
                        condition: this.turnData(item, 'condition')
                    };
                    break;
            }
            returnData.push(a);
        }
        return returnData;
    },
    turnData: function (item, name) {
        var d = item.get(name) ? item.get(name) : '';
        return d
    },
    //增加自定义规则
    onNew: function (btn) {
        var customizeRoles = btn.up('customize-roles');
        var item = {
            layout: 'column',
            items: [{
                fieldLabel: '允许顺序',
                xtype: 'numberfield',
                name: 'order',
                maxValue: 10,
                minValue: 0,
                value: 1,
                columnWidth: 0.3,
            }, {
                xtype: 'displayfield',
                columnWidth: 0.5,
            }, {
                xtype: 'button',
                text: '删除规则',
                columnWidth: 0.2,
                handler: 'onRemoveOneRole'
            }, {
                xtype: 'textarea',
                columnWidth: 1,
                name: 'sql',
                fieldLabel: '规则代码'
            }]
        };
        customizeRoles.add(item);
    },
    onRender: function (view) {
        var me = this,
            vm = this.getViewModel(),
            cleanRoles = this.lookup('cleanRoles'),
            changeRoles = this.lookup('changeRoles'),
            compareRoles = this.lookup('compareRoles'),
            customizeRoles = this.lookup('customizeRoles'),
            resultOutput = this.lookup('resultOutput');
        if (view.needId) {
            Ext.Ajax.request({
                url: '/data-quality-rest/v1/rule/' + view.needId,
                success: function (rs) {
                    var res = Ext.decode(rs.responseText);
                    vm.set('ruleDescrption', res.baseinfo.ruleDescrption);
                    vm.set('ruleName', res.baseinfo.ruleName);
                    vm.set('tableName', res.baseinfo.tableName);
                    vm.set('jobType', res.jobConfig.type);
                    vm.set('jobBeginTime', res.jobConfig.beginTime);
                    vm.set('compareEntry', res.comparisonRule.compareTable);
                    view.sqlTableName = res.baseinfo.tableName;
                    me.setEntryGridStore();
                    me.setCompareRolesStore(res.comparisonRule.compareTable);
                    cleanRoles.setStore({
                        data: me.nameToColumnName(res.washRules)
                    });
                    changeRoles.setStore({
                        data: me.nameToColumnName(res.convertRules)
                    });

                    compareRoles.setStore({
                        data: me.nameToColumnName(res.comparisonRule.comparisonItems)
                    });

                    var data = res.logConfig, result = [];
                    for (var i in data) {
                        var a = {
                            rolesType: i,
                            log: data[i]
                        };
                        result.push(a)
                    }
                    resultOutput.down('grid').setStore({
                        data: result
                    });
                    var cus = res.customRules;
                    Ext.Array.each(cus, (item, index) => {
                        var x = {
                            layout: 'column',
                            items: [{
                                fieldLabel: '允许顺序',
                                xtype: 'numberfield',
                                name: 'order',
                                maxValue: 10,
                                minValue: 0,
                                value: item.order,
                                columnWidth: 0.3,
                            }, {
                                xtype: 'displayfield',
                                columnWidth: 0.5,
                            }, {
                                xtype: 'button',
                                text: '删除规则',
                                columnWidth: 0.2,
                                handler: 'onRemoveOneRole'
                            }, {
                                xtype: 'textarea',
                                columnWidth: 1,
                                name: 'sql',
                                value: item.sql,
                                fieldLabel: '规则代码'
                            }]
                        };
                        customizeRoles.add(x);
                    })
                }
            })
        }

    },
    nameToColumnName: function (arr) {
        Ext.Array.each(arr, (item, index) => {
            item.columnName = item.name
        });
        return arr
    }
});
