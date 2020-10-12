import React from 'react'
import { connect } from 'react-redux';

const Invoice = () => {
    return ( 
        <React.Fragment>
            <div class="card table-content-selected">
                <h4 class="card-title">Send Invoice to Your users</h4>

                <form class="d-block w-100 mt-4">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="company-name">Company Name</label>
                            <input type="text" class="form-control" id="company-name" placeholder="Getonnet Norge"/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="company-mail">Email</label>
                            <input type="email" class="form-control" id="company-mail" placeholder="email@domain.com"/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">Invoice Number</label>
                            <input type="text" class="form-control" id="inputEmail4" placeholder="01"/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="amount">Amount</label>
                            <input type="text" class="form-control" id="amount" placeholder="$350"/>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Sign in</button>
                </form>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
        
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Invoice);