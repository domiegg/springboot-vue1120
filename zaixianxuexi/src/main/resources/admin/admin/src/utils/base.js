const base = {
    get() {
        return {
            url : "http://localhost:8080/zaixianxuexi/",
            name: "zaixianxuexi",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/zaixianxuexi/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "在线互动学习网站"
        } 
    }
}
export default base
