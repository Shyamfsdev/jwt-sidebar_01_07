// // "use client"
// // import React, { useState, useEffect } from 'react';
// // import { DataGrid } from '@mui/x-data-grid';
// // import axios from 'axios';
// // import Cookies from 'js-cookie';
// // import "bootstrap/dist/css/bootstrap.min.css"
// // import "./table.css"
// // import { CiSearch } from "react-icons/ci";


// // const DataTable = () => {
// //   const TOKEN = Cookies.get('Tokensss');

// //   console.log(TOKEN);
// //   const [columns, setColumns] = useState([]);
// //   const [rows, setRows] = useState([]);
// //   const [error, setError] = useState(null); // State to hold error message

// //   const API_TOKEN = "engguergi09ertgiojg"

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         // Make sure the URL and parameters are correct
// //         const response = await axios.get(`http://192.168.29.187:8000/customer_master_list?access_token=${TOKEN}`, {
// //           headers: {
// //             'Authorization': `${API_TOKEN}`,
// //             'Content-Type': 'application/json'
// //           },
// //         });

// //         console.log("Data fetched successfully:", response.data);

// //         const result = response.data;

// //         if (result.action === 'success') {
// //           const apiData = result.data;

// //           // Define columns based on API response structure
// //           const fetchedColumns = [
// //             { field: 'id', headerName: 'ID', width: 100 },
// //             { field: 'customer_name', headerName: 'Customer Name', width: 210 },
// //             { field: 'bussiness_name', headerName: 'Business Name', width: 210 },
// //             { field: 'customer_code', headerName: 'Customer Code', width: 210 },
// //             { field: 'contact_number', headerName: 'Contact Number', width: 210 },
// //             { field: 'gst_no', headerName: 'GST No', width: 210 },
// //             { field: 'trading_type', headerName: 'Trading Type', width: 210 },
// //             // Add more columns as per your requirements
// //           ];

// //           // Map API data to rows
// //           const fetchedRows = apiData.map((item, index) => ({
// //             id: index, // Assuming 'id' is required for DataGrid row identification
// //             customer_name: item.customer_name,
// //             bussiness_name: item.bussiness_name,
// //             customer_code: item.customer_code,
// //             contact_number: item.contact_number,
// //             gst_no: item.gst_no,
// //             trading_type: item.trading_type,
// //             // Add more fields as per your requirements
// //           }));

// //           setColumns(fetchedColumns);
// //           setRows(fetchedRows);
// //         } else {
// //           setError("There has been some error while fetching the data");
// //         }
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //         setError(`Error fetching data: ${error.message}`);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   return (
// //     <>
// //     <div className='text-right mb-3 d-flex justify-content-end align-items-center input-div p-3'>
// //       <div className='d-flex w-25 bg-light rounded justify-content-between p-2 align-items-center'>
// //       <input type="text" className='w-50 rounded p-1 ' placeholder='search'/>
// //       <CiSearch />
// //       </div>
// //     </div>
// //     <div style={{ height: 400, width: '100%' }}>
// //       {error && <div style={{ color: 'red' }}>Error: {error}</div>}
// //       <DataGrid
        
// //         rows={rows}
// //         columns={columns}
// //         disableColumnFilter
// //         disableColumnMenu
// //         initialState={{
// //           pagination: {
// //             paginationModel: { page: 0, pageSize: 5 },
// //           },
// //         }}
// //         pageSizeOptions={[5, 10, 15]}
// //         className='d-flex justify-content-between w-100'
// //       />
// //     </div>
// //     </>
// //   );
// // };

// // export default DataTable;

// "use client"

// import React, { useState, useEffect } from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./table.css";
// import { CiSearch } from "react-icons/ci";
// import { FaPlus } from "react-icons/fa";
// import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';
// import CustomPagination from './CustomPagination';


// const DataTable = () => {
//   const TOKEN = Cookies.get('Tokensss');
//   const [columns, setColumns] = useState([]);
//   const [rows, setRows] = useState([]);
//   const [error, setError] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [modalInfo, setModalInfo] = useState({ show: false, recipient: '' });
//   const [page, setPage] = useState(1);
//   const [pageSize, setPageSize] = useState(5);
//   const [data,setData] = useState({
//     access_token: "",
//     customer_name : "",
//     customer_code : "",
//     customer_typ : "",
//     bussiness_name : "",
//     contact_number : "",
//     email_id : "",
//     gst_no : "",
//     trading_type :"",
//     address: {
//                 flatStreet: "",
//                 state: "",
//                 district: "",
//                 pincode: ""
//             },
//     category_handler:{
//         Demo:""
//     },
//     divison_handler:{
//         Demo:"",
//         route: ""
//     },
//     route_details:{
//         data_uniq_id: "",
//         route: ""
//     },
//     sales_man:{
//         Name: "",
//         Mobile_number:""
//     },
//     cash_discount:"",
//     customer_class_type:"",
//     tcs:""
// });
// const [updData,setUpdData] = useState([]);
//   const API_TOKEN = "engguergi09ertgiojg";

 
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`http://192.168.29.143:8004/customer_master_list?access_token=${TOKEN}`, {
//           headers: {
//             'Authorization': `${API_TOKEN}`,
//             'Content-Type': 'application/json'
//           }
//         });

//         console.log("Data fetched successfully:", response.data);

//         const result = response.data;

//         if (result.action === 'success') {
//           const apiData = result.data;

//           const fetchedColumns = [
//             { field: 'id', headerName: 'ID', width: 100 },
//             { field: 'customer_name', headerName: 'Customer Name', width: 210 },
//             { field: 'bussiness_name', headerName: 'Business Name', width: 210 },
//             { field: 'customer_code', headerName: 'Customer Code', width: 210 },
//             { field: 'contact_number', headerName: 'Contact Number', width: 210 },
//             { field: 'gst_no', headerName: 'GST No', width: 210 },
//             { field: 'trading_type', headerName: 'Trading Type', width: 210 },
//           ];

//           const fetchedRows = apiData.map((item, index) => ({
//             id: index,
//             customer_name: item.customer_name,
//             bussiness_name: item.bussiness_name,
//             customer_code: item.customer_code,
//             contact_number: item.contact_number,
//             gst_no: item.gst_no,
//             trading_type: item.trading_type,
//           }));

//           setColumns(fetchedColumns);
//           setRows(fetchedRows);
//         } else {
//           setError("There has been some error while fetching the data");
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError(`Error fetching data: ${error.message}`);
//       }
//     };

//     fetchData();
//   }, [TOKEN]);




//   // useEffect(() => {
//   //   const tokens = Cookies.get("Tokensss");
//   //   const getthis = { ...data, customer_name: "Shyam",access_token:tokens };
//   //   setData(getthis);
    
//   // }, []);
//   // console.log("This data is officially valid", data);


// // const handleChange = (e)=>{
// //   const {name,value} = e.target;
// //   setData((prevdata)=>(
// //     {
// //       ...prevdata,
// //       [name]:value,
// //     }
// //   ))
// // }
// const tokens = Cookies.get("Tokensss");

// useEffect(() => {
//   fetchData();
// }, [tokens]);


// const handleSubmitButton = async ()=>{
//   console.log("the data is",data);
//   const switchdata = JSON.stringify(data);
//   console.log(switchdata);
//   // setUpdData(switchdata);
//   // console.log("the updated data is",updData);
// try {
//   const response = await axios.post(`http://192.168.29.143:8004/customer_master`,{switchdata});
//   console.log("the response received is" ,response);
//   if (response.status === 200) {
//     fetchData();
//     handleCloseModal();
//   }
// } catch (error) {
//   console.error('Error posting data:', error);
// }

// }

// const handleChanges = (e) => {
//   const { name, value } = e.target;

//   data.access_token=tokens;

//   setData((prevState) => ({
//     ...prevState,
//     [name]: value,
//   }));
// };



//   const handleNext = () => {
//     setPage((prevPage) => Math.min(prevPage + 1, totalPages));
//   };

//   const handlePrev = () => {
//     setPage((prevPage) => Math.max(prevPage - 1, 1));
//   };

//   const handlePageChange = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handlePageSizeChange = (newPageSize) => {
//     setPageSize(newPageSize);
//   };



 
//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const filteredRows = rows.filter(row =>
//     Object.values(row).some(value =>
//       value.toString().toLowerCase().includes(searchQuery.toLowerCase())
//     )
//   );
//   console.log(filteredRows);

  

//   const handleOpenModal = () => {
//     setModalInfo({ show: true });
//   };

//   const handleCloseModal = () => {
//     setModalInfo({ show: false, recipient: '' });
//   };


//   const fruits = ["apple","Mango","guava"];

//   const trades = ["General Type","Reserved","Reserved Type"]

//   return (
//     <>
//       <div className='text-right mb-3 w-100 d-flex justify-content-between align-items-center input-div p-3'>
//           <div className='input-button '>
//             <button className=' text-light p-1 me-5 fs-6 d-flex align-items-center gap-1 justify-content-between' onClick={() => handleOpenModal()}><FaPlus />
//             Add New</button>
//           </div>
//           <div className='d-flex w-25 bg-light rounded justify-content-between p-2 align-items-center'>
//             <input
//               type="text"
//               className='w-50 rounded p-1'
//               placeholder='Search'
//               value={searchQuery}
//               onChange={handleSearch}
//             />
//             <CiSearch className='me-3 fs-5'/>
//           </div>
//       </div>
//       <div style={{ height: 400, width: '100%' }}>
//         {error && <div style={{ color: 'red' }}>Error: {error}</div>}
// <DataGrid
//           rows={filteredRows}
//           columns={columns}
//           disableColumnFilter
//           disableColumnMenu
//           pagination
//           pageSize={pageSize}
//           rowsPerPageOptions={[5, 10, 15,25]}
//           onPageChange={handlePageChange}
//           onPageSizeChange={(params) => handlePageSizeChange(params.pageSize)}
//           paginationMode="server"
//           rowCount={filteredRows.length}
//           page={page - 1}
//           className='data-grid-height'     />
//         <Stack spacing={2} className="stack-spacing">
//           <Pagination
//             count={Math.ceil(filteredRows.length / pageSize)}
//             page={page}
//             onChange={handlePageChange}
//             showFirstButton
//             showLastButton
//           />
//         </Stack>

        
        
//       </div>

//       <div>

//       {modalInfo.show && (
//         <div className="modal fade show d-block" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//           <div className="modal-dialog modal-boxx" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title" id="exampleModalLabel">Add Details</h5>
//                 <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
//               </div>
//               <div className="modal-body">
//                 <form>
//                   <div className="mb-3">
//                     <label htmlFor="recipient-name" className="col-form-label">Customer Name:</label>
//                     <input type="text" className="form-control h-25" id="customer_name" name="customer_name" value={data.customer_name} onChange={handleChanges}/>
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="recipient-name" className="col-form-label">Buisness Name:</label>
//                     <input type="text" className="form-control h-25" id="buissness_name" name="bussiness_name" value={data.bussiness_name} onChange={handleChanges}/>
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="recipient-name" className="col-form-label">Customer Code:</label>
//                     <input type="text" className="form-control h-25" id="customer_code" name='customer_code' value={data.customer_code} onChange={handleChanges}/>
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="recipient-name" className="col-form-label">Contact Number:</label>
//                     <input type="text" className="form-control h-25" id="contact_number" name='contact_number' value={data.contact_number} onChange={handleChanges}/>
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="recipient-name" className="col-form-label">GST No:</label>
//                     <input type="text" className="form-control h-25" id="gst_no" name="gst_no" value={data.ggst_no} />
//                   </div>
//                   <div className='d-flex justify-content-between '>
//                       <div className="mb-3">
//                         <label htmlFor="recipient-name" className="col-form-label me-2">Fruits: </label>
//                         <select name="selected fruit" id='selected fruit' className='border'>
//                           {
//                             fruits.map((fruit,index)=>(
//                               <option key={index} value={fruit}>
//                                 {fruit}
//                               </option>
//                             ))
//                           }
//                         </select>
//                         </div>

//                         <div className="mb-3">
//                         <label htmlFor="recipient-name" className="col-form-label me-2">Trading Type: </label>
//                         <select name="trading_type" id='trading_type' className='border'>
//                           {
//                             trades.map((trade,index)=>(
//                               <option key={index} value={trade} className='w-25'>
//                                 {trade}
//                               </option>
//                             ))
//                           }
//                         </select>
//                     </div>
                    
//                   </div>
//                 </form>
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn btn-danger" onClick={handleCloseModal}>Close</button>
//                 <button type="button" className="btn btn-primary" onClick={handleSubmitButton}>Save</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//       </div>
//     </>
//   );
// };

// export default DataTable;


"use client"

import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import Cookies from 'js-cookie';
import "bootstrap/dist/css/bootstrap.min.css";
import "./table.css";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const DataTable = () => {
  const TOKEN = Cookies.get('Tokensss');
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalInfo, setModalInfo] = useState({ show: false, recipient: '' });
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [data, setData] = useState({
    access_token: TOKEN,
    customer_name: "",
    customer_code: "",
    customer_typ: "",
    bussiness_name: "",
    contact_number: "",
    email_id: "",
    gst_no: "",
    trading_type: "",
    address: {
      flatStreet: "",
      state: "",
      district: "",
      pincode: ""
    },
    category_handler: {
      Demo: ""
    },
    divison_handler: {
      Demo: "",
      route: ""
    },
    route_details: {
      data_uniq_id: "",
      route: ""
    },
    sales_man: {
      Name: "",
      Mobile_number: ""
    },
    cash_discount: "",
    customer_class_type: "",
    tcs: ""
  });
  const [updData, setUpdData] = useState([]);
  const API_TOKEN = "engguergi09ertgiojg";

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://192.168.29.143:8004/customer_master_list?access_token=${TOKEN}`, {
        headers: {
          'Authorization': `${API_TOKEN}`,
          'Content-Type': 'application/json'
        }
      });

      console.log("Data fetched successfully:", response.data);

      const result = response.data;

      if (result.action === 'success') {
        const apiData = result.data;

        const fetchedColumns = [
          { field: 'id', headerName: 'ID', width: 100 },
          { field: 'customer_name', headerName: 'Customer Name', width: 210 },
          { field: 'bussiness_name', headerName: 'Business Name', width: 210 },
          { field: 'customer_code', headerName: 'Customer Code', width: 210 },
          { field: 'contact_number', headerName: 'Contact Number', width: 210 },
          { field: 'gst_no', headerName: 'GST No', width: 210 },
          { field: 'trading_type', headerName: 'Trading Type', width: 210 },
        ];

        const fetchedRows = apiData.map((item, index) => ({
          id: index,
          customer_name: item.customer_name,
          bussiness_name: item.bussiness_name,
          customer_code: item.customer_code,
          contact_number: item.contact_number,
          gst_no: item.gst_no,
          trading_type: item.trading_type,
        }));

        setColumns(fetchedColumns);
        setRows(fetchedRows);
      } else {
        setError("There has been some error while fetching the data");
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(`Error fetching data: ${error.message}`);
    }
  };

  useEffect(() => {
    if (TOKEN) {
      fetchData();
    }
  }, [TOKEN]);

  // const handleSubmitButton = async () => {
  //   console.log("the data is", data);
  //   const switchdata = JSON.stringify(data);
  //   console.log(switchdata);

  //   try {
  //     const response = await axios.post(`http://192.168.29.143:8004/customer_master`, { switchdata });
  //     console.log("the response received is", response);
  //     if (response.status === 200) {
  //       fetchData(); // Call fetchData after successful post
  //       setUpdData(switchdata);
  //       handleCloseModal();
  //     }
  //   } catch (error) {
  //     console.error('Error posting data:', error);
  //   }
  // };

  // const handleSubmitButton = async () => {
  //   console.log("the data is", data);
  //   const switchdata = JSON.stringify(data);
  //   console.log(switchdata);
  
  //   try {
  //     const response = await axios.post(`http://192.168.29.143:8004/customer_master`, { switchdata });
  //     console.log("the response received is", response);
  //     if (response.status === 200) {
  //       const newRow = { ...data, id: rows.length + 1 }; // create a new row with the posted data
  //       setRows([...rows, newRow]); // update the rows state with the new row
  //       setUpdData(switchdata);
  //       handleCloseModal();
  //     }
  //   } catch (error) {
  //     console.error('Error posting data:', error);
  //   }
  // };

  const handleSubmitButton = async () => {
    console.log("the data is", data);
    const jsonData = JSON.stringify(data);

    console.log(jsonData,'jsonData');
  
    try {
      const response = await axios.post(`http://192.168.29.143:8004/customer_master`, data, {
        headers: {
          'Authorization': `${API_TOKEN}`,
          'Content-Type': 'application/json'
        }
      });
      console.log("the response received is", response);
      if (response.status === 200) {
        fetchData(); // Call fetchData after successful post
        setUpdData(jsonData);
        handleCloseModal();
      }
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

//   const handleSubmitButton = async () => {
//   console.log("the data is", data);
//   const switchdata = JSON.stringify(data);
//   console.log(switchdata);

//   try {
//     const response = await axios.post(`http://192.168.29.143:8004/customer_master`, { switchdata });
//     console.log("the response received is", response);
//     if (response.status === 200) {
//       setTimeout(fetchData, 1000); // Delay fetchData to ensure backend updates
//       handleCloseModal();
//     }
//   } catch (error) {
//     console.error('Error posting data:', error);
//   }
// };


  // const handleChanges = (e) => {
  //   const { name, value } = e.target;
  //   const tokens = Cookies.get("Tokensss");

  //   setData((prevState) => ({
  //     ...prevState,
  //     access_token: tokens,
  //     [name]: value,
  //   }));
  // };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleNext = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrev = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handlePageSizeChange = (newPageSize) => {
    setPageSize(newPageSize);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRows = rows.filter(row =>
    Object.values(row).some(value =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  console.log(filteredRows);

  const handleOpenModal = () => {
    setModalInfo({ show: true });
  };

  const handleCloseModal = () => {
    setModalInfo({ show: false, recipient: '' });
  };

  const fruits = ["apple", "Mango", "guava"];
  const trades = ["General Type", "Reserved", "Reserved Type"];

  return (
    <>
      <div className='text-right mb-3 w-100 d-flex justify-content-between align-items-center input-div p-3'>
        <div className='input-button '>
          <button className='text-light p-1 me-5 fs-6 d-flex align-items-center gap-1 justify-content-between' onClick={handleOpenModal}><FaPlus /> Add New</button>
        </div>
        <div className='d-flex w-25 bg-light rounded justify-content-between p-2 align-items-center'>
          <input
            type="text"
            className='w-50 rounded p-1'
            placeholder='Search'
            value={searchQuery}
            onChange={handleSearch}
          />
          <CiSearch className='me-3 fs-5' />
        </div>
      </div>
      <div style={{ height: 400, width: '100%' }}>
        {error && <div style={{ color: 'red' }}>Error: {error}</div>}
        <DataGrid
          rows={filteredRows}
          columns={columns}
          disableColumnFilter
          disableColumnMenu
          pagination
          pageSize={pageSize}
          rowsPerPageOptions={[5, 10, 15, 25]}
          onPageChange={handlePageChange}
          onPageSizeChange={(params) => handlePageSizeChange(params.pageSize)}
          paginationMode="server"
          rowCount={filteredRows.length}
          page={page - 1}
          className='data-grid-height'
        />
        <Stack spacing={2} className="stack-spacing">
          <Pagination
            count={Math.ceil(filteredRows.length / pageSize)}
            page={page}
            onChange={handlePageChange}
            showFirstButton
            showLastButton
          />
        </Stack>
        {updData && <div>{updData}</div>}
      </div>

      <div>
        {modalInfo.show && (
          <div className="modal fade show d-block" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-boxx" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Add Details</h5>
                  <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="customer_name" className="col-form-label">Customer Name:</label>
                      <input type="text" className="form-control h-25" id="customer_name" name="customer_name" value={data.customer_name} onChange={handleChanges} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="bussiness_name" className="col-form-label">Business Name:</label>
                      <input type="text" className="form-control h-25" id="bussiness_name" name="bussiness_name" value={data.bussiness_name} onChange={handleChanges} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="customer_code" className="col-form-label">Customer Code:</label>
                      <input type="text" className="form-control h-25" id="customer_code" name='customer_code' value={data.customer_code} onChange={handleChanges} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="contact_number" className="col-form-label">Contact Number:</label>
                      <input type="text" className="form-control h-25" id="contact_number" name='contact_number' value={data.contact_number} onChange={handleChanges} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="gst_no" className="col-form-label">GST No:</label>
                      <input type="text" className="form-control h-25" id="gst_no" name="gst_no" value={data.gst_no} onChange={handleChanges} />
                    </div>
                    <div className='d-flex justify-content-between '>
                      <div className="mb-3">
                        <label htmlFor="selected_fruit" className="col-form-label me-2">Fruits:</label>
                        <select name="selected_fruit" id="selected_fruit" className='border'>
                          {fruits.map((fruit, index) => (
                            <option key={index} value={fruit}>
                              {fruit}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="trading_type" className="col-form-label me-2">Trading Type:</label>
                        <select name="trading_type" id="trading_type" className='border' value={data.trading_type} onChange={handleChanges}>
                          {trades.map((trade, index) => (
                            <option key={index} value={trade} className='w-25'>
                              {trade}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" onClick={handleCloseModal}>Close</button>
                  <button type="button" className="btn btn-primary" onClick={handleSubmitButton}>Save</button>
                </div>
              </div>
            </div>

            
          </div>
        )}
      </div>
    </>
  );
};

export default DataTable;


 