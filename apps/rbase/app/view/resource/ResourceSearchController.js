Ext.define('RBase.view.resource.ResourceSearchController', {
    extend: 'RBase.base.ViewController',

    alias: 'controller.resourcesearch',
    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    onSelect: function () {
        this.open('resource-select', {
            title: '选择资源',
            width: 782,
            height: 510,
            xxx: this.getView()
        });
    },

    onDbclick: function (index, record, view) {
        // debugger;
        var me = this;
        top._resId = record.data.resId;

        // 1.关闭窗口
        var _view = me.getView();
        var _win = _view.up();
        _win.close();

        // 2.button显示资源标题
        var _title = record.data.title;
        var _sbtn = _win.xxx.lookup('selecebtn');//chenw
        _sbtn.setValue(_title);
        _sbtn.setReadOnly(true);
        // 3.grid显示资源结构
        var _grid = _sbtn.up('grid');//chenw
        var cloumnsarr = [];
        var _columns = {
            text: '??',
            dataIndex: '',
            flex: 1
        };

        // 4.字段名称相对应显示
        var _field = _win.xxx.lookup('field_name');//chnew
        var _i = record.data.metadata.fields,
            _items = _i.items,
            _length = _items.length,
            arr = [];
        for (var i = 0; i < _length; i++) {
            var _title = _items[i].title,
                _name = _items[i].name;
            var _data = {"text": _title, "value": _name};
            _columns = {
                text: _title, dataIndex: _name, flex: 1
            };
            arr.push(_data);
            cloumnsarr.push(_columns)
        }
        var _store = {
            fields: ['text', 'value'],
            data: arr
        };
        _field.setStore(_store);
        _grid.setColumns(cloumnsarr);

        Ext.Ajax.request({
            url: '/rbase/service/queryEntity/' + top._resId,
            success: function (rs) {
                var _rs = JSON.parse(rs.responseText).content,
                    _len = _rs.length;
                var arrh = [], arrx = {}, arrz = [];
                var coarr = [];

                for (var l = 0; l < _len; l++) {
                    var _it = _rs[l].items,
                        _itlen = _it.length;
                    for (var m = 0; m < _itlen; m++) {
                        var _name = _it[m].name,
                            _value = _it[m].value;
                        var data = {};
                        data[_name] = _value;
                        arrh.push(data);
                        coarr.push(_name);
                    }
                    arrh.map(function (item) {
                        // Object.assign 合并 _obj 和 item
                        arrx = Object.assign({}, arrx, item)
                    });
                    arrz.push(arrx)
                }
                for (var n = 0; n < _itlen; n++) {
                    var _d = _rs[0].items[n].name;
                    coarr.push(_d);
                }
                var _unstore = {
                    fields: coarr,
                    data: arrz
                };
                _grid.setStore(_unstore);
            }
        });


    },
    onSearch: function () {
        var me = this;
        var _fgrid = me.lookup('field_name').up('grid');//chenw
        var fieldsarr = [];
        var _field = me.lookup('field_name'),//chenw
            _fvalue = _field.lastValue,
            _value = me.lookup('text_field').lastValue;//chenw
        Ext.Ajax.request({
            url: '/rbase/service/queryEntity/' + top._resId + '?sql.' + _fvalue + '=' + _value,
            success: function (rs) {
                var needRs = JSON.parse(rs.responseText).content;
                if (needRs.length > 0) {
                    var storedata = [];
                    for (var i = 0; i < needRs.length; i++) {
                        var _rs = needRs[i].items,
                            _length = _rs.length;
                        for (var j = 0; j < _length; j++) {
                            var _name = _rs[j].name,
                                _value = _rs[j].value;
                            var data = {};
                            data[_name] = _value;
                            storedata.push(data);
                        }
                        var _objAssign = {};
                        storedata.map(function (item) {
                            _objAssign = Object.assign({}, _objAssign, item)
                        });
                        fieldsarr.push(_objAssign);
                    }
                    var _fgstore = {
                        data: fieldsarr
                    };
                    _fgrid.setStore(_fgstore);
                } else {
                    _fgrid.setStore(null);
                }

            }
        });
    }
});