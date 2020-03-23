<template>
    <div v-if="comment">
        <!-- id 将作为查询条件 -->
        <h3></h3>
        <h3>留言：</h3>
        <div id="vcomments"></div>
    </div>
</template>

<script>
export default {
    computed:{
        comment: function() {
            let { comment = 'true' } = this.$frontmatter;
            return comment;
        },
        page: function() {
            let { path = '/', title = '首页' } = this.$page;
            return { path, title }; 
        }

    },
    mounted(){
        this.renderValine()
    },
    methods: {
        renderValine(){
            if(typeof windou !== 'undefined'){
                this.windou = windou;
                window.AV = require('leancloud-storage');
            }
            const secretKeyConf = require('../../../config/secretKeyConf.js')
            const Valine = require('valine');
            new Valine({
                el: '#vcomments',
                appId: secretKeyConf.appId, 
                appKey: secretKeyConf.appKey,
                notify:false, 
                verify:false, 
                avatar:'', 
                meta: ['nick','mail','link'],
                visitor: false,
                pageSize: 20,
                path: window.location.pathname,
                placeholder: '欢迎留言...' 
            });
        }
    }
}
</script>>