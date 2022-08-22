<template>
  <!-- 信息中心 -->
  <el-card shadow="never">
    <div class="info_wrap">
      <div class="left">
        <div class="avatar">
          <el-avatar :size="74" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        </div>

        <div class="greetings">
          <p class="greetings_text">早安，牛马！开始您的一天的工作吧！</p>
          <p class="weather">今日天气：晴天☀️，20℃ - 32℃！ </p>
        </div>
      </div>

      <div class="right">
        <p><span class="statistics_text">代办</span><span class="statistics_num">2/10</span></p>
        <p><span class="statistics_text">项目</span><span class="statistics_num">8</span></p>
        <p><span class="statistics_text">团队</span><span class="statistics_num">431</span></p>
      </div>
    </div>



  </el-card>
</template>

<script lang="ts" setup name=''>

</script>

<style lang="scss" scoped>
.info_wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    align-items: center;

    .greetings {
      margin-left: 20px;

      .greetings_text {
        font-size: 20px;
        font-weight: 700;
      }

      .weather {
        font-size: 14px;
        margin-top: 10px;
        color: #909399;
      }
    }
  }

  .right {
    display: flex;

    p {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 30px;
      cursor: pointer;

      span {
        margin-top: 10px;
      }
    }

    .statistics_text {
      font-size: 14px;
      color: #909399;
    }

    .statistics_num {
      font-size: 20px;
      font-weight: 700;
    }
  }
}
</style>