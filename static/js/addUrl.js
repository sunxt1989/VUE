/**
 * Created by who on 2018/7/4.
 */
function addUrl(name){
    //var url = 'http://192.168.2.105:8881/web';
    //var url = 'http://192.168.2.190:8881/web';
    //var url = 'http://192.168.2.190:8080/web';
    var url = 'http://192.168.2.191:8080/web';
    //var url = 'https://192.168.2.192:8443/web';
    //var url = 'http://www.cloudaccounting.cn'

    //借款单列表
    if(name == 'loan'){
        return url + '/vue/debit/my/list.html'
    }
    //借款单列表
    if(name == 'loanDelete'){
        return url + '/vue/debit/item/debit/delete.html'
    }
    //新建借款单
    if(name == 'newLoan'){
        return url + '/vue/debit/department.html'
    }
    //新建借款单提交
    if(name == 'newLoanSubmit'){
        return url + '/vue/debit/edit/debit/submit.html'
    }
    //查看借款单
    if(name == 'seeLoan'){
        return url + '/vue/debit/item/debit/show.html'
    }
    //查看借款单提交
    if(name == 'seeLoanSubmit'){
        return url + '/vue/debit/edit/debit/submit.html'
    }
    //查看借款单撤回
    if(name == 'seeLoanBack'){
        return url + '/vue/debit/item/debit/cancel.html'
    }
    //借款单审批列表
    if(name == 'loanApprovalList'){
        return url + '/vue/debit/audit/debit/list.html'
    }
    //借款单审批
    if(name == 'loanSheetApproval'){
        return url + '/vue/debit/item/debit/show.html'
    }
    //借款单审批同意
    if(name == 'loanSheetApprovalAgree'){
        return url + '/vue/debit/item/debit/agree.html'
    }
    //借款单审批驳回
    if(name == 'loanSheetApprovalRefuse'){
        return url + '/vue/debit/item/debit/refuse.html'
    }
    //借款单确认列表
    if(name == 'loanConfirmationList'){
        return url + '/vue/payment/audit/debit/cashier/list.html'
    }
    //借款单确认
    if(name == 'loanConfirmation'){
        return url + '/vue/debit/item/debit/show.html'
    }

    //借款单确认确认
    if(name == 'loanConfirmationAgree'){
        return url + '/vue/payment/item/cashier/agree.html'
    }
    //借款单确认驳回
    if(name == 'loanConfirmationRefuse'){
        return url + '/vue/payment/item/cashier/refuse.html'
    }
    //还款单
    if(name == 'repayment'){
        return url + '/vue/debit/credit/create.html'
    }
    //还款单详情
    if(name == 'seeRepayment'){
        return url + '/vue/debit/item/credit/show.html'
    }
    //还款单提交
    if(name == 'repaymentSubmit'){
        return url + '/vue/debit/edit/credit/submit.html'
    }
    //还款单确认
    if(name == 'seeRepayment'){
        return url + '/vue/debit/item/credit/show.html'
    }
    //还款单确认同意
    if(name == 'repaymentConfirmationAgree'){
        return url + '/vue/payment/item/credit/agree.html'
    }
    //还款单确认驳回
    if(name == 'repaymentConfirmationRefuse'){
        return url + '/vue/payment/item/credit/refuse.html'
    }
    //还款单确认列表
    if(name == 'repaymentConfirmationList'){
        return url + '/vue/payment/audit/credit/list.html'
    }

    //费用单列表
    if(name == 'costSheet'){
        return url + '/vue/expense/list.html'
    }
    //费用单列表删除
    if(name == 'costSheetDelete'){
        return url + '/vue/expense/delete.html'
    }
    //新建费用单
    if(name == 'newCost'){
        return url + '/vue/accountSubject/list.html'
    }
    //新建费用单获得费用小类
    if(name == 'newCostOptionList'){
        return url + '/vue/accountSubject/optionList.html'
    }
    //新建费用单保存
    if(name == 'newCostSave'){
        return url + '/vue/expense/save.html'
    }
    //查看费用单
    if(name == 'seeCost'){
        return url + '/vue/expense/edit.html'
    }
    //查看费用单获得费用小类
    if(name == 'seeCostOptionList'){
        return url + '/vue/accountSubject/optionList.html'
    }
    //查看费用单保存
    if(name == 'seeCostSave'){
        return url + '/vue/expense/save.html'
    }
    //报销单列表
    if(name == 'ReimbursementList'){
        return url + '/vue/application/list.html'
    }
    //报销单列表删除
    if(name == 'ReimbursementListDelete'){
        return url + '/vue/application/delete.html'
    }
    //查看报销单
    if(name == 'seeReimbursement'){
        return url + '/vue/application/check.html'
    }
    //报销单下载
    if(name == 'saveReimbursement'){
        return url + '/vue/application/download/item.html'
    }
    //查看报销单费用列表
    if(name == 'seeReimbursementList'){
        return url + '/vue/expense/enableReceiptList.html'
    }
    //查看报销单保存
    if(name == 'seeReimbursementSave'){
        return url + '/vue/application/save.html'
    }
    //查看报销单提交
    if(name == 'seeReimbursementSubmit'){
        return url + '/vue/application/submit.html'
    }
    //查看报销单驳回
    if(name == 'seeReimbursementBack'){
        return url + '/vue/application/back.html'
    }
    //新建报销单
    if(name == 'newReimbursement'){
        return url + '/vue/application/toAddApplication.html'
    }
    //新建报销单保存
    if(name == 'newReimbursementSave'){
        return url + '/vue/application/save.html'
    }
    //新建报销单提交
    if(name == 'newReimbursementSubmit'){
        return url + '/vue/application/submit.html'
    }
    //新建报销单费用列表
    if(name == 'newReimbursementList'){
        return url + '/vue/expense/enableReceiptList.html'
    }
    //报销单审批列报表
    if(name == 'ReimbursementApprovalList'){
        return url + '/vue/application/auditList.html'
    }
    //报销单审批
    if(name == 'ReimbursementApproval'){
        return url + '/vue/application/check.html'
    }
    //报销单审批同意
    if(name == 'ReimbursementApprovalAgree'){
        return url + '/vue/application/audit/agree.html'
    }
    //报销单审批驳回
    if(name == 'ReimbursementApprovalRefuse'){
        return url + '/vue/application/audit/refuse.html'
    }
    //报销单确认列表
    if(name == 'ReimbursementConfirmationList'){
        return url + '/vue/payment/application/cashierAudit/list.html'
    }
    //报销单确认
    if(name == 'ReimbursementConfirmation'){
        return url + '/vue/application/cashier/check.html'
    }

    //报销单确认同意
    if(name == 'ReimbursementConfirmationConfirmAppliction'){
        return url + '/vue/payment/application/audit/confirmAppliction.html'
    }
    //报销单确认驳回
    if(name == 'ReimbursementConfirmationRefuse'){
        return url + '/vue/payment/application/audit/refuse.html'
    }
    //采购单列表
    if(name == 'PurchaseList'){
        return url + '/vue/purchase/list.html'
    }
    //采购单列表删除
    if(name == 'PurchaseListDelete'){
        return url + '/vue/purchase/delete.html'
    }
    //新建采购单
    if(name == 'newPurchase'){
        return url + '/vue/purchase/add.html'
    }
    //新建采购单保存
    if(name == 'newPurchaseSave'){
        return url + '/vue/purchase/save.html'
    }
    //新建采购单提交
    if(name == 'newPurchaseSubmit'){
        return url + '/vue/purchase/submit.html'
    }
    //查看采购单
    if(name == 'seePurchase'){
        return url + '/vue/purchase/detail.html'
    }
    //查看采购单保存
    if(name == 'seePurchaseSave'){
        return url + '/vue/purchase/save.html'
    }
    //查看采购单提交
    if(name == 'seePurchaseSubmit'){
        return url + '/vue/purchase/submit.html'
    }
    //查看采购单撤回
    if(name == 'seePurchaseBack'){
        return url + '/vue/purchase/back.html'
    }

    //新建采购付款单
    if(name == 'newPurchasePayment'){
        return url + '/vue/purchase/send/show.html'
    }
    //新建采购付款单提交
    if(name == 'newPurchasePaymentSave'){
        return url + '/vue/purchase/send/submit.html'
    }
    //采购付款单详情
    if(name == 'seePurchasePayment'){
        return url + '/vue/purchase/send/item.html'
    }

    //采购单审批列表
    if(name == 'approvalPurchaseList'){
        return url + '/vue/purchase/audit/list.html'
    }
    //采购单审批列表同意
    if(name == 'approvalPurchaseAgree'){
        return url + '/vue/purchase/audit/agree.html'
    }
    //采购单审批列表驳回
    if(name == 'approvalPurchaseRefuse'){
        return url + '/vue/purchase/audit/refuse.html'
    }
    //采购单付款审批列表
    if(name == 'approvalPurchasePayList'){
        return url + '/vue/purchase/send/audit/list.html'
    }
    //采购单付款审批 ：调用采购付款单详情

    //采购单付款审批同意
    if(name == 'approvalPurchasePayAgree'){
        return url + '/vue/purchase/send/audit/agree.html'
    }
    //采购单付款审批驳回
    if(name == 'approvalPurchasePayRefuse'){
        return url + '/vue/purchase/send/audit/refuse.html'
    }
    //采购单付款确认列表
    if(name == 'approvalPurchaseConfirmList'){
        return url + '/vue/purchase/send/cashier/audit/list.html'
    }
    //采购单付款确认：调用采购付款单详情
    //采购单付款确认同意
    if(name == 'approvalPurchaseConfirmAgree'){
        return url + '/vue/purchase/send/cashier/confirm.html'
    }
    //采购单付款确认驳回：调用采购单付款审批驳回

    //销售单列表
    if(name == 'Sale'){
        return url + '/vue/sale/list.html'
    }
    //销售单列表删除
    if(name == 'SaleDelete'){
        return url + '/vue/sale/delete.html'
    }
    //新建销售单
    if(name == 'newSale'){
        return url + '/vue/sale/add.html'
    }
    //新建销售单保存
    if(name == 'newSaleSave'){
        return url + '/vue/sale/save.html'
    }
    //新建销售单提交
    if(name == 'newSaleSubmit'){
        return url + '/vue/sale/submit.html'
    }
    //查看销售单
    if(name == 'seeSale'){
        return url + '/vue/sale/detail.html'
    }
    //查看销售单撤回
    if(name == 'seeSaleBack'){
        return url + '/vue/sale/cancel.html'
    }
    //销售单审批列表
    if(name == 'approvalSaleList'){
        return url + '/vue/sale/audit/list.html'
    }
    //销售单审批同意
    if(name == 'approvalSaleAgree'){
        return url + '/vue/sale/audit/agree.html'
    }
    //销售单审批驳回
    if(name == 'approvalSaleRefuse'){
        return url + '/vue/sale/audit/refuse.html'
    }
    //新建销售收款单
    if(name == 'newSalePayment'){
        return url + '/vue/sale/receive/add.html'
    }
    //新建销售收款单提交
    if(name == 'newSalePaymentSubmit'){
        return url + '/vue/sale/receive/submit.html'
    }
    //查看销售收款单
    if(name == 'seeSalePayment'){
        return url + '/vue/sale/receive/item.html'
    }
    //销售单收款审批列表
    if(name == 'approvalSalePayList'){
        return url + '/vue/sale/receive/audit/list.html'
    }
    //销售单收款审批同意
    if(name == 'approvalSalePayAgree'){
        return url + '/vue/sale/receive/audit/agree.html'
    }
    //销售单收款审批驳回
    if(name == 'approvalSalePayRefuse'){
        return url + '/vue/sale/receive/audit/refuse.html'
    }
    //销售单收款确认列表
    if(name == 'approvalSaleConfirmList'){
        return url + '/vue/sale/receive/cashier/audit/list.html'
    }
    //销售单收款出纳确认
    if(name == 'approvalSaleConfirmAgree'){
        return url + '/vue/sale/receive/cashier/confirm.html'
    }

    //固定资产列表
    if(name == 'fixedAssetsList'){
        return url + '/vue/assets/fixed/list.html'
    }
    //固定资产列表计提
    if(name == 'fixedAssetsListCalculation'){
        return url + '/vue/assets/fixed/deprecition.html'
    }
    //固定资产详情
    if(name == 'fixedAssets'){
        return url + '/vue/assets/fixed/item.html'
    }
    //固定资产保存
    if(name == 'fixedSave'){
        return url + '/vue/assets/fixed/updateWorth.html'
    }
    //固定资产详情保存分摊
    if(name == 'fixedAssetsSave'){
        return url + '/vue/assets/change/department.html'
    }
    //固定资产详情处置
    if(name == 'fixedAssetsHandle'){
        return url + '/vue/assets/fixed/deal/submit.html'
    }
    //固定资产详情处置完成
    if(name == 'fixedAssetsHandleFinish'){
        return url + '/vue/assets/fixed/deal/receive/submit.html'
    }


    //无形资产列表
    if(name == 'intangibleAssetsList'){
        return url + '/vue/assets/intangible/list.html'
    }
    //无形资产列表
    if(name == 'intangibleAssetsListCalculation'){
        return url + '/vue/assets/intangible/deprecition.html'
    }
    //无形资产详情
    if(name == 'intangibleAssets'){
        return url + '/vue/assets/intangible/item.html'
    }
    //项目列表
    if(name == 'projectList'){
        return url + '/vue/project/list.html'
    }
    //项目删除
    if(name == 'projectDelete'){
        return url + '/vue/project/delete.html'
    }
    //查看项目
    if(name == 'seeProject'){
        return url + '/vue/project/item.html'
    }
    //保存项目
    if(name == 'projectSave'){
        return url + '/vue/project/save.html'
    }
    //银行账户列表
    if(name == 'bankList'){
        return url + '/vue/bank/list.html'
    }
    //删除银行账户
    if(name == 'bankDelete'){
        return url + '/vue/bank/delete.html'
    }
    //银行账户保存
    if(name == 'bankSave'){
        return url + '/vue/bank/save.html'
    }
    //查看银行账户
    if(name == 'seeBank'){
        return url + '/vue/bank/item.html'
    }
    //银行现金业务
    if(name == 'bankMoneyList'){
        return url + '/vue/bank/list4transfer.html'
    }
    //银行现金业务列表
    if(name == 'bankMoneyList2'){
        return url + '/vue/bank/transfer/my/list.html'
    }
    //银行业务
    if(name == 'newBankMoney'){
        return url + '/vue/bank/transfer/add.html'
    }
    //银行业务提交
    if(name == 'newBankMoneySave'){
        return url + '/vue/bank/transfer/submit.html'
    }
    //查看银行业务
    if(name == 'seeBankMoney'){
        return url + '/vue/bank/transfer/item.html'
    }
    //银行业务审批列表
    if(name == 'approvalBankList'){
        return url + '/vue/bank/transfer/audit/list.html'
    }
    //银行业务审批同意
    if(name == 'approvalBankAgree'){
        return url + '/vue/bank/transfer/agree.html'
    }
    //银行业务审批驳回
    if(name == 'approvalBankRefuse'){
        return url + '/vue/bank/transfer/refuse.html'
    }

    //工资表获取参数
    if(name == 'payroll'){
        return url + '/vue/salary/list/show.html'
    }
    //工资表列表
    if(name == 'payrollList'){
        return url + '/vue/salary/get/list.html'
    }
    //工资表删除员工
    if(name == 'payrollDelete'){
        return url + '/vue/salary/delete/employee.html'
    }
    //工资表批量删除员工
    if(name == 'batchDelete'){
        return url + '/vue/salary/delete/temp/employee/batch.html'
    }
    //修改工资发放时间
    if(name == 'provideTime'){
        return url + '/vue/salary/update/provideTime.html'
    }
    //工资计提
    if(name == 'Calculation'){
        return url + '/vue/salary/accrued/manuaOperation.html'
    }
    //工资发放
    if(name == 'grant'){
        return url + '/vue/salary/provide/manuaOperation.html'
    }
    //工资表导出
    if(name == 'derive'){
        return url + '/vue/salary/download/list.html'
    }
    //工资-导入工资单xls
    if(name == 'upload'){
        return url + '/vue/salary/upload/items.html'
    }
    //工资-下载工资单xls模板
    if(name == 'download'){
        return url + '/vue/salary/download/excel/template.html'
    }
    //新增临时员工
    if(name == 'addPayroll'){
        return url + '/vue/salary/add.html'
    }
    //查看工资详情
    if(name == 'seePayroll'){
        return url + '/vue/salary/item.html'
    }
    //工资基数获取五险一金
    if(name == 'wageBase'){
        return url + '/vue/salary/ax/dw.html'
    }
    //修改个人工资信息
    if(name == 'update'){
        return url + '/vue/salary/update.html'
    }
    //工资-查看工资补录页面获取参数
    if(name == 'record'){
        return url + '/vue/salary/init/additional/recording.html'
    }
    //工资-工资补录计提
    if(name == 'calculation'){
        return url + '/vue/salary/init/counting/drawing.html'
    }
    //工资-工资补录发放
    if(name == 'provide'){
        return url + '/vue/salary/init/entering/provide.html'
    }
    //个人信息查看
    if(name == 'personal'){
        return url + '/vue/user/user/info.html'
    }
    //个人信息更新
    if(name == 'personalSubmit'){
        return url + '/vue/user/user/info/submit.html'
    }
    //账套管理首页
    if(name == 'AccountManagement'){
        return url + '/vue/user/book/main.html'
    }
    //账套查看
    if(name == 'seeAccountManagement'){
        return url + '/vue/user/book/item.html'
    }
    //获取省市区
    if(name == 'getArea'){
        return url + '/vue/user/area/get.html'
    }
    //保存新建账套信息
    if(name == 'AccountManagementAdd'){
        return url + '/vue/user/book/add.html'
    }
    //保存新建账套信息
    if(name == 'AccountManagementSave'){
        return url + '/vue/user/book/save.html'
    }
    //保存新建账套信息
    if(name == 'AccountManagementUpdate'){
        return url + '/vue/user/book/update.html'
    }
    //加入张涛
    if(name == 'join'){
        return url + '/vue/user/book/join.html'
    }
    //更换邀请码
    if(name == 'changeInviteCode'){
        return url + '/vue/user/book/change/invite/code.html'
    }
    //首页登录接口
    if(name == 'login'){
        return url + '/vue/user/get/info/all.html'
    }
    //跳转到初始化页面
    if(name == 'initialize'){
        return url + '/agent/init/index.html'
    }
    //切换账套
    if(name == 'change'){
        return url + '/vue/user/book/change.html'
    }
    //安全退出
    if(name == 'logout'){
        return url + '/logout.html'
    }
    //修改密码
    if(name == 'password'){
        return url + '/update/password/show.html'
    }
    //资产负债表获取参数
    if(name == 'ZCFZReport'){
        return url + '/vue/report/balanceSheet/show/list.html'
    }
    //资产负债表列表接口
    if(name == 'ZCFZReportList'){
        return url + '/vue/report/balanceSheet/get/list.html'
    }
    //资产负债表导出Excel
    if(name == 'ZCFZReportExcel'){
        return url + '/vue/report/balanceSheet/download/list.html'
    }
    //资产负债表导出PDF
    if(name == 'ZCFZReportPDF'){
        return url + '/vue/report/balanceSheet/print/list.html'
    }

    //利润表获取参数
    if(name == 'LRBeport'){
        return url + '/vue/report/incomeStatement/show/list.html'
    }
    //利润表列表接口
    if(name == 'LRBeportList'){
        return url + '/vue/report/incomeStatement/get/list.html'
    }
    //利润表导出Excel
    if(name == 'LRBeportExcel'){
        return url + '/vue/report/incomeStatement/download/list.html'
    }
    //利润表导出PDF
    if(name == 'LRBeportPDF'){
        return url + '/vue/report/incomeStatement/print/list.html'
    }

    //现金流量表获取参数
    if(name == 'XJLLeport'){
        return url + '/vue/report/cashFlowStatements/show/list.html'
    }
    //现金流量表列表接口
    if(name == 'XJLLeportList'){
        return url + '/vue/report/cashFlowStatements/get/list.html'
    }
    //现金流量表导出Excel
    if(name == 'XJLLeportExcel'){
        return url + '/vue/report/cashFlowStatements/download/list.html'
    }
    //现金流量表导出PDF
    if(name == 'XJLLeportPDF'){
        return url + '/vue/report/cashFlowStatements/print/list.html'
    }

    //缴税单获取参数
    if(name == 'Taxation'){
        return url + '/vue/taxpay/get/initial/data.html'
    }
    //查看缴税单列表
    if(name == 'TaxationList'){
        return url + '/vue/taxpay/get/list.html'
    }
    //查看缴税单列表
    if(name == 'history'){
        return url + '/vue/taxpay/view/history.html'
    }
    //缴税-操作确认（计提-免征-结转-缴纳）
    if(name == 'operation'){
        return url + '/vue/taxpay/handleAP.html'
    }
    //账务处理查看初始化数据
    if(name == 'Initialization'){
        return url + '/vue/subjectInitialize/initialize.html'
    }
    //查看凭证列表
    if(name == 'voucherList'){
        return url + '/vue/account/certificate/get/list.html'
    }
    //凭证导出Excel
    if(name == 'voucherExcel'){
        return url + '/vue/account/certificate/download/list.html'
    }
    //凭证导出PDF
    if(name == 'voucherPDF'){
        return url + '/vue/account/certificate/print/list.html'
    }
    //月结
    if(name == 'monthlyKnot'){
        return url + '/vue/carrydown/submit.html'
    }
    //年结
    if(name == 'annualKnots'){
        return url + '/vue/carrydown/year/end/submit.html'
    }
    //总账
    if(name == 'generalLedger'){
        return url + '/vue/report/general/ledger/get/list.html'
    }
    //获取科目tree
    if(name == 'tree'){
        return url + '/vue/report/getSubType.html'
    }
    //获取会计科目
    if(name == 'subjectList'){
        return url + '/vue/report/get/subject/list.html'
    }
    //导出总分类账xls
    if(name == 'generalLedgerExcel'){
        return url + '/vue/report/general/ledger/download/list.html'
    }
    //获取明细账
    if(name == 'detailAccount'){
        return url + '/vue/report/detail/account/get/list.html'
    }
    //导出明细账账xls
    if(name == 'detailAccountExcel'){
        return url + '/vue/report/detail/account/download/list.html'
    }
    //获取科目余额
    if(name == 'subjectBalance'){
        return url + '/vue/report/subject/remainder/get/list.html'
    }
    //导出科目余额xls
    if(name == 'subjectBalanceExcel'){
        return url + '/vue/report/subject/remainder/download/list.html'
    }
    //获取现金日记账
    if(name == 'cashDayAccount'){
        return url + '/vue/report/cash/journal/get/list.html'
    }
    //导出现金日记账xls
    if(name == 'cashDayAccountExcel'){
        return url + '/vue/report/cash/journal/download/list.html'
    }
    //获取银行日记账
    if(name == 'bankJournal'){
        return url + '/vue/report/bank/deposit/journal/get/list.html'
    }
    //导出银行日记账xls
    if(name == 'bankJournalExcel'){
        return url + '/vue/report/bank/deposit/journal/download/list.html'
    }
    //获取辅助科目余额
    if(name == 'auxiliarySubjectBalance'){
        return url + '/vue/report/assistant/subject/remainder/get/list.html'
    }
    //导出辅助科目余额xls
    if(name == 'auxiliarySubjectBalanceExcel'){
        return url + '/vue/report/assistant/subject/remainder/download/list.html'
    }
    //红冲-查看还款单列表
    if(name == 'repaymentRedFlush'){
        return url + '/vue/hedging/credit/list.html'
    }
    //红冲-查看借款单列表
    if(name == 'loanRedFlush'){
        return url + '/vue/hedging/debit/list.html'
    }
    //红冲-查看报销单列表
    if(name == 'ReimbursementRedFlush'){
        return url + '/vue/hedging/application/list.html'
    }
    //红冲-查看采购单列表
    if(name == 'purchaseRedFlush'){
        return url + '/vue/hedging/purchase/list.html'
    }
    //红冲-查看采购付款单列表
    if(name == 'purchasePaymentRedFlush'){
        return url + '/vue/hedging/purchase/send/list.html'
    }
    //红冲-查看销售单列表
    if(name == 'saleRedFlush'){
        return url + '/vue/hedging/sale/list.html'
    }
    //红冲-查看销售收款单列表
    if(name == 'salePaymentRedFlush'){
        return url + '/vue/hedging/sale/receive/list.html'
    }
    //红冲-收容业务列表
    if(name == 'businessRedFlush'){
        return url + '/vue/accept/business/list.html'
    }
    //红冲-代记账业务-票据列表
    if(name == 'invoiceRedFlush'){
        return url + '/vue/invoice/list.html'
    }


    //红冲-红冲还款单
    if(name == 'repaymentRedFlushSubmit'){
        return url + '/vue/hedging/credit.html'
    }
    //红冲-红冲借款单
    if(name == 'loanRedFlushSubmit'){
        return url + '/vue/hedging/debit.html'
    }
    //红冲-红冲报销单
    if(name == 'reimbursementRedFlushSubmit'){
        return url + '/vue/hedging/application.html'
    }
    //红冲-红冲采购单
    if(name == 'purchaseRedFlushSubmit'){
        return url + '/vue/hedging/purchase.html'
    }
    //红冲-红冲采购付款单
    if(name == 'purchasePaymentRedFlushSubmit'){
        return url + '/vue/hedging/purchase/send.html'
    }
    //红冲-红冲销售单
    if(name == 'saleRedFlushSubmit'){
        return url + '/vue/hedging/sale.html'
    }
    //红冲-红冲销售收款单
    if(name == 'salePaymentRedFlushSubmit'){
        return url + '/vue/hedging/sale/receive.html'
    }
    //红冲-红冲收容业务
    if(name == 'businessRedFlushSubmit'){
        return url + '/vue/accept/business/hedging.html'
    }
    //红冲-红冲票据流水
    if(name == 'invoiceRedFlushSubmit'){
        return url + '/vue/invoice/hedging.html'
    }

    //交易方列表
    if(name == 'SupplierList'){
        return url + '/vue/tradeCompany/list.html'
    }
    //交易方删除
    if(name == 'SupplierDelete'){
        return url + '/vue/tradeCompany/delete.html'
    }
    //交易方删除
    if(name == 'seeSupplier'){
        return url + '/vue/tradeCompany/detail.html'
    }
    //交易方保存
    if(name == 'saveSupplier'){
        return url + '/vue/tradeCompany/save.html'
    }
    //修改密码保存
    if(name == 'changePassword'){
        return url + '/vue/user/update/password/submit.html'
    }
    //登录页面跳转
    if(name == 'toLogin'){
        return url + '/login.html'
    }
    //员工列表
    if(name == 'staffList'){
        return url + '/vue/manage/book/users.html'
    }
    //删除员工
    if(name == 'staffDelete'){
        return url + '/vue/manage/book/user/delete.html'
    }
    //员工权限详情
    if(name == 'seeStaff'){
        return url + '/vue/manage/book/user/item.html'
    }
    //员工修改权限
    if(name == 'changeStaff'){
        return url + '/vue/manage/book/user/edit.html'
    }
    //部门列表
    if(name == 'departmentList'){
        return url + '/vue/manage/book/department/list.html'
    }
    //删除部门
    if(name == 'departmentDelete'){
        return url + '/vue/manage/book/department/delete.html'
    }
    //修改部门
    if(name == 'departmentChange'){
        return url + '/vue/manage/book/department/edit.html'
    }
    //查看部门
    if(name == 'seeDepartment'){
        return url + '/vue/manage/book/department/item.html'
    }
    //库存商品列表
    if(name == 'stockList'){
        return url + '/vue/sale/goods/list.html'
    }
    //辅助业务列表
    if(name == 'auxiliaryList'){
        return url + '/vue/auxiliary/list.html'
    }
    //获取新建辅助科目参数
    if(name == 'auxiliaryShow'){
        return url + '/vue/auxiliary/add/show.html'
    }
    //提交辅助科目业务
    if(name == 'auxiliarySubmit'){
        return url + '/vue/auxiliary/submit.html'
    }
    //获取辅助科目业务详情
    if(name == 'seeAuxiliary'){
        return url + '/vue/auxiliary/item.html'
    }
    //可关联采购单列表
    if(name == 'linkedPurchase'){
        return url + '/vue/auxiliary/purchase/list.html'
    }
    //可关联销售单列表
    if(name == 'linkedSale'){
        return url + '/vue/auxiliary/sale/list.html'
    }
    //辅助业务待审核列表
    if(name == 'approvalAuxiliaryList'){
        return url + '/vue/auxiliary/audit/list.html'
    }
    //辅助业务审核同意
    if(name == 'approvalAuxiliaryAgree'){
        return url + '/vue/auxiliary/audit/agree.html'
    }
    //辅助业务审核驳回
    if(name == 'approvalAuxiliaryRefuse'){
        return url + '/vue/auxiliary/audit/refuse.html'
    }
    //获取新建收付款参数
    if(name == 'payments'){
        return url + '/vue/auxiliary/payment/add/show.html'
    }
    //获取新建收付款参数
    if(name == 'paymentsSubmit'){
        return url + '/vue/auxiliary/payment/submit.html'
    }
    //收付款待审核列表
    if(name == 'approvalPaymentsList'){
        return url + '/vue/auxiliary/payment/audit/list.html'
    }
    //获取收付款详情
    if(name == 'approvalPayments'){
        return url + '/vue/auxiliary/payment/item.html'
    }
    //同意收付款
    if(name == 'approvalPaymentsAgree'){
        return url + '/vue/auxiliary/payment/audit/agree.html'
    }
    //驳回收付款
    if(name == 'approvalPaymentsRefuse'){
        return url + '/vue/auxiliary/payment/audit/refuse.html'
    }
    //账套管理-更改账套的菜单配置
    if(name == 'changeMenu'){
        return url + '/vue/user/book/update/menu.html'
    }
    //消息-消息列表
    if(name == 'newsList'){
        return url + '/vue/notice/list.html'
    }
    //消息-读取消息
    if(name == 'newsListRead'){
        return url + '/vue/notice/read.html'
    }
    //资讯-资讯列表
    if(name == 'toolList'){
        return url + '/vue/news/list.html'
    }
    //自主研发辅助账
    if(name == 'develop'){
        return url + '/support/account/show/one.html'
    }
    //辅助账汇总表
    if(name == 'summary'){
        return url + '/support/account/show/two.html'
    }
    //费用情况归集表
    if(name == 'costCollection'){
        return url + '/support/account/show/three.html'
    }
    //委托研发辅助账
    if(name == 'Entrust'){
        return url + '/support/account/show/four.html'
    }
    //收容业务列表
    if(name == 'collectionList'){
        return url + '/vue/accept/business/list.html'
    }
    //收容业务详情
    if(name == 'collection'){
        return url + '/vue/accept/business/item.html'
    }
    //收容业务配置
    if(name == 'collectionSetting'){
        return url + '/vue/accept/business/setting/item.html'
    }
    //收容业务保存
    if(name == 'collectionSave'){
        return url + '/vue/accept/business/save.html'
    }
    //收容业务提交
    if(name == 'collectionSubmit'){
        return url + '/vue/accept/business/submit.html'
    }
    //代记账-添加老板
    if(name == 'addBoss'){
        return url + '/agent/manager/boss/add.html'
    }
    //代记账-发票抵扣
    if(name == 'invoiceDeduction'){
        return url + '/agent/bill/list/show.html'
    }
    //代记账-录单
    if(name == 'recordSheet'){
        return url + '/invoice/entry/list/show.html'
    }
    //代记账-记账
    if(name == 'bookkeeping'){
        return url + '/invoice/all/list/show.html'
    }
    //代记账-工资单
    if(name == 'payrollAccountBookkeeping'){
        return url + '/djz/salary/salary/show/list.html'
    }
    //杜邦分析
    if(name == 'DuPont'){
        return url + '/vue/financial/analysis/du/pont/analysis.html'
    }
    //凭证-获取科目余额
    if(name == 'balance'){
        return url + '/vue/account/certificate/subject/amount.html'
    }
    //凭证-保存凭证
    if(name == 'certificateSave'){
        return url + '/vue/account/certificate/save.html'
    }

    //发票业务-专票列表
    if(name == 'invoiceList'){
        return url + '/vue/bill/list.html'
    }
    //发票业务-专票删除
    if(name == 'invoiceDelete'){
        return url + '/vue/bill/delete.html'
    }
    //发票业务-专票详情
    if(name == 'newInvoice'){
        return url + '/vue/bill/item.html'
    }
    //发票业务-专票保存
    if(name == 'invoiceSave'){
        return url + '/vue/bill/save.html'
    }
    //发票业务-专票抵扣
    if(name == 'invoiceReduce'){
        return url + '/vue/bill/reduce.html'
    }
    //借款-查询我的借款列表
    if(name == 'viewingLoanList'){
        return url + '/vue/business/check/borrowing.html'
    }
    //查询我的销售单列表
    if(name == 'viewingSaleList'){
        return url + '/vue/business/check/sale.html'
    }
    //查询我的采购单列表
    if(name == 'viewingPurchaseList'){
        return url + '/vue/business/check/purchase.html'
    }
    //查询我的报销单列表
    if(name == 'viewingReimbursementList'){
        return url + '/vue/business/check/application.html'
    }
}
export default{
    addUrl
}
