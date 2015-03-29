/*
 * FormValidator.js v1.0.0.0 beta
 * Author: dabai qq137991323
 * Date  : 2014-05-26
 */
//判断dhtml元素是否带有某个css类
function hasClass(ele, cls) {
    return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}
//添加css类
function addClass(ele, cls) {
    if (!this.hasClass(ele, cls)) ele.className += " " + cls;
}
//删除css类
function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}

var reInt = /^\s*[+-]?\d+\s*$/; //整数类型
var reUInt = /^\s*[+]?\d+\s*$/; //正整数类型
//数据类型对象
var DataType = {
    Int16: {
        Name: "Int16",
        MaxValue: 32767,
        MinValue: -32768,
        CheckRange: function (val) {
            return ((isFinite(val)) && (reInt.test(val)) && (this.MaxValue >= val) && (this.MinValue <= val));
        }
    },
    Int32: {
        Name: "Int32",
        MaxValue: 2147483647,
        MinValue: -2147483648,
        CheckRange: function (val) {
            return ((isFinite(val)) && (reInt.test(val)) && (this.MaxValue >= val) && (this.MinValue <= val));
        }
    },
    Int64: {
        Name: "Int64",
        MaxValue: 9223372036854775807,
        MinValue: -9223372036854775808,
        CheckRange: function (val) {
            return ((isFinite(val)) && (reInt.test(val)) && (this.MaxValue >= val) && (this.MinValue <= val));
        }
    },
    UInt16: {
        Name: "UInt16",
        MaxValue: 65535,
        MinValue: 0,
        CheckRange: function (val) {
            return ((isFinite(val)) && (reUInt.test(val)) && (this.MaxValue >= val) && (this.MinValue <= val));
        }
    },
    UInt32: {
        Name: "UInt32",
        MaxValue: 4294967295,
        MinValue: 0,
        CheckRange: function (val) {
            return ((isFinite(val)) && (reUInt.test(val)) && (this.MaxValue >= val) && (this.MinValue <= val));
        }
    },
    UInt64: {
        Name: "UInt64",
        MaxValue: 18446744073709551615,
        MinValue: 0,
        CheckRange: function (val) {
            return ((isFinite(val)) && (reUInt.test(val)) && (this.MaxValue >= val) && (this.MinValue <= val));
        }
    },
    Float: {
        Name: "Float",
        MaxValue: 3.402823E+38,
        MinValue: -3.402823E+38,
        CheckRange: function (val) {
            return ((isFinite(val)) && (this.MaxValue >= val) && (this.MinValue <= val));
        }
    },
    Double: {
        Name: "Double",
        MaxValue: 1.79E+308,
        MinValue: -1.79E+308,
        CheckRange: function (val) {
            return ((isFinite(val)) && (this.MaxValue >= val) && (this.MinValue <= val));
        }
    },
    DateTime: {
        Name: "DateTime",
        MaxValue: new Date(9999, 12, 31, 23, 59, 59),
        MinValue: new Date(1, 1, 1, 0, 0, 0),
        CheckRange: function (val) {
            var temp = Date.parse(val);
            return ((!isNaN(temp)) && (this.MaxValue >= temp) && (this.MinValue <= temp));
        }
    },
    String: {
        Name: "String",
        IsNullOrEmpty: function (val) {
            return ((val == null) || (val == ""));
        },
        IsNullOrWhiteSpace: function (val) {
            return (val == null) || /^\s*$/.test(val);
        },
        Trim: function (val) {
            if (val != null) {
               return val.replace(/(^\s*)|(\s*$)/g, "")
            }
            return val;
        }
    }
};
//获取最近父类节点
function GetClosestElement(obj, tagName) {
    if (DataType.String.IsNullOrWhiteSpace(tagName)) {
        throw "tagName 不能为空!"
    }
    tagName = tagName.toUpperCase();
    var node = obj.parentNode;
    while (node != null) {
        if ((node == null) || (node.tagName == tagName)) {
            break;
        }
        node = node.parentNode;
    }
    return node;
}
//获取子节点（根据name属性和tagName标签类型）
function GetElementsByNameAndTagName(container, name, tagName) {
    var lst = new Array();
    var eles = container.getElementsByTagName(tagName);
    for (var i = 0; i < eles.length; i++) {
        if (eles[i].name == name) {
            lst.push(eles[i]);
        }
    }
    return lst;
}
// 获取长度
function GetLength(obj) {
    var length = 0;
    switch (obj.type) {
        case "checkbox":
        case "radio":
            var form = GetClosestElement(obj, "FORM");
            var nodes = null;
            if (form != null) {
                nodes = GetElementsByNameAndTagName(form, obj.name, obj.tagName);
            }
            else {
                nodes = document.getElementsByName(obj.name);
            }
            if ((nodes != null) && (nodes.length > 0)) {
                for (var i = 0; i < nodes.length; i++) {
                    if (nodes[i].checked) {
                        length++;
                    }
                }
            }
            break;
        case "select-one":
        case "select-multiple":
            for (var i = 0; i < obj.options.length; i++) {
                if (obj.options[i].selected) {
                    length++;
                }
            }
            break;
        default:
            length = obj.value.length;
            break;
    }
    return length;
};
//表单验证css类
var ValidateCssClass = {
    Succeed: "validate-succeed",
    Error: "validate-error",
    Info: "validate-info"
};
//表单验证属性
var ValidateProperties = {
    CanEmpty: "fv-empty", //fv-empty="false",表示不能为空
    DataType: "fv-datatype",// 数据类型
    Custom: "fv-custom",//自定义验证函数
    Format: "fv-format",//格式化
    MaxValue: "fv-maxvalue",//最大值
    MinValue: "fv-minvalue",//最小值
    MaxLength: "fv-maxlength",//最长长度
    MinLength: "fv-minlength",//值最小长度
    Ajax: "fv-ajax",//ajax验证
    CompareTo: "fv-compareto",//比较验证属性格式：fv-compareto=">,id1,id2,id3" >为表达式，可选的表达式有：> < >= <= != =(大于，小于，大于等于，小于等于，不等于，等于
    MsgPanel: "fv-msgpanel",//消息显示控件的id
    MsgInfo: "fv-msg-info",//用于显示默认消息（为msgpanel静态文本)
    MsgSuccess: "fv-msg-success",//验证成功消息，如果不填写，将采用默认静态消息显示（原msgpanel内容）
    MsgError: "fv-msg-error",//验证失败默认错误消息
    Validate: "fv-validate"//用于form元素上，fv-validate="true"表示此表单参与验证
}
//属性格式为：属性名="属性值|错误提示信息" 属性和信息，用|隔开
function ValidateConfig(val, msg) {
    this.Message = msg;
    this.Value = val;
}
//验证表单
function FormValidator(form) {
    this.Body = form;
}
//初始化表单验证
FormValidator.prototype.Init = function () {
    var salf = this;
    //拦截form提交事件，可能出现重复两次验证。
    //因为form.submit()方法，不会触发onsubmit事件。
    //而input type="submit"会触发内部submit方法，并直接提交。除非在onsubmit中，返回false。
    //故此会提交两次验证。可以通过代码标记实现，保证验证一次。但是麻烦。我喜欢代码简单点。两次验证不什么影响。    
    var onsubmit = salf.Body.onsubmit;
    if (onsubmit == null) {
        salf.Body.onsubmit = function () { return salf.Validate(); };
    }
    else {
        salf.Body.onsubmit = function () { return salf.Validate() && onsubmit(); };
    }
    //*
    if ((typeof (salf.Body.submit) == 'function' || (!salf.Body.submit.tagName && !salf.Body.submit.length))) {
        salf.Body.originalSubmit = salf.Body.submit;
        salf.Body.submit = function () {
            if (salf.Validate()) {
                salf.Body.originalSubmit();
            }
        }
    }
    //*/
    var inputItems = salf.Body.getElementsByTagName("input");
    var selectItems = salf.Body.getElementsByTagName("select");
    var textareaItems = salf.Body.getElementsByTagName("textarea");

    if ((inputItems != null) && (inputItems.length > 0)) {
        for (var i = 0; i < inputItems.length; i++) {
            if ((inputItems[i].type != "submit") && (inputItems[i].type != "button") && (inputItems[i].type != "reset")) {
                (new ElementValidator(inputItems[i])).Init();
            }
        }
    }
    if ((selectItems != null) && (selectItems.length > 0)) {
        for (var i = 0; i < selectItems.length; i++) {
            (new ElementValidator(selectItems[i])).Init();
        }
    }
    if ((textareaItems != null) && (textareaItems.length > 0)) {
        for (var i = 0; i < textareaItems.length; i++) {
            (new ElementValidator(textareaItems[i])).Init();
        }
    }
}
//显示属性信息,如果msg不为空，显示msg，如果msg为空，显示总的msg，如果总的msg为空，显示预定义msg
FormValidator.prototype.ShowMessage = function (msg, className) {
    var msgPenelId = this.Body.getAttribute(ValidateProperties.MsgPanel);
    var msgpanel = null;
    if (!DataType.String.IsNullOrWhiteSpace(msgPenelId)) {
        msgpanel = document.getElementById(msgPenelId);
    }
    if (msgpanel != null) {
        if (msgpanel.getAttribute(ValidateProperties.MsgInfo) == null) {
            //保存默认消息，用于验证后,没有设置验证失败消息，也没有设置fv-message的情况。
            msgpanel.setAttribute(ValidateProperties.MsgInfo, msgpanel.innerHTML);
        }
        if (DataType.String.IsNullOrWhiteSpace(msg)) {
            msg = msgpanel.getAttribute(ValidateProperties.MsgInfo);
        }
        msgpanel.innerHTML = msg;
        msgpanel.className = className;
    }
    else {
        if (!DataType.String.IsNullOrWhiteSpace(msg)) {
            alert(msg);
        }
    }
};
//设置验证状态
FormValidator.prototype.SetValidateStatus = function (validateResult) {
    var className = null;
    if (validateResult == true) {
        removeClass(this.Body, ValidateCssClass.Error);
        removeClass(this.Body, ValidateCssClass.Info);
        className = ValidateCssClass.Succeed;
        msg = this.Body.getAttribute(ValidateProperties.MsgSuccess);
    }
    else if (validateResult == false) {
        removeClass(this.Body, ValidateCssClass.Succeed);
        removeClass(this.Body, ValidateCssClass.Info);
        className = ValidateCssClass.Error;
        msg = this.Body.getAttribute(ValidateProperties.MsgError);
    }
    else {
        removeClass(this.Body, ValidateCssClass.Succeed);
        removeClass(this.Body, ValidateCssClass.Error);
        className = ValidateCssClass.Info;
        msg = null;
    }
    addClass(this.Body, className);
    this.ShowMessage(msg, className);
};
//验证函数
//html属性 fv-validate="true"
FormValidator.prototype.Validate = function () {
    var inputItems = this.Body.getElementsByTagName("input");
    var selectItems = this.Body.getElementsByTagName("select");
    var textareaItems = this.Body.getElementsByTagName("textarea");
    var chk = true;
    if ((inputItems != null) && (inputItems.length > 0)) {
        for (var i = 0; i < inputItems.length; i++) {
            if ((inputItems[i].type != "submit") && (inputItems[i].type != "button") && (inputItems[i].type != "reset")) {
                chk = (new ElementValidator(inputItems[i])).Validate() && chk;
            }
        }
    }
    if ((selectItems != null) && (selectItems.length > 0)) {
        for (var i = 0; i < selectItems.length; i++) {
            chk = (new ElementValidator(selectItems[i])).Validate() && chk;
        }
    }
    if ((textareaItems != null) && (textareaItems.length > 0)) {
        for (var i = 0; i < textareaItems.length; i++) {
            chk = (new ElementValidator(textareaItems[i])).Validate() && chk;
        }
    }
    this.SetValidateStatus(chk);
    return chk;
};
//验证控件，一般为：input(text, radio, checkbox),select, textarea
function ElementValidator(element) {
    this.Body = element;
}
ElementValidator.prototype.Init = function () {
    var salf = this;
    // salf.Body.onfocus = function () {
    //     salf.Validate();
    // }
    // salf.Body.onblur = function () {
    //     salf.Validate();
    // }
    salf.Body.onchange = function () {
        salf.Validate();
    }
}
//验证函数
//html属性 FV-Validate="true"
ElementValidator.prototype.Validate = function () {
    return this.CheckEmpty() && this.CheckAjax() && this.CheckCompareTo() && this.CheckCustom() && this.CheckDataType() && this.CheckFormat() && this.CheckMaxLength() && this.CheckMinLength() && this.CheckMaxValue() && this.CheckMinValue();
};
//验证值是否为空
//html属性 FV-Empty="false"
ElementValidator.prototype.CheckEmpty = function () {
    var chk = true;
    var config = this.GetValidateConfig(ValidateProperties.CanEmpty);
    if ((config != null) && (config.Value == "false")) {
        chk = !DataType.String.IsNullOrWhiteSpace(this.Body.value)
        this.SetValidateStatus(chk, config.Message);
    }
    return chk;
};
//验证格式化
//html属性 FV-Format="正则表达式"
ElementValidator.prototype.CheckFormat = function () {
    var chk = true;
    if (!DataType.String.IsNullOrEmpty(this.Body.value)) {
        var config = this.GetValidateConfig(ValidateProperties.Format);
        if (config != null) {
            chk = (new RegExp(config.Value)).test(this.Body.value);
            this.SetValidateStatus(chk, config.Message);
        }
    }
    else {
        this.SetValidateStatus(null, null);
    }
    return chk;
}
//验证最小长度
//html属性 FV-MinLength="false"
ElementValidator.prototype.CheckMinLength = function () {
    var chk = true;
    if (!DataType.String.IsNullOrEmpty(this.Body.value)) {
        var config = this.GetValidateConfig(ValidateProperties.MinLength);
        if (config != null) {
            chk = GetLength(this.Body) >= parseInt(config.Value);
            this.SetValidateStatus(chk, config.Message);
        }
    }
    else {
        this.SetValidateStatus(null, null);
    }
    return chk;
};
//验证最大长度
ElementValidator.prototype.CheckMaxLength = function () {
    var chk = true;
    if (!DataType.String.IsNullOrEmpty(this.Body.value)) {
        var config = this.GetValidateConfig(ValidateProperties.MaxLength);
        if (config != null) {
            chk = GetLength(this.Body) <= parseInt(config.Value);
            this.SetValidateStatus(chk, config.Message);
        }
    }
    else {
        this.SetValidateStatus(null, null);
    }
    return chk;
};
//验证数据类型
ElementValidator.prototype.CheckDataType = function () {
    var chk = true;
    if (!DataType.String.IsNullOrEmpty(this.Body.value)) {
        var config = this.GetValidateConfig(ValidateProperties.DataType);
        if (config != null) {
            var type = config.Value;
            if (type == DataType.String.Name) {
                chk = true;
            }
            else if (DataType.hasOwnProperty(type)) {
                chk = DataType[type].CheckRange(this.Body.value);
            }
            else {
                alert("data type not define:" + type);
                throw "data type not define!";
            }
            this.SetValidateStatus(chk, config.Message);
        }
    }
    else {
        this.SetValidateStatus(null, null);
    }
    return chk;
}
//验证最小值
ElementValidator.prototype.CheckMinValue = function () {
    var chk = true;
    if (!DataType.String.IsNullOrEmpty(this.Body.value)) {
        var config = this.GetValidateConfig(ValidateProperties.MinValue);
        if (config != null) {
            if (isFinite(config.Value)) {
                var num1 = parseFloat(config.Value);
                var num2 = parseFloat(this.Body.value);
                chk = (num2 >= num1);
            }
            else {
                chk = (this.Body.value <= config.Value);
            }
            this.SetValidateStatus(chk, config.Message);
        }
    }
    else {
        this.SetValidateStatus(null, null);
    }
    return chk;
};
//验证最大值
ElementValidator.prototype.CheckMaxValue = function () {
    var chk = true;
    if (!DataType.String.IsNullOrEmpty(this.Body.value)) {
        var config = this.GetValidateConfig(ValidateProperties.MaxValue);
        if (config != null) {
            if (isFinite(config.Value)) {
                var num1 = parseFloat(config.Value);
                var num2 = parseFloat(this.Body.value);
                chk = (num2 <= num1);
            }
            else {
                chk = (this.Body.value <= config.Value);
            }
            this.SetValidateStatus(chk, config.Message);
        }
    }
    else {
        this.SetValidateStatus(null, null);
    }
    return chk;
};
//验证比较,比较验证属性格式：fv-compareto=">,id1,id2,id3"
ElementValidator.prototype.CheckCompareTo = function () {
    var chk = true;
    var config = this.GetValidateConfig(ValidateProperties.CompareTo);
    if (config != null) {
        var ids = config.Value.split(",");
        if ((ids != null) && (ids.length > 1)) {
            var op = DataType.String.Trim(ids[0]);
            switch(op)
            {
                case "==":
                    for (var i = 1; i < ids.length; i++) {
                        chk = chk && (document.getElementById(ids[i]).value == this.Body.value);
                        if (!chk) {
                            break;
                        }
                    }
                    break;
                case ">":
                    for (var i = 1; i < ids.length; i++) {
                        chk = chk && (document.getElementById(ids[i]).value > this.Body.value);
                        if (!chk) {
                            break;
                        }
                    }
                    break;
                case "<":
                    for (var i = 1; i < ids.length; i++) {
                        chk = chk && (document.getElementById(ids[i]).value < this.Body.value);
                        if (!chk) {
                            break;
                        }
                    }
                    break;
                case ">=":
                    for (var i = 1; i < ids.length; i++) {
                        chk = chk && (document.getElementById(ids[i]).value >= this.Body.value);
                        if (!chk) {
                            break;
                        }
                    }
                    break;
                case "<=":
                    for (var i = 1; i < ids.length; i++) {
                        chk = chk && (document.getElementById(ids[i]).value <= this.Body.value);
                        if (!chk) {
                            break;
                        }
                    }
                    break;
                case "!=":
                    for (var i = 1; i < ids.length; i++) {
                        chk = chk && (document.getElementById(ids[i]).value != this.Body.value);
                        if (!chk) {
                            break;
                        }
                    }
                    break;
                default:
                    throw "比较表达式有误！"
                    break;
            }
        }
        else {
            throw "比较控件值验证设置，至少需要添加一个待比较控件的id，多个id用逗号(,)隔开。";
        }
        this.SetValidateStatus(chk, config.Message);
    }
    return chk;
};
//验证Ajax
ElementValidator.prototype.CheckAjax = function () {
    //设置等待ajax验证
    //当提交要结束表单验证的时候，查看此状态。如果此状态还是pendding状态，则等待
    return true;
}
//验证自定义函数
ElementValidator.prototype.CheckCustom = function () {
    var chk = true;
    var config = this.GetValidateConfig(ValidateProperties.Custom);
    if (config != null) {
        chk = eval(config.Value + "()");
        this.SetValidateStatus(chk, config.Message);
    }
    return chk;
};
//获取验证属性配置
ElementValidator.prototype.GetValidateConfig = function (propertyName) {
    var val = this.Body.getAttribute(propertyName);
    if (DataType.String.IsNullOrWhiteSpace(val)) {
        return null;
    }
    else {
        return new ValidateConfig(val, this.Body.getAttribute(propertyName + "-msg"));
    }
}
//显示属性信息,如果msg不为空，显示msg，如果msg为空，显示总的msg，如果总的msg为空，显示预定义msg
ElementValidator.prototype.ShowMessage = function (msg, className) {
    var msgPanelId = this.Body.getAttribute(ValidateProperties.MsgPanel);
    if (msgPanelId != null) {
        var msgpanel = document.getElementById(msgPanelId);
        if (msgpanel != null) {
            if (msgpanel.getAttribute(ValidateProperties.MsgInfo) == null) {
                //保存默认消息，用于验证后,没有设置验证失败消息，也没有设置fv-message的情况。
                msgpanel.setAttribute(ValidateProperties.MsgInfo, msgpanel.innerHTML);
            }
            if (DataType.String.IsNullOrWhiteSpace(msg)) {
                msg = msgpanel.getAttribute(ValidateProperties.MsgInfo);
            }
            msgpanel.innerHTML = msg;
            msgpanel.className = className;
        }
    }
};
//设置验证状态
ElementValidator.prototype.SetValidateStatus = function (validateResult, msg) {
    var className = null;
    if (validateResult == true) {
        removeClass(this.Body, ValidateCssClass.Error);
        removeClass(this.Body, ValidateCssClass.Info);
        className = ValidateCssClass.Succeed;
        msg = this.Body.getAttribute(ValidateProperties.MsgSuccess);
    }
    else if (validateResult == false) {
        removeClass(this.Body, ValidateCssClass.Succeed);
        removeClass(this.Body, ValidateCssClass.Info);
        className = ValidateCssClass.Error;
        if (DataType.String.IsNullOrEmpty(msg)) {
            msg = this.Body.getAttribute(ValidateProperties.MsgError);
        }
    }
    else {
        removeClass(this.Body, ValidateCssClass.Succeed);
        removeClass(this.Body, ValidateCssClass.Error);
        className = ValidateCssClass.Info;
        msg = null;
    }
    addClass(this.Body, className);

    this.ShowMessage(msg, className);
};

function FormValidateInit() {
    var forms = document.getElementsByTagName("FORM");
    for (var i = 0; i < forms.length; i++) {
        if (forms[i].getAttribute(ValidateProperties.Validate) == "true") {
            new FormValidator(forms[i]).Init();
        }
    }
}

//以下代码，来自网络copy来用的。
// 如果支持 W3C DOM2, 则使用 W3C 方法  
if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", FormValidateInit, false);
}
else if (/MSIE/i.test(navigator.userAgent)) {// 如果是 IE 浏览器
    // 创建一个 script 标签, 该标签有 defer 属性, 当 document 加载完毕时才会被载入  
    document.write('<script id="__ie_onloadfix" defer src="javascript:void(0)"></script>');
    var script = document.getElementById("__ie_onloadfix");
    // 如果文档确实装载完毕, 调用初始化方法  
    script.onreadystatechange = function () {
        if (this.readyState == 'complete') {
            FormValidateInit();
        }
    }
    // 如果是 Safari 浏览器  
}
else if (/WebKit/i.test(navigator.userAgent)) {
    // 创建定时器, 每 0.1 秒检验一次, 如果文档装载完毕则调用初始化方法  
    var _timer = setInterval(function () {
        if (/loaded|complete/.test(document.readyState)) {
            clearInterval(_timer);
            FormValidateInit();
        }
    }, 100);
}
else {
    // 如果以上皆不是, 使用最坏的方法 (本例中, Opera 7 将会跑到这里来)  
    window.onload = function (e) {
        FormValidateInit();
    }
}


/*
根据〖中华人民共和国国家标准 GB 11643-1999〗中有关公民身份号码的规定，公民身份号码是特征组合码，由十七位数字本体码和一位数字校验码组成。排列顺序从左至右依次为：六位数字地址码，八位数字出生日期码，三位数字顺序码和一位数字校验码。
    地址码表示编码对象常住户口所在县(市、旗、区)的行政区划代码。
    出生日期码表示编码对象出生的年、月、日，其中年份用四位数字表示，年、月、日之间不用分隔符。
    顺序码表示同一地址码所标识的区域范围内，对同年、月、日出生的人员编定的顺序号。顺序码的奇数分给男性，偶数分给女性。
    校验码是根据前面十七位数字码，按照ISO 7064:1983.MOD 11-2校验码计算出来的检验码。

出生日期计算方法。
    15位的身份证编码首先把出生年扩展为4位，简单的就是增加一个19或18,这样就包含了所有1800-1999年出生的人;
    2000年后出生的肯定都是18位的了没有这个烦恼，至于1800年前出生的,那啥那时应该还没身份证号这个东东，⊙﹏⊙b汗...
下面是正则表达式:
 出生日期1800-2099  (18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])
 身份证正则表达式 /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i            
 15位校验规则 6位地址编码+6位出生日期+3位顺序号
 18位校验规则 6位地址编码+8位出生日期+3位顺序号+1位校验位
 
 校验位规则     公式:∑(ai×Wi)(mod 11)……………………………………(1)
                公式(1)中： 
                i----表示号码字符从由至左包括校验码在内的位置序号； 
                ai----表示第i位置上的号码字符值； 
                Wi----示第i位置上的加权因子，其数值依据公式Wi=2^(n-1）(mod 11)计算得出。
                i 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
                Wi 7 9 10 5 8 4 2 1 6 3 7 9 10 5 8 4 2 1

*/
//身份证号合法性验证 
//支持15位和18位身份证号
//支持地址编码、出生日期、校验位验证
        
        function IdentityCodeValid() { 
            var code = document.getElementById("identitycode").value;
            var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
            var tip = "";
            var pass= true;
            
            if(!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)){
                tip = "身份证号格式错误";
                pass = false;
            }
            
           else if(!city[code.substr(0,2)]){
                tip = "地址编码错误";
                pass = false;
            }
            else{
                //18位身份证需要验证最后一位校验位
                if(code.length == 18){
                    code = code.split('');
                    //∑(ai×Wi)(mod 11)
                    //加权因子
                    var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
                    //校验位
                    var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
                    var sum = 0;
                    var ai = 0;
                    var wi = 0;
                    for (var i = 0; i < 17; i++)
                    {
                        ai = code[i];
                        wi = factor[i];
                        sum += ai * wi;
                    }
                    var last = parity[sum % 11];
                    if(parity[sum % 11] != code[17]){
                        tip = "校验位错误";
                        pass =false;
                    }
                }
            }
            // if(!pass) alert(tip);
            return pass;

        }
        
        
        
