import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    optionLabel: 'Afrikaans',
    value: 'af',
  },
  {
    optionLabel: 'Arabic',
    value: 'ar',
  },
  {
    optionLabel: 'Hindi',
    value: 'hi',
  },
];

const Translate = () => {
  const [text, setText] = useState('Hello');
  const [language, setLanguage] = useState(options[0]);
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        text=""
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
