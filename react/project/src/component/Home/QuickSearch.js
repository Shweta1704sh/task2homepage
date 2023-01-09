import React,{Component} from 'react';
import './QuickSearch.css';

class QuickSearch extends Component{
    render(){
        return(
            <React.Fragment>
                <div id="demo" className='carousel slide' data-bs-ride="carousel">
                    <div className='carousel-indicators'>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    </div>
                    <div className='carousel-inner'>
                        <div className='carousel-item active'>
                            <img src="https://i.ibb.co/5YChZrQ/kristiana-pinne-ner3-QLDgo-OE-unsplash-1.jpg" alt="kristiana-pinne-ner3-QLDgo-OE-unsplash-1" id="banner"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.ibb.co/Tt2QG29/emma-gossett-GAHh-21d-Q-8-unsplash.jpg" alt="emma-gossett-GAHh-21d-Q-8-unsplash"  border="0" id="banner"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.ibb.co/5n7gwF7/vadim-kaipov-8-ZELrod-Sv-Tc-unsplash.jpg" alt="vadim-kaipov-8-ZELrod-Sv-Tc-unsplash" border="0" id="banner"/>
                        </div>
                    </div>
                    <button className='carousel-control-prev' type="button" data-bs-target="#demo" data-bs-slide="prev">
                        <span className='carousel-control-prev-icon'></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>
                
           </React.Fragment>
        )
    }
}
export default QuickSearch; 