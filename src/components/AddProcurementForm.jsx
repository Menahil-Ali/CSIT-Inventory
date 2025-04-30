import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const AddProcurementForm = ({ onClose, onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    itemId: "",
    itemName: "",
    procurementType: "Purchase",
    supplier: "",
    quantity: "",
    unitPrice: "",
    procurementDate: "",
    notes: "",
    documentType: "",
    documentFile: null
  });

  const inventoryItems = [
    "Damaged Computer Monitor - Deadstock",
    "Obsolete CPUs - Deadstock",
    "Office Desk - Furniture & Fixture",
    "Executive Chair - Furniture & Fixture",
    "Conference Table - Furniture & Fixture",
    "Printer Paper - Consumable",
    "Ink Cartridges - Consumable",
    "Keyboard - Consumable",
    "Mouse - Consumable",
    "Filing Cabinet - Furniture & Fixture"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      documentFile: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const documentData = formData.documentFile ? {
      type: formData.documentFile.type.split('/')[1] || 'file',
      name: formData.documentFile.name,
      url: URL.createObjectURL(formData.documentFile)
    } : null;
    
    onSubmit({
      ...formData,
      document: documentData
    });
  };

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto py-8">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
        <div className="p-6 overflow-y-auto flex-1">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold">Add New Procurement</h3>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <FaTimes />
            </button>
          </div>
          
          <p className="text-gray-600 mb-6">Add a new procurement to your inventory</p>
          
          {/* Form Steps Navigation */}
          <div className="flex border-b mb-6">
            <button
              className={`px-4 py-2 font-medium ${currentStep === 1 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => setCurrentStep(1)}
            >
              Basic Info
            </button>
            <button
              className={`px-4 py-2 font-medium ${currentStep === 2 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => setCurrentStep(2)}
            >
              Additional Details
            </button>
            <button
              className={`px-4 py-2 font-medium ${currentStep === 3 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => setCurrentStep(3)}
            >
              Documentation
            </button>
          </div>
          
          <form onSubmit={handleSubmit}>
            {/* Step 1: Basic Info */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Item *</label>
                  <select
                    name="itemId"
                    value={formData.itemId}
                    onChange={(e) => {
                      const selectedItem = inventoryItems[e.target.value];
                      setFormData(prev => ({
                        ...prev,
                        itemId: e.target.value,
                        itemName: selectedItem || ""
                      }));
                    }}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select an item</option>
                    {inventoryItems.map((item, index) => (
                      <option key={index} value={index}>{item}</option>
                    ))}
                  </select>
                  <p className="text-xs text-gray-500 mt-1">Select an existing item from inventory</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Item ID *</label>
                  <input
                    type="text"
                    value={formData.itemId ? parseInt(formData.itemId) + 1 : ""}
                    readOnly
                    className="w-full px-3 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Item Name *</label>
                  <input
                    type="text"
                    name="itemName"
                    value={formData.itemName}
                    onChange={handleChange}
                    placeholder="Enter item name"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Procurement Type *</label>
                  <select
                    name="procurementType"
                    value={formData.procurementType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="Purchase">Purchase</option>
                    <option value="Donation">Donation</option>
                    <option value="Transfer">Transfer</option>
                  </select>
                  <p className="text-xs text-gray-500 mt-1">
                    How this item was procured (purchased, donated, or transferred).
                  </p>
                </div>
                
                <div className="flex justify-between mt-6">
                  <div></div>
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!formData.itemId || !formData.itemName || !formData.procurementType}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
            
            {/* Step 2: Additional Details */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Supplier / Source *</label>
                  <input
                    type="text"
                    name="supplier"
                    value={formData.supplier}
                    onChange={handleChange}
                    placeholder="Enter supplier or source"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    The organization or person who provided this item.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Quantity *</label>
                    <input
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      min="1"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Unit Price *</label>
                    <input
                      type="number"
                      name="unitPrice"
                      value={formData.unitPrice}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      min="0"
                      step="0.01"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Enter 0 for donations or internal transfers.
                    </p>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Procurement Date *</label>
                  <input
                    type="date"
                    name="procurementDate"
                    value={formData.procurementDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Enter additional notes about this procurement"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="3"
                  />
                </div>
                
                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!formData.supplier || !formData.quantity || !formData.unitPrice || !formData.procurementDate}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
            
            {/* Step 3: Documentation */}
            {currentStep === 3 && (
              <div className="space-y-4 pb-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Document Type</h3>
                  <p className="text-sm text-gray-600 mb-4">Type of document associated with this procurement.</p>
                  
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select document type</label>
                  <select
                    name="documentType"
                    value={formData.documentType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select document type</option>
                    <option value="purchase_order">Purchase Order</option>
                    <option value="donation_letter">Donation Letter</option>
                    <option value="internal_memo">Internal Memo</option>
                  </select>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-2">Upload Document</h3>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Click to upload</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      className="hidden"
                      id="documentUpload"
                    />
                    <label
                      htmlFor="documentUpload"
                      className="cursor-pointer block"
                    >
                      <p className="text-sm text-gray-600">Drag and drop files here or click to browse</p>
                      <p className="text-xs text-gray-500 mt-1">PDF, DOC, JPG or PNG (max. 5MB)</p>
                    </label>
                    {formData.documentFile && (
                      <p className="text-sm text-green-600 mt-2">
                        {formData.documentFile.name} selected
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="mt-6 border-t pt-4">
                  <h3 className="text-lg font-medium mb-2">Documentation Guidelines</h3>
                  <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                    <li>All procurements should have either a purchase order, donation letter, or internal memo.</li>
                    <li>For donated items, please upload the donor's letter or email.</li>
                    <li>Ensure all documentation is properly dated and authorized.</li>
                    <li>Sensitive information should be redacted before uploading.</li>
                  </ul>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Sticky footer buttons - only for documentation step */}
        {currentStep === 3 && (
          <div className="p-4 border-t bg-white sticky bottom-0">
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Back
              </button>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  form="procurementForm"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Add Procurement
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddProcurementForm;