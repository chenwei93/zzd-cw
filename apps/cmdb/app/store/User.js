Ext.define('Cmdb.store.User', {
    extend: 'Ext.data.Store',

    storeId: 'user',

    model: 'Cmdb.model.User',


    data: [
        {name: 'chenw', displayName: '陈薇', dept: '大数据中心'},
        {name: 'wangs', displayName: '王石', dept: '大数据中心'},
        {name: 'fangr', displayName: '方荣', dept: '民政局'},
        {name: 'mozs', displayName: '莫智胜', dept: '运维部'}
    ]
});
