<template>
    <div v-loading.fullscreen.lock="loading">
        <div class="w cf">
            <div class="top">
                <h2>{{name}}审批</h2>
                <el-button @click="model(0)" size="small" class="back">返回</el-button>
                <el-button @click="model(1)" size="small" type="primary" class="sub1" :loading="isLoading">同意</el-button>
                <el-button @click="model(2)" size="small" type="danger" class="sub2" :loading="isLoading">驳回</el-button>
            </div>
        </div>
        <div class="w">
            <div class="content" :style="{height:screenHeight}">
                <div class="line">
                    <span>{{name}}</span>
                </div>
                <ul class="list cf">
                    <li class="pt">
                        <span class="tit">银行名称</span>
                        <input class="ipt" type="text" v-model="bankName" readonly>
                    </li>
                    <li class="pt">
                        <span class="tit">开户行</span>
                        <input class="ipt" type="text" v-model="bankChildName" readonly>
                    </li>
                    <li class="pt">
                        <span class="tit">银行账户</span>
                        <input class="ipt" type="text" v-model="bankCode" readonly>
                    </li>
                    <li class="pt">
                        <span class="tit">银行余额</span>
                        <input class="ipt" type="text" v-model="initialAmount" readonly>
                    </li>

                    <li class="pt" v-if="isTurn">
                        <span class="tit">转入银行名称</span>
                        <input class="ipt" type="text" v-model="remarkBankCode" readonly>
                    </li>
                    <li class="pt" v-if="isTurn">
                        <span class="tit">转入开户行</span>
                        <input class="ipt" type="text" v-model="bankChildName2" readonly>
                    </li>
                    <li class="pt" v-if="isTurn">
                        <span class="tit">转入银行账户</span>
                        <input class="ipt" type="text" v-model="bankCode2" readonly>
                    </li>
                    <li class="pt" v-if="isTurn">
                        <span class="tit">转入银行余额</span>
                        <input class="ipt" type="text" v-model="initialAmount2" readonly>
                    </li>

                    <li class="pt">
                        <span class="tit"><span class="red">*</span>{{moneyName}}</span>
                        <input class="ipt" type="text" v-model="money" readonly>
                    </li>
                    <li class="pt">
                        <span class="tit"><span class="red">*</span>{{dateName}}</span>
                        <el-date-picker
                            class="data"
                            v-model="transferDate"
                            type="date"
                            :picker-options="pickerOptions1"
                            value-format="yyyy-MM-dd"
                            placeholder="选择日期"
                            readonly>
                        </el-date-picker>
                    </li>
                    <li class="pt">
                        <span class="tit">备注</span>
                        <textarea class="tex" type="text" v-model="discription" maxlength="50" readonly></textarea>
                    </li>
                </ul>
                <div class="line">
                    <span>审批记录</span>
                </div>
                <ul class="approval">
                    <li class="cf" v-for="item in auditRecordList">
                        <img v-if="!item.faceUri" src="../../../../static/images/tit.png" alt="">
                        <img v-else :src="item.faceUri" alt="">
                        <div class="listHeader">
                            <span class="listName">{{item.auditUserName}}</span>
                            <span class="listDepartment" v-if="item.auditUserType != ''">——{{item.auditUserType}}</span>
                            <span class="listData">{{item.simpleAuditTime}}</span>
                        </div>
                        <div class="listFooter">
                            <span class="listState">意见：</span>
                            <span class="listContent">{{item.discription}}</span>
                        </div>
                    </li>
                </ul>

                <ul class="list cf">
                    <li class="pt">
                        <span class="tit">可选审批意见</span>
                        <el-select class="sel" v-model="opinion" placeholder="请选择" @change="opinionChange">
                            <el-option
                                v-for="item in opinionList"
                                :key="item.value"
                                :label="item.opinionItem"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </li>
                    <li class="pt">
                        <span class="tit">审批意见</span>
                            <textarea class="tex" v-model="discription2" name="opinionItem" id="opinionItem" maxlength="50">
                            </textarea>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script type="text/ecmascript-6">
    import axios from 'axios'
    import addUrl from '../../../../static/js/addUrl'
    import number from '../../../../static/js/number'
    import unNumber from '../../../../static/js/unNumber'
    export default{
        data(){
            return{
                bankName:'',//银行名称
                bankChildName:'',//开户行
                bankCode:'',//银行账户
                initialAmount:'',//银行余额

                money:'',//操作金额
                transferDate:'',//操作日期
                discription:'',//备注
                type:'',//业务类别
                moneyName:'',//金额名称
                dateName:'',//日期名称
                name:'',//名称

                isTurn:false,//是否为银行互转
                remarkBankCode:'',//副银行账户卡号
                options:'',//副银行账户卡号
                bankChildName2:'',//转入开户行
                bankCode2:'',//转入银行账户
                initialAmount2:'',//转入银行余额

                auditRecordList:[],//审批意见
                opinion:'同意',//select框
                opinionList:[
                    {value:'同意',opinionItem:'同意'},{value:'驳回',opinionItem:'驳回'}
                ],//可选审批意见
                discription2:'同意',//审批意见

                pickerOptions1:{
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    },
                },
                debitId:this.$route.params.debitId,
                loading:true,
                isLoading:false,
                screenHeight: '' //页面初始化高度
            }
        },
        methods: {
            //selsect框change事件
            opinionChange(){
                this.discription2 = this.opinion
            },
            model(n){
                this.loading = true;
                if(n == 0){
                    this.$confirm('是否返回？', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$router.go(-1)
                    }).catch(() => {
                        this.loading = false;
                    });
                }else{
                    this.isLoading = true;
                    let message = ''
                    if(n == 1){
                        message = '确定是否提交？'
                    }else if(n == 2){
                        message = '确定是否驳回？'
                    }
                    this.$confirm(message, '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        showClose: false,
                        closeOnClickModal: false,
                        closeOnPressEscape: false,
                        type: 'warning',
                        beforeClose: (action, instance, done) => {
                            if (action === 'confirm') {
                                instance.confirmButtonLoading = true;
                                instance.cancelButtonLoading = true;
                                instance.confirmButtonText = '执行中...';
                                setTimeout(() => {
                                    done();
                                    setTimeout(() => {
                                        instance.confirmButtonLoading = false;
                                        instance.cancelButtonLoading = false;
                                    }, 300);
                                }, 300);
                            } else {
                                done();
                            }
                        }
                    }).then(() => {
                        this.submit(n)
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消'
                        });
                        this.loading = false;
                        this.isLoading = false;
                    });
                }
        },
            submit(n){
                let params = new URLSearchParams();
                let url = '';
                if (n == 1) {
                    url = addUrl.addUrl('approvalBankAgree')
                    this.discription2 = (this.discription2 == '驳回') ? '同意':this.discription2
                } else if (n == 2) {
                    url = addUrl.addUrl('approvalBankRefuse')
                    this.discription2 = (this.discription2 == '同意') ? '驳回':this.discription2
                }
                params.append('bankTransferId', this.debitId);
                params.append('remark', this.discription2);
                axios({
                    method: 'post',
                    url: url,
                    data: params,
                    headers: {
                        'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
                    }
                }, params)
                    .then(response=> {
                        this.loading = false;
                        this.isLoading = false;
//                        console.log(response);
                        if (response.data.status == 200) {
                            this.$router.go(-1);
                            this.$message({
                                type: 'success',
                                message: '提交成功'
                            });
                        } else if (response.data.status == 400) {
                            var msg = response.data.msg;
                            this.$message.error(msg);
                        }
                    })
                    .catch(error=> {
                        this.loading = false;
                        this.isLoading = false;
//                        console.log(error);
                        this.$message.error('提交失败，请重试！');
                    })
                }
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
            var url = addUrl.addUrl('seeBankMoney')
            params.append('id',this.debitId);
            axios.post(url,params)
                .then(response=> {
//                    console.log(response);
                    let data = response.data.value;
                    let bankTransfer = data.bankTransfer
                    this.bankName =bankTransfer.bankName
                    this.bankChildName =bankTransfer.bankChildName
                    this.bankCode =bankTransfer.bankCode
                    this.discription =bankTransfer.discription
                    this.initialAmount = number.number(bankTransfer.endAmount)
                    this.money = number.number(bankTransfer.money)
                    this.transferDate = bankTransfer.simpleTransferDate
                    this.simpleTransferDate = bankTransfer.simpleTransferDate

                    this.remarkBankCode = bankTransfer.remarkBankChildName
                    this.bankChildName2 = bankTransfer.remarkBankName
                    this.initialAmount2 = number.number(bankTransfer.remarkEndAmount)
                    this.bankCode2 = bankTransfer.bankCodeRemark
                    let auditRecordList = data.auditRecordList

                    this.auditRecordList = auditRecordList
//                    console.log(this.auditRecordList);
                    let type = bankTransfer.type

                    if(type == 1){
                        this.isTurn = false
                        this.name = '提取现金'
                        this.moneyName = '提现金额'
                        this.dateName = '提现日期'
                    }else if(type == 2){
                        this.isTurn = false
                        this.name = '存入现金'
                        this.moneyName = '存现金额'
                        this.dateName = '存现日期'
                    }else if(type == 3){
                        this.isTurn = true
                        this.name = '银行互转'
                        this.moneyName = '转账金额'
                        this.dateName = '转账日期'
                    }else if(type == 4){
                        this.isTurn = false
                        this.name = '银行手续费'
                        this.moneyName = '手续费金额'
                        this.dateName = '支付日期'
                    }else if(type == 5){
                        this.isTurn = false
                        this.name = '利息收入'
                        this.moneyName = '利息金额'
                        this.dateName = '收取日期'
                    }else if(type == 6){
                        this.isTurn = false
                        this.name = '收到投资'
                        this.moneyName = '投资金额'
                        this.dateName = '收取日期'
                    }
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
        text-align: center;
        font-size:0px;
    }
    .top {
        margin: 20px 0;
        text-align: center;
        position: relative;
    }
    h2{
        font-size:18px;
        display: inline-block;
    }
    .back{
        position: absolute;
        right:20px;
        font-size:12px;
    }
    .top .sub1{
        position: absolute;
        right:110px;
        font-size:12px;
    }
    .top .sub2{
        position: absolute;
        right:190px;
        font-size:12px;
    }
    .content{
        width: 1120px;
        background-color: #fff;
        padding: 20px 40px;
        box-shadow: 0px 2px 7px rgba(0,0,0,0.25);
        overflow-y: auto;
    }
    .list{
        width:80%;
        text-align: center;
        margin: 0 auto;
    }
    .list .pt{
        width:100%;
        display: inline-block;
        height:36px;
        text-align: left;
        line-height: 36px;
        margin-top: 20px;
        float: left;
    }
    .list .ptx{
        width:100%;
        display: inline-block;
        height:320px;
        text-align: left;
        line-height: 36px;
        margin-top: 20px;
        float: left;
    }
    .list li .ipt{
        display: inline-block;
        width:600px;
        height:28px;
        border: 1px solid #ccc;
        border-radius: 3px;
        vertical-align: middle;
        padding: 3px 10px;
    }
    .list li .tex{
        display: inline-block;
        width:600px;
        height:40px;
        border: 1px solid #ccc;
        border-radius: 3px;
        vertical-align: middle;
        padding: 3px 10px;
        resize: none;
    }
    .list li .sel{
        width:622px;
        height:36px;
    }
    .list li .tit{
        font-size:14px;
        display: inline-block;
        width:150px;
        text-align: right;
        margin-right: 20px;
        vertical-align: middle;
    }
    .list li .data{
        width:622px;
        height:36px;
    }
    .approval{
        width:100%;
        margin-top: 20px;
        font-size:14px;
    }
    .approval li{
        margin-top: 20px;
        text-align: left;
    }
    .approval li img{
        display: inline-block;
        width:50px;
        height:50px;
        border-radius: 50%;
        overflow: hidden;
        float: left;
        margin-left: 130px;
        margin-right: 20px;
    }
    .approval li .listHeader{
        display: inline-block;
        float: left;
        width:80%;
    }
    .approval li .listHeader .listName{

        margin-right: 10px;
    }
    .approval li .listHeader .listDepartment{
        margin-left: 10px;
    }
    .approval li .listHeader .listData{
        float: right;
    }
    .approval li .listFooter{
        display: inline-block;
        float: left;
        width:80%;
        margin-top: 10px;
    }
    .approval li .listFooter .listState{
        display: inline-block;
        float: left;
        margin-right: 10px;
    }
    .approval li .listFooter .listContent{
        width:90%;
        display: inline-block;
        float: left;
        height:50px;
        overflow: hidden;
    }
    .approval-opinion{
        font-size:16px;
        margin-top: 30px;
    }
    .approval-opinion li{
        margin-top: 30px;
        text-align: center;
    }
    .approval-opinion li span{
        display: inline-block;
        width:100px;
        height:22px;
        vertical-align: top;
    }
    .approval-opinion li select{
        display: inline-block;
        width:80%;
        height:30px;
        text-align: center;
        padding: 2px 35%;
        border: none;
        border-bottom: 1px solid #ccc;
    }
    .approval-opinion li .bankCode{
        width:700px;
        height:30px;
        text-align: center;
        border: none;
    }
</style>
