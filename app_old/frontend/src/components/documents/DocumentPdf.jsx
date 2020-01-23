import React, { useState, useEffect } from 'react';
import AnimateHeight from 'react-animate-height';
import styled from 'styled-components';
import { SizeMe } from 'react-sizeme';
import { pdfjs, Document, Page } from 'react-pdf';
import { AppBar, Tab, Tabs } from '@material-ui/core';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const getDocumentContainerDimensions = size => {
  const x = 800 < size ? size : 800;
  const y = 1.35 * x;

  return { x, y };
};

const StyledAnimateHeight = styled(AnimateHeight)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledPage = styled(Page)`
  border: 1px dashed #333;
`;

const StyledAppBar = styled(AppBar)`
  box-shadow: none !important;
  border: 1px solid #949494;
`;

export const DocumentPdf = ({ file }) => {
  const [stateActivePageIndex, setActivePageIndex] = useState(0);
  const [stateNumOfPages, setNumOfPages] = useState(0);

  useEffect(() => {
    setActivePageIndex(0);
    setNumOfPages(0);
  }, [file]);

  return (
    <React.Fragment>
      <AnimateHeight duration={500} height={file ? 'auto' : 0}>
        <StyledAppBar position="static" color="default">
          <Tabs
            value={stateActivePageIndex}
            onChange={(event, index) => {
              setActivePageIndex(index);
            }}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            {new Array(stateNumOfPages).fill(0).map((tab, index) => (
              <Tab key={`tab-${index}`} label={index + 1} />
            ))}
          </Tabs>
        </StyledAppBar>
        <div style={{ height: '1em' }}></div>
      </AnimateHeight>
      <SizeMe>
        {({ size }) => {
          const { x, y } = getDocumentContainerDimensions(size);
          return (
            <StyledAnimateHeight duration={500} height={file ? y : 0}>
              <Document
                file={file}
                onLoadSuccess={({ numPages }) => setNumOfPages(numPages)}
              >
                <StyledPage width={x} pageNumber={stateActivePageIndex + 1} />
              </Document>
            </StyledAnimateHeight>
          );
        }}
      </SizeMe>
    </React.Fragment>
  );
};
