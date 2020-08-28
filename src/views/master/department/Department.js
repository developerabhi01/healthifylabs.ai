import React, { Component } from "react";
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from "graphql-tag";


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



const Department = (props) =>  {

  let inputU,text2U,input,text2;

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


    // const fields = ['companyid','companyname','address1', 'createdate', 'timestamp']
    console.log("log")

    return (
      <div className="section">
        <div id="container" className="container">
          <div className="border-card">
            <div className="table-wrapper table-responsive">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-10">
                    <h2>Department</h2>
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
                    <th scope="col">Department Id</th>
                    <th scope="col">Department Name</th>
                    {/* <th scope="col">Edit</th> */}
                </thead>
                <tbody>
                  {data1.map((address, index) => {
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
                    createCompany({ variables: { input: input.value,text2: text2.value
                    } });
                    input.value = '';
                    text2.value = '';
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
                          placeholder="Enter Department" 
                          required
                          ref={node => { input = node; }}
                        ></input>
                      </div>
                      <div className="form-group">
                      <input className="form-control" required type="text" placeholder="Enter Department Details" ref={node => { text2 = node; }}></input>
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
                    updateCompany({ variables: { inputU: inputU.value,text2U: text2U.value } });
                    inputU.value = '';
                    text2U.value = '';
                    window.location.reload();
                  }}>
                    <div className="modal-header">
                      <h4 className="modal-title">Edit Department</h4>
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
                          placeholder="Enter Department" 
                          required
                          ref={node => { inputU = node; }}
                        ></input>
                      </div>
                      <div className="form-group">
                      <input className="form-control" type="text" placeholder="Enter Department Details" ref={node => { text2U = node; }}></input>
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

export default Department;
