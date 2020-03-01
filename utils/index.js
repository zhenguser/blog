const utils = {
    genSidebar: function (title, children = [''], collapable = false, sidebarDepth = 1) {
        return {
            title,
            collapable,
            sidebarDepth,
            children,
        }
    }
};

module.exports = utils;