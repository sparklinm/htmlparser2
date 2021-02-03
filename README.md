Fork 的 [htmlparser2](https://github.com/fb55/htmlparser2)。并对其做了修改。

`htmlparser2` 并不支持重复的属性，例如：

`<input id="t" id="s">` 被 `htmlparser2` 转换后会变成 `<input id="t">`，后面重复的 id 属性被忽略。

使用本分支添加的 `DomWithAttributeArrayHandler` 方法可以处理重复属性。同时也需要使用修改后 [dom-serializer](https://github.com/sparklinm/dom-serializer/tree/dev_array_attrs)。

示例：

```js
let { Parser, DomWithAttributeArrayHandler } = require('htmlparser2');
let domSerializer = require('dom-serializer');

const handler = new DomWithAttributeArrayHandler(
    (err, dom) => {
        if (err) {
            console.error(`XML错误:${domStr}`);
            console.error(err);
        }
    },
    {
        normalizeWhitespace: false
    }
);

const parser = new Parser(handler, {
    xmlMode: true
});

parser.write('<input id="test1" id="test2">');

parser.end();

domSerializer(handler.dom, {
    xmlMode: true
});

// <input id="test1" id="test2">
```