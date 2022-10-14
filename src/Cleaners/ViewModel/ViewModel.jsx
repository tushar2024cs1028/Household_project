import React from "react";
import './ViewModel.css';
import image1 from "../../assests/sweepers.webp";
const ViewModel=()=>{
    function changeclass(){
        var z=document.getElementById('home');
        z.className="tab-pane fade show active";
        z.style.display="block";
        var y=document.getElementById('profile');
        y.className="tab-pane fade ";
        y.style.display="none";
        
    }
    function changeclass2(){
        var z=document.getElementById('profile');
        z.className="tab-pane fade show active";
        z.style.display="block";
        var x=document.getElementById('home');
        x.className="tab-pane fade "
        x.style.display="none";
        
    }
    return (
        <div>
            <div className="container emp-profile">
            <form method="">
                <div className="row">
                <div>
                     <button className="btns">x</button>
                </div>
                  <div className="col-md-4">
                    <div className="profile-img">
                    <img src={image1} alt=""></img>
                    </div>
                  </div>
                  <div className="col-md-8 ">
                   <div className="profile-head">
                     <h5>Tushar Sharma  </h5>
                     <h6>web Development </h6>
                     <p className="profile-rating mt-3 mb-5">Ranking<span>1/10</span></p>
                     <ul className="nav nav-tabs" rols="tablist">
                       <li className="nav-item">
                             <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" onClick={changeclass}>About</a>
                        </li>
                       <li className="nav-item">
                       <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" onClick={changeclass2}>Timeline</a>
                       </li>
                     </ul>
                   </div>
                  </div>
                   
                </div>
                
                 <div className="row" >
                        <div className="col-md-4">
                            <div className="profile-work">
                                 <p>Work Link</p>
                                 <a href="#!" target="_workspace">Instagram</a><br></br>
                                 <a href="#!" target="_workspace">Instagram</a><br></br>
                                 <a href="#!" target="_workspace">Instagram</a><br></br>
                                 <a href="#!" target="_workspace">Instagram</a><br></br>
                            </div>
                        </div>
                 {/* Right side data toggle*/}
                 <div className="col-md-8 pl-5 about-info">
                    <div className="tab-content profile-tab" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div className="row">
                               <div className="col-md-6">
                                <label>User ID</label> 
                               </div>
                               <div className="col-md-6">
                                <p>45u43532957934</p> 
                               </div>
                            </div>
                            <div className="row mt-3">
                               <div className="col-md-6">
                                <label>Name</label> 
                               </div>
                               <div className="col-md-6">
                                <p>Tushar Sharma</p> 
                               </div>
                            </div>
                            <div className="row mt-3">
                               <div className="col-md-6">
                                <label>Name</label> 
                               </div>
                               <div className="col-md-6">
                                <p>Tushar Sharma</p> 
                               </div>
                            </div>
                            <div className="row mt-3">
                               <div className="col-md-6">
                                <label>Name</label> 
                               </div>
                               <div className="col-md-6">
                                <p>Tushar Sharma</p> 
                               </div>
                            </div>
                            <div className="row mt-3">
                               <div className="col-md-6">
                                <label>Name</label> 
                               </div>
                               <div className="col-md-6">
                                <p>Tushar Sharma</p> 
                               </div>
                            </div>

                        </div>
                        <div className="tab-pane fade active "  id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div className="row">
                               <div className="col-md-6">
                                <label>Working</label> 
                               </div>
                               <div className="col-md-6">
                                <p>24 hours</p> 
                               </div>
                            </div>
                            <div className="row mt-3">
                               <div className="col-md-6">
                                <label>price</label> 
                               </div>
                               <div className="col-md-6">
                                <p>500</p> 
                               </div>
                            </div>
                            

                        </div>
                    </div>

                 </div>
                 </div>
            </form>
            </div>
        </div>
    );
}
export default ViewModel;