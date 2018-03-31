<template>
  <div class="list-text">
    <ul>
      <li v-for="item in list" :key="item.index">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'List',
    props: ['listCount'],
    data () {
      return {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis at tellus at. Lectus sit amet est placerat. Vitae turpis massa sed elementum tempus egestas. Nisi porta lorem mollis aliquam. Enim eu turpis egestas pretium aenean pharetra. Molestie nunc non blandit massa enim. Id ornare arcu odio ut sem nulla pharetra diam sit. Accumsan tortor posuere ac ut. Sit amet purus gravida quis. Sed felis eget velit aliquet sagittis id consectetur. Vitae auctor eu augue ut lectus arcu bibendum at varius. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.'
      }
    },
    computed: {
      list: function () {
        var tmp = []
        for (var i = 0; i < this.listCount; i++) {
          tmp.push('- ' + this.content.split('.')[i] + '\n')
        }
        return tmp
      }
    },
    watch: {
      'list': function (oldVal, newVal) {
        this.$emit('updated', this.list)
        // console.log(this.$emit('updated', this.list))
        // console.log('alert' + oldVal + newVal)
      }
    }
  }
</script>
<style>
  .lines {
    text-align: left;
  }
  ul{
    list-style-type: square;
  }

</style>
