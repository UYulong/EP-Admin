<template>
  <!-- card -->
  <div class="card_wrap">
    <!-- 卡片标题 -->
    <div class="card_title">
      <p>{{ list.title }}</p>
      <p>
        <el-tag :type="calcTabStatus(list.type)">
          {{ list.type }}
        </el-tag>
      </p>
    </div>

    <!-- 详细数据 -->
    <div class="card_body">
      <div class="body_top">
        <h2>
          <count-to
            :end-val="list.visits"
            prefix="$"
          />
        </h2>
      </div>
      <div class="body_percent">
        <p>
          <span class="percent_text">日同比：</span>
          <count-to
            :end-val="list.dayPercent"
            class="percec_num"
            suffix="%"
          />
          <span class="percent-icon">
            <Arrow :trend="list.dayStatus" />
          </span>
        </p>
        <p>
          <span class="percent_text">周同比：</span>
          <count-to
            class="percec_num"
            :end-val="list.weekPercent"
            suffix="%"
          />
          <span class="percent-icon">
            <Arrow :trend="list.weekStatus" />
          </span>
        </p>
      </div>
    </div>

    <!-- 数据汇总 -->
    <div class="card_footer">
      <span>总访问量：</span>
      <span>
        <count-to :end-val="list.totalVisits" />
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup name="TrendCard">
import Arrow from 'comps/arrow-icon/index';
import CountTo from "comps/CountTo/index";
import { StatusMapModel, SummaryListModel } from 'models/dashboard';

defineProps<{ list: SummaryListModel }>();

const calcTabStatus = (status: string): string => {
  const statusMap: StatusMapModel = {
    日: "",
    周: "success",
    月: "warning",
    年: "danger",
  };
  return statusMap[status];
};
</script>

<style lang="scss" scoped>
@import "styles/mixins.scss";

.card_wrap {
  width: 100%;
  height: auto;
  background-color: #fff;
  border: 1px solid #f2f6fc;
  border-radius: 5px;

  &:hover {
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 16px 48px 16px rgba(0, 0, 0, 0.08),
      0px 12px 32px rgba(0, 0, 0, 0.12), 0px 8px 16px -8px rgba(0, 0, 0, 0.16);
  }

  .card_title {
    @include pd-style();
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f2f6fc;
  }

  .card_body {
    @include pd-style();
    border-bottom: 1px solid #f2f6fc;

    .body_top {
      h2 {
        font-weight: 400;
        padding: 20px 0;
      }
    }

    .body_percent {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      font-size: 14px;

      .percent_text {
        color: #909299;
        font-size: 14px;
      }

      .percec_num {
        font-size: 16px;
        color: #606266;
      }
    }
  }

  .card_footer {
    @include pd-style();
    font-size: 14px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
