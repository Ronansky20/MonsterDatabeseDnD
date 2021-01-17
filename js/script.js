import data from "/Users/Documents/workspace/test.json"

$('#table').bootstrapTable({
  url: 'PythonDnD/data/data.json',
  pagination: true,
  search: true,
  columns: [{
    field: 'id',
    title: 'Item ID'
  }, {
    field: 'name',
    title: 'Item Name'
  }, {
    field: 'price',
    title: 'Item Price'
  }]
})