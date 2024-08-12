
   export const setAuthentication = (name,value) => {
    sessionStorage?.setItem(name,JSON?.stringify(value));
   }
  
export const getAuthentication = () => {
    return JSON?.parse(sessionStorage?.getItem('user'));
   }
  
  