Ext.define('Cmdb.model.ops.Zcfp', {
    extend: 'Cmdb.model.Base',

    fields: ['name', 'code', 'des', 'xh', 'tabId', 'dealTime',
        'f_title', 'f_code', 'f_type', 'f_dept',
        'f_time', 'f_person', 'f_sstj', 'f_ssfzr', 'f_beginTime',
        'f_endTime', 'f_des',
        'type',
        'j_title', 'j_code', 'j_type', 'j_des', 'j_sqdept', 'j_lxr',
        'j_glxm', 'j_emergencyLevel', 'j_endtime', 'j_reason', 'j_note',
        'j_jkdyfw', 'j_jkdyfw', 'j_zdjk', 'j_xytype', 'j_rzfs', 'j_csfs',
        'j_urlys', 'j_jklx',


        'y_title', 'y_code', 'y_type', 'y_dept', 'y_zcml', 'y_zcdes', 'y_yqwcsj',
        'y_lxr', 'y_glxm', 'y_sqyt', 'y_bcxq', 'y_nhs', 'y_zp', 'y_yjhc', 'y_dx',
        'y_zslx', 'y_pl', 'y_gs', 'y_rl', 'y_hc', 'y_jklx', 'y_kd', 'y_gsdk',
        'y_ssfzr', 'y_kssj', 'y_ssbz', 'y_wcsj',


        's_csfs','s_sjml','s_ysjx'
    ],

    proxy: {
        type: 'localstorage',
        id: 'zcfp'
    },
});