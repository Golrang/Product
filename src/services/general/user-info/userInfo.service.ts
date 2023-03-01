export const getUserInfo = () => {
  const userInfo =
    process.env.NODE_ENV == 'development'
      ? {
          CompanyID: '445',
          WorkPlaceId: '4',
          userEmail: 'safavi.somaye@golrang.com',
          userFarsiName: 'سیده سمیه صفوی',
          userNameId: '1278',
          employeeId: '9866',
          userPersonelCode: '10801',
          nCode: '0310502861',
          displayName: 'Safavi, Somaye (GIG)',
          companyName: 'گلرنگ سیستم',
          DName: 'توسعه شیرپوینت',
          PRole: 'کارشناس توسعه'

        }
      : {
          CompanyID: sessionStorage.getItem('CompanyID'),
          WorkPlaceId: sessionStorage.getItem('WPID'),
          userEmail: sessionStorage.getItem('PEmail'),
          userFarsiName: sessionStorage.getItem('PFName'),
          userNameId: sessionStorage.getItem('USID'),
          employeeId: sessionStorage.getItem('EID'),
          companyName: sessionStorage.getItem('CName'),
          engName: sessionStorage.getItem('PDisplayName'),
          userPersonelCode: sessionStorage.getItem('PID'),
          nCode: sessionStorage.getItem('NCode'),
          displayName: sessionStorage.getItem('PDisplayName'),
          DName: sessionStorage.getItem('DName'),
          PRole: sessionStorage.getItem('PRole'),
        };

  return { userInfo };
};