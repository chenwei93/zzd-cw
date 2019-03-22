/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Starter.view.unitprofile.UnitProfileController', {
    extend: 'Starter.base.ViewController',

    alias: 'controller.unitprofile',

    initViewModel: function (vm) {
        vm.getStore('list').loadPage(1);
    },

    onSql:function (tr,td,index,view,record) {
        this.open({
            xtype:'unitprofile-sql',
            record:record.record
        },'数据库默认值')
    },
    onFile:function (tr,td,index,view,record) {
        this.open({
            xtype:'unitprofile-file',
            record:record.record
        },'文件默认值')
    }

});
