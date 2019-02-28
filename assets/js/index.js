"use strict";

var Dominger = (function () {
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
        hide: function (name, el, type) {
            this.name = name;
            this.el = el;
            this.type = type;
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
