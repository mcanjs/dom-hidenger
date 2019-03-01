var currentUserRole = 'admin';
var _privateRoles = ['admin', 'test', 'user'];
Dominger.clear();
Dominger.hide('special-name', '.hide-div', 'multi', _privateRoles, currentUserRole);