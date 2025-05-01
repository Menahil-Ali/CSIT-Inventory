// import React from 'react';

// const RequestDetailsModal = ({ request, onClose }) => {
//   if (!request) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
//         <div className="p-6">
//           <div className="flex justify-between items-start mb-4">
//             <h3 className="text-xl font-semibold">Stock Request Details</h3>
//             <button
//               onClick={onClose}
//               className="text-gray-500 hover:text-gray-700"
//             >
//               ×
//             </button>
//           </div>
          
//           <div className="space-y-4">
//             <div>
//               <h4 className="text-sm font-medium text-gray-500">Item</h4>
//               <p className="mt-1 text-sm text-gray-900">{request.item}</p>
//             </div>
            
//             <div>
//               <h4 className="text-sm font-medium text-gray-500">Quantity</h4>
//               <p className="mt-1 text-sm text-gray-900">
//                 {request.approvedQuantity > 0 ? 
//                   `${request.approvedQuantity} (of ${request.requestedQuantity} requested)` : 
//                   request.requestedQuantity}
//               </p>
//             </div>
            
//             <div>
//               <h4 className="text-sm font-medium text-gray-500">From Location</h4>
//               <p className="mt-1 text-sm text-gray-900">{request.fromLocation}</p>
//             </div>
            
//             <div>
//               <h4 className="text-sm font-medium text-gray-500">Date</h4>
//               <p className="mt-1 text-sm text-gray-900">{request.date}</p>
//             </div>
            
//             <div>
//               <h4 className="text-sm font-medium text-gray-500">Reason</h4>
//               <p className="mt-1 text-sm text-gray-900">{request.reason}</p>
//             </div>
            
//             <div>
//               <h4 className="text-sm font-medium text-gray-500">Status</h4>
//               <p className="mt-1 text-sm font-semibold">
//                 <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                   request.status === 'Approved' ? 'bg-green-100 text-green-800' :
//                   request.status === 'Partially Approved' ? 'bg-blue-100 text-blue-800' :
//                   request.status === 'Rejected' ? 'bg-red-100 text-red-800' :
//                   'bg-yellow-100 text-yellow-800'
//                 }`}>
//                   {request.status}
//                 </span>
//               </p>
//             </div>
//           </div>
          
//           <div className="mt-6 flex justify-end">
//             <button
//               onClick={onClose}
//               className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RequestDetailsModal;
import React from 'react';

const RequestDetailsModal = ({ request, onClose }) => {
  if (!request) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold">Stock Request Details</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-500">Item</h4>
              <p className="mt-1 text-sm text-gray-900">{request.item}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-500">Requested Quantity</h4>
              <p className="mt-1 text-sm text-gray-900">{request.requestedQuantity}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-500">Approved Quantity</h4>
              <p className="mt-1 text-sm text-gray-900">
                {request.status === 'Pending' ? '-' : request.approvedQuantity}
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-500">From Location</h4>
              <p className="mt-1 text-sm text-gray-900">{request.fromLocation}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-500">Date</h4>
              <p className="mt-1 text-sm text-gray-900">{request.date}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-500">Reason</h4>
              <p className="mt-1 text-sm text-gray-900">{request.reason}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-500">Status</h4>
              <p className="mt-1 text-sm font-semibold">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  request.status === 'Approved' ? 'bg-green-100 text-green-800' :
                  request.status === 'Partially Approved' ? 'bg-blue-100 text-blue-800' :
                  request.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {request.status}
                </span>
              </p>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDetailsModal;
