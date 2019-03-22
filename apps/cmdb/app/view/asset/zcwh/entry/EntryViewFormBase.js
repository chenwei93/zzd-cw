Ext.define('Cmdb.view.asset.zcwh.entry.EntryViewFormBase', {
    extend: 'Ext.form.Panel',
    xtype: 'entryview-formbase',

    frame: false,
    defaults: {
        layout: 'hbox',
        xtype: 'container',
        defaultType: 'displayfield',
        anchor: '100%'
    },
    items: [{
        padding: '0 0 10 0',
        items: [{
            name: 'resTitle',
            flex: 2,
            fieldLabel: '资源名称'
        }, {
            name: 'pubDate',
            labelWidth: 60,
            flex: 1,
            fieldLabel: '发布日期'
        }]
    }, {
        padding: '0 0 10 0',
        items: [{
            name: 'resID',
            reference: 'resid',
            fieldLabel: '资源标识符'


        }]
    }, {
        padding: '0 0 10 0',
        items: [{
            name: 'abstracts',
            fieldLabel: '资源摘要'
        }]

    }, {
        name: 'onLineSrc',
        fieldLabel: '在线资源地址'
    }, {
        fieldLabel: '关键字',
        name: 'keyword',
        value: '空'
    }, {
        layout: 'hbox',
        title: '类别描述',
        collapsible: false,
        defaults: {
            xtype: 'container',
            flex: 1,
            layout: 'form'
        },
        items: [{
            name: 'gB',
            fieldLabel: '国标主题'
        }, {

            name: 'gbL',
            fieldLabel: '国标代码'
        }]
    }, {
        xtype: 'fieldset',
        layout: 'hbox',
        title: '资源提供信息',
        collapsible: false,
        defaults: {
            xtype: 'container',
            flex: 1,
            layout: 'form'
        },
        items: [{
            items: [{
                xtype: 'displayfield',
                name: 'rpOrgName',
                fieldLabel: '资源提供单位'
            }]
        }, {
            items: [{
                xtype: 'displayfield',
                name: 'cntAdd',
                fieldLabel: '资源提供方地址'
            }]
        }]
    }, {
        xtype: 'fieldset',
        title: '资源获取服务',
        collapsible: false,
        layout: 'hbox',
        defaults: {
            xtype: 'container',
            flex: 1,
            layout: 'form'
        },
        items: [{
            items: [{
                xtype: 'displayfield',
                name: 'serviceType',
                fieldLabel: '服务类型'
            }]
        }, {
            items: [{
                xtype: 'displayfield',
                name: 'serviceURL',
                fieldLabel: '服务地址'
            }]
        }]
    }, {
        xtype: 'fieldset',
        title: '资源元数据',
        layout: 'hbox',
        defaults: {
            xtype: 'container',
            flex: 1,
            layout: 'form'
        },
        items: [{
            items: [{
                xtype: 'displayfield',
                name: 'resSize',
                fieldLabel: '资源占用'
            }, {
                xtype: 'displayfield',
                name: 'mdId',
                fieldLabel: '元数据标识符'

            }]
        }, {
            items: [{
                xtype: 'displayfield',
                name: 'resTotal',
                fieldLabel: '资源条数'

            }, {
                xtype: 'displayfield',
                name: 'mdDateUpd',
                fieldLabel: '元数据更新日期'
            }]
        }]
    }],
    listeners: {
        render: function () {
            var me = this;
            var entityId = me.up('entry-view').entityId;
            Ext.Ajax.request({
                url: '/drdms/api/entryDatas/' + entityId,
                success: function (rs) {
                    var rs = JSON.parse(rs.responseText);
                    if (rs.serviceType == undefined) {
                        var a = null;
                    } else {
                        var a = rs.serviceType.title;
                    }
                    var formatDate = function (date) {
                        var sDate = '';
                        if (typeof date == 'string') {
                            sDate = date
                        } else {
                            var sYear = date.getFullYear(),
                                sMonth = date.getMonth() + 1,
                                sDay = date.getDate(),
                                sHour = date.getHours(),
                                sMin = date.getMinutes(),
                                sSec = date.getSeconds();
                            sMonth = sMonth < 9 ? '0' + sMonth : sMonth;
                            sDay = sDay < 10 ? '0' + sDay : sDay;
                            sHour = sHour < 10 ? '0' + sHour : sHour;
                            sMin = sMin < 10 ? '0' + sMin : sMin;
                            sSec = sSec < 10 ? '0' + sSec : sSec;
                            sDate = sYear + '-' + sMonth + '-' + sDay + ' ' + sHour + ':' + sMin + ':' + sSec;
                        }
                        return sDate
                    };
                    var data = {
                        resTitle: rs.resTitle,
                        pubDate: formatDate(new Date(rs.extraAttributes.biz.createTime)),
                        abstracts: rs.abstracts,
                        resID: rs.resId,
                        onLineSrc: rs.onLineSrc,
                        rpOrgName: rs.ownerDepartment.name,
                        cntAdd: rs.cntAdd,
                        serviceType: a,
                        serviceURL: rs.serviceURL,
                        mdId: rs.mdId,
                        mdDateUpd: formatDate(new Date(rs.mdDateUpd)),
                        resSize: rs.resSize.value + '字节',
                        resTotal: rs.resTotal.value

                    };
                    me.getForm().setValues(data);
                }
            });
        }
    }
});