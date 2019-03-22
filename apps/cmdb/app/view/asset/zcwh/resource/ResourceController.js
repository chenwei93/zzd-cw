Ext.define('Cmdb.view.asset.zcwh.resource.ResourceController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.resource',

    onSelect: function () {
        this.open('resource-select', {
            title: '选择资源',
            xxx: this.getView(),
            width: 782,
            height: 510
        })
    },

    onDbclick: function (index, record, view) {
        var me = this,
            resourceView = this.getView().up('window').xxx;
        top._resId = record.data.id;

        // 1.关闭窗口
        var _view = me.getView();
        var win = _view.up();
        win.close();

        // 2.button显示资源标题
        var _title = record.data.title;
        var _sbtn = resourceView.lookup('titlefield');//chenw
        _sbtn.setValue(_title).setReadOnly(true);

        // 3.grid显示资源结构
        var _grid = _sbtn.up('grid');//chenw
        var cloumnsarr = [];
        var _columns = {
            text: '??',
            dataIndex: '',
            flex: 1
        };

        // 4.字段名称相对应显示
        var field = resourceView.lookup('field_name');//chnew
        Ext.Ajax.request({
            url: '/drdms/api/services/' + top._resId + '?qualified=ENTRY',
            success: function (rs) {
                var _rs = JSON.parse(rs.responseText).content,
                    _len = _rs.length;
                //4.字段名称相对应显示
                var _i = _rs.datasets[0],
                    _items = _i.fields,
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
                field.setStore(_store);
                _grid.setColumns(cloumnsarr);
            }
        });
        //grid

        Ext.Ajax.request({
            url: '/drdms/api/services/' + top._resId + '?qualified=ENTITY',
            success: function (rs) {
                var rspon = rs.responseText;
                if (rspon != '') {
                    var _rs = JSON.parse(rspon).content,
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

            }
        });


    },
    onSearch: function () {
        var me = this;
        var _fgrid = me.lookup('field_name').up('grid');

        var field = me.lookup('field_name'),
            _fvalue = field.lastValue,
            _value = me.lookup('text_field').lastValue;
        var _like = me.lookup('chooseLike').lastValue;
        if (_like == 'like') {
            var url = '/drdms/api/services/' + top._resId + '?thanks=true&qualified=ENTITY&sql.' + _fvalue + '=' + _value;
            me.onAjax(_fgrid, url)
        } else {
            var url = '/drdms/api/services/' + top._resId + '?thanks=true&qualified=ENTITY&sql.' + _fvalue + '=' + _value;
            me.onAjax(_fgrid, url)
        }

    },
    onAjax: function (grid, url) {
        var store = {
            autoLoad: true,
            proxy: {
                type: 'ajax2',
                url: url
            }
        };
        grid.setStore(store);
    }
});