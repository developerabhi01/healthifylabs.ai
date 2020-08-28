import React, { Component } from "react";
import { useQuery, useMutation } from '@apollo/react-hooks';
import data from "../../../data/test.json";
import dataObj from "../../../data/test_expectedAddressJso.json";
import gql from "graphql-tag";

var addressArray = data.addresses;

export const GET_COMPANY = gql`
{
  getCompany{
    companyid,
    companyname,
    address1,
    createdate,
    timestamp,
    state
  }
}
`;

export const CREATE_COMPANY = gql`
mutation createCompany($text: String!, $text2: String,$gstin: String,$category: String!, $noofuser: String,$websitelink: String!, $regdate: String, $mobileno: String,$altmobileno: String!, $emailid: String,$altemailid: String!, $address1: String,$address2: String!, $country: String,$city: String!, $pincode: String
  ) {
  createCompany(companyname: $text, state: $text2,GSTnumber: $gstin,category: $category, numberofuser: $noofuser,websitelink: $websitelink, registrationdate: $regdate, mobile1: $mobileno,mobile2: $altmobileno, email1: $emailid,email2: $altemailid, address1: $address1,address2: $address2, country: $country,city: $city, PIN: $pincode
  )
}
`;

export const UPDATE_COMPANY = gql`
mutation updateCompany($companyid: Int!, $text: String!, $text2: String,$gstin: String,$category: String!, $noofuser: String,$websitelink: String!, $regdate: String, $mobileno: String,$altmobileno: String!, $emailid: String,$altemailid: String!, $address1: String,$address2: String!, $country: String,$city: String!, $pincode: String
  ) {
  updateCompany(companyid: $companyid,companyname: $text, state: $text2,GSTnumber: $gstin,category: $category, numberofuser: $noofuser,websitelink: $websitelink, registrationdate: $regdate, mobile1: $mobileno,mobile2: $altmobileno, email1: $emailid,email2: $altemailid, address1: $address1,address2: $address2, country: $country,city: $city, PIN: $pincode
  )
}
`;

// export const UPDATE_COMPANY = gql`
// mutation updateCompany($companyname2: String!, $category2: String! ){
//   updateCompany(
//     companyid: "7", 
//     companyname: $companyname2,
//     category2: $category2
//   )
// }
// `;

export const LOGIN_USER = gql`
  mutation login($email: String!) {
    login(email: $email)
  }
`;



const CompanyView = (props) =>  {

  // console.log(props.data)
  let input,input2,companyplace,companyid,gstin,category,noofuser,websitelink,regdate,companysname,mobileno,altmobileno,emailid,altemailid,address1,address2,country,city,pincode;

  let companynameU,companyidU,companyplaceU,gstinU,categoryU,noofuserU,websitelinkU,regdateU,companysnameU,mobilenoU,altmobilenoU,emailidU,altemailidU,address1U,address2U,countryU,cityU,pincodeU,stateU,inputU,input2U;

  const [createCompany] = useMutation(CREATE_COMPANY);
  const [updateCompany] = useMutation(UPDATE_COMPANY);

  const { data, loading, error } = useQuery(GET_COMPANY);
  if (loading) return <p>loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  let data1 = data.getCompany


  // clickMe(index, address) {
  //   this.setState({ address: address });
  //   console.log(this.state.address);
  // }


  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   this.state.address.firstName = event.target.firstName.value;
  //   this.state.address.lastName = event.target.lastName.value;
  //   this.state.address.countryName = event.target.countryName.value;
  //   this.state.address.locality = event.target.locality.value;
  //   this.state.address.streetAddress = event.target.streetAddress.value;
  //   this.state.address.postalCode = event.target.postalCode.value;
  //   this.setState({
  //     address: this.state.address,
  //   });
  //   this.state.elements = "modal";
  //   this.setState({
  //     firstName: event.target.firstName.value,
  //   });
  //   this.setState({
  //     address: this.state.address,
  //   })
  //   console.log(this.state.address+event.target.firstName.value);
  //   window.$("#editEmployeeModal").modal("hide");
  // };


  // handleAddSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(this.state.addressArray);
  //   this.state.dataObj.firstName = event.target.firstName.value;
  //   this.state.dataObj.lastName = event.target.lastName.value;
  //   this.state.dataObj.countryName = event.target.countryName.value;
  //   this.state.dataObj.locality = event.target.locality.value;
  //   this.state.dataObj.streetAddress = event.target.streetAddress.value;
  //   this.state.dataObj.postalCode = event.target.postalCode.value;
  //   this.setState({
  //     dataObj: dataObj,
  //   });
  //   this.setState({
  //     addressArray: addressArray.concat([this.state.dataObj]),
  //   });
  //   this.state.addressArray.push(this.state.dataObj);
  //   this.state.addDismiss = "modal";
  //   window.$("#addEmployeeModal").modal("hide");
  // };


    const fields = ['companyid','companyname','address1', 'createdate', 'timestamp']
    console.log("log")

    return (
      <div className="section">
        <div id="container" className="container">
          <div className="border-card">
            <div className="table-wrapper table-responsive">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-10">
                   </div>
                  <div className="col-sm-2">
                    <button
                      type="button"
                      href="#addEmployeeModal"
                      data-toggle="modal"
                      className="btn btn-info add-new"
                    >
                      <i className="fa fa-plus"></i> Add New
                    </button>
                  </div>
                </div>
              </div>
              <table
                className="table table-hover"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <thead>
                    <th scope="col">Company Id</th>
                    <th scope="col">Company Name</th>
                    <th scope="col">Adress1</th>
                    <th scope="col">Createdate</th>
                    <th scope="col">Timestamp</th>
                    {/* <th scope="col">Edit</th> */}
                </thead>
                <tbody>
                  {props.data.map((address, index) => {
                    const tr = "tr" + index;
                    return (
                      <tr >
                        <td> <a
                            href="#editEmployeeModal"
                            data-toggle="modal"
                            className="edit"
                            title="Edit"
                          >
                            {address.companyid}
                          </a></td>
                        <td> <a
                            href="#editEmployeeModal"
                            data-toggle="modal"
                            className="edit"
                            title="Edit"
                          >
                            {address.companyname}
                          </a>
                        </td>
                        <td><a
                            href="#editEmployeeModal"
                            data-toggle="modal"
                            className="edit"
                            title="Edit"
                          >
                            {address.address1}
                          </a></td>
                        <td><a
                            href="#editEmployeeModal"
                            data-toggle="modal"
                            className="edit"
                            title="Edit"
                          >
                            {address.createdate}
                          </a></td>
                        <td><a
                            href="#editEmployeeModal"
                            data-toggle="modal"
                            className="edit"
                            title="Edit"
                          >
                            {address.timestamp}
                          </a></td>
                        {/* <td >
                          <a
                            href="#editEmployeeModal"
                            data-toggle="modal"
                            className="edit"
                            title="Edit"
                          >
                            <i className="material-icons"></i>
                          </a>
                        </td> */}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>




          {/* <!-- Add Modal HTML --> */}
          <div id="addEmployeeModal" className="modal fade">
            <div className="modal-dialog">
              <div className="modal-content">

              <form onSubmit={e => {
                    e.preventDefault();
                    createCompany({ variables: { text: input.value,text2: input2.value,category: category.value, gstin: gstin.value, noofuser: noofuser.value, websitelink: websitelink.value, regdate: regdate.value, mobileno: mobileno.value, altmobileno: altmobileno.value, emailid: emailid.value, altemailid: altemailid.value, address1: address1.value, address2: address2.value, country: country.value, city: city.value, pincode: pincode.value
                    } });
                    input.value = '';
                    input2.value = '';
                    companyplace='';
                    window.location.reload();
                  }}>
                    <div className="modal-header">
                      <h4 className="modal-title">Add Company</h4>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-hidden="true"
                      >
                      &times;
                      </button>
                    </div>
                    <div className="modal-body">   
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Company" 
                          required
                          ref={node => { input = node; }}
                        ></input>
                      </div>
                      <div className="form-group">
                      <input className="form-control" required type="date" placeholder="Enter Reg Date" ref={node => { regdate = node; }}></input>
                      </div>
                      <div className="form-group">
                      <input className="form-control" type="text" placeholder="Enter Category" ref={node => { category = node; }}></input>
                      </div>
                      <div className="form-group">
                      <input className="form-control" type="text" placeholder="Enter GSTIN" ref={node => { gstin = node; }}></input>
                      </div>
                      <div className="form-group">
                      <input className="form-control" type="number" placeholder="Enter No of User" ref={node => { noofuser = node; }}></input>
                      </div>
                      <div className="form-group">
                      <input className="form-control" type="text" placeholder="Enter Website link" ref={node => { websitelink = node; }}></input>
                      </div>
                      <div className="form-group">
                      <input className="form-control" type="number" placeholder="Enter Mobile No." ref={node => { mobileno = node; }}></input>
                      </div>
                      <div className="form-group">
                      <input className="form-control" type="number" placeholder="Enter Alt Mobile No." ref={node => { altmobileno = node; }}></input>
                      </div>
                      <div className="form-group">
                      <input className="form-control" type="email" placeholder="Enter Email Id" ref={node => { emailid = node; }}></input>
                      </div>
                      <div className="form-group">
                      <input className="form-control" type="email" placeholder="Enter Alt Email Id" ref={node => { altemailid = node; }}></input>
                      </div>
                      <div className="form-group">
                      <input className="form-control" type="text" placeholder="Enter Address1" ref={node => { address1 = node; }}></input>
                      </div>
                      <div className="form-group">
                      <input className="form-control" type="text" placeholder="Enter Address2" ref={node => { address2 = node; }}></input>
                      </div>
                      <div className="form-group">
                      <input className="form-control" type="text" placeholder="Enter Country" ref={node => { country = node; }}></input>
                      </div>
                      <div className="form-group">
                      <input className="form-control" type="text" placeholder="Enter State" ref={node => { input2 = node; }}></input>
                      </div>
                      <div className="form-group">
                      <input className="form-control" type="text" placeholder="Enter City" ref={node => { city = node; }}></input>
                      </div>
                      <div className="form-group">
                      <input className="form-control" type="number" placeholder="Enter PINCODE" ref={node => { pincode = node; }}></input>
                      </div>
                      <div className="modal-footer">
                        <input
                          type="button"
                          className="btn btn-default"
                          data-dismiss="modal"
                          value="Cancel"
                        />
                        <button className="btn btn-info px-5 my-2" type="submit">Submit</button>
                      </div>
                    </div>
                  </form>
              </div>
            </div>
          </div>




          {/* <!-- Edit Modal HTML --> */}
          <div id="editEmployeeModal" className="modal fade">
            <div className="modal-dialog">
              <div className="modal-content">

              <form onSubmit={e => {
                    e.preventDefault();
                    updateCompany({ variables: { textU: inputU.value,text2U: input2U.value,categoryU: categoryU.value, gstinU: gstinU.value, noofuserU: noofuserU.value, websitelinkU: websitelinkU.value, regdateU: regdateU.value, mobilenoU: mobilenoU.value, altmobilenoU: altmobilenoU.value, emailidU: emailidU.value, altemailidU: altemailidU.value, address1U: address1U.value, address2U: address2U.value, countryU: countryU.value, cityU: cityU.value, pincodeU: pincodeU.value
                    } });
                    inputU.value = '';
                    input2U.value = '';
                    companyplaceU='';
                    window.location.reload();
                  }}>
                    <div className="modal-header">
                      <h4 className="modal-title">Edit Company</h4>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-hidden="true"
                      >
                      &times;
                      </button>
                    </div>
                    <div className="modal-body">   
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Company" 
                          required
                          ref={node => { inputU = node; }}
                        ></input>
                      </div>
                      <div className="form-group">
                      <input className="form-control" required type="date" placeholder="Enter Reg Date" ref={node => { regdateU = node; }}></input>
                      </div>
                      <div className="form-group">
                      <input className="form-control" type="text" placeholder="Enter Category" ref={node => { categoryU = node; }}></input>
                      </div>
                      <div className="form-group">
                      <input className="form-control" type="text" placeholder="Enter GSTIN" ref={node => { gstinU = node; }}></input>
                      </div>
                      <div className="form-group">
                      <input className="form-control" type="number" placeholder="Enter No of User" ref={node => { noofuserU = node; }}></input>
                      </div>
                      <div className="form-group">
                      <input className="form-control" type="text" placeholder="Enter Website link" ref={node => { websitelinkU = node; }}></input>
                      </div>
                      <div className="form-group">
                      <input className="form-control" type="number" placeholder="Enter Mobile No." ref={node => { mobilenoU = node; }}></input>
                      </div>
                      <div className="form-group">
                      <input className="form-control" type="number" placeholder="Enter Alt Mobile No." ref={node => { altmobilenoU = node; }}></input>
                      </div>
                      <div className="form-group">
                      <input className="form-control" type="email" placeholder="Enter Email Id" ref={node => { emailidU = node; }}></input>
                      </div>
                      <div className="form-group">
                      <input className="form-control" type="email" placeholder="Enter Alt Email Id" ref={node => { altemailidU = node; }}></input>
                      </div>
                      <div className="form-group">
                      <input className="form-control" type="text" placeholder="Enter Address1" ref={node => { address1U = node; }}></input>
                      </div>
                      <div className="form-group">
                      <input className="form-control" type="text" placeholder="Enter Address2" ref={node => { address2U = node; }}></input>
                      </div>
                      <div className="form-group">
                      <input className="form-control" type="text" placeholder="Enter Country" ref={node => { countryU = node; }}></input>
                      </div>
                      <div className="form-group">
                      <input className="form-control" type="text" placeholder="Enter State" ref={node => { input2U = node; }}></input>
                      </div>
                      <div className="form-group">
                      <input className="form-control" type="text" placeholder="Enter City" ref={node => { cityU = node; }}></input>
                      </div>
                      <div className="form-group">
                      <input className="form-control" type="number" placeholder="Enter PINCODE" ref={node => { pincodeU = node; }}></input>
                      </div>
                      <div className="modal-footer">
                        <input
                          type="button"
                          className="btn btn-default"
                          data-dismiss="modal"
                          value="Cancel"
                        />
                        <button className="btn btn-info px-5 my-2" type="submit">Submit</button>
                      </div>
                    </div>
                  </form>





              </div>
            </div>
          </div>


        </div>
     
      </div>
    );
}

export default CompanyView;
