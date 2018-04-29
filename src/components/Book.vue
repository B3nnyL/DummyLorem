<template>
  <div class="row">
    <div>
    <div class="col l6">
    <div class="card">
      <div class="card-content">
        <form>
          <div class="row form-row">
            <input type="radio" name="group" id="paragraph"  @change="chooseDisplay('para')" checked>
            <label for="paragraph">Paragraph</label>
          </div>
          <div class="row form-row">
            <input type="radio" name="group" id="list" value="list" @change="chooseDisplay('list')">
            <label for="list">List (default: 3 items)</label>
          </div>
          <div class="row form-row">
            <input type="radio" name="group" id="wordCount" value="wordCount" @change="chooseDisplay('count')">
            <label for="wordCount"> Word Count (1 to 411)</label>
          </div>
          <div class="row form-row">
            <label for="count">{{labelCount}}</label>
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
    this.displaying = ''
  },
  methods: {
    updateClipbpard: function (updated) {
      console.log(updated)
      this.displaying = updated
    },
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
