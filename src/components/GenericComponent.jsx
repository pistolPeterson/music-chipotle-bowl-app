//not to be used anywhere, just boilerplate for when i create a new react comp
import React, { useState } from 'react';

const ComponentName = ({ exampleProp = 'Default Value' }) => {
  // const [state, setState] = useState(null);

  return <div className="temp-className">Example Component {exampleProp}</div>;
};

export default ComponentName;
