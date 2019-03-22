Ext.define('Starter.model.EntryData', {
    extend: 'Starter.model.Base',

    fields: [
        'abstracts',
        'cntAdd',
        'providerCode',
        'rpOrgName',
        'entityDesc',
        'resTitle',
        'onLineSrc',
        'entityKey',
        'resId',
        'provideCenter',
        'rpOrgCenter',
        'mdId',
        'cntAddCenter',
        'bizCode',
        'extraKFTJ',
        'extraGXTJ',
        'serviceURL',
        'uuidResource',
        'uuidEntry',
        'ownerGroup',
        'ownerTitle',

        {name: 'pubDate', type: 'date', dateFormat : 'c'},
        {name: 'mdDateUpd', type: 'date', dateFormat : 'c'},
        {name: 'publishDate', type: 'date', dateFormat : 'c'},
        {name: 'createTime', type: 'date', dateFormat : 'c'},
        {name: 'published', type: 'bool'},
        {name: 'ownerDepartment', mapping: 'ownerDepartment.name'},
        {name: 'format', mapping: 'format.title'},
        {name: 'desc', mapping: 'extraAttributes.desc'}

        /*
        references;
        includes;
        catalog;
        keyword;
        contentType;
        bizType;
        format;
        smlx;
        kflx;
        gxlx;
        gxfs;
        gxzq;
        serviceType;
        catalogGB;
        catalogHY;
        catalogSS;
        pubDate;
        mdDateUpd;
        publishDate;
        resTotal;
        resSize;
        resTotal2;
        resSize2;
        resTotal1;
        resSize1;
        ownerNode;
        ownerRealm;
        ownerDepartment;
        fields;
        generateType;
        ownerDomain;
        */
    ]
});