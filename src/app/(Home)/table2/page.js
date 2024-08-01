// "use client";

// import React, { useState, useEffect } from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import "bootstrap/dist/css/bootstrap.min.css";
// import { CiSearch } from "react-icons/ci";
// import { FaPlus } from "react-icons/fa";
// import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
// import "../table/table.css";
// import AccountMenu from './toggle';

// const DataTable = () => {
//   const TOKEN = Cookies.get('Tokensss');
//   const [columns, setColumns] = useState([]);
//   const [rows, setRows] = useState([]);
//   const [error, setError] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [modalInfo, setModalInfo] = useState({ show: false, recipient: '' });
//   const [DeleteInfo, setDeleteInfo] = useState({ show: false, recipient: '' });
//   const [editInfo, setEditInfo] = useState(false);
//   const [page, setPage] = useState(2);
//   const [pageSize, setPageSize] = useState(5);
//   const [data, setData] = useState({
//     access_token: TOKEN,
//     customer_class: "",
//     data_uniq_id: ""
//   });
//   const [updData, setUpdData] = useState([]);
//   const API_TOKEN = "engguergi09ertgiojg";

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`http://192.168.29.143:8004/customer_class_master_list?access_token=${TOKEN}`, {
//         headers: {
//           'Authorization': `${API_TOKEN}`,
//           'Content-Type': 'application/json'
//         }
//       });

//       console.log("Data fetched successfully:", response.data);

//       const result = response.data;

//       if (result.action === 'success') {
//         const apiData = result.data;

//         const fetchedColumns = [
//           { field: 'data_uniq_id', headerName: 'Data Unique ID', width: 280 },
//           { field: 'active_status', headerName: 'Active Status', width: 280, renderCell: (params) => (
//             <button
//               style={{
//                 backgroundColor: params.value === 1 ? 'green' : 'lightcoral',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '5px',
//                 padding: '0 5px',
//                 cursor: 'pointer',
//                 width: "100px",
//                 margin: "0 10px"
//               }}
//             >
//               {params.value === 1 ? 'Active' : 'Inactive'}
//             </button>
//           ) },
//           { field: 'customer_class', headerName: 'Customer Class', width: 280 },
//           { field: 'created_f_date', headerName: 'Created F Date', width: 280 },
//           { field: 'account_menu', headerName: ' ', width: 150, renderCell: (params) => <AccountMenu handleEdit={() => handleEdit(params.row)} handleDelete={() => handleDelete(params.row)} /> },
//         ];

//         const fetchedRows = apiData.map(item => ({
//           id: item.id,
//           data_uniq_id: item.data_uniq_id,
//           active_status: item.active_status,
//           customer_class: item.customer_class,
//           created_f_date: item.created_f_date,
//         }));

//         setColumns(fetchedColumns);
//         setRows(fetchedRows);
//       } else {
//         setError("There has been some error while fetching the data");
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setError(`Error fetching data: ${error.message}`);
//     }
//   };

//   useEffect(() => {
//     if (TOKEN) {
//       fetchData();
//     }
//   }, [TOKEN, API_TOKEN]);

//   const handleSubmitButton = async () => {
//     const jsonData = {
//       access_token: TOKEN,
//       customer_class: data.customer_class,
//       data_uniq_id: data.data_uniq_id
//     };

//     try {
//       const response = await axios.post(`http://192.168.29.143:8004/customer_class_master`, jsonData, {
//         headers: {
//           'Authorization': `${API_TOKEN}`,
//           'Content-Type': 'application/json',
//         },
//       });
//       console.log("The response received is", response);
//       if (response.status === 200) {
//         fetchData();
//         setUpdData(JSON.stringify(jsonData));
//         handleCloseModal();
//       } else {
//         setError("Failed to post data");
//       }
//     } catch (error) {
//       console.error('Error posting data:', error);
//       setError(`Error posting data: ${error.message}`);
//     }
//   };

//   const handleEditButton = async () => {
//     const jsonData = {
//       access_token: TOKEN,
//       customer_class: data.customer_class,
//       data_uniq_id: data.data_uniq_id
//     };

//     try {
//       const response = await axios.put(`http://192.168.29.143:8004/customer_class_master`, jsonData, {
//         headers: {
//           'Authorization': `${API_TOKEN}`,
//           'Content-Type': 'application/json',
//         },
//       });
//       console.log("The response received is", response);
//       if (response.status === 200) {
//         fetchData();
//         setUpdData(JSON.stringify(jsonData));
//         handleCloseModal();
//       } else {
//         setError("Failed to update data");
//       }
//     } catch (error) {
//       console.error('Error updating data:', error);
//       setError(`Error updating data: ${error.message}`);
//     }
//   };

//   const handleChanges = (e) => {
//     const { name, value } = e.target;
//     setData((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const filteredRows = rows.filter(row =>
//     Object.values(row).some(value =>
//       value.toString().toLowerCase().includes(searchQuery.toLowerCase())
//     )
//   );

//   const handleOpenModal = () => {
//     setModalInfo({ show: true });
//     setEditInfo(false);
//   };

//   const handleCloseModal = () => {
//     setModalInfo({ show: false, recipient: '' });
//   };

//   const handleDeleteCloseModal = () => {
//     setDeleteInfo({ show: false, recipient: '' });
//   };

//   const handleEdit = (row) => {
//     setData({
//       access_token: TOKEN,
//       customer_class: row.customer_class,
//       data_uniq_id: row.data_uniq_id
//     });
//     setModalInfo({ show: true });
//     setEditInfo(true);
//   };

//   const handleDelete = (row) => {

//     console.log("the row contains",row);
//     setData({
//       access_token: TOKEN,
//       data_uniq_id: row.data_uniq_id
//     });
//     setDeleteInfo({ show: true });
//   };

//   const handleDeleteConfirm = async (row) => {
//     const jsonDatas = {
//         access_token: TOKEN,
//         table_name:"customer_class_master",
//         id_field:"data_uniq_id",
//         field_id: [row.data_uniq_id]
//     };

//     try {
//       const response = await axios.post(`http://192.168.29.143:8004/delete_data`,jsonDatas, {
//         headers: {
//           'Authorization': `${API_TOKEN}`,
//           'Content-Type': 'application/json',
//         },
//       });
//       console.log("The response received from this is", response);
//       if (response.status === 200) {
//         fetchData();
//         handleDeleteCloseModal();
//       } else {
//         setError("Failed to delete data");
//       }
//     } catch (error) {
//       console.error('Error deleting data:', error);
//       setError(`Error deleting data its taking too long to respond: ${error.message}`);
//     }
//   };

//   // const handleDeleteButton = async (row) => {
//   //   // const jsonData = {
//   //   //   access_token: TOKEN,
//   //   //   table_name: "customer_class_master",
//   //   //   id_field: "data_uniq_id",
//   //   //   field_id: [row.data_uniq_id],
//   //   // };
//   //   // console.log("the json data entered is ", jsonData);

//   //   try {
//   //     const response = await axios.post(`http://192.168.29.143:8004/delete_data`, {
//   //       headers: {
//   //         'Authorization': `${API_TOKEN}`,
//   //         'Content-Type': 'application/json',
//   //       },
//   //     });
//   //     console.log("Delete response received:", response);
//   //     if (response.status === 200) {
//   //       fetchData();
//   //       handleDeleteCloseModal();
//   //     } else {
//   //       setError("Failed to delete data");
//   //     }
//   //   } catch (error) {
//   //     console.error('Error deleting data:', error);
//   //     setError(`Error deleting data: ${error.message}`);
//   //   }
//   // }

//   const totalPages = Math.ceil(filteredRows.length / pageSize);

//   return (
//     <>
//       <div className='text-right mb-3 w-100 d-flex justify-content-between align-items-center input-div p-3'>
//         <div className='input-button '>
//           <button className='text-light p-1 me-5 fs-6 d-flex align-items-center gap-1 justify-content-between' onClick={handleOpenModal}><FaPlus /> Add New</button>
//         </div>
//         <div className='d-flex w-25 bg-light rounded justify-content-between p-2 align-items-center'>
//           <input
//             type="text"
//             className='w-50 rounded p-1'
//             placeholder='Search'
//             value={searchQuery}
//             onChange={handleSearch}
//           />
//           <CiSearch className='me-3 fs-5' />
//         </div>
//       </div>
//       <div style={{ height: 400, width: '100%' }}>
//         {error && <div style={{ color: 'red' }}>Error: {error}</div>}
//         <div style={{ height: "75vh", width: "100%" }} className='text-center d-flex justify-content-center'>
//           <DataGrid
//             rows={filteredRows}
//             columns={columns}
//             initialState={{
//               pagination: {
//                 paginationModel: { page: 0, pageSize: 5 },
//               },
//             }}
//             pageSizeOptions={[5, 10]}
//           />
//         </div>

//         {updData && <div>{updData}</div>}
//       </div>

//       <div>
//         {modalInfo.show && (
//           <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
//             <div className="modal-dialog">
//               <div className="modal-content">
//                 <div className="modal-header">
//                   <h5 className="modal-title">{editInfo ? 'Edit Customer Class' : 'Add Customer Class'}</h5>
//                   <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}></button>
//                 </div>
//                 <div className="modal-body">
//                   <form>
//                     <div className="mb-3">
//                       <label htmlFor="customer_class" className="form-label">Customer Class</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="customer_class"
//                         name="customer_class"
//                         value={data.customer_class}
//                         onChange={handleChanges}
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label htmlFor="data_uniq_id" className="form-label">Data Unique ID</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="data_uniq_id"
//                         name="data_uniq_id"
//                         value={data.data_uniq_id}
//                         onChange={handleChanges}
//                       />
//                     </div>
//                   </form>
//                 </div>
//                 <div className="modal-footer">
//                   <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
//                   <button type="button" className="btn btn-primary" onClick={editInfo ? handleEditButton : handleSubmitButton}>{editInfo ? 'Save changes' : 'Add'}</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <div>
//         {DeleteInfo.show && (
//           <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
//             <div className="modal-dialog">
//               <div className="modal-content">
//                 <div className="modal-header">
//                   <h5 className="modal-title">Confirm Deletion</h5>
//                   <button type="button" className="btn-close" aria-label="Close" onClick={handleDeleteCloseModal}></button>
//                 </div>
//                 <div className="modal-body">
//                   <p>Are you sure you want to delete this item?</p>
//                 </div>
//                 <div className="modal-footer">
//                   <button type="button" className="btn btn-secondary" onClick={handleDeleteCloseModal}>Close</button>
//                   <button type="button" className="btn btn-danger" onClick={handleDeleteConfirm}>Delete</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default DataTable;

"use client";

import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import Cookies from 'js-cookie';
import "bootstrap/dist/css/bootstrap.min.css";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "./table2.css";
import "../table/table.css"
import AccountMenu from './toggle';


const DataTable = () => {
  const TOKEN = Cookies.get('Tokensss');
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalInfo, setModalInfo] = useState({ show: false, recipient: '' });
  const [DeleteInfo, setDeleteInfo] = useState({ show: false, recipient: '' });
  const [editInfo, setEditInfo] = useState(false);
  const [data, setData] = useState({
    access_token: TOKEN,
    customer_class: "",
    data_uniq_id: ""
  });
  const [updData, setUpdData] = useState([]);
  const API_TOKEN = "engguergi09ertgiojg";

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://192.168.29.143:8004/customer_class_master_list?access_token=${TOKEN}`, {
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
          // { field: 'data_uniq_id', headerName: 'Data Unique ID', width: 280 },
          { field: 'customer_class', headerName: 'Customer Class', width: 220 },
          { field: 'active_status', headerName: 'Active Status', width: 220, renderCell: (params) => (
            <button
              style={{
                backgroundColor: params.value === 1 ? 'green' : 'lightcoral',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                padding: '0 5px',
                cursor: 'pointer',
                width: "100px",
                height:"30px",
                margin: "0 10px",
                textAlign:"center",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                alignSelf:"center",
                marginTop:"10px"
              }}
            >
              {params.value === 1 ? 'Active' : 'Inactive'}
            </button>
          ) },
          
          { field: 'created_f_date', headerName: 'Created F Date', width: 220 },
          { field: 'account_menu', headerName: ' ', width: 150, renderCell: (params) => <AccountMenu handleEdit={() => handleEdit(params.row)} handleDelete={() => handleDelete(params.row)} /> },
        ];

        const fetchedRows = apiData.map(item => ({
          id: item.id,
          data_uniq_id: item.data_uniq_id,
          active_status: item.active_status,
          customer_class: item.customer_class,
          created_f_date: item.created_f_date,
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
  }, [TOKEN, API_TOKEN]);

  const handleSubmitButton = async () => {
    const jsonData = {
      access_token: TOKEN,
      customer_class: data.customer_class,
      data_uniq_id: data.data_uniq_id
    };

    try {
      const response = await axios.post(`http://192.168.29.143:8004/customer_class_master`, jsonData, {
        headers: {
          'Authorization': `${API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });
      console.log("The response received is", response);
      if (response.status === 200) {
        fetchData();
        setUpdData(JSON.stringify(jsonData));
        handleCloseModal();
      } else {
        setError("Failed to post data");
      }
    } catch (error) {
      console.error('Error posting data:', error);
      setError(`Error posting data: ${error.message}`);
    }
  };

  const handleEditButton = async () => {
    const jsonData = {
      access_token: TOKEN,
      customer_class: data.customer_class,
      data_uniq_id: data.data_uniq_id
    };

    try {
      const response = await axios.put(`http://192.168.29.143:8004/customer_class_master`, jsonData, {
        headers: {
          'Authorization': `${API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });
      console.log("The response received is", response);
      if (response.status === 200) {
        fetchData();
        setUpdData(JSON.stringify(jsonData));
        handleCloseModal();
      } else {
        setError("Failed to update data");
      }
    } catch (error) {
      console.error('Error updating data:', error);
      setError(`Error updating data: ${error.message}`);
    }
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRows = rows.filter(row =>
    Object.values(row).some(value =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handleOpenModal = () => {
    setModalInfo({ show: true });
    setEditInfo(false);
  };

  const handleCloseModal = () => {
    setModalInfo({ show: false, recipient: '' });
  };

  const handleDeleteCloseModal = () => {
    setDeleteInfo({ show: false, recipient: '' });
  };

  const handleEdit = (row) => {
    setData({
      access_token: TOKEN,
      customer_class: row.customer_class,
      data_uniq_id: row.data_uniq_id
    });
    setModalInfo({ show: true });
    setEditInfo(true);
  };

  const handleDelete = (row) => {
    setData({
      access_token: TOKEN,
      data_uniq_id: row.data_uniq_id
    });
    setDeleteInfo({ show: true });
  };

  const handleDeleteConfirm = async () => {
    const jsonDatas = {
      access_token: TOKEN,
      table_name: "customer_class_master",
      id_field: "data_uniq_id",
      field_id: [data.data_uniq_id]
    };

    try {
      const response = await axios.post(`http://192.168.29.143:8004/delete_data`, jsonDatas, {
        headers: {
          'Authorization': `${API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });
      console.log("The response received from this is", response);
      if (response.status === 200) {
        fetchData();
        handleDeleteCloseModal();
      } else {
        setError("Failed to delete data");
      }
    } catch (error) {
      console.error('Error deleting data:', error);
      setError(`Error deleting data its taking too long to respond: ${error.message}`);
    }
  };

  const totalPages = Math.ceil(filteredRows.length / 5);

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
        <div className='w-100 d-flex justify-content-center'>
        <div style={{ height: "75vh", width: "60%" }} className='text-center d-flex justify-content-center'>
          <DataGrid
            rows={filteredRows}
            columns={columns}
            disableColumnFilter
            disableColumnMenu
            disableColumnSorting

            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          
          />
        </div>
        </div>
        {updData && <div>{updData}</div>}
      </div>

      <div>
        {modalInfo.show && (
          <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
            <div className="modal-dialog modal-boxx">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{editInfo ? 'Edit Customer Class' : 'Add Customer Class'}</h5>
                  <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="customer_class" className="form-label">Customer Class</label>
                      <input
                        type="text"
                        className="form-control"
                        id="customer_class"
                        name="customer_class"
                        value={data.customer_class}
                        onChange={handleChanges}
                      />
                    </div>
                    {editInfo && <div className="mb-3">
                      <label htmlFor="data_uniq_id" className="form-label">Data Unique ID</label>
                      <input
                        type="text"
                        className="form-control"
                        id="data_uniq_id"
                        name="data_uniq_id"
                        value={data.data_uniq_id}
                        onChange={handleChanges}
                      />
                    </div>}
                    
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                  <button type="button" className="btn btn-primary" onClick={editInfo ? handleEditButton : handleSubmitButton}>{editInfo ? 'Save changes' : 'Add'}</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        {DeleteInfo.show && (
          <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
            <div className="modal-dialog modal-boxx">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Confirm Deletion</h5>
                  <button type="button" className="btn-close" aria-label="Close" onClick={handleDeleteCloseModal}></button>
                </div>
                <div className="modal-body">
                  <p>Are you sure you want to delete this item?</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleDeleteCloseModal}>Close</button>
                  <button type="button" className="btn btn-danger" onClick={handleDeleteConfirm}>Delete</button>
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




