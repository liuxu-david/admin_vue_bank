<template>
  <el-card>
    <h1>个人账户信息</h1>
    <div class="item">
      <div class="key">账户</div>
      <div class="value">{{ profileData.account }}</div>
    </div>
    <div class="item">
      <div class="key">昵称</div>
      <div class="value">{{ profileData.username }}</div>
    </div>
    <div class="item">
      <div class="key">身份证号</div>
      <div class="value">{{ profileData.idcard }}</div>
    </div>
    <div class="item">
      <div class="key">银行卡号</div>
      <div class="value">{{ profileData.number }}</div>
    </div>
    <div class="item">
      <div class="key">余额</div>
      <div class="value">{{ profileData.yue }}</div>
    </div>
  </el-card>
</template>

<script setup>
  import { ref, reactive } from "vue";
  import { getProfile } from "@/service/userOperate";

  const profileData = reactive({
    account: "1",
    username: "1",
    idcard: "1",
    number: "1",
    yue: "1",
  });

  getProfile().then((res) => {
    const { account, uname, idcard, number, yue } = res.data;
    profileData.account = account;
    profileData.username = uname;
    profileData.idcard = idcard;
    profileData.number = number;
    profileData.yue = yue;
  });
</script>

<style lang="less" scoped>
  h1 {
    font-size: 30px;
    color: black;
    margin: 15px 0 25px 0;
  }
  .item {
    width: 100%;
    display: flex;
    font-size: 20px;
    line-height: 50px;
    border: 1px solid #ccc;
    .key {
      width: 50%;
      font-weight: 700;
      border-right: 1px solid #ccc;
    }
    .value {
      flex: 1;
      color: red;
    }
  }
</style>
