import React, { Component } from 'react';
import '../../styles/index.css';

class FooterExplore extends Component {
  render() {
    return (
      <div className="col-md-4">
                  	<h4>Explore</h4>
                  	<div className="col-md-6">
                          <ul className="pages">
                              <li><a data-toggle="modal" href="#" data-target="#myCarrier">Carrier</a></li>
                              <li><a href="#">Faq</a></li>
                              <li><a href="#">Advice</a></li>
                          </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="list">
                            <li><a data-toggle="modal" href="#" data-target="#myAbout">About Us</a></li>
                            <li><a data-toggle="modal" href="#" data-target="#myContact">Contacts</a></li>
                            <li><a href="#">Terms & Condition</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>




                    <div className="container">
                    <h2>Modal Example</h2>
                     <div className="modal fade" id="myCarrier" role="dialog">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Modal Header</h4>
                          </div>
                          <div className="modal-body">
                            <p>Join Oor campaign</p>
                          </div>
                          <div className="modal-footer">
                          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                   </div>



  <div className="modal fade" id="myContact" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">CONTACT</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          Kumaresh Das
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>



  <div className="modal fade" id="myAbout" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
           <div id="myModal" clasName="modal fade" role="dialog">
             <div className="modal-dialog">
               <div className="modal-content">
                 <div className="modal-header">
                 <button type="button" className="close" data-dismiss="modal">&times;</button>
                 <h4 className="modal-title">Blog</h4>
               </div>
                 <div className="modal-body">
                   <div className="form-group">
                   <label htmlFor="comment">Comment:</label>
                   <textarea className="form-control" rows="5" id="comment"></textarea>
                   </div>
                 </div>
                   <div className="modal-footer">
                     <button type="button" className="btn btn-default" data-dismiss="modal">Submit</button>
                   </div>
                 </div>
               </div>
             </div>
           </div>









  </div>




    );
  }
  }
  export default FooterExplore;
