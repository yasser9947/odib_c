import React, { Component } from 'react'

export default class introPage extends Component {
  render() {
    return (
      <div>
          <div>
          <h1 className = "yasser">أهلا بكم في مسابقه العضيب  </h1>
          <div id="intro" class="header-container fs">
          
  <header class="wrapper">
    <p>هي عباره عن مسابقه ثقافيه تأخذ عدد من عشوائي من الجمهور وتسأله </p>
  </header>
  <span onClick={this.props.ChangeToApp2Page} class="scroll-hint">Start Game</span>
  <div className = "picInto"> </div>

</div>


        
</div>
      </div>
    )
  }
}
