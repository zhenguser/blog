const utils = {
    genSidebar: function (title, children = [''], collapable = true, sidebarDepth = 1) {
        return {
            title,
            collapable,
            sidebarDepth,
            children,
        }
    }
};

module.exports = utils;