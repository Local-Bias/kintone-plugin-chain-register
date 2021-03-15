import React from 'react';
import styled from '@emotion/styled';
import { FormControlLabel, Switch } from '@material-ui/core';

import { ConfigContainer } from '../contexts';

const Component: React.FCX = ({ className }) => {
  const { config, setConfig } = ConfigContainer.useContainer();

  const toggleReusing = (e: React.ChangeEvent<HTMLInputElement>) => setConfig({ ...config, reuses: e.target.checked });
  const toggleEnablingUpdate = (e: React.ChangeEvent<HTMLInputElement>) =>
    setConfig({ ...config, enablesUpdate: e.target.checked });

  return (
    <div className={className}>
      <FormControlLabel
        control={<Switch checked={config.reuses} onChange={toggleReusing} color='primary' />}
        label='レコードを再利用する'
      />
      <FormControlLabel
        control={<Switch checked={config.enablesUpdate} onChange={toggleEnablingUpdate} color='primary' />}
        label='レコード更新時にも表示する'
      />
    </div>
  );
};

const StyledComponent = styled(Component)`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default StyledComponent;
