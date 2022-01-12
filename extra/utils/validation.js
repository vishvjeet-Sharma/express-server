const users = [
    {
      traineeEmail: "shubham@successive.tech",
      reviewerEmail: "reviewer1@successive.tech",
    },
    {
      traineeEmail: "anurag@successive.tech",
      reviewerEmail: "reviewer2@successive.tech",
    },
    {
      traineeEmail: "parmeet@successive.tech",
      reviewerEmail: "reviewer3@successive.tech",
    },
    {
      traineeEmail: "abc@gmail.tech",
      reviewerEmail: "abc@gmail.com",
    },
  ];
  
  const validateEmail = (email) => {
    var validEmail = /^([a-zA-Z0-9\._]+)@successive.tech/;
    if (validEmail.test(email)) return true;
    else return false;
  };
  
  const validUsers = [];
  const invalidUsers = [];
  
  const validateUsers = (users) => {
      users.forEach(element => {
          const { traineeEmail } = element;
          const { reviewerEmail } = element;
          validateEmail(traineeEmail) == true ? validUsers.push(traineeEmail) : invalidUsers.push(traineeEmail)
          validateEmail(reviewerEmail) == true ? validUsers.push(reviewerEmail) : invalidUsers.push(reviewerEmail)
      });
  };
  
  validateUsers(users)
  console.log('Valid Users: ');
  validUsers.forEach(element => {
    console.log(element)
  });
  console.log('No. of valid users: ', validUsers.length);
  console.log('Invalid Users: ');
  invalidUsers.forEach(element => {
    console.log(element);
  });
  console.log('No. of Invalid users: ', invalidUsers.length);