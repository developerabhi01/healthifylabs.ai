import { gql } from 'apollo-boost';

export const GET_USERS = gql`
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

export const VIEW_USERS = gql`
  query ($companyid: Int){
      getCompanyInfo(companyid:5){
        companyid,
        companyname
      }
  }
`;

export const ADD_USER = gql`
  mutation($companyname: String, $address1: String, $state: String) {
    createCompany (companyname: $companyname, address1: $address1, state: $state)
  }
`;

export const EDIT_USER = gql`
  mutation($companyid: Int, $companyname: String) {
    updateCompanyInfo (companyid: $companyid, companyname: $companyname)
  }
`;

export const DELETE_USER = gql`
  mutation($companyid: Int) {
    deleteUser(companyid: $companyid)
  }
`
