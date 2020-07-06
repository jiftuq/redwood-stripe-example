import { Loader } from '../UI'

import { CartProduct } from './CartProduct'

export const QUERY = gql`
  query FIND_PRODUCT_BY_ID($id: String!) {
    product: product(id: $id) {
      id
      name
      description
      unitAmount
      images
    }
  }
`

export const Loading = () => <Loader inline={true} />

export const Empty = () => <div>Product not found</div>

export const Success = ({ product }) => {
  return <CartProduct product={product} />
}
