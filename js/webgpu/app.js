"use strict";
(function(module) {
    if (typeof define === 'function' && define.amd) {
        define(['exports'], function(exports)  {
            module(exports);
        });
    } else if (typeof exports === 'object' && exports !== null && typeof exports.nodeName !== 'string') {
        module(exports);
    } else {
        module(typeof self !== 'undefined' ? self : this);
}
}(function($rt_exports) {
let $rt_seed = 2463534242,
$rt_nextId = () => {
    let x = $rt_seed;
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    $rt_seed = x;
    return x;
},
$rt_wrapFunction0 = f => function() {
    return f(this);
},
$rt_wrapFunction1 = f => function(p1) {
    return f(this, p1);
},
$rt_wrapFunction2 = f => function(p1, p2) {
    return f(this, p1, p2);
},
$rt_mainStarter = f => (args, callback) => {
    if (!args) {
        args = [];
    }
    let javaArgs = $rt_createArray($rt_objcls(), args.length);
    for (let i = 0;i < args.length;++i) {
        javaArgs.data[i] = $rt_str(args[i]);
    }
    $rt_startThread(() => {
        f.call(null, javaArgs);
    }, callback);
},
$rt_eraseClinit = target => target.$clinit = () => {
},
$dbg_class = obj => {
    let cls = obj.constructor;
    let arrayDegree = 0;
    while (cls.$meta && cls.$meta.item) {
        ++arrayDegree;
        cls = cls.$meta.item;
    }
    let clsName = "";
    if (cls.$meta.primitive) {
        clsName = cls.$meta.name;
    } else {
        clsName = cls.$meta ? cls.$meta.name || "a/" + cls.name : "@" + cls.name;
    }
    while (arrayDegree-- > 0) {
        clsName += "[]";
    }
    return clsName;
},
$rt_classWithoutFields = superclass => {
    if (superclass === 0) {
        return function() {
        };
    }
    if (superclass === void 0) {
        superclass = $rt_objcls();
    }
    return function() {
        superclass.call(this);
    };
},
$rt_cls = cls => jl_Class_getClass(cls),
$rt_objcls = () => jl_Object,
$rt_callWithReceiver = f => function() {
    return f.apply(null, [this].concat(Array.prototype.slice.call(arguments)));
},
$rt_createcls = () => {
    return { $array : null, classObject : null, $meta : { supertypes : [], superclass : null } };
},
$rt_createPrimitiveCls = (name, binaryName) => {
    let cls = $rt_createcls();
    cls.$meta.primitive = true;
    cls.$meta.name = name;
    cls.$meta.binaryName = binaryName;
    cls.$meta.enum = false;
    cls.$meta.item = null;
    cls.$meta.simpleName = null;
    cls.$meta.declaringClass = null;
    cls.$meta.enclosingClass = null;
    return cls;
},
$rt_charcls = $rt_createPrimitiveCls("char", "C"),
$rt_intcls = $rt_createPrimitiveCls("int", "I"),
$rt_longcls = $rt_createPrimitiveCls("long", "J"),
$rt_compare = (a, b) => a > b ? 1 : a < b ?  -1 : a === b ? 0 : 1,
$rt_udiv = (a, b) => (a >>> 0) / (b >>> 0) >>> 0,
$rt_umod = (a, b) => (a >>> 0) % (b >>> 0) >>> 0,
$rt_ucmp = (a, b) => {
    a >>>= 0;
    b >>>= 0;
    return a < b ?  -1 : a > b ? 1 : 0;
},
Long_ZERO = BigInt(0),
Long_fromInt = val => BigInt.asIntN(64, BigInt(val | 0)),
Long_lo = val => Number(BigInt.asIntN(32, val)) | 0,
Long_eq = (a, b) => a === b,
Long_ne = (a, b) => a !== b,
Long_lt = (a, b) => a < b,
Long_neg = a => BigInt.asIntN(64,  -a),
Long_ucompare = (a, b) => {
    a = BigInt.asUintN(64, a);
    b = BigInt.asUintN(64, b);
    return a < b ?  -1 : a > b ? 1 : 0;
},
Long_mul = (a, b) => BigInt.asIntN(64, a * b),
Long_udiv = (a, b) => BigInt.asIntN(64, BigInt.asUintN(64, a) / BigInt.asUintN(64, b)),
Long_urem = (a, b) => BigInt.asIntN(64, BigInt.asUintN(64, a) % BigInt.asUintN(64, b)),
$rt_createArray = (cls, sz) => {
    let data = new Array(sz);
    data.fill(null);
    return new ($rt_arraycls(cls))(data);
},
$rt_createCharArray = sz => new $rt_charArrayCls(new Uint16Array(sz)),
$rt_arraycls = cls => {
    let result = cls.$array;
    if (result === null) {
        function JavaArray(data) {
            ($rt_objcls()).call(this);
            this.data = data;
        }
        JavaArray.prototype = Object.create(($rt_objcls()).prototype);
        JavaArray.prototype.type = cls;
        JavaArray.prototype.constructor = JavaArray;
        JavaArray.prototype.toString = function() {
            let str = "[";
            for (let i = 0;i < this.data.length;++i) {
                if (i > 0) {
                    str += ", ";
                }
                str += this.data[i].toString();
            }
            str += "]";
            return str;
        };
        JavaArray.prototype.$clone0 = function() {
            let dataCopy;
            if ('slice' in this.data) {
                dataCopy = this.data.slice();
            } else {
                dataCopy = new this.data.constructor(this.data.length);
                for (let i = 0;i < dataCopy.length;++i) {
                    dataCopy[i] = this.data[i];
                }
            }
            return new ($rt_arraycls(this.type))(dataCopy);
        };
        let name = "[" + cls.$meta.binaryName;
        JavaArray.$meta = { item : cls, supertypes : [$rt_objcls()], primitive : false, superclass : $rt_objcls(), name : name, binaryName : name, enum : false, simpleName : null, declaringClass : null, enclosingClass : null };
        JavaArray.classObject = null;
        JavaArray.$array = null;
        result = JavaArray;
        cls.$array = JavaArray;
    }
    return result;
},
$rt_stringPool_instance,
$rt_stringPool = strings => {
    $rt_stringClassInit();
    $rt_stringPool_instance = new Array(strings.length);
    for (let i = 0;i < strings.length;++i) {
        $rt_stringPool_instance[i] = $rt_intern($rt_str(strings[i]));
    }
},
$rt_s = index => $rt_stringPool_instance[index],
$rt_charArrayToString = (array, offset, count) => {
    let result = "";
    let limit = offset + count;
    for (let i = offset;i < limit;i = i + 1024 | 0) {
        let next = Math.min(limit, i + 1024 | 0);
        result += String.fromCharCode.apply(null, array.subarray(i, next));
    }
    return result;
},
$rt_str = str => str === null ? null : jl_String__init_(str),
$rt_ustr = str => str === null ? null : str.$nativeString,
$rt_stringClassInit = () => (() => {})(),
$rt_intern;
{
    $rt_intern = str => str;
}
let $rt_isInstance = (obj, cls) => obj instanceof $rt_objcls() && !!obj.constructor.$meta && $rt_isAssignable(obj.constructor, cls),
$rt_isAssignable = (from, to) => {
    if (from === to) {
        return true;
    }
    let map = from.$meta.assignableCache;
    if (typeof map === 'undefined') {
        map = new Map();
        from.$meta.assignableCache = map;
    }
    let cachedResult = map.get(to);
    if (typeof cachedResult !== 'undefined') {
        return cachedResult;
    }
    if (to.$meta.item !== null) {
        let result = from.$meta.item !== null && $rt_isAssignable(from.$meta.item, to.$meta.item);
        map.set(to, result);
        return result;
    }
    let supertypes = from.$meta.supertypes;
    for (let i = 0;i < supertypes.length;i = i + 1 | 0) {
        if ($rt_isAssignable(supertypes[i], to)) {
            map.set(to, true);
            return true;
        }
    }
    map.set(to, false);
    return false;
},
$rt_throw = ex => {
    throw $rt_exception(ex);
},
$rt_javaExceptionProp = Symbol("javaException"),
$rt_exception = ex => {
    if (!ex.$jsException) {
        $rt_fillNativeException(ex);
    }
    return ex.$jsException;
},
$rt_fillNativeException = ex => {
    let javaCause = $rt_throwableCause(ex);
    let jsCause = javaCause !== null ? javaCause.$jsException : void 0;
    let cause = typeof jsCause === "object" ? { cause : jsCause } : void 0;
    let err = new JavaError("Java exception thrown", cause);
    if (typeof Error.captureStackTrace === "function") {
        Error.captureStackTrace(err);
    }
    err[$rt_javaExceptionProp] = ex;
    ex.$jsException = err;
    $rt_fillStack(err, ex);
},
$rt_fillStack = (err, ex) => {
    if (typeof $rt_decodeStack === "function" && err.stack) {
        let stack = $rt_decodeStack(err.stack);
        let javaStack = $rt_createArray($rt_stecls(), stack.length);
        let elem;
        let noStack = false;
        for (let i = 0;i < stack.length;++i) {
            let element = stack[i];
            elem = $rt_createStackElement($rt_str(element.className), $rt_str(element.methodName), $rt_str(element.fileName), element.lineNumber);
            if (elem == null) {
                noStack = true;
                break;
            }
            javaStack.data[i] = elem;
        }
        if (!noStack) {
            $rt_setStack(ex, javaStack);
        }
    }
},
JavaError;
if (typeof Reflect === 'object') {
    let defaultMessage = Symbol("defaultMessage");
    JavaError = function JavaError(message, cause) {
        let self = Reflect.construct(Error, [void 0, cause], JavaError);
        Object.setPrototypeOf(self, JavaError.prototype);
        self[defaultMessage] = message;
        return self;
    }
    ;
    JavaError.prototype = Object.create(Error.prototype, { constructor : { configurable : true, writable : true, value : JavaError }, message : { get() {
        try {
            let javaException = this[$rt_javaExceptionProp];
            if (typeof javaException === 'object') {
                let javaMessage = $rt_throwableMessage(javaException);
                if (typeof javaMessage === "object") {
                    return javaMessage !== null ? javaMessage.toString() : null;
                }
            }
            return this[defaultMessage];
        } catch (e){
            return "Exception occurred trying to extract Java exception message: " + e;
        }
    } } });
} else {
    JavaError = Error;
}
let $rt_javaException = e => e instanceof Error && typeof e[$rt_javaExceptionProp] === 'object' ? e[$rt_javaExceptionProp] : null,
$rt_wrapException = err => {
    let ex = err[$rt_javaExceptionProp];
    if (!ex) {
        ex = $rt_createException($rt_str("(JavaScript) " + err.toString()));
        err[$rt_javaExceptionProp] = ex;
        ex.$jsException = err;
        $rt_fillStack(err, ex);
    }
    return ex;
},
$rt_createException = message => jl_RuntimeException__init_0(message),
$rt_throwableMessage = t => jl_Throwable_getMessage(t),
$rt_throwableCause = t => jl_Throwable_getCause(t),
$rt_stecls = () => $rt_objcls(),
$rt_createStackElement = (className, methodName, fileName, lineNumber) => {
    {
        return null;
    }
},
$rt_setStack = (e, stack) => {
},
$rt_createOutputFunction = outputFunction => {
    let buffer = "";
    return msg => {
        let index = 0;
        while (true) {
            let next = msg.indexOf('\n', index);
            if (next < 0) {
                break;
            }
            outputFunction(buffer + msg.substring(index, next));
            buffer = "";
            index = next + 1;
        }
        buffer += msg.substring(index);
    };
},
$rt_putStdout = typeof $rt_putStdoutCustom === "function" ? $rt_putStdoutCustom : typeof console === "object" ? $rt_createOutputFunction(msg => console.info(msg)) : () => {
},
$rt_putStderr = typeof $rt_putStderrCustom === "function" ? $rt_putStderrCustom : typeof console === "object" ? $rt_createOutputFunction(msg => console.error(msg)) : () => {
},
$rt_packageData = null,
$rt_packages = data => {
    let i = 0;
    let packages = new Array(data.length);
    for (let j = 0;j < data.length;++j) {
        let prefixIndex = data[i++];
        let prefix = prefixIndex >= 0 ? packages[prefixIndex] : "";
        packages[j] = prefix + data[i++] + ".";
    }
    $rt_packageData = packages;
},
$rt_metadata = data => {
    let packages = $rt_packageData;
    let i = 0;
    while (i < data.length) {
        let cls = data[i++];
        cls.$meta = {  };
        let m = cls.$meta;
        let className = data[i++];
        m.name = className !== 0 ? className : null;
        if (m.name !== null) {
            let packageIndex = data[i++];
            if (packageIndex >= 0) {
                m.name = packages[packageIndex] + m.name;
            }
        }
        m.binaryName = "L" + m.name + ";";
        let superclass = data[i++];
        m.superclass = superclass !== 0 ? superclass : null;
        m.supertypes = data[i++];
        if (m.superclass) {
            m.supertypes.push(m.superclass);
            cls.prototype = Object.create(m.superclass.prototype);
        } else {
            cls.prototype = {  };
        }
        let flags = data[i++];
        m.enum = (flags & 8) !== 0;
        m.flags = flags;
        m.primitive = false;
        m.item = null;
        cls.prototype.constructor = cls;
        cls.classObject = null;
        m.accessLevel = data[i++];
        let innerClassInfo = data[i++];
        if (innerClassInfo === 0) {
            m.simpleName = null;
            m.declaringClass = null;
            m.enclosingClass = null;
        } else {
            let enclosingClass = innerClassInfo[0];
            m.enclosingClass = enclosingClass !== 0 ? enclosingClass : null;
            let declaringClass = innerClassInfo[1];
            m.declaringClass = declaringClass !== 0 ? declaringClass : null;
            let simpleName = innerClassInfo[2];
            m.simpleName = simpleName !== 0 ? simpleName : null;
        }
        let clinit = data[i++];
        cls.$clinit = clinit !== 0 ? clinit : function() {
        };
        let virtualMethods = data[i++];
        if (virtualMethods !== 0) {
            for (let j = 0;j < virtualMethods.length;j += 2) {
                let name = virtualMethods[j];
                let func = virtualMethods[j + 1];
                if (typeof name === 'string') {
                    name = [name];
                }
                for (let k = 0;k < name.length;++k) {
                    cls.prototype[name[k]] = func;
                }
            }
        }
        cls.$array = null;
    }
},
$rt_startThread = (runner, callback) => {
    let result;
    try {
        result = runner();
    } catch (e){
        result = e;
    }
    if (typeof callback !== 'undefined') {
        callback(result);
    } else if (result instanceof Error) {
        throw result;
    }
};
function jl_Object() {
    this.$id$ = 0;
}
let jl_Object_getClass = $this => {
    return jl_Class_getClass($this.constructor);
},
jl_Object_toString = $this => {
    let var$1, var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10;
    var$1 = jl_Class_getName(jl_Object_getClass($this));
    var$2 = $this;
    if (!var$2.$id$)
        var$2.$id$ = $rt_nextId();
    var$3 = $this.$id$;
    if (!var$3)
        var$4 = $rt_s(0);
    else {
        if (!var$3)
            var$5 = 32;
        else {
            var$6 = 0;
            var$5 = var$3 >>> 16 | 0;
            if (var$5)
                var$6 = 16;
            else
                var$5 = var$3;
            var$7 = var$5 >>> 8 | 0;
            if (!var$7)
                var$7 = var$5;
            else
                var$6 = var$6 | 8;
            var$5 = var$7 >>> 4 | 0;
            if (!var$5)
                var$5 = var$7;
            else
                var$6 = var$6 | 4;
            var$7 = var$5 >>> 2 | 0;
            if (!var$7)
                var$7 = var$5;
            else
                var$6 = var$6 | 2;
            if (var$7 >>> 1 | 0)
                var$6 = var$6 | 1;
            var$5 = (32 - var$6 | 0) - 1 | 0;
        }
        var$5 = (((32 - var$5 | 0) + 4 | 0) - 1 | 0) / 4 | 0;
        var$8 = $rt_createCharArray(var$5);
        var$9 = var$8.data;
        var$6 = (var$5 - 1 | 0) * 4 | 0;
        var$7 = 0;
        while (var$6 >= 0) {
            var$10 = var$7 + 1 | 0;
            var$9[var$7] = jl_Character_forDigit((var$3 >>> var$6 | 0) & 15, 16);
            var$6 = var$6 - 4 | 0;
            var$7 = var$10;
        }
        var$4 = jl_String__init_0(var$8);
    }
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append(var$2, var$1), 64), var$4);
    return jl_StringBuilder_toString(var$2);
},
jl_Object_clone = $this => {
    let $result, var$2, var$3;
    if (!$rt_isInstance($this, jl_Cloneable) && $this.constructor.$meta.item === null) {
        $result = new jl_CloneNotSupportedException;
        jl_Exception__init_($result);
        $rt_throw($result);
    }
    $result = otp_Platform_clone($this);
    var$2 = $result;
    var$3 = $rt_nextId();
    var$2.$id$ = var$3;
    return $result;
},
jlr_AnnotatedElement = $rt_classWithoutFields(0),
jlr_Type = $rt_classWithoutFields(0);
function jl_Class() {
    let a = this; jl_Object.call(a);
    a.$name = null;
    a.$simpleName = null;
    a.$platformClass = null;
}
let jl_Class_getClass = $cls => {
    let $result;
    if ($cls === null)
        return null;
    $result = $cls.classObject;
    if ($result === null) {
        $result = new jl_Class;
        $result.$platformClass = $cls;
        $cls.classObject = $result;
    }
    return $result;
},
jl_Class_getName = $this => {
    if ($this.$name === null)
        $this.$name = otp_Platform_getName($this.$platformClass);
    return $this.$name;
},
jl_Class_getSimpleName = $this => {
    let $simpleName, var$2, $lastDollar, $lastDot;
    $simpleName = $this.$simpleName;
    if ($simpleName === null) {
        if (otp_Platform_getArrayItem($this.$platformClass) === null ? 0 : 1) {
            $simpleName = jl_Class_getSimpleName(jl_Class_getComponentType($this));
            var$2 = jl_StringBuilder__init_();
            jl_StringBuilder_append(jl_StringBuilder_append(var$2, $simpleName), $rt_s(1));
            $simpleName = jl_StringBuilder_toString(var$2);
        } else {
            $simpleName = $this.$platformClass.$meta.enclosingClass;
            if (($simpleName === null ? null : jl_Class_getClass($simpleName)) !== null) {
                $simpleName = $rt_str($this.$platformClass.$meta.simpleName);
                if ($simpleName === null)
                    $simpleName = $rt_s(2);
            } else {
                $simpleName = otp_Platform_getName($this.$platformClass);
                $lastDollar = jl_String_lastIndexOf($simpleName, 36);
                if ($lastDollar == (-1)) {
                    $lastDot = jl_String_lastIndexOf($simpleName, 46);
                    if ($lastDot != (-1))
                        $simpleName = jl_String_substring($simpleName, $lastDot + 1 | 0);
                } else {
                    $simpleName = jl_String_substring($simpleName, $lastDollar + 1 | 0);
                    if (jl_String_charAt($simpleName, 0) >= 48 && jl_String_charAt($simpleName, 0) <= 57)
                        $simpleName = $rt_s(2);
                }
            }
        }
        $this.$simpleName = $simpleName;
    }
    return $simpleName;
},
jl_Class_getComponentType = $this => {
    return jl_Class_getClass(otp_Platform_getArrayItem($this.$platformClass));
},
otji_JS = $rt_classWithoutFields(),
otji_JS_function = (var$1, var$2) => {
    let name = 'jso$functor$' + var$2;
    let result = var$1[name];
    if (typeof result !== 'function') {
        let fn = function() {
            return var$1[var$2].apply(var$1, arguments);
        };
        result = () => fn;
        var$1[name] = result;
    }
    return result();
},
otp_Platform = $rt_classWithoutFields(),
otp_Platform_clone = var$1 => {
    let copy = new var$1.constructor();
    for (let field in var$1) {
        if (var$1.hasOwnProperty(field)) {
            copy[field] = var$1[field];
        }
    }
    return copy;
},
otp_Platform_isAssignable = (var$1, var$2) => {
    let $supertypes, $i;
    if (var$1 === var$2)
        return 1;
    $supertypes = var$1.$meta.supertypes;
    $i = 0;
    while ($i < $supertypes.length) {
        if (otp_Platform_isAssignable($supertypes[$i], var$2))
            return 1;
        $i = $i + 1 | 0;
    }
    return 0;
},
otp_Platform_getArrayItem = $cls => {
    return $cls.$meta.item;
},
otp_Platform_getName = $cls => {
    return $rt_str($cls.$meta.name);
};
function jl_Throwable() {
    let a = this; jl_Object.call(a);
    a.$message = null;
    a.$cause = null;
    a.$suppressionEnabled = 0;
    a.$writableStackTrace = 0;
    a.$stackTrace = null;
}
let jl_Throwable_fillInStackTrace = $this => {
    return $this;
},
jl_Throwable_initNativeException = $this => {
    $rt_fillNativeException($this);
},
jl_Throwable_getMessage = $this => {
    return $this.$message;
},
jl_Throwable_getLocalizedMessage = $this => {
    return $this.$getMessage();
},
jl_Throwable_getCause = $this => {
    let var$1;
    var$1 = $this.$cause;
    if (var$1 === $this)
        var$1 = null;
    return var$1;
},
jl_Throwable_printStackTrace = $this => {
    jl_Throwable_printStackTrace0($this, jl_System_err());
},
jl_Throwable_printStackTrace0 = ($this, $stream) => {
    let var$2, var$3, $message, var$5, var$6, var$7, $element, var$9;
    var$2 = jl_Class_getName(jl_Object_getClass($this));
    var$3 = $stream;
    otcic_JSStderrPrintStream_print(var$3, var$2);
    $message = $this.$getMessage();
    if ($message !== null) {
        var$2 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$2, $rt_s(3)), $message);
        otcic_JSStderrPrintStream_print(var$3, jl_StringBuilder_toString(var$2));
    }
    a: {
        var$2 = $stream;
        otcic_JSStderrPrintStream_print(var$2, $rt_s(4));
        var$5 = $this.$stackTrace;
        if (var$5 !== null) {
            var$5 = var$5.data;
            var$6 = var$5.length;
            var$7 = 0;
            while (true) {
                if (var$7 >= var$6)
                    break a;
                $element = var$5[var$7];
                otcic_JSStderrPrintStream_print(var$3, $rt_s(5));
                var$9 = $rt_s(6);
                if ($element !== null)
                    var$9 = $element.$toString();
                otcic_JsConsolePrintStream_println(var$2, var$9);
                var$7 = var$7 + 1 | 0;
            }
        }
    }
    var$2 = $this.$cause;
    if (var$2 !== null && var$2 !== $this) {
        otcic_JSStderrPrintStream_print(var$3, $rt_s(7));
        $this.$cause.$printStackTrace($stream);
    }
},
jl_Exception = $rt_classWithoutFields(jl_Throwable),
jl_Exception__init_ = $this => {
    jl_Throwable_initNativeException($this);
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
},
jl_Exception__init_1 = () => {
    let var_0 = new jl_Exception();
    jl_Exception__init_(var_0);
    return var_0;
},
jl_Exception__init_0 = ($this, $message) => {
    jl_Throwable_initNativeException($this);
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
    $this.$message = $message;
},
jl_Exception__init_2 = var_0 => {
    let var_1 = new jl_Exception();
    jl_Exception__init_0(var_1, var_0);
    return var_1;
},
jl_RuntimeException = $rt_classWithoutFields(jl_Exception),
jl_RuntimeException__init_ = ($this, $message) => {
    jl_Exception__init_0($this, $message);
},
jl_RuntimeException__init_0 = var_0 => {
    let var_1 = new jl_RuntimeException();
    jl_RuntimeException__init_(var_1, var_0);
    return var_1;
},
jl_ClassCastException = $rt_classWithoutFields(jl_RuntimeException),
ji_Serializable = $rt_classWithoutFields(0),
jl_Comparable = $rt_classWithoutFields(0),
jl_CharSequence = $rt_classWithoutFields(0);
function jl_String() {
    jl_Object.call(this);
    this.$hashCode0 = 0;
}
let jl_String_EMPTY_CHARS = null,
jl_String_EMPTY = null,
jl_String_CASE_INSENSITIVE_ORDER = null,
jl_String__init_1 = ($this, $characters) => {
    $this.$nativeString = $rt_charArrayToString($characters.data, 0, $characters.data.length);
},
jl_String__init_0 = var_0 => {
    let var_1 = new jl_String();
    jl_String__init_1(var_1, var_0);
    return var_1;
},
jl_String__init_2 = (var$0, var$1) => {
    var$0.$nativeString = var$1;
},
jl_String__init_ = var_0 => {
    let var_1 = new jl_String();
    jl_String__init_2(var_1, var_0);
    return var_1;
},
jl_String_charAt = (var$0, var$1) => {
    let var$2;
    if (var$1 >= 0 && var$1 < var$0.$nativeString.length)
        return var$0.$nativeString.charCodeAt(var$1);
    var$2 = new jl_StringIndexOutOfBoundsException;
    jl_Exception__init_(var$2);
    $rt_throw(var$2);
},
jl_String_endsWith = ($this, $suffix) => {
    let $j, $i, var$4, var$5;
    if ($this === $suffix)
        return 1;
    if ($suffix.$nativeString.length > $this.$nativeString.length)
        return 0;
    $j = 0;
    $i = $this.$nativeString.length - $suffix.$nativeString.length | 0;
    while ($i < $this.$nativeString.length) {
        var$4 = jl_String_charAt($this, $i);
        var$5 = $j + 1 | 0;
        if (var$4 != jl_String_charAt($suffix, $j))
            return 0;
        $i = $i + 1 | 0;
        $j = var$5;
    }
    return 1;
},
jl_String_lastIndexOf = ($this, $ch) => {
    let var$2, var$3, var$4;
    a: {
        var$2 = jl_Math_min($this.$nativeString.length - 1 | 0, $this.$nativeString.length - 1 | 0);
        if ($ch < 65536) {
            var$3 = $ch & 65535;
            while (true) {
                if (var$2 < 0) {
                    var$2 = (-1);
                    break a;
                }
                if ($this.$nativeString.charCodeAt(var$2) == var$3)
                    break;
                var$2 = var$2 + (-1) | 0;
            }
        } else {
            var$3 = (55296 | ($ch - 65536 | 0) >> 10 & 1023) & 65535;
            $ch = (56320 | $ch & 1023) & 65535;
            while (var$2 >= 1) {
                if ($this.$nativeString.charCodeAt(var$2) == $ch) {
                    var$4 = var$2 - 1 | 0;
                    if ($this.$nativeString.charCodeAt(var$4) == var$3) {
                        var$2 = var$4;
                        break a;
                    }
                }
                var$2 = var$2 + (-1) | 0;
            }
            var$2 = (-1);
        }
    }
    return var$2;
},
jl_String_substring = ($this, $beginIndex) => {
    let var$2, var$3, var$4, var$5;
    var$2 = $this.$nativeString.length;
    var$3 = $this.$nativeString.length;
    var$4 = $rt_compare($beginIndex, var$2);
    if (!var$4)
        $this = jl_String_EMPTY;
    else if (!(!$beginIndex && var$2 == var$3)) {
        if ($beginIndex >= 0 && var$4 <= 0 && var$2 <= var$3)
            $this = jl_String__init_($this.$nativeString.substring($beginIndex, var$2));
        else {
            var$5 = new jl_StringIndexOutOfBoundsException;
            jl_Exception__init_(var$5);
            $rt_throw(var$5);
        }
    }
    return $this;
},
jl_String_valueOf = $obj => {
    return $obj === null ? $rt_s(6) : jl_Enum_toString($obj);
},
jl_String_equals = ($this, $other) => {
    let $str;
    if ($this === $other)
        return 1;
    if (!($other instanceof jl_String))
        return 0;
    $str = $other;
    return $this.$nativeString !== $str.$nativeString ? 0 : 1;
},
jl_String_hashCode = $this => {
    let $i;
    a: {
        if (!$this.$hashCode0) {
            $i = 0;
            while (true) {
                if ($i >= $this.$nativeString.length)
                    break a;
                $this.$hashCode0 = (31 * $this.$hashCode0 | 0) + $this.$nativeString.charCodeAt($i) | 0;
                $i = $i + 1 | 0;
            }
        }
    }
    return $this.$hashCode0;
},
jl_String__clinit_ = () => {
    let var$1;
    jl_String_EMPTY_CHARS = $rt_createCharArray(0);
    var$1 = new jl_String;
    var$1.$nativeString = "";
    jl_String_EMPTY = var$1;
    jl_String_CASE_INSENSITIVE_ORDER = new jl_String$_clinit_$lambda$_115_0;
},
jl_Number = $rt_classWithoutFields();
function jl_Integer() {
    jl_Number.call(this);
    this.$value3 = 0;
}
let jl_Integer_TYPE = null,
jl_Integer_integerCache = null,
jl_Integer__init_0 = ($this, $value) => {
    $this.$value3 = $value;
},
jl_Integer__init_ = var_0 => {
    let var_1 = new jl_Integer();
    jl_Integer__init_0(var_1, var_0);
    return var_1;
},
jl_Integer_valueOf = $i => {
    let var$2, var$3;
    if ($i >= (-128) && $i <= 127) {
        a: {
            if (jl_Integer_integerCache === null) {
                jl_Integer_integerCache = $rt_createArray(jl_Integer, 256);
                var$2 = 0;
                while (true) {
                    var$3 = jl_Integer_integerCache.data;
                    if (var$2 >= var$3.length)
                        break a;
                    var$3[var$2] = jl_Integer__init_(var$2 - 128 | 0);
                    var$2 = var$2 + 1 | 0;
                }
            }
        }
        return jl_Integer_integerCache.data[$i + 128 | 0];
    }
    return jl_Integer__init_($i);
},
jl_Integer_hashCode = $this => {
    return $this.$value3;
},
jl_Integer_equals = ($this, $other) => {
    if ($this === $other)
        return 1;
    return $other instanceof jl_Integer && $other.$value3 == $this.$value3 ? 1 : 0;
},
jl_Integer__clinit_ = () => {
    jl_Integer_TYPE = $rt_cls($rt_intcls);
};
function jl_AbstractStringBuilder() {
    let a = this; jl_Object.call(a);
    a.$buffer = null;
    a.$length = 0;
}
let jl_AbstractStringBuilder_insertSpace = ($this, $start, $end) => {
    let var$3, $sz, $i, var$6;
    var$3 = $this.$length;
    $sz = var$3 - $start | 0;
    var$3 = (var$3 + $end | 0) - $start | 0;
    jl_StringBuilder_ensureCapacity($this, var$3);
    $i = $sz - 1 | 0;
    while ($i >= 0) {
        var$6 = $this.$buffer.data;
        var$6[$end + $i | 0] = var$6[$start + $i | 0];
        $i = $i + (-1) | 0;
    }
    $this.$length = $this.$length + ($end - $start | 0) | 0;
},
jl_Appendable = $rt_classWithoutFields(0),
jl_StringBuilder = $rt_classWithoutFields(jl_AbstractStringBuilder),
jl_StringBuilder__init_0 = $this => {
    $this.$buffer = $rt_createCharArray(16);
},
jl_StringBuilder__init_ = () => {
    let var_0 = new jl_StringBuilder();
    jl_StringBuilder__init_0(var_0);
    return var_0;
},
jl_StringBuilder_append = ($this, $obj) => {
    let var$2, var$3;
    var$2 = $this.$length;
    var$3 = $this;
    $obj = $obj === null ? $rt_s(6) : $obj;
    jl_StringBuilder_insert(var$3, var$2, $obj);
    return $this;
},
jl_StringBuilder_append0 = ($this, $value) => {
    let var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9;
    var$2 = $this.$length;
    var$3 = 1;
    if ($value < 0) {
        var$3 = 0;
        $value =  -$value | 0;
    }
    a: {
        if ($rt_ucmp($value, 10) < 0) {
            if (var$3)
                jl_AbstractStringBuilder_insertSpace($this, var$2, var$2 + 1 | 0);
            else {
                jl_AbstractStringBuilder_insertSpace($this, var$2, var$2 + 2 | 0);
                var$4 = $this.$buffer.data;
                var$5 = var$2 + 1 | 0;
                var$4[var$2] = 45;
                var$2 = var$5;
            }
            $this.$buffer.data[var$2] = jl_Character_forDigit($value, 10);
        } else {
            var$6 = 1;
            var$7 = 1;
            var$5 = $rt_udiv((-1), 10);
            b: {
                while (true) {
                    var$8 = var$6 * 10 | 0;
                    if ($rt_ucmp(var$8, $value) > 0) {
                        var$8 = var$6;
                        break b;
                    }
                    var$7 = var$7 + 1 | 0;
                    if ($rt_ucmp(var$8, var$5) > 0)
                        break;
                    var$6 = var$8;
                }
            }
            if (!var$3)
                var$7 = var$7 + 1 | 0;
            jl_AbstractStringBuilder_insertSpace($this, var$2, var$2 + var$7 | 0);
            if (var$3)
                var$5 = var$2;
            else {
                var$4 = $this.$buffer.data;
                var$5 = var$2 + 1 | 0;
                var$4[var$2] = 45;
            }
            while (true) {
                if (!var$8)
                    break a;
                var$4 = $this.$buffer.data;
                var$9 = var$5 + 1 | 0;
                var$4[var$5] = jl_Character_forDigit($rt_udiv($value, var$8), 10);
                $value = $rt_umod($value, var$8);
                var$8 = $rt_udiv(var$8, 10);
                var$5 = var$9;
            }
        }
    }
    return $this;
},
jl_StringBuilder_append1 = ($this, $c) => {
    let var$2, var$3;
    var$2 = $this.$length;
    var$3 = $this;
    jl_AbstractStringBuilder_insertSpace(var$3, var$2, var$2 + 1 | 0);
    var$3.$buffer.data[var$2] = $c;
    return $this;
},
jl_StringBuilder_append2 = ($this, $b) => {
    let var$2, var$3, var$4;
    var$2 = $this.$length;
    var$3 = $this;
    var$4 = !$b ? $rt_s(8) : $rt_s(9);
    jl_StringBuilder_insert(var$3, var$2, var$4);
    return $this;
},
jl_StringBuilder_toString = $this => {
    let var$1, var$2, var$3, var$4, var$5;
    var$1 = new jl_String;
    var$2 = $this.$buffer;
    var$3 = var$2.data;
    var$4 = $this.$length;
    var$5 = var$3.length;
    if (var$4 >= 0 && var$4 <= (var$5 - 0 | 0)) {
        var$1.$nativeString = $rt_charArrayToString(var$2.data, 0, var$4);
        return var$1;
    }
    var$1 = new jl_IndexOutOfBoundsException;
    jl_Exception__init_(var$1);
    $rt_throw(var$1);
},
jl_StringBuilder_ensureCapacity = ($this, var$1) => {
    let var$2, var$3, var$4, var$5;
    var$2 = $this.$buffer.data.length;
    if (var$2 < var$1) {
        var$1 = var$2 >= 1073741823 ? 2147483647 : jl_Math_max(var$1, jl_Math_max(var$2 * 2 | 0, 5));
        var$3 = $this.$buffer.data;
        var$4 = $rt_createCharArray(var$1);
        var$5 = var$4.data;
        var$1 = jl_Math_min(var$1, var$3.length);
        var$2 = 0;
        while (var$2 < var$1) {
            var$5[var$2] = var$3[var$2];
            var$2 = var$2 + 1 | 0;
        }
        $this.$buffer = var$4;
    }
},
jl_StringBuilder_insert = ($this, var$1, var$2) => {
    let var$3, var$4, var$5, var$6;
    if (var$1 >= 0 && var$1 <= $this.$length) {
        a: {
            if (var$2 === null)
                var$2 = $rt_s(6);
            else if (var$2.$nativeString.length ? 0 : 1)
                break a;
            var$3 = $this.$length + var$2.$nativeString.length | 0;
            jl_StringBuilder_ensureCapacity($this, var$3);
            var$4 = $this.$length - 1 | 0;
            while (var$4 >= var$1) {
                $this.$buffer.data[var$4 + var$2.$nativeString.length | 0] = $this.$buffer.data[var$4];
                var$4 = var$4 + (-1) | 0;
            }
            $this.$length = $this.$length + var$2.$nativeString.length | 0;
            var$3 = 0;
            while (var$3 < var$2.$nativeString.length) {
                var$5 = $this.$buffer.data;
                var$6 = var$1 + 1 | 0;
                var$5[var$1] = jl_String_charAt(var$2, var$3);
                var$3 = var$3 + 1 | 0;
                var$1 = var$6;
            }
        }
        return $this;
    }
    var$2 = new jl_StringIndexOutOfBoundsException;
    jl_Exception__init_(var$2);
    $rt_throw(var$2);
},
otcir_FieldInfo = $rt_classWithoutFields(),
otcir_MethodInfo = $rt_classWithoutFields(),
otcir_ClassList = $rt_classWithoutFields(),
cgxwda_MainTeaVM = $rt_classWithoutFields(),
cgxwda_MainTeaVM_$callClinit = () => {
    cgxwda_MainTeaVM_$callClinit = $rt_eraseClinit(cgxwda_MainTeaVM);
    cgxwda_MainTeaVM__clinit_();
},
cgxwda_MainTeaVM_main = $args => {
    let var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10;
    cgxwda_MainTeaVM_$callClinit();
    var$2 = new cgxwbt_TeaVMApp;
    var$3 = new cgxwda_WebGPUApp;
    var$3.$r = 0.0;
    var$3.$g = 0.0;
    var$3.$b = 1.0;
    cgxwbt_TeaVMApp_$callClinit();
    var$2.$wGPUInit = 0;
    var$2.$width = 800;
    var$2.$height = 600;
    var$2.$loop = 1;
    var$2.$applicationInterface = var$3;
    otcic_JsConsolePrintStream_println(jl_System_out(), $rt_s(10));
    var$4 = $rt_str(window.location.href);
    var$5 = (cgxjc_JMultiplatform_getInstance()).$map0;
    var$6 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$6, var$4), $rt_s(11));
    var$6 = jl_StringBuilder_toString(var$6);
    ju_HashMap_put(var$5.$map, $rt_s(12), var$6);
    var$6 = window.document;
    var$4 = var$6.createElement("canvas");
    var$4.id = $rt_ustr(cgxwbt_TeaVMApp_canvas);
    var$4.width = var$2.$width;
    var$4.height = var$2.$height;
    var$6.body.appendChild(var$4);
    otcic_JsConsolePrintStream_println(jl_System_out(), $rt_s(13));
    var$3 = new cgxwbt_TeaVMApp$_init_$lambda$_0_0;
    var$3.$_03 = var$2;
    cgxjl_JParserLibraryLoader_$callClinit();
    if (!(ju_HashMap_entryByKey(cgxjl_JParserLibraryLoader_loadedLibraries.$backingMap, $rt_s(14)) === null ? 0 : 1)) {
        var$4 = new cgxjl_JParserLibraryLoader$1;
        var$4.$val$listener = var$3;
        var$7 = ju_HashMap_get((cgxjc_JMultiplatform_getInstance()).$map0.$map, $rt_s(12));
        var$8 = var$7;
        var$9 = $rt_cls(jl_String).$platformClass;
        if (!(var$8 !== null && !(typeof var$8.constructor.$meta === 'undefined' ? 1 : 0) && otp_Platform_isAssignable(var$8.constructor, var$9) ? 1 : 0))
            var$7 = null;
        else if (var$7 !== null && !otp_Platform_isAssignable((jl_Object_getClass(var$7)).$platformClass, $rt_cls(jl_String).$platformClass)) {
            var$2 = new jl_ClassCastException;
            var$3 = jl_Class_getName(jl_Object_getClass(var$7));
            var$6 = jl_Class_getName($rt_cls(jl_String));
            var$4 = jl_StringBuilder__init_();
            jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$4, var$3), $rt_s(15)), var$6);
            jl_Exception__init_0(var$2, jl_StringBuilder_toString(var$4));
            $rt_throw(var$2);
        }
        var$10 = var$7;
        if (var$10 === null) {
            var$4 = jl_StringBuilder__init_();
            jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$4, $rt_s(16)), $rt_s(12)), $rt_s(17));
            var$6 = js_ScriptException__init_0(jl_StringBuilder_toString(var$4));
            cgxwbt_TeaVMApp$_init_$lambda$_0_0_onLoad(var$3, 0, var$6);
        } else if (jl_String_endsWith($rt_s(14), $rt_s(18)))
            cgxjl_JParserLibraryLoader_loadWasm(var$4, $rt_s(14), var$10, $rt_s(2), 0);
        else if (jl_String_endsWith($rt_s(14), $rt_s(19)))
            cgxjl_JParserLibraryLoader_loadJS(var$4, $rt_s(14), var$10);
        else
            cgxjl_JParserLibraryLoader_loadWasm(var$4, $rt_s(14), var$10, $rt_s(18), 1);
    }
    var$3 = new cgxwbc_WGPUApp;
    var$3.$initState = cgxwbc_WGPUApp$InitState_NOT_INITIALIZED;
    var$2.$wgpu = var$3;
    var$3 = new cgxwbt_TeaVMApp$1;
    var$3.$this$0 = var$2;
    requestAnimationFrame(otji_JS_function(otji_JSWrapper_unwrap(var$3), "onAnimationFrame"));
    otcic_JsConsolePrintStream_println(jl_System_out(), $rt_s(20));
},
cgxwda_MainTeaVM__clinit_ = () => {
    jl_String__clinit_();
    jl_Integer__clinit_();
    jl_Character__clinit_();
    cgxwbc_WGPUApp$InitState__clinit_();
    cgxwi_IDLBase__clinit_();
    cgxw_JInstance__clinit_();
    cgxw_JCommandEncoderDescriptor__clinit_();
    cgxw_JRenderPassDescriptor__clinit_();
    cgxw_JRenderPassColorAttachment__clinit_();
    cgxw_JCommandBufferDescriptor__clinit_();
    cgxw_JWebGPU__clinit_();
    cgxw_JSurfaceTexture__clinit_();
    cgxw_JTexture__clinit_();
    cgxw_JTextureView__clinit_();
    cgxw_JCommandEncoder__clinit_();
    cgxw_JRenderPassEncoder__clinit_();
    cgxw_JCommandBuffer__clinit_();
    cgxw_JSurfaceCapabilities__clinit_();
    cgxw_JTextureViewDescriptor__clinit_();
    cgxw_JDevice__clinit_();
    cgxw_JColor__clinit_();
    cgxw_JQueue__clinit_();
    cgxw_JSurface__clinit_();
    cgxw_JRequestAdapterOptions__clinit_();
    cgxw_JSurfaceConfiguration__clinit_();
    cgxw_JRenderPipeline__clinit_();
    cgxw_JAdapter__clinit_();
    cgxw_JAdapterInfo__clinit_();
    cgxw_JDeviceDescriptor__clinit_();
    cgxw_JVectorRequiredFeatures__clinit_();
    cgxw_JQueueDescriptor__clinit_();
    jl_Long__clinit_();
    cgxw_JSupportedFeatures__clinit_();
    cgxw_JLimits__clinit_();
},
otci_IntegerUtil = $rt_classWithoutFields();
function cgxwbt_TeaVMApp() {
    let a = this; jl_Object.call(a);
    a.$wgpu = null;
    a.$wGPUInit = 0;
    a.$width = 0;
    a.$height = 0;
    a.$applicationInterface = null;
    a.$loop = 0;
}
let cgxwbt_TeaVMApp_canvas = null,
cgxwbt_TeaVMApp_canvasWGPU = null,
cgxwbt_TeaVMApp_$callClinit = () => {
    cgxwbt_TeaVMApp_$callClinit = $rt_eraseClinit(cgxwbt_TeaVMApp);
    cgxwbt_TeaVMApp__clinit_();
},
cgxwbt_TeaVMApp_tick = $this => {
    let var$1, var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9;
    var$1 = $this.$wGPUInit;
    if (var$1 == 3) {
        var$2 = $this.$applicationInterface;
        var$3 = $this.$wgpu;
        var$2 = var$2;
        var$4 = var$2.$surfaceTexture;
        var$5 = var$2.$texture;
        var$6 = var$2.$textureView;
        cgxw_JSurface_internal_native_GetCurrentTexture$js_body$_14(Long_lo(var$3.$surface.$nativeData.$cPointer), Long_lo((var$4 === null ? Long_ZERO : var$4.$nativeData.$cPointer)));
        cgxw_JSurfaceTexture_internal_native_GetTexture$js_body$_10(Long_lo(var$4.$nativeData.$cPointer), Long_lo((var$5 === null ? Long_ZERO : var$5.$nativeData.$cPointer)));
        var$7 = cgxw_JTexture_internal_native_GetFormat$js_body$_12(Long_lo(var$5.$nativeData.$cPointer));
        cgxw_WGPUTextureFormat_$callClinit();
        var$8 = cgxw_WGPUTextureFormat_MAP;
        var$4 = jl_Integer_valueOf(var$7);
        var$9 = ju_HashMap_get(var$8, var$4);
        var$8 = new cgxw_JTextureViewDescriptor;
        cgxwi_IDLBase__init_(var$8);
        var$7 = cgxw_JTextureViewDescriptor_internal_native_create$js_body$_1();
        cgxwi_IDLNativeData_reset(var$8.$nativeData, Long_fromInt(var$7), 1);
        cgxw_JTextureViewDescriptor_internal_native_SetLabel$js_body$_10(Long_lo(var$8.$nativeData.$cPointer), "Surface texture view");
        cgxw_JTextureViewDescriptor_internal_native_SetFormat$js_body$_12(Long_lo(var$8.$nativeData.$cPointer), Long_lo(Long_fromInt(var$9 === null ? 0 : var$9.$value)));
        cgxw_WGPUTextureViewDimension_$callClinit();
        var$4 = cgxw_WGPUTextureViewDimension__2D;
        cgxw_JTextureViewDescriptor_internal_native_SetDimension$js_body$_14(Long_lo(var$8.$nativeData.$cPointer), Long_lo(Long_fromInt(var$4 === null ? 0 : var$4.$value9)));
        cgxw_JTextureViewDescriptor_internal_native_SetBaseMipLevel$js_body$_16(Long_lo(var$8.$nativeData.$cPointer), 0);
        cgxw_JTextureViewDescriptor_internal_native_SetMipLevelCount$js_body$_18(Long_lo(var$8.$nativeData.$cPointer), 1);
        cgxw_JTextureViewDescriptor_internal_native_SetBaseArrayLayer$js_body$_20(Long_lo(var$8.$nativeData.$cPointer), 0);
        cgxw_JTextureViewDescriptor_internal_native_SetArrayLayerCount$js_body$_22(Long_lo(var$8.$nativeData.$cPointer), 1);
        cgxw_WGPUTextureAspect_$callClinit();
        var$4 = cgxw_WGPUTextureAspect_All;
        cgxw_JTextureViewDescriptor_internal_native_SetAspect$js_body$_24(Long_lo(var$8.$nativeData.$cPointer), Long_lo(Long_fromInt(var$4 === null ? 0 : var$4.$value10)));
        cgxw_JTexture_CreateView(var$5, var$8, var$6);
        var$4 = new cgxw_JCommandEncoderDescriptor;
        cgxwi_IDLBase__init_(var$4);
        var$7 = cgxw_JCommandEncoderDescriptor_internal_native_create$js_body$_1();
        cgxwi_IDLNativeData_reset(var$4.$nativeData, Long_fromInt(var$7), 1);
        cgxw_JCommandEncoderDescriptor_SetLabel(var$4, $rt_s(21));
        cgxw_JDevice_CreateCommandEncoder(var$3.$device, var$4, var$2.$encoder);
        var$8 = cgxw_JRenderPassDescriptor__init_0();
        var$4 = cgxw_JRenderPassColorAttachment__init_();
        cgxw_JRenderPassColorAttachment_SetView(var$4, var$2.$textureView);
        cgxw_JRenderPassColorAttachment_SetResolveTarget(var$4, null);
        cgxw_WGPULoadOp_$callClinit();
        cgxw_JRenderPassColorAttachment_SetLoadOp(var$4, cgxw_WGPULoadOp_Clear);
        cgxw_WGPUStoreOp_$callClinit();
        cgxw_JRenderPassColorAttachment_SetStoreOp(var$4, cgxw_WGPUStoreOp_Store);
        cgxw_JColor_SetColor(cgxw_JRenderPassColorAttachment_GetClearValue(var$4), var$2.$r, var$2.$g, var$2.$b, 1.0);
        cgxw_JRenderPassDescriptor_SetColorAttachmentCount(var$8, 1);
        cgxw_JRenderPassDescriptor_SetColorAttachments(var$8, var$4);
        cgxw_JRenderPassDescriptor_SetDepthStencilAttachment(var$8, null);
        cgxw_JRenderPassDescriptor_SetTimestampWrites(var$8, null);
        cgxw_JCommandEncoder_BeginRenderPass(var$2.$encoder, var$8, var$2.$renderPass);
        cgxw_JRenderPassEncoder_SetPipeline(var$2.$renderPass, var$3.$renderPipeline);
        cgxw_JRenderPassEncoder_Draw(var$2.$renderPass, 3, 1, 0, 0);
        cgxw_JRenderPassEncoder_End(var$2.$renderPass);
        cgxw_JRenderPassEncoder_Release(var$2.$renderPass);
        var$4 = cgxw_JCommandBufferDescriptor__init_();
        cgxw_JCommandBufferDescriptor_SetNextInChain(var$4, null);
        cgxw_JCommandBufferDescriptor_SetLabel(var$4, $rt_s(22));
        cgxw_JCommandEncoder_Finish(var$2.$encoder, var$4, var$2.$command);
        cgxw_JCommandEncoder_Release(var$2.$encoder);
        cgxw_JQueue_Submit(var$3.$queue, 1, var$2.$command);
        cgxw_JCommandBuffer_Release(var$2.$command);
        cgxw_JTextureView_Release(var$2.$textureView);
        var$2 = cgxw_JWebGPU_GetPlatformType();
        cgxw_JPlatformType_$callClinit();
        if (var$2 !== cgxw_JPlatformType_WGPU_Web)
            cgxw_JSurface_Present(var$3.$surface);
    } else if (var$1 > 0) {
        if (var$1 == 1) {
            $this.$wGPUInit = 2;
            var$2 = $this.$wgpu;
            var$2.$width0 = $this.$width;
            var$2.$height0 = $this.$height;
            cgxwbc_WGPUApp_init(var$2);
        }
        if ($this.$wGPUInit == 2 && cgxwbc_WGPUApp_isReady($this.$wgpu)) {
            $this.$wGPUInit = 3;
            cgxwbt_TeaVMApp_createSurface($this);
            var$2 = $this.$applicationInterface;
            var$3 = $this.$wgpu;
            cgxwda_WebGPUApp_create(var$2, var$3);
        }
    }
    cgxwbc_WGPUApp_update($this.$wgpu);
},
cgxwbt_TeaVMApp_createSurface = $this => {
    let var$1, var$2, var$3, var$4;
    var$1 = $this.$wgpu;
    var$2 = var$1.$instance;
    cgxwbt_TeaVMApp_$callClinit();
    var$3 = cgxwbt_TeaVMApp_canvasWGPU;
    var$4 = cgxw_JInstance_internal_native_CreateWebSurface$js_body$_14(Long_lo(var$2.$nativeData.$cPointer), $rt_ustr(var$3));
    if (!var$4)
        var$3 = null;
    else {
        if (var$2.$JSurface_TEMP_GEN_0 === null) {
            var$3 = new cgxw_JSurface;
            cgxwi_IDLBase__init_(var$3);
            var$2.$JSurface_TEMP_GEN_0 = var$3;
        }
        cgxwi_IDLNativeData_reset(var$2.$JSurface_TEMP_GEN_0.$nativeData, Long_fromInt(var$4), 0);
        var$3 = var$2.$JSurface_TEMP_GEN_0;
    }
    var$1.$surface = var$3;
},
cgxwbt_TeaVMApp__clinit_ = () => {
    let var$1;
    cgxwbt_TeaVMApp_canvas = $rt_s(23);
    var$1 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append1(var$1, 35), $rt_s(23));
    cgxwbt_TeaVMApp_canvasWGPU = jl_StringBuilder_toString(var$1);
},
cgxwbc_ApplicationListener = $rt_classWithoutFields(0);
function cgxwda_WebGPUApp() {
    let a = this; jl_Object.call(a);
    a.$surfaceFormat = null;
    a.$surfaceTexture = null;
    a.$texture = null;
    a.$textureView = null;
    a.$encoder = null;
    a.$renderPass = null;
    a.$command = null;
    a.$r = 0.0;
    a.$g = 0.0;
    a.$b = 0.0;
}
let cgxwda_WebGPUApp_create = ($this, $wgpu) => {
    let $surfaceCapabilities, var$3, var$4, var$5;
    $surfaceCapabilities = new cgxw_JSurfaceTexture;
    cgxwi_IDLBase__init_($surfaceCapabilities);
    var$3 = cgxw_JSurfaceTexture_internal_native_create$js_body$_1();
    cgxwi_IDLNativeData_reset($surfaceCapabilities.$nativeData, Long_fromInt(var$3), 1);
    $this.$surfaceTexture = $surfaceCapabilities;
    $surfaceCapabilities = new cgxw_JTexture;
    cgxwi_IDLBase__init_($surfaceCapabilities);
    var$3 = cgxw_JTexture_internal_native_create$js_body$_1();
    cgxwi_IDLNativeData_reset($surfaceCapabilities.$nativeData, Long_fromInt(var$3), 1);
    $this.$texture = $surfaceCapabilities;
    $surfaceCapabilities = new cgxw_JTextureView;
    cgxwi_IDLBase__init_($surfaceCapabilities);
    var$3 = cgxw_JTextureView_internal_native_create$js_body$_1();
    cgxwi_IDLNativeData_reset($surfaceCapabilities.$nativeData, Long_fromInt(var$3), 1);
    $this.$textureView = $surfaceCapabilities;
    $surfaceCapabilities = new cgxw_JCommandEncoder;
    cgxwi_IDLBase__init_($surfaceCapabilities);
    var$3 = cgxw_JCommandEncoder_internal_native_create$js_body$_1();
    cgxwi_IDLNativeData_reset($surfaceCapabilities.$nativeData, Long_fromInt(var$3), 1);
    $this.$encoder = $surfaceCapabilities;
    $surfaceCapabilities = new cgxw_JRenderPassEncoder;
    cgxwi_IDLBase__init_($surfaceCapabilities);
    var$3 = cgxw_JRenderPassEncoder_internal_native_create$js_body$_1();
    cgxwi_IDLNativeData_reset($surfaceCapabilities.$nativeData, Long_fromInt(var$3), 1);
    $this.$renderPass = $surfaceCapabilities;
    $surfaceCapabilities = new cgxw_JCommandBuffer;
    cgxwi_IDLBase__init_($surfaceCapabilities);
    var$3 = cgxw_JCommandBuffer_internal_native_create$js_body$_1();
    cgxwi_IDLNativeData_reset($surfaceCapabilities.$nativeData, Long_fromInt(var$3), 1);
    $this.$command = $surfaceCapabilities;
    if ($wgpu.$surface === null)
        otcic_JsConsolePrintStream_println(jl_System_out(), $rt_s(24));
    else {
        otcic_JsConsolePrintStream_println(jl_System_out(), $rt_s(25));
        $surfaceCapabilities = new cgxw_JSurfaceCapabilities;
        cgxwi_IDLBase__init_($surfaceCapabilities);
        var$3 = cgxw_JSurfaceCapabilities_internal_native_create$js_body$_1();
        cgxwi_IDLNativeData_reset($surfaceCapabilities.$nativeData, Long_fromInt(var$3), 1);
        var$4 = $wgpu.$surface;
        var$5 = $wgpu.$adapter;
        cgxw_JSurface_internal_native_GetCapabilities$js_body$_12(Long_lo(var$4.$nativeData.$cPointer), Long_lo((var$5 === null ? Long_ZERO : var$5.$nativeData.$cPointer)), Long_lo($surfaceCapabilities.$nativeData.$cPointer));
        var$3 = cgxw_JSurfaceCapabilities_internal_native_GetFormats$js_body$_8(Long_lo($surfaceCapabilities.$nativeData.$cPointer), 0);
        cgxw_WGPUTextureFormat_$callClinit();
        $surfaceCapabilities = cgxw_WGPUTextureFormat_MAP;
        var$4 = jl_Integer_valueOf(var$3);
        $this.$surfaceFormat = ju_HashMap_get($surfaceCapabilities, var$4);
        $surfaceCapabilities = jl_System_out();
        var$4 = jl_String_valueOf($this.$surfaceFormat);
        var$5 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$5, $rt_s(26)), var$4);
        var$4 = jl_StringBuilder_toString(var$5);
        otcic_JsConsolePrintStream_println($surfaceCapabilities, var$4);
        $surfaceCapabilities = new cgxw_JSurfaceConfiguration;
        cgxwi_IDLBase__init_($surfaceCapabilities);
        var$3 = cgxw_JSurfaceConfiguration_internal_native_create$js_body$_1();
        cgxwi_IDLNativeData_reset($surfaceCapabilities.$nativeData, Long_fromInt(var$3), 1);
        var$3 = $wgpu.$width0;
        cgxw_JSurfaceConfiguration_internal_native_SetWidth$js_body$_10(Long_lo($surfaceCapabilities.$nativeData.$cPointer), var$3);
        var$3 = $wgpu.$height0;
        cgxw_JSurfaceConfiguration_internal_native_SetHeight$js_body$_12(Long_lo($surfaceCapabilities.$nativeData.$cPointer), var$3);
        var$4 = $this.$surfaceFormat;
        cgxw_JSurfaceConfiguration_internal_native_SetFormat$js_body$_14(Long_lo($surfaceCapabilities.$nativeData.$cPointer), Long_lo(Long_fromInt(var$4 === null ? 0 : var$4.$value)));
        cgxw_JSurfaceConfiguration_internal_native_SetViewFormats$js_body$_16(Long_lo($surfaceCapabilities.$nativeData.$cPointer), 0);
        cgxw_WGPUTextureUsage_$callClinit();
        var$4 = cgxw_WGPUTextureUsage_RenderAttachment;
        cgxw_JSurfaceConfiguration_internal_native_SetUsage$js_body$_18(Long_lo($surfaceCapabilities.$nativeData.$cPointer), Long_lo(Long_fromInt(var$4 === null ? 0 : var$4.$value8)));
        var$4 = $wgpu.$device;
        cgxw_JSurfaceConfiguration_internal_native_SetDevice$js_body$_20(Long_lo($surfaceCapabilities.$nativeData.$cPointer), Long_lo((var$4 === null ? Long_ZERO : var$4.$nativeData.$cPointer)));
        cgxw_WGPUPresentMode_$callClinit();
        var$4 = cgxw_WGPUPresentMode_Fifo;
        cgxw_JSurfaceConfiguration_internal_native_SetPresentMode$js_body$_22(Long_lo($surfaceCapabilities.$nativeData.$cPointer), Long_lo(Long_fromInt(var$4 === null ? 0 : var$4.$value6)));
        cgxw_WGPUCompositeAlphaMode_$callClinit();
        var$4 = cgxw_WGPUCompositeAlphaMode_Auto;
        cgxw_JSurfaceConfiguration_internal_native_SetAlphaMode$js_body$_24(Long_lo($surfaceCapabilities.$nativeData.$cPointer), Long_lo(Long_fromInt(var$4 === null ? 0 : var$4.$value4)));
        cgxw_JSurface_Configure($wgpu.$surface, $surfaceCapabilities);
        $wgpu.$renderPipeline = cgxw_JWebGPU_CreateRenderPipeline($wgpu.$device, $rt_s(27), $this.$surfaceFormat);
        otcic_JsConsolePrintStream_println(jl_System_out(), $rt_s(28));
    }
},
ju_Comparator = $rt_classWithoutFields(0),
jl_String$_clinit_$lambda$_115_0 = $rt_classWithoutFields(),
jl_Character = $rt_classWithoutFields(),
jl_Character_TYPE = null,
jl_Character_characterCache = null,
jl_Character_forDigit = ($digit, $radix) => {
    if ($radix >= 2 && $radix <= 36 && $digit >= 0 && $digit < $radix)
        return $digit < 10 ? (48 + $digit | 0) & 65535 : ((97 + $digit | 0) - 10 | 0) & 65535;
    return 0;
},
jl_Character__clinit_ = () => {
    jl_Character_TYPE = $rt_cls($rt_charcls);
    jl_Character_characterCache = $rt_createArray(jl_Character, 128);
},
jl_System = $rt_classWithoutFields(),
jl_System_outCache = null,
jl_System_errCache = null,
jl_System_out = () => {
    let var$1;
    if (jl_System_outCache === null) {
        var$1 = new otcic_JSStdoutPrintStream;
        otcic_JsConsolePrintStream__init_(var$1);
        jl_System_outCache = var$1;
    }
    return jl_System_outCache;
},
jl_System_err = () => {
    let var$1;
    if (jl_System_errCache === null) {
        var$1 = new otcic_JSStderrPrintStream;
        otcic_JsConsolePrintStream__init_(var$1);
        jl_System_errCache = var$1;
    }
    return jl_System_errCache;
};
function cgxjc_JMultiplatform() {
    jl_Object.call(this);
    this.$map0 = null;
}
let cgxjc_JMultiplatform_platformMap = null,
cgxjc_JMultiplatform_getInstance = () => {
    let var$1, var$2;
    if (cgxjc_JMultiplatform_platformMap === null) {
        var$1 = new cgxjc_JMultiplatform;
        var$2 = new cgxjc_JPlatformMap;
        var$2.$map = ju_HashMap__init_();
        var$1.$map0 = var$2;
        cgxjc_JMultiplatform_platformMap = var$1;
    }
    return cgxjc_JMultiplatform_platformMap;
};
function cgxjc_JPlatformMap() {
    jl_Object.call(this);
    this.$map = null;
}
let cgxjl_JParserLibraryLoaderListener = $rt_classWithoutFields(0);
function cgxwbt_TeaVMApp$_init_$lambda$_0_0() {
    jl_Object.call(this);
    this.$_03 = null;
}
let cgxwbt_TeaVMApp$_init_$lambda$_0_0_onLoad = (var$0, var$1, var$2) => {
    let var$3, var$4, var$5;
    var$3 = var$0.$_03;
    var$4 = jl_System_out();
    var$5 = jl_StringBuilder__init_();
    jl_StringBuilder_append2(jl_StringBuilder_append(var$5, $rt_s(29)), var$1);
    var$5 = jl_StringBuilder_toString(var$5);
    otcic_JsConsolePrintStream_println(var$4, var$5);
    if (!var$1)
        jl_Throwable_printStackTrace(var$2);
    else
        var$3.$wGPUInit = 1;
},
cgxw_JWebGPULoader = $rt_classWithoutFields();
function cgxwbc_WGPUApp() {
    let a = this; jl_Object.call(a);
    a.$width0 = 0;
    a.$height0 = 0;
    a.$instance = null;
    a.$adapter = null;
    a.$device = null;
    a.$surface = null;
    a.$renderPipeline = null;
    a.$queue = null;
    a.$initState = null;
}
let cgxwbc_WGPUApp_init = $this => {
    let $instance, var$2, var$3, var$4, var$5;
    $instance = new cgxw_JInstance;
    cgxwi_IDLBase__init_($instance);
    var$2 = cgxw_JInstance_internal_native_create$js_body$_1();
    cgxwi_IDLNativeData_reset($instance.$nativeData, Long_fromInt(var$2), 1);
    if (!(cgxw_JInstance_internal_native_IsValid$js_body$_8(Long_lo($instance.$nativeData.$cPointer)) ? 1 : 0)) {
        $this.$initState = cgxwbc_WGPUApp$InitState_INSTANCE_NOT_VALID;
        cgxwi_IDLBase_dispose($instance);
    } else {
        $this.$initState = cgxwbc_WGPUApp$InitState_INSTANCE_VALID;
        $this.$instance = $instance;
        $instance = new cgxw_JRequestAdapterOptions;
        cgxwi_IDLBase__init_($instance);
        var$2 = cgxw_JRequestAdapterOptions_internal_native_create$js_body$_1();
        cgxwi_IDLNativeData_reset($instance.$nativeData, Long_fromInt(var$2), 1);
        var$3 = new cgxwbc_WGPUApp$1;
        var$3.$this$01 = $this;
        cgxwi_IDLBase__init_(var$3);
        var$2 = cgxw_RequestAdapterCallback_internal_native_create$js_body$_9();
        cgxwi_IDLNativeData_reset(var$3.$nativeData, Long_fromInt(var$2), 1);
        var$4 = new cgxw_RequestAdapterCallback$1;
        var$4.$this$02 = var$3;
        cgxw_RequestAdapterCallback_internal_native_setupCallback$js_body$_10(Long_lo(var$3.$nativeData.$cPointer), otji_JS_function(otji_JSWrapper_unwrap(var$4), "OnCallback"));
        var$4 = $this.$instance;
        cgxw_WGPUCallbackMode_$callClinit();
        var$5 = cgxw_WGPUCallbackMode_AllowProcessEvents;
        cgxw_JInstance_internal_native_RequestAdapter$js_body$_12(Long_lo(var$4.$nativeData.$cPointer), Long_lo($instance.$nativeData.$cPointer), Long_lo(Long_fromInt(var$5 === null ? 0 : var$5.$value0)), Long_lo(var$3.$nativeData.$cPointer));
    }
},
cgxwbc_WGPUApp_requestDevice = $this => {
    let $info, var$2, $vendor, $deviceDescriptor, $backendType, $features, $adapterType, $architecture, $description, $device;
    $info = new cgxw_JAdapterInfo;
    cgxwi_IDLBase__init_($info);
    var$2 = cgxw_JAdapterInfo_internal_native_create$js_body$_1();
    cgxwi_IDLNativeData_reset($info.$nativeData, Long_fromInt(var$2), 1);
    if (cgxw_JAdapter_internal_native_GetInfo$js_body$_10(Long_lo($this.$adapter.$nativeData.$cPointer), Long_lo($info.$nativeData.$cPointer)) ? 1 : 0) {
        var$2 = cgxw_JAdapterInfo_internal_native_GetBackendType$js_body$_16(Long_lo($info.$nativeData.$cPointer));
        cgxw_WGPUBackendType_$callClinit();
        $vendor = cgxw_WGPUBackendType_MAP;
        $deviceDescriptor = jl_Integer_valueOf(var$2);
        $backendType = ju_HashMap_get($vendor, $deviceDescriptor);
        $vendor = jl_System_out();
        $deviceDescriptor = jl_String_valueOf($backendType);
        $features = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append($features, $rt_s(30)), $deviceDescriptor);
        $deviceDescriptor = jl_StringBuilder_toString($features);
        otcic_JsConsolePrintStream_println($vendor, $deviceDescriptor);
        var$2 = cgxw_JAdapterInfo_internal_native_GetAdapterType$js_body$_18(Long_lo((cgxwi_IDLNativeData_getCPointer($info.$nativeData))));
        cgxw_WGPUAdapterType_$callClinit();
        $vendor = cgxw_WGPUAdapterType_MAP;
        $deviceDescriptor = jl_Integer_valueOf(var$2);
        $adapterType = ju_HashMap_get($vendor, $deviceDescriptor);
        $vendor = jl_System_out();
        $deviceDescriptor = jl_String_valueOf($adapterType);
        $features = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append($features, $rt_s(31)), $deviceDescriptor);
        $deviceDescriptor = jl_StringBuilder_toString($features);
        otcic_JsConsolePrintStream_println($vendor, $deviceDescriptor);
        $vendor = cgxwih_IDLString_c_str(cgxw_JAdapterInfo_GetVendor($info));
        $deviceDescriptor = jl_System_out();
        $features = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append($features, $rt_s(32)), $vendor);
        $vendor = jl_StringBuilder_toString($features);
        otcic_JsConsolePrintStream_println($deviceDescriptor, $vendor);
        $architecture = cgxwih_IDLString_c_str(cgxw_JAdapterInfo_GetArchitecture($info));
        $vendor = jl_System_out();
        $deviceDescriptor = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append($deviceDescriptor, $rt_s(33)), $architecture);
        $deviceDescriptor = jl_StringBuilder_toString($deviceDescriptor);
        otcic_JsConsolePrintStream_println($vendor, $deviceDescriptor);
        $description = cgxwih_IDLString_c_str(cgxw_JAdapterInfo_GetDescription($info));
        $vendor = jl_System_out();
        $deviceDescriptor = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append($deviceDescriptor, $rt_s(34)), $description);
        $deviceDescriptor = jl_StringBuilder_toString($deviceDescriptor);
        otcic_JsConsolePrintStream_println($vendor, $deviceDescriptor);
        $device = cgxwih_IDLString_c_str(cgxw_JAdapterInfo_GetDevice($info));
        $info = jl_System_out();
        $vendor = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append($vendor, $rt_s(35)), $device);
        $vendor = jl_StringBuilder_toString($vendor);
        otcic_JsConsolePrintStream_println($info, $vendor);
        $info = jl_System_out();
        $vendor = $this.$adapter;
        cgxw_WGPUFeatureName_$callClinit();
        var$2 = cgxw_JAdapter_HasFeature($vendor, cgxw_WGPUFeatureName_DepthClipControl);
        $vendor = jl_StringBuilder__init_();
        jl_StringBuilder_append2(jl_StringBuilder_append($vendor, $rt_s(36)), var$2);
        $vendor = jl_StringBuilder_toString($vendor);
        otcic_JsConsolePrintStream_println($info, $vendor);
    }
    $deviceDescriptor = new cgxw_JDeviceDescriptor;
    cgxwi_IDLBase__init_($deviceDescriptor);
    var$2 = cgxw_JDeviceDescriptor_internal_native_create$js_body$_1();
    cgxwi_IDLNativeData_reset($deviceDescriptor.$nativeData, Long_fromInt(var$2), 1);
    cgxw_JDeviceDescriptor_internal_native_SetLabel$js_body$_8(Long_lo($deviceDescriptor.$nativeData.$cPointer), "My Device");
    $features = new cgxw_JVectorRequiredFeatures;
    cgxwi_IDLBase__init_($features);
    var$2 = cgxw_JVectorRequiredFeatures_internal_native_create$js_body$_1();
    cgxwi_IDLNativeData_reset($features.$nativeData, Long_fromInt(var$2), 1);
    cgxw_WGPUFeatureName_$callClinit();
    $vendor = cgxw_WGPUFeatureName_DepthClipControl;
    cgxw_JVectorRequiredFeatures_internal_native_push_back$js_body$_8(Long_lo($features.$nativeData.$cPointer), Long_lo(Long_fromInt($vendor === null ? 0 : $vendor.$value2)));
    cgxw_JDeviceDescriptor_internal_native_SetRequiredFeatures$js_body$_12(Long_lo($deviceDescriptor.$nativeData.$cPointer), Long_lo($features.$nativeData.$cPointer));
    var$2 = cgxw_JDeviceDescriptor_internal_native_GetDefaultQueue$js_body$_14(Long_lo($deviceDescriptor.$nativeData.$cPointer));
    if (!var$2)
        $info = null;
    else {
        if ($deviceDescriptor.$JQueueDescriptor_TEMP_GEN_0 === null) {
            $info = new cgxw_JQueueDescriptor;
            cgxwi_IDLBase__init_($info);
            $deviceDescriptor.$JQueueDescriptor_TEMP_GEN_0 = $info;
        }
        cgxwi_IDLNativeData_reset($deviceDescriptor.$JQueueDescriptor_TEMP_GEN_0.$nativeData, Long_fromInt(var$2), 0);
        $info = $deviceDescriptor.$JQueueDescriptor_TEMP_GEN_0;
    }
    cgxw_JQueueDescriptor_internal_native_SetLabel$js_body$_6(Long_lo($info.$nativeData.$cPointer), "The default queue");
    $features = $this.$adapter;
    cgxw_WGPUCallbackMode_$callClinit();
    $info = cgxw_WGPUCallbackMode_AllowProcessEvents;
    $vendor = new cgxwbc_WGPUApp$2;
    $vendor.$this$00 = $this;
    cgxwi_IDLBase__init_($vendor);
    var$2 = cgxw_RequestDeviceCallback_internal_native_create$js_body$_9();
    cgxwi_IDLNativeData_reset($vendor.$nativeData, Long_fromInt(var$2), 1);
    $backendType = new cgxw_RequestDeviceCallback$1;
    $backendType.$this$04 = $vendor;
    cgxw_RequestDeviceCallback_internal_native_setupCallback$js_body$_10(Long_lo($vendor.$nativeData.$cPointer), otji_JS_function(otji_JSWrapper_unwrap($backendType), "OnCallback"));
    $backendType = new cgxwbc_WGPUApp$3;
    $backendType.$this$05 = $this;
    cgxwi_IDLBase__init_($backendType);
    var$2 = cgxw_UncapturedErrorCallback_internal_native_create$js_body$_9();
    cgxwi_IDLNativeData_reset($backendType.$nativeData, Long_fromInt(var$2), 1);
    $adapterType = new cgxw_UncapturedErrorCallback$1;
    $adapterType.$this$03 = $backendType;
    cgxw_UncapturedErrorCallback_internal_native_setupCallback$js_body$_10(Long_lo($backendType.$nativeData.$cPointer), otji_JS_function(otji_JSWrapper_unwrap($adapterType), "OnCallback"));
    cgxw_JAdapter_RequestDevice($features, $deviceDescriptor, $info, $vendor, $backendType);
},
cgxwbc_WGPUApp_update = $this => {
    let var$1, var$2;
    var$1 = $this.$instance;
    if (var$1 !== null)
        cgxw_JInstance_internal_native_ProcessEvents$js_body$_20(Long_lo(var$1.$nativeData.$cPointer));
    if ($this.$initState !== cgxwbc_WGPUApp$InitState_ERROR)
        return;
    var$2 = new jl_RuntimeException;
    jl_Exception__init_0(var$2, $rt_s(37));
    $rt_throw(var$2);
},
cgxwbc_WGPUApp_isReady = $this => {
    return $this.$initState !== cgxwbc_WGPUApp$InitState_DEVICE_VALID ? 0 : 1;
},
otj_JSObject = $rt_classWithoutFields(0),
otjb_AnimationFrameCallback = $rt_classWithoutFields(0);
function cgxwbt_TeaVMApp$1() {
    jl_Object.call(this);
    this.$this$0 = null;
}
let cgxwbt_TeaVMApp$1_onAnimationFrame$exported$0 = (var$1, var$2) => {
    let $$je;
    var$2;
    var$1 = var$1;
    a: {
        try {
            cgxwbt_TeaVMApp_tick(var$1.$this$0);
            break a;
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            if ($$je instanceof jl_Throwable) {
                var$2 = $$je;
            } else {
                throw $$e;
            }
        }
        jl_Throwable_printStackTrace(var$2);
        var$1.$this$0.$loop = 0;
    }
    if (var$1.$this$0.$loop)
        requestAnimationFrame(otji_JS_function(otji_JSWrapper_unwrap(var$1), "onAnimationFrame"));
};
function otji_JSWrapper() {
    jl_Object.call(this);
    this.$js = null;
}
let otji_JSWrapper_unwrap = $o => {
    if ($o === null)
        return null;
    return !($o instanceof otji_JSWrapper) ? $o : $o.$js;
},
ju_Objects = $rt_classWithoutFields(),
jl_AutoCloseable = $rt_classWithoutFields(0),
ji_Closeable = $rt_classWithoutFields(0),
ji_Flushable = $rt_classWithoutFields(0),
ji_OutputStream = $rt_classWithoutFields();
function ji_FilterOutputStream() {
    ji_OutputStream.call(this);
    this.$out0 = null;
}
function ji_PrintStream() {
    let a = this; ji_FilterOutputStream.call(a);
    a.$autoFlush = 0;
    a.$sb = null;
    a.$buffer0 = null;
    a.$charset = null;
}
let otcic_JsConsolePrintStream = $rt_classWithoutFields(ji_PrintStream),
otcic_JsConsolePrintStream__init_ = $this => {
    let var$1, var$2;
    var$1 = null;
    var$2 = null;
    $this.$out0 = var$1;
    $this.$sb = jl_StringBuilder__init_();
    $this.$buffer0 = $rt_createCharArray(32);
    $this.$autoFlush = 0;
    $this.$charset = var$2;
},
otcic_JsConsolePrintStream_println = ($this, $s) => {
    $this.$print($s);
    $this.$print($rt_s(4));
},
otcic_JSStdoutPrintStream = $rt_classWithoutFields(otcic_JsConsolePrintStream),
otcic_JSStdoutPrintStream_print = ($this, $s) => {
    if ($s === null)
        $s = $rt_s(6);
    $rt_putStdout($rt_ustr($s));
},
cgxjl_JParserLibraryLoader = $rt_classWithoutFields(),
cgxjl_JParserLibraryLoader_loadedLibraries = null,
cgxjl_JParserLibraryLoader_$callClinit = () => {
    cgxjl_JParserLibraryLoader_$callClinit = $rt_eraseClinit(cgxjl_JParserLibraryLoader);
    cgxjl_JParserLibraryLoader__clinit_();
},
cgxjl_JParserLibraryLoader_loadWasm = ($listener, $libraryName, $prefix, $postfix, $fallback) => {
    let var$6;
    cgxjl_JParserLibraryLoader_$callClinit();
    var$6 = new cgxjl_JParserLibraryLoader$loadWasm$lambda$_3_0;
    var$6.$_0 = $libraryName;
    var$6.$_1 = $listener;
    var$6.$_2 = $fallback;
    var$6.$_3 = $prefix;
    cgxjl_JParserLibraryLoader_loadScript($libraryName, var$6, $prefix, $postfix);
},
cgxjl_JParserLibraryLoader_loadJS = ($listener, $libraryName, $prefix) => {
    let var$4;
    cgxjl_JParserLibraryLoader_$callClinit();
    var$4 = new cgxjl_JParserLibraryLoader$loadJS$lambda$_4_0;
    var$4.$_00 = $listener;
    cgxjl_JParserLibraryLoader_loadScript($libraryName, var$4, $prefix, $rt_s(19));
},
cgxjl_JParserLibraryLoader_loadScript = ($libraryName, $listener, $prefix, $postfix) => {
    let $current, $url, $document, var$8;
    cgxjl_JParserLibraryLoader_$callClinit();
    $current = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append($current, $prefix), $libraryName), $postfix);
    $url = jl_StringBuilder_toString($current);
    $document = window.document;
    var$8 = $document.createElement("script");
    $current = new cgxjl_JParserLibraryLoader$loadScript$lambda$_5_0;
    $current.$_01 = $listener;
    var$8.addEventListener("load", otji_JS_function(otji_JSWrapper_unwrap($current), "handleEvent"));
    $current = new cgxjl_JParserLibraryLoader$loadScript$lambda$_5_1;
    $current.$_04 = $prefix;
    $current.$_11 = $libraryName;
    $current.$_20 = $listener;
    var$8.addEventListener("error", otji_JS_function(otji_JSWrapper_unwrap($current), "handleEvent"));
    $libraryName = $rt_ustr($url);
    var$8.src = $libraryName;
    $document.body.appendChild(var$8);
},
cgxjl_JParserLibraryLoader__clinit_ = () => {
    let var$1;
    var$1 = new ju_HashSet;
    var$1.$backingMap = ju_HashMap__init_();
    cgxjl_JParserLibraryLoader_loadedLibraries = var$1;
};
function jl_Enum() {
    let a = this; jl_Object.call(a);
    a.$name0 = null;
    a.$ordinal = 0;
}
let jl_Enum__init_ = ($this, $name, $ordinal) => {
    $this.$name0 = $name;
    $this.$ordinal = $ordinal;
},
jl_Enum_toString = $this => {
    return $this.$name0;
};
function cgxwbc_WGPUApp$InitState() {
    jl_Enum.call(this);
    this.$status = 0;
}
let cgxwbc_WGPUApp$InitState_NOT_INITIALIZED = null,
cgxwbc_WGPUApp$InitState_ERROR = null,
cgxwbc_WGPUApp$InitState_INSTANCE_VALID = null,
cgxwbc_WGPUApp$InitState_ADAPTER_VALID = null,
cgxwbc_WGPUApp$InitState_DEVICE_VALID = null,
cgxwbc_WGPUApp$InitState_INSTANCE_NOT_VALID = null,
cgxwbc_WGPUApp$InitState_ADAPTER_NOT_VALID = null,
cgxwbc_WGPUApp$InitState_DEVICE_NOT_VALID = null,
cgxwbc_WGPUApp$InitState_$VALUES = null,
cgxwbc_WGPUApp$InitState__init_0 = ($this, var$1, var$2, $status) => {
    jl_Enum__init_($this, var$1, var$2);
    $this.$status = $status;
},
cgxwbc_WGPUApp$InitState__init_ = (var_0, var_1, var_2) => {
    let var_3 = new cgxwbc_WGPUApp$InitState();
    cgxwbc_WGPUApp$InitState__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
cgxwbc_WGPUApp$InitState__clinit_ = () => {
    let var$1, var$2, var$3;
    cgxwbc_WGPUApp$InitState_NOT_INITIALIZED = cgxwbc_WGPUApp$InitState__init_($rt_s(38), 0, 0);
    cgxwbc_WGPUApp$InitState_ERROR = cgxwbc_WGPUApp$InitState__init_($rt_s(39), 1, 1);
    cgxwbc_WGPUApp$InitState_INSTANCE_VALID = cgxwbc_WGPUApp$InitState__init_($rt_s(40), 2, 2);
    cgxwbc_WGPUApp$InitState_ADAPTER_VALID = cgxwbc_WGPUApp$InitState__init_($rt_s(41), 3, 3);
    cgxwbc_WGPUApp$InitState_DEVICE_VALID = cgxwbc_WGPUApp$InitState__init_($rt_s(42), 4, 4);
    cgxwbc_WGPUApp$InitState_INSTANCE_NOT_VALID = cgxwbc_WGPUApp$InitState__init_($rt_s(43), 5, (-1));
    cgxwbc_WGPUApp$InitState_ADAPTER_NOT_VALID = cgxwbc_WGPUApp$InitState__init_($rt_s(44), 6, (-2));
    var$1 = cgxwbc_WGPUApp$InitState__init_($rt_s(45), 7, (-3));
    cgxwbc_WGPUApp$InitState_DEVICE_NOT_VALID = var$1;
    var$2 = $rt_createArray(cgxwbc_WGPUApp$InitState, 8);
    var$3 = var$2.data;
    var$3[0] = cgxwbc_WGPUApp$InitState_NOT_INITIALIZED;
    var$3[1] = cgxwbc_WGPUApp$InitState_ERROR;
    var$3[2] = cgxwbc_WGPUApp$InitState_INSTANCE_VALID;
    var$3[3] = cgxwbc_WGPUApp$InitState_ADAPTER_VALID;
    var$3[4] = cgxwbc_WGPUApp$InitState_DEVICE_VALID;
    var$3[5] = cgxwbc_WGPUApp$InitState_INSTANCE_NOT_VALID;
    var$3[6] = cgxwbc_WGPUApp$InitState_ADAPTER_NOT_VALID;
    var$3[7] = var$1;
    cgxwbc_WGPUApp$InitState_$VALUES = var$2;
},
jl_IndexOutOfBoundsException = $rt_classWithoutFields(jl_RuntimeException),
ju_Map = $rt_classWithoutFields(0),
ju_AbstractMap = $rt_classWithoutFields(),
jl_Cloneable = $rt_classWithoutFields(0);
function ju_HashMap() {
    let a = this; ju_AbstractMap.call(a);
    a.$elementCount = 0;
    a.$elementData = null;
    a.$modCount = 0;
    a.$loadFactor = 0.0;
    a.$threshold = 0;
}
let ju_HashMap__init_0 = $this => {
    let var$1;
    var$1 = ju_HashMap_calculateCapacity(16);
    $this.$elementCount = 0;
    $this.$elementData = $rt_createArray(ju_HashMap$HashEntry, var$1);
    $this.$loadFactor = 0.75;
    ju_HashMap_computeThreshold($this);
},
ju_HashMap__init_ = () => {
    let var_0 = new ju_HashMap();
    ju_HashMap__init_0(var_0);
    return var_0;
},
ju_HashMap_calculateCapacity = $x => {
    let var$2;
    if ($x >= 1073741824)
        return 1073741824;
    if (!$x)
        return 16;
    var$2 = $x - 1 | 0;
    $x = var$2 | var$2 >> 1;
    $x = $x | $x >> 2;
    $x = $x | $x >> 4;
    $x = $x | $x >> 8;
    return ($x | $x >> 16) + 1 | 0;
},
ju_HashMap_computeThreshold = $this => {
    $this.$threshold = $this.$elementData.data.length * $this.$loadFactor | 0;
},
ju_HashMap_get = ($this, $key) => {
    let $m;
    $m = ju_HashMap_entryByKey($this, $key);
    if ($m === null)
        return null;
    return $m.$value1;
},
ju_HashMap_entryByKey = ($this, $key) => {
    let $m, $hash;
    if ($key === null)
        $m = ju_HashMap_findNullKeyEntry($this);
    else {
        $hash = $key.$hashCode();
        $m = ju_HashMap_findNonNullKeyEntry($this, $key, $hash & ($this.$elementData.data.length - 1 | 0), $hash);
    }
    return $m;
},
ju_HashMap_findNonNullKeyEntry = ($this, $key, $index, $keyHash) => {
    let $m, var$5;
    $m = $this.$elementData.data[$index];
    while ($m !== null) {
        if ($m.$origKeyHash == $keyHash) {
            var$5 = $m.$key;
            if ($key !== var$5 && !$key.$equals(var$5) ? 0 : 1)
                break;
        }
        $m = $m.$next;
    }
    return $m;
},
ju_HashMap_findNullKeyEntry = $this => {
    let $m;
    $m = $this.$elementData.data[0];
    while ($m !== null && $m.$key !== null) {
        $m = $m.$next;
    }
    return $m;
},
ju_HashMap_put = ($this, $key, $value) => {
    let var$3, var$4, var$5;
    if ($key === null) {
        var$3 = ju_HashMap_findNullKeyEntry($this);
        if (var$3 === null) {
            $this.$modCount = $this.$modCount + 1 | 0;
            var$3 = ju_HashMap_createHashedEntry($this, null, 0, 0);
            var$4 = $this.$elementCount + 1 | 0;
            $this.$elementCount = var$4;
            if (var$4 > $this.$threshold)
                ju_HashMap_rehash($this);
        }
    } else {
        var$4 = $key.$hashCode();
        var$5 = var$4 & ($this.$elementData.data.length - 1 | 0);
        var$3 = ju_HashMap_findNonNullKeyEntry($this, $key, var$5, var$4);
        if (var$3 === null) {
            $this.$modCount = $this.$modCount + 1 | 0;
            var$3 = ju_HashMap_createHashedEntry($this, $key, var$5, var$4);
            var$4 = $this.$elementCount + 1 | 0;
            $this.$elementCount = var$4;
            if (var$4 > $this.$threshold)
                ju_HashMap_rehash($this);
        }
    }
    $key = var$3.$value1;
    var$3.$value1 = $value;
    return $key;
},
ju_HashMap_createHashedEntry = ($this, $key, $index, $hash) => {
    let $entry, var$5, var$6;
    $entry = new ju_HashMap$HashEntry;
    var$5 = null;
    $entry.$key = $key;
    $entry.$value1 = var$5;
    $entry.$origKeyHash = $hash;
    var$6 = $this.$elementData.data;
    $entry.$next = var$6[$index];
    var$6[$index] = $entry;
    return $entry;
},
ju_HashMap_rehash = $this => {
    let var$1, var$2, var$3, var$4, var$5, var$6, var$7, var$8;
    var$1 = $this.$elementData.data.length;
    var$1 = ju_HashMap_calculateCapacity(!var$1 ? 1 : var$1 << 1);
    var$2 = $rt_createArray(ju_HashMap$HashEntry, var$1);
    var$3 = var$2.data;
    var$4 = 0;
    var$5 = var$1 - 1 | 0;
    while (true) {
        var$6 = $this.$elementData.data;
        if (var$4 >= var$6.length)
            break;
        var$7 = var$6[var$4];
        var$6[var$4] = null;
        while (var$7 !== null) {
            var$1 = var$7.$origKeyHash & var$5;
            var$8 = var$7.$next;
            var$7.$next = var$3[var$1];
            var$3[var$1] = var$7;
            var$7 = var$8;
        }
        var$4 = var$4 + 1 | 0;
    }
    $this.$elementData = var$2;
    ju_HashMap_computeThreshold($this);
},
jnc_Charset = $rt_classWithoutFields(),
jl_Iterable = $rt_classWithoutFields(0),
ju_Collection = $rt_classWithoutFields(0),
ju_AbstractCollection = $rt_classWithoutFields(),
ju_Set = $rt_classWithoutFields(0),
ju_AbstractSet = $rt_classWithoutFields(ju_AbstractCollection);
function ju_HashSet() {
    ju_AbstractSet.call(this);
    this.$backingMap = null;
}
function cgxjl_JParserLibraryLoader$1() {
    jl_Object.call(this);
    this.$val$listener = null;
}
let cgxjl_JParserLibraryLoader$1_onLoad = ($this, $isSuccess, $e) => {
    cgxwbt_TeaVMApp$_init_$lambda$_0_0_onLoad($this.$val$listener, $isSuccess, $e);
};
function js_ScriptException() {
    let a = this; jl_Exception.call(a);
    a.$fileName = null;
    a.$lineNumber = 0;
    a.$columnNumber = 0;
}
let js_ScriptException__init_ = ($this, $s) => {
    jl_Exception__init_0($this, $s);
    $this.$fileName = null;
    $this.$lineNumber = (-1);
    $this.$columnNumber = (-1);
},
js_ScriptException__init_0 = var_0 => {
    let var_1 = new js_ScriptException();
    js_ScriptException__init_(var_1, var_0);
    return var_1;
},
js_ScriptException_getMessage = $this => {
    let $ret, var$2, var$3, var$4;
    $ret = $this.$message;
    var$2 = $this.$fileName;
    if (var$2 !== null) {
        var$3 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$3, $ret), $rt_s(46)), var$2);
        $ret = jl_StringBuilder_toString(var$3);
        var$4 = $this.$lineNumber;
        if (var$4 != (-1)) {
            var$2 = jl_StringBuilder__init_();
            jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append(var$2, $ret), $rt_s(47)), var$4);
            $ret = jl_StringBuilder_toString(var$2);
        }
        var$4 = $this.$columnNumber;
        if (var$4 != (-1)) {
            var$2 = jl_StringBuilder__init_();
            jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append(var$2, $ret), $rt_s(48)), var$4);
            $ret = jl_StringBuilder_toString(var$2);
        }
    }
    return $ret;
};
function cgxjl_JParserLibraryLoader$loadWasm$lambda$_3_0() {
    let a = this; jl_Object.call(a);
    a.$_0 = null;
    a.$_1 = null;
    a.$_2 = 0;
    a.$_3 = null;
}
let cgxjl_JParserLibraryLoader$loadWasm$lambda$_3_0_onLoad = (var$0, var$1, var$2) => {
    let var$3, var$4, var$5, var$6;
    var$3 = var$0.$_0;
    var$4 = var$0.$_1;
    var$5 = var$0.$_2;
    var$6 = var$0.$_3;
    cgxjl_JParserLibraryLoader_$callClinit();
    if (!var$1) {
        if (var$5)
            cgxjl_JParserLibraryLoader_loadJS(var$4, var$3, var$6);
        else
            cgxjl_JParserLibraryLoader$1_onLoad(var$4, 0, var$2);
    } else {
        var$2 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$2, var$3), $rt_s(49));
        var$2 = jl_StringBuilder_toString(var$2);
        var$6 = new cgxjl_JParserLibraryLoader$lambda$loadWasm$1$lambda$_10_0;
        var$6.$_02 = var$3;
        var$6.$_10 = var$4;
        window[$rt_ustr(var$2)] = otji_JS_function(otji_JSWrapper_unwrap(var$6), "onInit");
    }
};
function cgxjl_JParserLibraryLoader$loadJS$lambda$_4_0() {
    jl_Object.call(this);
    this.$_00 = null;
}
let cgxjl_JParserLibraryLoader$loadJS$lambda$_4_0_onLoad = (var$0, var$1, var$2) => {
    let var$3;
    var$3 = var$0.$_00;
    cgxjl_JParserLibraryLoader_$callClinit();
    if (!var$1)
        cgxjl_JParserLibraryLoader$1_onLoad(var$3, 0, var$2);
    else {
        var$2 = null;
        cgxjl_JParserLibraryLoader$1_onLoad(var$3, 1, var$2);
    }
},
otjde_EventListener = $rt_classWithoutFields(0);
function cgxjl_JParserLibraryLoader$loadScript$lambda$_5_0() {
    jl_Object.call(this);
    this.$_01 = null;
}
let cgxjl_JParserLibraryLoader$loadScript$lambda$_5_0_handleEvent$exported$0 = (var$1, var$2) => {
    var$1 = var$1.$_01;
    cgxjl_JParserLibraryLoader_$callClinit();
    var$1.$onLoad(1, null);
};
function cgxjl_JParserLibraryLoader$loadScript$lambda$_5_1() {
    let a = this; jl_Object.call(a);
    a.$_04 = null;
    a.$_11 = null;
    a.$_20 = null;
}
let cgxjl_JParserLibraryLoader$loadScript$lambda$_5_1_handleEvent$exported$0 = (var$1, var$2) => {
    let var$3, var$4;
    var$1 = var$1;
    var$2 = var$1.$_04;
    var$3 = var$1.$_11;
    var$1 = var$1.$_20;
    cgxjl_JParserLibraryLoader_$callClinit();
    var$4 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$4, var$2), var$3);
    var$3 = jl_StringBuilder_toString(var$4);
    var$2 = new js_ScriptException;
    var$4 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$4, $rt_s(50)), var$3);
    js_ScriptException__init_(var$2, jl_StringBuilder_toString(var$4));
    var$1.$onLoad(0, var$2);
},
jl_IllegalArgumentException = $rt_classWithoutFields(jl_RuntimeException),
ju_Map$Entry = $rt_classWithoutFields(0);
function ju_MapEntry() {
    let a = this; jl_Object.call(a);
    a.$key = null;
    a.$value1 = null;
}
function ju_HashMap$HashEntry() {
    let a = this; ju_MapEntry.call(a);
    a.$origKeyHash = 0;
    a.$next = null;
}
function cgxwi_IDLBase() {
    jl_Object.call(this);
    this.$nativeData = null;
}
let cgxwi_IDLBase_ENABLE_LOGGING = 0,
cgxwi_IDLBase__init_ = $this => {
    let var$1;
    var$1 = new cgxwi_IDLNativeData;
    var$1.$idlBase = $this;
    $this.$nativeData = var$1;
},
cgxwi_IDLBase_dispose = $this => {
    cgxwi_IDLNativeData_dispose($this.$nativeData);
},
cgxwi_IDLBase__clinit_ = () => {
    cgxwi_IDLBase_ENABLE_LOGGING = 1;
};
function cgxw_JInstance() {
    cgxwi_IDLBase.call(this);
    this.$JSurface_TEMP_GEN_0 = null;
}
let cgxw_JInstance_T_01 = null,
cgxw_JInstance_T_02 = null,
cgxw_JInstance_T_03 = null,
cgxw_JInstance_deleteNative = $this => {
    cgxw_JInstance_internal_native_deleteNative$js_body$_6(Long_lo($this.$nativeData.$cPointer));
},
cgxw_JInstance__clinit_ = () => {
    let var$1;
    var$1 = new cgxw_JInstance;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JInstance_T_01 = var$1;
    var$1 = new cgxw_JInstance;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JInstance_T_02 = var$1;
    var$1 = new cgxw_JInstance;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JInstance_T_03 = var$1;
},
cgxw_JInstance_internal_native_create$js_body$_1 = () => {
    var jsObj = new jWebGPU.JInstance();
    return jWebGPU.getPointer(jsObj);
},
cgxw_JInstance_internal_native_deleteNative$js_body$_6 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JInstance);
    jWebGPU.destroy(jsObj);
},
cgxw_JInstance_internal_native_IsValid$js_body$_8 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JInstance);
    var returnedJSObj = jsObj.IsValid();
    return returnedJSObj;
},
cgxw_JInstance_internal_native_RequestAdapter$js_body$_12 = (var$1, var$2, var$3, var$4) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JInstance);
    jsObj.RequestAdapter(var$2, var$3, var$4);
},
cgxw_JInstance_internal_native_CreateWebSurface$js_body$_14 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JInstance);
    var returnedJSObj = jsObj.CreateWebSurface(var$2);
    if (!returnedJSObj.hasOwnProperty('ptr')) return 0;
    return jWebGPU.getPointer(returnedJSObj);
},
cgxw_JInstance_internal_native_ProcessEvents$js_body$_20 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JInstance);
    jsObj.ProcessEvents();
};
function cgxwi_IDLNativeData() {
    let a = this; jl_Object.call(a);
    a.$idlBase = null;
    a.$cPointer = Long_ZERO;
    a.$cMemOwn = 0;
    a.$disposed = 0;
}
let cgxwi_IDLNativeData_reset = ($this, var$1, var$2) => {
    cgxwi_IDLNativeData_dispose($this);
    $this.$cMemOwn = var$2;
    $this.$cPointer = var$1;
    $this.$disposed = 0;
},
cgxwi_IDLNativeData_getCPointer = $this => {
    return $this.$cPointer;
},
cgxwi_IDLNativeData_dispose = $this => {
    let var$1, var$2;
    if ($this.$cMemOwn) {
        if ($this.$disposed) {
            if (cgxwi_IDLBase_ENABLE_LOGGING) {
                var$1 = cgxwi_IDLNativeData_toString($this);
                var$2 = jl_StringBuilder__init_();
                jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$2, $rt_s(51)), var$1), $rt_s(52));
                cgxwi_IDLNativeData_error($rt_s(53), jl_StringBuilder_toString(var$2));
            }
        } else if (Long_ne($this.$cPointer, Long_ZERO)) {
            $this.$disposed = 1;
            $this.$idlBase.$deleteNative();
            $this.$cPointer = Long_ZERO;
        } else if (cgxwi_IDLBase_ENABLE_LOGGING) {
            var$1 = cgxwi_IDLNativeData_toString($this);
            var$2 = jl_StringBuilder__init_();
            jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$2, $rt_s(51)), var$1), $rt_s(54));
            cgxwi_IDLNativeData_error($rt_s(53), jl_StringBuilder_toString(var$2));
        }
    }
},
cgxwi_IDLNativeData_toString = $this => {
    let var$1, var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10, var$11, var$12, var$13;
    var$1 = jl_Class_getSimpleName(jl_Object_getClass($this));
    var$2 = $this.$cPointer;
    var$3 = $this.$cMemOwn;
    var$4 = jl_StringBuilder__init_();
    var$1 = jl_StringBuilder_append1(jl_StringBuilder_append(var$4, var$1), 40);
    var$5 = var$1.$length;
    var$6 = var$1;
    var$7 = 1;
    if (Long_lt(var$2, Long_ZERO)) {
        var$7 = 0;
        var$2 = Long_neg(var$2);
    }
    a: {
        if (jl_Long_compareUnsigned(var$2, Long_fromInt(10)) < 0) {
            if (var$7)
                jl_AbstractStringBuilder_insertSpace(var$6, var$5, var$5 + 1 | 0);
            else {
                jl_AbstractStringBuilder_insertSpace(var$6, var$5, var$5 + 2 | 0);
                var$8 = var$6.$buffer.data;
                var$9 = var$5 + 1 | 0;
                var$8[var$5] = 45;
                var$5 = var$9;
            }
            var$6.$buffer.data[var$5] = jl_Character_forDigit(Long_lo(var$2), 10);
        } else {
            var$10 = 1;
            var$11 = Long_fromInt(1);
            var$12 = jl_Long_divideUnsigned(Long_fromInt(-1), Long_fromInt(10));
            b: {
                while (true) {
                    var$13 = Long_mul(var$11, Long_fromInt(10));
                    if (jl_Long_compareUnsigned(var$13, var$2) > 0) {
                        var$13 = var$11;
                        break b;
                    }
                    var$10 = var$10 + 1 | 0;
                    if (jl_Long_compareUnsigned(var$13, var$12) > 0)
                        break;
                    var$11 = var$13;
                }
            }
            if (!var$7)
                var$10 = var$10 + 1 | 0;
            jl_AbstractStringBuilder_insertSpace(var$6, var$5, var$5 + var$10 | 0);
            if (var$7)
                var$9 = var$5;
            else {
                var$8 = var$6.$buffer.data;
                var$9 = var$5 + 1 | 0;
                var$8[var$5] = 45;
            }
            while (true) {
                if (Long_eq(var$13, Long_ZERO))
                    break a;
                var$8 = var$6.$buffer.data;
                var$5 = var$9 + 1 | 0;
                var$8[var$9] = jl_Character_forDigit(Long_lo((jl_Long_divideUnsigned(var$2, var$13))), 10);
                var$2 = jl_Long_remainderUnsigned(var$2, var$13);
                var$13 = jl_Long_divideUnsigned(var$13, Long_fromInt(10));
                var$9 = var$5;
            }
        }
    }
    jl_StringBuilder_append1(jl_StringBuilder_append2(jl_StringBuilder_append1(var$1, 44), var$3), 41);
    return jl_StringBuilder_toString(var$4);
},
cgxwi_IDLNativeData_error = ($tag, $message) => {
    let var$3, var$4;
    var$3 = jl_System_err();
    var$4 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$4, $tag), $rt_s(3)), $message);
    $tag = jl_StringBuilder_toString(var$4);
    otcic_JsConsolePrintStream_println(var$3, $tag);
},
jl_StringIndexOutOfBoundsException = $rt_classWithoutFields(jl_IndexOutOfBoundsException),
cgxw_JCommandEncoderDescriptor = $rt_classWithoutFields(cgxwi_IDLBase),
cgxw_JCommandEncoderDescriptor_T_01 = null,
cgxw_JCommandEncoderDescriptor_T_02 = null,
cgxw_JCommandEncoderDescriptor_T_03 = null,
cgxw_JCommandEncoderDescriptor_deleteNative = $this => {
    cgxw_JCommandEncoderDescriptor_internal_native_deleteNative$js_body$_6(Long_lo($this.$nativeData.$cPointer));
},
cgxw_JCommandEncoderDescriptor_SetLabel = ($this, $value) => {
    cgxw_JCommandEncoderDescriptor_internal_native_SetLabel$js_body$_10(Long_lo($this.$nativeData.$cPointer), $rt_ustr($value));
},
cgxw_JCommandEncoderDescriptor__clinit_ = () => {
    let var$1;
    var$1 = new cgxw_JCommandEncoderDescriptor;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JCommandEncoderDescriptor_T_01 = var$1;
    var$1 = new cgxw_JCommandEncoderDescriptor;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JCommandEncoderDescriptor_T_02 = var$1;
    var$1 = new cgxw_JCommandEncoderDescriptor;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JCommandEncoderDescriptor_T_03 = var$1;
},
cgxw_JCommandEncoderDescriptor_internal_native_create$js_body$_1 = () => {
    var jsObj = new jWebGPU.JCommandEncoderDescriptor();
    return jWebGPU.getPointer(jsObj);
},
cgxw_JCommandEncoderDescriptor_internal_native_deleteNative$js_body$_6 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JCommandEncoderDescriptor);
    jWebGPU.destroy(jsObj);
},
cgxw_JCommandEncoderDescriptor_internal_native_SetLabel$js_body$_10 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JCommandEncoderDescriptor);
    jsObj.SetLabel(var$2);
},
cgxw_JRenderPassDescriptor = $rt_classWithoutFields(cgxwi_IDLBase),
cgxw_JRenderPassDescriptor_T_01 = null,
cgxw_JRenderPassDescriptor_T_02 = null,
cgxw_JRenderPassDescriptor_T_03 = null,
cgxw_JRenderPassDescriptor__init_ = $this => {
    let var$1;
    cgxwi_IDLBase__init_($this);
    var$1 = cgxw_JRenderPassDescriptor_internal_native_create$js_body$_1();
    cgxwi_IDLNativeData_reset($this.$nativeData, Long_fromInt(var$1), 1);
},
cgxw_JRenderPassDescriptor__init_0 = () => {
    let var_0 = new cgxw_JRenderPassDescriptor();
    cgxw_JRenderPassDescriptor__init_(var_0);
    return var_0;
},
cgxw_JRenderPassDescriptor_deleteNative = $this => {
    cgxw_JRenderPassDescriptor_internal_native_deleteNative$js_body$_6(Long_lo($this.$nativeData.$cPointer));
},
cgxw_JRenderPassDescriptor_SetColorAttachmentCount = ($this, $size) => {
    cgxw_JRenderPassDescriptor_internal_native_SetColorAttachmentCount$js_body$_12(Long_lo($this.$nativeData.$cPointer), $size);
},
cgxw_JRenderPassDescriptor_SetColorAttachments = ($this, $colorAttachment) => {
    let var$2, var$3;
    var$2 = Long_lo($this.$nativeData.$cPointer);
    var$3 = Long_lo(($colorAttachment === null ? Long_ZERO : $colorAttachment.$nativeData.$cPointer));
    cgxw_JRenderPassDescriptor_internal_native_SetColorAttachments$js_body$_14(var$2, var$3);
},
cgxw_JRenderPassDescriptor_SetDepthStencilAttachment = ($this, $attachment) => {
    let var$2, var$3;
    var$2 = Long_lo($this.$nativeData.$cPointer);
    var$3 = Long_lo(($attachment === null ? Long_ZERO : $attachment.$nativeData.$cPointer));
    cgxw_JRenderPassDescriptor_internal_native_SetDepthStencilAttachment$js_body$_16(var$2, var$3);
},
cgxw_JRenderPassDescriptor_SetTimestampWrites = ($this, $timestampWrites) => {
    let var$2, var$3;
    var$2 = Long_lo($this.$nativeData.$cPointer);
    var$3 = Long_lo(($timestampWrites === null ? Long_ZERO : $timestampWrites.$nativeData.$cPointer));
    cgxw_JRenderPassDescriptor_internal_native_SetTimestampWrites$js_body$_18(var$2, var$3);
},
cgxw_JRenderPassDescriptor__clinit_ = () => {
    let var$1;
    var$1 = new cgxw_JRenderPassDescriptor;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JRenderPassDescriptor_T_01 = var$1;
    var$1 = new cgxw_JRenderPassDescriptor;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JRenderPassDescriptor_T_02 = var$1;
    var$1 = new cgxw_JRenderPassDescriptor;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JRenderPassDescriptor_T_03 = var$1;
},
cgxw_JRenderPassDescriptor_internal_native_create$js_body$_1 = () => {
    var jsObj = new jWebGPU.JRenderPassDescriptor();
    return jWebGPU.getPointer(jsObj);
},
cgxw_JRenderPassDescriptor_internal_native_deleteNative$js_body$_6 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JRenderPassDescriptor);
    jWebGPU.destroy(jsObj);
},
cgxw_JRenderPassDescriptor_internal_native_SetColorAttachmentCount$js_body$_12 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JRenderPassDescriptor);
    jsObj.SetColorAttachmentCount(var$2);
},
cgxw_JRenderPassDescriptor_internal_native_SetColorAttachments$js_body$_14 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JRenderPassDescriptor);
    jsObj.SetColorAttachments(var$2);
},
cgxw_JRenderPassDescriptor_internal_native_SetDepthStencilAttachment$js_body$_16 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JRenderPassDescriptor);
    jsObj.SetDepthStencilAttachment(var$2);
},
cgxw_JRenderPassDescriptor_internal_native_SetTimestampWrites$js_body$_18 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JRenderPassDescriptor);
    jsObj.SetTimestampWrites(var$2);
};
function cgxw_JRenderPassColorAttachment() {
    cgxwi_IDLBase.call(this);
    this.$JColor_TEMP_GEN_0 = null;
}
let cgxw_JRenderPassColorAttachment_T_01 = null,
cgxw_JRenderPassColorAttachment_T_02 = null,
cgxw_JRenderPassColorAttachment_T_03 = null,
cgxw_JRenderPassColorAttachment__init_0 = $this => {
    let var$1;
    cgxwi_IDLBase__init_($this);
    var$1 = cgxw_JRenderPassColorAttachment_internal_native_create$js_body$_1();
    cgxwi_IDLNativeData_reset($this.$nativeData, Long_fromInt(var$1), 1);
},
cgxw_JRenderPassColorAttachment__init_ = () => {
    let var_0 = new cgxw_JRenderPassColorAttachment();
    cgxw_JRenderPassColorAttachment__init_0(var_0);
    return var_0;
},
cgxw_JRenderPassColorAttachment_deleteNative = $this => {
    cgxw_JRenderPassColorAttachment_internal_native_deleteNative$js_body$_6(Long_lo($this.$nativeData.$cPointer));
},
cgxw_JRenderPassColorAttachment_SetView = ($this, $textureView) => {
    let var$2, var$3;
    var$2 = Long_lo($this.$nativeData.$cPointer);
    var$3 = Long_lo(($textureView === null ? Long_ZERO : $textureView.$nativeData.$cPointer));
    cgxw_JRenderPassColorAttachment_internal_native_SetView$js_body$_10(var$2, var$3);
},
cgxw_JRenderPassColorAttachment_SetResolveTarget = ($this, $textureView) => {
    let var$2, var$3;
    var$2 = Long_lo($this.$nativeData.$cPointer);
    var$3 = Long_lo(($textureView === null ? Long_ZERO : $textureView.$nativeData.$cPointer));
    cgxw_JRenderPassColorAttachment_internal_native_SetResolveTarget$js_body$_12(var$2, var$3);
},
cgxw_JRenderPassColorAttachment_SetLoadOp = ($this, $loadOp) => {
    let var$2, var$3;
    var$2 = Long_lo($this.$nativeData.$cPointer);
    var$3 = Long_lo(Long_fromInt($loadOp === null ? 0 : $loadOp.$value7));
    cgxw_JRenderPassColorAttachment_internal_native_SetLoadOp$js_body$_14(var$2, var$3);
},
cgxw_JRenderPassColorAttachment_SetStoreOp = ($this, $storeOp) => {
    let var$2, var$3;
    var$2 = Long_lo($this.$nativeData.$cPointer);
    var$3 = Long_lo(Long_fromInt($storeOp === null ? 0 : $storeOp.$value5));
    cgxw_JRenderPassColorAttachment_internal_native_SetStoreOp$js_body$_16(var$2, var$3);
},
cgxw_JRenderPassColorAttachment_GetClearValue = $this => {
    let $pointer, var$2;
    $pointer = cgxw_JRenderPassColorAttachment_internal_native_GetClearValue$js_body$_18(Long_lo($this.$nativeData.$cPointer));
    if (!$pointer)
        return null;
    if ($this.$JColor_TEMP_GEN_0 === null) {
        var$2 = new cgxw_JColor;
        cgxwi_IDLBase__init_(var$2);
        $this.$JColor_TEMP_GEN_0 = var$2;
    }
    cgxwi_IDLNativeData_reset($this.$JColor_TEMP_GEN_0.$nativeData, Long_fromInt($pointer), 0);
    return $this.$JColor_TEMP_GEN_0;
},
cgxw_JRenderPassColorAttachment__clinit_ = () => {
    let var$1;
    var$1 = new cgxw_JRenderPassColorAttachment;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JRenderPassColorAttachment_T_01 = var$1;
    var$1 = new cgxw_JRenderPassColorAttachment;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JRenderPassColorAttachment_T_02 = var$1;
    var$1 = new cgxw_JRenderPassColorAttachment;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JRenderPassColorAttachment_T_03 = var$1;
},
cgxw_JRenderPassColorAttachment_internal_native_create$js_body$_1 = () => {
    var jsObj = new jWebGPU.JRenderPassColorAttachment();
    return jWebGPU.getPointer(jsObj);
},
cgxw_JRenderPassColorAttachment_internal_native_deleteNative$js_body$_6 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JRenderPassColorAttachment);
    jWebGPU.destroy(jsObj);
},
cgxw_JRenderPassColorAttachment_internal_native_SetView$js_body$_10 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JRenderPassColorAttachment);
    jsObj.SetView(var$2);
},
cgxw_JRenderPassColorAttachment_internal_native_SetResolveTarget$js_body$_12 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JRenderPassColorAttachment);
    jsObj.SetResolveTarget(var$2);
},
cgxw_JRenderPassColorAttachment_internal_native_SetLoadOp$js_body$_14 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JRenderPassColorAttachment);
    jsObj.SetLoadOp(var$2);
},
cgxw_JRenderPassColorAttachment_internal_native_SetStoreOp$js_body$_16 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JRenderPassColorAttachment);
    jsObj.SetStoreOp(var$2);
},
cgxw_JRenderPassColorAttachment_internal_native_GetClearValue$js_body$_18 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JRenderPassColorAttachment);
    var returnedJSObj = jsObj.GetClearValue();
    if (!returnedJSObj.hasOwnProperty('ptr')) return 0;
    return jWebGPU.getPointer(returnedJSObj);
},
cgxwi_IDLEnum = $rt_classWithoutFields(0);
function cgxw_WGPULoadOp() {
    jl_Enum.call(this);
    this.$value7 = 0;
}
let cgxw_WGPULoadOp_CUSTOM = null,
cgxw_WGPULoadOp_Undefined = null,
cgxw_WGPULoadOp_Load = null,
cgxw_WGPULoadOp_Clear = null,
cgxw_WGPULoadOp_Force32 = null,
cgxw_WGPULoadOp_MAP = null,
cgxw_WGPULoadOp_$VALUES = null,
cgxw_WGPULoadOp_$callClinit = () => {
    cgxw_WGPULoadOp_$callClinit = $rt_eraseClinit(cgxw_WGPULoadOp);
    cgxw_WGPULoadOp__clinit_();
},
cgxw_WGPULoadOp__init_0 = ($this, var$1, var$2, $value) => {
    cgxw_WGPULoadOp_$callClinit();
    jl_Enum__init_($this, var$1, var$2);
    $this.$value7 = $value;
},
cgxw_WGPULoadOp__init_ = (var_0, var_1, var_2) => {
    let var_3 = new cgxw_WGPULoadOp();
    cgxw_WGPULoadOp__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
cgxw_WGPULoadOp__clinit_ = () => {
    let $value, var$2, var$3, var$4, var$5, var$6, var$7;
    cgxw_WGPULoadOp_CUSTOM = cgxw_WGPULoadOp__init_($rt_s(55), 0, 0);
    cgxw_WGPULoadOp_Undefined = cgxw_WGPULoadOp__init_($rt_s(56), 1, jWebGPU.WGPULoadOp_Undefined);
    cgxw_WGPULoadOp_Load = cgxw_WGPULoadOp__init_($rt_s(57), 2, jWebGPU.WGPULoadOp_Load);
    cgxw_WGPULoadOp_Clear = cgxw_WGPULoadOp__init_($rt_s(58), 3, jWebGPU.WGPULoadOp_Clear);
    $value = cgxw_WGPULoadOp__init_($rt_s(59), 4, jWebGPU.WGPULoadOp_Force32);
    cgxw_WGPULoadOp_Force32 = $value;
    var$2 = $rt_createArray(cgxw_WGPULoadOp, 5);
    var$3 = var$2.data;
    var$3[0] = cgxw_WGPULoadOp_CUSTOM;
    var$3[1] = cgxw_WGPULoadOp_Undefined;
    var$3[2] = cgxw_WGPULoadOp_Load;
    var$3[3] = cgxw_WGPULoadOp_Clear;
    var$3[4] = $value;
    cgxw_WGPULoadOp_$VALUES = var$2;
    cgxw_WGPULoadOp_MAP = ju_HashMap__init_();
    var$2 = (cgxw_WGPULoadOp_$VALUES.$clone0()).data;
    var$4 = var$2.length;
    var$5 = 0;
    while (var$5 < var$4) {
        $value = var$2[var$5];
        if ($value !== cgxw_WGPULoadOp_CUSTOM) {
            var$6 = cgxw_WGPULoadOp_MAP;
            var$7 = jl_Integer_valueOf($value.$value7);
            ju_HashMap_put(var$6, var$7, $value);
        }
        var$5 = var$5 + 1 | 0;
    }
};
function cgxw_WGPUStoreOp() {
    jl_Enum.call(this);
    this.$value5 = 0;
}
let cgxw_WGPUStoreOp_CUSTOM = null,
cgxw_WGPUStoreOp_Undefined = null,
cgxw_WGPUStoreOp_Store = null,
cgxw_WGPUStoreOp_Discard = null,
cgxw_WGPUStoreOp_Force32 = null,
cgxw_WGPUStoreOp_MAP = null,
cgxw_WGPUStoreOp_$VALUES = null,
cgxw_WGPUStoreOp_$callClinit = () => {
    cgxw_WGPUStoreOp_$callClinit = $rt_eraseClinit(cgxw_WGPUStoreOp);
    cgxw_WGPUStoreOp__clinit_();
},
cgxw_WGPUStoreOp__init_0 = ($this, var$1, var$2, $value) => {
    cgxw_WGPUStoreOp_$callClinit();
    jl_Enum__init_($this, var$1, var$2);
    $this.$value5 = $value;
},
cgxw_WGPUStoreOp__init_ = (var_0, var_1, var_2) => {
    let var_3 = new cgxw_WGPUStoreOp();
    cgxw_WGPUStoreOp__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
cgxw_WGPUStoreOp__clinit_ = () => {
    let $value, var$2, var$3, var$4, var$5, var$6, var$7;
    cgxw_WGPUStoreOp_CUSTOM = cgxw_WGPUStoreOp__init_($rt_s(55), 0, 0);
    cgxw_WGPUStoreOp_Undefined = cgxw_WGPUStoreOp__init_($rt_s(56), 1, jWebGPU.WGPUStoreOp_Undefined);
    cgxw_WGPUStoreOp_Store = cgxw_WGPUStoreOp__init_($rt_s(60), 2, jWebGPU.WGPUStoreOp_Store);
    cgxw_WGPUStoreOp_Discard = cgxw_WGPUStoreOp__init_($rt_s(61), 3, jWebGPU.WGPUStoreOp_Discard);
    $value = cgxw_WGPUStoreOp__init_($rt_s(59), 4, jWebGPU.WGPUStoreOp_Force32);
    cgxw_WGPUStoreOp_Force32 = $value;
    var$2 = $rt_createArray(cgxw_WGPUStoreOp, 5);
    var$3 = var$2.data;
    var$3[0] = cgxw_WGPUStoreOp_CUSTOM;
    var$3[1] = cgxw_WGPUStoreOp_Undefined;
    var$3[2] = cgxw_WGPUStoreOp_Store;
    var$3[3] = cgxw_WGPUStoreOp_Discard;
    var$3[4] = $value;
    cgxw_WGPUStoreOp_$VALUES = var$2;
    cgxw_WGPUStoreOp_MAP = ju_HashMap__init_();
    var$2 = (cgxw_WGPUStoreOp_$VALUES.$clone0()).data;
    var$4 = var$2.length;
    var$5 = 0;
    while (var$5 < var$4) {
        $value = var$2[var$5];
        if ($value !== cgxw_WGPUStoreOp_CUSTOM) {
            var$6 = cgxw_WGPUStoreOp_MAP;
            var$7 = jl_Integer_valueOf($value.$value5);
            ju_HashMap_put(var$6, var$7, $value);
        }
        var$5 = var$5 + 1 | 0;
    }
},
cgxw_JCommandBufferDescriptor = $rt_classWithoutFields(cgxwi_IDLBase),
cgxw_JCommandBufferDescriptor_T_01 = null,
cgxw_JCommandBufferDescriptor_T_02 = null,
cgxw_JCommandBufferDescriptor_T_03 = null,
cgxw_JCommandBufferDescriptor__init_0 = $this => {
    let $addr;
    cgxwi_IDLBase__init_($this);
    $addr = cgxw_JCommandBufferDescriptor_internal_native_create$js_body$_1();
    cgxwi_IDLNativeData_reset($this.$nativeData, Long_fromInt($addr), 1);
},
cgxw_JCommandBufferDescriptor__init_ = () => {
    let var_0 = new cgxw_JCommandBufferDescriptor();
    cgxw_JCommandBufferDescriptor__init_0(var_0);
    return var_0;
},
cgxw_JCommandBufferDescriptor_deleteNative = $this => {
    cgxw_JCommandBufferDescriptor_internal_native_deleteNative$js_body$_6(Long_lo($this.$nativeData.$cPointer));
},
cgxw_JCommandBufferDescriptor_SetNextInChain = ($this, $chainedStruct) => {
    let var$2, var$3;
    var$2 = Long_lo($this.$nativeData.$cPointer);
    var$3 = Long_lo(($chainedStruct === null ? Long_ZERO : $chainedStruct.$nativeData.$cPointer));
    cgxw_JCommandBufferDescriptor_internal_native_SetNextInChain$js_body$_10(var$2, var$3);
},
cgxw_JCommandBufferDescriptor_SetLabel = ($this, $value) => {
    cgxw_JCommandBufferDescriptor_internal_native_SetLabel$js_body$_12(Long_lo($this.$nativeData.$cPointer), $rt_ustr($value));
},
cgxw_JCommandBufferDescriptor__clinit_ = () => {
    let var$1;
    var$1 = new cgxw_JCommandBufferDescriptor;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JCommandBufferDescriptor_T_01 = var$1;
    var$1 = new cgxw_JCommandBufferDescriptor;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JCommandBufferDescriptor_T_02 = var$1;
    var$1 = new cgxw_JCommandBufferDescriptor;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JCommandBufferDescriptor_T_03 = var$1;
},
cgxw_JCommandBufferDescriptor_internal_native_create$js_body$_1 = () => {
    var jsObj = new jWebGPU.JCommandBufferDescriptor();
    return jWebGPU.getPointer(jsObj);
},
cgxw_JCommandBufferDescriptor_internal_native_deleteNative$js_body$_6 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JCommandBufferDescriptor);
    jWebGPU.destroy(jsObj);
},
cgxw_JCommandBufferDescriptor_internal_native_SetNextInChain$js_body$_10 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JCommandBufferDescriptor);
    jsObj.SetNextInChain(var$2);
},
cgxw_JCommandBufferDescriptor_internal_native_SetLabel$js_body$_12 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JCommandBufferDescriptor);
    jsObj.SetLabel(var$2);
},
cgxw_JWebGPU = $rt_classWithoutFields(cgxwi_IDLBase),
cgxw_JWebGPU_JRenderPipeline_TEMP_STATIC_GEN_0 = null,
cgxw_JWebGPU_T_01 = null,
cgxw_JWebGPU_T_02 = null,
cgxw_JWebGPU_T_03 = null,
cgxw_JWebGPU_deleteNative = $this => {
    cgxw_JWebGPU_internal_native_deleteNative$js_body$_4(Long_lo($this.$nativeData.$cPointer));
},
cgxw_JWebGPU_CreateRenderPipeline = ($device, $shaderSource, $surfaceFormat) => {
    let $pointer;
    $pointer = cgxw_JWebGPU_internal_native_CreateRenderPipeline$js_body$_6(Long_lo(($device === null ? Long_ZERO : $device.$nativeData.$cPointer)), $rt_ustr($shaderSource), Long_lo(Long_fromInt($surfaceFormat === null ? 0 : $surfaceFormat.$value)));
    if (!$pointer)
        return null;
    if (cgxw_JWebGPU_JRenderPipeline_TEMP_STATIC_GEN_0 === null) {
        $device = new cgxw_JRenderPipeline;
        cgxwi_IDLBase__init_($device);
        cgxw_JWebGPU_JRenderPipeline_TEMP_STATIC_GEN_0 = $device;
    }
    cgxwi_IDLNativeData_reset(cgxw_JWebGPU_JRenderPipeline_TEMP_STATIC_GEN_0.$nativeData, Long_fromInt($pointer), 0);
    return cgxw_JWebGPU_JRenderPipeline_TEMP_STATIC_GEN_0;
},
cgxw_JWebGPU_GetPlatformType = () => {
    let $value, var$2, var$3;
    $value = cgxw_JWebGPU_internal_native_GetPlatformType$js_body$_10();
    cgxw_JPlatformType_$callClinit();
    var$2 = cgxw_JPlatformType_MAP;
    var$3 = jl_Integer_valueOf($value);
    return ju_HashMap_get(var$2, var$3);
},
cgxw_JWebGPU__clinit_ = () => {
    let var$1;
    var$1 = new cgxw_JWebGPU;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JWebGPU_T_01 = var$1;
    var$1 = new cgxw_JWebGPU;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JWebGPU_T_02 = var$1;
    var$1 = new cgxw_JWebGPU;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JWebGPU_T_03 = var$1;
},
cgxw_JWebGPU_internal_native_deleteNative$js_body$_4 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JWebGPU);
    jWebGPU.destroy(jsObj);
},
cgxw_JWebGPU_internal_native_CreateRenderPipeline$js_body$_6 = (var$1, var$2, var$3) => {
    var returnedJSObj = jWebGPU.JWebGPU.prototype.CreateRenderPipeline(var$1, var$2, var$3);
    if (!returnedJSObj.hasOwnProperty('ptr')) return 0;
    return jWebGPU.getPointer(returnedJSObj);
},
cgxw_JWebGPU_internal_native_GetPlatformType$js_body$_10 = () => {
    var returnedJSObj = jWebGPU.JWebGPU.prototype.GetPlatformType();
    return returnedJSObj;
};
function cgxw_JPlatformType() {
    jl_Enum.call(this);
    this.$value16 = 0;
}
let cgxw_JPlatformType_CUSTOM = null,
cgxw_JPlatformType_WGPU_Windows = null,
cgxw_JPlatformType_WGPU_Mac = null,
cgxw_JPlatformType_WGPU_Linux = null,
cgxw_JPlatformType_WGPU_iOS = null,
cgxw_JPlatformType_WGPU_Android = null,
cgxw_JPlatformType_WGPU_Web = null,
cgxw_JPlatformType_WGPU_Unknown = null,
cgxw_JPlatformType_MAP = null,
cgxw_JPlatformType_$VALUES = null,
cgxw_JPlatformType_$callClinit = () => {
    cgxw_JPlatformType_$callClinit = $rt_eraseClinit(cgxw_JPlatformType);
    cgxw_JPlatformType__clinit_();
},
cgxw_JPlatformType__init_0 = ($this, var$1, var$2, var$3) => {
    cgxw_JPlatformType_$callClinit();
    jl_Enum__init_($this, var$1, var$2);
    $this.$value16 = var$3;
},
cgxw_JPlatformType__init_ = (var_0, var_1, var_2) => {
    let var_3 = new cgxw_JPlatformType();
    cgxw_JPlatformType__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
cgxw_JPlatformType__clinit_ = () => {
    let $value, var$2, var$3, var$4, var$5, var$6, var$7;
    cgxw_JPlatformType_CUSTOM = cgxw_JPlatformType__init_($rt_s(55), 0, 0);
    cgxw_JPlatformType_WGPU_Windows = cgxw_JPlatformType__init_($rt_s(62), 1, jWebGPU.WGPU_Windows);
    cgxw_JPlatformType_WGPU_Mac = cgxw_JPlatformType__init_($rt_s(63), 2, jWebGPU.WGPU_Mac);
    cgxw_JPlatformType_WGPU_Linux = cgxw_JPlatformType__init_($rt_s(64), 3, jWebGPU.WGPU_Linux);
    cgxw_JPlatformType_WGPU_iOS = cgxw_JPlatformType__init_($rt_s(65), 4, jWebGPU.WGPU_iOS);
    cgxw_JPlatformType_WGPU_Android = cgxw_JPlatformType__init_($rt_s(66), 5, jWebGPU.WGPU_Android);
    cgxw_JPlatformType_WGPU_Web = cgxw_JPlatformType__init_($rt_s(67), 6, jWebGPU.WGPU_Web);
    $value = cgxw_JPlatformType__init_($rt_s(68), 7, jWebGPU.WGPU_Unknown);
    cgxw_JPlatformType_WGPU_Unknown = $value;
    var$2 = $rt_createArray(cgxw_JPlatformType, 8);
    var$3 = var$2.data;
    var$3[0] = cgxw_JPlatformType_CUSTOM;
    var$3[1] = cgxw_JPlatformType_WGPU_Windows;
    var$3[2] = cgxw_JPlatformType_WGPU_Mac;
    var$3[3] = cgxw_JPlatformType_WGPU_Linux;
    var$3[4] = cgxw_JPlatformType_WGPU_iOS;
    var$3[5] = cgxw_JPlatformType_WGPU_Android;
    var$3[6] = cgxw_JPlatformType_WGPU_Web;
    var$3[7] = $value;
    cgxw_JPlatformType_$VALUES = var$2;
    cgxw_JPlatformType_MAP = ju_HashMap__init_();
    var$2 = (cgxw_JPlatformType_$VALUES.$clone0()).data;
    var$4 = var$2.length;
    var$5 = 0;
    while (var$5 < var$4) {
        $value = var$2[var$5];
        if ($value !== cgxw_JPlatformType_CUSTOM) {
            var$6 = cgxw_JPlatformType_MAP;
            var$7 = jl_Integer_valueOf($value.$value16);
            ju_HashMap_put(var$6, var$7, $value);
        }
        var$5 = var$5 + 1 | 0;
    }
},
cgxw_JSurfaceTexture = $rt_classWithoutFields(cgxwi_IDLBase),
cgxw_JSurfaceTexture_T_01 = null,
cgxw_JSurfaceTexture_T_02 = null,
cgxw_JSurfaceTexture_T_03 = null,
cgxw_JSurfaceTexture_deleteNative = $this => {
    cgxw_JSurfaceTexture_internal_native_deleteNative$js_body$_6(Long_lo($this.$nativeData.$cPointer));
},
cgxw_JSurfaceTexture__clinit_ = () => {
    let var$1;
    var$1 = new cgxw_JSurfaceTexture;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JSurfaceTexture_T_01 = var$1;
    var$1 = new cgxw_JSurfaceTexture;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JSurfaceTexture_T_02 = var$1;
    var$1 = new cgxw_JSurfaceTexture;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JSurfaceTexture_T_03 = var$1;
},
cgxw_JSurfaceTexture_internal_native_create$js_body$_1 = () => {
    var jsObj = new jWebGPU.JSurfaceTexture();
    return jWebGPU.getPointer(jsObj);
},
cgxw_JSurfaceTexture_internal_native_deleteNative$js_body$_6 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JSurfaceTexture);
    jWebGPU.destroy(jsObj);
},
cgxw_JSurfaceTexture_internal_native_GetTexture$js_body$_10 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JSurfaceTexture);
    jsObj.GetTexture(var$2);
},
cgxw_JTexture = $rt_classWithoutFields(cgxwi_IDLBase),
cgxw_JTexture_T_01 = null,
cgxw_JTexture_T_02 = null,
cgxw_JTexture_T_03 = null,
cgxw_JTexture_deleteNative = $this => {
    cgxw_JTexture_internal_native_deleteNative$js_body$_6(Long_lo($this.$nativeData.$cPointer));
},
cgxw_JTexture_CreateView = ($this, $textureViewDescriptor, $textureView) => {
    let var$3, var$4, var$5;
    var$3 = Long_lo($this.$nativeData.$cPointer);
    var$4 = Long_lo(($textureViewDescriptor === null ? Long_ZERO : $textureViewDescriptor.$nativeData.$cPointer));
    var$5 = Long_lo(($textureView === null ? Long_ZERO : $textureView.$nativeData.$cPointer));
    cgxw_JTexture_internal_native_CreateView$js_body$_10(var$3, var$4, var$5);
},
cgxw_JTexture__clinit_ = () => {
    let var$1;
    var$1 = new cgxw_JTexture;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JTexture_T_01 = var$1;
    var$1 = new cgxw_JTexture;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JTexture_T_02 = var$1;
    var$1 = new cgxw_JTexture;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JTexture_T_03 = var$1;
},
cgxw_JTexture_internal_native_create$js_body$_1 = () => {
    var jsObj = new jWebGPU.JTexture();
    return jWebGPU.getPointer(jsObj);
},
cgxw_JTexture_internal_native_deleteNative$js_body$_6 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JTexture);
    jWebGPU.destroy(jsObj);
},
cgxw_JTexture_internal_native_CreateView$js_body$_10 = (var$1, var$2, var$3) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JTexture);
    jsObj.CreateView(var$2, var$3);
},
cgxw_JTexture_internal_native_GetFormat$js_body$_12 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JTexture);
    var returnedJSObj = jsObj.GetFormat();
    return returnedJSObj;
},
cgxw_JTextureView = $rt_classWithoutFields(cgxwi_IDLBase),
cgxw_JTextureView_T_01 = null,
cgxw_JTextureView_T_02 = null,
cgxw_JTextureView_T_03 = null,
cgxw_JTextureView_deleteNative = $this => {
    cgxw_JTextureView_internal_native_deleteNative$js_body$_6(Long_lo($this.$nativeData.$cPointer));
},
cgxw_JTextureView_Release = $this => {
    cgxw_JTextureView_internal_native_Release$js_body$_10(Long_lo($this.$nativeData.$cPointer));
},
cgxw_JTextureView__clinit_ = () => {
    let var$1;
    var$1 = new cgxw_JTextureView;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JTextureView_T_01 = var$1;
    var$1 = new cgxw_JTextureView;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JTextureView_T_02 = var$1;
    var$1 = new cgxw_JTextureView;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JTextureView_T_03 = var$1;
},
cgxw_JTextureView_internal_native_create$js_body$_1 = () => {
    var jsObj = new jWebGPU.JTextureView();
    return jWebGPU.getPointer(jsObj);
},
cgxw_JTextureView_internal_native_deleteNative$js_body$_6 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JTextureView);
    jWebGPU.destroy(jsObj);
},
cgxw_JTextureView_internal_native_Release$js_body$_10 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JTextureView);
    jsObj.Release();
},
cgxw_JCommandEncoder = $rt_classWithoutFields(cgxwi_IDLBase),
cgxw_JCommandEncoder_T_01 = null,
cgxw_JCommandEncoder_T_02 = null,
cgxw_JCommandEncoder_T_03 = null,
cgxw_JCommandEncoder_deleteNative = $this => {
    cgxw_JCommandEncoder_internal_native_deleteNative$js_body$_6(Long_lo($this.$nativeData.$cPointer));
},
cgxw_JCommandEncoder_Release = $this => {
    cgxw_JCommandEncoder_internal_native_Release$js_body$_10(Long_lo($this.$nativeData.$cPointer));
};
let cgxw_JCommandEncoder_BeginRenderPass = ($this, $renderPassDescriptor, $renderPassEncoder) => {
    let var$3, var$4, var$5;
    var$3 = Long_lo($this.$nativeData.$cPointer);
    var$4 = Long_lo(($renderPassDescriptor === null ? Long_ZERO : $renderPassDescriptor.$nativeData.$cPointer));
    var$5 = Long_lo(($renderPassEncoder === null ? Long_ZERO : $renderPassEncoder.$nativeData.$cPointer));
    cgxw_JCommandEncoder_internal_native_BeginRenderPass$js_body$_12(var$3, var$4, var$5);
},
cgxw_JCommandEncoder_Finish = ($this, $descriptor, $commandBuffer) => {
    let var$3, var$4, var$5;
    var$3 = Long_lo($this.$nativeData.$cPointer);
    var$4 = Long_lo(($descriptor === null ? Long_ZERO : $descriptor.$nativeData.$cPointer));
    var$5 = Long_lo(($commandBuffer === null ? Long_ZERO : $commandBuffer.$nativeData.$cPointer));
    cgxw_JCommandEncoder_internal_native_Finish$js_body$_18(var$3, var$4, var$5);
},
cgxw_JCommandEncoder__clinit_ = () => {
    let var$1;
    var$1 = new cgxw_JCommandEncoder;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JCommandEncoder_T_01 = var$1;
    var$1 = new cgxw_JCommandEncoder;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JCommandEncoder_T_02 = var$1;
    var$1 = new cgxw_JCommandEncoder;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JCommandEncoder_T_03 = var$1;
},
cgxw_JCommandEncoder_internal_native_create$js_body$_1 = () => {
    var jsObj = new jWebGPU.JCommandEncoder();
    return jWebGPU.getPointer(jsObj);
},
cgxw_JCommandEncoder_internal_native_deleteNative$js_body$_6 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JCommandEncoder);
    jWebGPU.destroy(jsObj);
},
cgxw_JCommandEncoder_internal_native_Release$js_body$_10 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JCommandEncoder);
    jsObj.Release();
},
cgxw_JCommandEncoder_internal_native_BeginRenderPass$js_body$_12 = (var$1, var$2, var$3) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JCommandEncoder);
    jsObj.BeginRenderPass(var$2, var$3);
},
cgxw_JCommandEncoder_internal_native_Finish$js_body$_18 = (var$1, var$2, var$3) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JCommandEncoder);
    jsObj.Finish(var$2, var$3);
},
cgxw_JRenderPassEncoder = $rt_classWithoutFields(cgxwi_IDLBase),
cgxw_JRenderPassEncoder_T_01 = null,
cgxw_JRenderPassEncoder_T_02 = null,
cgxw_JRenderPassEncoder_T_03 = null,
cgxw_JRenderPassEncoder_deleteNative = $this => {
    cgxw_JRenderPassEncoder_internal_native_deleteNative$js_body$_6(Long_lo($this.$nativeData.$cPointer));
},
cgxw_JRenderPassEncoder_Release = $this => {
    cgxw_JRenderPassEncoder_internal_native_Release$js_body$_10(Long_lo($this.$nativeData.$cPointer));
},
cgxw_JRenderPassEncoder_End = $this => {
    cgxw_JRenderPassEncoder_internal_native_End$js_body$_12(Long_lo($this.$nativeData.$cPointer));
},
cgxw_JRenderPassEncoder_SetPipeline = ($this, $renderPipeline) => {
    let var$2, var$3;
    var$2 = Long_lo($this.$nativeData.$cPointer);
    var$3 = Long_lo(($renderPipeline === null ? Long_ZERO : $renderPipeline.$nativeData.$cPointer));
    cgxw_JRenderPassEncoder_internal_native_SetPipeline$js_body$_14(var$2, var$3);
},
cgxw_JRenderPassEncoder_Draw = ($this, $vertexCount, $instanceCount, $firstVertex, $firstInstance) => {
    cgxw_JRenderPassEncoder_internal_native_Draw$js_body$_18(Long_lo($this.$nativeData.$cPointer), $vertexCount, $instanceCount, $firstVertex, $firstInstance);
},
cgxw_JRenderPassEncoder__clinit_ = () => {
    let var$1;
    var$1 = new cgxw_JRenderPassEncoder;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JRenderPassEncoder_T_01 = var$1;
    var$1 = new cgxw_JRenderPassEncoder;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JRenderPassEncoder_T_02 = var$1;
    var$1 = new cgxw_JRenderPassEncoder;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JRenderPassEncoder_T_03 = var$1;
},
cgxw_JRenderPassEncoder_internal_native_create$js_body$_1 = () => {
    var jsObj = new jWebGPU.JRenderPassEncoder();
    return jWebGPU.getPointer(jsObj);
},
cgxw_JRenderPassEncoder_internal_native_deleteNative$js_body$_6 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JRenderPassEncoder);
    jWebGPU.destroy(jsObj);
},
cgxw_JRenderPassEncoder_internal_native_Release$js_body$_10 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JRenderPassEncoder);
    jsObj.Release();
},
cgxw_JRenderPassEncoder_internal_native_End$js_body$_12 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JRenderPassEncoder);
    jsObj.End();
},
cgxw_JRenderPassEncoder_internal_native_SetPipeline$js_body$_14 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JRenderPassEncoder);
    jsObj.SetPipeline(var$2);
},
cgxw_JRenderPassEncoder_internal_native_Draw$js_body$_18 = (var$1, var$2, var$3, var$4, var$5) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JRenderPassEncoder);
    jsObj.Draw(var$2, var$3, var$4, var$5);
},
cgxw_JCommandBuffer = $rt_classWithoutFields(cgxwi_IDLBase),
cgxw_JCommandBuffer_T_01 = null,
cgxw_JCommandBuffer_T_02 = null,
cgxw_JCommandBuffer_T_03 = null,
cgxw_JCommandBuffer_deleteNative = $this => {
    cgxw_JCommandBuffer_internal_native_deleteNative$js_body$_6(Long_lo($this.$nativeData.$cPointer));
},
cgxw_JCommandBuffer_Release = $this => {
    cgxw_JCommandBuffer_internal_native_Release$js_body$_10(Long_lo($this.$nativeData.$cPointer));
},
cgxw_JCommandBuffer__clinit_ = () => {
    let var$1;
    var$1 = new cgxw_JCommandBuffer;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JCommandBuffer_T_01 = var$1;
    var$1 = new cgxw_JCommandBuffer;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JCommandBuffer_T_02 = var$1;
    var$1 = new cgxw_JCommandBuffer;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JCommandBuffer_T_03 = var$1;
},
cgxw_JCommandBuffer_internal_native_create$js_body$_1 = () => {
    var jsObj = new jWebGPU.JCommandBuffer();
    return jWebGPU.getPointer(jsObj);
},
cgxw_JCommandBuffer_internal_native_deleteNative$js_body$_6 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JCommandBuffer);
    jWebGPU.destroy(jsObj);
},
cgxw_JCommandBuffer_internal_native_Release$js_body$_10 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JCommandBuffer);
    jsObj.Release();
},
cgxw_JSurfaceCapabilities = $rt_classWithoutFields(cgxwi_IDLBase),
cgxw_JSurfaceCapabilities_T_01 = null,
cgxw_JSurfaceCapabilities_T_02 = null,
cgxw_JSurfaceCapabilities_T_03 = null,
cgxw_JSurfaceCapabilities_deleteNative = $this => {
    cgxw_JSurfaceCapabilities_internal_native_deleteNative$js_body$_6(Long_lo($this.$nativeData.$cPointer));
},
cgxw_JSurfaceCapabilities__clinit_ = () => {
    let var$1;
    var$1 = new cgxw_JSurfaceCapabilities;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JSurfaceCapabilities_T_01 = var$1;
    var$1 = new cgxw_JSurfaceCapabilities;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JSurfaceCapabilities_T_02 = var$1;
    var$1 = new cgxw_JSurfaceCapabilities;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JSurfaceCapabilities_T_03 = var$1;
},
cgxw_JSurfaceCapabilities_internal_native_create$js_body$_1 = () => {
    var jsObj = new jWebGPU.JSurfaceCapabilities();
    return jWebGPU.getPointer(jsObj);
},
cgxw_JSurfaceCapabilities_internal_native_deleteNative$js_body$_6 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JSurfaceCapabilities);
    jWebGPU.destroy(jsObj);
},
cgxw_JSurfaceCapabilities_internal_native_GetFormats$js_body$_8 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JSurfaceCapabilities);
    var returnedJSObj = jsObj.GetFormats(var$2);
    return returnedJSObj;
},
cgxw_JTextureViewDescriptor = $rt_classWithoutFields(cgxwi_IDLBase),
cgxw_JTextureViewDescriptor_T_01 = null,
cgxw_JTextureViewDescriptor_T_02 = null,
cgxw_JTextureViewDescriptor_T_03 = null,
cgxw_JTextureViewDescriptor_deleteNative = $this => {
    cgxw_JTextureViewDescriptor_internal_native_deleteNative$js_body$_6(Long_lo($this.$nativeData.$cPointer));
},
cgxw_JTextureViewDescriptor__clinit_ = () => {
    let var$1;
    var$1 = new cgxw_JTextureViewDescriptor;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JTextureViewDescriptor_T_01 = var$1;
    var$1 = new cgxw_JTextureViewDescriptor;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JTextureViewDescriptor_T_02 = var$1;
    var$1 = new cgxw_JTextureViewDescriptor;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JTextureViewDescriptor_T_03 = var$1;
},
cgxw_JTextureViewDescriptor_internal_native_create$js_body$_1 = () => {
    var jsObj = new jWebGPU.JTextureViewDescriptor();
    return jWebGPU.getPointer(jsObj);
};
let cgxw_JTextureViewDescriptor_internal_native_deleteNative$js_body$_6 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JTextureViewDescriptor);
    jWebGPU.destroy(jsObj);
},
cgxw_JTextureViewDescriptor_internal_native_SetLabel$js_body$_10 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JTextureViewDescriptor);
    jsObj.SetLabel(var$2);
},
cgxw_JTextureViewDescriptor_internal_native_SetFormat$js_body$_12 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JTextureViewDescriptor);
    jsObj.SetFormat(var$2);
},
cgxw_JTextureViewDescriptor_internal_native_SetDimension$js_body$_14 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JTextureViewDescriptor);
    jsObj.SetDimension(var$2);
},
cgxw_JTextureViewDescriptor_internal_native_SetBaseMipLevel$js_body$_16 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JTextureViewDescriptor);
    jsObj.SetBaseMipLevel(var$2);
},
cgxw_JTextureViewDescriptor_internal_native_SetMipLevelCount$js_body$_18 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JTextureViewDescriptor);
    jsObj.SetMipLevelCount(var$2);
},
cgxw_JTextureViewDescriptor_internal_native_SetBaseArrayLayer$js_body$_20 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JTextureViewDescriptor);
    jsObj.SetBaseArrayLayer(var$2);
},
cgxw_JTextureViewDescriptor_internal_native_SetArrayLayerCount$js_body$_22 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JTextureViewDescriptor);
    jsObj.SetArrayLayerCount(var$2);
},
cgxw_JTextureViewDescriptor_internal_native_SetAspect$js_body$_24 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JTextureViewDescriptor);
    jsObj.SetAspect(var$2);
};
function cgxw_WGPUTextureViewDimension() {
    jl_Enum.call(this);
    this.$value9 = 0;
}
let cgxw_WGPUTextureViewDimension_CUSTOM = null,
cgxw_WGPUTextureViewDimension_Undefined = null,
cgxw_WGPUTextureViewDimension__1D = null,
cgxw_WGPUTextureViewDimension__2D = null,
cgxw_WGPUTextureViewDimension__2DArray = null,
cgxw_WGPUTextureViewDimension_Cube = null,
cgxw_WGPUTextureViewDimension_CubeArray = null,
cgxw_WGPUTextureViewDimension__3D = null,
cgxw_WGPUTextureViewDimension_Force32 = null,
cgxw_WGPUTextureViewDimension_MAP = null,
cgxw_WGPUTextureViewDimension_$VALUES = null,
cgxw_WGPUTextureViewDimension_$callClinit = () => {
    cgxw_WGPUTextureViewDimension_$callClinit = $rt_eraseClinit(cgxw_WGPUTextureViewDimension);
    cgxw_WGPUTextureViewDimension__clinit_();
},
cgxw_WGPUTextureViewDimension__init_0 = ($this, var$1, var$2, $value) => {
    cgxw_WGPUTextureViewDimension_$callClinit();
    jl_Enum__init_($this, var$1, var$2);
    $this.$value9 = $value;
},
cgxw_WGPUTextureViewDimension__init_ = (var_0, var_1, var_2) => {
    let var_3 = new cgxw_WGPUTextureViewDimension();
    cgxw_WGPUTextureViewDimension__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
cgxw_WGPUTextureViewDimension__clinit_ = () => {
    let $value, var$2, var$3, var$4, var$5, var$6, var$7;
    cgxw_WGPUTextureViewDimension_CUSTOM = cgxw_WGPUTextureViewDimension__init_($rt_s(55), 0, 0);
    cgxw_WGPUTextureViewDimension_Undefined = cgxw_WGPUTextureViewDimension__init_($rt_s(56), 1, jWebGPU.WGPUTextureViewDimension_Undefined);
    cgxw_WGPUTextureViewDimension__1D = cgxw_WGPUTextureViewDimension__init_($rt_s(69), 2, jWebGPU.WGPUTextureViewDimension_1D);
    cgxw_WGPUTextureViewDimension__2D = cgxw_WGPUTextureViewDimension__init_($rt_s(70), 3, jWebGPU.WGPUTextureViewDimension_2D);
    cgxw_WGPUTextureViewDimension__2DArray = cgxw_WGPUTextureViewDimension__init_($rt_s(71), 4, jWebGPU.WGPUTextureViewDimension_2DArray);
    cgxw_WGPUTextureViewDimension_Cube = cgxw_WGPUTextureViewDimension__init_($rt_s(72), 5, jWebGPU.WGPUTextureViewDimension_Cube);
    cgxw_WGPUTextureViewDimension_CubeArray = cgxw_WGPUTextureViewDimension__init_($rt_s(73), 6, jWebGPU.WGPUTextureViewDimension_CubeArray);
    cgxw_WGPUTextureViewDimension__3D = cgxw_WGPUTextureViewDimension__init_($rt_s(74), 7, jWebGPU.WGPUTextureViewDimension_3D);
    $value = cgxw_WGPUTextureViewDimension__init_($rt_s(59), 8, jWebGPU.WGPUTextureViewDimension_Force32);
    cgxw_WGPUTextureViewDimension_Force32 = $value;
    var$2 = $rt_createArray(cgxw_WGPUTextureViewDimension, 9);
    var$3 = var$2.data;
    var$3[0] = cgxw_WGPUTextureViewDimension_CUSTOM;
    var$3[1] = cgxw_WGPUTextureViewDimension_Undefined;
    var$3[2] = cgxw_WGPUTextureViewDimension__1D;
    var$3[3] = cgxw_WGPUTextureViewDimension__2D;
    var$3[4] = cgxw_WGPUTextureViewDimension__2DArray;
    var$3[5] = cgxw_WGPUTextureViewDimension_Cube;
    var$3[6] = cgxw_WGPUTextureViewDimension_CubeArray;
    var$3[7] = cgxw_WGPUTextureViewDimension__3D;
    var$3[8] = $value;
    cgxw_WGPUTextureViewDimension_$VALUES = var$2;
    cgxw_WGPUTextureViewDimension_MAP = ju_HashMap__init_();
    var$2 = (cgxw_WGPUTextureViewDimension_$VALUES.$clone0()).data;
    var$4 = var$2.length;
    var$5 = 0;
    while (var$5 < var$4) {
        $value = var$2[var$5];
        if ($value !== cgxw_WGPUTextureViewDimension_CUSTOM) {
            var$6 = cgxw_WGPUTextureViewDimension_MAP;
            var$7 = jl_Integer_valueOf($value.$value9);
            ju_HashMap_put(var$6, var$7, $value);
        }
        var$5 = var$5 + 1 | 0;
    }
};
function cgxw_WGPUTextureAspect() {
    jl_Enum.call(this);
    this.$value10 = 0;
}
let cgxw_WGPUTextureAspect_CUSTOM = null,
cgxw_WGPUTextureAspect_Undefined = null,
cgxw_WGPUTextureAspect_All = null,
cgxw_WGPUTextureAspect_StencilOnly = null,
cgxw_WGPUTextureAspect_DepthOnly = null,
cgxw_WGPUTextureAspect_Force32 = null,
cgxw_WGPUTextureAspect_MAP = null,
cgxw_WGPUTextureAspect_$VALUES = null,
cgxw_WGPUTextureAspect_$callClinit = () => {
    cgxw_WGPUTextureAspect_$callClinit = $rt_eraseClinit(cgxw_WGPUTextureAspect);
    cgxw_WGPUTextureAspect__clinit_();
},
cgxw_WGPUTextureAspect__init_0 = ($this, var$1, var$2, $value) => {
    cgxw_WGPUTextureAspect_$callClinit();
    jl_Enum__init_($this, var$1, var$2);
    $this.$value10 = $value;
},
cgxw_WGPUTextureAspect__init_ = (var_0, var_1, var_2) => {
    let var_3 = new cgxw_WGPUTextureAspect();
    cgxw_WGPUTextureAspect__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
cgxw_WGPUTextureAspect__clinit_ = () => {
    let $value, var$2, var$3, var$4, var$5, var$6, var$7;
    cgxw_WGPUTextureAspect_CUSTOM = cgxw_WGPUTextureAspect__init_($rt_s(55), 0, 0);
    cgxw_WGPUTextureAspect_Undefined = cgxw_WGPUTextureAspect__init_($rt_s(56), 1, jWebGPU.WGPUTextureAspect_Undefined);
    cgxw_WGPUTextureAspect_All = cgxw_WGPUTextureAspect__init_($rt_s(75), 2, jWebGPU.WGPUTextureAspect_All);
    cgxw_WGPUTextureAspect_StencilOnly = cgxw_WGPUTextureAspect__init_($rt_s(76), 3, jWebGPU.WGPUTextureAspect_StencilOnly);
    cgxw_WGPUTextureAspect_DepthOnly = cgxw_WGPUTextureAspect__init_($rt_s(77), 4, jWebGPU.WGPUTextureAspect_DepthOnly);
    $value = cgxw_WGPUTextureAspect__init_($rt_s(59), 5, jWebGPU.WGPUTextureAspect_Force32);
    cgxw_WGPUTextureAspect_Force32 = $value;
    var$2 = $rt_createArray(cgxw_WGPUTextureAspect, 6);
    var$3 = var$2.data;
    var$3[0] = cgxw_WGPUTextureAspect_CUSTOM;
    var$3[1] = cgxw_WGPUTextureAspect_Undefined;
    var$3[2] = cgxw_WGPUTextureAspect_All;
    var$3[3] = cgxw_WGPUTextureAspect_StencilOnly;
    var$3[4] = cgxw_WGPUTextureAspect_DepthOnly;
    var$3[5] = $value;
    cgxw_WGPUTextureAspect_$VALUES = var$2;
    cgxw_WGPUTextureAspect_MAP = ju_HashMap__init_();
    var$2 = (cgxw_WGPUTextureAspect_$VALUES.$clone0()).data;
    var$4 = var$2.length;
    var$5 = 0;
    while (var$5 < var$4) {
        $value = var$2[var$5];
        if ($value !== cgxw_WGPUTextureAspect_CUSTOM) {
            var$6 = cgxw_WGPUTextureAspect_MAP;
            var$7 = jl_Integer_valueOf($value.$value10);
            ju_HashMap_put(var$6, var$7, $value);
        }
        var$5 = var$5 + 1 | 0;
    }
};
function cgxw_JDevice() {
    cgxwi_IDLBase.call(this);
    this.$JQueue_TEMP_GEN_0 = null;
}
let cgxw_JDevice_T_01 = null,
cgxw_JDevice_T_02 = null,
cgxw_JDevice_T_03 = null,
cgxw_JDevice_deleteNative = $this => {
    cgxw_JDevice_internal_native_deleteNative$js_body$_4(Long_lo($this.$nativeData.$cPointer));
},
cgxw_JDevice_CreateCommandEncoder = ($this, $encoderDescriptor, $commandEncoder) => {
    let var$3, var$4, var$5;
    var$3 = Long_lo($this.$nativeData.$cPointer);
    var$4 = Long_lo(($encoderDescriptor === null ? Long_ZERO : $encoderDescriptor.$nativeData.$cPointer));
    var$5 = Long_lo(($commandEncoder === null ? Long_ZERO : $commandEncoder.$nativeData.$cPointer));
    cgxw_JDevice_internal_native_CreateCommandEncoder$js_body$_18(var$3, var$4, var$5);
},
cgxw_JDevice__clinit_ = () => {
    let var$1;
    var$1 = new cgxw_JDevice;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JDevice_T_01 = var$1;
    var$1 = new cgxw_JDevice;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JDevice_T_02 = var$1;
    var$1 = new cgxw_JDevice;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JDevice_T_03 = var$1;
},
cgxw_JDevice_internal_native_deleteNative$js_body$_4 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JDevice);
    jWebGPU.destroy(jsObj);
},
cgxw_JDevice_internal_native_GetQueue$js_body$_8 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JDevice);
    var returnedJSObj = jsObj.GetQueue();
    if (!returnedJSObj.hasOwnProperty('ptr')) return 0;
    return jWebGPU.getPointer(returnedJSObj);
},
cgxw_JDevice_internal_native_GetFeatures$js_body$_14 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JDevice);
    jsObj.GetFeatures(var$2);
},
cgxw_JDevice_internal_native_GetLimits$js_body$_16 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JDevice);
    jsObj.GetLimits(var$2);
},
cgxw_JDevice_internal_native_CreateCommandEncoder$js_body$_18 = (var$1, var$2, var$3) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JDevice);
    jsObj.CreateCommandEncoder(var$2, var$3);
},
cgxw_JColor = $rt_classWithoutFields(cgxwi_IDLBase),
cgxw_JColor_T_01 = null,
cgxw_JColor_T_02 = null,
cgxw_JColor_T_03 = null,
cgxw_JColor_deleteNative = $this => {
    cgxw_JColor_internal_native_deleteNative$js_body$_6(Long_lo($this.$nativeData.$cPointer));
},
cgxw_JColor_SetColor = ($this, $r, $g, $b, $a) => {
    cgxw_JColor_internal_native_SetColor$js_body$_8(Long_lo($this.$nativeData.$cPointer), $r, $g, $b, $a);
},
cgxw_JColor__clinit_ = () => {
    let var$1;
    var$1 = new cgxw_JColor;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JColor_T_01 = var$1;
    var$1 = new cgxw_JColor;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JColor_T_02 = var$1;
    var$1 = new cgxw_JColor;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JColor_T_03 = var$1;
},
cgxw_JColor_internal_native_deleteNative$js_body$_6 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JColor);
    jWebGPU.destroy(jsObj);
},
cgxw_JColor_internal_native_SetColor$js_body$_8 = (var$1, var$2, var$3, var$4, var$5) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JColor);
    jsObj.SetColor(var$2, var$3, var$4, var$5);
},
cgxw_JQueue = $rt_classWithoutFields(cgxwi_IDLBase),
cgxw_JQueue_T_01 = null,
cgxw_JQueue_T_02 = null,
cgxw_JQueue_T_03 = null,
cgxw_JQueue_deleteNative = $this => {
    cgxw_JQueue_internal_native_deleteNative$js_body$_4(Long_lo($this.$nativeData.$cPointer));
},
cgxw_JQueue_Submit = ($this, $commandCount, $commandBuffer) => {
    let var$3, var$4;
    var$3 = Long_lo($this.$nativeData.$cPointer);
    var$4 = Long_lo(($commandBuffer === null ? Long_ZERO : $commandBuffer.$nativeData.$cPointer));
    cgxw_JQueue_internal_native_Submit$js_body$_8(var$3, $commandCount, var$4);
},
cgxw_JQueue__clinit_ = () => {
    let var$1;
    var$1 = new cgxw_JQueue;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JQueue_T_01 = var$1;
    var$1 = new cgxw_JQueue;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JQueue_T_02 = var$1;
    var$1 = new cgxw_JQueue;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JQueue_T_03 = var$1;
},
cgxw_JQueue_internal_native_deleteNative$js_body$_4 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JQueue);
    jWebGPU.destroy(jsObj);
},
cgxw_JQueue_internal_native_Submit$js_body$_8 = (var$1, var$2, var$3) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JQueue);
    jsObj.Submit(var$2, var$3);
},
cgxw_JSurface = $rt_classWithoutFields(cgxwi_IDLBase),
cgxw_JSurface_T_01 = null,
cgxw_JSurface_T_02 = null,
cgxw_JSurface_T_03 = null,
cgxw_JSurface_deleteNative = $this => {
    cgxw_JSurface_internal_native_deleteNative$js_body$_4(Long_lo($this.$nativeData.$cPointer));
},
cgxw_JSurface_Configure = ($this, $config) => {
    let var$2, var$3;
    var$2 = Long_lo($this.$nativeData.$cPointer);
    var$3 = Long_lo(($config === null ? Long_ZERO : $config.$nativeData.$cPointer));
    cgxw_JSurface_internal_native_Configure$js_body$_10(var$2, var$3);
},
cgxw_JSurface_Present = $this => {
    cgxw_JSurface_internal_native_Present$js_body$_16(Long_lo($this.$nativeData.$cPointer));
},
cgxw_JSurface__clinit_ = () => {
    let var$1;
    var$1 = new cgxw_JSurface;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JSurface_T_01 = var$1;
    var$1 = new cgxw_JSurface;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JSurface_T_02 = var$1;
    var$1 = new cgxw_JSurface;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JSurface_T_03 = var$1;
},
cgxw_JSurface_internal_native_deleteNative$js_body$_4 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JSurface);
    jWebGPU.destroy(jsObj);
},
cgxw_JSurface_internal_native_Configure$js_body$_10 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JSurface);
    jsObj.Configure(var$2);
},
cgxw_JSurface_internal_native_GetCapabilities$js_body$_12 = (var$1, var$2, var$3) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JSurface);
    jsObj.GetCapabilities(var$2, var$3);
},
cgxw_JSurface_internal_native_GetCurrentTexture$js_body$_14 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JSurface);
    jsObj.GetCurrentTexture(var$2);
},
cgxw_JSurface_internal_native_Present$js_body$_16 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JSurface);
    jsObj.Present();
},
cgxw_JRequestAdapterOptions = $rt_classWithoutFields(cgxwi_IDLBase),
cgxw_JRequestAdapterOptions_T_01 = null,
cgxw_JRequestAdapterOptions_T_02 = null,
cgxw_JRequestAdapterOptions_T_03 = null,
cgxw_JRequestAdapterOptions_deleteNative = $this => {
    cgxw_JRequestAdapterOptions_internal_native_deleteNative$js_body$_6(Long_lo($this.$nativeData.$cPointer));
},
cgxw_JRequestAdapterOptions__clinit_ = () => {
    let var$1;
    var$1 = new cgxw_JRequestAdapterOptions;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JRequestAdapterOptions_T_01 = var$1;
    var$1 = new cgxw_JRequestAdapterOptions;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JRequestAdapterOptions_T_02 = var$1;
    var$1 = new cgxw_JRequestAdapterOptions;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JRequestAdapterOptions_T_03 = var$1;
},
cgxw_JRequestAdapterOptions_internal_native_create$js_body$_1 = () => {
    var jsObj = new jWebGPU.JRequestAdapterOptions();
    return jWebGPU.getPointer(jsObj);
},
cgxw_JRequestAdapterOptions_internal_native_deleteNative$js_body$_6 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JRequestAdapterOptions);
    jWebGPU.destroy(jsObj);
};
let cgxw_RequestAdapterCallback = $rt_classWithoutFields(cgxwi_IDLBase),
cgxw_RequestAdapterCallback_JAdapter_TEMP_STATIC_GEN_0 = null,
cgxw_RequestAdapterCallback_deleteNative = $this => {
    cgxw_RequestAdapterCallback_internal_native_deleteNative$js_body$_4(Long_lo($this.$nativeData.$cPointer));
},
cgxw_RequestAdapterCallback_internal_native_deleteNative$js_body$_4 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.RequestAdapterCallbackImpl);
    jWebGPU.destroy(jsObj);
},
cgxw_RequestAdapterCallback_internal_native_create$js_body$_9 = () => {
    var jsObj = new jWebGPU.RequestAdapterCallbackImpl();
    return jWebGPU.getPointer(jsObj);
},
cgxw_RequestAdapterCallback_internal_native_setupCallback$js_body$_10 = (var$1, var$2) => {
    var RequestAdapterCallbackImpl = jWebGPU.wrapPointer(var$1, jWebGPU.RequestAdapterCallbackImpl);
    RequestAdapterCallbackImpl.OnCallback = var$2;
};
function cgxwbc_WGPUApp$1() {
    cgxw_RequestAdapterCallback.call(this);
    this.$this$01 = null;
}
function cgxw_WGPUCallbackMode() {
    jl_Enum.call(this);
    this.$value0 = 0;
}
let cgxw_WGPUCallbackMode_CUSTOM = null,
cgxw_WGPUCallbackMode_WaitAnyOnly = null,
cgxw_WGPUCallbackMode_AllowProcessEvents = null,
cgxw_WGPUCallbackMode_AllowSpontaneous = null,
cgxw_WGPUCallbackMode_Force32 = null,
cgxw_WGPUCallbackMode_MAP = null,
cgxw_WGPUCallbackMode_$VALUES = null,
cgxw_WGPUCallbackMode_$callClinit = () => {
    cgxw_WGPUCallbackMode_$callClinit = $rt_eraseClinit(cgxw_WGPUCallbackMode);
    cgxw_WGPUCallbackMode__clinit_();
},
cgxw_WGPUCallbackMode__init_0 = ($this, var$1, var$2, $value) => {
    cgxw_WGPUCallbackMode_$callClinit();
    jl_Enum__init_($this, var$1, var$2);
    $this.$value0 = $value;
},
cgxw_WGPUCallbackMode__init_ = (var_0, var_1, var_2) => {
    let var_3 = new cgxw_WGPUCallbackMode();
    cgxw_WGPUCallbackMode__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
cgxw_WGPUCallbackMode__clinit_ = () => {
    let $value, var$2, var$3, var$4, var$5, var$6, var$7;
    cgxw_WGPUCallbackMode_CUSTOM = cgxw_WGPUCallbackMode__init_($rt_s(55), 0, 0);
    cgxw_WGPUCallbackMode_WaitAnyOnly = cgxw_WGPUCallbackMode__init_($rt_s(78), 1, jWebGPU.WGPUCallbackMode_WaitAnyOnly);
    cgxw_WGPUCallbackMode_AllowProcessEvents = cgxw_WGPUCallbackMode__init_($rt_s(79), 2, jWebGPU.WGPUCallbackMode_AllowProcessEvents);
    cgxw_WGPUCallbackMode_AllowSpontaneous = cgxw_WGPUCallbackMode__init_($rt_s(80), 3, jWebGPU.WGPUCallbackMode_AllowSpontaneous);
    $value = cgxw_WGPUCallbackMode__init_($rt_s(59), 4, jWebGPU.WGPUCallbackMode_Force32);
    cgxw_WGPUCallbackMode_Force32 = $value;
    var$2 = $rt_createArray(cgxw_WGPUCallbackMode, 5);
    var$3 = var$2.data;
    var$3[0] = cgxw_WGPUCallbackMode_CUSTOM;
    var$3[1] = cgxw_WGPUCallbackMode_WaitAnyOnly;
    var$3[2] = cgxw_WGPUCallbackMode_AllowProcessEvents;
    var$3[3] = cgxw_WGPUCallbackMode_AllowSpontaneous;
    var$3[4] = $value;
    cgxw_WGPUCallbackMode_$VALUES = var$2;
    cgxw_WGPUCallbackMode_MAP = ju_HashMap__init_();
    var$2 = (cgxw_WGPUCallbackMode_$VALUES.$clone0()).data;
    var$4 = var$2.length;
    var$5 = 0;
    while (var$5 < var$4) {
        $value = var$2[var$5];
        if ($value !== cgxw_WGPUCallbackMode_CUSTOM) {
            var$6 = cgxw_WGPUCallbackMode_MAP;
            var$7 = jl_Integer_valueOf($value.$value0);
            ju_HashMap_put(var$6, var$7, $value);
        }
        var$5 = var$5 + 1 | 0;
    }
},
cgxw_JSurfaceConfiguration = $rt_classWithoutFields(cgxwi_IDLBase),
cgxw_JSurfaceConfiguration_T_01 = null,
cgxw_JSurfaceConfiguration_T_02 = null,
cgxw_JSurfaceConfiguration_T_03 = null,
cgxw_JSurfaceConfiguration_deleteNative = $this => {
    cgxw_JSurfaceConfiguration_internal_native_deleteNative$js_body$_6(Long_lo($this.$nativeData.$cPointer));
},
cgxw_JSurfaceConfiguration__clinit_ = () => {
    let var$1;
    var$1 = new cgxw_JSurfaceConfiguration;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JSurfaceConfiguration_T_01 = var$1;
    var$1 = new cgxw_JSurfaceConfiguration;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JSurfaceConfiguration_T_02 = var$1;
    var$1 = new cgxw_JSurfaceConfiguration;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JSurfaceConfiguration_T_03 = var$1;
},
cgxw_JSurfaceConfiguration_internal_native_create$js_body$_1 = () => {
    var jsObj = new jWebGPU.JSurfaceConfiguration();
    return jWebGPU.getPointer(jsObj);
},
cgxw_JSurfaceConfiguration_internal_native_deleteNative$js_body$_6 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JSurfaceConfiguration);
    jWebGPU.destroy(jsObj);
},
cgxw_JSurfaceConfiguration_internal_native_SetWidth$js_body$_10 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JSurfaceConfiguration);
    jsObj.SetWidth(var$2);
},
cgxw_JSurfaceConfiguration_internal_native_SetHeight$js_body$_12 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JSurfaceConfiguration);
    jsObj.SetHeight(var$2);
},
cgxw_JSurfaceConfiguration_internal_native_SetFormat$js_body$_14 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JSurfaceConfiguration);
    jsObj.SetFormat(var$2);
},
cgxw_JSurfaceConfiguration_internal_native_SetViewFormats$js_body$_16 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JSurfaceConfiguration);
    jsObj.SetViewFormats(var$2);
},
cgxw_JSurfaceConfiguration_internal_native_SetUsage$js_body$_18 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JSurfaceConfiguration);
    jsObj.SetUsage(var$2);
},
cgxw_JSurfaceConfiguration_internal_native_SetDevice$js_body$_20 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JSurfaceConfiguration);
    jsObj.SetDevice(var$2);
},
cgxw_JSurfaceConfiguration_internal_native_SetPresentMode$js_body$_22 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JSurfaceConfiguration);
    jsObj.SetPresentMode(var$2);
},
cgxw_JSurfaceConfiguration_internal_native_SetAlphaMode$js_body$_24 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JSurfaceConfiguration);
    jsObj.SetAlphaMode(var$2);
};
function cgxw_WGPUTextureUsage() {
    jl_Enum.call(this);
    this.$value8 = 0;
}
let cgxw_WGPUTextureUsage_CUSTOM = null,
cgxw_WGPUTextureUsage_None = null,
cgxw_WGPUTextureUsage_CopySrc = null,
cgxw_WGPUTextureUsage_CopyDst = null,
cgxw_WGPUTextureUsage_TextureBinding = null,
cgxw_WGPUTextureUsage_StorageBinding = null,
cgxw_WGPUTextureUsage_RenderAttachment = null,
cgxw_WGPUTextureUsage_MAP = null,
cgxw_WGPUTextureUsage_$VALUES = null,
cgxw_WGPUTextureUsage_$callClinit = () => {
    cgxw_WGPUTextureUsage_$callClinit = $rt_eraseClinit(cgxw_WGPUTextureUsage);
    cgxw_WGPUTextureUsage__clinit_();
},
cgxw_WGPUTextureUsage__init_0 = ($this, var$1, var$2, $value) => {
    cgxw_WGPUTextureUsage_$callClinit();
    jl_Enum__init_($this, var$1, var$2);
    $this.$value8 = $value;
},
cgxw_WGPUTextureUsage__init_ = (var_0, var_1, var_2) => {
    let var_3 = new cgxw_WGPUTextureUsage();
    cgxw_WGPUTextureUsage__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
cgxw_WGPUTextureUsage__clinit_ = () => {
    let $value, var$2, var$3, var$4, var$5, var$6, var$7;
    cgxw_WGPUTextureUsage_CUSTOM = cgxw_WGPUTextureUsage__init_($rt_s(55), 0, 0);
    cgxw_WGPUTextureUsage_None = cgxw_WGPUTextureUsage__init_($rt_s(81), 1, jWebGPU.WGPUTextureUsage_None);
    cgxw_WGPUTextureUsage_CopySrc = cgxw_WGPUTextureUsage__init_($rt_s(82), 2, jWebGPU.WGPUTextureUsage_CopySrc);
    cgxw_WGPUTextureUsage_CopyDst = cgxw_WGPUTextureUsage__init_($rt_s(83), 3, jWebGPU.WGPUTextureUsage_CopyDst);
    cgxw_WGPUTextureUsage_TextureBinding = cgxw_WGPUTextureUsage__init_($rt_s(84), 4, jWebGPU.WGPUTextureUsage_TextureBinding);
    cgxw_WGPUTextureUsage_StorageBinding = cgxw_WGPUTextureUsage__init_($rt_s(85), 5, jWebGPU.WGPUTextureUsage_StorageBinding);
    $value = cgxw_WGPUTextureUsage__init_($rt_s(86), 6, jWebGPU.WGPUTextureUsage_RenderAttachment);
    cgxw_WGPUTextureUsage_RenderAttachment = $value;
    var$2 = $rt_createArray(cgxw_WGPUTextureUsage, 7);
    var$3 = var$2.data;
    var$3[0] = cgxw_WGPUTextureUsage_CUSTOM;
    var$3[1] = cgxw_WGPUTextureUsage_None;
    var$3[2] = cgxw_WGPUTextureUsage_CopySrc;
    var$3[3] = cgxw_WGPUTextureUsage_CopyDst;
    var$3[4] = cgxw_WGPUTextureUsage_TextureBinding;
    var$3[5] = cgxw_WGPUTextureUsage_StorageBinding;
    var$3[6] = $value;
    cgxw_WGPUTextureUsage_$VALUES = var$2;
    cgxw_WGPUTextureUsage_MAP = ju_HashMap__init_();
    var$2 = (cgxw_WGPUTextureUsage_$VALUES.$clone0()).data;
    var$4 = var$2.length;
    var$5 = 0;
    while (var$5 < var$4) {
        $value = var$2[var$5];
        if ($value !== cgxw_WGPUTextureUsage_CUSTOM) {
            var$6 = cgxw_WGPUTextureUsage_MAP;
            var$7 = jl_Integer_valueOf($value.$value8);
            ju_HashMap_put(var$6, var$7, $value);
        }
        var$5 = var$5 + 1 | 0;
    }
};
function cgxw_WGPUPresentMode() {
    jl_Enum.call(this);
    this.$value6 = 0;
}
let cgxw_WGPUPresentMode_CUSTOM = null,
cgxw_WGPUPresentMode_Undefined = null,
cgxw_WGPUPresentMode_Fifo = null,
cgxw_WGPUPresentMode_FifoRelaxed = null,
cgxw_WGPUPresentMode_Immediate = null,
cgxw_WGPUPresentMode_Mailbox = null,
cgxw_WGPUPresentMode_Force32 = null,
cgxw_WGPUPresentMode_MAP = null,
cgxw_WGPUPresentMode_$VALUES = null,
cgxw_WGPUPresentMode_$callClinit = () => {
    cgxw_WGPUPresentMode_$callClinit = $rt_eraseClinit(cgxw_WGPUPresentMode);
    cgxw_WGPUPresentMode__clinit_();
},
cgxw_WGPUPresentMode__init_0 = ($this, var$1, var$2, $value) => {
    cgxw_WGPUPresentMode_$callClinit();
    jl_Enum__init_($this, var$1, var$2);
    $this.$value6 = $value;
},
cgxw_WGPUPresentMode__init_ = (var_0, var_1, var_2) => {
    let var_3 = new cgxw_WGPUPresentMode();
    cgxw_WGPUPresentMode__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
cgxw_WGPUPresentMode__clinit_ = () => {
    let $value, var$2, var$3, var$4, var$5, var$6, var$7;
    cgxw_WGPUPresentMode_CUSTOM = cgxw_WGPUPresentMode__init_($rt_s(55), 0, 0);
    cgxw_WGPUPresentMode_Undefined = cgxw_WGPUPresentMode__init_($rt_s(56), 1, jWebGPU.WGPUPresentMode_Undefined);
    cgxw_WGPUPresentMode_Fifo = cgxw_WGPUPresentMode__init_($rt_s(87), 2, jWebGPU.WGPUPresentMode_Fifo);
    cgxw_WGPUPresentMode_FifoRelaxed = cgxw_WGPUPresentMode__init_($rt_s(88), 3, jWebGPU.WGPUPresentMode_FifoRelaxed);
    cgxw_WGPUPresentMode_Immediate = cgxw_WGPUPresentMode__init_($rt_s(89), 4, jWebGPU.WGPUPresentMode_Immediate);
    cgxw_WGPUPresentMode_Mailbox = cgxw_WGPUPresentMode__init_($rt_s(90), 5, jWebGPU.WGPUPresentMode_Mailbox);
    $value = cgxw_WGPUPresentMode__init_($rt_s(59), 6, jWebGPU.WGPUPresentMode_Force32);
    cgxw_WGPUPresentMode_Force32 = $value;
    var$2 = $rt_createArray(cgxw_WGPUPresentMode, 7);
    var$3 = var$2.data;
    var$3[0] = cgxw_WGPUPresentMode_CUSTOM;
    var$3[1] = cgxw_WGPUPresentMode_Undefined;
    var$3[2] = cgxw_WGPUPresentMode_Fifo;
    var$3[3] = cgxw_WGPUPresentMode_FifoRelaxed;
    var$3[4] = cgxw_WGPUPresentMode_Immediate;
    var$3[5] = cgxw_WGPUPresentMode_Mailbox;
    var$3[6] = $value;
    cgxw_WGPUPresentMode_$VALUES = var$2;
    cgxw_WGPUPresentMode_MAP = ju_HashMap__init_();
    var$2 = (cgxw_WGPUPresentMode_$VALUES.$clone0()).data;
    var$4 = var$2.length;
    var$5 = 0;
    while (var$5 < var$4) {
        $value = var$2[var$5];
        if ($value !== cgxw_WGPUPresentMode_CUSTOM) {
            var$6 = cgxw_WGPUPresentMode_MAP;
            var$7 = jl_Integer_valueOf($value.$value6);
            ju_HashMap_put(var$6, var$7, $value);
        }
        var$5 = var$5 + 1 | 0;
    }
};
function cgxw_WGPUCompositeAlphaMode() {
    jl_Enum.call(this);
    this.$value4 = 0;
}
let cgxw_WGPUCompositeAlphaMode_CUSTOM = null,
cgxw_WGPUCompositeAlphaMode_Auto = null,
cgxw_WGPUCompositeAlphaMode_Opaque = null,
cgxw_WGPUCompositeAlphaMode_Premultiplied = null,
cgxw_WGPUCompositeAlphaMode_Unpremultiplied = null,
cgxw_WGPUCompositeAlphaMode_Inherit = null,
cgxw_WGPUCompositeAlphaMode_Force32 = null,
cgxw_WGPUCompositeAlphaMode_MAP = null,
cgxw_WGPUCompositeAlphaMode_$VALUES = null,
cgxw_WGPUCompositeAlphaMode_$callClinit = () => {
    cgxw_WGPUCompositeAlphaMode_$callClinit = $rt_eraseClinit(cgxw_WGPUCompositeAlphaMode);
    cgxw_WGPUCompositeAlphaMode__clinit_();
},
cgxw_WGPUCompositeAlphaMode__init_0 = ($this, var$1, var$2, $value) => {
    cgxw_WGPUCompositeAlphaMode_$callClinit();
    jl_Enum__init_($this, var$1, var$2);
    $this.$value4 = $value;
},
cgxw_WGPUCompositeAlphaMode__init_ = (var_0, var_1, var_2) => {
    let var_3 = new cgxw_WGPUCompositeAlphaMode();
    cgxw_WGPUCompositeAlphaMode__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
cgxw_WGPUCompositeAlphaMode__clinit_ = () => {
    let $value, var$2, var$3, var$4, var$5, var$6, var$7;
    cgxw_WGPUCompositeAlphaMode_CUSTOM = cgxw_WGPUCompositeAlphaMode__init_($rt_s(55), 0, 0);
    cgxw_WGPUCompositeAlphaMode_Auto = cgxw_WGPUCompositeAlphaMode__init_($rt_s(91), 1, jWebGPU.WGPUCompositeAlphaMode_Auto);
    cgxw_WGPUCompositeAlphaMode_Opaque = cgxw_WGPUCompositeAlphaMode__init_($rt_s(92), 2, jWebGPU.WGPUCompositeAlphaMode_Opaque);
    cgxw_WGPUCompositeAlphaMode_Premultiplied = cgxw_WGPUCompositeAlphaMode__init_($rt_s(93), 3, jWebGPU.WGPUCompositeAlphaMode_Premultiplied);
    cgxw_WGPUCompositeAlphaMode_Unpremultiplied = cgxw_WGPUCompositeAlphaMode__init_($rt_s(94), 4, jWebGPU.WGPUCompositeAlphaMode_Unpremultiplied);
    cgxw_WGPUCompositeAlphaMode_Inherit = cgxw_WGPUCompositeAlphaMode__init_($rt_s(95), 5, jWebGPU.WGPUCompositeAlphaMode_Inherit);
    $value = cgxw_WGPUCompositeAlphaMode__init_($rt_s(59), 6, jWebGPU.WGPUCompositeAlphaMode_Force32);
    cgxw_WGPUCompositeAlphaMode_Force32 = $value;
    var$2 = $rt_createArray(cgxw_WGPUCompositeAlphaMode, 7);
    var$3 = var$2.data;
    var$3[0] = cgxw_WGPUCompositeAlphaMode_CUSTOM;
    var$3[1] = cgxw_WGPUCompositeAlphaMode_Auto;
    var$3[2] = cgxw_WGPUCompositeAlphaMode_Opaque;
    var$3[3] = cgxw_WGPUCompositeAlphaMode_Premultiplied;
    var$3[4] = cgxw_WGPUCompositeAlphaMode_Unpremultiplied;
    var$3[5] = cgxw_WGPUCompositeAlphaMode_Inherit;
    var$3[6] = $value;
    cgxw_WGPUCompositeAlphaMode_$VALUES = var$2;
    cgxw_WGPUCompositeAlphaMode_MAP = ju_HashMap__init_();
    var$2 = (cgxw_WGPUCompositeAlphaMode_$VALUES.$clone0()).data;
    var$4 = var$2.length;
    var$5 = 0;
    while (var$5 < var$4) {
        $value = var$2[var$5];
        if ($value !== cgxw_WGPUCompositeAlphaMode_CUSTOM) {
            var$6 = cgxw_WGPUCompositeAlphaMode_MAP;
            var$7 = jl_Integer_valueOf($value.$value4);
            ju_HashMap_put(var$6, var$7, $value);
        }
        var$5 = var$5 + 1 | 0;
    }
},
cgxjl_JParserLibraryLoader$OnInitFunction = $rt_classWithoutFields(0);
function cgxjl_JParserLibraryLoader$lambda$loadWasm$1$lambda$_10_0() {
    let a = this; jl_Object.call(a);
    a.$_02 = null;
    a.$_10 = null;
}
let cgxjl_JParserLibraryLoader$lambda$loadWasm$1$lambda$_10_0_onInit$exported$0 = var$1 => {
    let var$2, var$3;
    var$1 = var$1;
    var$2 = var$1.$_02;
    var$1 = var$1.$_10;
    cgxjl_JParserLibraryLoader_$callClinit();
    var$3 = cgxjl_JParserLibraryLoader_loadedLibraries;
    ju_HashMap_put(var$3.$backingMap, var$2, var$3);
    var$2 = null;
    cgxjl_JParserLibraryLoader$1_onLoad(var$1, 1, var$2);
},
otcic_JSStderrPrintStream = $rt_classWithoutFields(otcic_JsConsolePrintStream),
otcic_JSStderrPrintStream_print = ($this, $s) => {
    if ($s === null)
        $s = $rt_s(6);
    $rt_putStderr($rt_ustr($s));
},
jl_CloneNotSupportedException = $rt_classWithoutFields(jl_Exception),
cgxw_RequestAdapterCallback$OnCallback = $rt_classWithoutFields(0);
function cgxw_RequestAdapterCallback$1() {
    jl_Object.call(this);
    this.$this$02 = null;
}
let cgxw_RequestAdapterCallback$1_OnCallback$exported$0 = (var$1, var$2, var$3) => {
    let var$4, var$5, var$6, var$7, var$8, var$9;
    var$4 = var$2;
    var$5 = var$3;
    var$1 = var$1.$this$02;
    var$6 = Long_fromInt(var$5);
    if (cgxw_RequestAdapterCallback_JAdapter_TEMP_STATIC_GEN_0 === null) {
        var$2 = new cgxw_JAdapter;
        cgxwi_IDLBase__init_(var$2);
        cgxw_RequestAdapterCallback_JAdapter_TEMP_STATIC_GEN_0 = var$2;
    }
    cgxwi_IDLNativeData_reset(cgxw_RequestAdapterCallback_JAdapter_TEMP_STATIC_GEN_0.$nativeData, var$6, 0);
    cgxw_WGPURequestAdapterStatus_$callClinit();
    var$2 = cgxw_WGPURequestAdapterStatus_MAP;
    var$3 = jl_Integer_valueOf(var$4);
    var$2 = ju_HashMap_get(var$2, var$3);
    var$3 = cgxw_RequestAdapterCallback_JAdapter_TEMP_STATIC_GEN_0;
    var$1 = var$1;
    var$7 = jl_System_out();
    var$8 = jl_String_valueOf(var$2);
    var$9 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$9, $rt_s(96)), var$8);
    var$8 = jl_StringBuilder_toString(var$9);
    otcic_JsConsolePrintStream_println(var$7, var$8);
    if (var$2 !== cgxw_WGPURequestAdapterStatus_Success)
        var$1.$this$01.$initState = cgxwbc_WGPUApp$InitState_ADAPTER_NOT_VALID;
    else {
        var$1 = var$1.$this$01;
        var$1.$initState = cgxwbc_WGPUApp$InitState_ADAPTER_VALID;
        var$1.$adapter = var$3;
        cgxwbc_WGPUApp_requestDevice(var$1);
    }
};
function cgxw_WGPUTextureFormat() {
    jl_Enum.call(this);
    this.$value = 0;
}
let cgxw_WGPUTextureFormat_CUSTOM = null,
cgxw_WGPUTextureFormat_Undefined = null,
cgxw_WGPUTextureFormat_R8Unorm = null,
cgxw_WGPUTextureFormat_R8Snorm = null,
cgxw_WGPUTextureFormat_R8Uint = null,
cgxw_WGPUTextureFormat_R8Sint = null,
cgxw_WGPUTextureFormat_R16Uint = null,
cgxw_WGPUTextureFormat_R16Sint = null,
cgxw_WGPUTextureFormat_R16Float = null,
cgxw_WGPUTextureFormat_RG8Unorm = null,
cgxw_WGPUTextureFormat_RG8Snorm = null,
cgxw_WGPUTextureFormat_RG8Uint = null,
cgxw_WGPUTextureFormat_RG8Sint = null,
cgxw_WGPUTextureFormat_R32Float = null,
cgxw_WGPUTextureFormat_R32Uint = null,
cgxw_WGPUTextureFormat_R32Sint = null,
cgxw_WGPUTextureFormat_RG16Uint = null,
cgxw_WGPUTextureFormat_RG16Sint = null,
cgxw_WGPUTextureFormat_RG16Float = null,
cgxw_WGPUTextureFormat_RGBA8Unorm = null,
cgxw_WGPUTextureFormat_RGBA8UnormSrgb = null,
cgxw_WGPUTextureFormat_RGBA8Snorm = null,
cgxw_WGPUTextureFormat_RGBA8Uint = null,
cgxw_WGPUTextureFormat_RGBA8Sint = null,
cgxw_WGPUTextureFormat_BGRA8Unorm = null,
cgxw_WGPUTextureFormat_BGRA8UnormSrgb = null,
cgxw_WGPUTextureFormat_RGB10A2Uint = null,
cgxw_WGPUTextureFormat_RGB10A2Unorm = null,
cgxw_WGPUTextureFormat_RG11B10Ufloat = null,
cgxw_WGPUTextureFormat_RGB9E5Ufloat = null,
cgxw_WGPUTextureFormat_RG32Float = null,
cgxw_WGPUTextureFormat_RG32Uint = null,
cgxw_WGPUTextureFormat_RG32Sint = null,
cgxw_WGPUTextureFormat_RGBA16Uint = null,
cgxw_WGPUTextureFormat_RGBA16Sint = null,
cgxw_WGPUTextureFormat_RGBA16Float = null,
cgxw_WGPUTextureFormat_RGBA32Float = null,
cgxw_WGPUTextureFormat_RGBA32Uint = null,
cgxw_WGPUTextureFormat_RGBA32Sint = null,
cgxw_WGPUTextureFormat_Stencil8 = null,
cgxw_WGPUTextureFormat_Depth16Unorm = null,
cgxw_WGPUTextureFormat_Depth24Plus = null,
cgxw_WGPUTextureFormat_Depth24PlusStencil8 = null,
cgxw_WGPUTextureFormat_Depth32Float = null,
cgxw_WGPUTextureFormat_Depth32FloatStencil8 = null,
cgxw_WGPUTextureFormat_BC1RGBAUnorm = null,
cgxw_WGPUTextureFormat_BC1RGBAUnormSrgb = null,
cgxw_WGPUTextureFormat_BC2RGBAUnorm = null,
cgxw_WGPUTextureFormat_BC2RGBAUnormSrgb = null,
cgxw_WGPUTextureFormat_BC3RGBAUnorm = null;
let cgxw_WGPUTextureFormat_BC3RGBAUnormSrgb = null,
cgxw_WGPUTextureFormat_BC4RUnorm = null,
cgxw_WGPUTextureFormat_BC4RSnorm = null,
cgxw_WGPUTextureFormat_BC5RGUnorm = null,
cgxw_WGPUTextureFormat_BC5RGSnorm = null,
cgxw_WGPUTextureFormat_BC6HRGBUfloat = null,
cgxw_WGPUTextureFormat_BC6HRGBFloat = null,
cgxw_WGPUTextureFormat_BC7RGBAUnorm = null,
cgxw_WGPUTextureFormat_BC7RGBAUnormSrgb = null,
cgxw_WGPUTextureFormat_ETC2RGB8Unorm = null,
cgxw_WGPUTextureFormat_ETC2RGB8UnormSrgb = null,
cgxw_WGPUTextureFormat_ETC2RGB8A1Unorm = null,
cgxw_WGPUTextureFormat_ETC2RGB8A1UnormSrgb = null,
cgxw_WGPUTextureFormat_ETC2RGBA8Unorm = null,
cgxw_WGPUTextureFormat_ETC2RGBA8UnormSrgb = null,
cgxw_WGPUTextureFormat_EACR11Unorm = null,
cgxw_WGPUTextureFormat_EACR11Snorm = null,
cgxw_WGPUTextureFormat_EACRG11Unorm = null,
cgxw_WGPUTextureFormat_EACRG11Snorm = null,
cgxw_WGPUTextureFormat_ASTC4x4Unorm = null,
cgxw_WGPUTextureFormat_ASTC4x4UnormSrgb = null,
cgxw_WGPUTextureFormat_ASTC5x4Unorm = null,
cgxw_WGPUTextureFormat_ASTC5x4UnormSrgb = null,
cgxw_WGPUTextureFormat_ASTC5x5Unorm = null,
cgxw_WGPUTextureFormat_ASTC5x5UnormSrgb = null,
cgxw_WGPUTextureFormat_ASTC6x5Unorm = null,
cgxw_WGPUTextureFormat_ASTC6x5UnormSrgb = null,
cgxw_WGPUTextureFormat_ASTC6x6Unorm = null,
cgxw_WGPUTextureFormat_ASTC6x6UnormSrgb = null,
cgxw_WGPUTextureFormat_ASTC8x5Unorm = null,
cgxw_WGPUTextureFormat_ASTC8x5UnormSrgb = null,
cgxw_WGPUTextureFormat_ASTC8x6Unorm = null,
cgxw_WGPUTextureFormat_ASTC8x6UnormSrgb = null,
cgxw_WGPUTextureFormat_ASTC8x8Unorm = null,
cgxw_WGPUTextureFormat_ASTC8x8UnormSrgb = null,
cgxw_WGPUTextureFormat_ASTC10x5Unorm = null,
cgxw_WGPUTextureFormat_ASTC10x5UnormSrgb = null,
cgxw_WGPUTextureFormat_ASTC10x6Unorm = null,
cgxw_WGPUTextureFormat_ASTC10x6UnormSrgb = null,
cgxw_WGPUTextureFormat_ASTC10x8Unorm = null,
cgxw_WGPUTextureFormat_ASTC10x8UnormSrgb = null,
cgxw_WGPUTextureFormat_ASTC10x10Unorm = null,
cgxw_WGPUTextureFormat_ASTC10x10UnormSrgb = null,
cgxw_WGPUTextureFormat_ASTC12x10Unorm = null,
cgxw_WGPUTextureFormat_ASTC12x10UnormSrgb = null,
cgxw_WGPUTextureFormat_ASTC12x12Unorm = null,
cgxw_WGPUTextureFormat_ASTC12x12UnormSrgb = null,
cgxw_WGPUTextureFormat_Force32 = null,
cgxw_WGPUTextureFormat_MAP = null,
cgxw_WGPUTextureFormat_$VALUES = null;
let cgxw_WGPUTextureFormat_$callClinit = () => {
    cgxw_WGPUTextureFormat_$callClinit = $rt_eraseClinit(cgxw_WGPUTextureFormat);
    cgxw_WGPUTextureFormat__clinit_();
},
cgxw_WGPUTextureFormat_values = () => {
    cgxw_WGPUTextureFormat_$callClinit();
    return cgxw_WGPUTextureFormat_$VALUES.$clone0();
},
cgxw_WGPUTextureFormat__init_0 = ($this, var$1, var$2, $value) => {
    cgxw_WGPUTextureFormat_$callClinit();
    jl_Enum__init_($this, var$1, var$2);
    $this.$value = $value;
},
cgxw_WGPUTextureFormat__init_ = (var_0, var_1, var_2) => {
    let var_3 = new cgxw_WGPUTextureFormat();
    cgxw_WGPUTextureFormat__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
cgxw_WGPUTextureFormat_$values = () => {
    let var$1, var$2;
    cgxw_WGPUTextureFormat_$callClinit();
    var$1 = $rt_createArray(cgxw_WGPUTextureFormat, 98);
    var$2 = var$1.data;
    var$2[0] = cgxw_WGPUTextureFormat_CUSTOM;
    var$2[1] = cgxw_WGPUTextureFormat_Undefined;
    var$2[2] = cgxw_WGPUTextureFormat_R8Unorm;
    var$2[3] = cgxw_WGPUTextureFormat_R8Snorm;
    var$2[4] = cgxw_WGPUTextureFormat_R8Uint;
    var$2[5] = cgxw_WGPUTextureFormat_R8Sint;
    var$2[6] = cgxw_WGPUTextureFormat_R16Uint;
    var$2[7] = cgxw_WGPUTextureFormat_R16Sint;
    var$2[8] = cgxw_WGPUTextureFormat_R16Float;
    var$2[9] = cgxw_WGPUTextureFormat_RG8Unorm;
    var$2[10] = cgxw_WGPUTextureFormat_RG8Snorm;
    var$2[11] = cgxw_WGPUTextureFormat_RG8Uint;
    var$2[12] = cgxw_WGPUTextureFormat_RG8Sint;
    var$2[13] = cgxw_WGPUTextureFormat_R32Float;
    var$2[14] = cgxw_WGPUTextureFormat_R32Uint;
    var$2[15] = cgxw_WGPUTextureFormat_R32Sint;
    var$2[16] = cgxw_WGPUTextureFormat_RG16Uint;
    var$2[17] = cgxw_WGPUTextureFormat_RG16Sint;
    var$2[18] = cgxw_WGPUTextureFormat_RG16Float;
    var$2[19] = cgxw_WGPUTextureFormat_RGBA8Unorm;
    var$2[20] = cgxw_WGPUTextureFormat_RGBA8UnormSrgb;
    var$2[21] = cgxw_WGPUTextureFormat_RGBA8Snorm;
    var$2[22] = cgxw_WGPUTextureFormat_RGBA8Uint;
    var$2[23] = cgxw_WGPUTextureFormat_RGBA8Sint;
    var$2[24] = cgxw_WGPUTextureFormat_BGRA8Unorm;
    var$2[25] = cgxw_WGPUTextureFormat_BGRA8UnormSrgb;
    var$2[26] = cgxw_WGPUTextureFormat_RGB10A2Uint;
    var$2[27] = cgxw_WGPUTextureFormat_RGB10A2Unorm;
    var$2[28] = cgxw_WGPUTextureFormat_RG11B10Ufloat;
    var$2[29] = cgxw_WGPUTextureFormat_RGB9E5Ufloat;
    var$2[30] = cgxw_WGPUTextureFormat_RG32Float;
    var$2[31] = cgxw_WGPUTextureFormat_RG32Uint;
    var$2[32] = cgxw_WGPUTextureFormat_RG32Sint;
    var$2[33] = cgxw_WGPUTextureFormat_RGBA16Uint;
    var$2[34] = cgxw_WGPUTextureFormat_RGBA16Sint;
    var$2[35] = cgxw_WGPUTextureFormat_RGBA16Float;
    var$2[36] = cgxw_WGPUTextureFormat_RGBA32Float;
    var$2[37] = cgxw_WGPUTextureFormat_RGBA32Uint;
    var$2[38] = cgxw_WGPUTextureFormat_RGBA32Sint;
    var$2[39] = cgxw_WGPUTextureFormat_Stencil8;
    var$2[40] = cgxw_WGPUTextureFormat_Depth16Unorm;
    var$2[41] = cgxw_WGPUTextureFormat_Depth24Plus;
    var$2[42] = cgxw_WGPUTextureFormat_Depth24PlusStencil8;
    var$2[43] = cgxw_WGPUTextureFormat_Depth32Float;
    var$2[44] = cgxw_WGPUTextureFormat_Depth32FloatStencil8;
    var$2[45] = cgxw_WGPUTextureFormat_BC1RGBAUnorm;
    var$2[46] = cgxw_WGPUTextureFormat_BC1RGBAUnormSrgb;
    var$2[47] = cgxw_WGPUTextureFormat_BC2RGBAUnorm;
    var$2[48] = cgxw_WGPUTextureFormat_BC2RGBAUnormSrgb;
    var$2[49] = cgxw_WGPUTextureFormat_BC3RGBAUnorm;
    var$2[50] = cgxw_WGPUTextureFormat_BC3RGBAUnormSrgb;
    var$2[51] = cgxw_WGPUTextureFormat_BC4RUnorm;
    var$2[52] = cgxw_WGPUTextureFormat_BC4RSnorm;
    var$2[53] = cgxw_WGPUTextureFormat_BC5RGUnorm;
    var$2[54] = cgxw_WGPUTextureFormat_BC5RGSnorm;
    var$2[55] = cgxw_WGPUTextureFormat_BC6HRGBUfloat;
    var$2[56] = cgxw_WGPUTextureFormat_BC6HRGBFloat;
    var$2[57] = cgxw_WGPUTextureFormat_BC7RGBAUnorm;
    var$2[58] = cgxw_WGPUTextureFormat_BC7RGBAUnormSrgb;
    var$2[59] = cgxw_WGPUTextureFormat_ETC2RGB8Unorm;
    var$2[60] = cgxw_WGPUTextureFormat_ETC2RGB8UnormSrgb;
    var$2[61] = cgxw_WGPUTextureFormat_ETC2RGB8A1Unorm;
    var$2[62] = cgxw_WGPUTextureFormat_ETC2RGB8A1UnormSrgb;
    var$2[63] = cgxw_WGPUTextureFormat_ETC2RGBA8Unorm;
    var$2[64] = cgxw_WGPUTextureFormat_ETC2RGBA8UnormSrgb;
    var$2[65] = cgxw_WGPUTextureFormat_EACR11Unorm;
    var$2[66] = cgxw_WGPUTextureFormat_EACR11Snorm;
    var$2[67] = cgxw_WGPUTextureFormat_EACRG11Unorm;
    var$2[68] = cgxw_WGPUTextureFormat_EACRG11Snorm;
    var$2[69] = cgxw_WGPUTextureFormat_ASTC4x4Unorm;
    var$2[70] = cgxw_WGPUTextureFormat_ASTC4x4UnormSrgb;
    var$2[71] = cgxw_WGPUTextureFormat_ASTC5x4Unorm;
    var$2[72] = cgxw_WGPUTextureFormat_ASTC5x4UnormSrgb;
    var$2[73] = cgxw_WGPUTextureFormat_ASTC5x5Unorm;
    var$2[74] = cgxw_WGPUTextureFormat_ASTC5x5UnormSrgb;
    var$2[75] = cgxw_WGPUTextureFormat_ASTC6x5Unorm;
    var$2[76] = cgxw_WGPUTextureFormat_ASTC6x5UnormSrgb;
    var$2[77] = cgxw_WGPUTextureFormat_ASTC6x6Unorm;
    var$2[78] = cgxw_WGPUTextureFormat_ASTC6x6UnormSrgb;
    var$2[79] = cgxw_WGPUTextureFormat_ASTC8x5Unorm;
    var$2[80] = cgxw_WGPUTextureFormat_ASTC8x5UnormSrgb;
    var$2[81] = cgxw_WGPUTextureFormat_ASTC8x6Unorm;
    var$2[82] = cgxw_WGPUTextureFormat_ASTC8x6UnormSrgb;
    var$2[83] = cgxw_WGPUTextureFormat_ASTC8x8Unorm;
    var$2[84] = cgxw_WGPUTextureFormat_ASTC8x8UnormSrgb;
    var$2[85] = cgxw_WGPUTextureFormat_ASTC10x5Unorm;
    var$2[86] = cgxw_WGPUTextureFormat_ASTC10x5UnormSrgb;
    var$2[87] = cgxw_WGPUTextureFormat_ASTC10x6Unorm;
    var$2[88] = cgxw_WGPUTextureFormat_ASTC10x6UnormSrgb;
    var$2[89] = cgxw_WGPUTextureFormat_ASTC10x8Unorm;
    var$2[90] = cgxw_WGPUTextureFormat_ASTC10x8UnormSrgb;
    var$2[91] = cgxw_WGPUTextureFormat_ASTC10x10Unorm;
    var$2[92] = cgxw_WGPUTextureFormat_ASTC10x10UnormSrgb;
    var$2[93] = cgxw_WGPUTextureFormat_ASTC12x10Unorm;
    var$2[94] = cgxw_WGPUTextureFormat_ASTC12x10UnormSrgb;
    var$2[95] = cgxw_WGPUTextureFormat_ASTC12x12Unorm;
    var$2[96] = cgxw_WGPUTextureFormat_ASTC12x12UnormSrgb;
    var$2[97] = cgxw_WGPUTextureFormat_Force32;
    return var$1;
},
cgxw_WGPUTextureFormat__clinit_ = () => {
    let var$1, var$2, var$3, $value, var$5, var$6;
    cgxw_WGPUTextureFormat_CUSTOM = cgxw_WGPUTextureFormat__init_($rt_s(55), 0, 0);
    cgxw_WGPUTextureFormat_Undefined = cgxw_WGPUTextureFormat__init_($rt_s(56), 1, jWebGPU.WGPUTextureFormat_Undefined);
    cgxw_WGPUTextureFormat_R8Unorm = cgxw_WGPUTextureFormat__init_($rt_s(97), 2, jWebGPU.WGPUTextureFormat_R8Unorm);
    cgxw_WGPUTextureFormat_R8Snorm = cgxw_WGPUTextureFormat__init_($rt_s(98), 3, jWebGPU.WGPUTextureFormat_R8Snorm);
    cgxw_WGPUTextureFormat_R8Uint = cgxw_WGPUTextureFormat__init_($rt_s(99), 4, jWebGPU.WGPUTextureFormat_R8Uint);
    cgxw_WGPUTextureFormat_R8Sint = cgxw_WGPUTextureFormat__init_($rt_s(100), 5, jWebGPU.WGPUTextureFormat_R8Sint);
    cgxw_WGPUTextureFormat_R16Uint = cgxw_WGPUTextureFormat__init_($rt_s(101), 6, jWebGPU.WGPUTextureFormat_R16Uint);
    cgxw_WGPUTextureFormat_R16Sint = cgxw_WGPUTextureFormat__init_($rt_s(102), 7, jWebGPU.WGPUTextureFormat_R16Sint);
    cgxw_WGPUTextureFormat_R16Float = cgxw_WGPUTextureFormat__init_($rt_s(103), 8, jWebGPU.WGPUTextureFormat_R16Float);
    cgxw_WGPUTextureFormat_RG8Unorm = cgxw_WGPUTextureFormat__init_($rt_s(104), 9, jWebGPU.WGPUTextureFormat_RG8Unorm);
    cgxw_WGPUTextureFormat_RG8Snorm = cgxw_WGPUTextureFormat__init_($rt_s(105), 10, jWebGPU.WGPUTextureFormat_RG8Snorm);
    cgxw_WGPUTextureFormat_RG8Uint = cgxw_WGPUTextureFormat__init_($rt_s(106), 11, jWebGPU.WGPUTextureFormat_RG8Uint);
    cgxw_WGPUTextureFormat_RG8Sint = cgxw_WGPUTextureFormat__init_($rt_s(107), 12, jWebGPU.WGPUTextureFormat_RG8Sint);
    cgxw_WGPUTextureFormat_R32Float = cgxw_WGPUTextureFormat__init_($rt_s(108), 13, jWebGPU.WGPUTextureFormat_R32Float);
    cgxw_WGPUTextureFormat_R32Uint = cgxw_WGPUTextureFormat__init_($rt_s(109), 14, jWebGPU.WGPUTextureFormat_R32Uint);
    cgxw_WGPUTextureFormat_R32Sint = cgxw_WGPUTextureFormat__init_($rt_s(110), 15, jWebGPU.WGPUTextureFormat_R32Sint);
    cgxw_WGPUTextureFormat_RG16Uint = cgxw_WGPUTextureFormat__init_($rt_s(111), 16, jWebGPU.WGPUTextureFormat_RG16Uint);
    cgxw_WGPUTextureFormat_RG16Sint = cgxw_WGPUTextureFormat__init_($rt_s(112), 17, jWebGPU.WGPUTextureFormat_RG16Sint);
    cgxw_WGPUTextureFormat_RG16Float = cgxw_WGPUTextureFormat__init_($rt_s(113), 18, jWebGPU.WGPUTextureFormat_RG16Float);
    cgxw_WGPUTextureFormat_RGBA8Unorm = cgxw_WGPUTextureFormat__init_($rt_s(114), 19, jWebGPU.WGPUTextureFormat_RGBA8Unorm);
    cgxw_WGPUTextureFormat_RGBA8UnormSrgb = cgxw_WGPUTextureFormat__init_($rt_s(115), 20, jWebGPU.WGPUTextureFormat_RGBA8UnormSrgb);
    cgxw_WGPUTextureFormat_RGBA8Snorm = cgxw_WGPUTextureFormat__init_($rt_s(116), 21, jWebGPU.WGPUTextureFormat_RGBA8Snorm);
    cgxw_WGPUTextureFormat_RGBA8Uint = cgxw_WGPUTextureFormat__init_($rt_s(117), 22, jWebGPU.WGPUTextureFormat_RGBA8Uint);
    cgxw_WGPUTextureFormat_RGBA8Sint = cgxw_WGPUTextureFormat__init_($rt_s(118), 23, jWebGPU.WGPUTextureFormat_RGBA8Sint);
    cgxw_WGPUTextureFormat_BGRA8Unorm = cgxw_WGPUTextureFormat__init_($rt_s(119), 24, jWebGPU.WGPUTextureFormat_BGRA8Unorm);
    cgxw_WGPUTextureFormat_BGRA8UnormSrgb = cgxw_WGPUTextureFormat__init_($rt_s(120), 25, jWebGPU.WGPUTextureFormat_BGRA8UnormSrgb);
    cgxw_WGPUTextureFormat_RGB10A2Uint = cgxw_WGPUTextureFormat__init_($rt_s(121), 26, jWebGPU.WGPUTextureFormat_RGB10A2Uint);
    cgxw_WGPUTextureFormat_RGB10A2Unorm = cgxw_WGPUTextureFormat__init_($rt_s(122), 27, jWebGPU.WGPUTextureFormat_RGB10A2Unorm);
    cgxw_WGPUTextureFormat_RG11B10Ufloat = cgxw_WGPUTextureFormat__init_($rt_s(123), 28, jWebGPU.WGPUTextureFormat_RG11B10Ufloat);
    cgxw_WGPUTextureFormat_RGB9E5Ufloat = cgxw_WGPUTextureFormat__init_($rt_s(124), 29, jWebGPU.WGPUTextureFormat_RGB9E5Ufloat);
    cgxw_WGPUTextureFormat_RG32Float = cgxw_WGPUTextureFormat__init_($rt_s(125), 30, jWebGPU.WGPUTextureFormat_RG32Float);
    cgxw_WGPUTextureFormat_RG32Uint = cgxw_WGPUTextureFormat__init_($rt_s(126), 31, jWebGPU.WGPUTextureFormat_RG32Uint);
    cgxw_WGPUTextureFormat_RG32Sint = cgxw_WGPUTextureFormat__init_($rt_s(127), 32, jWebGPU.WGPUTextureFormat_RG32Sint);
    cgxw_WGPUTextureFormat_RGBA16Uint = cgxw_WGPUTextureFormat__init_($rt_s(128), 33, jWebGPU.WGPUTextureFormat_RGBA16Uint);
    cgxw_WGPUTextureFormat_RGBA16Sint = cgxw_WGPUTextureFormat__init_($rt_s(129), 34, jWebGPU.WGPUTextureFormat_RGBA16Sint);
    cgxw_WGPUTextureFormat_RGBA16Float = cgxw_WGPUTextureFormat__init_($rt_s(130), 35, jWebGPU.WGPUTextureFormat_RGBA16Float);
    cgxw_WGPUTextureFormat_RGBA32Float = cgxw_WGPUTextureFormat__init_($rt_s(131), 36, jWebGPU.WGPUTextureFormat_RGBA32Float);
    cgxw_WGPUTextureFormat_RGBA32Uint = cgxw_WGPUTextureFormat__init_($rt_s(132), 37, jWebGPU.WGPUTextureFormat_RGBA32Uint);
    cgxw_WGPUTextureFormat_RGBA32Sint = cgxw_WGPUTextureFormat__init_($rt_s(133), 38, jWebGPU.WGPUTextureFormat_RGBA32Sint);
    cgxw_WGPUTextureFormat_Stencil8 = cgxw_WGPUTextureFormat__init_($rt_s(134), 39, jWebGPU.WGPUTextureFormat_Stencil8);
    cgxw_WGPUTextureFormat_Depth16Unorm = cgxw_WGPUTextureFormat__init_($rt_s(135), 40, jWebGPU.WGPUTextureFormat_Depth16Unorm);
    cgxw_WGPUTextureFormat_Depth24Plus = cgxw_WGPUTextureFormat__init_($rt_s(136), 41, jWebGPU.WGPUTextureFormat_Depth24Plus);
    cgxw_WGPUTextureFormat_Depth24PlusStencil8 = cgxw_WGPUTextureFormat__init_($rt_s(137), 42, jWebGPU.WGPUTextureFormat_Depth24PlusStencil8);
    cgxw_WGPUTextureFormat_Depth32Float = cgxw_WGPUTextureFormat__init_($rt_s(138), 43, jWebGPU.WGPUTextureFormat_Depth32Float);
    cgxw_WGPUTextureFormat_Depth32FloatStencil8 = cgxw_WGPUTextureFormat__init_($rt_s(139), 44, jWebGPU.WGPUTextureFormat_Depth32FloatStencil8);
    cgxw_WGPUTextureFormat_BC1RGBAUnorm = cgxw_WGPUTextureFormat__init_($rt_s(140), 45, jWebGPU.WGPUTextureFormat_BC1RGBAUnorm);
    cgxw_WGPUTextureFormat_BC1RGBAUnormSrgb = cgxw_WGPUTextureFormat__init_($rt_s(141), 46, jWebGPU.WGPUTextureFormat_BC1RGBAUnormSrgb);
    cgxw_WGPUTextureFormat_BC2RGBAUnorm = cgxw_WGPUTextureFormat__init_($rt_s(142), 47, jWebGPU.WGPUTextureFormat_BC2RGBAUnorm);
    cgxw_WGPUTextureFormat_BC2RGBAUnormSrgb = cgxw_WGPUTextureFormat__init_($rt_s(143), 48, jWebGPU.WGPUTextureFormat_BC2RGBAUnormSrgb);
    cgxw_WGPUTextureFormat_BC3RGBAUnorm = cgxw_WGPUTextureFormat__init_($rt_s(144), 49, jWebGPU.WGPUTextureFormat_BC3RGBAUnorm);
    cgxw_WGPUTextureFormat_BC3RGBAUnormSrgb = cgxw_WGPUTextureFormat__init_($rt_s(145), 50, jWebGPU.WGPUTextureFormat_BC3RGBAUnormSrgb);
    cgxw_WGPUTextureFormat_BC4RUnorm = cgxw_WGPUTextureFormat__init_($rt_s(146), 51, jWebGPU.WGPUTextureFormat_BC4RUnorm);
    cgxw_WGPUTextureFormat_BC4RSnorm = cgxw_WGPUTextureFormat__init_($rt_s(147), 52, jWebGPU.WGPUTextureFormat_BC4RSnorm);
    cgxw_WGPUTextureFormat_BC5RGUnorm = cgxw_WGPUTextureFormat__init_($rt_s(148), 53, jWebGPU.WGPUTextureFormat_BC5RGUnorm);
    cgxw_WGPUTextureFormat_BC5RGSnorm = cgxw_WGPUTextureFormat__init_($rt_s(149), 54, jWebGPU.WGPUTextureFormat_BC5RGSnorm);
    cgxw_WGPUTextureFormat_BC6HRGBUfloat = cgxw_WGPUTextureFormat__init_($rt_s(150), 55, jWebGPU.WGPUTextureFormat_BC6HRGBUfloat);
    cgxw_WGPUTextureFormat_BC6HRGBFloat = cgxw_WGPUTextureFormat__init_($rt_s(151), 56, jWebGPU.WGPUTextureFormat_BC6HRGBFloat);
    cgxw_WGPUTextureFormat_BC7RGBAUnorm = cgxw_WGPUTextureFormat__init_($rt_s(152), 57, jWebGPU.WGPUTextureFormat_BC7RGBAUnorm);
    cgxw_WGPUTextureFormat_BC7RGBAUnormSrgb = cgxw_WGPUTextureFormat__init_($rt_s(153), 58, jWebGPU.WGPUTextureFormat_BC7RGBAUnormSrgb);
    cgxw_WGPUTextureFormat_ETC2RGB8Unorm = cgxw_WGPUTextureFormat__init_($rt_s(154), 59, jWebGPU.WGPUTextureFormat_ETC2RGB8Unorm);
    cgxw_WGPUTextureFormat_ETC2RGB8UnormSrgb = cgxw_WGPUTextureFormat__init_($rt_s(155), 60, jWebGPU.WGPUTextureFormat_ETC2RGB8UnormSrgb);
    cgxw_WGPUTextureFormat_ETC2RGB8A1Unorm = cgxw_WGPUTextureFormat__init_($rt_s(156), 61, jWebGPU.WGPUTextureFormat_ETC2RGB8A1Unorm);
    cgxw_WGPUTextureFormat_ETC2RGB8A1UnormSrgb = cgxw_WGPUTextureFormat__init_($rt_s(157), 62, jWebGPU.WGPUTextureFormat_ETC2RGB8A1UnormSrgb);
    cgxw_WGPUTextureFormat_ETC2RGBA8Unorm = cgxw_WGPUTextureFormat__init_($rt_s(158), 63, jWebGPU.WGPUTextureFormat_ETC2RGBA8Unorm);
    cgxw_WGPUTextureFormat_ETC2RGBA8UnormSrgb = cgxw_WGPUTextureFormat__init_($rt_s(159), 64, jWebGPU.WGPUTextureFormat_ETC2RGBA8UnormSrgb);
    cgxw_WGPUTextureFormat_EACR11Unorm = cgxw_WGPUTextureFormat__init_($rt_s(160), 65, jWebGPU.WGPUTextureFormat_EACR11Unorm);
    cgxw_WGPUTextureFormat_EACR11Snorm = cgxw_WGPUTextureFormat__init_($rt_s(161), 66, jWebGPU.WGPUTextureFormat_EACR11Snorm);
    cgxw_WGPUTextureFormat_EACRG11Unorm = cgxw_WGPUTextureFormat__init_($rt_s(162), 67, jWebGPU.WGPUTextureFormat_EACRG11Unorm);
    cgxw_WGPUTextureFormat_EACRG11Snorm = cgxw_WGPUTextureFormat__init_($rt_s(163), 68, jWebGPU.WGPUTextureFormat_EACRG11Snorm);
    cgxw_WGPUTextureFormat_ASTC4x4Unorm = cgxw_WGPUTextureFormat__init_($rt_s(164), 69, jWebGPU.WGPUTextureFormat_ASTC4x4Unorm);
    cgxw_WGPUTextureFormat_ASTC4x4UnormSrgb = cgxw_WGPUTextureFormat__init_($rt_s(165), 70, jWebGPU.WGPUTextureFormat_ASTC4x4UnormSrgb);
    cgxw_WGPUTextureFormat_ASTC5x4Unorm = cgxw_WGPUTextureFormat__init_($rt_s(166), 71, jWebGPU.WGPUTextureFormat_ASTC5x4Unorm);
    cgxw_WGPUTextureFormat_ASTC5x4UnormSrgb = cgxw_WGPUTextureFormat__init_($rt_s(167), 72, jWebGPU.WGPUTextureFormat_ASTC5x4UnormSrgb);
    cgxw_WGPUTextureFormat_ASTC5x5Unorm = cgxw_WGPUTextureFormat__init_($rt_s(168), 73, jWebGPU.WGPUTextureFormat_ASTC5x5Unorm);
    cgxw_WGPUTextureFormat_ASTC5x5UnormSrgb = cgxw_WGPUTextureFormat__init_($rt_s(169), 74, jWebGPU.WGPUTextureFormat_ASTC5x5UnormSrgb);
    cgxw_WGPUTextureFormat_ASTC6x5Unorm = cgxw_WGPUTextureFormat__init_($rt_s(170), 75, jWebGPU.WGPUTextureFormat_ASTC6x5Unorm);
    cgxw_WGPUTextureFormat_ASTC6x5UnormSrgb = cgxw_WGPUTextureFormat__init_($rt_s(171), 76, jWebGPU.WGPUTextureFormat_ASTC6x5UnormSrgb);
    cgxw_WGPUTextureFormat_ASTC6x6Unorm = cgxw_WGPUTextureFormat__init_($rt_s(172), 77, jWebGPU.WGPUTextureFormat_ASTC6x6Unorm);
    cgxw_WGPUTextureFormat_ASTC6x6UnormSrgb = cgxw_WGPUTextureFormat__init_($rt_s(173), 78, jWebGPU.WGPUTextureFormat_ASTC6x6UnormSrgb);
    cgxw_WGPUTextureFormat_ASTC8x5Unorm = cgxw_WGPUTextureFormat__init_($rt_s(174), 79, jWebGPU.WGPUTextureFormat_ASTC8x5Unorm);
    cgxw_WGPUTextureFormat_ASTC8x5UnormSrgb = cgxw_WGPUTextureFormat__init_($rt_s(175), 80, jWebGPU.WGPUTextureFormat_ASTC8x5UnormSrgb);
    cgxw_WGPUTextureFormat_ASTC8x6Unorm = cgxw_WGPUTextureFormat__init_($rt_s(176), 81, jWebGPU.WGPUTextureFormat_ASTC8x6Unorm);
    cgxw_WGPUTextureFormat_ASTC8x6UnormSrgb = cgxw_WGPUTextureFormat__init_($rt_s(177), 82, jWebGPU.WGPUTextureFormat_ASTC8x6UnormSrgb);
    cgxw_WGPUTextureFormat_ASTC8x8Unorm = cgxw_WGPUTextureFormat__init_($rt_s(178), 83, jWebGPU.WGPUTextureFormat_ASTC8x8Unorm);
    cgxw_WGPUTextureFormat_ASTC8x8UnormSrgb = cgxw_WGPUTextureFormat__init_($rt_s(179), 84, jWebGPU.WGPUTextureFormat_ASTC8x8UnormSrgb);
    cgxw_WGPUTextureFormat_ASTC10x5Unorm = cgxw_WGPUTextureFormat__init_($rt_s(180), 85, jWebGPU.WGPUTextureFormat_ASTC10x5Unorm);
    cgxw_WGPUTextureFormat_ASTC10x5UnormSrgb = cgxw_WGPUTextureFormat__init_($rt_s(181), 86, jWebGPU.WGPUTextureFormat_ASTC10x5UnormSrgb);
    cgxw_WGPUTextureFormat_ASTC10x6Unorm = cgxw_WGPUTextureFormat__init_($rt_s(182), 87, jWebGPU.WGPUTextureFormat_ASTC10x6Unorm);
    cgxw_WGPUTextureFormat_ASTC10x6UnormSrgb = cgxw_WGPUTextureFormat__init_($rt_s(183), 88, jWebGPU.WGPUTextureFormat_ASTC10x6UnormSrgb);
    cgxw_WGPUTextureFormat_ASTC10x8Unorm = cgxw_WGPUTextureFormat__init_($rt_s(184), 89, jWebGPU.WGPUTextureFormat_ASTC10x8Unorm);
    cgxw_WGPUTextureFormat_ASTC10x8UnormSrgb = cgxw_WGPUTextureFormat__init_($rt_s(185), 90, jWebGPU.WGPUTextureFormat_ASTC10x8UnormSrgb);
    cgxw_WGPUTextureFormat_ASTC10x10Unorm = cgxw_WGPUTextureFormat__init_($rt_s(186), 91, jWebGPU.WGPUTextureFormat_ASTC10x10Unorm);
    cgxw_WGPUTextureFormat_ASTC10x10UnormSrgb = cgxw_WGPUTextureFormat__init_($rt_s(187), 92, jWebGPU.WGPUTextureFormat_ASTC10x10UnormSrgb);
    cgxw_WGPUTextureFormat_ASTC12x10Unorm = cgxw_WGPUTextureFormat__init_($rt_s(188), 93, jWebGPU.WGPUTextureFormat_ASTC12x10Unorm);
    cgxw_WGPUTextureFormat_ASTC12x10UnormSrgb = cgxw_WGPUTextureFormat__init_($rt_s(189), 94, jWebGPU.WGPUTextureFormat_ASTC12x10UnormSrgb);
    cgxw_WGPUTextureFormat_ASTC12x12Unorm = cgxw_WGPUTextureFormat__init_($rt_s(190), 95, jWebGPU.WGPUTextureFormat_ASTC12x12Unorm);
    cgxw_WGPUTextureFormat_ASTC12x12UnormSrgb = cgxw_WGPUTextureFormat__init_($rt_s(191), 96, jWebGPU.WGPUTextureFormat_ASTC12x12UnormSrgb);
    cgxw_WGPUTextureFormat_Force32 = cgxw_WGPUTextureFormat__init_($rt_s(59), 97, jWebGPU.WGPUTextureFormat_Force32);
    cgxw_WGPUTextureFormat_$VALUES = cgxw_WGPUTextureFormat_$values();
    cgxw_WGPUTextureFormat_MAP = ju_HashMap__init_();
    var$1 = (cgxw_WGPUTextureFormat_values()).data;
    var$2 = var$1.length;
    var$3 = 0;
    while (var$3 < var$2) {
        $value = var$1[var$3];
        if ($value !== cgxw_WGPUTextureFormat_CUSTOM) {
            var$5 = cgxw_WGPUTextureFormat_MAP;
            var$6 = jl_Integer_valueOf($value.$value);
            ju_HashMap_put(var$5, var$6, $value);
        }
        var$3 = var$3 + 1 | 0;
    }
},
cgxw_JRenderPipeline = $rt_classWithoutFields(cgxwi_IDLBase),
cgxw_JRenderPipeline_T_01 = null,
cgxw_JRenderPipeline_T_02 = null,
cgxw_JRenderPipeline_T_03 = null,
cgxw_JRenderPipeline_deleteNative = $this => {
    cgxw_JRenderPipeline_internal_native_deleteNative$js_body$_6(Long_lo($this.$nativeData.$cPointer));
},
cgxw_JRenderPipeline__clinit_ = () => {
    let var$1;
    var$1 = new cgxw_JRenderPipeline;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JRenderPipeline_T_01 = var$1;
    var$1 = new cgxw_JRenderPipeline;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JRenderPipeline_T_02 = var$1;
    var$1 = new cgxw_JRenderPipeline;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JRenderPipeline_T_03 = var$1;
},
cgxw_JRenderPipeline_internal_native_deleteNative$js_body$_6 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JRenderPipeline);
    jWebGPU.destroy(jsObj);
},
jl_Math = $rt_classWithoutFields(),
jl_Math_min = (var$1, $b) => {
    if (var$1 < $b)
        $b = var$1;
    return $b;
},
jl_Math_max = ($a, $b) => {
    if ($a > $b)
        $b = $a;
    return $b;
},
ju_Arrays = $rt_classWithoutFields();
function cgxw_WGPURequestAdapterStatus() {
    jl_Enum.call(this);
    this.$value11 = 0;
}
let cgxw_WGPURequestAdapterStatus_CUSTOM = null,
cgxw_WGPURequestAdapterStatus_Success = null,
cgxw_WGPURequestAdapterStatus_Unavailable = null,
cgxw_WGPURequestAdapterStatus_Error = null,
cgxw_WGPURequestAdapterStatus_Force32 = null,
cgxw_WGPURequestAdapterStatus_MAP = null,
cgxw_WGPURequestAdapterStatus_$VALUES = null,
cgxw_WGPURequestAdapterStatus_$callClinit = () => {
    cgxw_WGPURequestAdapterStatus_$callClinit = $rt_eraseClinit(cgxw_WGPURequestAdapterStatus);
    cgxw_WGPURequestAdapterStatus__clinit_();
},
cgxw_WGPURequestAdapterStatus__init_0 = ($this, var$1, var$2, $value) => {
    cgxw_WGPURequestAdapterStatus_$callClinit();
    jl_Enum__init_($this, var$1, var$2);
    $this.$value11 = $value;
},
cgxw_WGPURequestAdapterStatus__init_ = (var_0, var_1, var_2) => {
    let var_3 = new cgxw_WGPURequestAdapterStatus();
    cgxw_WGPURequestAdapterStatus__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
cgxw_WGPURequestAdapterStatus__clinit_ = () => {
    let $value, var$2, var$3, var$4, var$5, var$6, var$7;
    cgxw_WGPURequestAdapterStatus_CUSTOM = cgxw_WGPURequestAdapterStatus__init_($rt_s(55), 0, 0);
    cgxw_WGPURequestAdapterStatus_Success = cgxw_WGPURequestAdapterStatus__init_($rt_s(192), 1, jWebGPU.WGPURequestAdapterStatus_Success);
    cgxw_WGPURequestAdapterStatus_Unavailable = cgxw_WGPURequestAdapterStatus__init_($rt_s(193), 2, jWebGPU.WGPURequestAdapterStatus_Unavailable);
    cgxw_WGPURequestAdapterStatus_Error = cgxw_WGPURequestAdapterStatus__init_($rt_s(194), 3, jWebGPU.WGPURequestAdapterStatus_Error);
    $value = cgxw_WGPURequestAdapterStatus__init_($rt_s(59), 4, jWebGPU.WGPURequestAdapterStatus_Force32);
    cgxw_WGPURequestAdapterStatus_Force32 = $value;
    var$2 = $rt_createArray(cgxw_WGPURequestAdapterStatus, 5);
    var$3 = var$2.data;
    var$3[0] = cgxw_WGPURequestAdapterStatus_CUSTOM;
    var$3[1] = cgxw_WGPURequestAdapterStatus_Success;
    var$3[2] = cgxw_WGPURequestAdapterStatus_Unavailable;
    var$3[3] = cgxw_WGPURequestAdapterStatus_Error;
    var$3[4] = $value;
    cgxw_WGPURequestAdapterStatus_$VALUES = var$2;
    cgxw_WGPURequestAdapterStatus_MAP = ju_HashMap__init_();
    var$2 = (cgxw_WGPURequestAdapterStatus_$VALUES.$clone0()).data;
    var$4 = var$2.length;
    var$5 = 0;
    while (var$5 < var$4) {
        $value = var$2[var$5];
        if ($value !== cgxw_WGPURequestAdapterStatus_CUSTOM) {
            var$6 = cgxw_WGPURequestAdapterStatus_MAP;
            var$7 = jl_Integer_valueOf($value.$value11);
            ju_HashMap_put(var$6, var$7, $value);
        }
        var$5 = var$5 + 1 | 0;
    }
},
cgxw_JAdapter = $rt_classWithoutFields(cgxwi_IDLBase),
cgxw_JAdapter_T_01 = null,
cgxw_JAdapter_T_02 = null,
cgxw_JAdapter_T_03 = null,
cgxw_JAdapter_deleteNative = $this => {
    cgxw_JAdapter_internal_native_deleteNative$js_body$_4(Long_lo($this.$nativeData.$cPointer));
},
cgxw_JAdapter_RequestDevice = ($this, $options, $mode, $callback, $errorCallback) => {
    let var$5, var$6, var$7, var$8, var$9;
    var$5 = Long_lo($this.$nativeData.$cPointer);
    var$6 = Long_lo(($options === null ? Long_ZERO : $options.$nativeData.$cPointer));
    var$7 = Long_lo(Long_fromInt($mode === null ? 0 : $mode.$value0));
    var$8 = Long_lo(($callback === null ? Long_ZERO : $callback.$nativeData.$cPointer));
    var$9 = Long_lo(($errorCallback === null ? Long_ZERO : $errorCallback.$nativeData.$cPointer));
    cgxw_JAdapter_internal_native_RequestDevice$js_body$_8(var$5, var$6, var$7, var$8, var$9);
},
cgxw_JAdapter_HasFeature = ($this, $featureName) => {
    return cgxw_JAdapter_internal_native_HasFeature$js_body$_12(Long_lo($this.$nativeData.$cPointer), Long_lo(Long_fromInt($featureName === null ? 0 : $featureName.$value2))) ? 1 : 0;
},
cgxw_JAdapter__clinit_ = () => {
    let var$1;
    var$1 = new cgxw_JAdapter;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JAdapter_T_01 = var$1;
    var$1 = new cgxw_JAdapter;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JAdapter_T_02 = var$1;
    var$1 = new cgxw_JAdapter;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JAdapter_T_03 = var$1;
},
cgxw_JAdapter_internal_native_deleteNative$js_body$_4 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JAdapter);
    jWebGPU.destroy(jsObj);
},
cgxw_JAdapter_internal_native_RequestDevice$js_body$_8 = (var$1, var$2, var$3, var$4, var$5) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JAdapter);
    jsObj.RequestDevice(var$2, var$3, var$4, var$5);
},
cgxw_JAdapter_internal_native_GetInfo$js_body$_10 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JAdapter);
    var returnedJSObj = jsObj.GetInfo(var$2);
    return returnedJSObj;
},
cgxw_JAdapter_internal_native_HasFeature$js_body$_12 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JAdapter);
    var returnedJSObj = jsObj.HasFeature(var$2);
    return returnedJSObj;
};
function cgxw_JAdapterInfo() {
    let a = this; cgxwi_IDLBase.call(a);
    a.$IDLString_TEMP_GEN_0 = null;
    a.$IDLString_TEMP_GEN_1 = null;
    a.$IDLString_TEMP_GEN_2 = null;
    a.$IDLString_TEMP_GEN_3 = null;
}
let cgxw_JAdapterInfo_T_01 = null,
cgxw_JAdapterInfo_T_02 = null,
cgxw_JAdapterInfo_T_03 = null,
cgxw_JAdapterInfo_deleteNative = $this => {
    cgxw_JAdapterInfo_internal_native_deleteNative$js_body$_6(Long_lo($this.$nativeData.$cPointer));
},
cgxw_JAdapterInfo_GetVendor = $this => {
    let $pointer;
    $pointer = cgxw_JAdapterInfo_internal_native_GetVendor$js_body$_8(Long_lo($this.$nativeData.$cPointer));
    if (!$pointer)
        return null;
    if ($this.$IDLString_TEMP_GEN_0 === null)
        $this.$IDLString_TEMP_GEN_0 = cgxwih_IDLString__init_(1, 1);
    cgxwi_IDLNativeData_reset($this.$IDLString_TEMP_GEN_0.$nativeData, Long_fromInt($pointer), 0);
    return $this.$IDLString_TEMP_GEN_0;
},
cgxw_JAdapterInfo_GetArchitecture = $this => {
    let $pointer;
    $pointer = cgxw_JAdapterInfo_internal_native_GetArchitecture$js_body$_10(Long_lo($this.$nativeData.$cPointer));
    if (!$pointer)
        return null;
    if ($this.$IDLString_TEMP_GEN_1 === null)
        $this.$IDLString_TEMP_GEN_1 = cgxwih_IDLString__init_(1, 1);
    cgxwi_IDLNativeData_reset($this.$IDLString_TEMP_GEN_1.$nativeData, Long_fromInt($pointer), 0);
    return $this.$IDLString_TEMP_GEN_1;
},
cgxw_JAdapterInfo_GetDevice = $this => {
    let $pointer;
    $pointer = cgxw_JAdapterInfo_internal_native_GetDevice$js_body$_12(Long_lo($this.$nativeData.$cPointer));
    if (!$pointer)
        return null;
    if ($this.$IDLString_TEMP_GEN_2 === null)
        $this.$IDLString_TEMP_GEN_2 = cgxwih_IDLString__init_(1, 1);
    cgxwi_IDLNativeData_reset($this.$IDLString_TEMP_GEN_2.$nativeData, Long_fromInt($pointer), 0);
    return $this.$IDLString_TEMP_GEN_2;
},
cgxw_JAdapterInfo_GetDescription = $this => {
    let $pointer;
    $pointer = cgxw_JAdapterInfo_internal_native_GetDescription$js_body$_14(Long_lo($this.$nativeData.$cPointer));
    if (!$pointer)
        return null;
    if ($this.$IDLString_TEMP_GEN_3 === null)
        $this.$IDLString_TEMP_GEN_3 = cgxwih_IDLString__init_(1, 1);
    cgxwi_IDLNativeData_reset($this.$IDLString_TEMP_GEN_3.$nativeData, Long_fromInt($pointer), 0);
    return $this.$IDLString_TEMP_GEN_3;
},
cgxw_JAdapterInfo__clinit_ = () => {
    let var$1;
    var$1 = new cgxw_JAdapterInfo;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JAdapterInfo_T_01 = var$1;
    var$1 = new cgxw_JAdapterInfo;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JAdapterInfo_T_02 = var$1;
    var$1 = new cgxw_JAdapterInfo;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JAdapterInfo_T_03 = var$1;
},
cgxw_JAdapterInfo_internal_native_create$js_body$_1 = () => {
    var jsObj = new jWebGPU.JAdapterInfo();
    return jWebGPU.getPointer(jsObj);
},
cgxw_JAdapterInfo_internal_native_deleteNative$js_body$_6 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JAdapterInfo);
    jWebGPU.destroy(jsObj);
},
cgxw_JAdapterInfo_internal_native_GetVendor$js_body$_8 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JAdapterInfo);
    var returnedJSObj = jsObj.GetVendor();
    if (!returnedJSObj.hasOwnProperty('ptr')) return 0;
    return jWebGPU.getPointer(returnedJSObj);
},
cgxw_JAdapterInfo_internal_native_GetArchitecture$js_body$_10 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JAdapterInfo);
    var returnedJSObj = jsObj.GetArchitecture();
    if (!returnedJSObj.hasOwnProperty('ptr')) return 0;
    return jWebGPU.getPointer(returnedJSObj);
},
cgxw_JAdapterInfo_internal_native_GetDevice$js_body$_12 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JAdapterInfo);
    var returnedJSObj = jsObj.GetDevice();
    if (!returnedJSObj.hasOwnProperty('ptr')) return 0;
    return jWebGPU.getPointer(returnedJSObj);
},
cgxw_JAdapterInfo_internal_native_GetDescription$js_body$_14 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JAdapterInfo);
    var returnedJSObj = jsObj.GetDescription();
    if (!returnedJSObj.hasOwnProperty('ptr')) return 0;
    return jWebGPU.getPointer(returnedJSObj);
},
cgxw_JAdapterInfo_internal_native_GetBackendType$js_body$_16 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JAdapterInfo);
    var returnedJSObj = jsObj.GetBackendType();
    return returnedJSObj;
},
cgxw_JAdapterInfo_internal_native_GetAdapterType$js_body$_18 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JAdapterInfo);
    var returnedJSObj = jsObj.GetAdapterType();
    return returnedJSObj;
};
function cgxw_JDeviceDescriptor() {
    cgxwi_IDLBase.call(this);
    this.$JQueueDescriptor_TEMP_GEN_0 = null;
}
let cgxw_JDeviceDescriptor_T_01 = null,
cgxw_JDeviceDescriptor_T_02 = null,
cgxw_JDeviceDescriptor_T_03 = null,
cgxw_JDeviceDescriptor_deleteNative = $this => {
    cgxw_JDeviceDescriptor_internal_native_deleteNative$js_body$_6(Long_lo($this.$nativeData.$cPointer));
},
cgxw_JDeviceDescriptor__clinit_ = () => {
    let var$1;
    var$1 = new cgxw_JDeviceDescriptor;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JDeviceDescriptor_T_01 = var$1;
    var$1 = new cgxw_JDeviceDescriptor;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JDeviceDescriptor_T_02 = var$1;
    var$1 = new cgxw_JDeviceDescriptor;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JDeviceDescriptor_T_03 = var$1;
},
cgxw_JDeviceDescriptor_internal_native_create$js_body$_1 = () => {
    var jsObj = new jWebGPU.JDeviceDescriptor();
    return jWebGPU.getPointer(jsObj);
},
cgxw_JDeviceDescriptor_internal_native_deleteNative$js_body$_6 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JDeviceDescriptor);
    jWebGPU.destroy(jsObj);
},
cgxw_JDeviceDescriptor_internal_native_SetLabel$js_body$_8 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JDeviceDescriptor);
    jsObj.SetLabel(var$2);
},
cgxw_JDeviceDescriptor_internal_native_SetRequiredFeatures$js_body$_12 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JDeviceDescriptor);
    jsObj.SetRequiredFeatures(var$2);
},
cgxw_JDeviceDescriptor_internal_native_GetDefaultQueue$js_body$_14 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JDeviceDescriptor);
    var returnedJSObj = jsObj.GetDefaultQueue();
    if (!returnedJSObj.hasOwnProperty('ptr')) return 0;
    return jWebGPU.getPointer(returnedJSObj);
},
cgxw_JVectorRequiredFeatures = $rt_classWithoutFields(cgxwi_IDLBase),
cgxw_JVectorRequiredFeatures_T_01 = null,
cgxw_JVectorRequiredFeatures_T_02 = null,
cgxw_JVectorRequiredFeatures_T_03 = null,
cgxw_JVectorRequiredFeatures_deleteNative = $this => {
    cgxw_JVectorRequiredFeatures_internal_native_deleteNative$js_body$_6(Long_lo($this.$nativeData.$cPointer));
},
cgxw_JVectorRequiredFeatures__clinit_ = () => {
    let var$1;
    var$1 = new cgxw_JVectorRequiredFeatures;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JVectorRequiredFeatures_T_01 = var$1;
    var$1 = new cgxw_JVectorRequiredFeatures;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JVectorRequiredFeatures_T_02 = var$1;
    var$1 = new cgxw_JVectorRequiredFeatures;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JVectorRequiredFeatures_T_03 = var$1;
},
cgxw_JVectorRequiredFeatures_internal_native_create$js_body$_1 = () => {
    var jsObj = new jWebGPU.JVectorRequiredFeatures();
    return jWebGPU.getPointer(jsObj);
},
cgxw_JVectorRequiredFeatures_internal_native_deleteNative$js_body$_6 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JVectorRequiredFeatures);
    jWebGPU.destroy(jsObj);
},
cgxw_JVectorRequiredFeatures_internal_native_push_back$js_body$_8 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JVectorRequiredFeatures);
    jsObj.push_back(var$2);
};
function cgxw_WGPUFeatureName() {
    jl_Enum.call(this);
    this.$value2 = 0;
}
let cgxw_WGPUFeatureName_CUSTOM = null,
cgxw_WGPUFeatureName_DepthClipControl = null,
cgxw_WGPUFeatureName_Depth32FloatStencil8 = null,
cgxw_WGPUFeatureName_TimestampQuery = null,
cgxw_WGPUFeatureName_TextureCompressionBC = null,
cgxw_WGPUFeatureName_TextureCompressionBCSliced3D = null,
cgxw_WGPUFeatureName_TextureCompressionETC2 = null,
cgxw_WGPUFeatureName_TextureCompressionASTC = null,
cgxw_WGPUFeatureName_TextureCompressionASTCSliced3D = null,
cgxw_WGPUFeatureName_IndirectFirstInstance = null,
cgxw_WGPUFeatureName_ShaderF16 = null,
cgxw_WGPUFeatureName_RG11B10UfloatRenderable = null,
cgxw_WGPUFeatureName_BGRA8UnormStorage = null,
cgxw_WGPUFeatureName_Float32Filterable = null,
cgxw_WGPUFeatureName_Float32Blendable = null,
cgxw_WGPUFeatureName_ClipDistances = null,
cgxw_WGPUFeatureName_DualSourceBlending = null,
cgxw_WGPUFeatureName_Force32 = null,
cgxw_WGPUFeatureName_MAP = null,
cgxw_WGPUFeatureName_$VALUES = null,
cgxw_WGPUFeatureName_$callClinit = () => {
    cgxw_WGPUFeatureName_$callClinit = $rt_eraseClinit(cgxw_WGPUFeatureName);
    cgxw_WGPUFeatureName__clinit_();
},
cgxw_WGPUFeatureName__init_0 = ($this, var$1, var$2, $value) => {
    cgxw_WGPUFeatureName_$callClinit();
    jl_Enum__init_($this, var$1, var$2);
    $this.$value2 = $value;
},
cgxw_WGPUFeatureName__init_ = (var_0, var_1, var_2) => {
    let var_3 = new cgxw_WGPUFeatureName();
    cgxw_WGPUFeatureName__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
cgxw_WGPUFeatureName__clinit_ = () => {
    let $value, var$2, var$3, var$4, var$5, var$6, var$7;
    cgxw_WGPUFeatureName_CUSTOM = cgxw_WGPUFeatureName__init_($rt_s(55), 0, 0);
    cgxw_WGPUFeatureName_DepthClipControl = cgxw_WGPUFeatureName__init_($rt_s(195), 1, jWebGPU.WGPUFeatureName_DepthClipControl);
    cgxw_WGPUFeatureName_Depth32FloatStencil8 = cgxw_WGPUFeatureName__init_($rt_s(139), 2, jWebGPU.WGPUFeatureName_Depth32FloatStencil8);
    cgxw_WGPUFeatureName_TimestampQuery = cgxw_WGPUFeatureName__init_($rt_s(196), 3, jWebGPU.WGPUFeatureName_TimestampQuery);
    cgxw_WGPUFeatureName_TextureCompressionBC = cgxw_WGPUFeatureName__init_($rt_s(197), 4, jWebGPU.WGPUFeatureName_TextureCompressionBC);
    cgxw_WGPUFeatureName_TextureCompressionBCSliced3D = cgxw_WGPUFeatureName__init_($rt_s(198), 5, jWebGPU.WGPUFeatureName_TextureCompressionBCSliced3D);
    cgxw_WGPUFeatureName_TextureCompressionETC2 = cgxw_WGPUFeatureName__init_($rt_s(199), 6, jWebGPU.WGPUFeatureName_TextureCompressionETC2);
    cgxw_WGPUFeatureName_TextureCompressionASTC = cgxw_WGPUFeatureName__init_($rt_s(200), 7, jWebGPU.WGPUFeatureName_TextureCompressionASTC);
    cgxw_WGPUFeatureName_TextureCompressionASTCSliced3D = cgxw_WGPUFeatureName__init_($rt_s(201), 8, jWebGPU.WGPUFeatureName_TextureCompressionASTCSliced3D);
    cgxw_WGPUFeatureName_IndirectFirstInstance = cgxw_WGPUFeatureName__init_($rt_s(202), 9, jWebGPU.WGPUFeatureName_IndirectFirstInstance);
    cgxw_WGPUFeatureName_ShaderF16 = cgxw_WGPUFeatureName__init_($rt_s(203), 10, jWebGPU.WGPUFeatureName_ShaderF16);
    cgxw_WGPUFeatureName_RG11B10UfloatRenderable = cgxw_WGPUFeatureName__init_($rt_s(204), 11, jWebGPU.WGPUFeatureName_RG11B10UfloatRenderable);
    cgxw_WGPUFeatureName_BGRA8UnormStorage = cgxw_WGPUFeatureName__init_($rt_s(205), 12, jWebGPU.WGPUFeatureName_BGRA8UnormStorage);
    cgxw_WGPUFeatureName_Float32Filterable = cgxw_WGPUFeatureName__init_($rt_s(206), 13, jWebGPU.WGPUFeatureName_Float32Filterable);
    cgxw_WGPUFeatureName_Float32Blendable = cgxw_WGPUFeatureName__init_($rt_s(207), 14, jWebGPU.WGPUFeatureName_Float32Blendable);
    cgxw_WGPUFeatureName_ClipDistances = cgxw_WGPUFeatureName__init_($rt_s(208), 15, jWebGPU.WGPUFeatureName_ClipDistances);
    cgxw_WGPUFeatureName_DualSourceBlending = cgxw_WGPUFeatureName__init_($rt_s(209), 16, jWebGPU.WGPUFeatureName_DualSourceBlending);
    $value = cgxw_WGPUFeatureName__init_($rt_s(59), 17, jWebGPU.WGPUFeatureName_Force32);
    cgxw_WGPUFeatureName_Force32 = $value;
    var$2 = $rt_createArray(cgxw_WGPUFeatureName, 18);
    var$3 = var$2.data;
    var$3[0] = cgxw_WGPUFeatureName_CUSTOM;
    var$3[1] = cgxw_WGPUFeatureName_DepthClipControl;
    var$3[2] = cgxw_WGPUFeatureName_Depth32FloatStencil8;
    var$3[3] = cgxw_WGPUFeatureName_TimestampQuery;
    var$3[4] = cgxw_WGPUFeatureName_TextureCompressionBC;
    var$3[5] = cgxw_WGPUFeatureName_TextureCompressionBCSliced3D;
    var$3[6] = cgxw_WGPUFeatureName_TextureCompressionETC2;
    var$3[7] = cgxw_WGPUFeatureName_TextureCompressionASTC;
    var$3[8] = cgxw_WGPUFeatureName_TextureCompressionASTCSliced3D;
    var$3[9] = cgxw_WGPUFeatureName_IndirectFirstInstance;
    var$3[10] = cgxw_WGPUFeatureName_ShaderF16;
    var$3[11] = cgxw_WGPUFeatureName_RG11B10UfloatRenderable;
    var$3[12] = cgxw_WGPUFeatureName_BGRA8UnormStorage;
    var$3[13] = cgxw_WGPUFeatureName_Float32Filterable;
    var$3[14] = cgxw_WGPUFeatureName_Float32Blendable;
    var$3[15] = cgxw_WGPUFeatureName_ClipDistances;
    var$3[16] = cgxw_WGPUFeatureName_DualSourceBlending;
    var$3[17] = $value;
    cgxw_WGPUFeatureName_$VALUES = var$2;
    cgxw_WGPUFeatureName_MAP = ju_HashMap__init_();
    var$2 = (cgxw_WGPUFeatureName_$VALUES.$clone0()).data;
    var$4 = var$2.length;
    var$5 = 0;
    while (var$5 < var$4) {
        $value = var$2[var$5];
        if ($value !== cgxw_WGPUFeatureName_CUSTOM) {
            var$6 = cgxw_WGPUFeatureName_MAP;
            var$7 = jl_Integer_valueOf($value.$value2);
            ju_HashMap_put(var$6, var$7, $value);
        }
        var$5 = var$5 + 1 | 0;
    }
},
cgxw_RequestDeviceCallback = $rt_classWithoutFields(cgxwi_IDLBase),
cgxw_RequestDeviceCallback_JDevice_TEMP_STATIC_GEN_0 = null,
cgxw_RequestDeviceCallback_deleteNative = $this => {
    cgxw_RequestDeviceCallback_internal_native_deleteNative$js_body$_4(Long_lo($this.$nativeData.$cPointer));
},
cgxw_RequestDeviceCallback_internal_native_deleteNative$js_body$_4 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.RequestDeviceCallbackImpl);
    jWebGPU.destroy(jsObj);
},
cgxw_RequestDeviceCallback_internal_native_create$js_body$_9 = () => {
    var jsObj = new jWebGPU.RequestDeviceCallbackImpl();
    return jWebGPU.getPointer(jsObj);
},
cgxw_RequestDeviceCallback_internal_native_setupCallback$js_body$_10 = (var$1, var$2) => {
    var RequestDeviceCallbackImpl = jWebGPU.wrapPointer(var$1, jWebGPU.RequestDeviceCallbackImpl);
    RequestDeviceCallbackImpl.OnCallback = var$2;
};
function cgxwbc_WGPUApp$2() {
    cgxw_RequestDeviceCallback.call(this);
    this.$this$00 = null;
}
let cgxwbc_WGPUApp$2_OnCallback = ($this, var$1, var$2) => {
    let $features, $limits, $featureName, $i, var$7, var$8;
    $features = jl_System_out();
    $limits = jl_String_valueOf(var$1);
    $featureName = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append($featureName, $rt_s(210)), $limits);
    $limits = jl_StringBuilder_toString($featureName);
    otcic_JsConsolePrintStream_println($features, $limits);
    cgxw_WGPURequestDeviceStatus_$callClinit();
    if (var$1 !== cgxw_WGPURequestDeviceStatus_Success)
        $this.$this$00.$initState = cgxwbc_WGPUApp$InitState_DEVICE_NOT_VALID;
    else {
        var$1 = $this.$this$00;
        var$1.$initState = cgxwbc_WGPUApp$InitState_DEVICE_VALID;
        var$1.$device = var$2;
        $i = cgxw_JDevice_internal_native_GetQueue$js_body$_8(Long_lo(var$2.$nativeData.$cPointer));
        if (!$i)
            $features = null;
        else {
            if (var$2.$JQueue_TEMP_GEN_0 === null) {
                $features = new cgxw_JQueue;
                cgxwi_IDLBase__init_($features);
                var$2.$JQueue_TEMP_GEN_0 = $features;
            }
            cgxwi_IDLNativeData_reset(var$2.$JQueue_TEMP_GEN_0.$nativeData, Long_fromInt($i), 0);
            $features = var$2.$JQueue_TEMP_GEN_0;
        }
        var$1.$queue = $features;
        var$1 = jl_System_out();
        $features = jl_String_valueOf(cgxw_JWebGPU_GetPlatformType());
        $limits = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append($limits, $rt_s(211)), $features);
        $features = jl_StringBuilder_toString($limits);
        otcic_JsConsolePrintStream_println(var$1, $features);
        $features = new cgxw_JSupportedFeatures;
        cgxwi_IDLBase__init_($features);
        $i = cgxw_JSupportedFeatures_internal_native_create$js_body$_1();
        cgxwi_IDLNativeData_reset($features.$nativeData, Long_fromInt($i), 1);
        cgxw_JDevice_internal_native_GetFeatures$js_body$_14(Long_lo(var$2.$nativeData.$cPointer), Long_lo($features.$nativeData.$cPointer));
        var$7 = cgxw_JSupportedFeatures_internal_native_GetFeatureCount$js_body$_8(Long_lo($features.$nativeData.$cPointer));
        var$1 = jl_System_out();
        $limits = jl_StringBuilder__init_();
        jl_StringBuilder_append0(jl_StringBuilder_append($limits, $rt_s(212)), var$7);
        $limits = jl_StringBuilder_toString($limits);
        otcic_JsConsolePrintStream_println(var$1, $limits);
        $i = 0;
        while ($i < var$7) {
            var$8 = cgxw_JSupportedFeatures_internal_native_GetFeatureAt$js_body$_10(Long_lo($features.$nativeData.$cPointer), $i);
            cgxw_WGPUFeatureName_$callClinit();
            var$1 = cgxw_WGPUFeatureName_MAP;
            $limits = jl_Integer_valueOf(var$8);
            $featureName = ju_HashMap_get(var$1, $limits);
            var$1 = jl_System_out();
            $limits = jl_String_valueOf($featureName);
            $featureName = jl_StringBuilder__init_();
            jl_StringBuilder_append(jl_StringBuilder_append($featureName, $rt_s(213)), $limits);
            $limits = jl_StringBuilder_toString($featureName);
            otcic_JsConsolePrintStream_println(var$1, $limits);
            $i = $i + 1 | 0;
        }
        cgxwi_IDLBase_dispose($features);
        $limits = new cgxw_JLimits;
        cgxwi_IDLBase__init_($limits);
        $i = cgxw_JLimits_internal_native_create$js_body$_1();
        cgxwi_IDLNativeData_reset($limits.$nativeData, Long_fromInt($i), 1);
        cgxw_JDevice_internal_native_GetLimits$js_body$_16(Long_lo(var$2.$nativeData.$cPointer), Long_lo($limits.$nativeData.$cPointer));
        var$1 = jl_System_out();
        var$2 = jl_StringBuilder__init_();
        jl_StringBuilder_append0(jl_StringBuilder_append(var$2, $rt_s(214)), var$7);
        var$2 = jl_StringBuilder_toString(var$2);
        otcic_JsConsolePrintStream_println(var$1, var$2);
        var$1 = jl_System_out();
        $i = cgxw_JLimits_internal_native_GetMaxTextureDimension1D$js_body$_10(Long_lo($limits.$nativeData.$cPointer));
        var$2 = jl_StringBuilder__init_();
        jl_StringBuilder_append0(jl_StringBuilder_append(var$2, $rt_s(215)), $i);
        var$2 = jl_StringBuilder_toString(var$2);
        otcic_JsConsolePrintStream_println(var$1, var$2);
        var$1 = jl_System_out();
        $i = cgxw_JLimits_internal_native_GetMaxTextureDimension2D$js_body$_14(Long_lo($limits.$nativeData.$cPointer));
        var$2 = jl_StringBuilder__init_();
        jl_StringBuilder_append0(jl_StringBuilder_append(var$2, $rt_s(216)), $i);
        var$2 = jl_StringBuilder_toString(var$2);
        otcic_JsConsolePrintStream_println(var$1, var$2);
        var$1 = jl_System_out();
        $i = cgxw_JLimits_internal_native_GetMaxTextureDimension3D$js_body$_18(Long_lo($limits.$nativeData.$cPointer));
        var$2 = jl_StringBuilder__init_();
        jl_StringBuilder_append0(jl_StringBuilder_append(var$2, $rt_s(217)), $i);
        var$2 = jl_StringBuilder_toString(var$2);
        otcic_JsConsolePrintStream_println(var$1, var$2);
        var$1 = jl_System_out();
        $i = cgxw_JLimits_internal_native_GetMaxTextureArrayLayers$js_body$_22(Long_lo($limits.$nativeData.$cPointer));
        var$2 = jl_StringBuilder__init_();
        jl_StringBuilder_append0(jl_StringBuilder_append(var$2, $rt_s(218)), $i);
        var$2 = jl_StringBuilder_toString(var$2);
        otcic_JsConsolePrintStream_println(var$1, var$2);
    }
},
cgxw_UncapturedErrorCallback = $rt_classWithoutFields(cgxwi_IDLBase),
cgxw_UncapturedErrorCallback_deleteNative = $this => {
    cgxw_UncapturedErrorCallback_internal_native_deleteNative$js_body$_4(Long_lo($this.$nativeData.$cPointer));
},
cgxw_UncapturedErrorCallback_internal_native_deleteNative$js_body$_4 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.UncapturedErrorCallbackImpl);
    jWebGPU.destroy(jsObj);
},
cgxw_UncapturedErrorCallback_internal_native_create$js_body$_9 = () => {
    var jsObj = new jWebGPU.UncapturedErrorCallbackImpl();
    return jWebGPU.getPointer(jsObj);
},
cgxw_UncapturedErrorCallback_internal_native_setupCallback$js_body$_10 = (var$1, var$2) => {
    var UncapturedErrorCallbackImpl = jWebGPU.wrapPointer(var$1, jWebGPU.UncapturedErrorCallbackImpl);
    UncapturedErrorCallbackImpl.OnCallback = var$2;
};
function cgxwbc_WGPUApp$3() {
    cgxw_UncapturedErrorCallback.call(this);
    this.$this$05 = null;
}
let cgxw_JQueueDescriptor = $rt_classWithoutFields(cgxwi_IDLBase),
cgxw_JQueueDescriptor_T_01 = null,
cgxw_JQueueDescriptor_T_02 = null,
cgxw_JQueueDescriptor_T_03 = null,
cgxw_JQueueDescriptor_deleteNative = $this => {
    cgxw_JQueueDescriptor_internal_native_deleteNative$js_body$_4(Long_lo($this.$nativeData.$cPointer));
},
cgxw_JQueueDescriptor__clinit_ = () => {
    let var$1;
    var$1 = new cgxw_JQueueDescriptor;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JQueueDescriptor_T_01 = var$1;
    var$1 = new cgxw_JQueueDescriptor;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JQueueDescriptor_T_02 = var$1;
    var$1 = new cgxw_JQueueDescriptor;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JQueueDescriptor_T_03 = var$1;
},
cgxw_JQueueDescriptor_internal_native_deleteNative$js_body$_4 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JQueueDescriptor);
    jWebGPU.destroy(jsObj);
},
cgxw_JQueueDescriptor_internal_native_SetLabel$js_body$_6 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JQueueDescriptor);
    jsObj.SetLabel(var$2);
},
cgxwih_IDLString = $rt_classWithoutFields(cgxwi_IDLBase),
cgxwih_IDLString_TMP_EMPTY_1 = null,
cgxwih_IDLString_TMP_1 = null,
cgxwih_IDLString_TMP_2 = null,
cgxwih_IDLString_$callClinit = () => {
    cgxwih_IDLString_$callClinit = $rt_eraseClinit(cgxwih_IDLString);
    cgxwih_IDLString__clinit_();
},
cgxwih_IDLString__init_2 = $this => {
    let var$1;
    cgxwih_IDLString_$callClinit();
    cgxwi_IDLBase__init_($this);
    var$1 = cgxwih_IDLString_internal_native_create$js_body$_7();
    cgxwi_IDLNativeData_reset($this.$nativeData, Long_fromInt(var$1), 1);
},
cgxwih_IDLString__init_0 = () => {
    let var_0 = new cgxwih_IDLString();
    cgxwih_IDLString__init_2(var_0);
    return var_0;
},
cgxwih_IDLString__init_1 = ($this, $b, $c) => {
    cgxwih_IDLString_$callClinit();
    cgxwi_IDLBase__init_($this);
},
cgxwih_IDLString__init_ = (var_0, var_1) => {
    let var_2 = new cgxwih_IDLString();
    cgxwih_IDLString__init_1(var_2, var_0, var_1);
    return var_2;
},
cgxwih_IDLString_c_str = $this => {
    return $rt_str(cgxwih_IDLString_internal_native_c_str$js_body$_4(Long_lo($this.$nativeData.$cPointer)));
},
cgxwih_IDLString_deleteNative = $this => {
    cgxwih_IDLString_internal_native_deleteNative$js_body$_11(Long_lo($this.$nativeData.$cPointer));
},
cgxwih_IDLString__clinit_ = () => {
    cgxwih_IDLString_TMP_EMPTY_1 = cgxwih_IDLString__init_(0, 48);
    cgxwih_IDLString_TMP_1 = cgxwih_IDLString__init_0();
    cgxwih_IDLString_TMP_2 = cgxwih_IDLString__init_0();
},
cgxwih_IDLString_internal_native_c_str$js_body$_4 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.IDLString);
    var returnedJSObj = jsObj.c_str();
    return returnedJSObj;
},
cgxwih_IDLString_internal_native_create$js_body$_7 = () => {
    var jsObj = new jWebGPU.IDLString();
    return jWebGPU.getPointer(jsObj);
},
cgxwih_IDLString_internal_native_deleteNative$js_body$_11 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.IDLString);
    jWebGPU.destroy(jsObj);
},
cgxw_RequestDeviceCallback$OnCallback = $rt_classWithoutFields(0);
function cgxw_RequestDeviceCallback$1() {
    jl_Object.call(this);
    this.$this$04 = null;
}
let cgxw_RequestDeviceCallback$1_OnCallback$exported$0 = (var$1, var$2, var$3) => {
    let var$4, var$5, var$6;
    var$4 = var$2;
    var$5 = var$3;
    var$1 = var$1.$this$04;
    var$6 = Long_fromInt(var$5);
    if (cgxw_RequestDeviceCallback_JDevice_TEMP_STATIC_GEN_0 === null) {
        var$2 = new cgxw_JDevice;
        cgxwi_IDLBase__init_(var$2);
        cgxw_RequestDeviceCallback_JDevice_TEMP_STATIC_GEN_0 = var$2;
    }
    cgxwi_IDLNativeData_reset(cgxw_RequestDeviceCallback_JDevice_TEMP_STATIC_GEN_0.$nativeData, var$6, 0);
    cgxw_WGPURequestDeviceStatus_$callClinit();
    var$2 = cgxw_WGPURequestDeviceStatus_MAP;
    var$3 = jl_Integer_valueOf(var$4);
    var$2 = ju_HashMap_get(var$2, var$3);
    var$3 = cgxw_RequestDeviceCallback_JDevice_TEMP_STATIC_GEN_0;
    cgxwbc_WGPUApp$2_OnCallback(var$1, var$2, var$3);
},
cgxw_UncapturedErrorCallback$OnCallback = $rt_classWithoutFields(0);
function cgxw_UncapturedErrorCallback$1() {
    jl_Object.call(this);
    this.$this$03 = null;
}
let cgxw_UncapturedErrorCallback$1_OnCallback$exported$0 = (var$1, var$2, var$3) => {
    let var$4, var$5, var$6, var$7;
    var$4 = var$2;
    var$5 = var$3;
    var$1 = var$1.$this$03;
    var$2 = $rt_str(jWebGPU.UTF8ToString(var$5));
    cgxw_WGPUErrorType_$callClinit();
    var$3 = cgxw_WGPUErrorType_MAP;
    var$6 = jl_Integer_valueOf(var$4);
    var$3 = ju_HashMap_get(var$3, var$6);
    var$1 = var$1;
    var$6 = jl_System_err();
    var$3 = jl_String_valueOf(var$3);
    var$7 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$7, $rt_s(219)), var$3);
    var$3 = jl_StringBuilder_toString(var$7);
    otcic_JsConsolePrintStream_println(var$6, var$3);
    var$3 = jl_System_err();
    var$6 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$6, $rt_s(220)), var$2);
    var$2 = jl_StringBuilder_toString(var$6);
    otcic_JsConsolePrintStream_println(var$3, var$2);
    var$1.$this$05.$initState = cgxwbc_WGPUApp$InitState_ERROR;
};
function cgxw_WGPUBackendType() {
    jl_Enum.call(this);
    this.$value14 = 0;
}
let cgxw_WGPUBackendType_CUSTOM = null,
cgxw_WGPUBackendType_Undefined = null,
cgxw_WGPUBackendType_Null = null,
cgxw_WGPUBackendType_WebGPU = null,
cgxw_WGPUBackendType_D3D11 = null,
cgxw_WGPUBackendType_D3D12 = null,
cgxw_WGPUBackendType_Metal = null,
cgxw_WGPUBackendType_Vulkan = null,
cgxw_WGPUBackendType_OpenGL = null,
cgxw_WGPUBackendType_OpenGLES = null,
cgxw_WGPUBackendType_Force32 = null,
cgxw_WGPUBackendType_MAP = null,
cgxw_WGPUBackendType_$VALUES = null,
cgxw_WGPUBackendType_$callClinit = () => {
    cgxw_WGPUBackendType_$callClinit = $rt_eraseClinit(cgxw_WGPUBackendType);
    cgxw_WGPUBackendType__clinit_();
},
cgxw_WGPUBackendType__init_0 = ($this, var$1, var$2, $value) => {
    cgxw_WGPUBackendType_$callClinit();
    jl_Enum__init_($this, var$1, var$2);
    $this.$value14 = $value;
},
cgxw_WGPUBackendType__init_ = (var_0, var_1, var_2) => {
    let var_3 = new cgxw_WGPUBackendType();
    cgxw_WGPUBackendType__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
cgxw_WGPUBackendType__clinit_ = () => {
    let $value, var$2, var$3, var$4, var$5, var$6, var$7;
    cgxw_WGPUBackendType_CUSTOM = cgxw_WGPUBackendType__init_($rt_s(55), 0, 0);
    cgxw_WGPUBackendType_Undefined = cgxw_WGPUBackendType__init_($rt_s(56), 1, jWebGPU.WGPUBackendType_Undefined);
    cgxw_WGPUBackendType_Null = cgxw_WGPUBackendType__init_($rt_s(221), 2, jWebGPU.WGPUBackendType_Null);
    cgxw_WGPUBackendType_WebGPU = cgxw_WGPUBackendType__init_($rt_s(222), 3, jWebGPU.WGPUBackendType_WebGPU);
    cgxw_WGPUBackendType_D3D11 = cgxw_WGPUBackendType__init_($rt_s(223), 4, jWebGPU.WGPUBackendType_D3D11);
    cgxw_WGPUBackendType_D3D12 = cgxw_WGPUBackendType__init_($rt_s(224), 5, jWebGPU.WGPUBackendType_D3D12);
    cgxw_WGPUBackendType_Metal = cgxw_WGPUBackendType__init_($rt_s(225), 6, jWebGPU.WGPUBackendType_Metal);
    cgxw_WGPUBackendType_Vulkan = cgxw_WGPUBackendType__init_($rt_s(226), 7, jWebGPU.WGPUBackendType_Vulkan);
    cgxw_WGPUBackendType_OpenGL = cgxw_WGPUBackendType__init_($rt_s(227), 8, jWebGPU.WGPUBackendType_OpenGL);
    cgxw_WGPUBackendType_OpenGLES = cgxw_WGPUBackendType__init_($rt_s(228), 9, jWebGPU.WGPUBackendType_OpenGLES);
    $value = cgxw_WGPUBackendType__init_($rt_s(59), 10, jWebGPU.WGPUBackendType_Force32);
    cgxw_WGPUBackendType_Force32 = $value;
    var$2 = $rt_createArray(cgxw_WGPUBackendType, 11);
    var$3 = var$2.data;
    var$3[0] = cgxw_WGPUBackendType_CUSTOM;
    var$3[1] = cgxw_WGPUBackendType_Undefined;
    var$3[2] = cgxw_WGPUBackendType_Null;
    var$3[3] = cgxw_WGPUBackendType_WebGPU;
    var$3[4] = cgxw_WGPUBackendType_D3D11;
    var$3[5] = cgxw_WGPUBackendType_D3D12;
    var$3[6] = cgxw_WGPUBackendType_Metal;
    var$3[7] = cgxw_WGPUBackendType_Vulkan;
    var$3[8] = cgxw_WGPUBackendType_OpenGL;
    var$3[9] = cgxw_WGPUBackendType_OpenGLES;
    var$3[10] = $value;
    cgxw_WGPUBackendType_$VALUES = var$2;
    cgxw_WGPUBackendType_MAP = ju_HashMap__init_();
    var$2 = (cgxw_WGPUBackendType_$VALUES.$clone0()).data;
    var$4 = var$2.length;
    var$5 = 0;
    while (var$5 < var$4) {
        $value = var$2[var$5];
        if ($value !== cgxw_WGPUBackendType_CUSTOM) {
            var$6 = cgxw_WGPUBackendType_MAP;
            var$7 = jl_Integer_valueOf($value.$value14);
            ju_HashMap_put(var$6, var$7, $value);
        }
        var$5 = var$5 + 1 | 0;
    }
};
function cgxw_WGPUAdapterType() {
    jl_Enum.call(this);
    this.$value12 = 0;
}
let cgxw_WGPUAdapterType_CUSTOM = null,
cgxw_WGPUAdapterType_DiscreteGPU = null,
cgxw_WGPUAdapterType_IntegratedGPU = null,
cgxw_WGPUAdapterType_CPU = null,
cgxw_WGPUAdapterType_Unknown = null,
cgxw_WGPUAdapterType_Force32 = null,
cgxw_WGPUAdapterType_MAP = null,
cgxw_WGPUAdapterType_$VALUES = null,
cgxw_WGPUAdapterType_$callClinit = () => {
    cgxw_WGPUAdapterType_$callClinit = $rt_eraseClinit(cgxw_WGPUAdapterType);
    cgxw_WGPUAdapterType__clinit_();
},
cgxw_WGPUAdapterType__init_0 = ($this, var$1, var$2, $value) => {
    cgxw_WGPUAdapterType_$callClinit();
    jl_Enum__init_($this, var$1, var$2);
    $this.$value12 = $value;
},
cgxw_WGPUAdapterType__init_ = (var_0, var_1, var_2) => {
    let var_3 = new cgxw_WGPUAdapterType();
    cgxw_WGPUAdapterType__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
cgxw_WGPUAdapterType__clinit_ = () => {
    let $value, var$2, var$3, var$4, var$5, var$6, var$7;
    cgxw_WGPUAdapterType_CUSTOM = cgxw_WGPUAdapterType__init_($rt_s(55), 0, 0);
    cgxw_WGPUAdapterType_DiscreteGPU = cgxw_WGPUAdapterType__init_($rt_s(229), 1, jWebGPU.WGPUAdapterType_DiscreteGPU);
    cgxw_WGPUAdapterType_IntegratedGPU = cgxw_WGPUAdapterType__init_($rt_s(230), 2, jWebGPU.WGPUAdapterType_IntegratedGPU);
    cgxw_WGPUAdapterType_CPU = cgxw_WGPUAdapterType__init_($rt_s(231), 3, jWebGPU.WGPUAdapterType_CPU);
    cgxw_WGPUAdapterType_Unknown = cgxw_WGPUAdapterType__init_($rt_s(232), 4, jWebGPU.WGPUAdapterType_Unknown);
    $value = cgxw_WGPUAdapterType__init_($rt_s(59), 5, jWebGPU.WGPUAdapterType_Force32);
    cgxw_WGPUAdapterType_Force32 = $value;
    var$2 = $rt_createArray(cgxw_WGPUAdapterType, 6);
    var$3 = var$2.data;
    var$3[0] = cgxw_WGPUAdapterType_CUSTOM;
    var$3[1] = cgxw_WGPUAdapterType_DiscreteGPU;
    var$3[2] = cgxw_WGPUAdapterType_IntegratedGPU;
    var$3[3] = cgxw_WGPUAdapterType_CPU;
    var$3[4] = cgxw_WGPUAdapterType_Unknown;
    var$3[5] = $value;
    cgxw_WGPUAdapterType_$VALUES = var$2;
    cgxw_WGPUAdapterType_MAP = ju_HashMap__init_();
    var$2 = (cgxw_WGPUAdapterType_$VALUES.$clone0()).data;
    var$4 = var$2.length;
    var$5 = 0;
    while (var$5 < var$4) {
        $value = var$2[var$5];
        if ($value !== cgxw_WGPUAdapterType_CUSTOM) {
            var$6 = cgxw_WGPUAdapterType_MAP;
            var$7 = jl_Integer_valueOf($value.$value12);
            ju_HashMap_put(var$6, var$7, $value);
        }
        var$5 = var$5 + 1 | 0;
    }
};
function cgxw_WGPURequestDeviceStatus() {
    jl_Enum.call(this);
    this.$value13 = 0;
}
let cgxw_WGPURequestDeviceStatus_CUSTOM = null,
cgxw_WGPURequestDeviceStatus_Success = null,
cgxw_WGPURequestDeviceStatus_Error = null,
cgxw_WGPURequestDeviceStatus_Force32 = null,
cgxw_WGPURequestDeviceStatus_MAP = null,
cgxw_WGPURequestDeviceStatus_$VALUES = null,
cgxw_WGPURequestDeviceStatus_$callClinit = () => {
    cgxw_WGPURequestDeviceStatus_$callClinit = $rt_eraseClinit(cgxw_WGPURequestDeviceStatus);
    cgxw_WGPURequestDeviceStatus__clinit_();
},
cgxw_WGPURequestDeviceStatus__init_0 = ($this, var$1, var$2, $value) => {
    cgxw_WGPURequestDeviceStatus_$callClinit();
    jl_Enum__init_($this, var$1, var$2);
    $this.$value13 = $value;
},
cgxw_WGPURequestDeviceStatus__init_ = (var_0, var_1, var_2) => {
    let var_3 = new cgxw_WGPURequestDeviceStatus();
    cgxw_WGPURequestDeviceStatus__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
cgxw_WGPURequestDeviceStatus__clinit_ = () => {
    let $value, var$2, var$3, var$4, var$5, var$6, var$7;
    cgxw_WGPURequestDeviceStatus_CUSTOM = cgxw_WGPURequestDeviceStatus__init_($rt_s(55), 0, 0);
    cgxw_WGPURequestDeviceStatus_Success = cgxw_WGPURequestDeviceStatus__init_($rt_s(192), 1, jWebGPU.WGPURequestDeviceStatus_Success);
    cgxw_WGPURequestDeviceStatus_Error = cgxw_WGPURequestDeviceStatus__init_($rt_s(194), 2, jWebGPU.WGPURequestDeviceStatus_Error);
    $value = cgxw_WGPURequestDeviceStatus__init_($rt_s(59), 3, jWebGPU.WGPURequestDeviceStatus_Force32);
    cgxw_WGPURequestDeviceStatus_Force32 = $value;
    var$2 = $rt_createArray(cgxw_WGPURequestDeviceStatus, 4);
    var$3 = var$2.data;
    var$3[0] = cgxw_WGPURequestDeviceStatus_CUSTOM;
    var$3[1] = cgxw_WGPURequestDeviceStatus_Success;
    var$3[2] = cgxw_WGPURequestDeviceStatus_Error;
    var$3[3] = $value;
    cgxw_WGPURequestDeviceStatus_$VALUES = var$2;
    cgxw_WGPURequestDeviceStatus_MAP = ju_HashMap__init_();
    var$2 = (cgxw_WGPURequestDeviceStatus_$VALUES.$clone0()).data;
    var$4 = var$2.length;
    var$5 = 0;
    while (var$5 < var$4) {
        $value = var$2[var$5];
        if ($value !== cgxw_WGPURequestDeviceStatus_CUSTOM) {
            var$6 = cgxw_WGPURequestDeviceStatus_MAP;
            var$7 = jl_Integer_valueOf($value.$value13);
            ju_HashMap_put(var$6, var$7, $value);
        }
        var$5 = var$5 + 1 | 0;
    }
};
function cgxw_WGPUErrorType() {
    jl_Enum.call(this);
    this.$value15 = 0;
}
let cgxw_WGPUErrorType_CUSTOM = null,
cgxw_WGPUErrorType_NoError = null,
cgxw_WGPUErrorType_Validation = null,
cgxw_WGPUErrorType_OutOfMemory = null,
cgxw_WGPUErrorType_Internal = null,
cgxw_WGPUErrorType_Unknown = null,
cgxw_WGPUErrorType_Force32 = null,
cgxw_WGPUErrorType_MAP = null,
cgxw_WGPUErrorType_$VALUES = null,
cgxw_WGPUErrorType_$callClinit = () => {
    cgxw_WGPUErrorType_$callClinit = $rt_eraseClinit(cgxw_WGPUErrorType);
    cgxw_WGPUErrorType__clinit_();
},
cgxw_WGPUErrorType__init_0 = ($this, var$1, var$2, $value) => {
    cgxw_WGPUErrorType_$callClinit();
    jl_Enum__init_($this, var$1, var$2);
    $this.$value15 = $value;
},
cgxw_WGPUErrorType__init_ = (var_0, var_1, var_2) => {
    let var_3 = new cgxw_WGPUErrorType();
    cgxw_WGPUErrorType__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
cgxw_WGPUErrorType__clinit_ = () => {
    let $value, var$2, var$3, var$4, var$5, var$6, var$7;
    cgxw_WGPUErrorType_CUSTOM = cgxw_WGPUErrorType__init_($rt_s(55), 0, 0);
    cgxw_WGPUErrorType_NoError = cgxw_WGPUErrorType__init_($rt_s(233), 1, jWebGPU.WGPUErrorType_NoError);
    cgxw_WGPUErrorType_Validation = cgxw_WGPUErrorType__init_($rt_s(234), 2, jWebGPU.WGPUErrorType_Validation);
    cgxw_WGPUErrorType_OutOfMemory = cgxw_WGPUErrorType__init_($rt_s(235), 3, jWebGPU.WGPUErrorType_OutOfMemory);
    cgxw_WGPUErrorType_Internal = cgxw_WGPUErrorType__init_($rt_s(236), 4, jWebGPU.WGPUErrorType_Internal);
    cgxw_WGPUErrorType_Unknown = cgxw_WGPUErrorType__init_($rt_s(232), 5, jWebGPU.WGPUErrorType_Unknown);
    $value = cgxw_WGPUErrorType__init_($rt_s(59), 6, jWebGPU.WGPUErrorType_Force32);
    cgxw_WGPUErrorType_Force32 = $value;
    var$2 = $rt_createArray(cgxw_WGPUErrorType, 7);
    var$3 = var$2.data;
    var$3[0] = cgxw_WGPUErrorType_CUSTOM;
    var$3[1] = cgxw_WGPUErrorType_NoError;
    var$3[2] = cgxw_WGPUErrorType_Validation;
    var$3[3] = cgxw_WGPUErrorType_OutOfMemory;
    var$3[4] = cgxw_WGPUErrorType_Internal;
    var$3[5] = cgxw_WGPUErrorType_Unknown;
    var$3[6] = $value;
    cgxw_WGPUErrorType_$VALUES = var$2;
    cgxw_WGPUErrorType_MAP = ju_HashMap__init_();
    var$2 = (cgxw_WGPUErrorType_$VALUES.$clone0()).data;
    var$4 = var$2.length;
    var$5 = 0;
    while (var$5 < var$4) {
        $value = var$2[var$5];
        if ($value !== cgxw_WGPUErrorType_CUSTOM) {
            var$6 = cgxw_WGPUErrorType_MAP;
            var$7 = jl_Integer_valueOf($value.$value15);
            ju_HashMap_put(var$6, var$7, $value);
        }
        var$5 = var$5 + 1 | 0;
    }
},
cgxw_JSupportedFeatures = $rt_classWithoutFields(cgxwi_IDLBase),
cgxw_JSupportedFeatures_T_01 = null,
cgxw_JSupportedFeatures_T_02 = null,
cgxw_JSupportedFeatures_T_03 = null,
cgxw_JSupportedFeatures_deleteNative = $this => {
    cgxw_JSupportedFeatures_internal_native_deleteNative$js_body$_6(Long_lo($this.$nativeData.$cPointer));
},
cgxw_JSupportedFeatures__clinit_ = () => {
    let var$1;
    var$1 = new cgxw_JSupportedFeatures;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JSupportedFeatures_T_01 = var$1;
    var$1 = new cgxw_JSupportedFeatures;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JSupportedFeatures_T_02 = var$1;
    var$1 = new cgxw_JSupportedFeatures;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JSupportedFeatures_T_03 = var$1;
},
cgxw_JSupportedFeatures_internal_native_create$js_body$_1 = () => {
    var jsObj = new jWebGPU.JSupportedFeatures();
    return jWebGPU.getPointer(jsObj);
},
cgxw_JSupportedFeatures_internal_native_deleteNative$js_body$_6 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JSupportedFeatures);
    jWebGPU.destroy(jsObj);
},
cgxw_JSupportedFeatures_internal_native_GetFeatureCount$js_body$_8 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JSupportedFeatures);
    var returnedJSObj = jsObj.GetFeatureCount();
    return returnedJSObj;
},
cgxw_JSupportedFeatures_internal_native_GetFeatureAt$js_body$_10 = (var$1, var$2) => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JSupportedFeatures);
    var returnedJSObj = jsObj.GetFeatureAt(var$2);
    return returnedJSObj;
},
cgxw_JLimits = $rt_classWithoutFields(cgxwi_IDLBase),
cgxw_JLimits_T_01 = null,
cgxw_JLimits_T_02 = null,
cgxw_JLimits_T_03 = null,
cgxw_JLimits_deleteNative = $this => {
    cgxw_JLimits_internal_native_deleteNative$js_body$_6(Long_lo($this.$nativeData.$cPointer));
},
cgxw_JLimits__clinit_ = () => {
    let var$1;
    var$1 = new cgxw_JLimits;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JLimits_T_01 = var$1;
    var$1 = new cgxw_JLimits;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JLimits_T_02 = var$1;
    var$1 = new cgxw_JLimits;
    cgxwi_IDLBase__init_(var$1);
    cgxw_JLimits_T_03 = var$1;
},
cgxw_JLimits_internal_native_create$js_body$_1 = () => {
    var jsObj = new jWebGPU.JLimits();
    return jWebGPU.getPointer(jsObj);
},
cgxw_JLimits_internal_native_deleteNative$js_body$_6 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JLimits);
    jWebGPU.destroy(jsObj);
},
cgxw_JLimits_internal_native_GetMaxTextureDimension1D$js_body$_10 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JLimits);
    var returnedJSObj = jsObj.GetMaxTextureDimension1D();
    return returnedJSObj;
},
cgxw_JLimits_internal_native_GetMaxTextureDimension2D$js_body$_14 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JLimits);
    var returnedJSObj = jsObj.GetMaxTextureDimension2D();
    return returnedJSObj;
},
cgxw_JLimits_internal_native_GetMaxTextureDimension3D$js_body$_18 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JLimits);
    var returnedJSObj = jsObj.GetMaxTextureDimension3D();
    return returnedJSObj;
},
cgxw_JLimits_internal_native_GetMaxTextureArrayLayers$js_body$_22 = var$1 => {
    var jsObj = jWebGPU.wrapPointer(var$1, jWebGPU.JLimits);
    var returnedJSObj = jsObj.GetMaxTextureArrayLayers();
    return returnedJSObj;
},
jl_Long = $rt_classWithoutFields(jl_Number),
jl_Long_TYPE = null,
jl_Long_divideUnsigned = (var$1, var$2) => {
    return Long_udiv(var$1, var$2);
},
jl_Long_remainderUnsigned = (var$1, var$2) => {
    return Long_urem(var$1, var$2);
},
jl_Long_compareUnsigned = (var$1, var$2) => {
    return Long_ucompare(var$1, var$2);
},
jl_Long__clinit_ = () => {
    jl_Long_TYPE = $rt_cls($rt_longcls);
};
$rt_packages([-1, "com", 0, "github", 1, "xpenatan", 2, "webgpu", 3, "idl", -1, "java", 5, "util", 5, "lang", -1, "javax", 8, "script"
]);
$rt_metadata([jl_Object, "Object", 7, 0, [], 0, 3, 0, 0, 0,
jlr_AnnotatedElement, 0, jl_Object, [], 3, 3, 0, 0, 0,
jlr_Type, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Class, 0, jl_Object, [jlr_AnnotatedElement, jlr_Type], 4, 3, 0, 0, 0,
otji_JS, 0, jl_Object, [], 4, 3, 0, 0, 0,
otp_Platform, 0, jl_Object, [], 4, 3, 0, 0, 0,
jl_Throwable, 0, jl_Object, [], 0, 3, 0, 0, ["$getMessage", $rt_wrapFunction0(jl_Throwable_getMessage)],
jl_Exception, 0, jl_Throwable, [], 0, 3, 0, 0, 0,
jl_RuntimeException, "RuntimeException", 7, jl_Exception, [], 0, 3, 0, 0, 0,
jl_ClassCastException, "ClassCastException", 7, jl_RuntimeException, [], 0, 3, 0, 0, 0,
ji_Serializable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Comparable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_CharSequence, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_String, "String", 7, jl_Object, [ji_Serializable, jl_Comparable, jl_CharSequence], 0, 3, 0, 0, ["$equals", $rt_wrapFunction1(jl_String_equals), "$hashCode", $rt_wrapFunction0(jl_String_hashCode)],
jl_Number, 0, jl_Object, [ji_Serializable], 1, 3, 0, 0, 0,
jl_Integer, 0, jl_Number, [jl_Comparable], 0, 3, 0, 0, ["$hashCode", $rt_wrapFunction0(jl_Integer_hashCode), "$equals", $rt_wrapFunction1(jl_Integer_equals)],
jl_AbstractStringBuilder, 0, jl_Object, [ji_Serializable, jl_CharSequence], 0, 0, 0, 0, 0,
jl_Appendable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_StringBuilder, 0, jl_AbstractStringBuilder, [jl_Appendable], 0, 3, 0, 0, 0,
otcir_FieldInfo, 0, jl_Object, [], 0, 3, 0, 0, 0,
otcir_MethodInfo, 0, jl_Object, [], 0, 3, 0, 0, 0,
otcir_ClassList, 0, jl_Object, [], 0, 3, 0, 0, 0,
cgxwda_MainTeaVM, 0, jl_Object, [], 0, 3, 0, cgxwda_MainTeaVM_$callClinit, 0,
otci_IntegerUtil, 0, jl_Object, [], 4, 3, 0, 0, 0,
cgxwbt_TeaVMApp, 0, jl_Object, [], 0, 3, 0, cgxwbt_TeaVMApp_$callClinit, 0,
cgxwbc_ApplicationListener, 0, jl_Object, [], 3, 3, 0, 0, 0,
cgxwda_WebGPUApp, 0, jl_Object, [cgxwbc_ApplicationListener], 0, 3, 0, 0, 0,
ju_Comparator, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_String$_clinit_$lambda$_115_0, 0, jl_Object, [ju_Comparator], 0, 3, 0, 0, 0,
jl_Character, 0, jl_Object, [jl_Comparable], 0, 3, 0, 0, 0,
jl_System, 0, jl_Object, [], 4, 3, 0, 0, 0,
cgxjc_JMultiplatform, 0, jl_Object, [], 4, 3, 0, 0, 0,
cgxjc_JPlatformMap, 0, jl_Object, [], 4, 3, 0, 0, 0,
cgxjl_JParserLibraryLoaderListener, 0, jl_Object, [], 3, 3, 0, 0, 0,
cgxwbt_TeaVMApp$_init_$lambda$_0_0, 0, jl_Object, [cgxjl_JParserLibraryLoaderListener], 0, 3, 0, 0, 0,
cgxw_JWebGPULoader, 0, jl_Object, [], 0, 3, 0, 0, 0,
cgxwbc_WGPUApp, 0, jl_Object, [], 0, 3, 0, 0, 0,
otj_JSObject, 0, jl_Object, [], 3, 3, 0, 0, 0,
otjb_AnimationFrameCallback, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
cgxwbt_TeaVMApp$1, 0, jl_Object, [otjb_AnimationFrameCallback], 0, 0, 0, 0, 0,
otji_JSWrapper, 0, jl_Object, [], 4, 3, 0, 0, 0,
ju_Objects, 0, jl_Object, [], 4, 3, 0, 0, 0,
jl_AutoCloseable, 0, jl_Object, [], 3, 3, 0, 0, 0,
ji_Closeable, 0, jl_Object, [jl_AutoCloseable], 3, 3, 0, 0, 0,
ji_Flushable, 0, jl_Object, [], 3, 3, 0, 0, 0,
ji_OutputStream, 0, jl_Object, [ji_Closeable, ji_Flushable], 1, 3, 0, 0, 0,
ji_FilterOutputStream, 0, ji_OutputStream, [], 0, 3, 0, 0, 0,
ji_PrintStream, 0, ji_FilterOutputStream, [jl_Appendable], 0, 3, 0, 0, 0,
otcic_JsConsolePrintStream, 0, ji_PrintStream, [], 1, 3, 0, 0, 0,
otcic_JSStdoutPrintStream, 0, otcic_JsConsolePrintStream, [], 0, 3, 0, 0, ["$print", $rt_wrapFunction1(otcic_JSStdoutPrintStream_print)]]);
$rt_metadata([cgxjl_JParserLibraryLoader, 0, jl_Object, [], 0, 3, 0, cgxjl_JParserLibraryLoader_$callClinit, 0,
jl_Enum, 0, jl_Object, [jl_Comparable, ji_Serializable], 1, 3, 0, 0, 0,
cgxwbc_WGPUApp$InitState, 0, jl_Enum, [], 12, 0, 0, 0, 0,
jl_IndexOutOfBoundsException, "IndexOutOfBoundsException", 7, jl_RuntimeException, [], 0, 3, 0, 0, 0,
ju_Map, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_AbstractMap, 0, jl_Object, [ju_Map], 1, 3, 0, 0, 0,
jl_Cloneable, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_HashMap, 0, ju_AbstractMap, [jl_Cloneable, ji_Serializable], 0, 3, 0, 0, 0,
jnc_Charset, 0, jl_Object, [jl_Comparable], 1, 3, 0, 0, 0,
jl_Iterable, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_Collection, 0, jl_Object, [jl_Iterable], 3, 3, 0, 0, 0,
ju_AbstractCollection, 0, jl_Object, [ju_Collection], 1, 3, 0, 0, 0,
ju_Set, 0, jl_Object, [ju_Collection], 3, 3, 0, 0, 0,
ju_AbstractSet, 0, ju_AbstractCollection, [ju_Set], 1, 3, 0, 0, 0,
ju_HashSet, "HashSet", 6, ju_AbstractSet, [jl_Cloneable, ji_Serializable], 0, 3, 0, 0, 0,
cgxjl_JParserLibraryLoader$1, 0, jl_Object, [cgxjl_JParserLibraryLoaderListener], 0, 0, 0, 0, 0,
js_ScriptException, "ScriptException", 9, jl_Exception, [], 0, 3, 0, 0, ["$getMessage", $rt_wrapFunction0(js_ScriptException_getMessage)],
cgxjl_JParserLibraryLoader$loadWasm$lambda$_3_0, 0, jl_Object, [cgxjl_JParserLibraryLoaderListener], 0, 3, 0, 0, ["$onLoad", $rt_wrapFunction2(cgxjl_JParserLibraryLoader$loadWasm$lambda$_3_0_onLoad)],
cgxjl_JParserLibraryLoader$loadJS$lambda$_4_0, 0, jl_Object, [cgxjl_JParserLibraryLoaderListener], 0, 3, 0, 0, ["$onLoad", $rt_wrapFunction2(cgxjl_JParserLibraryLoader$loadJS$lambda$_4_0_onLoad)],
otjde_EventListener, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
cgxjl_JParserLibraryLoader$loadScript$lambda$_5_0, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, 0,
cgxjl_JParserLibraryLoader$loadScript$lambda$_5_1, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, 0,
jl_IllegalArgumentException, "IllegalArgumentException", 7, jl_RuntimeException, [], 0, 3, 0, 0, 0,
ju_Map$Entry, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_MapEntry, 0, jl_Object, [ju_Map$Entry, jl_Cloneable], 0, 0, 0, 0, 0,
ju_HashMap$HashEntry, 0, ju_MapEntry, [], 0, 0, 0, 0, 0,
cgxwi_IDLBase, 0, jl_Object, [], 1, 3, 0, 0, 0,
cgxw_JInstance, 0, cgxwi_IDLBase, [], 0, 3, 0, 0, ["$deleteNative", $rt_wrapFunction0(cgxw_JInstance_deleteNative)],
cgxwi_IDLNativeData, "IDLNativeData", 4, jl_Object, [], 0, 3, [0,0,0], 0, 0,
jl_StringIndexOutOfBoundsException, "StringIndexOutOfBoundsException", 7, jl_IndexOutOfBoundsException, [], 0, 3, 0, 0, 0,
cgxw_JCommandEncoderDescriptor, 0, cgxwi_IDLBase, [], 0, 3, 0, 0, ["$deleteNative", $rt_wrapFunction0(cgxw_JCommandEncoderDescriptor_deleteNative)],
cgxw_JRenderPassDescriptor, 0, cgxwi_IDLBase, [], 0, 3, 0, 0, ["$deleteNative", $rt_wrapFunction0(cgxw_JRenderPassDescriptor_deleteNative)],
cgxw_JRenderPassColorAttachment, 0, cgxwi_IDLBase, [], 0, 3, 0, 0, ["$deleteNative", $rt_wrapFunction0(cgxw_JRenderPassColorAttachment_deleteNative)],
cgxwi_IDLEnum, 0, jl_Object, [], 3, 3, 0, 0, 0,
cgxw_WGPULoadOp, "WGPULoadOp", 3, jl_Enum, [cgxwi_IDLEnum], 12, 3, 0, cgxw_WGPULoadOp_$callClinit, 0,
cgxw_WGPUStoreOp, "WGPUStoreOp", 3, jl_Enum, [cgxwi_IDLEnum], 12, 3, 0, cgxw_WGPUStoreOp_$callClinit, 0,
cgxw_JCommandBufferDescriptor, 0, cgxwi_IDLBase, [], 0, 3, 0, 0, ["$deleteNative", $rt_wrapFunction0(cgxw_JCommandBufferDescriptor_deleteNative)],
cgxw_JWebGPU, 0, cgxwi_IDLBase, [], 0, 3, 0, 0, ["$deleteNative", $rt_wrapFunction0(cgxw_JWebGPU_deleteNative)],
cgxw_JPlatformType, "JPlatformType", 3, jl_Enum, [cgxwi_IDLEnum], 12, 3, 0, cgxw_JPlatformType_$callClinit, 0,
cgxw_JSurfaceTexture, 0, cgxwi_IDLBase, [], 0, 3, 0, 0, ["$deleteNative", $rt_wrapFunction0(cgxw_JSurfaceTexture_deleteNative)],
cgxw_JTexture, 0, cgxwi_IDLBase, [], 0, 3, 0, 0, ["$deleteNative", $rt_wrapFunction0(cgxw_JTexture_deleteNative)],
cgxw_JTextureView, 0, cgxwi_IDLBase, [], 0, 3, 0, 0, ["$deleteNative", $rt_wrapFunction0(cgxw_JTextureView_deleteNative)],
cgxw_JCommandEncoder, 0, cgxwi_IDLBase, [], 0, 3, 0, 0, ["$deleteNative", $rt_wrapFunction0(cgxw_JCommandEncoder_deleteNative)],
cgxw_JRenderPassEncoder, 0, cgxwi_IDLBase, [], 0, 3, 0, 0, ["$deleteNative", $rt_wrapFunction0(cgxw_JRenderPassEncoder_deleteNative)],
cgxw_JCommandBuffer, 0, cgxwi_IDLBase, [], 0, 3, 0, 0, ["$deleteNative", $rt_wrapFunction0(cgxw_JCommandBuffer_deleteNative)],
cgxw_JSurfaceCapabilities, 0, cgxwi_IDLBase, [], 0, 3, 0, 0, ["$deleteNative", $rt_wrapFunction0(cgxw_JSurfaceCapabilities_deleteNative)],
cgxw_JTextureViewDescriptor, 0, cgxwi_IDLBase, [], 0, 3, 0, 0, ["$deleteNative", $rt_wrapFunction0(cgxw_JTextureViewDescriptor_deleteNative)],
cgxw_WGPUTextureViewDimension, "WGPUTextureViewDimension", 3, jl_Enum, [cgxwi_IDLEnum], 12, 3, 0, cgxw_WGPUTextureViewDimension_$callClinit, 0,
cgxw_WGPUTextureAspect, "WGPUTextureAspect", 3, jl_Enum, [cgxwi_IDLEnum], 12, 3, 0, cgxw_WGPUTextureAspect_$callClinit, 0,
cgxw_JDevice, 0, cgxwi_IDLBase, [], 0, 3, 0, 0, ["$deleteNative", $rt_wrapFunction0(cgxw_JDevice_deleteNative)]]);
$rt_metadata([cgxw_JColor, 0, cgxwi_IDLBase, [], 0, 3, 0, 0, ["$deleteNative", $rt_wrapFunction0(cgxw_JColor_deleteNative)],
cgxw_JQueue, 0, cgxwi_IDLBase, [], 0, 3, 0, 0, ["$deleteNative", $rt_wrapFunction0(cgxw_JQueue_deleteNative)],
cgxw_JSurface, 0, cgxwi_IDLBase, [], 0, 3, 0, 0, ["$deleteNative", $rt_wrapFunction0(cgxw_JSurface_deleteNative)],
cgxw_JRequestAdapterOptions, 0, cgxwi_IDLBase, [], 0, 3, 0, 0, ["$deleteNative", $rt_wrapFunction0(cgxw_JRequestAdapterOptions_deleteNative)],
cgxw_RequestAdapterCallback, 0, cgxwi_IDLBase, [], 0, 3, 0, 0, ["$deleteNative", $rt_wrapFunction0(cgxw_RequestAdapterCallback_deleteNative)],
cgxwbc_WGPUApp$1, 0, cgxw_RequestAdapterCallback, [], 0, 0, 0, 0, 0,
cgxw_WGPUCallbackMode, "WGPUCallbackMode", 3, jl_Enum, [cgxwi_IDLEnum], 12, 3, 0, cgxw_WGPUCallbackMode_$callClinit, 0,
cgxw_JSurfaceConfiguration, 0, cgxwi_IDLBase, [], 0, 3, 0, 0, ["$deleteNative", $rt_wrapFunction0(cgxw_JSurfaceConfiguration_deleteNative)],
cgxw_WGPUTextureUsage, "WGPUTextureUsage", 3, jl_Enum, [cgxwi_IDLEnum], 12, 3, 0, cgxw_WGPUTextureUsage_$callClinit, 0,
cgxw_WGPUPresentMode, "WGPUPresentMode", 3, jl_Enum, [cgxwi_IDLEnum], 12, 3, 0, cgxw_WGPUPresentMode_$callClinit, 0,
cgxw_WGPUCompositeAlphaMode, "WGPUCompositeAlphaMode", 3, jl_Enum, [cgxwi_IDLEnum], 12, 3, 0, cgxw_WGPUCompositeAlphaMode_$callClinit, 0,
cgxjl_JParserLibraryLoader$OnInitFunction, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
cgxjl_JParserLibraryLoader$lambda$loadWasm$1$lambda$_10_0, 0, jl_Object, [cgxjl_JParserLibraryLoader$OnInitFunction], 0, 3, 0, 0, 0,
otcic_JSStderrPrintStream, 0, otcic_JsConsolePrintStream, [], 0, 3, 0, 0, ["$print", $rt_wrapFunction1(otcic_JSStderrPrintStream_print)],
jl_CloneNotSupportedException, "CloneNotSupportedException", 7, jl_Exception, [], 0, 3, 0, 0, 0,
cgxw_RequestAdapterCallback$OnCallback, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
cgxw_RequestAdapterCallback$1, 0, jl_Object, [cgxw_RequestAdapterCallback$OnCallback], 0, 0, 0, 0, 0,
cgxw_WGPUTextureFormat, "WGPUTextureFormat", 3, jl_Enum, [cgxwi_IDLEnum], 12, 3, 0, cgxw_WGPUTextureFormat_$callClinit, 0,
cgxw_JRenderPipeline, 0, cgxwi_IDLBase, [], 0, 3, 0, 0, ["$deleteNative", $rt_wrapFunction0(cgxw_JRenderPipeline_deleteNative)],
jl_Math, 0, jl_Object, [], 4, 3, 0, 0, 0,
ju_Arrays, 0, jl_Object, [], 0, 3, 0, 0, 0,
cgxw_WGPURequestAdapterStatus, "WGPURequestAdapterStatus", 3, jl_Enum, [cgxwi_IDLEnum], 12, 3, 0, cgxw_WGPURequestAdapterStatus_$callClinit, 0,
cgxw_JAdapter, 0, cgxwi_IDLBase, [], 0, 3, 0, 0, ["$deleteNative", $rt_wrapFunction0(cgxw_JAdapter_deleteNative)],
cgxw_JAdapterInfo, 0, cgxwi_IDLBase, [], 0, 3, 0, 0, ["$deleteNative", $rt_wrapFunction0(cgxw_JAdapterInfo_deleteNative)],
cgxw_JDeviceDescriptor, 0, cgxwi_IDLBase, [], 0, 3, 0, 0, ["$deleteNative", $rt_wrapFunction0(cgxw_JDeviceDescriptor_deleteNative)],
cgxw_JVectorRequiredFeatures, 0, cgxwi_IDLBase, [], 0, 3, 0, 0, ["$deleteNative", $rt_wrapFunction0(cgxw_JVectorRequiredFeatures_deleteNative)],
cgxw_WGPUFeatureName, "WGPUFeatureName", 3, jl_Enum, [cgxwi_IDLEnum], 12, 3, 0, cgxw_WGPUFeatureName_$callClinit, 0,
cgxw_RequestDeviceCallback, 0, cgxwi_IDLBase, [], 0, 3, 0, 0, ["$deleteNative", $rt_wrapFunction0(cgxw_RequestDeviceCallback_deleteNative)],
cgxwbc_WGPUApp$2, 0, cgxw_RequestDeviceCallback, [], 0, 0, 0, 0, 0,
cgxw_UncapturedErrorCallback, 0, cgxwi_IDLBase, [], 0, 3, 0, 0, ["$deleteNative", $rt_wrapFunction0(cgxw_UncapturedErrorCallback_deleteNative)],
cgxwbc_WGPUApp$3, 0, cgxw_UncapturedErrorCallback, [], 0, 0, 0, 0, 0,
cgxw_JQueueDescriptor, 0, cgxwi_IDLBase, [], 0, 3, 0, 0, ["$deleteNative", $rt_wrapFunction0(cgxw_JQueueDescriptor_deleteNative)],
cgxwih_IDLString, 0, cgxwi_IDLBase, [], 0, 3, 0, cgxwih_IDLString_$callClinit, ["$deleteNative", $rt_wrapFunction0(cgxwih_IDLString_deleteNative)],
cgxw_RequestDeviceCallback$OnCallback, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
cgxw_RequestDeviceCallback$1, 0, jl_Object, [cgxw_RequestDeviceCallback$OnCallback], 0, 0, 0, 0, 0,
cgxw_UncapturedErrorCallback$OnCallback, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
cgxw_UncapturedErrorCallback$1, 0, jl_Object, [cgxw_UncapturedErrorCallback$OnCallback], 0, 0, 0, 0, 0,
cgxw_WGPUBackendType, "WGPUBackendType", 3, jl_Enum, [cgxwi_IDLEnum], 12, 3, 0, cgxw_WGPUBackendType_$callClinit, 0,
cgxw_WGPUAdapterType, "WGPUAdapterType", 3, jl_Enum, [cgxwi_IDLEnum], 12, 3, 0, cgxw_WGPUAdapterType_$callClinit, 0,
cgxw_WGPURequestDeviceStatus, "WGPURequestDeviceStatus", 3, jl_Enum, [cgxwi_IDLEnum], 12, 3, 0, cgxw_WGPURequestDeviceStatus_$callClinit, 0,
cgxw_WGPUErrorType, "WGPUErrorType", 3, jl_Enum, [cgxwi_IDLEnum], 12, 3, 0, cgxw_WGPUErrorType_$callClinit, 0,
cgxw_JSupportedFeatures, 0, cgxwi_IDLBase, [], 0, 3, 0, 0, ["$deleteNative", $rt_wrapFunction0(cgxw_JSupportedFeatures_deleteNative)],
cgxw_JLimits, 0, cgxwi_IDLBase, [], 0, 3, 0, 0, ["$deleteNative", $rt_wrapFunction0(cgxw_JLimits_deleteNative)],
jl_Long, 0, jl_Number, [jl_Comparable], 0, 3, 0, 0, 0]);
let $rt_charArrayCls = $rt_arraycls($rt_charcls);
$rt_stringPool(["0", "[]", "", ": ", "\n", "\tat ", "null", "Caused by: ", "false", "true", "START", "scripts/", "WEB_SCRIPT_PATH", "CANVAS CREATED", "jWebGPU", " is not subtype of ", "JMultiplatform ", " is not set", ".wasm.js", ".js", "END", "My command encoder", "Command buffer", "webgpuCanvas", "Surface not created", "Surface created", "surfaceFormat: ", "// triangleShader.wgsl\n\n@vertex\nfn vs_main(@builtin(vertex_index) in_vertex_index: u32) -> @builtin(position) vec4f {\n    var p = vec2f(0.0, 0.0);\n    if (in_vertex_index == 0u) {\n        p = vec2f(-0.5, -0.5);\n    } else if (in_vertex_index == 1u) {\n        p = vec2f(0.5, -0.5);\n    } else {\n        p = vec2f(0.0, 0.5);\n    }\n    return vec4f(p, 0.0, 1.0);\n}\n\n@fragment\nfn fs_main() -> @location(0) vec4f {\n    return vec4f(0.0, 0.4, 1.0, 1.0);\n}",
"RenderPipeline created", "WebGPU Success: ", "BackendType: ", "AdapterType: ", "Vendor: ", "Architecture: ", "Description: ", "Device: ", "Has Feature DepthClipControl: ", "WebGPU Error", "NOT_INITIALIZED", "ERROR", "INSTANCE_VALID", "ADAPTER_VALID", "DEVICE_VALID", "INSTANCE_NOT_VALID", "ADAPTER_NOT_VALID", "DEVICE_NOT_VALID", " in ", " at line number ", " at column number ", "OnInit", "Failed to load .wasm.js or .js script: ", "Disposing error - ", " is already disposed", "IDL", " cPointer is 0", "CUSTOM",
"Undefined", "Load", "Clear", "Force32", "Store", "Discard", "WGPU_Windows", "WGPU_Mac", "WGPU_Linux", "WGPU_iOS", "WGPU_Android", "WGPU_Web", "WGPU_Unknown", "_1D", "_2D", "_2DArray", "Cube", "CubeArray", "_3D", "All", "StencilOnly", "DepthOnly", "WaitAnyOnly", "AllowProcessEvents", "AllowSpontaneous", "None", "CopySrc", "CopyDst", "TextureBinding", "StorageBinding", "RenderAttachment", "Fifo", "FifoRelaxed", "Immediate", "Mailbox", "Auto", "Opaque", "Premultiplied", "Unpremultiplied", "Inherit", "Adapter Status: ",
"R8Unorm", "R8Snorm", "R8Uint", "R8Sint", "R16Uint", "R16Sint", "R16Float", "RG8Unorm", "RG8Snorm", "RG8Uint", "RG8Sint", "R32Float", "R32Uint", "R32Sint", "RG16Uint", "RG16Sint", "RG16Float", "RGBA8Unorm", "RGBA8UnormSrgb", "RGBA8Snorm", "RGBA8Uint", "RGBA8Sint", "BGRA8Unorm", "BGRA8UnormSrgb", "RGB10A2Uint", "RGB10A2Unorm", "RG11B10Ufloat", "RGB9E5Ufloat", "RG32Float", "RG32Uint", "RG32Sint", "RGBA16Uint", "RGBA16Sint", "RGBA16Float", "RGBA32Float", "RGBA32Uint", "RGBA32Sint", "Stencil8", "Depth16Unorm", "Depth24Plus",
"Depth24PlusStencil8", "Depth32Float", "Depth32FloatStencil8", "BC1RGBAUnorm", "BC1RGBAUnormSrgb", "BC2RGBAUnorm", "BC2RGBAUnormSrgb", "BC3RGBAUnorm", "BC3RGBAUnormSrgb", "BC4RUnorm", "BC4RSnorm", "BC5RGUnorm", "BC5RGSnorm", "BC6HRGBUfloat", "BC6HRGBFloat", "BC7RGBAUnorm", "BC7RGBAUnormSrgb", "ETC2RGB8Unorm", "ETC2RGB8UnormSrgb", "ETC2RGB8A1Unorm", "ETC2RGB8A1UnormSrgb", "ETC2RGBA8Unorm", "ETC2RGBA8UnormSrgb", "EACR11Unorm", "EACR11Snorm", "EACRG11Unorm", "EACRG11Snorm", "ASTC4x4Unorm", "ASTC4x4UnormSrgb", "ASTC5x4Unorm",
"ASTC5x4UnormSrgb", "ASTC5x5Unorm", "ASTC5x5UnormSrgb", "ASTC6x5Unorm", "ASTC6x5UnormSrgb", "ASTC6x6Unorm", "ASTC6x6UnormSrgb", "ASTC8x5Unorm", "ASTC8x5UnormSrgb", "ASTC8x6Unorm", "ASTC8x6UnormSrgb", "ASTC8x8Unorm", "ASTC8x8UnormSrgb", "ASTC10x5Unorm", "ASTC10x5UnormSrgb", "ASTC10x6Unorm", "ASTC10x6UnormSrgb", "ASTC10x8Unorm", "ASTC10x8UnormSrgb", "ASTC10x10Unorm", "ASTC10x10UnormSrgb", "ASTC12x10Unorm", "ASTC12x10UnormSrgb", "ASTC12x12Unorm", "ASTC12x12UnormSrgb", "Success", "Unavailable", "Error", "DepthClipControl",
"TimestampQuery", "TextureCompressionBC", "TextureCompressionBCSliced3D", "TextureCompressionETC2", "TextureCompressionASTC", "TextureCompressionASTCSliced3D", "IndirectFirstInstance", "ShaderF16", "RG11B10UfloatRenderable", "BGRA8UnormStorage", "Float32Filterable", "Float32Blendable", "ClipDistances", "DualSourceBlending", "Device Status: ", "Platform: ", "Total Features: ", "Feature name: ", "Device limits: ", "MaxTextureDimension1D: ", "MaxTextureDimension2D: ", "MaxTextureDimension3D: ", "MaxTextureArrayLayers: ",
"ErrorType: ", "Error Message: ", "Null", "WebGPU", "D3D11", "D3D12", "Metal", "Vulkan", "OpenGL", "OpenGLES", "DiscreteGPU", "IntegratedGPU", "CPU", "Unknown", "NoError", "Validation", "OutOfMemory", "Internal"]);
jl_String.prototype.toString = function() {
    return $rt_ustr(this);
};
jl_String.prototype.valueOf = jl_String.prototype.toString;
jl_Object.prototype.toString = function() {
    return $rt_ustr(jl_Object_toString(this));
};
jl_Object.prototype.__teavm_class__ = function() {
    return $dbg_class(this);
};
let $rt_export_main = $rt_mainStarter(cgxwda_MainTeaVM_main);
$rt_export_main.javaException = $rt_javaException;
let $rt_jso_marker = Symbol('jsoClass');
(() => {
    let c;
    c = cgxwbt_TeaVMApp$1.prototype;
    c.onAnimationFrame = $rt_callWithReceiver(cgxwbt_TeaVMApp$1_onAnimationFrame$exported$0);
    c = cgxjl_JParserLibraryLoader$loadScript$lambda$_5_0.prototype;
    c.handleEvent = $rt_callWithReceiver(cgxjl_JParserLibraryLoader$loadScript$lambda$_5_0_handleEvent$exported$0);
    c = cgxjl_JParserLibraryLoader$loadScript$lambda$_5_1.prototype;
    c.handleEvent = $rt_callWithReceiver(cgxjl_JParserLibraryLoader$loadScript$lambda$_5_1_handleEvent$exported$0);
    c = cgxjl_JParserLibraryLoader$lambda$loadWasm$1$lambda$_10_0.prototype;
    c.onInit = $rt_callWithReceiver(cgxjl_JParserLibraryLoader$lambda$loadWasm$1$lambda$_10_0_onInit$exported$0);
    c = cgxw_RequestAdapterCallback$1.prototype;
    c.OnCallback = $rt_callWithReceiver(cgxw_RequestAdapterCallback$1_OnCallback$exported$0);
    c = cgxw_RequestDeviceCallback$1.prototype;
    c.OnCallback = $rt_callWithReceiver(cgxw_RequestDeviceCallback$1_OnCallback$exported$0);
    c = cgxw_UncapturedErrorCallback$1.prototype;
    c.OnCallback = $rt_callWithReceiver(cgxw_UncapturedErrorCallback$1_OnCallback$exported$0);
})();
$rt_exports.main = $rt_export_main;
}));
