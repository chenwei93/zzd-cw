Ext.define('Cmdb.view.ops.ywpz.YwpzController', {
    extend: 'Cmdb.base.ViewController',

    alias: 'controller.ywpz',


    onRender: function (view) {
        var arr = {
            jhpt: ['jhpt1', 'jhpt2'],
            fwpzwh: ['fwpzwh1', 'fwpzwh2'],
            sjdr: ['sjdr1', 'sjdr2'],
            fkgl: ['fkgl2', 'fkgl1'],
            tmgl: ['tmgl1', 'tmgl2', 'tmgl3'],
            zygl: ['zygl1', 'zygl2', 'zygl3'],
            sjzlbg: ['sjzlbg1'],
            jkzypz: ['jkpzfw1', 'jkpzfw2'],
            fwzczx: ['fwzczx'],
            zdyfw: ['zdyfw1', 'zdyfw2']
        };
        var type = view.up('panel').xtype;
        var items = [];
        if (arr[type]) {
            for (var i in arr[type]) {
                var item = {
                    xtype: 'image',
                    height: 500,
                    columnWidth: 1,
                    alt: type,
                    src: 'resources/sjkfgx/' + type + '/' + arr[type][i] + '.jpg'
                };
                if (type == 'tmgl') {
                    if (i != 0) {
                        item.columnWidth = 0.5;
                        item.height = 300;
                    }

                }
                if(type == 'jkzypz'){
                    item.height = 300;
                }
                items.push(item);
            }

        }
        view.add(items);
    }
});