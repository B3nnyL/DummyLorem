<template>
  <div class="row">
    <div>
    <div class="col l6">
    <div class="card">
      <div class="card-content">
        <form>
          <div class="row form-row">
            <input type="radio" name="group" id="paragraph"  @change="chooseDisplay('para')" checked>
            <label for="paragraph">Paragraph (default: 1 paragraph)</label>
          </div>
          <div class="row form-row">
            <input type="radio" name="group" id="list" value="list" @change="chooseDisplay('list')">
            <label for="list">List (default: 1 item)</label>
          </div>
          <div class="row form-row">
            <input type="radio" name="group" id="wordCount" value="wordCount" @change="chooseDisplay('count')">
            <label for="wordCount"> Word Count (1 to 411)</label>
          </div>
          <div class="row form-row">
            <label class="countLbl" for="count">{{labelCount}}</label>
            <input type="text" id="count" v-model.number="count" placeholder="Input count">  
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="col l6">
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
      </div>
    </div>
  </div>
</div>
</template>

<script>
import paragraph from './Contents/Paragraph'
import list from './Contents/List'
import textFragment from './Contents/TextFragment'

export default {
  name: 'Book',
  components: {paragraph, list, textFragment},
  data () {
    return {
      count: 1,
      showParagraph: true,
      showList: false,
      showFragment: false
    }
  },
  computed: {
    labelCount: function () {
      if (this.showParagraph) {
        return 'How many paragraphs'
      } else if (this.showList) {
        return 'How many lists'
      } else if (this.showFragment) {
        return 'How many words'
      }
    }
  },
  created: function () {
    this.displaying = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis at tellus at. Lectus sit amet est placerat. Vitae turpis massa sed elementum tempus egestas. Nisi porta lorem mollis aliquam. Enim eu turpis egestas pretium aenean pharetra. Molestie nunc non blandit massa enim. Id ornare arcu odio ut sem nulla pharetra diam sit. Accumsan tortor posuere ac ut. Sit amet purus gravida quis. Sed felis eget velit aliquet sagittis id consectetur. Vitae auctor eu augue ut lectus arcu bibendum at varius. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.'
  },
  methods: {
    updateClipbpard: function (updated) {
      console.log(updated)
      this.displaying = updated
    },
    copyContent: function () {
      let textarea = document.createElement('textarea')
      textarea.textContent = this.displaying
      textarea.style.position = 'fixed'
      document.body.appendChild(textarea)
      textarea.select()
      console.log(textarea.textContent)
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
      }
    }
  }
}
</script>
<style>
 .lines {
   text-align: left;
 }
 .form-row{
   text-align: left;
 }
</style>
