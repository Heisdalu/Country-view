import './Error.css';
import lol from "../../assets/404Error-pana.svg";
import './Error.css'


const Error = () => {
    return (
      <div className='error_container'>
        <div className='error-image'>
          <img src={lol} alt="lol" />
        </div>
        <p className='error_text'>Oops... we can't find what you are looking for.</p>

      </div>
    );
}


export default Error;