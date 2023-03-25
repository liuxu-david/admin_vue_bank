<template>
  <div class="change-password">
    <el-card>
      <h1>更改用户密码</h1>
      <el-form :model="passwordData">
        <el-form-item prop="idcard">
          <el-input v-model="passwordData.idcard" placeholder="请输入身份信息">
            <template #prefix>
              <el-icon><CreditCard /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="number">
          <el-input
            v-model="passwordData.number"
            placeholder="请输入银行卡信息"
          >
            <template #prefix>
              <el-icon><CreditCard /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="newpassword">
          <el-input
            v-model="passwordData.newpassword"
            placeholder="请输入新的密码"
          >
            <template #prefix>
              <el-icon><CreditCard /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="change-btn"
            @click="handleChangeClick"
            >更改密码</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
  import { reactive } from "vue";
  import { getChangePassword } from "@/service/managerOperate";

  const passwordData = reactive({
    idcard: "",
    number: "",
    newpassword: "",
  });

  const handleChangeClick = () => {
    getChangePassword({ ...passwordData }).then((res) => {
      if (res.data.code == 200) {
        ElMessage({
          message: "密码修改成功",
          type: "success",
        });
      } else {
        ElMessage({
          message: "密码修改失败",
          type: "error",
        });
      }
    });
    passwordData.idcard = "";
    passwordData.number = "";
    passwordData.newpassword = "";
  };
</script>

<style lang="less" scoped>
  .change-password {
    h1 {
      font-size: 20px;
      margin: 20px 0;
      color: #dd001b;
    }
    .change-btn {
      width: 100%;
      font-size: 20px;
    }
  }
</style>
