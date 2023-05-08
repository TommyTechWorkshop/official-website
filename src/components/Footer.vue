<template>
  <div id="footer" class="container-fluid">
    <!-- <div class="logo">
      <img src="@/assets/img/zs_black.svg" alt="logo图">
    </div> -->
    <!-- <p class="title">武汉市汤米科技工作室</p> -->
    <p class="address_tel_fax">
      <span>地址：湖北省武汉市汉阳区晴川大道复地海上海C地块4栋35楼</span>
      <!-- <span>Tel：888-888-888</span> -->
      <!-- <span>Fax：8888-88888888</span> -->
    </p>
    <p class="email_wx">
      <span>邮箱：zhushuang@tommytech.online</span>
      <span>微信：memorycancel-tommy</span>
    </p>
    <p class="copy">Copyright &copy; 2023 - 2023 武汉市汤米科技工作室 鄂ICP备2023005873号-1</p>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>
<style scoped>
#footer {
  width: 100%;
  height: 100%;
  color: #fff;
  background: #474747;
  overflow: hidden;
  text-align: center;
}
.logo {
  width: 95px;
  height: 45px;
  margin: 50px auto 20px;
}
.title {
  font-size: 25px;
  margin-bottom: 20px;
}
.address_tel_fax {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
}
.email_wx {
  color: #d3d3d3;
  font-size: 14px;
}
.copy {
  color: #d3d3d3;
  font-size: 14px;
  margin: 50px 0 10px;
}
@media screen and (max-width: 997px) {
  .title {
    font-size: 20px;
  }
  .address_tel_fax {
    font-size: 12px;
  }
  .email_wx {

  font-size: 12px;
}
.copy {
  font-size: 12px;
  margin: 30px 0 10px;
}
}
</style>

