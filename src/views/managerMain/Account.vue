<template>
  <div class="acount">
    <el-card>
      <h1>操作开户</h1>
      <el-form :model="accountData">
        <el-form-item prop="account">
          <el-input v-model="accountData.account" placeholder="请输入账户名">
            <template #prefix>
              <el-icon class="el-input__icon"><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="idcard">
          <el-input v-model="accountData.idcard" placeholder="请输入身份信息">
            <template #prefix>
              <el-icon><CreditCard /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="uname">
          <el-input v-model="accountData.uname" placeholder="请输入昵称">
            <template #prefix>
              <el-icon><UserFilled /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="accountData.password"
            placeholder="请输入密码"
            type="password"
          >
            <template #prefix>
              <el-icon class="el-input__icon"><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="money">
          <el-input v-model="accountData.yue" placeholder="请输入充值金额">
            <template #prefix>
              <el-icon><Money /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="acount-btn"
            @click="handleSubmitClick"
            >开户</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
    <el-card v-if="isShow" class="message">
      <h1>新建账户信息</h1>
      <div>
        <p>
          开户卡号为：<text>{{ newAccountData.number }}</text>
        </p>
        <p>
          账户余额为：<text>{{ newAccountData.yue }}</text>
        </p>
      </div>
    </el-card>
  </div>
</template>

<script setup>
  import { ref, reactive } from "vue";
  import { getOpenAccount } from "@/service/managerOperate";

  const accountData = reactive({
    acount: "",
    idcard: "",
    uname: "",
    password: "",
    yue: "",
  });
  const newAccountData = ref({
    number: "",
    yue: "",
  });
  const isShow = ref(false);

  const handleSubmitClick = () => {
    getOpenAccount({ ...accountData }).then((res) => {
      if (res.data.code == 200) {
        ElMessage({
          message: "开户成功",
          type: "success",
        });
        isShow.value = true;
        newAccountData.value.number = res.data.number;
        newAccountData.value.yue = res.data.yue;
      } else {
        ElMessage({
          message: "开户失败",
          type: "error",
        });
      }
    });
    accountData.acount = "";
    accountData.idcard = "";
    accountData.uname = "";
    accountData.password = "";
    accountData.yue = "";
  };
</script>

<style lang="less" scoped>
  .acount {
    h1 {
      font-size: 20px;
      margin: 20px 0;
      color: #dd001b;
    }
    .acount-btn {
      width: 100%;
      font-size: 20px;
    }
    .message {
      margin-top: 20px;
      p {
        margin: 10px 0;
        text {
          font-weight: 700;
        }
      }
    }
  }
</style>
