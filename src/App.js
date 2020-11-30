import React, { useState } from 'react';
import Accordion from './Components/Accordion';
import Search from './Components/Search';
import Dropdown from './Components/Dropdown';
import Translate from './Components/Translate';
import Route from './Components/Route';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

const options = [
  {
    optionLabel: 'The Color Red',
    value: 'red',
  },
  {
    optionLabel: 'The Color Green',
    value: 'green',
  },
  {
    optionLabel: 'A Shade of Blue',
    value: 'blue',
  },
];

const showAccordion = () => {
  if (window.location.pathname === '/') {
    return <Accordion items={items} />;
  }
};

const showList = () => {
  if (window.location.pathname === '/list') {
    return <Search />;
  }
};

const showDropdown = () => {
  if (window.location.pathname === '/dropdown') {
    return <Dropdown />;
  }
};

const showTranslate = () => {
  if (window.location.pathname === '/translate') {
    return <Translate />;
  }
};

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
          text="Changing the Color"
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
