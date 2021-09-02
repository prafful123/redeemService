function rewardsService( customerAccountNumber, portfolio, eligibilityService ) {
    
	if(customers.indexOf(customerAccountNumber) !== -1){
		if(eligibilityService[customerAccountNumber].length != 0){
			res = channels[portfolio];
		}else{
			res = response['CUSTOMER_INELIGIBLE'];
		};
	}else{
		res = response['INVALID_ACCOUNT_NUMBER_EXCEPTION'];
	};
	
    return {
        data: [res],
    }
}

let customers, channels, eligibilityService, response;

customers = [
	"ac0001",
	"ac0002",
	"ac0003",
	"ac0004",
	"ac0005"
];
channels = {
				"SPORTS" : "CHAMPIONS_LEAGUE_FINAL_TICKET",
				"KIDS" : "N/A",
				"MUSIC" : "KARAOKE_PRO_MICROPHONE",
				"NEWS" : "N/A",
				"MOVIES" : "PIRATES_OF_THE_CARIBBEAN_COLLECTION"
			};
eligibilityService = {
	"ac0001":["SPORTS","MUSIC"],
	"ac0002":["KIDS"],
	"ac0003":["NEWS"],
	"ac0004":["MOVIES"],
	"ac0005":[]
};
response = {
	"CUSTOMER_INELIGIBLE" : "No rewards",
	"TECHNICAL_FAILURE_EXCEPTION" : "No rewards",
	"INVALID_ACCOUNT_NUMBER_EXCEPTION" : "The account number is invalid"
}

var result = rewardsService( "ac0001", "MUSIC", eligibilityService );

console.log(result);