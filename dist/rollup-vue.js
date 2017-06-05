/**
 * Rollup vue demo 1.0.0
 * rollup vue demo
 * 
 * Copyright 2017, gongph
 * 
 */
 (function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.RollupVue = factory());
}(this, (function () {

var button = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"btn btn-success",on:{"click":_vm.handleClick}},[_vm._v(_vm._s(_vm.buttonText))])},
staticRenderFns: [],
    props: {
      buttonText: {
        type: String,
        default: '按钮'
      }
    },
    methods: {
      handleClick: function handleClick () {
        alert('hello');
      }
    }
  };

var rollupVue = {
  install: function install (Vue, params) {
    params = params || {};

    Vue.mixin({
      components: {
        'v-button': button
      }
    });
  }
};

return rollupVue;

})));

//# sourceMappingURL=rollup-vue.js.map
