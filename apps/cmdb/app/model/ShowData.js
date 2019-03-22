Ext.define('Cmdb.model.ShowData', {
    extend: 'Cmdb.model.Base',

    fields: [
        'name', 'xlh', 'ip', 'sbxh',
        'zt', 'cj', 'czxt', 'gsbm',
        'des', 'fzr', 'xh', 'wlsl',
        'zp', 'ljsl', 'ncdx', 'nczcws',
        'xnncdx', 'kjnccs', 'name', 'pre_person',
        'now_person', 'next_person', 'status', 'type',
        'tabId', 'c_time',
        'sl_code',

        'whId',
        'y_title', 'y_code', 'y_type', 'y_dept', 'y_zcml', 'y_zcdes',
        'y_yqwcsj', 'y_lxr', 'y_glxm', 'y_sqyt', 'y_bcxq',


        'f_name', 'f_title', 'f_code', 'f_type', 'f_dept',
        'f_sstj', 'f_fwdes', 'f_fwbzgzl', 'f_time', 'f_ssfzr',
        'f_sstjsfdd', 'f_sqyt', 'f_bcxq', 'f_f_type',

        'j_title', 'j_code', 'j_type', 'j_supportDept', 'j_des',
        'j_lxr', 'j_glxm', 'j_emergencyLevel', 'j_endtime', 'j_reason',
        'j_note',

        's_ysjx','s_csfs','s_sjml','j_bcnote'
    ],

    proxy: {
        type: 'localstorage',
        id: 'ShowData'
    }
});