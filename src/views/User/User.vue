<template>
  <div class="mine mine-style">
    <!-- 侧边栏 -->
    <div class="nav">
      <van-icon name="wap-nav" />
    </div>
    <!-- 用户信息 -->
    <div class="user">
      <div class="userinfo">
        <div class="img">
          <van-image
            round
            width="40px"
            height="40px"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
        </div>
        <div class="right">
          <p>Mr.Json</p>
          <div class="tab">
            <van-tag class="tab-1" color="#919191" :round="true"
              ><i>Vip续费</i></van-tag
            >
            <van-tag
              class="tab-2"
              color="#fff"
              text-color="#525252"
              :round="true"
              ><i>Lv.18</i></van-tag
            >
          </div>
        </div>
      </div>
      <div class="arrow">
        <van-icon name="arrow" />
      </div>
    </div>
    <!-- 小图标们 -->
    <div class="guide">
      <div>
        <van-grid square :border="false">
          <van-grid-item icon="music" text="本地下载" />
          <van-grid-item icon="invition" text="云盘" />
          <van-grid-item icon="gift-card" text="已购" />
          <van-grid-item icon="play-circle" text="音乐播放" />
          <van-grid-item icon="friends" text="我的好友" />
          <van-grid-item icon="like" text="收藏和赞" />
          <van-grid-item icon="smile" text="我的博客" />
          <van-grid-item icon="add" text="音乐应用" />
        </van-grid>
      </div>
    </div>
    <!-- 我喜欢的 -->
    <div class="ilike">
      <div class="ilike-left">
        <div>
          <van-image
            width="65px"
            height="65px"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
        </div>
        <div class="left-text">
          <h6>我喜欢的音乐</h6>
          <van-icon name="passed" /><span>108首，已下载81首</span>
        </div>
      </div>
      <div class="ilike-right">心动模式</div>
    </div>
    <!-- 标签导航 -->
    <div class="tabnav">
      <van-tabs
        v-model="activeName"
        scrollspy
        sticky
        background="none"
        line-width="60px"
      >
        <van-tab title="创建歌单" name="a">
          <div class="createlist">
            <div class="title">
              <p>创建歌单（2个）</p>
              <div class="icons">
                <van-icon name="plus" />
                <van-icon name="more-o" />
              </div>
            </div>
            <div class="card">
              <div>
                <van-card
                  desc="27首"
                  title="运动歌单"
                  thumb="https://img01.yzcdn.cn/vant/cat.jpeg"
                >
                </van-card>
              </div>
              <van-icon name="more-o" />
            </div>
          </div>
        </van-tab>
        <van-tab class="collect" title="收藏歌单" name="b">
          <div class="createlist">
            <div class="collect-title">
              <p>创建歌单</p>
              <van-icon name="more-o" />
            </div>
            <div class="collectcontent">
              <p>暂无收藏的歌单</p>
            </div>
          </div>
        </van-tab>
        <van-tab title="歌单助手" name="c">
          <div class="createlist helper">
            <div class="collect-title">
              <p>歌单助手</p>
            </div>
            <div class="collectcontent helper-content">
              <p>你可以从歌单中筛选</p>
            </div>
            <div class="texts">
              <p>最近一年收藏的古风歌曲</p>
              <p>陪你一起运动的50首摇滚</p>
              <p>适合夜晚听的民谣</p>
              <p>很久未听的华语男声精选</p>
              <div>
                <van-button round color="#ff2639" size="small"
                  >试试看</van-button
                >
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <!-- 为你推荐 -->
    <div class="recommend">
      <p>为你推荐</p>
      <div>
        <div style="width: 100px" height="100px">
          <img
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
            alt=""
            width="100"
            height="100"
          />
        </div>
        <p>飙升榜</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "a",
      content: [
        { text: "最近一年收藏的古风歌曲" },
        { text: "最近一年收藏的古风歌曲" },
        { text: "最近一年收藏的古风歌曲" },
      ],
    };
  },
  methods: {
    onClickIcon() {},
  },
  components: {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
/* html {
  font-size: 100px;
} */
.mine-style.mine {
  background: #f6f6f6;
  padding-bottom: 40px;
}
.mine-style .nav {
  padding-top: 15px;
  padding-left: 15px;
}

/* user */
.mine-style .user {
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding-left: 30px; */
}
.mine-style .userinfo {
  width: 50%;
  margin-left: 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mine-style .img {
  width: 40px;
  height: 40px;
  border: solid #ccc 1px;
  border-radius: 50px;
}
.mine-style .right p {
  line-height: 35px;
}
.mine-style .tab {
  width: 90px;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
}
.mine-style .tab-1 {
  width: 45px;
  text-align: center;
}
.mine-style .van-grid {
  margin: 0 auto;
  width: 330px;
  margin-top: 15px;
}
.mine-style .van-grid-item__content {
  color: #ff3a47;
  /* font-size: 40px; */
}
.mine-style .van-grid-item__content .van-grid-item__icon {
  font-size: 38px;
}

/* ilike */
.mine-style .van-sticky {
  background: #fff;
}
.mine-style .ilike {
  margin: 0 auto;
  width: 320px;
  min-height: 100px;
  margin-top: 15px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  padding: 0px 10px;
}
.mine-style .ilike-left {
  width: 80%;
  display: flex;
  justify-content: left;
  align-items: center;
}
.mine-style .left-text {
  margin-left: 5px;
}
.mine-style .left-text h6 {
  color: #616161;
  line-height: 30px;
}
.mine-style .left-text span {
  font-size: 14px;
  color: #bababa;
}
.mine-style .left-text .van-icon-passed {
  color: #3dc1f0;
  font-size: 17px;
}
.mine-style .ilike-right {
  width: 75px;
  height: 30px;
  border: solid 1px #ccc;
  border-radius: 30px;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  font-size: 13px;
  color: #6d6d6d;
}

/* tabnav */
.mine-style .van-tabs {
  padding-top: 20px;
}
.mine-style .van-tab__pane {
  margin-top: 20px;
}
/* createlist */
.mine-style .createlist {
  margin: 0 auto;
  width: 320px;
  min-height: 150px;
  margin-top: 15px;
  background: #fff;
  /* display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left; */
  overflow: hidden;
  padding: 0px 10px;
}
.mine-style .van-card {
  background: #fff;
}
.mine-style .createlist .title p {
  font-size: 12px;
  color: #949494;
}
.mine-style .van-card__thumb img {
  width: 70px;
  height: 70px;
}
.mine-style .title {
  margin: 0 auto;
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  margin-left: 20px;
}
.mine-style .title .icons {
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
  color: #979797;
}
.mine-style .title .icons .van-icon-plus {
  font-size: 20px;
  color: #979797;
}
.mine-style .title .icons .van-icon-more-o {
  font-size: 20px;
  color: #979797;
}
.mine-style .card {
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mine-style .card .v-card {
  width: 80%;
}
.mine-style .card .van-icon-more-o {
  margin-right: 37px;
  font-size: 20px;
  color: #979797;
}
.mine-style .collect-title {
  margin: 0 auto;
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  margin-left: 20px;
  font-size: 14px;
  color: #949494;
}
.mine-style .collect-title .van-icon-more-o {
  font-size: 20px;
  color: #979797;
  margin-right: 10px;
}
.mine-style .collectcontent p {
  font-size: 14px;
  color: #949494;
  width: 85%;
  height: 100px;
  text-align: center;
  line-height: 80px;
}
.mine-style .helper {
  /* min-height: 230px; */
}
.mine-style .helper-content p {
  width: 85%;
  height: 30px;
  line-height: 20px;
}
.mine-style .createlist .texts {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
}
.mine-style .createlist .texts p {
  font-size: 13px;
  color: #6d6d6d;
  margin: 10px 0;
}
.mine-style .recommend {
  padding: 20px 20px;
}
.mine-style .recommend p {
  font-size: 14px;
  color: #616161;
  margin-bottom: 10px;
}
</style>
