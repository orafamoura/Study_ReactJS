import './FormsText.css'

const FormsText = (props) => {
  return (
    <div className="text-forms">
      <label>{props.label}</label>
      <input required={props.obrigatorio} placeholder={props.placeholder}/>
    </div>
  )
}

export default FormsText