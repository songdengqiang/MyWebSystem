import * as pathParing from '@/tools/network/pathParing'
export default {
    data(){
        return{}
    },
    methods:{
        //页面的跳转逻辑
        pageJump(str) {
            const _this = this
            switch (str) {
                case '离线首页':
                    _this.$store.commit('editLogin', '离线用户')
                    _this.$router.push({ path: '/home/kgHome' })
                    this.$message('系统离线登录成功！');
                    sessionStorage.setItem('userName','离线用户！')
                    break
                case '用户首页':
                    _this.$router.push({ path: '/home/kgHome' })
                    this.$message('欢迎用户'+this.$store.state.loginInfo+"登录此系统");
                    sessionStorage.setItem('userName',this.$store.state.loginInfo)
                    break
                case '知识图谱':
                    _this.$router.push({ path: '/home/kgHome' })
                    break
                case '登录页':
                    _this.$router.push({ path: '/login' })
                    break
                case 'txtFile':
                    _this.$router.push({path:'/home/kgHome/txtFileInput'})
                    break
                case '数据库编辑':
                    _this.$router.push({path:'/home/kgHome/editDatabase'})
                    break
                case '退出':
                    window.location.href = "about:blank";
                    window.close();
                    break
            }
        },
        //页面的拦截，判断是否登录！
        pageBlock(pageName){
            console.log(sessionStorage.getItem('userName'))
            if(sessionStorage.getItem('userName') === null){
                this.$alert('你尚未登录，请先登录！', '登录提示', {
                    confirmButtonText: '确定',
                    callback:()=>{
                        this.pageJump('登录页')
                    }
                });
            }else {
                this.$store.commit('editLogin',sessionStorage.getItem('userName'))
                this.pageJump(pageName)
            }
        }
    },
    computed:{},
    created() {
        const _this = this;
        console.log(_this.pageName)
        let initData;
        switch (_this.pageName){
            case 'Login':
                initData = pathParing.initLogin();
                initData.then(res =>{
                    _this.$store.commit('initBgImgList',res)
                }).catch(()=>{
                    _this.$message('服务器背景图片获取失败！')
                })
                break
            //离线首页在加载之前判断
            case 'Home':
                _this.pageBlock('离线首页');
                break;
            case 'kgraph':
                console.log(sessionStorage.getItem('userName'))
                _this.pageBlock('离线首页');
                break;
        }
    },
    mounted() {
    },
    updated() {
    }
}
