import './index.css'

const TabItem = props => {
  const {id, text, onChangeTabId} = props

  const onClickTabId = () => {
    onChangeTabId(id)
  }

  return (
    <div>
      <button type="button" className="text" onClick={onClickTabId}>
        {text}
      </button>
    </div>
  )
}

export default TabItem
