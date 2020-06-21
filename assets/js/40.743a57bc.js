(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{258:function(a,s,e){"use strict";e.r(s);var l=e(19),t=Object(l.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"spring注解-配置说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring注解-配置说明"}},[a._v("#")]),a._v(" Spring注解/配置说明")]),a._v(" "),e("h2",{attrs:{id:"xml的配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xml的配置"}},[a._v("#")]),a._v(" XML的配置")]),a._v(" "),e("ul",[e("li",[a._v('<bean id="accountService" class="com.daoge.service.impl.AccountServiceImpl"')]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('   scope=""  init-method="" destroy-method="">\n')])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v(' <property name=""  value="" | ref=""></property>\n')])])])]),a._v(" "),e("li"),a._v(" "),e("li"),a._v(" "),e("li",[a._v("用于创建对象的")]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v(" 他们的作用就和在XML配置文件中编写一个<bean>标签实现的功能是一样的\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v(" Component:\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("     作用：用于把当前类对象存入spring容器中\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("     属性：\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("         value：用于指定bean的id。当我们不写时，它的默认值是当前类名，且首字母改小写。\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v(" Controller：一般用在表现层\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v(" Service：一般用在业务层\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v(" Repository：一般用在持久层\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v(" 以上三个注解他们的作用和属性与Component是一模一样。\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v(" 他们三个是spring框架为我们提供明确的三层使用的注解，使我们的三层对象更加清晰\n")])])])]),a._v(" "),e("li"),a._v(" "),e("li"),a._v(" "),e("li",[a._v("用于注入数据的")]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v(" 他们的作用就和在xml配置文件中的bean标签中写一个<property>标签的作用是一样的\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v(" Autowired:\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("     作用：自动按照类型注入。只要容器中有唯一的一个bean对象类型和要注入的变量类型匹配，就可以注入成功\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("           如果ioc容器中没有任何bean的类型和要注入的变量类型匹配，则报错。\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("           如果Ioc容器中有多个类型匹配时：\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("     出现位置：\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("         可以是变量上，也可以是方法上\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("     细节：\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("         在使用注解注入时，set方法就不是必须的了。\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v(" Qualifier:\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("     作用：在按照类中注入的基础之上再按照名称注入。它在给类成员注入时不能单独使用。但是在给方法参数注入时可以（稍后我们讲）\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("     属性：\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("         value：用于指定注入bean的id。\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v(" Resource\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("     作用：直接按照bean的id注入。它可以独立使用\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("     属性：\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("         name：用于指定bean的id。\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v(" 以上三个注入都只能注入其他bean类型的数据，而基本类型和String类型无法使用上述注解实现。\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v(" 另外，集合类型的注入只能通过XML来实现。\n")])])])]),a._v(" "),e("li"),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v(" Value\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("     作用：用于注入基本类型和String类型的数据\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("     属性：\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("         value：用于指定数据的值。它可以使用spring中SpEL(也就是spring的el表达式）\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("                 SpEL的写法：${表达式}\n")])])])]),a._v(" "),e("li"),a._v(" "),e("li",[a._v("用于改变作用范围的")]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v(" 他们的作用就和在bean标签中使用scope属性实现的功能是一样的\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v(" Scope\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("     作用：用于指定bean的作用范围\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("     属性：\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("         value：指定范围的取值。常用取值：singleton prototype\n")])])])]),a._v(" "),e("li"),a._v(" "),e("li",[a._v("和生命周期相关 了解")]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v(" 他们的作用就和在bean标签中使用init-method和destroy-methode的作用是一样的\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v(" PreDestroy\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("     作用：用于指定销毁方法\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v(" PostConstruct\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("     作用：用于指定初始化方法\n")])])])])]),a._v(" "),e("h2",{attrs:{id:"注解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注解"}},[a._v("#")]),a._v(" 注解")]),a._v(" "),e("ul",[e("li",[a._v("该类是一个配置类，它的作用和bean.xml是一样的")]),a._v(" "),e("li",[a._v("spring中的新注解")]),a._v(" "),e("li",[a._v("Configuration")]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("作用：指定当前类是一个配置类\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("细节：当配置类作为AnnotationConfigApplicationContext对象创建的参数时，该注解可以不写。\n")])])])]),a._v(" "),e("li",[a._v("ComponentScan")]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v(" 作用：用于通过注解指定spring在创建容器时要扫描的包\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v(" 属性：\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("     value：它和basePackages的作用是一样的，都是用于指定创建容器时要扫描的包。\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("            我们使用此注解就等同于在xml中配置了:\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('                 <context:component-scan base-package="com.itheima"></context:component-scan>\n')])])])]),a._v(" "),e("li",[a._v("Bean")]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v(" 作用：用于把当前方法的返回值作为bean对象存入spring的ioc容器中\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v(" 属性:\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("     name:用于指定bean的id。当不写时，默认值是当前方法的名称\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v(" 细节：\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("     当我们使用注解配置方法时，如果方法有参数，spring框架会去容器中查找有没有可用的bean对象。\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("     查找的方式和Autowired注解的作用是一样的\n")])])])]),a._v(" "),e("li",[a._v("Import")]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v(" 作用：用于导入其他的配置类\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v(" 属性：\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("     value：用于指定其他配置类的字节码。\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("             当我们使用Import的注解之后，有Import注解的类就父配置类，而导入的都是子配置类\n")])])])]),a._v(" "),e("li",[a._v("PropertySource")]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v(" 作用：用于指定properties文件的位置\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v(" 属性：\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("     value：指定文件的名称和路径。\n")])])])]),a._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("             关键字：classpath，表示类路径下")])])])])])])}),[],!1,null,null,null);s.default=t.exports}}]);