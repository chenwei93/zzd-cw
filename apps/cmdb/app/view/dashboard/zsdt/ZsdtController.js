Ext.define('Cmdb.view.dashboard.zsdt.ZsdtController', {
    extend: 'Cmdb.base.ViewController',
    alias: 'controller.zsdt',

    onChoose: function (menu, event) {
        var menuValue = menu.getValue(),
            menuText = menu.text,
            panelView = this.getView();
        var form = {
            xtype: 'panel',
            title: menuText,
            collapsible: true,
            items: [{
                xtype: menuValue
            }],
            tools: [
                {iconCls: 'x-fa fa-close', handler: 'onClick'}],
            height: 300,
            scrollable: true,
            columnWidth: 0.33

        };
        panelView.add(form);

    },
    onClick: function (event, el, panel, tool) {
        var panelView = panel.up('panel');
        panelView.destroy();
    }

});
