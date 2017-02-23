import React, { Component } from 'react';
import logo4 from '../../images/logo4.png';
import '../../styles/App.css';


class Middle extends Component {
  render() {
    return (


<div id="exTab1" className="container">
<center>
<ul  className="nav nav-pills nav-justified">
			<li className="active">
        <a  href="#1a" data-toggle="tab">DOCTOR</a>
			</li>
			<li><a href="#2a" data-toggle="tab">SERVICES</a>
			</li>
			<li><a href="#3a" data-toggle="tab">DONER</a>
			</li>
		</ul>
</center>

<div className="tab-content clearfix">
		<div className="tab-pane active" id="1a">
        <div classNameName="container">
        <div className="col-md-6 col-md-offset-3">
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


<div className="tab-pane" id="2a">
  <div className="container">
    <div className="row">
      <div className="col-md-3" >
        <div className="input-group">
          <input name="search_param" value="all" id="search_param" type="hidden"/>
          <input className="form-control" name="x" placeholder="Search Here.." type="text"/>
        </div>
      </div>
          <div className="col-md-3" >
            <select className="form-control">
             <option value="0" selected="selected">Select Category</option>
             <option value="1">Hospiltal</option>
             <option value="2">Blood bank</option>
             <option value="3">lab</option>
             </select>
            </div>
            <div className="col-md-3" >
              <select className="form-control">
               <option value="0" selected="selected">Select Blood Group</option>
               <option value="1">A+</option>
               <option value="2">A-</option>
               <option value="3">B+</option>
               <option value="4">B-</option>
               <option value="5">O+</option>
               <option value="6">O-</option>
               <option value="7">AB</option>
              </select>
           </div>

              <span className="input-group-btn">
              <button className="btn btn-success" type="button"><span className="glyphicon glyphicon-search"></span>Search</button>
              </span>
              </div>
            </div>
          </div>





        <div className="tab-pane" id="3a">
        <div className="container">
        <div className="row">
          <div className="col-md-4" >
            <div className="input-group">
              <input name="search_param" value="all" id="search_param" type="hidden"/>
              <input className="form-control" name="x" placeholder="Search Here.." type="text"/>
            </div>
          </div>
          <div className="col-md-4" >
            <select className="form-control">
             <option value="0" selected="selected">Select Blood Group</option>
             <option value="1">A+</option>
             <option value="2">A-</option>
             <option value="3">B+</option>
             <option value="4">B-</option>
             <option value="5">O+</option>
             <option value="6">O-</option>
             <option value="7">AB</option>
            </select>
         </div>
          <div className="col-md-4" >
            <span className="input-group-btn">
            <button className="btn btn-success" type="button"><span className="glyphicon glyphicon-search"></span>Search</button>
            </span>
            </div>
          </div>
        </div>
      </div>
				</div>
			</div>


  );
  }
}

export default Middle;
