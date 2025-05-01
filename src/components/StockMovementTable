

// import React from 'react';
// import { FaEye } from 'react-icons/fa';

// const StockMovementTable = ({ movements, onViewDetails }) => {
//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Received By</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {movements.map((movement) => (
//             <tr key={movement.id}>
//               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{movement.item}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{movement.from}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{movement.to}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{movement.quantity}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{movement.date}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{movement.receivedBy}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                 <button 
//                   onClick={() => onViewDetails(movement)}
//                   className="text-blue-600 hover:text-blue-900"
//                   title="View Details"
//                 >
//                   <FaEye />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default StockMovementTable;

import React from 'react';
import { FaEye } from 'react-icons/fa';

const StockMovementTable = ({ movements, onViewDetails }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Received By</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {movements.map((movement) => (
            <tr key={movement.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{movement.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{movement.item}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{movement.from}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{movement.to}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{movement.quantity}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{movement.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{movement.receivedBy}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button 
                  onClick={() => onViewDetails(movement)}
                  className="text-blue-600 hover:text-blue-900"
                  title="View Details"
                >
                  <FaEye />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockMovementTable;
