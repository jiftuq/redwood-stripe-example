import { Link, routes } from '@redwoodjs/router'
import Products from 'src/components/Admin/Products'

export const QUERY = gql`
  query PRODUCTS {
    products {
      id
      name
      description
      unitAmount
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'network-only' }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No products yet. '}
      <Link to={routes.adminNewProduct()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ products }) => {
  return <Products products={products} />
}
