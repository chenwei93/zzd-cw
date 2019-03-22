Ext.define('DRDMS.model.EntryMetadata', {
    extend: 'DRDMS.model.Base',

    fields: [
        'text', {
            name: 'dataType',
            mapping: function (data) {
                var a;
                if (data.extraAttributes.hasOwnProperty('dataType')) {
                    var value = data.extraAttributes.dataType;
                    if (value == 'Boolean') {
                        a = '布尔型';
                    } else if (value == 'Text') {
                        a = '文本型'
                    } else if (value == 'Date') {
                        a = '日期型'
                    } else if (value == 'Composite') {
                        a = '复合型';
                    } else if (value == 'Directory') {
                        a = '数据字典'
                    } else {
                        a = '未知'
                    }
                } else {
                    a = '未知'
                }
                return a;
            }
        },
        {
            name: 'fullName',
            mapping: 'extraAttributes.fullName'
        }, {
            name: 'memo',
            mapping: 'extraAttributes.memo'
        },
        {
            name: 'sample',
            mapping: 'extraAttributes.sample'
        }, {
            name: 'name',
            mapping: 'extraAttributes.name'
        }, {
            name: 'GB',
            mapping: function (data) {
                if (data.extraAttributes.hasOwnProperty('GB')) {
                    var value = data.extraAttributes.GB;
                    if (value == true) {
                        return '是'
                    } else if (value == false) {
                        return '否'
                    } else {
                        return '未知'
                    }
                } else {
                    return '未知'
                }
            }
        }, {
            name: 'shortTitle',
            mapping: 'extraAttributes.shortTitle'
        }
    ]
});