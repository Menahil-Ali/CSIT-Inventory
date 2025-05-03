// import React, { useState } from 'react';

// const ModifyRequestModal = ({ request, onClose, onApprove, onReject }) => {
//   const [approvedQuantity, setApprovedQuantity] = useState(request.requestedQuantity);
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (approvedQuantity > 0) {
//       onApprove(approvedQuantity);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
//         <div className="p-6">
//           <div className="flex justify-between items-start mb-4">
//             <h3 className="text-xl font-semibold">Modify Request</h3>
//             <button
//               onClick={onClose}
//               className="text-gray-500 hover:text-gray-700"
//             >
//               ×
//             </button>
//           </div>
          
//           <div className="mb-4">
//             <p className="text-sm text-gray-600 mb-2">
//               <span className="font-medium">Item:</span> {request.item}
//             </p>
//             <p className="text-sm text-gray-600">
//               <span className="font-medium">Requested Quantity:</span> {request.requestedQuantity}
//             </p>
//           </div>
          
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="approvedQuantity" className="block text-sm font-medium text-gray-700 mb-1">
//                 Approved Quantity
//               </label>
//               <input
//                 type="number"
//                 id="approvedQuantity"
//                 min="0"
//                 max={request.requestedQuantity}
//                 value={approvedQuantity}
//                 onChange={(e) => setApprovedQuantity(parseInt(e.target.value) || 0)}
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
            
//             <div className="flex justify-between space-x-3 mt-6">
//               <button
//                 type="button"
//                 onClick={() => {
//                   onReject();
//                   onClose();
//                 }}
//                 className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
//               >
//                 Reject
//               </button>
              
//               <div className="flex space-x-3">
//                 <button
//                   type="button"
//                   onClick={onClose}
//                   className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//                 >
//                   Approve
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModifyRequestModal;
// import React, { useState } from 'react';

// const ModifyRequestModal = ({ request, onClose, onApprove, onReject }) => {
//   const [approvedQuantity, setApprovedQuantity] = useState(request.requestedQuantity);
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (approvedQuantity > 0) {
//       const newStatus = approvedQuantity === request.requestedQuantity ? 'Approved' : 'Partially Approved';
//       onApprove(newStatus, approvedQuantity);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
//         <div className="p-6">
//           <div className="flex justify-between items-start mb-4">
//             <h3 className="text-xl font-semibold">Modify Request</h3>
//             <button
//               onClick={onClose}
//               className="text-gray-500 hover:text-gray-700"
//             >
//               ×
//             </button>
//           </div>
          
//           <div className="mb-4">
//             <p className="text-sm text-gray-600 mb-2">
//               <span className="font-medium">Item:</span> {request.item}
//             </p>
//             <p className="text-sm text-gray-600">
//               <span className="font-medium">Requested Quantity:</span> {request.requestedQuantity}
//             </p>
//           </div>
          
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="approvedQuantity" className="block text-sm font-medium text-gray-700 mb-1">
//                 Approved Quantity
//               </label>
//               <input
//                 type="number"
//                 id="approvedQuantity"
//                 min="0"
//                 max={request.requestedQuantity}
//                 value={approvedQuantity}
//                 onChange={(e) => setApprovedQuantity(parseInt(e.target.value) || 0)}
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//               <p className="mt-1 text-xs text-gray-500">
//                 Enter 0 to reject the request
//               </p>
//             </div>
            
//             <div className="flex justify-between space-x-3 mt-6">
//               <button
//                 type="button"
//                 onClick={() => {
//                   onReject('Rejected', 0);
//                   onClose();
//                 }}
//                 className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
//               >
//                 Reject
//               </button>
              
//               <div className="flex space-x-3">
//                 <button
//                   type="button"
//                   onClick={onClose}
//                   className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//                 >
//                   Approve
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModifyRequestModal;
import React, { useState } from 'react';

const ModifyRequestModal = ({ request, onClose, onApprove, onReject }) => {
  const [approvedQuantity, setApprovedQuantity] = useState(request.requestedQuantity);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (approvedQuantity > 0) {
      onApprove(approvedQuantity);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold">Modify Request</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
          
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-medium">Item:</span> {request.item}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Requested Quantity:</span> {request.requestedQuantity}
            </p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="approvedQuantity" className="block text-sm font-medium text-gray-700 mb-1">
                Approved Quantity
              </label>
              <input
                type="number"
                id="approvedQuantity"
                min="0"
                max={request.requestedQuantity}
                value={approvedQuantity}
                onChange={(e) => setApprovedQuantity(parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <p className="mt-1 text-xs text-gray-500">
                Enter 0 to reject the request
              </p>
            </div>
            
            <div className="flex justify-between space-x-3 mt-6">
              <button
                type="button"
                onClick={() => {
                  onReject();
                  onClose();
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Reject
              </button>
              
              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Approve
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModifyRequestModal;
