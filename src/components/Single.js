import React from 'react';

const Single=({item,deleteData}) =>{
    return(
        <li className="col s12 l3 m6">
            <div className='card'>
                <div className="card-image">
                    <img src="./portrait.jpg" alt={item.title}/>
                    <span className="card-title"> {item.prenom} {item.nom}</span>
                </div>
                <div className="card-content">
                    <div className="card-title left">
                        {item.email}
                    </div>
                    <div className="row">
                        <div className="col s12 m-0 ">
                            <blockquote><h5>{item.notes}</h5></blockquote>
                        </div>
                    </div>
                </div>
                <div className="card-action">
                    <button   className="btn wave-effect waves-light red darken-2"> Supprimer </button> 
                </div>
            </div>
        </li>
    )
}
export default Single;