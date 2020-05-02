import React from 'react';
import Form from 'react-bootstrap/Form';
import './form.css';

const marked = require('marked');

class FormInput extends React.Component {
  state = {
    markdown: text,
  };

  updateMarkdown = function (markdown) {
    this.setState({markdown});
  };

  render() {
    let {markdown} = this.state;
    return (
      <div className='container'>
        <Form
          className='bg-info'
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Form.Group controlId='formControlsTextArea'>
            <Form.Label className='title' as='h5'>
              Markdown Input
            </Form.Label>
            <Form.Control
              as='textarea'
              id='editor'
              className='text-fields form-control-md'
              value={markdown}
              onChange={(event) => this.updateMarkdown(event.target.value)}
            ></Form.Control>
          </Form.Group>
        </Form>
        <div>
          <h5 className='bg-info'>Markdown Output</h5>
          <div
            id='preview'
            className='text-fields markup'
            dangerouslySetInnerHTML={{__html: marked(markdown)}}
          ></div>
        </div>
      </div>
    );
  }
}

let text = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;
export default FormInput;
