import { Link } from 'react-router-dom';

const NotFound = () => {
    return(
        <div className ="mainbox">
        <div className ="err">4</div>
        <i className="far fa-question-circle fa-spin"></i>
        <div className="err2">4</div>
        <div className="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?
        </div>
        <Link to='/'>Back to the Homepage...</Link>
          </div>
       /* <div className= 'not-found' >
            <h2>Sorry 404 Error</h2>
            <p>That page cannot be found </p>
           
        </div>*/

    );
}

export default NotFound;