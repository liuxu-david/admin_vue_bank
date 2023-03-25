<template>
  <div class="reg-form">
    <el-form
      ref="regForm"
      :model="regFormData"
      style="max-width: 400px"
      :rules="rules"
      status-icon
    >
      <el-form-item prop="account">
        <el-input v-model="regFormData.account" placeholder="请输入账户">
          <template #prefix>
            <el-icon class="el-input__icon"><User /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="uname">
        <el-input v-model="regFormData.uname" placeholder="请输入昵称">
          <template #prefix>
            <el-icon class="el-input__icon"><User /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="idcard">
        <el-input v-model="regFormData.idcard" placeholder="请输入身份证号">
          <template #prefix>
            <el-icon class="el-input__icon"><User /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="regFormData.password"
          placeholder="请确认密码"
          type="password"
        >
          <template #prefix>
            <el-icon class="el-input__icon"><Lock /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="yue">
        <el-input v-model="regFormData.yue" placeholder="请输入存储金额">
          <template #prefix>
            <el-icon class="el-input__icon"><Coin /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item class="check-line">
        <div class="check-item">
          <el-checkbox label="《用户协议》" />
        </div>
        <a href=""></a>
      </el-form-item>
      <el-form-item>
        <el-button type="danger" @click="handleSubmitClick">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { getOpenAccount } from "@/service/managerOperate";

  const regForm = ref(null);
  const regFormData = ref({
    account: "",
    uname: "",
    idcard: "",
    password: "",
    yue: "",
  });
  const router = useRouter();

  // 表单提交事件
  const handleSubmitClick = () => {
    regForm.value.validate((valid) => {
      if (!valid) return;
      getOpenAccount({ ...regFormData.value }).then((res) => {
        if (res.data.code == 200) {
          ElMessage({
            message: "注册成功",
            type: "success",
          });
          router.push("/login");
        } else {
          ElMessage({
            message: "注册失败",
            type: "error",
          });
        }
      });
    });
  };
</script>

<style lang="less" scoped>
  .reg-form {
    .el-input {
      height: 35px;
    }
    .el-button {
      width: 100%;
      height: 35px;
    }
    .el-checkbox {
      color: #fff;
    }
    .check-line {
      height: 30px;
      width: 100%;
      .register {
        color: #ffffff;
        cursor: pointer;
      }
    }
    .el-input__icon {
      font-size: 18px;
      color: #000;
    }
  }
</style>
