import React from 'react';

const MovementDetailsModal = ({ movement, onClose }) => {
  if (!movement) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold">Movement Details</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="text-sm font-medium text-gray-500">From</h4>
              <p className="mt-1 text-sm text-gray-900">{movement.from}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">To</h4>
              <p className="mt-1 text-sm text-gray-900">{movement.to}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-500">Item</h4>
              <p className="mt-1 text-sm text-gray-900">{movement.item}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-500">Quantity</h4>
              <p className="mt-1 text-sm text-gray-900">{movement.quantity}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-500">Date</h4>
              <p className="mt-1 text-sm text-gray-900">{movement.date}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-500">Received By</h4>
              <p className="mt-1 text-sm text-gray-900">{movement.receivedBy}</p>
            </div>
            
            {movement.notes && (
              <div>
                <h4 className="text-sm font-medium text-gray-500">Notes</h4>
                <p className="mt-1 text-sm text-gray-900">{movement.notes}</p>
              </div>
            )}
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

export default MovementDetailsModal;
