# RewardService Function

Passing 3 parameterss for the rewardService function
1) AccountNumber
2) Portfolio
3) Eligibility 

created static account numbers i,e  customers object
created static portfolo i,e channels object
created elgibilityService function for mapping 
created static response object i,e response

mapping customer account number and portfolio manually  in elgibilityService  function 

Test Cases
 First check account number is valid or not valid
    1) if valid then proceed for next 
     1.1) if valid then checks the given account number in elgibilityService function 
      1.1.1) if empty then shows 'No Rewards'
      1.1.2) if not empty then shows appropriate channel i,e specific Reward
    2) if not valid then returns 'INVALID_ACCOUNT_NUMBER_EXCEPTION' message
 
   To Execute
redirect to source folder --> cmd prompt > type  "node redeemService.js"