import React from 'react';
import './App.css';
import { FiSettings, FiBarChart2, FiLogOut, FiDownload, FiDatabase, FiClock, FiTrash2 } from 'react-icons/fi';
import {  FiSave, FiUsers, FiCalendar,FiPlus,FiMinus ,FiX} from "react-icons/fi"; 
import { IoIosArrowDown } from "react-icons/io"; 
import { MdRemove } from "react-icons/md"; 
import { IoMdDownload } from "react-icons/io";
import { FaProjectDiagram } from 'react-icons/fa';

const App = () => {
  const data = {
    "id": "5ad1cc79-83cb-4aa4-8a2b-65e6baa8a991",
    "table_headers": [
      { "name": "Territory", "type": "object" },
      { "name": "Date", "type": "object" },
      { "name": "Units", "type": "int" },
      { "name": "Average_Unit_Price", "type": "float" },
      { "name": "TV_Total", "type": "float" },
      { "name": "Video_on_Demand", "type": "float" },
      { "name": "Proof_of_Concept_Spend", "type": "float" },
      { "name": "Print_Spend", "type": "float" },
      { "name": "Online_Display", "type": "int" },
      { "name": "FSI_Coupon", "type": "float" },
      { "name": "Feature", "type": "float" },
      { "name": "Display", "type": "float" },
      { "name": "Price_Reduction", "type": "float" },
      { "name": "Feat_and_Disp", "type": "float" },
      { "name": "Pct_Discount", "type": "float" },
      { "name": "Competitor_Distribution_1", "type": "int" },
      { "name": "Competitor_Distribution_2", "type": "int" },
      { "name": "Competition_Units", "type": "int" }
    ],
    "table_data": [
      ["Brick 001", "2021-01-01", "298", "5.7819", "0.0", "0.0", "0.0", "0.0", "0", "0.0", "0.0", "0.0827", "0.0", "0.0", "0.0016", "38", "14", "4675"],
      ["Brick 001", "2021-02-01", "327", "5.8471", "94.1656", "0.0", "0.0", "0.0", "0", "0.0", "0.0", "0.0289", "0.0", "0.0", "0.0", "37", "19", "4888"],
      ["Brick 001", "2021-02-01", "327", "5.8471", "94.1656", "0.0", "0.0", "0.0", "0", "0.0", "0.0", "0.0289", "0.0", "0.0", "0.0", "37", "19", "4888"],
      ["Brick 001", "2021-02-01", "327", "5.8471", "94.1656", "0.0", "0.0", "0.0", "0", "0.0", "0.0", "0.0289", "0.0", "0.0", "0.0", "37", "19", "4888"],
      ["Brick 001", "2021-02-01", "327", "5.8471", "94.1656", "0.0", "0.0", "0.0", "0", "0.0", "0.0", "0.0289", "0.0", "0.0", "0.0", "37", "19", "4888"],
      ["Brick 001", "2021-02-01", "327", "5.8471", "94.1656", "0.0", "0.0", "0.0", "0", "0.0", "0.0", "0.0289", "0.0", "0.0", "0.0", "37", "19", "4888"],
      ["Brick 001", "2021-02-01", "327", "5.8471", "94.1656", "0.0", "0.0", "0.0", "0", "0.0", "0.0", "0.0289", "0.0", "0.0", "0.0", "37", "19", "4888"],
      ["Brick 001", "2021-02-01", "327", "5.8471", "94.1656", "0.0", "0.0", "0.0", "0", "0.0", "0.0", "0.0289", "0.0", "0.0", "0.0", "37", "19", "4888"],
      ["Brick 001", "2021-02-01", "327", "5.8471", "94.1656", "0.0", "0.0", "0.0", "0", "0.0", "0.0", "0.0289", "0.0", "0.0", "0.0", "37", "19", "4888"],
      ["Brick 001", "2021-02-01", "327", "5.8471", "94.1656", "0.0", "0.0", "0.0", "0", "0.0", "0.0", "0.0289", "0.0", "0.0", "0.0", "37", "19", "4888"],
      ["Brick 001", "2021-02-01", "327", "5.8471", "94.1656", "0.0", "0.0", "0.0", "0", "0.0", "0.0", "0.0289", "0.0", "0.0", "0.0", "37", "19", "4888"],
      ["Brick 001", "2021-02-01", "327", "5.8471", "94.1656", "0.0", "0.0", "0.0", "0", "0.0", "0.0", "0.0289", "0.0", "0.0", "0.0", "37", "19", "4888"],
      ["Brick 001", "2021-02-01", "327", "5.8471", "94.1656", "0.0", "0.0", "0.0", "0", "0.0", "0.0", "0.0289", "0.0", "0.0", "0.0", "37", "19", "4888"],
      ["Brick 001", "2021-02-01", "327", "5.8471", "94.1656", "0.0", "0.0", "0.0", "0", "0.0", "0.0", "0.0289", "0.0", "0.0", "0.0", "37", "19", "4888"],
      ["Brick 001", "2021-02-01", "327", "5.8471", "94.1656", "0.0", "0.0", "0.0", "0", "0.0", "0.0", "0.0289", "0.0", "0.0", "0.0", "37", "19", "4888"],
      ["Brick 001", "2021-02-01", "327", "5.8471", "94.1656", "0.0", "0.0", "0.0", "0", "0.0", "0.0", "0.0289", "0.0", "0.0", "0.0", "37", "19", "4888"],
      ["Brick 001", "2021-02-01", "327", "5.8471", "94.1656", "0.0", "0.0", "0.0", "0", "0.0", "0.0", "0.0289", "0.0", "0.0", "0.0", "37", "19", "4888"],
      ["Brick 001", "2021-02-01", "327", "5.8471", "94.1656", "0.0", "0.0", "0.0", "0", "0.0", "0.0", "0.0289", "0.0", "0.0", "0.0", "37", "19", "4888"],
      ["Brick 001", "2021-02-01", "327", "5.8471", "94.1656", "0.0", "0.0", "0.0", "0", "0.0", "0.0", "0.0289", "0.0", "0.0", "0.0", "37", "19", "4888"],
      ["Brick 001", "2021-02-01", "327", "5.8471", "94.1656", "0.0", "0.0", "0.0", "0", "0.0", "0.0", "0.0289", "0.0", "0.0", "0.0", "37", "19", "4888"],
      ["Brick 001", "2021-02-01", "327", "5.8471", "94.1656", "0.0", "0.0", "0.0", "0", "0.0", "0.0", "0.0289", "0.0", "0.0", "0.0", "37", "19", "4888"],
      ["Brick 001", "2021-02-01", "327", "5.8471", "94.1656", "0.0", "0.0", "0.0", "0", "0.0", "0.0", "0.0289", "0.0", "0.0", "0.0", "37", "19", "4888"],
      ["Brick 001", "2021-02-01", "327", "5.8471", "94.1656", "0.0", "0.0", "0.0", "0", "0.0", "0.0", "0.0289", "0.0", "0.0", "0.0", "37", "19", "4888"],

    ]
  };
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.substring(0, maxLength)}`;
    }
    return text;
  };
  const circleIconStyle = (bgColor) => ({
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: bgColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10px",
    
  });
  const circlePlusIconStyle = (bgColor) => ({
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: bgColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "50px",
  });
  const cardStyle = {
    backgroundColor: "blueviolet",
    marginBottom: "10px",
    borderRadius: "6px",
    overflow: "hidden",
  };
  
  const headerStyle = {
    backgroundColor: "blueviolet",
    color: "white",
    padding: "10px",
    fontWeight: "bold",
  };
  
  const bodyStyle = {
    padding: "10px",
    backgroundColor: "rgb(230, 230, 250)",
    color: "black",
  };
  
  const borderedDivStyle = {
    border: "1px solid blueviolet",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "4px",
  };
  return (
    <div className="container-fluid full-body">
      <div className="row full-height">
      
        <div className="col-9 left-side">
          <div className="d-flex justify-content-between align-items-center mb-3">
           
            <div className="d-flex button-group">
              <div className="section-button violet-section d-flex align-items-center justify-content-center">
                <FiSettings className="icon" />
                <span className="text">Data</span>
              </div>
              <div className="section-button white-section d-flex align-items-center justify-content-center">
                <FiBarChart2 className="icon violet-text" />
                <span className="text violet-text">Summary</span>
              </div>
              <div className="section-button white-section d-flex align-items-center justify-content-center">
                <FiLogOut className="icon violet-text" />
                <span className="text violet-text">Logs</span>
              </div>
            </div>

           
            <div className="download disabled-section d-flex align-items-center justify-content-center">
              <FiDownload className="icon" />
              <span className="text disabled-text">Download</span>
            </div>
          </div>

          
          <div className="card remaining-height d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center mb-3">
             
              <div className="d-flex align-items-center gap-2">
                <div className="d-flex align-items-center">
                  <div className="project-icon violet-border d-flex align-items-center justify-content-center">
                  <FaProjectDiagram className="violet-text" />
                  <span className="project-text violet-text ms-2">PROJECT NAME</span>
                  </div>
                  <span className="etl-text black-text">ETL New Demo 2</span>
                </div>

                
                <div className="d-flex align-items-center">
                  <div className="database-icon violet-border d-flex align-items-center justify-content-center">
                    <FiDatabase className="violet-text" />
                    <span className="database-text violet-text ms-2" style={{ textTransform: 'uppercase' }}>
  Output Dataset Name
</span>
                  </div>
                  <span className="etl-text black-text">ETL N_D2</span>
                </div>

               
                <div className="d-flex align-items-center">
                  <div className="clock-icon violet-border d-flex align-items-center justify-content-center">
                    <FiClock className="violet-text" />
                    <span className="last-run-text violet-text ms-2" style={{ textTransform: 'uppercase' }}>Last Run</span>
                  </div>
                  <span className="etl-text black-text">Not Available</span>
                </div>
              </div>
             
              <div className="d-flex align-items-center">
                <span className="rows-count black-text">Rows: 500</span>
              </div>
            </div>

           
            <hr className="my-4" style={{ border: '1px solid #ccc' }} />

           
            <div className="table-responsive" style={{ maxHeight: '67vh', overflowY: 'auto',scrollbarWidth: 'thin' }}>
            <table className="table">
  <thead>
    <tr style={{ backgroundColor: '#E6E6FA' }}>
      {data.table_headers.map((header, index) => (
        <th key={index} className="text-center border" style={{
          border: '1px solid #8A2BE2',
          backgroundColor: '#E6E6FA',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          minWidth:"170px",
          maxWidth: '150px' 
        }}>
           <div className="d-flex justify-content-between align-items-center">
           <p  className='' style={{
         
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: '150px' 
        }}>{truncateText(header.name, 12)}</p>
           <FiTrash2 className="mb-3" style={{ color: '#8A2BE2' }} />

           </div>
         </th>
      ))}
    </tr>
    <tr style={{ backgroundColor: '#E6E6FA' }}>
      {data.table_headers.map((header, index) => (
        <th key={index} className="text-center border" style={{
          border: '1px solid #8A2BE2', 
          backgroundColor: '#E6E6FA',
          width: '150px'
        }}>
         
            <select style={{
              border: '1px solid #8A2BE2',
              backgroundColor: 'white',
              borderRadius: '4px',
              padding: '5px',
              width: '70%',
            }}>
              <option value={header.type}>{header.type}</option>
              <option value="object">Object</option>
              <option value="int">Int</option>
              <option value="float">Float</option>
            </select>
        </th>
      ))}
    </tr>
  </thead>

                <tbody>
                  {data.table_data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="text-center border" style={{ border: '1px solid #8A2BE2' }}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        
        <div className="col-3 right-side">
      <div className="card full-height" style={{ backgroundColor: "white" }}>
        <div className="d-flex justify-content-between align-items-center px-2">
          <p style={{ margin: 0, fontWeight: "700" }}>Workflow</p>
          <div className="d-flex align-items-center">
          <FiX
  style={{ color: "blueviolet", marginLeft: "5px", marginRight: "5px", fontSize: "20px" }}
/>
          {/* <FiDownload style={{ color: "blueviolet", fontSize: "20 px" }} /> */}

            <IoMdDownload style={{ color: "blueviolet", marginLeft: "5px", marginRight: "5px", fontSize: "20px"}} />
            <FiDownload style={{ color: "blueviolet", marginRight: "5px",fontSize: "20px" }} />
            <FiSave style={{ color: "blueviolet", marginRight: "5px",fontSize: "20px" }} />
            <FiUsers style={{ color: "blueviolet", marginRight: "5px",fontSize: "20px" }} />
            <FiCalendar style={{ color: "blueviolet", marginRight: "5px",fontSize: "20px" }} />
          </div>
        </div>
        <hr />

        
        <div className="d-flex align-items-start mx-2 my-3">
         
          <div className="d-flex flex-column align-items-center" style={{ marginRight: "10px" }}>
           
            <div className="circle-icon" style={circleIconStyle("rgb(230, 230, 250)")}>
              <FiMinus style={{ color: "blueviolet" }} />
            </div>
            {[...Array(10)].map((_, index) => (
              <div key={index} className="dot" style={{ width: '4px', height: '4px', backgroundColor: 'rgb(230, 230, 250)', borderRadius: '50%', margin: '2px 0' }}></div>
            ))}
           
              <div  className="circle-icon" style={circlePlusIconStyle("rgb(230, 230, 250)")}>
               <FiPlus style={{ color: "blueviolet"}} /> 
              </div>
            
            <div className="circle-icon" style={circlePlusIconStyle("rgb(230, 230, 250)")}>
              <FiPlus style={{ color: "blueviolet" }} />
            </div>
            <div className="circle-icon" style={circlePlusIconStyle("rgb(230, 230, 250)")}>
              <FiPlus style={{ color: "blueviolet" }} />
            </div>
            <div className="circle-icon" style={circlePlusIconStyle("rgb(230, 230, 250)")}>
              <FiPlus style={{ color: "blueviolet" }} />
            </div>
            <div className="circle-icon" style={circleIconStyle("rgb(230, 230, 250)")}>
              <FiMinus style={{ color: "blueviolet" }} />
            </div>
            {[...Array(29)].map((_, index) => (
              <div key={index} className="dot" style={{ width: '4px', height: '4px', backgroundColor: 'rgb(230, 230, 250)', borderRadius: '50%', margin: '2px 0' }}></div>
            ))}
          </div>

         
          <div className="flex-grow-1">
           
            <div className="cards" style={cardStyle}>
              <div className="card-header" style={headerStyle}>
                Dataset Selection
              </div>
              <div className="card-body" style={bodyStyle}>
                Name: Brick Data
              </div>
            </div>

           
            <div  className="bordered-div" style={borderedDivStyle}>
                <p>NEW </p>
              </div>
              <div  className="bordered-div" style={borderedDivStyle}>
                <p>AGGREGATE </p>
              </div>
              <div  className="bordered-div" style={borderedDivStyle}>
                <p>CLEAN </p>
              </div>
              <div  className="bordered-div" style={borderedDivStyle}>
                <p>DEDUPE </p>
              </div>
           
            <div className="cards" style={cardStyle}>
              <div className="card-header" style={headerStyle}>
                Join
              </div>
              <div className="card-body" style={bodyStyle}>
                <p>type: inner</p>
                <p>extras: [object Object]</p>
                <p>left_column: Territory</p>
                <p>right_column: Territory</p>
                <p>dataset2_name: ETL N_D2_FRK1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default App;
