Ext.define('Cmdb.model.Entry', {
    extend: 'Cmdb.model.Base',

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
                        var value = data.resource.type;
                        if (value != null) {
                            if (value == 'Dataset') {
                                return '数据库表'
                            } else if (value == 'Document') {
                                return '文档'
                            } else if (value == 'Audio') {
                                return '音频'
                            } else if (value == 'App') {
                                return '应用'
                            } else if (value == 'Service') {
                                return '接口'
                            } else if (value == 'Gis') {
                                return 'GIS数据'
                            } else if (value == 'Video') {
                                return '视频'
                            } else if (value == 'View') {
                                return '数据库视图'
                            } else if (value == 'Picture') {
                                return '图片'
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
                var title = data.title,
                    node = data.node.title;
                return title + '(' + node + ')';
            }
        }, {
            name: 'confirm',
            type: 'boolean'
        }
    ]
});