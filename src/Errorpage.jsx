import React from 'react';
import { Link } from 'react-router-dom';
import './errorpage.scss';


class Errorpage extends React.Component{
    render(){
        return(
            <section className="err-page">
                <main className="page-not-found">
                    <h1>Page Not Found</h1>
                    <p>
                        <Link className="page-back" to="/">
                           <button className="pnf_btn0">return home</button>
                        </Link>
                    </p>
                </main>
            </section>
        ); 
    }
}
export default Errorpage;