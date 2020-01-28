import { useState } from 'react';
import {
  Box,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import styled from 'styled-components';
import config from '../../config';

export const UIExpandableFormStep = props => {
  const { children } = props;
  const [bIsOpen, setIsOpen] = useState(true);

  return (
    <React.Fragment>
      <ExpansionPanel
        expanded={bIsOpen}
        onChange={() => {
          setIsOpen(!bIsOpen);
        }}
      >
        <ExpansionPanelSummary
          expandIcon={
            <ExpandMoreIcon
              style={{ color: config.styles.colors.darkBgText }}
            />
          }
          style={{
            backgroundColor: config.styles.colors.primary,
            padding: '0 2em',
            borderBottom: '3px solid #000'
          }}
        >
          <Box
            color={config.styles.colors.darkBgText}
            display="flex"
            flexDirection="row"
            width="100%"
            flexWrap="wrap"
          >
            <Box flexGrow={1} style={{ flexBasis: 0 }}>
              <Typography paragraph={true} style={{ margin: 0 }}>
                {'CLIENT - LEGAL ENTITY'}
              </Typography>
            </Box>
          </Box>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{ padding: 0 }}>
          <Box width="100%">{children}</Box>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </React.Fragment>
  );
};

export default UIExpandableFormStep;
