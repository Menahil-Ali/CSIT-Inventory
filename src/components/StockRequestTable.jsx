// import React from 'react';
// import { FaEye, FaEdit, FaCheck, FaTimes } from 'react-icons/fa';

// const StockRequestTable = ({ requests, onViewDetails, onModifyRequest, onStatusChange }) => {
//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'Approved':
//         return 'bg-green-100 text-green-800';
//       case 'Partially Approved':
//         return 'bg-blue-100 text-blue-800';
//       case 'Rejected':
//         return 'bg-red-100 text-red-800';
//       case 'Pending':
//         return 'bg-yellow-100 text-yellow-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };

//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requester</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requested Qty</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Approved Qty</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {requests.map((request) => (
//             <tr key={request.id}>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.id}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{request.item}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.category}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.requester}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.requestedQuantity}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                 {request.approvedQuantity > 0 ? request.approvedQuantity : '-'}
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.date}</td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(request.status)}`}>
//                   {request.status}
//                 </span>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                 <div className="flex items-center space-x-2">
//                   <button
//                     onClick={() => onViewDetails(request)}
//                     className="text-blue-600 hover:text-blue-900"
//                     title="View Details"
//                   >
//                     <FaEye />
//                   </button>
                  
//                   {request.status === 'Pending' ? (
//                     <>
//                       <button
//                         onClick={() => onModifyRequest(request)}
//                         className="text-green-600 hover:text-green-900"
//                         title="Approve/Modify"
//                       >
//                         <FaEdit />
//                       </button>
//                     </>
//                   ) : (
//                     <span className="text-gray-400">
//                       {request.status === 'Approved' ? (
//                         <FaCheck className="text-green-500" />
//                       ) : request.status === 'Rejected' ? (
//                         <FaTimes className="text-red-500" />
//                       ) : null}
//                     </span>
//                   )}
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default StockRequestTable;

// import React from 'react';
// import { FaEye, FaEdit, FaCheck, FaTimes } from 'react-icons/fa';

// const StockRequestTable = ({ requests, onViewDetails, onModifyRequest, onStatusChange }) => {
//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'Approved':
//         return 'bg-green-100 text-green-800';
//       case 'Partially Approved':
//         return 'bg-blue-100 text-blue-800';
//       case 'Rejected':
//         return 'bg-red-100 text-red-800';
//       case 'Pending':
//         return 'bg-yellow-100 text-yellow-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };

//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requester</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requested Qty</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Approved Qty</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {requests.map((request) => (
//             <tr key={request.id}>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.id}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{request.item}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.category}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.requester}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.requestedQuantity}</td>
            
// <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//   {request.status === 'Pending' ? '-' : request.approvedQuantity}
// </td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.date}</td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(request.status)}`}>
//                   {request.status}
//                 </span>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                 <div className="flex items-center space-x-2">
//                   <button
//                     onClick={() => onViewDetails(request)}
//                     className="text-blue-600 hover:text-blue-900"
//                     title="View Details"
//                   >
//                     <FaEye />
//                   </button>
                  
//                   {request.status === 'Pending' ? (
//                     <button
//                       onClick={() => onModifyRequest(request)}
//                       className="text-green-600 hover:text-green-900"
//                       title="Approve/Modify"
//                     >
//                       <FaEdit />
//                     </button>
//                   ) : (
//                     <span className="text-gray-400">
//                       {request.status === 'Approved' ? (
//                         <FaCheck className="text-green-500" />
//                       ) : request.status === 'Rejected' ? (
//                         <FaTimes className="text-red-500" />
//                       ) : null}
//                     </span>
//                   )}
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default StockRequestTable;
import React from 'react';
import { FaEye, FaEdit, FaCheck, FaTimes } from 'react-icons/fa';

const StockRequestTable = ({ requests, onViewDetails, onModifyRequest }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-800';
      case 'Partially Approved':
        return 'bg-blue-100 text-blue-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requester</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requested Qty</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Approved Qty</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {requests.map((request) => (
            <tr key={request.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{request.item}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.category}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.requester}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.requestedQuantity}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {request.status === 'Pending' ? '-' : request.approvedQuantity}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(request.status)}`}>
                  {request.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onViewDetails(request)}
                    className="text-blue-600 hover:text-blue-900"
                    title="View Details"
                  >
                    <FaEye />
                  </button>
                  
                  {request.status === 'Pending' ? (
                    <button
                      onClick={() => onModifyRequest(request)}
                      className="text-green-600 hover:text-green-900"
                      title="Approve/Modify"
                    >
                      <FaEdit />
                    </button>
                  ) : (
                    <span className="text-gray-400">
                      {request.status === 'Approved' ? (
                        <FaCheck className="text-green-500" />
                      ) : request.status === 'Rejected' ? (
                        <FaTimes className="text-red-500" />
                      ) : null}
                    </span>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockRequestTable;
