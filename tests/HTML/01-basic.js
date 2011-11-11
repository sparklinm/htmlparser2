exports.name = "Basic test";
exports.options = {
    handler: {},
    parser: {}
};
exports.html =
    "<!DOCTYPE html><html><title>The Title</title><body>Hello world</body></html>";
exports.expected = [
    {
        name: "!DOCTYPE",
        data: "!DOCTYPE html",
        type: "directive"
    },
    {
        type: "tag",
        name: "html",
        children: [
            {
                type: "tag",
                name: "title",
                children: [
                    {
                        data: "The Title",
                        type: "text"
                    }
                ]
            },
            {
                type: "tag",
                name: "body",
                children: [
                    {
                        data: "Hello world",
                        type: "text"
                    }
                ]
            }
        ]
    }
];
