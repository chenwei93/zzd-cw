Ext.define('DA.view.dataservice.entry.EntryViewMetadata', {
    extend: 'Ext.grid.Panel',
    xtype: 'entryview-metadata',


    height: 510,
    scrollable: true,
    store: {
        data: [{}]
    },
    columns: [{
        text: '字段名称',
        dataIndex: 'field',
        flex: 1
    }, {
        text: '值',
        dataIndex: 'value',
        flex: 1,
        renderer: function (v) {
            if (v == 'YES') {
                return '是'
            } else if (v == 'NO') {
                return '否'
            } else if (v == 'Db') {
                return '数据库'
            } else if (v == 'File') {
                return '文件'
            } else if (v == 'Hdfs') {
                return 'HDFS'
            } else if (v == 'Http') {
                return 'HTTP'
            } else {
                return v

            }
        }
    }],
    listeners: {
        render: function () {
            var me = this;
            var entityId = me.up('entry-view').entityId;
            Ext.Ajax.request({
                url: '/drdms/api/entryDatas/' + entityId,
                success: function (rs) {
                    var _rs = JSON.parse(rs.responseText);
                    if (_rs.hasOwnProperty('serviceType')) {
                        if (_rs.serviceType == undefined) {
                            var a = null
                        } else {
                            a = _rs.serviceType.title;
                        }
                    } else {
                        a = '无';
                    }

                    var turnCatalog = function (catalog) {
                        var catalogGb;
                        if (catalog != undefined && catalog.length != 0) {
                            catalogGb = catalog[0].title;
                            for (var i = 1; i < catalog.length; i++) {
                                catalogGb += ',' + catalog[i].title
                            }
                        } else {
                            catalogGb = null;
                        }
                        return catalogGb;
                    };
                    var arr = [{
                        field: '信息资源名称',
                        value: _rs.resTitle
                    }, {
                        field: '信息资源发布日期',
                        value: _rs.extraAttributes.biz.createTime
                    }, {
                        field: '信息资源摘要',
                        value: _rs.abstracts
                    }, {
                        field: '资源提供单位',
                        value: ''
                    }, {
                        field: '资源提供方地址',
                        value: _rs.cntAdd
                    }, {
                        field: '类目名称',
                        value: turnCatalog(_rs.catalogGB)
                    }, {
                        field: '在线资源链接地址',
                        value: _rs.onLineSrc
                    }, {
                        field: '信息资源标识符',
                        value: _rs.resId
                    }, {
                        field: '服务地址',
                        value: _rs.serviceURL
                    }, {
                        field: '服务类型',
                        value: a
                    }, {
                        field: '元数据更新日期',
                        value: new Date(_rs.mdDateUpd)
                    }, {
                        field: '信息资源代码',
                        value: _rs.resId
                    }, {
                        field: '信 息 资 源 格 式',
                        value: _rs.format
                    }, {
                        field: '是否向社会开放',
                        value: '是'
                    }];
                    var sto = {
                        autoLoad: true,
                        data: arr
                    };
                    me.setStore(sto);
                }
            });
        }
    }
});
