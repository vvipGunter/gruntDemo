/*----------------------------------------------------
 * 以下为常用Grunt插件说明
 *  
 *  grunt-contrib-clean             //删除文件(夹)
 *  grunt-contrib-compress          //压缩文件(夹)成为zip包
 *  grunt-contrib-concat            //合并文件
 *  grunt-contrib-copy              //复制文件(夹)
 *  grunt-contrib-csslint           //CSS校验
 *  grunt-contrib-cssmin            //CSS压缩
 *  grunt-contrib-htmlmin           //html压缩
 *  grunt-contrib-imagemin          //图片压缩
 *  grunt-contrib-jshint            //JS校验
 *  grunt-contrib-uglify            //压缩JS 文件(夹) 
 *  grunt-contrib-watch             //监控文件(夹)变化
 *  grunt-rev                       //通过内容散列修改静态资源文件,通常用于修改文件名
 *
 *  注意:根据需要使用 并不是所有都要用到
 * 
 *-----------------------------------------------------*/

/*该文件主要为Grunt使用*/

"use strict";

/*----------------------------------------------------
 * Module 的设置
 *-----------------------------------------------------*/
module.exports = function (grunt) {

	//项目初始化配置
    grunt.initConfig({


        //读取根目录下的package.json,以获取相关信息
        pkg: grunt.file.readJSON("package.json"),

        //为了方便控制,设置全局的paths以供下面使用
        paths: {

            //源码
            srcroot: "src",
            srchtmldir: "<%= paths.srcroot %>" + "/html/*", //匹配html目录中的所有文件和文件夹
            srchtmlfiles: "<%= paths.srcroot %>" + "/html/*.*", //匹配该目录下所有文件[不包含文件夹]
            srcjs: "<%= paths.srcroot %>" + "/js/*",
            srcjsfiles: "<%= paths.srcroot %>" + "/js/*.*",
            srccss: "<%= paths.srcroot %>" + "/css/*",
            srccssfiles: "<%= paths.srcroot %>" + "/css/*.*",
            srcimg: "<%= paths.srcroot %>" + "/img/*",
            srcimgfiles: "<%= paths.srcroot %>" + "/img/*.*",
            
            //测试
            testroot: "test",
            testhtmldir: "<%= paths.testroot %>" + "/html/*",
            testhtmlfiles: "<%= paths.testroot %>" + "/html/*.*",
            testjsdir: "<%= paths.testroot %>" + "/js/*",
            testjsfiles: "<%= paths.testroot %>" + "/js/*.*",
            testcssdir: "<%= paths.testroot %>" + "/css/*",
            testcssfiles: "<%= paths.testroot %>" + "/css/*.*",
            testimgdir: "<%= paths.testroot %>" + "/img/*",
            testimgfiles: "<%= paths.testroot %>" + "/img/*.*",

            //目标
            distroot: "release",
            disthtmldir: "<%= paths.distroot %>" + "/html/*",
            disthtmlfiles: "<%= paths.distroot %>" + "/html/*.*",
            distjsdir: "<%= paths.distroot %>" + "/js/*",
            distjsfiles: "<%= paths.distroot %>" + "/js/*.*",
            distcssdir: "<%= paths.distroot %>" + "/css/*",
            distcssfiles: "<%= paths.distroot %>" + "/css/*.*",
            distimgdir: "<%= paths.distroot %>" + "/img/*",
            distimgfiles: "<%= paths.distroot %>" + "/img/*.*"

        },

         
        ///////////////////////////////////   任务配置 开始      //////////////////////////////////////////////////////

        ////任务:清除目录或文件 【可用】
        //clean: {

        //    //srcroot: "<%= paths.srcroot %>"
        //    //srchtmldir: "<%= paths.srchtmldir%>",
        //    //srchtmlfiles: "",
        //    //srcjs: "",
        //    //srcjsfiles: "",
        //    //srccss:"",
        //    //srccssfiles: "",
        //    //srcimg: "",
        //    //srcimgfiles:"",

        //    //testroot: ["<%= paths.testroot %>"],
        //    testhtmldir: "<%= paths.testhtmldir %>",
        //    //testhtmlfiles: "<%= paths.testhtmlfiles %>",
        //    testjsdir: "<%= paths.testjsdir %>",
        //    //testjsfiles: "<%= paths.testjsfiles %>",
        //    testcssdir: "<%= paths.testcssdir %>",
        //    //testcssfiles: "<%= paths.testcssfiles %>",
        //    testimgdir: "<%= paths.testimgdir %>"
        //    //testimgfiles: "<%= paths.testimgfiles %>"

        //    //distroot:["<%= paths.distroot %>"]
        //    //disthtmldir: "<%= paths.disthtmldir %>",
        //    //disthtmlfiles: "<%= paths.disthtmlfiles %>",
        //    //distjsdir: "<%= paths.distjsdir %>",
        //    //distjsfiles: "<%= paths.distjsfiles %>",
        //    //distcssdir: "<%= paths.distcssdir %>",
        //    //distcssfiles: "<%= paths.distcssfiles %>",
        //    //distimgdir: "<%= paths.distimgdir %>",
        //    //distimgfiles: "<%= paths.distimgfiles %>"
        //}

        //任务:html压缩 htmlmin [可用]
        //htmlmin: { 		
        //	dist: {
        //		options: {	
        //            //以下选项默认为false
        //		    removeComments:true, //去掉注释
        //            removeCommentsFromCDATA:true,//删除<script>和<style>标签内的HTML注释
        //            removeCDATASectionsFromCDATA:true,//删除<script>和<style>标签中的CDTA区段
        //            collapseWhitespace:true,//删除文档树中文本节点的空白。不会影响重大的空白，比如在SCRIPT,STYLE,PRE或TEXTAREA等元素内容。 [去掉换行？]
        //            collapseBooleanAttributes:false,//删除布尔属性<input disabled="disabled"> => <input disabled>
        //            removeAttributeQuotes:false,//删除属性的引号，当安全的情况下。
        //            removeRedundantAttributes:true,//删除多余的属性，像type="text/javascript"。
        //            useShortDoctype:true,//用短的HTML5的<!DOCTYPE html>代替doctype
        //            removeEmptyAttributes:true,//删除空（或空白）属性
        //            removeOptionalTags:false,//一些元素允许省略标签，像</td> 
        //            removeEmptyElements:true //删除空元素
        //	    },
        //		files: {
        //		    //依次为要压缩的html文件的目的地址:原始文件地址 
        //		    "dist/html/index.html": "test/html/index.html",
        //		    "dist/html/1.html": "test/html/1.html"
        //		}
        //	}
        //}


        //任务:JS校验 【可用】
        //jshint: {
        //    all: [
        //        "<%= paths.testroot %>"+"/**/*.js"
        //    ],
        //    options: {
        //        jshintrc: ".jshintrc"
        //    }
        //},



        //任务:JS校验 【可用】
        //csslint: {
        //    options: {
        //                csslintrc: ".csslintrc"
        //             },
        //    strict: {
        //        options: {
        //          import: 2
        //        },
        //        src: ["<%= paths.testroot %>"+"/**/*.css"]
        //    }
        //},

           
        //任务:CSS最小化 【可用】
	//cssmin:{
    	//        options:{
        //		report:"gzip"
    	//	     },
    	//	files:{
        //		expand: true,	                //如果设为true，就表示下面文件名的占位符（即*号）都要扩展成具体的文件名。
        //                cwd:"test/css",     //需要处理的文件（input）所在的目录。
        //		src:["*.css", "!*.min.css"],  	                //需要处理的文件（input）所在的目录。
       	//		dest:"release/css/", 	//表示需要处理的文件。如果采用数组形式，数组的每一项就是一个文件名，可以使用通配符。
        //		ext: ".min.css"                            //表示处理后的文件后缀名。
        //         }
        //       },
         
        //任务:修订文件名 【可用】
        //rev: {
    	//	options: {
      	//		    encoding: 'utf8',
      	//		    algorithm: 'md5',
      	//		    length: 8
   	//		 },
    	//	assets: {
      	//		  files: [
        //                         {src:["release/img/**/*.{jpg,jpeg,gif,png,ico}",
        //                                "release/font/**/*.{eot,svg,ttf,woff,woff2,otf}",
	//				  "release/js/**/*.js",
        //                                "release/css/**/*.css"
        //                                ]
        //                           }
        //                          ]
        //                 }
  	//    },


        


        //任务:watch监控 【可用】
        //watch: {
        //    scripts: {
        //        files: ["<%= paths.testroot %>"+"/**/*.css","<%= paths.testroot %>"+"/**/*.js"],
        //        tasks: ["csslint","jshint"]
        //    }
        //}


        ///////////////////////////////////   任务配置 结束      /////////////////////////////////////////////////////

        // 任务:合并文件
        //concat: {
        //    options: {
        //        separator: ';', //定义一个字符串,在每一个文件连接输出时以该字符串连接分割
        //        stripBanners: true,
        //        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n' //头部以这样命名
        //    },
        //    dist: {
        //        src: ['src/**/*.js'],
        //        dest: 'dist/<%= pkg.name %>.js'
        //    }
        //},



        //Task uglify
        //uglify: {
        //    options: {
        //        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        //    },
        //    dist: {
        //        files: {
        //            'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']   //合并后压缩
        //        }
        //    }
        //},



        //Task cssmin
		//cssmin: {
		//	/*
		//	compress: {
		//		files: {
		//		  'assets/all.min.css': ['css/a.css', 'css/b.css']
		//		}
		//	}, */
			
		//	/*
		//	smeite: {
		//		files: {
		//			'assets/smeite.all.css': ['/play21/smeite.com/public/assets/css/**.css']
		//		}
		//	},*/
		//	with_banner: {
		//		options: {
		//			banner: '/* projA Css files by Sonic */'
		//		},
		//		files: {
		//			'dist/css/combo.css': ['src/css/base.css','src/css/index.css']
		//		}
		//	}
		//},

		// // Task imagemin
		// imagemin: {
		//	dist: { // Target
		//		options: { // Target options
		//			optimizationLevel: 3
		//		},
		//		files: { // Dictionary of files
		//			'dist/images/photo.png': 'src/images/photo.png', // 'destination': 'source'
		//			'dist/images/badge.jpg': 'src/images/badge.jpg'
		//		}
		//	}
		// },

        //Task compress
		// compress: {
		//     main: {
		//         options: {
		//             archive: 'archive.zip'
		//         },
		//         files: [
        //           {
        //               src: ['path/*'],
        //               dest: 'internal_folder/',
        //               filter: 'isFile'
        //           }, //path下所有的js
		//                {  src: ['path/**'], dest: 'internal_folder2/'} // path下的所有目录和文件
        //              ]
        //            }
        //        }





      /* E--------------------------------------------------------------------------*/

     });





    /*
     * 加载所有的任务插件(不区分顺序) 
     */
    //加载任务插件 begin
    //grunt.loadNpmTasks("grunt-contrib-clean");
    //grunt.loadNpmTasks("grunt-contrib-compress");
    //grunt.loadNpmTasks("grunt-contrib-concat");
    //grunt.loadNpmTasks("grunt-contrib-copy");
    //grunt.loadNpmTasks("grunt-contrib-csslint");
    //grunt.loadNpmTasks("grunt-contrib-cssmin");
    //grunt.loadNpmTasks("grunt-contrib-htmlmin");
    //grunt.loadNpmTasks("grunt-contrib-imagemin");
    //grunt.loadNpmTasks("grunt-contrib-jshint");
    //grunt.loadNpmTasks("grunt-contrib-uglify");
    //grunt.loadNpmTasks("grunt-contrib-watch");
    //grunt.loadNpmTasks("grunt-rev");
    //加载任务插件 end



    //注册并运行任务(s),注意:有顺序
    //grunt.registerTask("default", ["clean"]);
    //grunt.registerTask("default", ["htmlmin"]);
    //grunt.registerTask("default", ["jshint"]);
    //grunt.registerTask("default", ["csslint"]);
    //grunt.registerTask("default", ["cssmin"]);
    //grunt.registerTask("default", ["watch"]);
    //grunt.registerTask("default", ["rev"]);
    //grunt.registerTask("bulid", ["htmlmin", "uglify", "cssmin", "imagemin"]);






};