Ext.define('gridpractice.store.Users',{
	extend: 'Ext.data.Store',
	model: 'gridpractice.model.User',
    autoLoad: true,

    proxy: {
	    type: 'ajax',
	    api: {
	    	create: 'data/newusers.json',
	        read: 'data/users.json',
	        update: 'data/updateUsers.json',
	        destroy: 'data/destroy.json'
	    },
	    reader: {
	        type: 'json',
	        root: 'users',
	        successProperty: 'success',
	        totalProperty: 'total'
	    }
	}
});