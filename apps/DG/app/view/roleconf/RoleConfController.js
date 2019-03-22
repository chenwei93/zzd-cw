Ext.define('DG.view.roleconf.RoleConfController', {
    extend: 'DG.base.ViewController',
    alias: 'controller.roleconf',


    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },
    //详情
    onDetail: function (view, row, col, btn, a, record, tr) {
        this.open({
            xtype: 'bloodconf-detail'
        }, {
            title: '详情',
            width: 950,
            height: 650,
        })
    },
    //搜索
    onSearch: function (btn) {
        var view = this.getView(),
            store = view.getStore(),
            name = this.lookup('name'),
            jobType = this.lookup('jobType'),
            status = this.lookup('status'),
            beginCreateTime = this.lookup('beginCreateTime'),
            endCreateTime = this.lookup('endCreateTime');
        var json = {
            "rows": 15,
            "entity": {
                "name": name.getValue(),
                "status": status.getValue(),
                "jobType": jobType.getValue(),
                "beginCreateTime": beginCreateTime.getValue(),
                "endCreateTime": endCreateTime.getValue()
            }
        }
        // 搜索具体
        this.storeReload(json, view);
        // grid重新加载
        // store.reload()
    },
    //重置
    onReset: function (btn) {
        var view = this.getView(),
            store = view.getStore(),
            name = this.lookup('name'),
            jobType = this.lookup('jobType'),
            status = this.lookup('status'),
            beginCreateTime = this.lookup('beginCreateTime'),
            endCreateTime = this.lookup('endCreateTime');
        // 清空数据
        name.setValue('');
        jobType.setValue('');
        status.setValue('');
        beginCreateTime.setValue('');
        endCreateTime.setValue('');
        // grid重新加载
        this.storeReload({
            "rows": 15,
            "entity": {
                "name": "",
                "status": '',
                "jobType": '',
                "beginCreateTime": "",
                "endCreateTime": ""
            }
        }, view);
    },
    storeReload: function (json, view) {
        var store = {
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: '/data-quality-rest/v1/rule/pageResult',
                actionMethods: {
                    create: 'POST',
                    read: 'POST',
                    update: 'POST',
                    destroy: 'POST'
                },
                paramsAsJson: true,
                extraParams: json,
                reader: {
                    rootProperty: 'list'
                }
            }
        };
        view.setStore(store);
    },
    onEdit: function (view, row, col, btn, a, record, tr) {
        this.open({
            xtype: 'roleconf-form',
            needId: record.get('id')
        }, {
            title: '查看',
            width: '70%',
            height: '90%',
            gridView: this.getView()
        })
    },
    onDelete: function (view, row, col, btn, a, record, tr) {
        var me = this;
        Ext.MessageBox.confirm('提示', '确认删除当前行数据', function (chooce) {
            if (chooce == 'yes') {
                var id = record.get('id');
                console.log('删除', id);
                me.sendAjax('/data-quality-rest/v1/rule/delete/' + id, 'POST', null, '删除')

            }
        })
    },
    onPublish: function (view, row, col, btn, a, record, tr) {
        var me = this;
        Ext.MessageBox.confirm('提示', '确认发布当前行数据', function (chooce) {
            if (chooce == 'yes') {
                var id = record.get('id');
                console.log('发布', id);
                me.sendAjax('/a/' + id, 'post', null, '发布')

            }
        })
    },
    onShow: function (view, row, col, btn, a, record, tr) {
        this.open({
            xtype: 'roleconf-show',
            needId: record.get('id')
        }, {
            title: '查看',
            width: '60%',
            height: '80%',
        })
    },
    onBackWard: function (view, row, col, btn, a, record, tr) {
        console.log('退回');
        var me = this;
        Ext.MessageBox.confirm('提示', '确认退回当前行数据', function (chooce) {
            if (chooce == 'yes') {
                var id = record.get('id');
                console.log('退回', id);
                me.sendAjax('/a/' + id, 'post', null, '退回')

            }
        })
    },
    sendAjax: function (url, method, data, mes) {
        var me = this,
            grid = me.getView(),
            store = grid.getStore();
        Ext.Ajax.request({
            url: url,
            method: method,
            data: data,
            success: function () {
                Ext.toast(mes + '成功,刷新列表');
                store.reload()
            },
            failure: function () {
                Ext.toast(mes + '失败,刷新列表');
                store.reload()
            }
        });
    }

});
