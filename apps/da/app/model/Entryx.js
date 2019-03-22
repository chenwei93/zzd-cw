Ext.define('DA.model.Entryx', {
    extend: 'DA.model.Base',

    fields: ['entityTitle', 'entityName', 'resId', {
        type: 'string',
        name: 'key',
        mapping: function (data) {
            var value = data.entityName;
            return value ? value : '';
        }
    },
        {
            type: 'string',
            name: 'id',
            // mapping:'.resource.id'
        }, {
            name: 'title',
            type: 'string',
            mapping: function (data) {
                var entityTitle = data.entityTitle ? data.entityTitle : data.resTitle;
                return entityTitle;
            }
        },
        {
            type: 'string',
            name: 'type',
            // mapping:'resource.type',
            mapping: function (data) {
                if (data != null) {
                    var value = data.format;
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
                            return '数据库表'
                        }
                    } else {
                        return '数据库表'
                    }

                }

            }
        },
        {
            type: 'string',
            name: 'format',
            mapping: function (data) {
                // console.log(data);
                if (data != null) {
                    var value = data.format;
                    if (value != null) {
                        if (value == 'Db') {
                            return '数据库'
                        } else if (value == 'File') {
                            return '文件'
                        } else if (value == 'Hdfs') {
                            return 'HDFS'
                        } else if (value == 'Http') {
                            return 'HTTP'
                        } else if (value == 'Service') {
                            return '外部接口'
                        } else {
                            return value
                        }
                    } else {
                        return value
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
                var node = data.node;
                if (node) {
                    var title = data.title,
                        node = data.node.title;
                    return title + '(' + node + ')';
                } else {
                    return null
                }

            }
        }, {
            name: 'confirm',
            type: 'boolean'
        }, {
            name: 'sql',
            mapping: function (data) {
                var resource = data.resource;
                if (resource) {
                    var key = resource.entityKey;
                    if (key) {
                        var arr = key.split(':');
                        if (arr.length == 3) {
                            return arr[1]

                        }
                    }
                }
            }
        }, {
            name: 'table',
            mapping: function (data) {
                var resource = data.resource;
                if (resource) {
                    var key = resource.entityKey;
                    if (key) {
                        var arr = key.split(':');
                        if (arr.length == 3) {
                            return arr[2]
                        }

                    }
                }

            }
        }, {
            name: 'shjTable',
            mapping: function (data) {
                var resource = data.entityKey;

                if (resource) {
                    var arr = resource.split(':');
                    if (arr.length == 3) {
                        return arr[2] + '[' + arr[1] + ']';

                    }
                }

            }
        }
    ]
});
