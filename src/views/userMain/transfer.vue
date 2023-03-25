<template>
  <div>
    <el-card>
      <h1>转账</h1>
      <el-form :model="changemoneyData">
        <el-form-item prop="idcard">
          <el-input
            v-model="changemoneyData.idcard"
            placeholder="请输入身份信息"
          >
            <template #prefix>
              <el-icon><CreditCard /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="number">
          <el-input
            v-model="changemoneyData.number"
            placeholder="请输入银行卡信息"
          >
            <template #prefix>
              <el-icon><CreditCard /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="money">
          <el-input
            v-model="changemoneyData.money"
            placeholder="请输入汇款金额"
          >
            <template #prefix>
              <el-icon><Money /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="newnumber">
          <el-input
            v-model="changemoneyData.newnumber"
            placeholder="请输入转账目标账户"
          >
            <template #prefix>
              <el-icon><CreditCard /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn" @click="handlegiveAccount"
            >转账</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
  import { reactive } from "vue";
  import { giveMoney } from "@/service/managerOperate";

  const changemoneyData = reactive({
    idcard: "",
    number: "",
    money: "",
    newnumber: "",
  });
  const handlegiveAccount = () => {
    giveMoney({ ...changemoneyData })
      .then((res) => {
        if (res.data.code == 200) {
          ElMessage({
            message: "转账成功",
            type: "success",
          });
          changemoneyData.idcard = "";
          changemoneyData.number = "";
          changemoneyData.money = "";
          changemoneyData.newnumber = "";
        } else {
          ElMessage({
            message: "转账失败",
            type: "error",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
</script>

<style lang="less" scoped>
  .el-card {
    h1 {
      font-size: 20px;
      margin: 20px 0;
      color: #dd001b;
    }
    .btn {
      width: 100%;
      font-size: 20px;
    }
  }
</style>
