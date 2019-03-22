Ext.define('RBase.model.Resource', {
    extend: 'RBase.model.Base',

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
            mapping: 'locator.poolCode'
        }, {
            name: 'version',
            mapping: function (value) {
                if (value.version) {
                    value = value.version.major + '.' + value.version.minor + '.' + value.version.micro;
                    return value;
                }
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
                if(value.changeTypes){
                    value = value.changeTypes[0];
                    return value;
                }

            }
        }, {
            name: 'pat',
            mapping: function (value) {
                var value1 = value.locator.name,
                    value2 = value.format;
                if (value2 == 'File') {
                    return value1 + '/' + value2
                } else {
                    return value1 + '.' + value2
                }
            }
        }
    ]
});
