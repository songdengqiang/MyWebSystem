// 抽离出的共用页面方法
import axios from 'axios'

export default {
  data() {
    return {
      kgraphInfo: {
        databaseA: "Graph",
        databaseP: "123456",
        databaseD: "7687",
        dataBaseS: false,
        states: '失败',
        dataPath: '/user/graphs/'
      },
      neo4jData: []
    }
  },
  computed: {},
  created() { },
  mounted() { },
  methods: {
    pageJump(num) {
      const _this = this
      switch (num) {
        case 0:
          _this.$emit('chengeTitle', _this.headerTitle)
          _this.$router.push({ path: '/home' })
          break
        case 1:
          _this.headerTitle = '小强！'
          _this.$emit('chengeTitle', _this.headerTitle)
          _this.$router.push({ path: '/home' })
          break
        case 2:
          _this.$router.push({ path: '/' })
          break
        case 3:
          window.location.href = "about:blank";
          window.close();
          break
      }
    },
    loginDatabase(num) {
      const _this = this;
      switch (num) {
        case 0:
          _this.getData(_this.kgraphInfo, 0, 'getCon')
          break
      }
    },
    getData(param, num ,pathName) {
      switch (num) {
        // neo4j数据库的连接-post请求
        case 0:
          axios.post(this.pathV + param.dataPath + pathName, param).then(
            (res) => {
              if (res.data !== '数据库连接失败！') {
                // this.neo4jData = res.data
                this.$message('数据库登录成功');
                this.kgraphInfo.states = '成功'
              } else {
                this.$message(res.data);
                this.kgraphInfo.states = '失败'
              }
            }).catch(
              () => { this.$message('后台连接失败!'); }
            )
          break
        // neo4j数据库的操作-get请求
        case 1:
          axios.get(this.pathV + param.dataPath + pathName).then((res)=>{
            if(res.data.datas!== null){
              console.log(res.data.datas)
              this.neo4jData = res.data.datas
              this.$message(res.data.info);
            }else{
              this.$message(res.data.info);
            }
          })

      }

    }
  }
}