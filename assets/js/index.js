var Dominger = (function () {
    "use strict";

    function _privateRoles (el, rolesArr, userRole) {
        
        for ( var i = 0; i < rolesArr.length; i += 1 ) {
            if ( userRole && rolesArr[i] === userRole ) {
                console.log('%c User Role: '+ rolesArr[i] + ' ', 'background: #47c; color: #fff');
                var getAttributes = _checkAttr(el);
                if ( rolesArr[i] ===  ) 
            }
        }
    }
    
    function _checkAttr (el) {
        var el = document.querySelectorAll(el);
        for ( var i = 0; i < el.length; i += 1  ) {
            var _secureAttr = el[i].getAttribute('data-secure');
            var _roleAttr = el[i].getAttribute('data-role');
            if (_secureAttr === "true" && _roleAttr) {
                return [_secureAttr, _roleAttr];
            } else if (_secureAttr === "true") {
                return [_secureAttr];
            } else {
                return [_roleAttr];
            }
        }
    }
    
    return {
        storage: function (name, data, index) {
            this.data = data;
            this.name = name;
            this.index = index;
            var callBackData = Dominger.outerHTML(data);
            if (typeof (Storage) !== "undefined") {
                localStorage.setItem(this.name + this.index, callBackData);
                Dominger.deleteDom(this.data);
            } else {
                alert('You\'re browser old. Not working storage');
            }
        },
        hide: function (name, el, type, roles, userRole) {
            this.name = name;
            this.el = el;
            this.type = type;
            this.roles = roles;
            this.userRole = userRole;

            if ( this.roles ) {
                _privateRoles(this.el, this.roles, this.userRole);
            }
            
            if (this.type === 'multi') {
                this.dom = document.querySelectorAll(this.el);
                var name = this.name;
                Array.from(this.dom).map( function (element, index) {
                    Dominger.storage(name, element, index);
                });
            } else {
                this.dom = document.querySelector(this.el);
                Dominger.storage(this.name, this.dom, '-singular');
            }
        },
        clear: function () {
            localStorage.clear();
        },
        show: function (name, type) {
            this.name = name;
            this.type = type;
            if ( this.type === 'multi' ) {
                var relevantData = [];
                for ( var i = 0; i < localStorage.length; i += 1 ) {
                    var data = localStorage.getItem(this.name + [i]);
                    if ( data !== null ) {
                        relevantData.push(data);
                    }
                }
                return relevantData;
            } else {
                return localStorage.getItem(this.name + '-singular');
            }
        },
        outerHTML: function (node) {
            this.node = node;
            return this.node.outerHTML || new XMLSerializer().serializeToString(this.node);
        },
        deleteDom: function (dom) {
            this.dom = dom;
            this.dom.parentNode.removeChild(this.dom);
        }
    };
    
})();

// module.exports = Dominger;
