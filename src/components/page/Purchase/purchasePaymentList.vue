<template>
    <div v-loading.fullscreen.lock="loading">
        <div class="w cf">
            <div class="top">
                <h2>采购付款单列表</h2>
                <router-link v-if="!isBossSee && isShowButton && auditFlg != 7" :to="{name:'newPurchasePayment',params:{purchaseId:purchaseId,activeName:activeName,currentPage:currentPage,isBossSee:isBossSee}}" class="addLink">新增采购付款单</router-link>
                <el-button @click="back" size="small" class="back">返回</el-button>
            </div>
        </div>
        <div class="w">
            <div class="left" :style="{height:screenHeight}">
                <el-table :data="tableData" class="blueList">
                    <el-table-column property="sendDate" label="日期" sortable align="center"></el-table-column>
                    <el-table-column property="childTypeName" sortable label="付款记录" align="center">
                        <template slot-scope="scope">
                            <span>付给{{scope.row.supplierName}}一笔款项</span>
                        </template>
                    </el-table-column>
                    <el-table-column property="sendMoney" label="金额" sortable align="center">
                        <template slot-scope="scope">
                            <span>{{scope.row.showMoney}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column property="attachCount" label="附件" sortable align="center">
                        <template slot-scope="scope">
                            <span>{{scope.row.attachCount}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column property="auditFlg" label="状态" align="center"></el-table-column>
                    <el-table-column property="" label="查看" align="center">
                        <template slot-scope="scope">
                            <router-link :to="{name:'seePurchasePayment',params:{purchaseId:scope.row.sendId,activeName:activeName,currentPage:currentPage,isBossSee:isBossSee,auditFlg:auditFlg}}" class="see">
                                <i class="icon iconfont icon-kanguo blue"></i>
                            </router-link>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import axios from 'axios'
    import number from '../../../../static/js/number'
    import unNumber from '../../../../static/js/unNumber'
    import addUrl from '../../../../static/js/addUrl'
    export default {
        data() {
            return {
                purchaseId:this.$route.params.purchaseId,//采购单id
                currentPage:this.$route.params.currentPage,
                activeName:this.$route.params.activeName,
                isBossSee:this.$route.params.isBossSee,//是否为boss查看页面模式
                auditFlg:this.$route.params.auditFlg,//判断该条是否为已红冲状态，如果为'7'时则不显示新建按钮
                tableData: [],//采购单列表数据
                isShowButton:false,//是否显示新建按钮
                loading:true,
                screenHeight: '' //页面初始化高度
            }
        },
        methods:{
            back(){
                if(this.isBossSee){
                    this.$router.push({name:'viewingList',params:{activeName:this.activeName,currentPage:this.currentPage}})
                } else{
                    this.$router.push({name:'PurchaseList',params:{choice:this.choice,currentPage:this.currentPage}})
                }
            },
        },
        mounted(){
            // 动态设置背景图的高度为浏览器可视区域高度
            // 首先在Virtual DOM渲染数据时，设置下背景图的高度．
            var topHeight = $('.top').innerHeight()
            var headerHeight = $('header').innerHeight()
//            console.log(topHeight);
//            console.log(headerHeight);
            this.screenHeight = `${document.documentElement.clientHeight - topHeight - headerHeight - 85}px`;
            // 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
            const that = this;
            window.onresize = function temp() {
                var topHeight = $('.top').innerHeight()
                var headerHeight = $('header').innerHeight()
//                console.log(topHeight);
//                console.log(headerHeight);
                that.screenHeight = `${document.documentElement.clientHeight - topHeight - headerHeight - 85}px`;
            };
        },
        created(){
            var params = new URLSearchParams();
            var url = addUrl.addUrl('newPurchasePayment');
            params.append('purchaseId',this.purchaseId);
            axios.post(url,params)
                .then(response=> {
//                    console.log(response);
                    var data = response.data.value;
                    var list = data.list
                    let unPayMoney = data.unPayMoney
                    this.isShowButton = unPayMoney ? true : false
                    for(let i = 0; i < list.length; i++){
                        list[i].showMoney =number.number(list[i].sendMoney)
                        list[i].sendMoney = unNumber.unNumber(list[i].sendMoney)
                    }
                    this.tableData = list;
                    this.loading = false
                })
                .catch(error=> {
                    this.loading = false
//                    console.log(error);
                    alert('网络错误，不能访问');
                });
        },
    }
</script>

<style scoped>
    .w{
        height:100%;
    }

    .top {
        margin: 20px 0;
        text-align: center;
        position: relative;
    }

    h2 {
        display: inline-block;
    }
    .addLink{
        display: inline-block;
        width: 120px;
        height:32px;
        color: #fff;
        background-color: #409EFF;
        border-radius: 3px;
        line-height: 32px;
        position: absolute;
        right:120px;
        text-decoration: none;
    }
    .back{
        position: absolute;
        right:20px;
        font-size:12px;
    }
    .left {
        width: 1160px;
        background-color: #fff;
        padding: 20px;
        text-align: left;
        box-shadow: 0px 2px 7px rgba(0,0,0,0.25);
        overflow-y: auto;
    }
    .el-table {
        margin: 30px 0;
    }
    .see{
        text-decoration: none;
    }

</style>
