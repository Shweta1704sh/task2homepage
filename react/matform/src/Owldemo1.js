import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './owl.css';  
export class Owldemo1 extends Component {  
        render()  
        {  
          return (  
            <div>  
          <div class='container-fluid' >      
           <div className="row title" style={{marginBottom: "20px"}} >      
           <div class="col-sm-12 btn btn-info">      
           Owl Carousel In React Application   
           </div>      
           </div>  
       </div>  
       <div class='container-fluid' >            
        <OwlCarousel items={4} 
          className="owl-theme"  
          loop  
          nav  
          margin={8} >  
           <div ><img  className="img" src= {'assets/img/img1.jpg'}/></div>  
           <div><img  className="img" src= {'assets/img/img2.jpg'}/></div>  
           <div><img  className="img" src= {'assets/img/img4.jpg'}/></div>  
           <div><img  className="img" src= {'assets/img/img3.jpg'}/></div>  
           <div><img className="img" src= {'assets/img/img5.jpg'}/></div>  
           <div><img className="img" src= {'assets/img/img6.jpg'}/></div>  
           <div><img className="img" src= {'assets/img/img7.jpg'}/></div>  
      </OwlCarousel>  
      </div>  
  
      </div>  
          )  
        }  
      }  
        
  
export default Owldemo1 