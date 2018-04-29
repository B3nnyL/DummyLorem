<template>
  <div class="paragraph-text">
    <p v-for="para in paragraphCount" :key="para.index" >
      {{paragraphs[para-1]}}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Paragraph',
    props: ['paragraphCount'],
    data () {
      return {
        content: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis at tellus at. Lectus sit amet est placerat. Vitae turpis massa sed elementum tempus egestas. Nisi porta lorem mollis aliquam. Enim eu turpis egestas pretium aenean pharetra. Molestie nunc non blandit massa enim. Id ornare arcu odio ut sem nulla pharetra diam sit. Accumsan tortor posuere ac ut. Sit amet purus gravida quis. Sed felis eget velit aliquet sagittis id consectetur. Vitae auctor eu augue ut lectus arcu bibendum at varius. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.',
          'Quam vulputate dignissim suspendisse in est ante in nibh. Ultricies leo integer malesuada nunc vel. Praesent tristique magna sit amet purus gravida. Hendrerit gravida rutrum quisque non. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Pellentesque nec nam aliquam sem et tortor consequat id porta. Eget mauris pharetra et ultrices neque. Arcu ac tortor dignissim convallis aenean. Facilisi morbi tempus iaculis urna id. Gravida cum sociis natoque penatibus et magnis dis.',
          'Volutpat ac tincidunt vitae semper quis lectus. Blandit turpis cursus in hac habitasse platea. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Pellentesque nec nam aliquam sem et tortor consequat id porta. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Vitae congue mauris rhoncus aenean. Sit amet nisl suscipit adipiscing bibendum est ultricies. Eu facilisis sed odio morbi quis commodo odio aenean sed. Aliquet bibendum enim facilisis gravida neque. Nibh mauris cursus mattis molestie a iaculis at erat. Faucibus a pellentesque sit amet. Vulputate odio ut enim blandit volutpat maecenas volutpat. Luctus accumsan tortor posuere ac. Quis varius quam quisque id diam vel quam. Turpis in eu mi bibendum neque. Justo nec ultrices dui sapien eget mi proin sed libero.',
          'Cursus euismod quis viverra nibh cras pulvinar mattis. Diam vel quam elementum pulvinar etiam non. Viverra nam libero justo laoreet sit amet cursus sit. Sit amet porttitor eget dolor. Sem fringilla ut morbi tincidunt augue interdum velit. Mi eget mauris pharetra et ultrices neque ornare aenean. Non curabitur gravida arcu ac tortor dignissim convallis. Morbi tristique senectus et netus et. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Velit ut tortor pretium viverra suspendisse potenti nullam ac. Vel turpis nunc eget lorem dolor. Feugiat in ante metus dictum at tempor commodo. Suscipit tellus mauris a diam maecenas. Cursus vitae congue mauris rhoncus aenean vel elit. Fermentum et sollicitudin ac orci.',
          'Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Maecenas ultricies mi eget mauris pharetra et ultrices. Tincidunt nunc pulvinar sapien et. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum. Sit amet est placerat in egestas. Placerat duis ultricies lacus sed turpis tincidunt id. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Maecenas volutpat blandit aliquam etiam erat velit. Massa enim nec dui nunc mattis enim ut. Velit aliquet sagittis id consectetur purus ut. Iaculis eu non diam phasellus. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Lobortis elementum nibh tellus molestie nunc non blandit massa.',
          'Faucibus ornare suspendisse sed nisi lacus. Ornare suspendisse sed nisi lacus sed viverra tellus. Congue quisque egestas diam in arcu cursus euismod. Lacus sed turpis tincidunt id aliquet risus feugiat in. At consectetur lorem donec massa sapien. Feugiat scelerisque varius morbi enim nunc faucibus. Nec nam aliquam sem et tortor consequat id porta nibh. Consectetur purus ut faucibus pulvinar elementum integer. Imperdiet massa tincidunt nunc pulvinar. Sit amet cursus sit amet dictum sit amet. Imperdiet nulla malesuada pellentesque elit eget. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam. Lectus mauris ultrices eros in. Laoreet sit amet cursus sit amet. Elementum nisi quis eleifend quam adipiscing vitae proin. Tortor condimentum lacinia quis vel eros. Nulla facilisi etiam dignissim diam quis enim.',
          'Eget nunc scelerisque viverra mauris in aliquam sem. Consectetur lorem donec massa sapien faucibus et molestie ac. In vitae turpis massa sed elementum tempus. At urna condimentum mattis pellentesque id nibh. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Nunc id cursus metus aliquam eleifend. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Sit amet facilisis magna etiam tempor orci eu. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Arcu non sodales neque sodales ut etiam sit amet. In ante metus dictum at tempor commodo ullamcorper. Amet mattis vulputate enim nulla aliquet porttitor lacus. Facilisi cras fermentum odio eu. Quam id leo in vitae turpis massa sed. Diam maecenas sed enim ut sem. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Placerat orci nulla pellentesque dignissim enim sit amet venenatis. Quis blandit turpis cursus in hac habitasse. Volutpat diam ut venenatis tellus.',
          'Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Enim ut sem viverra aliquet eget sit amet tellus. Egestas dui id ornare arcu odio ut sem. Interdum velit laoreet id donec. At risus viverra adipiscing at in tellus. Ullamcorper sit amet risus nullam eget felis eget nunc. Velit euismod in pellentesque massa. Donec ultrices tincidunt arcu non sodales neque sodales. Sit amet est placerat in egestas erat imperdiet sed. Dictum non consectetur a erat nam at lectus. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Integer malesuada nunc vel risus commodo viverra.',
          'Aenean et tortor at risus viverra adipiscing. Convallis posuere morbi leo urna molestie at elementum. Lacinia at quis risus sed vulputate odio ut enim blandit. Lectus magna fringilla urna porttitor rhoncus. At tellus at urna condimentum mattis pellentesque. Ut sem viverra aliquet eget. Diam maecenas ultricies mi eget. Varius quam quisque id diam vel quam. Amet justo donec enim diam vulputate ut pharetra sit. Ac turpis egestas maecenas pharetra. Tellus elementum sagittis vitae et leo duis.',
          'Egestas sed tempus urna et pharetra. Scelerisque eleifend donec pretium vulputate sapien. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Commodo viverra maecenas accumsan lacus vel. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Vulputate eu scelerisque felis imperdiet. Ac odio tempor orci dapibus ultrices in iaculis. Lectus mauris ultrices eros in cursus. Enim blandit volutpat maecenas volutpat blandit aliquam. Porta non pulvinar neque laoreet suspendisse interdum consectetur.'
        ]
      }
    },
    computed: {
      paragraphs: function () {
        var process = []
        for (var i = 0; i < this.paragraphCount; i++) {
          process.push(this.content[i] + '\n\n')
        }
        return process
      }
    },
    watch: {
      'paragraphs': function (oldVal, newVal) {
        this.$emit('updated', this.paragraphs)
      }
    }
  }
</script>
<style>
 
</style>
