import React, { useState } from 'react';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';
import { Delete as DeleteIcon } from '@material-ui/icons';
import Color from 'color';

const backgroundColors = {
  default: '#fff',
  active: '#eee',
  valid: '#d8e6de',
  error: '#f8d7da',
  warning: '#fff3cd'
};

const borderColors = {
  default: '#aaa',
  active: '#999',
  valid: '#3E574A',
  error: '#721c24',
  warning: '#856404'
};

const StyledDropZone = styled(Dropzone)``;

const DropZoneContainer = styled.div`
  width: ${props => {
    const { hasSelectedFile } = props;
    return hasSelectedFile ? '80%' : '100%';
  }};
  height: 4em;
  background: ${props => {
    const { colorType } = props;
    return backgroundColors[colorType];
  }};
  border: 3px dashed
    ${props => {
      const { colorType } = props;
      return borderColors[colorType];
    }};
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background: ${props => {
      const { colorType } = props;
      return Color(backgroundColors[colorType])
        .darken(0.05)
        .hex();
    }};
    border-color: ${props => {
      const { colorType } = props;
      return Color(borderColors[colorType])
        .darken(0.05)
        .hex();
    }};
  }
`;

const DropZoneRemove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  height: 4em;
  background: ${backgroundColors['warning']};
  border: 3px dashed ${borderColors['warning']}
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background: ${Color(backgroundColors['warning'])
      .darken(0.05)
      .hex()};
    border-color: ${Color(borderColors['warning'])
      .darken(0.05)
      .hex()};
  }
`;

const DropZoneInput = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const FormFileUpload = ({
  fileName,
  handleClearFile,
  handleSetFile,
  selectedFile
}) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [colorType, setColorType] = useState('default');

  const handleDrop = (acceptedFiles, rejectedFiles) => {
    setErrorMessage(null);
    if (rejectedFiles && rejectedFiles.length > 0) {
      handleSetFile(null);
      setColorType('error');
      setErrorMessage(`Invalid File! -> ${rejectedFiles[0].name}`);
      return null;
    }

    if (Array.isArray(acceptedFiles) && acceptedFiles.length > 1) {
      handleSetFile(null);
      setColorType('error');
      setErrorMessage(`Tried to add more than one file!`);
      return null;
    }

    if (Array.isArray(acceptedFiles) && acceptedFiles.length > 0) {
      handleSetFile(acceptedFiles[0]);
      setColorType('valid');
      return null;
    }
  };

  const handleDragOver = event => {
    setColorType('active');
  };
  const handleDragLeave = () => {
    setColorType('default');
  };

  const handleRemove = () => {
    handleClearFile();
    setColorType('default');
  };

  return (
    <StyledDropZone
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      accept={'application/pdf'}
    >
      {({ getRootProps, getInputProps }) => {
        return (
          <div style={{ display: 'flex' }}>
            <DropZoneContainer
              colorType={colorType}
              hasSelectedFile={!!selectedFile}
            >
              <DropZoneInput {...getRootProps()} style={{ outline: 'none' }}>
                <input {...getInputProps()} />
                <div>
                  {selectedFile && fileName ? (
                    <React.Fragment>{fileName}</React.Fragment>
                  ) : (
                    <React.Fragment>
                      {errorMessage ||
                        'Drag and drop some files here, or click to select files'}
                    </React.Fragment>
                  )}
                </div>
              </DropZoneInput>
            </DropZoneContainer>
            {!!selectedFile ? (
              <React.Fragment>
                <div style={{ flexGrow: 1 }}></div>
                <DropZoneRemove onClick={handleRemove}>
                  <DeleteIcon />
                </DropZoneRemove>
              </React.Fragment>
            ) : null}
          </div>
        );
      }}
    </StyledDropZone>
  );
};
