import './style.scss'
const index = ({Icon, title, color}) => {

    return (
        <div className="inputOptions">
              <Icon style={{ color: color}} />
             <h5>{title}</h5>
        </div>
    )
}

export default index
