/*
 * HashMap的实现
 */
function HashMap() {
	/** Map 大小 * */
	var size = 0;
	/** 对象 * */
	var entry = new Object();

	/** 存 * */
	this.put = function(key, value) {
		if (!this.containsKey(key)) {
			size++;
		}
		entry[key] = value;
	};

	/** 取 * */
	this.get = function(key) {
		if (this.containsKey(key)) {
			return entry[key];
		} else {
			return null;
		}
	};

	/** 删除 * */
	this.remove = function(key) {
		if (delete entry[key]) {
			size--;
		}
	};

	/** 是否包含 Key * */
	this.containsKey = function(key) {
		return (key in entry);
	};

	/** 是否包含 Value * */
	this.containsValue = function(value) {
		for ( var prop in entry) {
			if (entry[prop] == value) {
				return true;
			}
		}
		return false;
	};

	/** 所有 Value * */
	this.values = function() {
		var values = new Array(size);
		for ( var prop in entry) {
			values.push(entry[prop]);
		}
		return values;
	};

	/** 所有 Key * */
	this.keys = function() {
		var keys = new Array(size);
		for ( var prop in entry) {
			keys.push(prop);
		}
		return keys;
	};

	/** Map Size * */
	this.size = function() {
		return size;
	};
}

/*
 * 实现的ArrayList类
 */
var ArrayList = function() {
	var args = ArrayList.arguments;
	var initialCapacity = 10;

	if (args != null && args.length > 0) {
		initialCapacity = args[0];
	}

	var elementData = new Array(initialCapacity);
	var elementCount = 0;

	this.size = function() {
		return elementCount;
	}

	this.add = function(element) {
		ensureCapacity(elementCount + 1);
		elementData[elementCount++] = element;
		return true;
	}

	this.addElementAt = function(index, element) {
		// alert("addElementAt");
		if (index > elementCount || index < 0) {
			return;
			// throw (new Error(-1,"IndexOutOfBoundsException, Index: "+index+",
			// Size: " + elementCount));
		}
		ensureCapacity(elementCount + 1);
		for ( var i = elementCount + 1; i > index; i--) {
			elementData[i] = elementData[i - 1]
		}
		elementData[index] = element;
		elementCount++;
	}

	this.setElementAt = function(index, element) {
		// alert("setElementAt");
		if (index > elementCount || index < 0) {
			alert("IndexOutOfBoundsException, Index: " + index + ", Size: "
					+ elementCount);
			return;
			// throw (new Error(-1,"IndexOutOfBoundsException, Index: "+index+",
			// Size: " + elementCount));
		}
		elementData[index] = element;
	}

	this.toString = function() {
		// alert("toString()");
		var str = "{";
		for ( var i = 0; i < elementCount; i++) {
			if (i > 0) {
				str += ",";
			}
			str += elementData[i];
		}
		str += "}";
		return str;
	}

	this.get = function(index) {
		// alert("elementAt");
		if (index >= elementCount) {
			return;
			// throw ( new Error( -1,"ArrayIndexOutOfBoundsException, " + index
			// + " >= " + elementCount ) );
		}
		return elementData[index];
	}

	this.removeAt = function(index) {
		if (index >= elementCount) {
			alert("ArrayIndexOutOfBoundsException, " + index + " >= "
					+ elementCount);
			// return;
			throw (new Error(-1, "ArrayIndexOutOfBoundsException, " + index
					+ " >= " + elementCount));
		}
		var oldData = elementData[index];
		for ( var i = index; i < elementCount - 1; i++) {
			elementData[i] = elementData[i + 1];
		}
		elementData[elementCount - 1] = null;
		elementCount--;
		return oldData;
	}

	this.isEmpty = function() {
		return elementCount == 0;
	}

	this.indexOf = function(elem) {
		for ( var i = 0; i < elementCount; i++) {
			if (elementData[i] == elem) {
				return i;
			}
		}
		return -1;
	}

	this.lastIndexOf = function(elem) {
		for ( var i = elementCount - 1; i >= 0; i--) {
			if (elementData[i] == elem) {
				return i;
			}
		}
		return -1;
	}

	this.contains = function(elem) {
		return this.indexOf(elem) >= 0;
	}

	function ensureCapacity(minCapacity) {
		var oldCapacity = elementData.length;
		if (minCapacity > oldCapacity) {
			var oldData = elementData;
			var newCapacity = parseInt((oldCapacity * 3) / 2 + 1);
			if (newCapacity < minCapacity) {
				newCapacity = minCapacity;
			}
			elementData = new Array(newCapacity);
			for ( var i = 0; i < oldCapacity; i++) {
				elementData[i] = oldData[i];
			}
		}
	}
}