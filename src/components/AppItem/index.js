import './index.css'

const AppItem = props => {
  const {name, url} = props
  return (
    <div className="item">
      <img src={url} alt="" className="img" />
      <p>{name}</p>
    </div>
  )
}

export default AppItem
