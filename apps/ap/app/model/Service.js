Ext.define('AP.model.Service', {
    extend: 'AP.model.Base',

    fields: [
        'qualified', 'name', 'title', {
            name: 'node',
            mapping: 'node.title',
            type: 'string'
        }, {
            name: 'type',
            mapping: function (data) {
                var value = data.type;
                if (value == 'Default') {
                    value = '基础服务'
                } else if (value == 'SYSTEM') {
                    value = '系统默认服务'
                } else if (value == 'Custom') {
                    value = '自定义服务'
                }
                return value
            }
        }, {
            name: 'url',
            mapping: function (data) {
                var id = data.id;
                var value = data.qualified;
                var obj = {
                    'ENTITY!': "/ap/server/services/" + id,
                    'EXT_ATTACHMENT': '/drdms/services-ext/attachment/' + id,
                    'EXT_UPDATE': '/drdms/services-ext/updateEntity/' + id,
                    'ENTITY$': '/ap/server/services/' + id,
                };
                if (obj[value]) {
                    return obj[value]
                } else {
                    return '/ap/server/services/' + id
                }
            }
        }, {
            name: 'whurl',
            mapping: function (data) {
                var id = data.id;
                if (id) {
                    return '/ap/server/services/' + id;
                }
            }
        }

    ]
});