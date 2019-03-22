Ext.define('Cmdb.model.MlxSl', {
    extend: 'Cmdb.model.Base',
    fields: ['title', 'code', 'type', 'des', 'sl_code', 'person', 'time',
        'tabId',
        'name', 'xlh', 'ip', 'sbxh',
        'zt', 'cj', 'czxt', 'gsbm',
        'fzr', 'xh', 'wlsl',
        'zp', 'ljsl', 'ncdx', 'nczcws',
        'xnncdx', 'kjnccs', 'name', 'pre_person',
        'now_person', 'next_person', 'status',
        'tabId', 'c_time',

        'f_name', 'f_title', 'f_code', 'f_type', 'f_dept',
        'f_sstj', 'f_fwdes', 'f_fwbzgzl', 'f_time', 'f_ssfzr',
        'f_sstjsfdd', 'f_sqyt', 'f_bcxq', 'f_f_type', 'f_beginTime',
        'f_endTime', 'f_des',

        'j_title', 'j_code', 'j_type', 'j_supportDept', 'j_des',
        'j_lxr', 'j_glxm', 'j_emergencyLevel', 'j_endtime', 'j_reason',
        'j_note', 'j_sqdept', 'j_jkdyfw', 'j_typlxz', 'j_zdjk', 'j_xytype',
        'j_rzfs', 'j_csfs', 'j_urlys', 'j_jklx',


        'y_title', 'y_code', 'y_type', 'y_dept', 'y_zcml', 'y_zcdes', 'y_yqwcsj',
        'y_lxr', 'y_glxm', 'y_sqyt', 'y_bcxq', 'y_nhs', 'y_zp', 'y_yjhc', 'y_dx',
        'y_zslx', 'y_pl', 'y_gs', 'y_rl', 'y_hc', 'y_jklx', 'y_kd', 'y_gsdk',
        'y_ssfzr', 'y_kssj', 'y_ssbz', 'y_wcsj',

        's_ysjx','s_csfs','s_sjml','j_bcnote'
    ],

    proxy: {
        type: 'localstorage',
        id: 'mlxsl'
    }
});