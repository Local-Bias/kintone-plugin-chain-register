import React from 'react';

import { ConfigContainer } from './contexts';
import { SocialIcons, Form, Footer } from './components';

const Component: React.FC<{ pluginId: string }> = ({ pluginId }) => (
  <>
    <ConfigContainer.Provider initialState={pluginId}>
      <Form />
      <Footer />
    </ConfigContainer.Provider>
    <SocialIcons />
  </>
);

export default Component;
