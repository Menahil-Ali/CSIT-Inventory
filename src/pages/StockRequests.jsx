// import { useState, useEffect } from "react";
// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";
// import StockRequestTable from "../components/StockRequestTable";
// import RequestDetailsModal from "../components/RequestDetailsModal";
// import ModifyRequestModal from "../components/ModifyRequestModal";

// const StockRequests = () => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedRequest, setSelectedRequest] = useState(null);
//   const [showDetailsModal, setShowDetailsModal] = useState(false);
//   const [showModifyModal, setShowModifyModal] = useState(false);

//   // Mock data - replace with API calls
//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         setLoading(true);
//         const mockData = [
//           {
//             id: 1,
//             item: "Laptop Dell XPS",
//             category: "DSR",
//             requester: "John Doe",
//             requestedQuantity: 5,
//             approvedQuantity: 5,
//             date: "Aug 15, 2023",
//             status: "Approved",
//             fromLocation: "Main Warehouse",
//             reason: "New employees onboarding"
//           },
//           {
//             id: 2,
//             item: "Office Chair",
//             category: "FFR",
//             requester: "Jane Smith",
//             requestedQuantity: 10,
//             approvedQuantity: 8,
//             date: "Aug 20, 2023",
//             status: "Partially Approved",
//             fromLocation: "Storage Room",
//             reason: "Department expansion"
//           },
//           {
//             id: 3,
//             item: "Whiteboard",
//             category: "SFR",
//             requester: "Alex Johnson",
//             requestedQuantity: 2,
//             approvedQuantity: 0,
//             date: "Aug 22, 2023",
//             status: "Rejected",
//             fromLocation: "Main Warehouse",
//             reason: "Conference room setup"
//           },
//           {
//             id: 4,
//             item: "Monitors",
//             category: "DSR",
//             requester: "Sarah Williams",
//             requestedQuantity: 15,
//             approvedQuantity: 15,
//             date: "Aug 25, 2023",
//             status: "Pending",
//             fromLocation: "IT Department",
//             reason: "Workstation upgrades"
//           },
//           {
//             id: 5,
//             item: "Desk Lamps",
//             category: "FFR",
//             requester: "Michael Brown",
//             requestedQuantity: 8,
//             approvedQuantity: 8,
//             date: "Aug 28, 2023",
//             status: "Pending",
//             fromLocation: "Storage Room",
//             reason: "Office lighting improvements"
//           }
//         ];
//         setRequests(mockData);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchRequests();
//   }, []);

//   const filteredRequests = requests.filter(request => 
//     request.item.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     request.requester.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     request.category.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredRequests.length / rowsPerPage);
//   const paginatedRequests = filteredRequests.slice(
//     (currentPage - 1) * rowsPerPage,
//     currentPage * rowsPerPage
//   );

//   const handleViewDetails = (request) => {
//     setSelectedRequest(request);
//     setShowDetailsModal(true);
//   };

//   const handleModifyRequest = (request) => {
//     setSelectedRequest(request);
//     setShowModifyModal(true);
//   };

//   const handleStatusChange = (id, newStatus, approvedQty = null) => {
//     setRequests(requests.map(request => {
//       if (request.id === id) {
//         return {
//           ...request,
//           status: newStatus,
//           approvedQuantity: approvedQty !== null ? approvedQty : request.approvedQuantity
//         };
//       }
//       return request;
//     }));
//   };

//   return (
//     <div className="flex h-screen w-screen overflow-hidden">
//       <Sidebar />
//       <div className="flex-1 flex flex-col overflow-hidden">
//         <Navbar title="Stock Request Management" />
//         <main className="flex-1 overflow-y-auto p-6">
//           <div className="bg-white rounded-lg shadow p-6">
//             <div className="flex justify-between items-center mb-6">
//               <div>
//                 <h3 className="text-lg font-semibold">
//                   Manage stock requests and approvals
//                 </h3>
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 mb-6">
//               <div className="flex-1">
//                 <div className="flex border rounded-md overflow-hidden">
//                   <input
//                     type="text"
//                     placeholder="Search requests..."
//                     value={searchTerm}
//                     onChange={(e) => {
//                       setSearchTerm(e.target.value);
//                       setCurrentPage(1);
//                     }}
//                     className="flex-1 px-3 py-2 text-sm focus:outline-none"
//                   />
//                 </div>
//               </div>

//               <div className="flex items-center gap-2">
//                 <span className="text-sm text-gray-600">Show:</span>
//                 <select
//                   value={rowsPerPage}
//                   onChange={(e) => {
//                     setRowsPerPage(Number(e.target.value));
//                     setCurrentPage(1);
//                   }}
//                   className="border rounded px-3 py-2 text-sm"
//                 >
//                   {[5, 10, 20, 50].map((num) => (
//                     <option key={num} value={num}>
//                       {num}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             {loading ? (
//               <div className="text-center py-8">Loading requests...</div>
//             ) : (
//               <>
//                 <StockRequestTable
//                   requests={paginatedRequests}
//                   onViewDetails={handleViewDetails}
//                   onModifyRequest={handleModifyRequest}
//                   onStatusChange={handleStatusChange}
//                 />

//                 {filteredRequests.length > 0 && (
//                   <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
//                     <div className="text-sm text-gray-600">
//                       Showing {(currentPage - 1) * rowsPerPage + 1} to{" "}
//                       {Math.min(
//                         currentPage * rowsPerPage,
//                         filteredRequests.length
//                       )}{" "}
//                       of {filteredRequests.length} requests
//                     </div>

//                     <div className="flex gap-1">
//                       <button
//                         onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//                         disabled={currentPage === 1}
//                         className="px-3 py-1 border rounded disabled:opacity-50"
//                       >
//                         Previous
//                       </button>

//                       {Array.from({ length: Math.min(5, totalPages) }).map(
//                         (_, i) => {
//                           const page =
//                             currentPage <= 3
//                               ? i + 1
//                               : currentPage >= totalPages - 2
//                               ? totalPages - 4 + i
//                               : currentPage - 2 + i;
//                           return (
//                             <button
//                               key={page}
//                               onClick={() => setCurrentPage(page)}
//                               className={`px-3 py-1 border rounded ${
//                                 currentPage === page
//                                   ? "bg-blue-100 text-blue-700"
//                                   : ""
//                               }`}
//                             >
//                               {page}
//                             </button>
//                           );
//                         }
//                       )}

//                       <button
//                         onClick={() =>
//                           setCurrentPage((p) => Math.min(p + 1, totalPages))
//                         }
//                         disabled={currentPage === totalPages}
//                         className="px-3 py-1 border rounded disabled:opacity-50"
//                       >
//                         Next
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         </main>
//       </div>

//       {showDetailsModal && (
//         <RequestDetailsModal
//           request={selectedRequest}
//           onClose={() => setShowDetailsModal(false)}
//         />
//       )}

//       {showModifyModal && (
//         <ModifyRequestModal
//           request={selectedRequest}
//           onClose={() => setShowModifyModal(false)}
//           onApprove={(approvedQty) => {
//             handleStatusChange(selectedRequest.id, approvedQty === selectedRequest.requestedQuantity ? "Approved" : "Partially Approved", approvedQty);
//             setShowModifyModal(false);
//           }}
//           onReject={() => {
//             handleStatusChange(selectedRequest.id, "Rejected", 0);
//             setShowModifyModal(false);
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default StockRequests;
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StockRequestTable from "../components/StockRequestTable";
import RequestDetailsModal from "../components/RequestDetailsModal";
import ModifyRequestModal from "../components/ModifyRequestModal";

const StockRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showModifyModal, setShowModifyModal] = useState(false);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        setLoading(true);
        const mockData = [
          {
            id: 1,
            item: "Laptop Dell XPS",
            category: "DSR",
            requester: "Ahmed Raza",
            requestedQuantity: 5,
            approvedQuantity: 5,
            date: "Aug 15, 2023",
            status: "Approved",
            fromLocation: "Main Warehouse",
            reason: "New employees onboarding"
          },
          {
            id: 2,
            item: "Office Chair",
            category: "FFR",
            requester: "Fahad Ali",
            requestedQuantity: 10,
            approvedQuantity: 8,
            date: "Aug 20, 2023",
            status: "Partially Approved",
            fromLocation: "Storage Room",
            reason: "Department expansion"
          },
          {
            id: 3,
            item: "Whiteboard",
            category: "SFR",
            requester: "Hamza Khan",
            requestedQuantity: 2,
            approvedQuantity: 0,
            date: "Aug 22, 2023",
            status: "Rejected",
            fromLocation: "Main Warehouse",
            reason: "Conference room setup"
          },
          {
            id: 4,
            item: "Monitors",
            category: "DSR",
            requester: "Bilal Hussain",
            requestedQuantity: 15,
            approvedQuantity: null,
            date: "Aug 25, 2023",
            status: "Pending",
            fromLocation: "IT Department",
            reason: "Workstation upgrades"
          },
          {
            id: 5,
            item: "Desk Lamps",
            category: "FFR",
            requester: "Usman Tariq",
            requestedQuantity: 8,
            approvedQuantity: 4,
            date: "Aug 28, 2023",
            status: "Partially Approved",
            fromLocation: "Storage Room",
            reason: "Office lighting improvements"
          }
        ];
        setRequests(mockData);
      } finally {
        setLoading(false);
      }
    };
    fetchRequests();
  }, []);

  const filteredRequests = requests.filter(request => 
    request.item.toLowerCase().includes(searchTerm.toLowerCase()) ||
    request.requester.toLowerCase().includes(searchTerm.toLowerCase()) ||
    request.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredRequests.length / rowsPerPage);
  const paginatedRequests = filteredRequests.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleViewDetails = (request) => {
    setSelectedRequest(request);
    setShowDetailsModal(true);
  };

  const handleModifyRequest = (request) => {
    setSelectedRequest(request);
    setShowModifyModal(true);
  };

  const handleStatusChange = (id, newStatus, approvedQty) => {
    setRequests(requests.map(request => {
      if (request.id === id) {
        return {
          ...request,
          status: newStatus,
          approvedQuantity: approvedQty
        };
      }
      return request;
    }));
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar title="Stock Request Management" />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-semibold">
                  Manage stock requests and approvals
                </h3>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="flex border rounded-md overflow-hidden">
                  <input
                    type="text"
                    placeholder="Search requests..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="flex-1 px-3 py-2 text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Show:</span>
                <select
                  value={rowsPerPage}
                  onChange={(e) => {
                    setRowsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="border rounded px-3 py-2 text-sm"
                >
                  {[5, 10, 20, 50].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {loading ? (
              <div className="text-center py-8">Loading requests...</div>
            ) : (
              <>
                <StockRequestTable
                  requests={paginatedRequests}
                  onViewDetails={handleViewDetails}
                  onModifyRequest={handleModifyRequest}
                />

                {filteredRequests.length > 0 && (
                  <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
                    <div className="text-sm text-gray-600">
                      Showing {(currentPage - 1) * rowsPerPage + 1} to{" "}
                      {Math.min(
                        currentPage * rowsPerPage,
                        filteredRequests.length
                      )}{" "}
                      of {filteredRequests.length} requests
                    </div>

                    <div className="flex gap-1">
                      <button
                        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                      >
                        Previous
                      </button>

                      {Array.from({ length: Math.min(5, totalPages) }).map(
                        (_, i) => {
                          const page =
                            currentPage <= 3
                              ? i + 1
                              : currentPage >= totalPages - 2
                              ? totalPages - 4 + i
                              : currentPage - 2 + i;
                          return (
                            <button
                              key={page}
                              onClick={() => setCurrentPage(page)}
                              className={`px-3 py-1 border rounded ${
                                currentPage === page
                                  ? "bg-blue-100 text-blue-700"
                                  : ""
                              }`}
                            >
                              {page}
                            </button>
                          );
                        }
                      )}

                      <button
                        onClick={() =>
                          setCurrentPage((p) => Math.min(p + 1, totalPages))
                        }
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </main>
      </div>

      {showDetailsModal && (
        <RequestDetailsModal
          request={selectedRequest}
          onClose={() => setShowDetailsModal(false)}
        />
      )}

      {showModifyModal && (
        <ModifyRequestModal
          request={selectedRequest}
          onClose={() => setShowModifyModal(false)}
          onApprove={(approvedQty) => {
            const newStatus = approvedQty === selectedRequest.requestedQuantity 
              ? "Approved" 
              : "Partially Approved";
            handleStatusChange(selectedRequest.id, newStatus, approvedQty);
            setShowModifyModal(false);
          }}
          onReject={() => {
            handleStatusChange(selectedRequest.id, "Rejected", 0);
            setShowModifyModal(false);
          }}
        />
      )}
    </div>
  );
};

export default StockRequests;
