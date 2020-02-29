const utils = {
    genSidebar: function (title, children = [''], collapable = false, sidebarDepth = 2) {
        return {
            title,
            collapable,
            sidebarDepth,
            children,
        }
    }
};

module.exports = utils;