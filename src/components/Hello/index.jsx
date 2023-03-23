import './styles.css'

const Hello = ({ content, gender, children }) => {
  return <div className='title'>
    {content} - Gioi tinh: {gender}
    {children}
  </div>
}

export default Hello
