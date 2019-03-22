Ext.define('DRDMS.model.Entry', {
    extend: 'DRDMS.model.Base',

    fields: [
        {
            type: 'string',
            name: 'resTitle'
        },
        {
            type: 'string',
            name: 'rid',
            mapping: 'resource.resId'
        },
        {
            type: 'string',
            name: 'key',
            mapping: 'resource.entityKey'
        },
        {
            type: 'string',
            name: 'id',
            // mapping:'.resource.id'
        }, {
            name: 'title',
            type: 'string',
            mapping: 'resource.resTitle'
        },
        {
            type: 'string',
            name: 'type',
            // mapping:'resource.type',
            mapping: function (data) {
                if (data != null) {
                    if (data.hasOwnProperty('resource')) {
                        var value = data.resource.type,
                            arr = {
                                Dataset: '数据库表',
                                Document: '文档',
                                Audio: '音频',
                                App: '应用',
                                Service: '接口',
                                Gis: 'GIS数据',
                                Video: '视频',
                                View: '数据库视图',
                                Picture: '图片'
                            };
                        if (value) {
                            if (arr[value]) return arr[value];
                            else return value
                        } else {
                            return value
                        }

                    }

                }

            }
        },
        {
            type: 'string',
            name: 'format',
            // mapping:'resource.format',
            mapping: function (data) {
                // console.log(data);
                if (data != null) {
                    if (data.hasOwnProperty('resource')) {
                        var value = data.resource.format;
                        if (value != null) {
                            if (value == 'Db') {
                                return '数据库'
                            } else if (value == 'File') {
                                return '文件'
                            } else if (value == 'Hdfs') {
                                return 'HDFS'
                            } else if (value == 'Http') {
                                return 'HTTP'
                            } else {
                                return value
                            }
                        } else {
                            return value
                        }

                    }
                }
            }
        },
        {
            type: 'string',
            name: 'status',
            mapping: 'biz.currentState'
        }, {
            name: 'changeType',
            type: 'string',
            mapping: function (data) {
                if (data != null) {
                    var value = data.changeType;
                    if (value == 'Altered') {
                        return '结构变更'
                    } else if (value == 'Updated') {
                        return '内容变更'
                    } else if (value == 'Removed') {
                        return '删除'
                    } else if (value == 'Created') {
                        return '创建'
                    }
                }
            }
        }, {
            type: 'date',
            name: 'updateTime'
        }, {
            type: 'string',
            name: 'jd',
            mapping: 'node.title'
        }, {
            type: 'date',
            name: 'createTime',
            mapping: 'biz.createTime'
        }, {
            name: 'nodeTitle',
            mapping: 'node.title'
        }, {
            name: 'homeTitle',
            mapping: function (data) {
                var title = '';
                if (data.resource) {
                    if (data.resource.resTitle) {
                        title = data.resource.resTitle;
                    }
                }
                if (data.node) {
                    var node = data.node.title;
                    var returnData = title + '(' + node + ')'
                } else {
                    returnData = title
                }
                return returnData
            }
        }, {
            name: 'confirm',
            type: 'boolean'
        }
    ]
});
