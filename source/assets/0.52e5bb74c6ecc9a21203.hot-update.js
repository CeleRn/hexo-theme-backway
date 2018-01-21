webpackHotUpdate(0,{

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

///////////
// Стили //
///////////


__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(7);

__webpack_require__(76);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

//////////////
// Картинки //
//////////////

__webpack_require__(13);

/////////////
// Скрипты //
/////////////

// Bootstrap scripts


// // Materialize-css
// import 'materialize-css/js/velocity.min';
// import 'materialize-css/js/global';
// import 'materialize-css/js/forms';

// jQuery Markedinput


// OwlCarousel


$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        navText: ["", ""],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            576: {
                items: 2,
                nav: false
            },
            768: {
                items: 3,
                nav: false
            },
            992: {
                items: 4,
                nav: false
            },
            1200: {
                items: 5,
                nav: false
            }
        }
    });
});

// Мои скрипты


/////////////////////////////////
// Загрузка иконок для спрайта //
/////////////////////////////////

// main
__webpack_require__(14);
__webpack_require__(15);
__webpack_require__(16);
__webpack_require__(17);
__webpack_require__(18);
__webpack_require__(19);
__webpack_require__(20);
__webpack_require__(21);
__webpack_require__(22);
__webpack_require__(23);
__webpack_require__(24);
__webpack_require__(25);

// Иконки причин
__webpack_require__(26);
__webpack_require__(27);
__webpack_require__(28);
__webpack_require__(29);
__webpack_require__(30);
__webpack_require__(31);
__webpack_require__(32);
__webpack_require__(33);

// Иконки файлов
__webpack_require__(34);
__webpack_require__(35);
__webpack_require__(36);
__webpack_require__(37);
__webpack_require__(38);

// Иконки операционных систем
__webpack_require__(39);
__webpack_require__(40);
__webpack_require__(41);
__webpack_require__(42);

// Логотипы производителей
__webpack_require__(43);
__webpack_require__(44);
__webpack_require__(45);
__webpack_require__(46);
__webpack_require__(47);
__webpack_require__(48);

//////////////
// Favicons //
//////////////

__webpack_require__(49);
__webpack_require__(50);
__webpack_require__(51);
__webpack_require__(52);
__webpack_require__(53);
__webpack_require__(54);
__webpack_require__(55);
__webpack_require__(56);
__webpack_require__(57);
__webpack_require__(58);
__webpack_require__(59);
__webpack_require__(60);
__webpack_require__(61);
__webpack_require__(62);
__webpack_require__(63);
__webpack_require__(64);
__webpack_require__(65);
__webpack_require__(66);
__webpack_require__(67);
__webpack_require__(68);
__webpack_require__(69);
__webpack_require__(70);
__webpack_require__(71);
__webpack_require__(72);
__webpack_require__(73);
__webpack_require__(74);
__webpack_require__(75);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";



module.exports = function( grunt ) {
  grunt.initConfig({
    // TODO: change to read component.json
    pkg: __webpack_require__(77),

    uglify: {
      options: {
        banner: '/*\n    <%= pkg.description %>\n    Copyright (c) 2007 - <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)\n    Version: <%= pkg.version %>\n*/\n'
      },

      dev: {
        options: {
          beautify: true,
          mangle: false
        },

        files: {
          'dist/jquery.maskedinput.js': ['src/jquery.maskedinput.js']
        }
      },

      min: {
        files: {
          'dist/jquery.maskedinput.min.js': ['src/jquery.maskedinput.js']
        }
      }
    },

    jasmine: {
      full: {
        src: "src/**/*.js",
        options: {
          specs: "spec/*[S|s]pec.js",
          vendor: [
            "spec/lib/matchers.js",
            "spec/lib/jasmine-species/jasmine-grammar.js",
            "spec/lib/setup.js",
            "lib/jquery-1.9.0.min.js",
            "spec/lib/jquery.keymasher.js"
          ]
        }
      }
    },
    nugetpack: {
        dist: {
            src: 'jquery.maskedinput.nuspec',
            dest: 'dist/'
        }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jasmine");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks('grunt-nuget');

  grunt.registerTask('test', ['jasmine']);
  grunt.registerTask('pack', ['default','nugetpack']);
  grunt.registerTask('default', ['test', 'uglify']);
};


/***/ }),

/***/ 77:
/***/ (function(module, exports) {

module.exports = {"_from":"jquery.maskedinput","_id":"jquery.maskedinput@1.4.1","_inBundle":false,"_integrity":"sha1-Pqj0zcTq/Oc1TCe2anPQ9E3vwyc=","_location":"/jquery.maskedinput","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"jquery.maskedinput","name":"jquery.maskedinput","escapedName":"jquery.maskedinput","rawSpec":"","saveSpec":null,"fetchSpec":"latest"},"_requiredBy":["#USER","/"],"_resolved":"https://registry.npmjs.org/jquery.maskedinput/-/jquery.maskedinput-1.4.1.tgz","_shasum":"3ea8f4cdc4eafce7354c27b66a73d0f44defc327","_spec":"jquery.maskedinput","_where":"C:\\git\\backway.ru\\themes\\backway","author":{"name":"Josh Bush","url":"digitalbush.com"},"bugs":{"url":"https://github.com/excellalabs/jquery.maskedinput/issues"},"bundleDependencies":false,"deprecated":false,"description":"jQuery Masked Input Plugin","devDependencies":{"grunt":"0.4.x","grunt-contrib-jasmine":"0.5.x","grunt-contrib-uglify":"0.2.x","grunt-contrib-watch":"0.5.x","grunt-nuget":"^0.1.4"},"homepage":"https://github.com/excellalabs/jquery.maskedinput#readme","keywords":["jQuery","Masked","Input","Plugin"],"license":"MIT","main":"gruntfile.js","name":"jquery.maskedinput","repository":{"type":"git","url":"git+https://github.com/excellalabs/jquery.maskedinput.git"},"scripts":{"test":"grunt test"},"version":"1.4.1"}

/***/ })

})