Ext.define('DA.store.datasetInput', {
    extend: 'Ext.data.Store',
    alias: 'store.datasetinput',


    data: [{
        name: '字段',
        code: 'zd',
        items: []
    }, {
        name: '方法',
        code: 'fn',
        items: [{
            name: '求和',
            code: 'sum',
            content: 'function getSum(a,b){return a+b}'
        }, {
            name: '求乘',
            code: 'multiply',
            content: 'function getMultiply(a,b){retuen a*b}'
        }]
    }, {
        name: '操作符',
        code: 'operation',
        items: [{
            name: '加',
            code: 'plus',
            content: '+'
        }, {
            content: '-',
            name: '减',
            code: 'minus'
        }, {
            content: '*',
            name: '乘',
            code: 'multiply'
        }, {
            content: '／',
            name: '除',
            code: 'division'
        }, {
            content: '！',
            name: '非',
            code: 'not'
        }, {
            content: '=',
            name: '等于',
            code: 'equal'
        }, {
            content: '<',
            name: '小于',
            code: 'less'
        }, {
            content: '>',
            name: '大于',
            code: 'more'
        }, {
            content: '&',
            name: '且',
            code: 'add'
        }, {
            content: '|',
            name: '非',
            code: 'not'
        }, {
            content: '(',
            name: '左括号',
            code: 'left'
        }, {
            content: ')',
            name: '右括号',
            code: 'right'
        }]
    }],

});
