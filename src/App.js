import logo from './logo.svg';
import React, {useState,useEffect} from 'react'
import './App.css';
import DownloadLink from "react-download-link";
import { FileSaver } from 'file-saver';

function App() {
  var fileDownload = require('js-file-download')
  // var FileSaver = require('file-saver');
  FileSaver.saveAs('https://dev-track-net.s3.amazonaws.com/media/1/p/258/docs/LzIbwYDN_screenshot-from-2020-12-08-14-12-53_2020-12-09-120342733462.png','myimg.png')
  return (
    <div className="App">
    	<h1>hiii</h1>
    	<DownloadLink
		    label="download"
		    filename="myfile.pngx"
		    exportFile={() => "https://dev-track-net.s3.amazonaws.com/media/1/p/258/docs/LzIbwYDN_screenshot-from-2020-12-08-14-12-53_2020-12-09-120342733462.png" }
			/>
    </div>
  );
}

export default App;
