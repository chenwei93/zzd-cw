Ext.define('DRDMS.model.RealmNode', {
    extend: 'DRDMS.model.Base',

    fields: [
        'accessPrivateKey','accessSecureCode',
        'center','nodeAddress','nodeOrganizationCode',
        'nodeOrganizationName','nodeServer','registerPrivateKey',
        'registerPublicKey','title'
    ]

});