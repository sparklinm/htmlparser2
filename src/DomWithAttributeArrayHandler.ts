import DomHandler from 'domhandler'
export class DomWithAttributeArrayHandler extends DomHandler {
    _attributes = [];

    onattribute(name, value, quote) {
        this._attributes.push(
            {
                [name]: value
            }
        );
    }

    onopentag(name, attribs) {
        super.onopentag(name, attribs);
        this.tagStack[
            this.tagStack.length - 1
        ].attribs = this._attributes;
        this._attributes = [];
    }
}
