/*
 COPYRIGHT 2009 ESRI

 TRADE SECRETS: ESRI PROPRIETARY AND CONFIDENTIAL
 Unpublished material - all rights reserved under the
 Copyright Laws of the United States and applicable international
 laws, treaties, and conventions.

 For additional information, contact:
 Environmental Systems Research Institute, Inc.
 Attn: Contracts and Legal Services Department
 380 New York Street
 Redlands, California, 92373
 USA

 email: contracts@esri.com
 */
//>>built
define("esri/dijit/editing/nls/Editor-all_zh-cn",{"dijit/form/nls/validate":{"rangeMessage":"此值超出范围。","invalidMessage":"输入的值无效。","missingMessage":"该值是必需的。"},"dijit/_editor/nls/commands":{"removeFormat":"除去格式","copy":"复制","paste":"粘贴","selectAll":"全选","insertOrderedList":"编号列表","insertTable":"插入/编辑表","print":"打印","underline":"下划线","foreColor":"前景颜色","htmlToggle":"HTML 源","formatBlock":"段落样式","newPage":"新建页面","insertHorizontalRule":"水平线","delete":"删除","appleKey":"⌘${0}","insertUnorderedList":"符号列表","tableProp":"表格属性","insertImage":"插入图像","superscript":"上标","subscript":"下标","createLink":"创建链接","undo":"撤销","fullScreen":"切换全屏幕","italic":"斜体","fontName":"字体名称","justifyLeft":"左对齐","unlink":"除去链接","toggleTableBorder":"切换表格边框","viewSource":"查看 HTML 源","ctrlKey":"ctrl+${0}","fontSize":"字体大小","systemShortcut":"只能在浏览器中通过键盘快捷方式执行“${0}”操作。使用 ${1}。","indent":"缩进","redo":"重做","strikethrough":"删除线","justifyFull":"调整","justifyCenter":"居中","hiliteColor":"背景颜色","deleteTable":"删除表格","outdent":"凸出","cut":"剪切","plainFormatBlock":"段落样式","toggleDir":"切换方向","bold":"粗体","tabIndent":"跳格缩进","justifyRight":"右对齐"},"dijit/nls/loading":{"loadingState":"正在加载...","errorState":"对不起，发生了错误"},"dojo/cldr/nls/islamic":{"days-standAlone-short":["周日","周一","周二","周三","周四","周五","周六"],"months-format-narrow":["1","2","3","4","5","6","7","8","9","10","11","12"],"quarters-standAlone-narrow":["1","2","3","4"],"dateFormatItem-yQQQ":"y年第Q季度","dateFormatItem-yMEd":"y年M月d日，E","dateFormatItem-MMMEd":"M月d日E","eraNarrow":["回历"],"days-format-short":["周日","周一","周二","周三","周四","周五","周六"],"dateTimeFormats-appendItem-Day-Of-Week":"{0} {1}","dateFormat-long":"Gy年M月d日","months-format-wide":["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],"dateTimeFormat-medium":"{1} {0}","dayPeriods-format-wide-pm":"下午","dateFormat-full":"Gy年M月d日EEEE","dateFormatItem-Md":"M-d","dayPeriods-format-abbr-am":"AM","dateTimeFormats-appendItem-Second":"{0} ({2}: {1})","dateFormatItem-yMd":"y/M/d","dateFormatItem-yM":"y年M月","months-standAlone-wide":["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],"timeFormat-short":"ah:mm","quarters-format-wide":["第一季度","第二季度","第三季度","第四季度"],"timeFormat-long":"zah:mm:ss","dateFormatItem-yMMM":"y年M月","dateFormatItem-yQ":"y年第Q季度","dateTimeFormats-appendItem-Era":"{0} {1}","dateFormatItem-MMdd":"MM-dd","months-format-abbr":["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"timeFormat-full":"zzzzah:mm:ss","dateTimeFormats-appendItem-Week":"{0} ({2}: {1})","dateFormatItem-H":"H时","months-standAlone-abbr":["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"quarters-format-abbr":["1季度","2季度","3季度","4季度"],"quarters-standAlone-wide":["第一季度","第二季度","第三季度","第四季度"],"dateFormatItem-M":"M月","days-standAlone-wide":["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],"dateFormatItem-yyyyMMM":"GGGGGyy年M月","dateFormatItem-yyyyMMMd":"GGGGGyy年M月d日","timeFormat-medium":"ah:mm:ss","dateFormatItem-Hm":"H:mm","quarters-standAlone-abbr":["1季度","2季度","3季度","4季度"],"eraAbbr":["回历"],"days-standAlone-abbr":["周日","周一","周二","周三","周四","周五","周六"],"dateFormatItem-d":"d日","dateFormatItem-ms":"mm:ss","quarters-format-narrow":["1","2","3","4"],"dateFormatItem-h":"ah时","dateTimeFormat-long":"{1}{0}","dayPeriods-format-narrow-am":"上午","dateFormatItem-MMMd":"M月d日","dateFormatItem-MEd":"M-dE","dateTimeFormat-full":"{1}{0}","days-format-wide":["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],"dateTimeFormats-appendItem-Day":"{0} ({2}: {1})","dateFormatItem-y":"y年","months-standAlone-narrow":["1","2","3","4","5","6","7","8","9","10","11","12"],"dateFormatItem-hm":"ah:mm","dateTimeFormats-appendItem-Year":"{0} {1}","dateTimeFormats-appendItem-Hour":"{0} ({2}: {1})","dayPeriods-format-abbr-pm":"PM","days-format-abbr":["周日","周一","周二","周三","周四","周五","周六"],"dateFormatItem-yMMMd":"y年M月d日","eraNames":["回历"],"days-format-narrow":["日","一","二","三","四","五","六"],"dateFormatItem-yyyyMd":"GGGGGyy-MM-dd","days-standAlone-narrow":["日","一","二","三","四","五","六"],"dateFormatItem-MMM":"LLL","dateTimeFormats-appendItem-Quarter":"{0} ({2}: {1})","dayPeriods-format-wide-am":"上午","dateTimeFormats-appendItem-Month":"{0} ({2}: {1})","dateTimeFormats-appendItem-Minute":"{0} ({2}: {1})","dateFormatItem-MMMMdd":"M月dd日","dateFormat-short":"Gyy-MM-dd","dateFormatItem-yMMMEd":"y年M月d日E","dateFormatItem-Ed":"d日E","dateTimeFormats-appendItem-Timezone":"{0} {1}","dateFormat-medium":"Gy年M月d日","dateFormatItem-yyyyM":"GGGGGyy-MM","dayPeriods-format-narrow-pm":"下午","dateTimeFormat-short":"{1} {0}","dateFormatItem-yyyyQ":"Gy年QQQ","dateFormatItem-Hms":"H:mm:ss","dateFormatItem-hms":"ah:mm:ss","dateFormatItem-yyyy":"GGGyy年"},"dijit/form/nls/ComboBox":{"previousMessage":"先前选项","nextMessage":"更多选项"}});