import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './owl.css'; 
export class Owldemo1 extends Component {  
        render()  
        {  
          return (  
            <div id="tile">  
            <h3 id="promote">SPECIAL COMBO OF SPECIAL ONE</h3>              
            <OwlCarousel items={5} className="owl-theme"  
                loop
                nav
                margin={10} > 
                <div class="item" id="item">
                    <div id="DivImg">
                        <img src="https://i.ibb.co/n7qpHWb/21.jpg" alt="21" border="0"/>
                    </div>
                    <div id="DivDetail">
                        <a href="payment.js">Cake & Flower</a>
                        <h3>Rs.599/-</h3>
                        <button class="btn btn-info">BUY NOW</button>
                    </div>
                </div> 
                <div class="item" id="item">
                    <div id="DivImg">
                        <img src="https://i.ibb.co/bHQZtZR/Birthday-Hamper.jpg" alt="Birthday-Hamper" border="0"/>
                    </div>
                    <div id="DivDetail">
                        <a href="payment.js">A Perfect Hamper</a>
                        <h3>Rs.2199/-</h3>
                        <button class="btn btn-info">Buy Now</button>
                    </div>
                </div>
                <div class="item" id="item">
                    <div id="DivImg">
                        <img src="https://i.ibb.co/bPCk8Bh/Glass-vase-arrangement-of-Pink-Roses-N-Ferrero-Chocolate.jpg" alt="Glass-vase-arrangement-of-Pink-Roses-N-Ferrero-Chocolate" border="0"/>
                    </div>
                    <div id="DivDetail">
                        <a href="payment.js">Flower & Chocolate</a>
                        <h3>Rs.1499/-</h3>
                        <button class="btn btn-info">Buy Now</button>
                    </div>
                </div>
                <div class="item" id="item">
                    <div id="DivImg">
                        <img src="https://i.ibb.co/hWzCsY9/FINF.jpg" alt="FINF" border="0"/>
                    </div>
                    <div id="DivDetail">
                        <a href="payment.js">Flower &teddy</a>
                        <h3>Rs.1099/-</h3>
                        <button class="btn btn-info">Buy Now</button>
                    </div>
                </div>
                <div class="item" id="item">
                    <div id="DivImg">
                        <img src="https://i.ibb.co/RcD8DF0/mixrosesandchocolate.jpg" alt="mixrosesandchocolate" border="0"/>
                    </div>
                    <div id="DivDetail">
                        <a href="payment.js">Mix Chocolate</a>
                        <h3>Rs.699/-</h3>
                        <button class="btn btn-info">Buy Now</button>
                    </div>
                </div>
                <div class="item" id="item">
                    <div id="DivImg">
                        <img src="https://i.ibb.co/X4FYt3F/pw-12-RR-6inchtddy-16pcsferroro-0-5kg-CC.jpg" alt="pw-12-RR-6inchtddy-16pcsferroro-0-5kg-CC" border="0"/>
                    </div>
                    <div id="DivDetail">
                        <a href="payment.js">Premimum Combo</a>
                        <h3>Rs.2199/-</h3>
                        <button class="btn btn-info">Buy Now</button>
                    </div>
                </div>
                <div class="item" id="item">
                    <div id="DivImg">
                        <img src="https://i.ibb.co/b3zqxPc/sweet-kitkat-bouquet-1.webp" alt="sweet-kitkat-bouquet-1" border="0"/>
                    </div>
                    <div id="DivDetail">
                        <a href="payment.js">KitKat Combo</a>
                        <h3>Rs.1499/-</h3>
                        <button class="btn btn-info">Buy Now</button>
                    </div>
                </div>
                <div class="item" id="item">
                    <div id="DivImg">
                        <img src="https://i.ibb.co/mzY6PYL/two-storied-chocolate-treat-1.jpg" alt="two-storied-chocolate-treat-1" border="0"/>
                    </div>
                    <div id="DivDetail">
                        <a href="payment.js">Two layer Chocolate</a>
                        <h3>Rs.699/-</h3>       
                        <button class="btn btn-info">BUY NOW</button>
                    </div>
                </div>
                <div class="item" id="item">
                    <div id="DivImg">
                        <img src="https://i.ibb.co/P9XyRFD/chocolates-brownie-box-1.jpg" alt="chocolates-brownie-box-1" border="0"/>
                    </div>
                    <div id="DivDetail">
                        <a href="payment.js">Chocolate Brownie Box</a>
                        <h3>Rs.1399/-</h3>
                        <button class="btn btn-info">BUY NOW</button>
                    </div>
                </div>
                <div class="item" id="item">
                    <div id="DivImg">
                        <img src="https://i.ibb.co/Vw1FjN5/PHW-6-PO-12-PR-3-WR.jpg" alt="PHW-6-PO-12-PR-3-WR" border="0"/>
                    </div>
                    <div id="DivDetail">
                        <a href="payment.js">A Corporate Bouquet</a>
                        <h3>Rs.549/-</h3>
                        <button class="btn btn-info">BUY NOW</button>
                    </div>
                </div>
                <div class="item" id="item">
                    <div id="DivImg">
                        <img src="https://i.ibb.co/crx74P7/NP.jpg" alt="NP" border="0"/>
                    </div>
                    <div id="DivDetail">
                        <a href="payment.js">For Loved Ones</a>
                        <h3>Rs.959/-</h3>
                        <button class="btn btn-info">BUY NOW</button>
                    </div>
                </div>
                <div class="item" id="item">
                    <div id="DivImg">
                        <img src="https://i.ibb.co/H74Qt7Y/chocolate-heart-bouquet-1.jpg" alt="chocolate-heart-bouquet-1" border="0"/>
                    </div>
                    <div id="DivDetail">
                        <a href="payment.js">Heart Chocolate Bouquet</a>
                        <h3>Rs.999/-</h3>
                        <button class="btn btn-info">Buy Now</button>
                    </div>
                </div>
            </OwlCarousel>  
            </div>  
        )  
        }  
    }  
        
  
export default Owldemo1 