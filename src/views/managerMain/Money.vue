<template>
  <div class="money">
    <el-card>
      <h1>查询余额</h1>
      <el-form :model="moneyData">
        <el-form-item prop="idcard">
          <el-input v-model="moneyData.idcard" placeholder="请输入身份信息">
            <template #prefix>
              <el-icon><CreditCard /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="number">
          <el-input v-model="moneyData.number" placeholder="请输入银行卡信息">
            <template #prefix>
              <el-icon><CreditCard /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn" @click="handlegetAccount"
            >查询余额</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
    <el-card v-if="isShow" class="message">
      <h1>账户余额</h1>
      <div class="yue">￥{{ yue }}</div>
    </el-card>
    <el-card>
      <h1>取款</h1>
      <el-form :model="getmoneyData">
        <el-form-item prop="idcard">
          <el-input v-model="getmoneyData.idcard" placeholder="请输入身份信息">
            <template #prefix>
              <el-icon><CreditCard /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="number">
          <el-input
            v-model="getmoneyData.number"
            placeholder="请输入银行卡信息"
          >
            <template #prefix>
              <el-icon><CreditCard /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="money">
          <el-input v-model="getmoneyData.money" placeholder="请输入取款金额">
            <template #prefix>
              <el-icon><Money /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn" @click="handlemoveAccount"
            >取款</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
    <el-card>
      <h1>汇款</h1>
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
            placeholder="请输入汇款目标账户"
          >
            <template #prefix>
              <el-icon><CreditCard /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn" @click="handlegiveAccount"
            >汇款</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
  import { reactive, ref } from "vue";
  import { getMoney, removeMoney, giveMoney } from "@/service/managerOperate";

  const moneyData = reactive({
    idcard: "",
    number: "",
  });
  const getmoneyData = reactive({
    idcard: "",
    number: "",
    money: "",
  });
  const changemoneyData = reactive({
    idcard: "",
    number: "",
    money: "",
    newnumber: "",
  });
  const isShow = ref(false);
  const yue = ref(0);

  function getMoneyOperate(idcard, number) {
    console.log(idcard, number);
    getMoney(idcard, number)
      .then((res) => {
        if (res.data.code == 200) {
          yue.value = res.data.money;
        } else {
          ElMessage({
            message: "查询失败",
            type: "error",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handlegetAccount = () => {
    isShow.value = true;
    getMoneyOperate({ ...moneyData });
    moneyData.idcard = "";
    moneyData.number = "";
  };
  const handlemoveAccount = () => {
    isShow.value = true;
    removeMoney({ ...getmoneyData })
      .then((res) => {
        if (res.data.code == 200) {
          yue.value = res.data.money;
          ElMessage({
            message: "取款成功",
            type: "success",
          });
          getMoneyOperate({ ...getmoneyData });
          getmoneyData.idcard = "";
          getmoneyData.number = "";
          getmoneyData.money = "";
        } else {
          ElMessage({
            message: "取款失败",
            type: "error",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handlegiveAccount = () => {
    isShow.value = true;
    giveMoney({ ...changemoneyData })
      .then((res) => {
        if (res.data.code == 200) {
          yue.value = res.data.money;
          ElMessage({
            message: "转账成功",
            type: "success",
          });
          getMoneyOperate({ ...changemoneyData });
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
    margin: 10px 0;
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
  .money {
    .message {
      .yue {
        font-size: 30px;
        color: #dd001b;
      }
    }
  }
</style>
