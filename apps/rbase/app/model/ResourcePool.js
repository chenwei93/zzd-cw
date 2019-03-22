Ext.define('RBase.model.ResourcePool', {
    extend: 'RBase.model.Base',

    fields: [
        'name', 'memo', 'pollingTimeMillis', {
            name: 'allowFormat',
            mapping: function (data) {
                var value = data.allowFormat;
                if (value == 'Db') {
                    return '数据库'
                } else if (value == 'File') {
                    return '文件'
                } else if (value == 'Hdfs') {
                    return 'HDFS'
                } else {
                    return 'HTTP'
                }
            }
        },
        'autoCreateResource', {
            name: 'base',
            type: 'string'
        }, {
            name: 'code',
            type: 'string'
        }, {
            name: 'Rtitle',
            mapping: 'resourceNode.name'
        }, {
            name: 'autoCreateResource',
            type: 'bool'
        }, {
            name: 'enableIndexer',
            type: 'bool'
        }, {
            name: 'enableSearch',
            type: 'bool'
        }, {
            name: 'enableWatched',
            type: 'bool'
        }, {
            name: 'username',
            mapping: 'dbProperty.username'
        }, {
            name: 'password',
            mapping: 'dbProperty.password'
        },{
            name: 'jdbcUrl',
            mapping: 'dbProperty.jdbcUrl'
        }]
});