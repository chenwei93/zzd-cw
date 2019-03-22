Ext.define('DA.view.entry.dataset.datasetOperateController', {
    extend: 'DA.base.ViewController',
    alias: 'controller.dataset-operate',

    onSave: function (btn, e) {
        var form = btn.up('dataset-input'),
            expression = this.lookup('expression').getValue(),
            win = btn.up('window'),
            needRecord = form.needRecord;
        Ext.Msg.confirm('提示', '确定保存？', function (chooce) {
            if (chooce == 'yes' && expression) {
                needRecord.data.attributes = {
                    expression: expression
                };
                win.close();
            }
        })
    },
    onCancel: function (btn) {
        var win = btn.up('window');
        Ext.Msg.confirm('提示', '确定放弃输入？', function (chooce) {
            if (chooce == 'yes') {
                win.close();
            }
        })
    },
    onRenderInput: function (view, event) {
        var vm = view.getViewModel(),
            record = view.needRecord,
            attributes = record ? record.get('attributes') : null,
            input = attributes ? attributes.expression : null;
        vm.set('input', input);

    },
    //operation 选择操作符
    onOperation: function (btn) {
        var btnType = btn.btnType,
            text = btn.text;
        var expression = this.lookup('expression'),
            expression_value = expression.getValue();
        var type = 'operation';
        if (text == '=') {
            text = btn.showText;
            type = 'eq';
        }
        this.functioninsertValue(expression, text, type)
    },
    //插入方法
    functioninsertValue: function (el, value, type) {
        var value = ' ' + value + ' ';
        if (el.inputEl.dom.setSelectionRange) {
            var withIns = el.inputEl.dom.value.substring(0, el.inputEl.dom.selectionStart) + value;//获取光标前的文本+value
            var pos = withIns.length;//获取光标前文本的长度
            el.inputEl.dom.value = withIns
                + el.inputEl.dom.value.substring(el.inputEl.dom.selectionEnd, el.inputEl.dom.value.length);//光标前文本+获取光标后文本
            var needPos = pos;
            if (type == 'fn' || type == 'eq') {
                needPos = pos - 2;
            }
            el.inputEl.dom.focus();
            setTimeout(function () {
                el.inputEl.dom.setSelectionRange(needPos, needPos);//设定光标位置
            }, 0);

        }
    },
    //分类grid单击每一条数据
    onRowClick: function (view, record, rowindex, colindex, btn, time, tr) {
        var inputView = view.up('dataset-input') ? view.up('dataset-input') :
            view.up('dataset-inputscript'),
            needRecord = inputView.needRecord,
            needAllData = inputView.needAllData,
            store = needRecord.store.data.items;
        Ext.Array.each(store, (item, index, arr) => {
            item = item.data;
        });
        Ext.Array.each(needAllData, (item, index, arr) => {
            item.name = item.entityKey;
        });
        var storeData = [];
        if (record.data.items.length == 0) {
            if (record.get('code') == 'entry') {
                storeData = needAllData
            } else if (record.get('code') == 'sjjzd') {
                var showArr = [];
                for (var i in needAllData) {
                    var nItem = needAllData[i].fields.items;
                    for (var j in nItem) {
                        if (nItem[j].title.indexOf(needAllData[i].entityTitle) < 0) {
                            nItem[j].title = needAllData[i].entityTitle + '-' + nItem[j].title;
                        }
                        showArr.push(nItem[j]);
                    }
                }
                storeData = showArr;
            } else {
                storeData = store;
            }
        } else {
            storeData = record.data.items
        }
        this.lookup('showGrid').setStore({
            data: storeData
        })
    },
    //双击输入
    onRowDBClick: function (view, record, tr, index, a, event) {
        var name = record.get('name'),
            title = record.get('title'),
            vm = this.getViewModel(),
            type = record.get('type'),
            expression = this.lookup('expression');
        var useName = '';
        if (type == 'fn') {
            useName = name
        } else if (type == 'operation') {
            if (record.get('code') == 'equal') {
                type = 'eq'
            }
            useName = name
        } else {
            useName = '$' + name
        }
        vm.set('showText', title + ':' + name);
        this.functioninsertValue(expression, useName, type)
    },

    // 单条脚本自定义加载
    onRenderScript: function (view) {
        var vm = view.getViewModel(),
            win = view.up('window');
        if (win) {
            var record = view.up('window').needRecord,
                data = record.data,
                EEValue = '';
            if (data.fields.dataId) {
                EEValue = data.fields.dataId;
            } else {
                if (data.extraAttributes) {
                    if (data.extraAttributes.Dataset_dataId) {
                        EEValue = data.extraAttributes.Dataset_dataId
                    }
                }
            }
            vm.set('entry_expression', EEValue);
        }
    },

    // 单条脚本自定义保存
    onSaveScript: function (btn) {
        var win = btn.up('window'),
            record = win.needRecord,
            entry_expression = this.lookup('expression').getValue();
        Ext.Msg.confirm('提示', '确定保存当前脚本？', function (choose) {
            if (choose == 'yes') {
                record.data.fields.dataId = entry_expression;
                win.close();
            }
        })
    },
    // 单条脚本自定义取消
    onCancelScript: function (btn) {
        var win = btn.up('window');
        Ext.Msg.confirm('提示', '确定取消保存当前脚本？', function (choose) {
            if (choose == 'yes') {
                win.close();
            }
        })
    },

});
