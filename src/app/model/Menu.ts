export class Menu {
    public static menu: Array<any> = [
      
      {
        accounthead: [  
          {path: "approvedlist", title:"APPROVE", icon: "pe-7s-graph", class: "" },
          {path: "emi", title:"EMI-LIST", icon: "pe-7s-graph", class: "" }
      ],
      dvofficer: [
        {path: "approved-app", title:"approved-app", icon: "pe-7s-graph", class: "" },
        {path: "upload-document", title:"UPLOAD-DOCUMENT", icon: "pe-7s-graph", class: "" }
  
    ],
  
    operation:[
      {path: "allaplist", title:"ALL-Application", icon: "pe-7s-graph", class: "" },
      
    ],
    selsexcutive:[
        {path:"all-app-list",title:"ALL-APPLICATION", icon: "pe-7s-graph", class: "" },
        {path:"all-approved-list",title:"ALL-APPROVED", icon: "pe-7s-graph", class: "" },
        {path:"new-loan-form",title:"NEW-ENQUIRY-FORM", icon: "pe-7s-graph", class: "" },
        {path:"new-enquiry-form",title:"NEW_ENQUIRY", icon: "pe-7s-graph", class: "" },
        {path: "enquiry-form",title:"NEW-APPLICATION", icon: "pe-7s-graph", class: "" }


      ],
      cr:[{path: "credit", title:"APPROVE-LIST", icon: "pe-7s-graph", class: "" },

      ],
      ledger:[{path: "abcdash", title:"DASHBOARD", icon: "pe-7s-graph", class: "" }],

      apnaloan:[{
        path:"apnalist", title:"APANALIST", icon:"pe-7s-graph", class:"" },
        {path:"apnadetails" , title:"APANADETAILS", icon:"pe-7s-graph", class:""}
      
    ],
    employee:[{
      path:"add-emp",title:"ADD-EMPLOYEE", icon:"pe-7s-graph", class:"" },
      {path:"emp-list", title:"EMPLOYEE-LIST", icon:"pe-7s-graph", class:""
    }]

      }
    ];
    menuItems: any;
    
  }
  