const Button = (props) => {

  let { children, className = 'bg-brand-red', type = 'button' } = props;

  return (
    <button className={`rounded px-3 py-2 tracking-wider uppercase font-semibold ${className}`} type={type}> {children} </button>
  )
}

export default Button;