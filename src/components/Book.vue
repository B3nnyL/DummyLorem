<template>
  <div class="row">
    <div id="book">
    <div class="col l6">
    <div class="card">
      <div class="card-content">
        <form>
          <p><input type="radio" name="group1" id="paragraph"  @change="chooseDisplay('para')">
          <label for="paragraph">Paragraph</label></p>
          <p><input type="radio" name="group1" id="list" value="list" @change="chooseDisplay('list')">
          <label for="list">List (default: 3 items)</label></p>
          <p><input type="radio" name="group1" id="wordCount" value="wordCount" @change="chooseDisplay('count')">
          <label for="wordCount"> Word Count (1 to 411)</label></p>
<<<<<<< HEAD
          <p><input type="text" id="word" v-model.number="count" placeholder="Input count"></p>
=======
          <div v-if="isWordCount"> 
          <p><input type="text" id="word" v-model.number="countVal" placeholder="Input word count">
          <a class="waves-effect waves-light btn" v-on:mousedown="chooseDisplay('count')">Show me more</a></p>
          </div>
          <div v-else></div>
>>>>>>> f7e3920e9e93a1b354b635fc803c0c5252254312
        </form>
      </div>
    </div>
  </div>
  <div class="col l6">
<<<<<<< HEAD
      <div class="card blue-grey">
        <div class="card-content white-text">
          <div class="card-content lines">
          <paragraph v-if="showParagraph" v-on:updated="updateClipbpard" v-bind:paragraphCount="count"></paragraph> 
          <list v-if="showList" v-on:updated="updateClipbpard" v-bind:listCount="count"></list>
          <text-fragment v-if="showFragment" v-on:updated="updateClipbpard" v-bind:textCount="count"></text-fragment>
          </div>
        </div>
        <div class="card-action">
          <a class="waves-effect waves-light btn blue-grey darken-2" v-on:mousedown="copyContent()">Copy</a>
        </div>
=======
      <div class="card cyan darken-3">
        <div class="card-content white-text">
          <span class="card-title">{{ book.title }} - {{book.source}}</span>
          <div class="card-content lines">
          <template v-for="line in displaying.split('\n')"> {{line}}<br></template>
          </div>
        </div>
        <div class="card-action"><a class="waves-effect waves-light btn  cyan darken-4" v-on:mousedown="copyContent()">Copy</a></div>
>>>>>>> f7e3920e9e93a1b354b635fc803c0c5252254312
      </div>
    </div>
  </div>
</div>
</template>

<script>
<<<<<<< HEAD
import paragraph from './Contents/Paragraph'
import list from './Contents/List'
import textFragment from './Contents/TextFragment'

export default {
  name: 'Book',
  components: {paragraph, list, textFragment},
  data () {
    return {
      count: 1,
      showParagraph: false,
      showList: false,
      showFragment: false
    }
  },
  created: function () {
    this.displaying = ''
  },
  methods: {
    updateClipbpard: function (updated) {
      console.log(updated)
      this.displaying = updated
    },
=======
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
      countVal: 10,
      listCount: 3,
      displaying: '',
      disabled: 1,
      isWordCount: false
    }
  },
  created: function () {
    this.displaying = this.book.content
  },
  methods: {
>>>>>>> f7e3920e9e93a1b354b635fc803c0c5252254312
    copyContent: function () {
      var textarea = document.createElement('textarea')
      textarea.textContent = this.displaying
      textarea.style.position = 'fixed'
      document.body.appendChild(textarea)
      textarea.select()
      try {
        return document.execCommand('copy')
      } catch (ex) {
        console.warn('Copy to clipboard failed.', ex)
        return false
      } finally {
        document.body.removeChild(textarea)
      }
    },
    chooseDisplay: function (displayStyle) {
<<<<<<< HEAD
      switch (displayStyle) {
        case 'list':
          this.showList = true
          this.showFragment = false
          this.showParagraph = false
          break
        case 'count':
          this.showList = false
          this.showFragment = true
          this.showParagraph = false
          break
        default:
          this.showList = false
          this.showFragment = false
          this.showParagraph = true
          break
=======
      if (displayStyle === 'list') {
        var tmp = ''
        for (var i = 0; i < this.listCount - 1; i++) {
          tmp = tmp.concat(tmp, '🐸' + this.book.content.split('。')[i] + '\n')
        }
        this.displaying = tmp
      } else if (displayStyle === 'count') {
        this.isWordCount = true
        console.log(this.countVal)
        if (this.countVal < 0 || this.countVal > 411) {
          this.displaying = this.book.content
        } else {
          this.displaying = this.book.content.substring(0, this.countVal)
        }
      } else {
        this.isWordCount = false
        this.displaying = this.book.content
        console.log(this.displaying.length)
>>>>>>> f7e3920e9e93a1b354b635fc803c0c5252254312
      }
      console.log(this.displaying)
    }
  }
}
</script>
<style>
 .lines {
   text-align: left;
 }
</style>
