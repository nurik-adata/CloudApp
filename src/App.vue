<template>


  <div class="content">
    <div
        class="photo"
        v-for="(picture, index) in imgs"
        :key="index"
    >
      <div
          class="image"
      >
        <a><img :src="picture.link"></a>

      </div>
      <div
          class="photo-name"
      >
        {{picture.name}}

      </div>

    </div>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      imgs: ""
    }
  },
  mounted() {
    let parser = new DOMParser();
    let imgs = [];
    let dateImg = new Date();
    dateImg = dateImg.toUTCString();
    axios.get('https://imgnursvue.blob.core.windows.net/blobvue?sp=rl&st=2021-03-06T10:04:34Z&se=2021-03-19T18:04:34Z&spr=https&sv=2020-02-10&sr=c&sig=QvoPc%2B0yO1a%2FrjRrz%2BhZhxu%2FZiDm03u9UYsWk8q1Ceo%3D&comp=list&restype=container',{
      headers: {
        'x-ms-date':dateImg,
        'x-ms-version': '2020-06-12'
      }
    }).then(function (response) {
      let arr = parser.parseFromString(response.data, 'text/xml').getElementsByTagName('Blob');
      arr.forEach(element => {
        imgs.push({
          name: element.firstChild.firstChild.data,
          link:`https://imgnursvue.blob.core.windows.net/blobvue/${element.firstChild.firstChild.data}?sp=rl&st=2021-03-06T10:04:34Z&se=2021-03-19T18:04:34Z&spr=https&sv=2020-02-10&sr=c&sig=QvoPc%2B0yO1a%2FrjRrz%2BhZhxu%2FZiDm03u9UYsWk8q1Ceo%3D`
        });
      });
    });
    this.imgs = imgs;
    console.log(imgs);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.content {
  background-color: #404040;
  width: 940px;
  margin: 0 auto;
  padding: 20px 10px;
  overflow: hidden;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

.photo {
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 300px;
  height: 298px;
  margin-top: 10px;
  margin-left: 10px;
  float: left;
  overflow: hidden;
  position: relative;
}

.photo-name {
  /*margin-top: 245px;*/
  /*padding: 0.5em;*/
  position: absolute;
  width: 100%;
  bottom: 30px;
  text-align: center;
  background-color: cyan;
  /*background-color: #666666;*/
}
</style>