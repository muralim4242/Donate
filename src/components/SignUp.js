import React, { Component } from 'react';


class SignUp extends Component {
  render(){ return (
    <div id="myModal" class="modal fade" role="dialog">
    <div class="modal-dialog">
    <form>
    <label>First Name</label>
    <input type="text" name="firstname" className="span3">
    <label>Last Name</label>
    <input type="text" name="lastname" className="span3">
    <label>Email Address</label>
    <input type="email" name="email" className="span3">
    <label>Password</label>
    <input type="password" name="password" className="span3">
    <label>Email Address</label>
    <input type="email" name="email" className="span3">

    <label><input type="checkbox" name="terms"> I agree with the <a href="#">Terms and Conditions</a>.</label>
    <input type="submit" value="Sign up" className="btn btn-primary pull-right">
    <div className="clearfix"></div>
    </form>

    </div>
</div>);

    }

}
export default SignUp;