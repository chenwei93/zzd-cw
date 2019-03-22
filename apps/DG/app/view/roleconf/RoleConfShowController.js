Ext.define('DG.view.roleconf.RoleConfShowController', {
    extend: 'DG.base.ViewController',
    alias: 'controller.roleconf-show',


    onRender: function (view) {
        var vm = this.getViewModel(),
            show_clean = this.lookup('show_clean'),
            show_change = this.lookup('show_change'),
            show_compare = this.lookup('show_compare'),
            show_customize = this.lookup('show_customize'),
            show_result = this.lookup('show_result');
        Ext.Ajax.request({
            url: '/data-quality-rest/v1/rule/' + view.needId,
            success: function (rs) {
                var res = Ext.decode(rs.responseText);
                console.log(res);
                vm.set('ruleDescrption', res.baseinfo.ruleDescrption);
                vm.set('ruleName', res.baseinfo.ruleName);
                vm.set('tableName', res.baseinfo.tableName);
                vm.set('type', res.jobConfig.type);
                vm.set('beginTime', res.jobConfig.beginTime);
                vm.set('repeat', res.jobConfig.repeat);
                show_clean.setStore({
                    data: res.washRules
                });
                show_change.setStore({
                    data: res.convertRules
                });
                show_compare.setStore({
                    data: res.comparisonRule.comparisonItems
                });
                var data = res.logConfig, result = [];
                for (var i in data) {
                    var a = {
                        rolesType: i,
                        log: data[i]
                    };
                    result.push(a)
                }
                show_result.setStore({
                    data: result
                });
                var cus = res.customRules;
                Ext.Array.each(cus, (item, index) => {
                    var x = {
                        items: [{
                            fieldLabel: '允许顺序',
                            xtype: 'displayfield',
                            name: 'order',
                            value: item.order,
                        }, {
                            xtype: 'displayfield',
                            name: 'sql',
                            fieldLabel: '规则代码',
                            value: item.sql,
                        }]
                    };
                    show_customize.add(x)
                })


            }
        })
    }

});
