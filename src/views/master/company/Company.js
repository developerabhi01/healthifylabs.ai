import React, { Component, useState, useEffect} from "react";
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from "graphql-tag";
import { Modal, Button,Form, Row, Col } from "react-bootstrap";
import { Mutation } from "react-apollo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const GET_COMPANY = gql`
  {
    getCompany{
      companyid,
      companyname,
      address1,
      createdate,
      timestamp,
      state,
      category,
      companyshortname,
      email1,
      email2,
      mobile1,
      mobile2,
      numberofuser,
      registrationdate,
      GSTnumber,
    }
  }
`;
  

  
export const CREATE_COMPANY = gql`
mutation createCompany($companyname: String!,$category: String!, $companyshortname: String,$numberofuser: String!, $registrationdate: String, $GSTnumber: String,$email1: String!, $email2: String, $mobile1: String!, $mobile2: String ) {
  createCompany(companyname: $companyname, category: $category, companyshortname: $companyshortname,numberofuser: $numberofuser, registrationdate: $registrationdate, GSTnumber: $GSTnumber,email1: $email1, email2: $email2,mobile1: $mobile1, mobile2: $mobile2)
}
`;









// export const CREATE_COMPANY = gql`
// mutation createCompany($text: String!, $text2: String,$gstin: String,$category: String!, $noofuser: String,$websitelink: String!, $regdate: String, $mobileno: String,$altmobileno: String!, $emailid: String,$altemailid: String!, $address1: String,$address2: String!, $country: String,$city: String!, $pincode: String
//   ) {
//   createCompany(companyname: $text, state: $text2,GSTnumber: $gstin,category: $category, numberofuser: $noofuser,websitelink: $websitelink, registrationdate: $regdate, mobile1: $mobileno,mobile2: $altmobileno, email1: $emailid,email2: $altemailid, address1: $address1,address2: $address2, country: $country,city: $city, PIN: $pincode
//   )
// }
// `;





export const UPDATE_COMPANY = gql`
  mutation updateCompany($companyidU: String, $companynameU: String!, $categoryU: String,
    $numberofuserU: String,  $registrationdateU: String, $GSTnumberU: String, $email1U: String, $email2U: String, $mobile1U: String, $mobile2U: String) {
    updateCompany(companyid: $companyidU, companyname: $companynameU, category: $categoryU,
      numberofuser: $numberofuserU,registrationdate: $registrationdateU,GSTnumber: $GSTnumberU,email1: $email1U,email2: $email2U,mobile1: $mobile1U,mobile2: $mobile2U)
  }
`;

const CompanyView = (props) =>  {

  let companyname, category, companyshortname, numberofuser, registrationdate, GSTnumber, email1, email2, mobile1, mobile2;

  let companyidU, companynameU, categoryU, companyshortnameU, numberofuserU, registrationdateU, GSTnumberU, email1U, email2U, mobile1U, mobile2U;

  const [showModal, setShow] = useState(false);
  const [dataset, setdataset] = useState({});
  const [disabled, setDisabled] = useState(true);
  const [showModalAdd, setShowAdd] = useState(false);
 
  const [createCompany] = useMutation(CREATE_COMPANY);
  const [updateCompany] = useMutation(UPDATE_COMPANY);

  const { data, loading, error } = useQuery(GET_COMPANY);
  if (loading) return <p>loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

 
  let data1 = data.getCompany

  const handleRemovedisabled = () => {
    setDisabled(!disabled);
  }

  const handleClose = () => { setShow(false); 
  }
  const handleShow = (ee) => { 
    setShow(true); 
    setdataset(ee)
  }

  const handleShowAdd = (ee) => { 
    setShowAdd(true); 
    setdataset({})
  }

  const handleCloseAdd = () => { setShowAdd(false); 
  }

  
    return (
      <div className="section">





            <div className="container">
              <div className="table-title">
                  <div className="row">
                    <div className="col-sm-10">
                      <h2>Master Company</h2>
                    </div>
                  <div className="col-sm-2">
                  <button
                    type="button"
                    onClick={({ev}) => handleShowAdd(ev)}
                    className="btn btn-primary add-new">
                    <i className="fa fa-plus"></i> Add New
                  </button>
                  </div>
                </div>
              </div>        
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Company Id</th>
                    <th>Company Name</th>
                    <th>Email</th>
                    <th>Category</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>

                  {data1.map((address, index) => {
                    const tr = "tr" + index;
                    return (
                      <tr style={{color: 'blue'}} onClick={({ev}) => handleShow(address,ev)}>
                      <td >
                        {address.companyid}
                        </td>
                      <td>
                        {address.companyname}
                      </td>
                      <td>
                        {address.category}
                        </td>
                      <td>
                        {address.address1}
                        </td>
                      <td >
                        <i className="fa fa-edit"> </i>                        
                      </td>
                      </tr>
                    );
                  })}


                </tbody>
              </table>
            </div>







          <Modal show={showModal} onHide={handleClose}>
           
            <Modal.Header closeButton>
              <Modal.Title>
                Edit Company
              </Modal.Title>
            </Modal.Header>

              <form onSubmit={e => {
              e.preventDefault();
              updateCompany({ variables: { companyidU: companyidU.value, 
              companynameU: companynameU.value, 
              categoryU: categoryU.value,
              companyshortnameU: companyshortnameU.value,
              numberofuserU: numberofuserU.value,
              registrationdateU: registrationdateU.value,
              GSTnumberU: GSTnumberU.value,
              email1U: email1U.value,
              email2U: email2U.value,
              mobile1U: mobile1U.value,
              mobile2U: mobile2U.value,
              } });
              companyidU.value = '';
              companynameU.value = '';
              categoryU.value = '';
              window.location.reload();
              }}>

              <Modal.Body>


              <Form.Control type="number" placeholder="Last name"  ref={node => { companyidU = node; }} defaultValue={dataset.companyid} hidden/>

              <Form.Row classname="mb-3">
                <Col>
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control  type="text" defaultValue={dataset.companyname}
                  ref={node => { companynameU = node; }} 
                  placeholder="Company name" disabled={disabled}
                  />
                </Col>
                <Col>
                  <Form.Label>Category</Form.Label>
                  <Form.Control type="text" placeholder=" Category" ref={node => { categoryU = node; }} defaultValue={dataset.category} disabled={disabled}/>
                </Col>
              </Form.Row>


              <Form.Row classname="mb-3">
                <Col>
                  <Form.Label>Company ShortName</Form.Label>
                  <Form.Control  type="text" defaultValue={dataset.companyshortname}
                  ref={node => { companyshortnameU = node; }} 
                  placeholder="Companyshort name" disabled={disabled}
                  />
                </Col>
                <Col>
                  <Form.Label>No of User</Form.Label>
                  <Form.Control type="number" placeholder=" No of User" ref={node => { numberofuserU = node; }} defaultValue={dataset.numberofuser} disabled={disabled}/>
                </Col>
              </Form.Row>


              <Form.Row classname="mb-3">
                <Col>
                  <Form.Label>Registration Date</Form.Label>
                  <Form.Control  type="date" defaultValue={dataset.registrationdate}
                  ref={node => { registrationdateU = node; }} 
                  placeholder="Registration date" disabled={disabled}
                  />
                </Col>
                <Col>
                  <Form.Label>GST Number</Form.Label>
                  <Form.Control type="text" placeholder="GST Number" ref={node => { GSTnumberU = node; }} defaultValue={dataset.GSTnumber} disabled={disabled}/>
                </Col>
              </Form.Row>


              <Form.Row classname="mb-3">
                <Col>
                  <Form.Label>Email</Form.Label>
                  <Form.Control  type="text" defaultValue={dataset.email1}
                  ref={node => { email1U = node; }} 
                  placeholder="Email" disabled={disabled}
                  />
                </Col>
                <Col>
                  <Form.Label>Email2</Form.Label>
                  <Form.Control type="text" placeholder=" Email2" ref={node => { email2U = node; }} defaultValue={dataset.email2} disabled={disabled}/>
                </Col>
              </Form.Row>


              <Form.Row classname="mb-3">
                <Col>
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control  type="text" defaultValue={dataset.mobile1}
                  ref={node => { mobile1U = node; }} 
                  placeholder="Mobile" disabled={disabled}
                  />
                </Col>
                <Col>
                  <Form.Label>Mobile 2</Form.Label>
                  <Form.Control type="text" placeholder="Mobile 2" ref={node => { mobile2U = node; }} defaultValue={dataset.mobile2} disabled={disabled}/>
                </Col>
              </Form.Row>


              </Modal.Body>

              <Modal.Footer>

                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
                {
                  disabled
                    ? <button className="btn btn-primary px-5 my-2" onClick={handleRemovedisabled} type="button">Edit</button>
                    : null
                }

                {
                  disabled
                    ? null
                    : <button className="btn btn-success px-5 my-2" type="submit">Save</button>
                }
                      
              </Modal.Footer>
	          </form>

          </Modal>


          


        <Modal show={showModalAdd} onHide={handleCloseAdd}>

            <Modal.Header closeButton>
            <Modal.Title>
              Add Company
            </Modal.Title>
            </Modal.Header>

            <form onSubmit={e => {
            e.preventDefault();
            createCompany({ variables: { companyname: companyname.value, 
            category: category.value,
            companyshortname: companyshortname.value,
            numberofuser: numberofuser.value,
            registrationdate: registrationdate.value,
            GSTnumber: GSTnumber.value,
            email1: email1.value,
            email2: email2.value,
            mobile1: mobile1.value,
            mobile2: mobile2.value,
            } });
            companyname.value = '';
            category.value = '';
            window.location.reload();
            }}>

            <Modal.Body>


            <Form.Row classname="mb-3">
              <Col>
                <Form.Label>Company Name</Form.Label>
                <Form.Control  type="text" defaultValue={dataset.companyname}
                ref={node => { companyname = node; }} 
                placeholder="Company name" 
                />
              </Col>
              <Col>
                <Form.Label>Category</Form.Label>
                <Form.Control type="text" placeholder=" Category" ref={node => { category = node; }} defaultValue={dataset.category} />
              </Col>
            </Form.Row>


            <Form.Row classname="mb-3">
              <Col>
                <Form.Label>Company ShortName</Form.Label>
                <Form.Control  type="text" defaultValue={dataset.companyshortname}
                ref={node => { companyshortname = node; }} 
                placeholder="Companyshort name" 
                />
              </Col>
              <Col>
                <Form.Label>No of User</Form.Label>
                <Form.Control type="number" placeholder=" No of User" ref={node => { numberofuser = node; }} defaultValue={dataset.numberofuser} />
              </Col>
            </Form.Row>


            <Form.Row classname="mb-3">
              <Col>
                <Form.Label>Registration Date</Form.Label>
                <Form.Control  type="date" defaultValue={dataset.registrationdate}
                ref={node => { registrationdate = node; }} 
                placeholder="Registration date" 
                />
              </Col>
              <Col>
                <Form.Label>GST Number</Form.Label>
                <Form.Control type="text" placeholder="GST Number" ref={node => { GSTnumber = node; }} defaultValue={dataset.GSTnumber} />
              </Col>
            </Form.Row>


            <Form.Row classname="mb-3">
              <Col>
                <Form.Label>Email</Form.Label>
                <Form.Control  type="text" defaultValue={dataset.email1}
                ref={node => { email1 = node; }} 
                placeholder="Email" 
                />
              </Col>
              <Col>
                <Form.Label>Email2</Form.Label>
                <Form.Control type="text" placeholder=" Email2" ref={node => { email2 = node; }} defaultValue={dataset.email2} />
              </Col>
            </Form.Row>


            <Form.Row classname="mb-3">
              <Col>
                <Form.Label>Mobile</Form.Label>
                <Form.Control  type="text" defaultValue={dataset.mobile1}
                ref={node => { mobile1 = node; }} 
                placeholder="Mobile" 
                />
              </Col>
              <Col>
                <Form.Label>Mobile 2</Form.Label>
                <Form.Control type="text" placeholder="Mobile 2" ref={node => { mobile2 = node; }} defaultValue={dataset.mobile2} />
              </Col>
            </Form.Row>


            </Modal.Body>

            <Modal.Footer>

              <Button variant="secondary" onClick={handleCloseAdd}>
              Close
              </Button>
              <button className="btn btn-success px-5 my-2" type="submit">Add</button>
            </Modal.Footer>
            </form>


        </Modal>












        {/* </div> */}

     
      </div>
    );
}

export default CompanyView;
