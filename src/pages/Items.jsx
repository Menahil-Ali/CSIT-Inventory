import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { FaEdit, FaTrash } from 'react-icons/fa';

const Items = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("name");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Mock data for categories (replace with API calls)
  const categories = [
    { id: 1, name: 'Consumable' },
    { id: 2, name: 'Deadstock' },
    { id: 3, name: 'Furniture and Fixtures' }
  ];

  // Fetch items from API
  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        // Mock data - replace with API call
        const mockData = [
          {
            id: 1,
            name: 'Microscope',
            description: 'Advanced lab microscope',
            categoryId: 3,
            quantity: 5
          },
          {
            id: 2,
            name: 'Printer Paper',
            description: 'A4 size printer paper',
            categoryId: 1,
            quantity: 50
          },
          {
            id: 3,
            name: 'Office Chair',
            description: 'Ergonomic office chair',
            categoryId: 3,
            quantity: 12
          },
          {
            id: 4,
            name: 'Old Computer',
            description: 'Dell Optiplex 3020',
            categoryId: 2,
            quantity: 8
          }
        ];
        setItems(mockData);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  // Filter items based on search and filters
  const filteredItems = items.filter((item) => {
    const matchesSearch = filterBy === "name" 
      ? item.name.toLowerCase().includes(searchTerm.toLowerCase())
      : item.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = categoryFilter === "all" 
      || item.categoryId.toString() === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredItems.length / rowsPerPage);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleAddItem = (newItem) => {
    if (editingItem) {
      // Update existing item
      setItems(
        items.map((i) =>
          i.id === editingItem.id ? { ...newItem, id: editingItem.id } : i
        )
      );
    } else {
      // Add new item
      const newItemWithId = {
        ...newItem,
        id: Math.max(...items.map((i) => i.id), 0) + 1,
      };
      setItems([...items, newItemWithId]);
    }
    setShowForm(false);
    setEditingItem(null);
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setItems(items.filter((i) => i.id !== id));
    }
  };

  const getCategoryName = (id) => {
    return categories.find(c => c.id === id)?.name || 'Unknown';
  };

  return (
    <>
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar title="Item Management" />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-semibold">
                  Manage inventory items
                </h3>
              </div>
              <button
                onClick={() => {
                  setEditingItem(null);
                  setShowForm(true);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
              >
                <span className="mr-2">+</span>
                Add New Item
              </button>
            </div>

            {/* Search and Filter Controls */}
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="flex border rounded-md overflow-hidden">
                    <select
                      value={filterBy}
                      onChange={(e) => {
                        setFilterBy(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="bg-gray-100 px-3 py-2 text-sm focus:outline-none"
                    >
                      <option value="name">By Name</option>
                      <option value="description">By Description</option>
                    </select>
                    <input
                      type="text"
                      placeholder={
                        filterBy === "name" 
                          ? "Search items by name..." 
                          : "Search items by description..."
                      }
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="flex-1 px-3 py-2 text-sm focus:outline-none"
                    />
                    
                  </div>
                 
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-0"></label>
                  <select
                    value={categoryFilter}
                    onChange={(e) => {
                      setCategoryFilter(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full border rounded px-3 py-2 text-sm"
                  >
                    <option value="all">All Categories</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  {filteredItems.length} items found
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
            </div>

            {loading ? (
              <div className="text-center py-8">Loading items...</div>
            ) : (
              <>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {paginatedItems.map((item) => (
                        <tr key={item.id}>
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                            {item.name}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {item.description}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {getCategoryName(item.categoryId)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.quantity}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button
                              onClick={() => handleEdit(item)}
                              className="text-blue-600 hover:text-blue-900 mr-3"
                            >
                              <FaEdit />
                              {/* Edit */}
                            
                            </button>
                            <button
                              onClick={() => handleDelete(item.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                            <FaTrash />
                              {/* Delete */}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination Controls */}
                {filteredItems.length > 0 && (
                  <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
                    <div className="text-sm text-gray-600">
                      Showing {(currentPage - 1) * rowsPerPage + 1} to{" "}
                      {Math.min(
                        currentPage * rowsPerPage,
                        filteredItems.length
                      )}{" "}
                      of {filteredItems.length} items
                    </div>

                    <div className="flex gap-1">
                      <button
                        onClick={() =>
                          setCurrentPage((p) => Math.max(p - 1, 1))
                        }
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

            {/* Add/Edit Item Form Modal */}
            {showForm && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">
                      {editingItem ? 'Edit Item' : 'Add New Item'}
                    </h3>
                    <button
                      onClick={() => {
                        setShowForm(false);
                        setEditingItem(null);
                      }}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      ✕
                    </button>
                  </div>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const newItem = {
                      name: formData.get('name'),
                      description: formData.get('description'),
                      categoryId: parseInt(formData.get('categoryId')),
                      quantity: parseInt(formData.get('quantity'))
                    };
                    handleAddItem(newItem);
                  }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Item Name*
                        </label>
                        <input
                          type="text"
                          name="name"
                          defaultValue={editingItem?.name || ''}
                          required
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Category*
                        </label>
                        <select
                          name="categoryId"
                          defaultValue={editingItem?.categoryId || ''}
                          required
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                          <option value="">Select Category</option>
                          {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Quantity*
                        </label>
                        <input
                          type="number"
                          name="quantity"
                          min="1"
                          defaultValue={editingItem?.quantity || 1}
                          required
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Description
                        </label>
                        <textarea
                          name="description"
                          defaultValue={editingItem?.description || ''}
                          rows="3"
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setShowForm(false);
                          setEditingItem(null);
                        }}
                        className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700"
                      >
                        {editingItem ? 'Update' : 'Save'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Items;