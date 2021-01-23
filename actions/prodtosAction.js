//Ação para adicionar um produto no carrinho de compras
export const Add = (produto) => (
  {
      type : 'ADD_PRODUTO', //nome da ACTION
      data : produto //dados da ACTION
  }
)

//Ação para remover um produto no carrinho de compras
export const Remove = (produto) => (
  {
      type : 'REMOVE_PRODUTO', //nome da ACTION
      data : produto //dados da ACTION
  }
)