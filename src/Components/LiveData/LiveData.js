import React from 'react';
import './LiveData.css';
import reactDom from 'react-dom';
import { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import DataMap from './DataMap';

function LiveData() {
  const [content, setContent] = useState('');

  const geoUrl =
    'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

  return (
    <div className="data-map">
      <h3>Live Data</h3>
      <DataMap setToolTipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default LiveData;
