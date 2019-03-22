Ext.define('DG.model.Resource', {
    extend: 'DG.model.Base',

    fields: [
        'resId', 'summary', 'title', 'description', 'entityKey', 'generateTime',
        'lastUpdateTime', {
            name: 'creator',
            mapping: function (value) {
                value = value.creator;
                if (value == null) {
                    return '自动'
                } else {
                    return value;
                }
            }
        }, {
            name: 'name',
            mapping: 'locator.name'
        }, {
            name: 'path',
            mapping: 'locator.path'
        }, {
            name: 'poolCode',
            mapping: function (data) {
                if (data.locator) return data.locator.poolCode
            }
        }, {
            name: 'version',
            mapping: function (value) {
                var version = value.version;
                if (version) {
                    var data = value.version.major + '.' + value.version.minor + '.' + value.version.micro;
                }
                return data ? data : '';
            }
        }, {
            name: 'format',
            mapping: function (value) {
                value = value.format;
                if (value == 'Db') {
                    return '数据库'
                } else if (value == 'File') {
                    return '文件'
                } else if (value == 'Hdfs') {
                    return 'HDFS'
                } else if (value == 'Http') {
                    return 'HTTP'
                } else if ('Service') {
                    return '外部接口'
                } else {
                    return value;
                }
            }
        }, {
            name: 'size',
            mapping: 'description.size'
        }, {
            name: 'createTime',
            type: 'date',
            mapping: 'metadata.createTime'
        }, {
            name: 'updateTime',
            type: 'date',
            mapping: 'metadata.updateTime'
        }, {
            name: 'changeTypes',
            mapping: function (value) {
                var data = value.changeTypes;
                if (data && data.length > 0) {
                    data = data[0]
                } else {
                    data = null
                }
                return data ? data : null;
            }
        }, {
            name: 'pat',
            mapping: function (value) {
                var locator = value.locator;
                if (locator) {
                    var value1 = value.locator.name,
                        value2 = value.format;
                    if (value2 == 'File') {
                        return value1 + '/' + value2
                    } else {
                        return value1 + '.' + value2
                    }
                } else {
                    return ''
                }

            }
        }
    ]
});
