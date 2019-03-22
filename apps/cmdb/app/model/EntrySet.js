Ext.define('Cmdb.model.EntrySet', {
    extend: 'Cmdb.model.Base',

    fields: [
        'id', 'title', '_class', 'idRel', 'entityStatus', {
            name: 'prefix',
            mapping: 'version.prefix'

        }, {
            name: 'version',
            mapping: function (data) {
                var val = data.version;
                if (val != null) {
                    if (val.hasOwnProperty('tag')) {
                        if (val.tag == null) {
                            var a = ""
                        } else {
                            var a = val.tag
                        }
                        var value = val.major + '.' + val.micro + '.' + val.minor + a;
                    } else {
                        var value = val
                    }


                    return value
                }
                else {
                    return val
                }

            }
        }
    ]
});