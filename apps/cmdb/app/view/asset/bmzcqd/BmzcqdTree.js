Ext.define('Cmdb.view.asset.bmzcqd.BmzcqdTree', {
    extend: 'Ext.tree.Panel',

    xtype: 'bmzcqd-tree',


    listeners: {
        select: 'onSelect'
    },
    useArrows: true,
    rootVisible: false,
    animate: false,
    reserveScrollbar: true,

});