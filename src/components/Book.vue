<template>
<div>
  <div class="uk-article"> 
    <h3 class="uk-article-title">{{ book.title }}</h3> 
    <p class="uk-article-meta">{{ book.house }} - {{book.source}}</p> 
    <br>
  </div>
  <div>
    <form>
      <input type="radio" name="choice" id="paragraph" checked="checked" v-on:mousedown="chooseDisplay('para')">
      <label>In Paragraph</label>
      <input type="radio" name="choice" id="list" v-on:mousedown="chooseDisplay('list')">
      <label>In List (default: 3 items)</label>
    </form>
    <div><span>OR</span></div>
    <label>Word Count (1 to 411)</label>
    <input type="text" id="word" v-model="countVal">
    <input class="uk-button uk-button-default uk-button-small" type="button" name="choiceCount" value="y"id="count" v-on:mousedown="chooseDisplay('count')">
  </div>
  <div>
    <textarea rows="10" cols="80" id="content" >{{ displaying }}</textarea>
    <br>
    <button class="uk-button uk-button-primary" v-on:mousedown="copyContent()">Copy</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'Book',
  data () {
    return {
      book: {
        title: '九阴真经',
        house: 'unknown',
        source: '射雕英雄传',
        content: '天之道，损有余而补不足，是故虚胜实，不足胜有余。其意博，其理奥，其趣深，天地之象分，阴阳之候列，变化之由表，死生之兆彰，不谋而遗迹自同，勿约而幽明斯契，稽其言有微，验之事不忒，诚可谓至道之宗，奉生之始矣。假若天机迅发，妙识玄通，成谋虽属乎生知，标格亦资于治训，未尝有行不由送，出不由产者亦。然刻意研精，探微索隐，或识契真要，则目牛无全，故动则有成，犹鬼神幽赞，而命世奇杰，时时间出焉。 五藏六府之精气，皆上注于目而为之精。精之案为眼，骨之精为瞳子，筋之精为黑眼，血之精力络，其案气之精为白眼，肌肉之精为约束，裹撷筋骨血气之精而与脉并为系，上属于脑，后出于项中。故邪中于项，因逢其身之虚，其人深，则随眼系以入于脑，入手腼则脑转，脑转则引目系急，目系急则目眩以转矣。邪其精，其精所中不相比亦则精散，精散则视岐，视岐见两物。 阴极在六，何以言九。太极生两仪，天地初刨判。六阴已极，逢七归元太素，太素西方金德，阴之清纯，寒之渊源。'
      },
      countVal: 0,
      listCount: 3,
      displaying: ''
    }
  },
  created: function () {
    this.displaying = this.book.content
  },
  methods: {
    copyContent: function () {
      var content = document.querySelector('#content')
      content.select()
      var successful = document.execCommand('copy')
      var message = successful ? 'success' : 'failed'
      console.log('copy text is ' + message)
      console.log(successful)
    },
    chooseDisplay: function (displayStyle) {
      if (displayStyle === 'list') {
        var tmp = ''
        for (var i = 0; i < this.listCount - 1; i++) {
          tmp = tmp.concat(tmp, '<li>' + this.book.content.split('。')[i] + '</li>')
        }
        this.displaying = tmp
      } else if (displayStyle === 'count') {
        console.log(this.countVal)
        if (this.countVal < 0 || this.countVal > 411) {
          this.displaying = this.book.content
        } else {
          this.displaying = this.book.content.substring(0, this.countVal)
        }
      } else {
        this.displaying = this.book.content
        console.log(this.displaying.length)
      }
    }
  }
}
</script>

<style></style>
