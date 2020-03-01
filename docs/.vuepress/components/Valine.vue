<template>
    <div v-if="comment">
        <!-- id 将作为查询条件 -->
        <span :id="page.path" class="leancloud_visitors" :data-flag-title="page.title">
            <em class="post-meta-item-text"><h4>文章评论：</h4> </em>
            <i class="leancloud-visitors-count">1000000</i>
        </span>
        <div id="vcomments"></div>
    </div>
</template>

<script>
export default {
    computed:{
        comment: function() {
            let { comment = 'true' } = this.$frontmatter;
            console.log(this);
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
                avatar:'mp', 
                meta: ['nick','mail','link'],
                visitor: true,
                pageSize: 20,
                path: window.location.pathname,
                placeholder: '欢迎留言...' 
            });
        }
    }
}
</script>>


    