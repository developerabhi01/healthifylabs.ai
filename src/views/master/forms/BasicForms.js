// import React from 'react'
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCardFooter,
//   CCardHeader,
//   CCol,
//   CCollapse,
//   CDropdownItem,
//   CDropdownMenu,
//   CDropdownToggle,
//   CFade,
//   CForm,
//   CFormGroup,
//   CFormText,
//   CValidFeedback,
//   CInvalidFeedback,
//   CTextarea,
//   CInput,
//   CInputFile,
//   CInputCheckbox,
//   CInputRadio,
//   CInputGroup,
//   CInputGroupAppend,
//   CInputGroupPrepend,
//   CDropdown,
//   CInputGroupText,
//   CLabel,
//   CSelect,
//   CRow
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'

// import Tables from '../tables/Tables'
// import { Card, CardBody, CardHeader, CardSubtitle, Spinner } from 'reactstrap';
// import gql from "graphql-tag";


// const BasicForms = () => {
//   const [collapsed, setCollapsed] = React.useState(true)
//   const [showElements, setShowElements] = React.useState(true)

//   return (
//     <>

//     <CForm>
//       <CRow>
//       <CCol xs="12" sm="17">
//           <CCard>
//             <CCardHeader>
//               Master Company
//             </CCardHeader>
//             <CCardBody>
//             <CFormGroup row className="my-0">
//               <CCol xs="6">
//               <CFormGroup>
//                 <CLabel htmlFor="company">Company Name</CLabel>
//                 <CInput id="company" placeholder="Enter your company name" />
//               </CFormGroup>
//               </CCol>
//               <CCol xs="6">
//               <CFormGroup>
//                 <CLabel htmlFor="vat">GSTIN</CLabel>
//                 <CInput id="vat" placeholder="GTSIN" />
//                 </CFormGroup>
//                 </CCol>
//               </CFormGroup>
//               <CFormGroup row className="my-0">
//               <CCol xs="6">
//               <CFormGroup>
//                 <CLabel htmlFor="company">Company Place</CLabel>
//                 <CInput id="company" placeholder="Enter your company place" />
//                 </CFormGroup>
//                 </CCol>
//               <CCol xs="6">
//               <CFormGroup>
//                 <CLabel htmlFor="vat">Category</CLabel>
//                 <CInput id="vat" placeholder="Enter Category" />
//                 </CFormGroup>
//                 </CCol>
//               </CFormGroup>
//               <CFormGroup row className="my-0">
//               <CCol xs="6">
//               <CFormGroup>
//                 <CLabel htmlFor="company">Number of Users</CLabel>
//                 <CInput id="company" placeholder="" />
//                 </CFormGroup>
//                 </CCol>
//               <CCol xs="6">
//               <CFormGroup>
//                 <CLabel htmlFor="vat">Website Link</CLabel>
//                 <CInput id="vat" placeholder="" />
//                 </CFormGroup>
//                 </CCol>
//               </CFormGroup>
//               <CFormGroup row className="my-0">
//               <CCol xs="6">
//               <CFormGroup>
//                 <CLabel htmlFor="company">Reg. Date</CLabel>
//                 <CInput id="company" placeholder="ex: 787898" />
//                 </CFormGroup>
//                 </CCol>
//               <CCol xs="6">
//               <CFormGroup>
//                 <CLabel htmlFor="vat">Company SName</CLabel>
//                 <CInput id="vat" placeholder="Enter your Company Sname" />
//                 </CFormGroup>
//                 </CCol>
//               </CFormGroup>
//               <CFormGroup row className="my-0">
//               <CCol xs="10">
//               <CFormGroup>
//                 <CLabel htmlFor="vat">Address</CLabel>
//                 <CInput id="vat" placeholder="Building No" /> 
//                 <CInput id="vat" placeholder="Landmark" />
//                 <CInput id="vat" placeholder="Landmark" />
//                 </CFormGroup>
//                 </CCol>
//               </CFormGroup>
//               <CFormGroup>
//               <CCol xs="5">
//               <CFormGroup row className="my-0">
//                 <CLabel htmlFor="company">Mobile No.</CLabel>
//                 <CInput id="company" placeholder="+91" />
//                 </CFormGroup>
//                 </CCol>
//               <CFormGroup>
//               <CCol xs="5">
//               <CFormGroup row className="my-0">
//                 <CLabel htmlFor="company">Alt Mobile No.</CLabel>
//                 <CInput id="company" placeholder="+91" />
//                 </CFormGroup>
//                 </CCol>
//               <CCol xs="6">
//               <CFormGroup row className="my-0">
//                 <CLabel htmlFor="vat">Email ID</CLabel>
//                 <CInput type="email" id="input2-group1" name="input2-group1" placeholder="Email" />
//                 </CFormGroup>
//                 </CCol>
//               </CFormGroup>
//             </CFormGroup>
//             </CCardBody>
//             <CCardFooter>
//               <CButton type="submit" size="5" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton> <CButton type="reset" size="5" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
//             </CCardFooter>
//           </CCard>
//         </CCol>
//         </CRow>
//       </CForm>

//       {/* <Tables data = {data1}/> */}

//     </>
//   )
// }

// export default BasicForms





             
import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from "graphql-tag";
import EnhancedTable from '../tables/Tables'

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


// const REMOVE_TODO = gql`
//   mutation RemoveTodo($id: String!) {
//     removeTodo(id: $id)
//   }
// `;

// const UPDATE_TODO = gql`
//   mutation UpdateTodo($id: String!) {
//     updateTodo(id: $id)
//   }
// `;



function BasicForms() {
  let input,input2,companyplace,gstin,category,noofuser,websitelink,regdate,companysname,mobileno,altmobileno,emailid,altemailid,address1,address2,country,city,pincode;
  const { data, loading, error } = useQuery(GET_COMPANY);
  // const [deleteTodo] = useMutation(REMOVE_TODO);
  // const [updateTodo] = useMutation(UPDATE_TODO);

  const [createCompany] = useMutation(CREATE_COMPANY);

  if (loading) return <p>loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  let data1 = data.getCompany
  
  return (
    <div className="app">
      <h3>Company</h3>
      {/* <form onSubmit={e => {
        e.preventDefault();
        createTodo({ variables: { text: input.value } });
        input.value = '';
        window.location.reload();
      }}>
        <input className="form-control" type="text" placeholder="Enter todo" ref={node => { input = node; }}></input>
        <button className="btn btn-primary px-5 my-2" type="submit">Submit</button>
      </form>
      <ul>
        {data.todos.map((todo) =>
          <li key={todo.id} className="w-100">
            <span className={todo.completed ? "done" : "pending"}>{todo.text}</span>
            <button className="btn btn-sm btn-danger rounded-circle float-right" onClick={() => {
              deleteTodo({ variables: { id: todo.id } });
              window.location.reload();
            }}>X</button>
            <button className={`btn btn-sm float-right ${todo.completed ? "btn-success" : "btn-info"}`} onClick={() => {
              updateTodo({ variables: { id: todo.id } });
              window.location.reload();
            }}>{todo.completed ? <span>Completed</span> : <span>Not completed</span>}</button>
          </li>
        )}
      </ul> */}




      {/* <form onSubmit={e => {
        e.preventDefault();
        createCompany({ variables: { text: input.value,text2: input2.value,category: category.value, gstin: gstin.value, noofuser: noofuser.value, websitelink: websitelink.value, regdate: regdate.value, mobileno: mobileno.value, altmobileno: altmobileno.value, emailid: emailid.value, altemailid: altemailid.value, address1: address1.value, address2: address2.value, country: country.value, city: city.value, pincode: pincode.value
        } });
        input.value = '';
        input2.value = '';
        companyplace='';
        window.location.reload();
      }}>
        <input className="form-control" type="text" placeholder="Enter companyname" ref={node => { input = node; }}></input>
        <input className="form-control" type="text" placeholder="Enter Category" ref={node => { category = node; }}></input>
        <input className="form-control" type="text" placeholder="Enter GSTIN" ref={node => { gstin = node; }}></input>
        <input className="form-control" type="text" placeholder="Enter No of User" ref={node => { noofuser = node; }}></input>
        <input className="form-control" type="text" placeholder="Enter Website link" ref={node => { websitelink = node; }}></input>
        <input className="form-control" type="date" placeholder="Enter Reg Date" ref={node => { regdate = node; }}></input>
        <input className="form-control" type="text" placeholder="Enter Mobile No." ref={node => { mobileno = node; }}></input>
        <input className="form-control" type="text" placeholder="Enter Alt Mobile No." ref={node => { altmobileno = node; }}></input>
        <input className="form-control" type="text" placeholder="Enter Email Id" ref={node => { emailid = node; }}></input>
        <input className="form-control" type="text" placeholder="Enter Alt Email Id" ref={node => { altemailid = node; }}></input>
        <input className="form-control" type="text" placeholder="Enter Address1" ref={node => { address1 = node; }}></input>
        <input className="form-control" type="text" placeholder="Enter Address2" ref={node => { address2 = node; }}></input>
        <input className="form-control" type="text" placeholder="Enter Country" ref={node => { country = node; }}></input>
        <input className="form-control" type="text" placeholder="Enter State" ref={node => { input2 = node; }}></input>
        <input className="form-control" type="text" placeholder="Enter City" ref={node => { city = node; }}></input>
        <input className="form-control" type="text" placeholder="Enter PINCODE" ref={node => { pincode = node; }}></input>
        <button className="btn btn-primary px-5 my-2" type="submit">Submit</button>
      </form> */}


      {/* <ul>
        {data.getCompany.map((todo) =>
          <li key={todo.companyid} className="w-100">
            <span className={todo.completed ? "done" : "pending"}>{todo.companyname}</span>
             <button className="btn btn-sm btn-danger rounded-circle float-right" onClick={() => {
              deleteTodo({ variables: { id: todo.id } });
              window.location.reload();
            }}>X</button>
            <button className={`btn btn-sm float-right ${todo.completed ? "btn-success" : "btn-info"}`} onClick={() => {
              updateTodo({ variables: { id: todo.id } });
              window.location.reload();
            }}>{todo.completed ? <span>Completed</span> : <span>Not completed</span>}</button>
          </li>
        )}
      </ul> */}
      <EnhancedTable data = {data1}/>

    </div>
  );
}

export default BasicForms;

