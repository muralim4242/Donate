import React, { Component } from 'react';
import '../../styles/App.css';
import { Link } from 'react-router';



class HeaderRight extends Component {

  render() {
    return (

      <div>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#" data-toggle="modal" data-target="#myModal"> <span className="glyphicon"></span>BLOG</a></li>
          <li><a href="#" data-toggle="modal" data-target="#myModal_faq"> <span className="glyphicon"></span>FAQ</a></li>
          <li><a href="#" data-toggle="modal" data-target="#myModal_contact"> <span className="glyphicon"></span>CONTACT</a></li>
          <li><a href="#" data-toggle="modal" data-target="#myModal_login"><span className="glyphicon glyphicon-user"></span>LOGIN</a></li>
        </ul>



        <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
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






























        <div className="modal fade" id="myModal_faq" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div id="myModal" clasName="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">FAQ</h4>
                </div>
                  <div className="modal-body">
                  <div className="form-group">
                  <label>Have a Question? </label>
                  <p> You Have any question you can ask below or enter what are you looking for!</p>

                  </div>
                  </div>
                  <div className="modal-footer">
                  <div className="col-sm-12 col-md-offset--3">
                    <div className="row">
                    <form role="form" id="form-buscar">
                      <div className="form-group">
                        <div className="input-group">
                        <input id="1" className="form-control" type="text" name="search" placeholder="Search..." />
                        <span className="input-group-btn">
                        <button className="btn btn-success" type="submit"><i className="glyphicon glyphicon-search" aria-hidden="true"></i> Search</button>
                        </span>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
          </div>
        </div>
        </div>
        </div>
        </div>




        <div className="modal fade" id="myModal_contact" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div id="myModal" clasName="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Contact Details</h4>
              </div>
                <div className="modal-body">
                <p>Saurabh verma, Bellandur sarajapur road, Bangalore</p>
                <p>Contact no:-7411227513</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      </div>
      </div>
      </div>
























<div className="modal fade" id="myModal_login" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
      <button type="button" className="close" data-dismiss="modal">&times;</button>
        <h4 className="modal-title" id="myModalLabel">LogIn</h4>

      </div>
        <div className="col-lg-12 well">
          <div className="row">
            <form>
                <div className="modal-body">
                <div className="col-lg-12">
                <label htmlFor="email">Email address:</label>
                <input type="email"placeholder="Enter Email Here" className="form-control" id="email"required/>
             </div>
                <div className="htmlForm-group">
                <label htmlFor="pwd">Password:</label>
                <input type="password" placeholder="Enter Password Here" className="form-control" id="pwd"required/>
             </div>
                <div className="checkbox">
                <label><input type="checkbox"/> Remember me</label>
             </div>
                <button type="submit" className="btn btn-info">Submit</button>
             </div>
                 <div className="modal-footer">
                 <input type="button" value="Sign In with Facebook" className="btn btn-default sign-in-facebook"  />
                   <p>Not a member? <a href="#" data-toggle="modal" data-target="#myModal_signup"><span className="glyphicon"></span>Sign Up</a></p>
                   <p>Forgot <a href="#" data-toggle="modal" data-target="#myModal_password"><span className="glyphicon"></span>Password?</a></p>
               </div>
             </form>
           </div>
         </div>

        </div>
      </div>
    </div>


  <div className="modal fade" id="myModal_signup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div id="myModal" clasName="modal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            <h4 className="modal-title">SignUp</h4>
          </div>
    <div className="col-lg-12 well">
  	   <div className="row">
        <form>
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-6 form-group">
                <label>First Name</label>
                <input type="text" placeholder="Enter First Name Here.." className="form-control"required/>
              </div>
              <div className="col-sm-6 form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Enter Last Name Here.." className="form-control"required/>
              </div>
            </div>
        <div className="form-group">
          <label>Address</label>
          <textarea placeholder="Enter Address Here.." rows="3" className="form-control"required></textarea>
        </div>
        <div className="row">
          <div className="col-sm-4 form-group">
            <label>City</label>
            <input type="text" placeholder="Enter City Name Here.." className="form-control"required/>
          </div>
          <div className="col-sm-4 form-group">
            <label>State</label>
            <input type="text" placeholder="Enter State Name Here.." className="form-control"required/>
          </div>
          <div className="col-sm-4 form-group">
            <label>Zip</label>
            <input type="text" placeholder="Enter Zip Code Here.." className="form-control"required/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 form-group">
            <label>Phone Number</label>
            <input type="text" placeholder="Enter Phone Number Here.." className="form-control"required/>
          </div>
          <div className="col-sm-6 form-group">
            <label>Email Address</label>
            <input type="text" placeholder="Enter Email Address Here.." className="form-control"required/>
          </div>
          </div>
          <div className="row">
          <div className="col-sm-6 form-group">
          <label>Age</label>
          <input type="Number" placeholder="Enter Age Here.." className="form-control"required/>
        </div>
        <div className="col-sm-6 form-group">
            <div className="form-group">
            <label htmlFor="sel1">Gender:</label>
              <select classname="form-control" id="sel1">
              <option>select</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
      </div>
    </div>
      <div className="row">
        <div className="col-sm-6 form-group">
        <label>Blood Group</label>
        <input type="text" placeholder="Enter Blood Group Here.." className="form-control"required/>
      </div>
        <div className="col-sm-6 form-group">
          <label>Diseases</label>
            <input type="text" placeholder="Enter Diseases Here.." className="form-control"required/>
          </div>
      </div>
          <button type="button" className="btn btn-lg btn-info">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>





<div className="modal fade" id="myModal_password" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
      <button type="button" className="close" data-dismiss="modal">&times;</button>
        <h4 className="modal-title">Change Password</h4>
        </div>
         <div className="col-lg-12 well">
          <div className="row">
             <form>
              <div className="modal-body">
                <div className="col-lg-12">
                  <label htmlFor="Name">Name:</label>
                  <input type="text" placeholder="Enter Name Here"className="form-control" id="name"required/>
                  <label htmlFor="email">Email address:</label>
                  <input type="email" placeholder="Enter Email Here" className="form-control" id="email"required/>
                </div>
                <div className="form-group">
                    <label htmlFor="pwd"> New Password:</label>
                    <input type="password" placeholder="Enter New Password Here" className="form-control" id="pwd"required/>
                </div>
              </div>
        <div className="modal-footer">
        <button type="submit" className="btn btn-info">Submit</button>
      </div>

  </form>
</div>
</div>
</div>
</div>

</div>


</div>








    );
  }
}
export default HeaderRight;
