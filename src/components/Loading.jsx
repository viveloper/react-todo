import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({width, height}) => {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: '#C7D3DD',
      opacity: 0.3,
      width: '100%',
      height: '100%'
    }}>
      <div style={{ width: `${width}px`, marginLeft: 'auto', marginRight: 'auto', marginTop: '200px' }}>
        <ReactLoading type={'spokes'} color={'#000000'} height={width} width={height} />
      </div>
    </div>
  );
}

export default Loading;