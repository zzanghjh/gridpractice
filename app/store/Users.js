Ext.define('gridpractice.store.Users',{
	extend: 'Ext.data.Store',
	model: 'gridpractice.model.User',
    autoLoad: true,

    proxy: {
	    type: 'ajax',
	    api: {
	        read: 'data/users.json',
	        update: 'data/updateUsers.json',
	        save: 'data/newUsers.json'
	    },
	    reader: {
	        type: 'json',
	        root: 'users',
	        successProperty: 'success',
	        totalProperty: 'total'
	    }
	}
});